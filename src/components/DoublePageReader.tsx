import { useEffect, useMemo } from 'react';
import { ArrowLeft, ArrowRight, BookmarkCheck, BookmarkPlus, BookOpen, Check, AlertCircle } from 'lucide-react';
import { ALL_BLED_ENTRIES, getEraMeta } from '../data/bledSommaire';
import { AVANT_PROPOS, BLED_ERAS, CREDITS_ICONOGRAPHIQUES } from '../data/bledEras';
import type { BledEntry } from '../data/bledTypes';
import { useSpeechReader } from '../hooks/useSpeechReader';
import { HistoricalPlate } from './HistoricalPlate';
import { SpeakButton } from './SpeakButton';

interface DoublePageReaderProps {
  entry: BledEntry;
  specialPage: 'avant-propos' | 'credits' | null;
  completedIds: string[];
  answers: Record<string, number>;
  onSelectEntry: (entryId: string) => void;
  onClearSpecial: () => void;
  onBackToSummary: () => void;
  onToggleCompleted: (entryId: string) => void;
  onAnswer: (entryId: string, optionIndex: number) => void;
}

export function DoublePageReader({
  entry,
  specialPage,
  completedIds,
  answers,
  onSelectEntry,
  onClearSpecial,
  onBackToSummary,
  onToggleCompleted,
  onAnswer,
}: DoublePageReaderProps) {
  const speech = useSpeechReader();
  const { stop: stopSpeech } = speech;

  useEffect(() => {
    stopSpeech();
  }, [entry.id, specialPage, stopSpeech]);

  const fullEntryText = useMemo(() => {
    const sectionsText = entry.sections.map((s) => `${s.heading}. ${s.body}`).join(' ');
    const quoteText = entry.quote
      ? ` Citation : ${entry.quote.text}, ${entry.quote.author}.`
      : '';
    const takeawaysText = entry.keyTakeaways.join(' ');
    return `${entry.title}. ${entry.subtitle}. ${sectionsText}${quoteText} L’essentiel à retenir : ${takeawaysText}`;
  }, [entry]);

  if (specialPage === 'avant-propos') {
    const avantProposText = `${AVANT_PROPOS.title}. ${AVANT_PROPOS.subtitle}. ${AVANT_PROPOS.paragraphs.join(' ')} Mode d’emploi : ${AVANT_PROPOS.howToUse.join(' ')}`;
    return (
      <section className="mx-auto max-w-[1040px] px-4 py-8 sm:px-6 lg:py-10">
        <div className="mb-6 flex items-center justify-between border-b border-[#DDD5C5] pb-4">
          <button
            type="button"
            onClick={onBackToSummary}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#57534E] hover:text-[#5B328A]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Retour au Sommaire</span>
          </button>
          <span className="font-mono text-xs font-semibold text-[#5B328A] tabular-nums">
            Page {AVANT_PROPOS.page}
          </span>
        </div>

        <article className="border border-[#D6CEBE] bg-white p-6 shadow-sm sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#5B328A] uppercase">
                Ouverture du manuel
              </p>
              <h1 className="font-display mt-2 text-3xl font-bold text-[#1C1917] sm:text-4xl">
                {AVANT_PROPOS.title}
              </h1>
              <p className="mt-2 text-lg text-[#44403C]">{AVANT_PROPOS.subtitle}</p>
            </div>
            <SpeakButton
              id="avant-propos"
              text={avantProposText}
              label="Écouter le texte"
              isSupported={speech.isSupported}
              activeId={speech.activeId}
              isPaused={speech.isPaused}
              onToggleSpeak={speech.toggleSpeak}
              onTogglePause={speech.togglePause}
              onStop={speech.stop}
            />
          </div>
          <div className="my-6 border-t border-[#E4DCCD]" />

          <div className="max-w-prose space-y-4 text-base leading-relaxed text-[#292524]">
            {AVANT_PROPOS.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? 'first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-5xl first-letter:font-bold first-letter:leading-none first-letter:text-[#5B328A]'
                    : ''
                }
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8 border border-[#5B328A]/25 bg-[#F8F5FC] p-6">
            <h2 className="font-display text-lg font-bold text-[#5B328A]">
              Mode d’emploi de l’édition interactive
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-[#292524]">
              {AVANT_PROPOS.howToUse.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-bold text-[#5B328A] tabular-nums">
                    0{idx + 1}.
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#E4DCCD] pt-5">
            <button
              type="button"
              onClick={onBackToSummary}
              className="inline-flex items-center gap-2 border border-[#D6CEBE] bg-[#FAF8F2] px-4 py-2.5 text-sm font-medium text-[#5B328A] transition-colors hover:border-[#5B328A] hover:bg-[#5B328A] hover:text-white whitespace-nowrap shrink-0"
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              <span>Retour au sommaire</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onClearSpecial();
                onSelectEntry(ALL_BLED_ENTRIES[0].id);
              }}
              className="inline-flex items-center gap-2 bg-[#9E2A7B] px-5 py-2.5 text-sm font-medium text-white hover:opacity-95 whitespace-nowrap shrink-0"
            >
              <span>Ouvrir la première fiche (p. 12)</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </article>
      </section>
    );
  }

  if (specialPage === 'credits') {
    const creditsText = `${CREDITS_ICONOGRAPHIQUES.title}. ${CREDITS_ICONOGRAPHIQUES.subtitle}. ${CREDITS_ICONOGRAPHIQUES.items
      .map((item) => `${item.era} : ${item.plate}. ${item.description}`)
      .join(' ')}`;

    return (
      <section className="mx-auto max-w-[1040px] px-4 py-8 sm:px-6 lg:py-10">
        <div className="mb-6 flex items-center justify-between border-b border-[#DDD5C5] pb-4">
          <button
            type="button"
            onClick={onBackToSummary}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#57534E] hover:text-[#5B328A]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Retour au Sommaire</span>
          </button>
          <span className="font-mono text-xs font-semibold text-[#5B328A] tabular-nums">
            Page {CREDITS_ICONOGRAPHIQUES.page}
          </span>
        </div>

        <article className="border border-[#D6CEBE] bg-white p-6 shadow-sm sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl font-bold text-[#1C1917] sm:text-4xl">
                {CREDITS_ICONOGRAPHIQUES.title}
              </h1>
              <p className="mt-2 text-base text-[#44403C]">{CREDITS_ICONOGRAPHIQUES.subtitle}</p>
            </div>
            <SpeakButton
              id="credits"
              text={creditsText}
              label="Écouter le texte"
              isSupported={speech.isSupported}
              activeId={speech.activeId}
              isPaused={speech.isPaused}
              onToggleSpeak={speech.toggleSpeak}
              onTogglePause={speech.togglePause}
              onStop={speech.stop}
            />
          </div>
          <div className="my-6 border-t border-[#E4DCCD]" />

          <dl className="divide-y divide-[#EAE3D5]">
            {CREDITS_ICONOGRAPHIQUES.items.map((item) => (
              <div key={item.era} className="py-4">
                <dt className="text-xs font-semibold tracking-wider text-[#5B328A] uppercase">
                  {item.era}
                </dt>
                <dd className="font-display mt-1 text-lg font-semibold text-[#1C1917]">
                  {item.plate}
                </dd>
                <dd className="mt-1 text-sm text-[#44403C]">{item.description}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex justify-start border-t border-[#E4DCCD] pt-5">
            <button
              type="button"
              onClick={onBackToSummary}
              className="inline-flex items-center gap-2 border border-[#D6CEBE] bg-[#FAF8F2] px-4 py-2.5 text-sm font-medium text-[#5B328A] transition-colors hover:border-[#5B328A] hover:bg-[#5B328A] hover:text-white whitespace-nowrap shrink-0"
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              <span>Retour au sommaire</span>
            </button>
          </div>
        </article>
      </section>
    );
  }

  const era = getEraMeta(entry.eraId);
  const currentIdx = ALL_BLED_ENTRIES.findIndex((e) => e.id === entry.id);
  const prevEntry = currentIdx > 0 ? ALL_BLED_ENTRIES[currentIdx - 1] : null;
  const nextEntry = currentIdx < ALL_BLED_ENTRIES.length - 1 ? ALL_BLED_ENTRIES[currentIdx + 1] : null;
  const isCompleted = completedIds.includes(entry.id);

  const selectedOption = answers[entry.id];
  const isAnswered = selectedOption !== undefined;
  const isCorrect = selectedOption === entry.exercise.correctIndex;

  return (
    <section className="mx-auto max-w-[1260px] px-4 py-6 sm:px-6 lg:py-8">
      {/* Barre supérieure de la double-page */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4 border-b border-[#DDD5C5] pb-4">
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={onBackToSummary}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#57534E] hover:text-[#1C1917] whitespace-nowrap shrink-0"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Sommaire</span>
          </button>

          <span aria-hidden="true" className="text-[#D6CEBE]">
            /
          </span>

          {/* Sélecteur rapide de fiche dans tout le livre */}
          <label className="flex items-center gap-2 text-xs text-[#57534E]">
            <span className="hidden sm:inline">Aller à la fiche :</span>
            <select
              value={entry.id}
              onChange={(e) => onSelectEntry(e.target.value)}
              aria-label="Choisir une double-page du manuel"
              className="max-w-[260px] border border-[#D6CEBE] bg-white px-2.5 py-1.5 text-xs font-medium text-[#1C1917] focus:border-[#5B328A] focus:outline-none sm:max-w-xs"
            >
              {BLED_ERAS.map((eraOpt) => (
                <optgroup key={eraOpt.id} label={`${eraOpt.title} ${eraOpt.dateSpan}`}>
                  {ALL_BLED_ENTRIES.filter((item) => item.eraId === eraOpt.id).map((item) => (
                    <option key={item.id} value={item.id}>
                      p. {item.page} — {item.title}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <SpeakButton
            id={`full-${entry.id}`}
            text={fullEntryText}
            label="Écouter la fiche"
            accentHex={era.accentHex}
            isSupported={speech.isSupported}
            activeId={speech.activeId}
            isPaused={speech.isPaused}
            onToggleSpeak={speech.toggleSpeak}
            onTogglePause={speech.togglePause}
            onStop={speech.stop}
          />
          <span className="font-mono text-xs text-[#57534E] tabular-nums">
            Fiche {currentIdx + 1} / {ALL_BLED_ENTRIES.length}
          </span>
          <button
            type="button"
            onClick={() => onToggleCompleted(entry.id)}
            className={`inline-flex items-center gap-1.5 border px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
              isCompleted
                ? 'border-[#14532D]/40 bg-[#ECFDF5] text-[#14532D]'
                : 'border-[#D6CEBE] bg-white text-[#1C1917] hover:border-[#5B328A]'
            }`}
          >
            {isCompleted ? (
              <>
                <BookmarkCheck className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Fiche lue</span>
              </>
            ) : (
              <>
                <BookmarkPlus className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Marquer comme lue</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Double-page ouverte du manuel Bled */}
      <article className="border border-[#D6CEBE] bg-white shadow-sm">
        {/* Bandeau d'en-tête coloré de la période */}
        <div
          style={{ backgroundColor: era.accentHex }}
          className="flex flex-wrap items-center justify-between gap-2 px-5 py-2 text-xs font-semibold tracking-wide text-white sm:px-8"
        >
          <span>
            {era.title} {era.dateSpan}
          </span>
          <span className="font-mono tabular-nums">
            Pages {entry.page} – {entry.page + 1}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x lg:divide-[#E4DCCD]">
          {/* PAGE DE GAUCHE (paire) : Récit, Explications, Dates clés */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="mb-4 flex items-center justify-between text-xs text-[#78716C]">
              <span
                style={{ color: era.accentHex }}
                className="font-mono font-bold tabular-nums"
              >
                {entry.page}
              </span>
              <span>
                {entry.kind === 'portrait' ? 'Portrait historique' : 'Thème & civilisation'}
                {' · '}
                <span className="font-mono tabular-nums">{entry.dates}</span>
              </span>
            </div>

            <h1 className="font-display text-3xl font-bold leading-tight text-[#1C1917] sm:text-4xl [text-wrap:balance]">
              {entry.title}
            </h1>
            <p className="mt-2.5 text-base leading-relaxed text-[#44403C] sm:text-lg">
              {entry.subtitle}
            </p>
            <div
              style={{ borderTopColor: era.accentHex }}
              className="my-6 border-t-2 opacity-80"
            />

            <div className="space-y-6">
              {entry.sections.map((sec, sIdx) => (
                <section key={sec.heading}>
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <h2
                      style={{ color: era.accentHex }}
                      className="font-display text-lg font-bold sm:text-xl"
                    >
                      {sec.heading}
                    </h2>
                    <SpeakButton
                      id={`sec-${entry.id}-${sIdx}`}
                      text={`${sec.heading}. ${sec.body}`}
                      label={`Écouter la section ${sec.heading}`}
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
                  <p
                    className={`text-[15.5px] leading-[1.78] text-[#292524] ${
                      sIdx === 0
                        ? 'first-letter:font-display first-letter:float-left first-letter:mr-2.5 first-letter:mt-1 first-letter:text-5xl first-letter:font-bold first-letter:leading-none'
                        : ''
                    }`}
                  >
                    {sec.body}
                  </p>
                </section>
              ))}
            </div>

            {entry.quote && (
              <blockquote className="my-7 border-y border-[#E4DCCD] py-4 text-center">
                <p className="font-display text-lg italic leading-relaxed text-[#1C1917]">
                  « {entry.quote.text} »
                </p>
                <footer className="mt-2 text-xs font-medium text-[#57534E]">
                  — {entry.quote.author}
                </footer>
              </blockquote>
            )}

            {/* Repères chronologiques de la page de gauche */}
            <div className="mt-8 border border-[#E4DCCD] bg-[#FAF8F2] p-4 sm:p-5">
              <div className="mb-2.5 flex items-center justify-between gap-3">
                <h3 className="font-display text-base font-bold text-[#1C1917]">
                  Repères chronologiques
                </h3>
                <SpeakButton
                  id={`dates-${entry.id}`}
                  text={`Repères chronologiques. ${entry.keyDates.map((d) => `${d.date} : ${d.label}`).join('. ')}`}
                  label="Écouter les repères chronologiques"
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
              <dl className="divide-y divide-[#EAE3D5] text-sm">
                {entry.keyDates.map((d) => (
                  <div
                    key={d.date + d.label}
                    className="flex flex-col gap-0.5 py-2 sm:flex-row sm:items-baseline sm:gap-4"
                  >
                    <dt
                      style={{ color: era.accentHex }}
                      className="w-32 shrink-0 font-mono text-xs font-semibold tabular-nums"
                    >
                      {d.date}
                    </dt>
                    <dd className="text-[#292524]">{d.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* PAGE DE DROITE (impaire) : Illustration commentée, L'essentiel à retenir, Question éclair */}
          <div className="border-t border-[#E4DCCD] bg-[#FCFBF8] p-6 sm:p-8 lg:border-t-0 lg:p-10">
            <div className="mb-4 flex items-center justify-between text-xs text-[#78716C]">
              <span>Document & synthèse</span>
              <span
                style={{ color: era.accentHex }}
                className="font-mono font-bold tabular-nums"
              >
                {entry.page + 1}
              </span>
            </div>

            <HistoricalPlate
              src={entry.image}
              alt={entry.title}
              figureNumber={`Doc. p. ${entry.page + 1}`}
              caption={entry.imageCaption}
              observation={entry.imageObservation}
            />

            {/* Encadré de synthèse : L'essentiel à retenir */}
            <section
              style={{
                backgroundColor: era.softBgHex,
                borderColor: `${era.accentHex}44`,
              }}
              className="mt-8 border p-5 sm:p-6"
            >
              <div className="mb-3 flex items-center justify-between gap-3 border-b border-black/10 pb-2">
                <h2
                  style={{ color: era.accentHex }}
                  className="font-display text-lg font-bold"
                >
                  L’essentiel à retenir
                </h2>
                <SpeakButton
                  id={`takeaways-${entry.id}`}
                  text={`L’essentiel à retenir. ${entry.keyTakeaways.join(' ')}`}
                  label="Écouter l’essentiel à retenir"
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
              <ol className="space-y-2.5 text-sm leading-relaxed text-[#1C1917]">
                {entry.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span
                      style={{ color: era.accentHex }}
                      className="mt-0.5 font-mono text-xs font-bold tabular-nums"
                    >
                      0{idx + 1}.
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Exercice de vérification de la double-page */}
            <section className="mt-7 border border-[#DDD5C5] bg-white p-5">
              <div className="mb-3 flex items-center justify-between gap-3 border-b border-[#EAE3D5] pb-2">
                <span className="text-xs font-bold tracking-wider text-[#57534E] uppercase">
                  Vérifier ses connaissances
                </span>
                <div className="flex items-center gap-2.5">
                  {isAnswered && (
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-semibold ${
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
                  <SpeakButton
                    id={`quiz-inline-${entry.id}`}
                    text={`${entry.exercise.question} ${entry.exercise.options
                      .map((opt, idx) => `Réponse ${String.fromCharCode(65 + idx)} : ${opt}`)
                      .join('. ')}${isAnswered ? `. Correction : ${entry.exercise.explanation}` : ''}`}
                    label="Écouter la question"
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

              <p className="mb-3 text-sm font-medium leading-relaxed text-[#1C1917]">
                {entry.exercise.question}
              </p>

              <div className="space-y-2">
                {entry.exercise.options.map((option, idx) => {
                  const chosen = selectedOption === idx;
                  const good = idx === entry.exercise.correctIndex;
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
                      key={idx}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => onAnswer(entry.id, idx)}
                      className={`flex w-full items-start gap-2.5 border px-3.5 py-2.5 text-left text-sm transition-colors disabled:cursor-default ${cls}`}
                    >
                      <span className="font-mono text-xs font-semibold opacity-75">
                        {String.fromCharCode(65 + idx)}.
                      </span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <p className="mt-3 border-t border-[#EAE3D5] pt-3 text-xs leading-relaxed text-[#292524]">
                  <strong>Correction : </strong>
                  {entry.exercise.explanation}
                </p>
              )}
            </section>
          </div>
        </div>
      </article>

      {/* Tourne-page inférieur avec retour au sommaire */}
      <nav
        aria-label="Feuilleter le livre"
        className="mt-6 grid grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_auto_1fr]"
      >
        <div className="flex justify-start">
          {prevEntry && (
            <button
              type="button"
              onClick={() => onSelectEntry(prevEntry.id)}
              className="inline-flex items-center gap-2.5 border border-[#D6CEBE] bg-white px-4 py-2.5 text-left text-sm text-[#1C1917] transition-colors hover:border-[#5B328A]"
            >
              <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                <span className="block font-mono text-[11px] text-[#78716C] tabular-nums">
                  Page précédente (p. {prevEntry.page})
                </span>
                <span className="font-display font-semibold">{prevEntry.title}</span>
              </span>
            </button>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={onBackToSummary}
            className="inline-flex items-center gap-2 border border-[#5B328A] bg-white px-4 py-2.5 text-sm font-medium text-[#5B328A] transition-colors hover:bg-[#5B328A] hover:text-white whitespace-nowrap shrink-0"
          >
            <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Retour au sommaire</span>
          </button>
        </div>

        <div className="flex justify-end">
          {nextEntry && (
            <button
              type="button"
              onClick={() => onSelectEntry(nextEntry.id)}
              style={{ backgroundColor: era.accentHex, borderColor: era.accentHex }}
              className="inline-flex items-center gap-2.5 border px-4 py-2.5 text-right text-sm text-white transition-opacity hover:opacity-95"
            >
              <span>
                <span className="block font-mono text-[11px] text-white/85 tabular-nums">
                  Page suivante (p. {nextEntry.page})
                </span>
                <span className="font-display font-semibold">{nextEntry.title}</span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </button>
          )}
        </div>
      </nav>
    </section>
  );
}
