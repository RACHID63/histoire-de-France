import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { BLED_ERAS } from '../data/bledEras';
import { ALL_BLED_ENTRIES, getEraMeta } from '../data/bledSommaire';
import type { EraId } from '../data/bledTypes';
import { useSpeechReader } from '../hooks/useSpeechReader';
import { HistoricalPlate } from './HistoricalPlate';
import { SpeakButton } from './SpeakButton';

interface BledTimelineViewProps {
  onOpenEntry: (entryId: string) => void;
  onBackToSummary: () => void;
}

export function BledTimelineView({ onOpenEntry, onBackToSummary }: BledTimelineViewProps) {
  const [selectedEra, setSelectedEra] = useState<'all' | EraId>('all');
  const [selectedEntryId, setSelectedEntryId] = useState<string>(ALL_BLED_ENTRIES[1].id);

  const milestoneEntries = useMemo(() => {
    const base =
      selectedEra === 'all'
        ? ALL_BLED_ENTRIES
        : ALL_BLED_ENTRIES.filter((e) => e.eraId === selectedEra);
    return base;
  }, [selectedEra]);

  const activeEntry =
    milestoneEntries.find((e) => e.id === selectedEntryId) ?? milestoneEntries[0];
  const activeEra = getEraMeta(activeEntry.eraId);

  const speech = useSpeechReader();
  const { stop: stopSpeech } = speech;

  useEffect(() => {
    stopSpeech();
  }, [activeEntry.id, stopSpeech]);

  return (
    <section className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 lg:py-10">
      <header className="mb-8 border-b border-[#DDD5C5] pb-6">
        <p className="text-xs font-semibold tracking-wider text-[#5B328A] uppercase">
          Chronologie intégrale · 5 grandes périodes
        </p>
        <h1 className="font-display mt-2 text-3xl font-bold text-[#1C1917] sm:text-4xl [text-wrap:balance]">
          Frise chronologique des 149 doubles-pages
        </h1>
        <p className="mt-2 max-w-2xl text-base text-[#44403C]">
          Parcourez la succession des événements et des portraits historiques selon le découpage du
          manuel, puis ouvrez directement la double page correspondante.
        </p>

        <div
          className="mt-6 flex flex-wrap items-center gap-1.5"
          role="group"
          aria-label="Filtrer par période"
        >
          <button
            type="button"
            onClick={() => {
              setSelectedEra('all');
              setSelectedEntryId(ALL_BLED_ENTRIES[0].id);
            }}
            className={`border px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
              selectedEra === 'all'
                ? 'border-[#5B328A] bg-[#5B328A] text-white'
                : 'border-[#DDD5C5] bg-white text-[#44403C] hover:border-[#5B328A]'
            }`}
          >
            Toutes ({ALL_BLED_ENTRIES.length})
          </button>
          {BLED_ERAS.map((era) => {
            const active = selectedEra === era.id;
            return (
              <button
                key={era.id}
                type="button"
                onClick={() => {
                  setSelectedEra(era.id);
                  const first = ALL_BLED_ENTRIES.find((e) => e.eraId === era.id);
                  if (first) setSelectedEntryId(first.id);
                }}
                style={
                  active
                    ? { backgroundColor: era.accentHex, borderColor: era.accentHex, color: '#FFFFFF' }
                    : { borderColor: '#DDD5C5' }
                }
                className={`border px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  active ? '' : 'bg-white text-[#292524] hover:bg-[#FAF8F2]'
                }`}
              >
                {era.title}
              </button>
            );
          })}
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Liste chronologique scrollable */}
        <div className="lg:col-span-5">
          <ol className="max-h-[680px] divide-y divide-[#EAE3D5] overflow-y-auto border border-[#D6CEBE] bg-white">
            {milestoneEntries.map((item) => {
              const era = getEraMeta(item.eraId);
              const isSelected = item.id === activeEntry.id;

              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedEntryId(item.id)}
                    style={
                      isSelected
                        ? { backgroundColor: era.accentHex, color: '#FFFFFF' }
                        : undefined
                    }
                    className={`flex w-full items-baseline justify-between gap-3 px-4 py-3 text-left transition-colors ${
                      isSelected ? '' : 'text-[#1C1917] hover:bg-[#FAF8F2]'
                    }`}
                  >
                    <div className="min-w-0">
                      <span
                        style={!isSelected ? { color: era.accentHex } : undefined}
                        className={`block font-mono text-xs font-semibold tabular-nums ${
                          isSelected ? 'text-white/90' : ''
                        }`}
                      >
                        {item.dates}
                      </span>
                      <span className="font-display mt-0.5 block truncate text-sm font-semibold">
                        {item.title}
                      </span>
                    </div>
                    <span
                      className={`shrink-0 font-mono text-xs tabular-nums ${
                        isSelected ? 'text-white/85' : 'text-[#78716C]'
                      }`}
                    >
                      p. {item.page}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Aperçu détaillé de la fiche sélectionnée */}
        <div className="lg:col-span-7">
          <article className="border border-[#D6CEBE] bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E]">
                <span
                  style={{ color: activeEra.accentHex }}
                  className="font-bold uppercase tracking-wide"
                >
                  {activeEra.title}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{activeEntry.dates}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">Pages {activeEntry.page}–{activeEntry.page + 1}</span>
              </div>

              <SpeakButton
                id={`timeline-${activeEntry.id}`}
                text={`${activeEntry.title}, ${activeEntry.dates}. ${activeEntry.subtitle}. ${activeEntry.keyTakeaways[0]}`}
                label="Écouter l’aperçu"
                accentHex={activeEra.accentHex}
                isSupported={speech.isSupported}
                activeId={speech.activeId}
                isPaused={speech.isPaused}
                onToggleSpeak={speech.toggleSpeak}
                onTogglePause={speech.togglePause}
                onStop={speech.stop}
              />
            </div>

            <h2 className="font-display text-2xl font-bold text-[#1C1917] sm:text-3xl">
              {activeEntry.title}
            </h2>
            <p className="mt-2 mb-5 text-base leading-relaxed text-[#44403C]">
              {activeEntry.subtitle}
            </p>

            <HistoricalPlate
              src={activeEntry.image}
              alt={activeEntry.title}
              figureNumber={`Doc. p. ${activeEntry.page + 1}`}
              caption={activeEntry.imageCaption}
              enableZoom
            />

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#E4DCCD] pt-5">
              <p className="max-w-md text-xs leading-relaxed text-[#57534E]">
                {activeEntry.keyTakeaways[0]}
              </p>
              <button
                type="button"
                onClick={() => onOpenEntry(activeEntry.id)}
                style={{ backgroundColor: activeEra.accentHex }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white hover:opacity-95 whitespace-nowrap shrink-0"
              >
                <span>Ouvrir la double page (p. {activeEntry.page})</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </article>
        </div>
      </div>

      <div className="mt-8 flex justify-center border-t border-[#DDD5C5] pt-6">
        <button
          type="button"
          onClick={onBackToSummary}
          className="inline-flex items-center gap-2 border border-[#5B328A] bg-white px-5 py-2.5 text-sm font-medium text-[#5B328A] transition-colors hover:bg-[#5B328A] hover:text-white whitespace-nowrap shrink-0"
        >
          <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Retour au sommaire</span>
        </button>
      </div>
    </section>
  );
}
