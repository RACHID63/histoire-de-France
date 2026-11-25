import { useMemo, useState } from 'react';
import { BookOpen } from 'lucide-react';
import { getAlphabeticalIndex, getEraMeta } from '../data/bledSommaire';

interface IndexViewProps {
  onOpenEntry: (entryId: string) => void;
  onBackToSummary: () => void;
}

export function IndexView({ onOpenEntry, onBackToSummary }: IndexViewProps) {
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL');
  const groups = useMemo(() => getAlphabeticalIndex(), []);

  const visibleGroups = useMemo(() => {
    if (selectedLetter === 'ALL') return groups;
    return groups.filter((g) => g.letter === selectedLetter);
  }, [groups, selectedLetter]);

  return (
    <section className="mx-auto max-w-[1160px] px-4 py-8 sm:px-6 lg:py-10">
      <div className="border border-[#D6CEBE] bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
        <header className="mb-8 border-b border-[#E4DCCD] pb-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h1 className="font-display text-3xl font-bold text-[#5B328A] sm:text-4xl">
              Index alphabétique
            </h1>
            <span className="font-mono text-sm font-semibold text-[#5B328A] tabular-nums">
              Page 318
            </span>
          </div>
          <p className="mt-2 text-sm text-[#44403C]">
            Retrouvez par ordre alphabétique tous les personnages historiques, événements et thèmes
            traités dans le manuel.
          </p>

          {/* Barre alphabétique */}
          <div className="mt-5 flex flex-wrap items-center gap-1">
            <button
              type="button"
              onClick={() => setSelectedLetter('ALL')}
              className={`border px-2.5 py-1 text-xs font-semibold ${
                selectedLetter === 'ALL'
                  ? 'border-[#5B328A] bg-[#5B328A] text-white'
                  : 'border-[#DDD5C5] bg-[#FAF8F2] text-[#44403C] hover:border-[#5B328A]'
              }`}
            >
              Tout
            </button>
            {groups.map((g) => (
              <button
                key={g.letter}
                type="button"
                onClick={() => setSelectedLetter(g.letter)}
                className={`border px-2.5 py-1 font-mono text-xs font-semibold ${
                  selectedLetter === g.letter
                    ? 'border-[#5B328A] bg-[#5B328A] text-white'
                    : 'border-[#DDD5C5] bg-[#FAF8F2] text-[#44403C] hover:border-[#5B328A]'
                }`}
              >
                {g.letter}
              </button>
            ))}
          </div>
        </header>

        <div className="columns-1 gap-10 md:columns-2">
          {visibleGroups.map((group) => (
            <div key={group.letter} className="mb-7 break-inside-avoid">
              <h2 className="font-display mb-2 border-b border-[#5B328A]/30 pb-1 text-xl font-bold text-[#5B328A]">
                {group.letter}
              </h2>
              <ul className="space-y-1.5">
                {group.entries.map((entry) => {
                  const era = getEraMeta(entry.eraId);
                  return (
                    <li key={entry.id}>
                      <button
                        type="button"
                        onClick={() => onOpenEntry(entry.id)}
                        className="group flex w-full items-baseline text-left text-sm text-[#1C1917] hover:bg-[#FAF8F2]"
                      >
                        <span className="pr-1 group-hover:underline underline-offset-2">
                          {entry.title}
                        </span>
                        <span
                          aria-hidden="true"
                          className="mx-1.5 flex-1 border-b border-dotted border-[#C7C1B5]"
                        />
                        <span
                          style={{ color: era.accentHex }}
                          className="font-mono text-xs font-semibold tabular-nums"
                        >
                          {entry.page}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center border-t border-[#E4DCCD] pt-6">
          <button
            type="button"
            onClick={onBackToSummary}
            className="inline-flex items-center gap-2 border border-[#5B328A] bg-white px-5 py-2.5 text-sm font-medium text-[#5B328A] transition-colors hover:bg-[#5B328A] hover:text-white whitespace-nowrap shrink-0"
          >
            <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Retour au sommaire</span>
          </button>
        </div>
      </div>
    </section>
  );
}
