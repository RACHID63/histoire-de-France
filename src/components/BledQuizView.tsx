import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, BookOpen, Check, AlertCircle, RotateCcw, Shuffle } from 'lucide-react';
import { BLED_ERAS } from '../data/bledEras';
import { ALL_BLED_ENTRIES, getEraMeta } from '../data/bledSommaire';
import type { EraId } from '../data/bledTypes';
import { useSpeechReader } from '../hooks/useSpeechReader';
import { SpeakButton } from './SpeakButton';

interface BledQuizViewProps {
  answers: Record<string, number>;
  onAnswer: (entryId: string, optionIndex: number) => void;
  onResetAll: () => void;
  onOpenEntry: (entryId: string) => void;
  onBackToSummary: () => void;
}

export function BledQuizView({
  answers,
  onAnswer,
  onResetAll,
  onOpenEntry,
  onBackToSummary,
}: BledQuizViewProps) {
  const [eraFilter, setEraFilter] = useState<'random15' | EraId>('random15');
  const [seed, setSeed] = useState(0);
  const speech = useSpeechReader();
  const { stop: stopSpeech } = speech;

  useEffect(() => {
    stopSpeech();
  }, [eraFilter, seed, stopSpeech]);

  const displayedEntries = useMemo(() => {
    if (eraFilter === 'random15') {
      // Deterministic-ish shuffle seeded by `seed`
      const copy = [...ALL_BLED_ENTRIES];
      let s = seed + 17;
      for (let i = copy.length - 1; i > 0; i--) {
        s = (s * 9301 + 49297) % 233280;
        const j = s % (i + 1);
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy.slice(0, 15);
    }
    return ALL_BLED_ENTRIES.filter((e) => e.eraId === eraFilter);
  }, [eraFilter, seed]);

  const totalAnswered = ALL_BLED_ENTRIES.filter((e) => answers[e.id] !== undefined).length;
  const totalCorrect = ALL_BLED_ENTRIES.filter(
    (e) => answers[e.id] === e.exercise.correctIndex
  ).length;

  const seriesCorrect = displayedEntries.filter(
    (e) => answers[e.id] === e.exercise.correctIndex
  ).length;

  return (
    <section className="mx-auto max-w-[1160px] px-4 py-8 sm:px-6 lg:py-10">
      <header className="mb-8 border border-[#D6CEBE] bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#5B328A] uppercase">
              Contrôle des connaissances · 149 questions
            </p>
            <h1 className="font-display mt-2 text-3xl font-bold text-[#1C1917] sm:text-4xl [text-wrap:balance]">
              Quiz · L’Histoire de France
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#44403C] sm:text-base">
              Chaque double page du manuel possède sa question corrigée. Choisissez une série
              aléatoire de 15 questions ou révisez une période complète du programme.
            </p>
          </div>

          <div className="border border-[#D6CEBE] bg-[#FAF8F2] px-5 py-4 text-left sm:text-right">
            <span className="text-xs text-[#57534E]">Score global sur le livre</span>
            <div className="font-mono mt-1 text-2xl font-bold text-[#1C1917] tabular-nums">
              {totalCorrect} / {ALL_BLED_ENTRIES.length}
            </div>
            <span className="font-mono text-xs text-[#57534E] tabular-nums">
              {totalAnswered} fiche{totalAnswered > 1 ? 's' : ''} testée{totalAnswered > 1 ? 's' : ''}
            </span>
            {totalAnswered > 0 && (
              <button
                type="button"
                onClick={onResetAll}
                className="mt-3 flex items-center gap-1 text-xs font-medium text-[#8B1E24] hover:underline sm:ml-auto"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Réinitialiser les scores</span>
              </button>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#EAE3D5] pt-5">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setEraFilter('random15')}
              className={`inline-flex items-center gap-1.5 border px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 ${
                eraFilter === 'random15'
                  ? 'border-[#5B328A] bg-[#5B328A] text-white'
                  : 'border-[#DDD5C5] bg-[#FAF8F2] text-[#292524] hover:border-[#5B328A]'
              }`}
            >
              <Shuffle className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Série aléatoire (15)</span>
            </button>
            {BLED_ERAS.map((era) => {
              const active = eraFilter === era.id;
              return (
                <button
                  key={era.id}
                  type="button"
                  onClick={() => setEraFilter(era.id)}
                  style={
                    active
                      ? { backgroundColor: era.accentHex, borderColor: era.accentHex, color: '#FFFFFF' }
                      : { borderColor: '#DDD5C5' }
                  }
                  className={`border px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 ${
                    active ? '' : 'bg-[#FAF8F2] text-[#292524] hover:bg-white'
                  }`}
                >
                  {era.title}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            {eraFilter === 'random15' && (
              <button
                type="button"
                onClick={() => setSeed((s) => s + 1)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5B328A] hover:underline"
              >
                <Shuffle className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Nouveau tirage</span>
              </button>
            )}
            <span className="font-mono text-xs text-[#57534E] tabular-nums">
              Série : {seriesCorrect} / {displayedEntries.length}
            </span>
          </div>
        </div>
      </header>

      <div className="space-y-5">
        {displayedEntries.map((entry, idx) => {
          const era = getEraMeta(entry.eraId);
          const selected = answers[entry.id];
          const isAnswered = selected !== undefined;
          const isCorrect = selected === entry.exercise.correctIndex;

          return (
            <article
              key={entry.id}
              className="border border-[#D6CEBE] bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-[#EAE3D5] pb-2.5 text-xs">
                <div className="flex flex-wrap items-center gap-2 text-[#57534E]">
                  <span
                    style={{ color: era.accentHex }}
                    className="font-mono font-bold tabular-nums"
                  >
                    Question {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-[#1C1917]">{entry.title}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">p. {entry.page}</span>
                </div>

                <div className="flex items-center gap-3">
                  {isAnswered && (
                    <span
                      className={`inline-flex items-center gap-1 font-semibold ${
                        isCorrect ? 'text-[#14532D]' : 'text-[#991B1B]'
                      }`}
                    >
                      {isCorrect ? (
                        <>
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Exact</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>À revoir</span>
                        </>
                      )}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => onOpenEntry(entry.id)}
                    style={{ color: era.accentHex }}
                    className="inline-flex items-center gap-1 font-medium hover:underline"
                  >
                    <span>Voir p. {entry.page}</span>
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </button>
                  <SpeakButton
                    id={`quiz-view-${entry.id}`}
                    text={`Question ${idx + 1}, ${entry.title}. ${entry.exercise.question} ${entry.exercise.options
                      .map((opt, optIdx) => `Réponse ${String.fromCharCode(65 + optIdx)} : ${opt}`)
                      .join('. ')}${isAnswered ? `. Explication : ${entry.exercise.explanation}` : ''}`}
                    label={`Écouter la question ${idx + 1}`}
                    compact
                    accentHex={era.accentHex}
                    isSupported={speech.isSupported}
                    activeId={speech.activeId}
                    isPaused={speech.isPaused}
                    onToggleSpeak={speech.toggleSpeak}
                    onTogglePause={speech.togglePause}
                    onStop={speech.stop}
                  />
                </div>
              </div>

              <h3 className="mb-4 text-base font-medium leading-relaxed text-[#1C1917]">
                {entry.exercise.question}
              </h3>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {entry.exercise.options.map((option, optIdx) => {
                  const chosen = selected === optIdx;
                  const good = optIdx === entry.exercise.correctIndex;
                  let cls =
                    'border-[#D6CEBE] bg-[#FAF8F2] text-[#1C1917] hover:border-[#5B328A]';
                  if (isAnswered) {
                    if (good) {
                      cls = 'border-[#14532D] bg-[#ECFDF5] text-[#14532D] font-semibold';
                    } else if (chosen) {
                      cls = 'border-[#991B1B] bg-[#FEF2F2] text-[#991B1B]';
                    } else {
                      cls = 'border-[#E6DFCE] bg-[#FAF8F2] text-[#78716C] opacity-75';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => onAnswer(entry.id, optIdx)}
                      className={`flex min-h-[44px] items-start gap-2.5 border px-3.5 py-2.5 text-left text-sm transition-colors disabled:cursor-default ${cls}`}
                    >
                      <span className="font-mono text-xs font-semibold opacity-75">
                        {String.fromCharCode(65 + optIdx)}.
                      </span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <p className="mt-3.5 border-t border-[#EAE3D5] pt-3 text-sm leading-relaxed text-[#292524]">
                  <strong>Explication : </strong>
                  {entry.exercise.explanation}
                </p>
              )}
            </article>
          );
        })}
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
