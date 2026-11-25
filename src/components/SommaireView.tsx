import { useMemo, useState } from 'react';
import { Check, Search, X } from 'lucide-react';
import { AVANT_PROPOS, BLED_ERAS, CREDITS_ICONOGRAPHIQUES } from '../data/bledEras';
import { ALL_BLED_ENTRIES } from '../data/bledSommaire';
import type { EraId } from '../data/bledTypes';

interface SommaireViewProps {
  completedIds: string[];
  onOpenEntry: (entryId: string) => void;
  onOpenSpecial: (page: 'avant-propos' | 'credits' | 'index') => void;
}

export function SommaireView({
  completedIds,
  onOpenEntry,
  onOpenSpecial,
}: SommaireViewProps) {
  const [query, setQuery] = useState('');
  const [selectedEraFilter, setSelectedEraFilter] = useState<'all' | EraId>('all');

  const normalizedQuery = query.trim().toLowerCase();

  const filteredByEra = useMemo(() => {
    return BLED_ERAS.filter((era) => selectedEraFilter === 'all' || era.id === selectedEraFilter).map(
      (era) => {
        const entries = ALL_BLED_ENTRIES.filter((entry) => {
          if (entry.eraId !== era.id) return false;
          if (!normalizedQuery) return true;
          return (
            entry.title.toLowerCase().includes(normalizedQuery) ||
            entry.subtitle.toLowerCase().includes(normalizedQuery) ||
            entry.dates.toLowerCase().includes(normalizedQuery) ||
            String(entry.page).includes(normalizedQuery)
          );
        });
        return { era, entries };
      }
    );
  }, [normalizedQuery, selectedEraFilter]);

  const totalMatches = filteredByEra.reduce((sum, group) => sum + group.entries.length, 0);

  return (
    <section className="mx-auto max-w-[1160px] px-4 py-8 sm:px-6 lg:py-10">
      {/* Outils de repérage au-dessus du sommaire du livre */}
      <div className="mb-6 flex flex-col gap-4 border border-[#DDD5C5] bg-[#FAF8F2] p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-wider text-[#5B328A] uppercase">
              Édition intégrale · 149 doubles-pages
            </p>
            <p className="mt-0.5 text-sm text-[#44403C]">
              Cliquez sur n’importe quel titre du sommaire pour ouvrir la double page correspondante.
            </p>
          </div>

          <div className="relative w-full sm:w-80">
            <Search
              className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#78716C]"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un sujet, personnage, page..."
              aria-label="Rechercher dans le sommaire"
              className="w-full border border-[#D6CEBE] bg-white py-2 pr-9 pl-9 text-sm text-[#1C1917] placeholder:text-[#78716C] focus:border-[#5B328A] focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Effacer la recherche"
                className="absolute top-1/2 right-2.5 -translate-y-1/2 text-[#78716C] hover:text-[#1C1917]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Boutons d'accès rapide par période aux couleurs exactes du livre */}
        <div
          className="flex flex-wrap items-center gap-1.5"
          role="group"
          aria-label="Filtrer par grande période"
        >
          <button
            type="button"
            onClick={() => setSelectedEraFilter('all')}
            className={`border px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
              selectedEraFilter === 'all'
                ? 'border-[#5B328A] bg-[#5B328A] text-white'
                : 'border-[#DDD5C5] bg-white text-[#44403C] hover:border-[#5B328A]'
            }`}
          >
            Tout le sommaire ({ALL_BLED_ENTRIES.length})
          </button>
          {BLED_ERAS.map((era) => {
            const active = selectedEraFilter === era.id;
            return (
              <button
                key={era.id}
                type="button"
                onClick={() => setSelectedEraFilter(era.id)}
                style={
                  active
                    ? { backgroundColor: era.accentHex, borderColor: era.accentHex, color: '#FFFFFF' }
                    : { borderColor: '#DDD5C5' }
                }
                className={`border px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  active ? '' : 'bg-white text-[#292524] hover:bg-[#F5F1E8]'
                }`}
              >
                {era.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Page du Sommaire fidèle à l'ouvrage papier */}
      <div className="border border-[#D6CEBE] bg-white px-5 py-8 shadow-sm sm:px-10 sm:py-12 lg:px-14">
        <header className="mb-8 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-[#5B328A] sm:text-5xl">
            Sommaire
          </h1>
        </header>

        {/* Avant-propos (page 3) */}
        {(!normalizedQuery || 'avant-propos'.includes(normalizedQuery)) &&
          selectedEraFilter === 'all' && (
            <div className="mb-8">
              <button
                type="button"
                onClick={() => onOpenSpecial('avant-propos')}
                className="group flex w-full items-baseline text-left text-base text-[#1C1917] hover:text-[#5B328A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B328A]"
              >
                <span className="font-medium group-hover:underline underline-offset-2">
                  {AVANT_PROPOS.title}
                </span>
                <span
                  aria-hidden="true"
                  className="mx-2 flex-1 border-b border-dotted border-[#A8A29E]"
                />
                <span className="font-mono text-sm font-semibold text-[#5B328A] tabular-nums">
                  {AVANT_PROPOS.page}
                </span>
              </button>
            </div>
          )}

        {totalMatches === 0 ? (
          <div className="border border-[#E4DCCD] bg-[#FAF8F2] p-8 text-center">
            <p className="text-base font-medium text-[#1C1917]">
              Aucune fiche ne correspond à « {query} ».
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setSelectedEraFilter('all');
              }}
              className="mt-3 text-sm font-medium text-[#5B328A] underline underline-offset-2"
            >
              Afficher tout le sommaire
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {filteredByEra.map(({ era, entries }) => {
              if (entries.length === 0) return null;
              const readInEra = entries.filter((e) => completedIds.includes(e.id)).length;

              return (
                <section key={era.id} aria-labelledby={`era-heading-${era.id}`}>
                  {/* Bandeau coloré + image panoramique à l'identique du Bled */}
                  <div className="mb-5">
                    <div className="relative mx-auto max-w-3xl">
                      <div className="relative z-10 flex justify-center -mb-3">
                        <h2
                          id={`era-heading-${era.id}`}
                          style={{ backgroundColor: era.accentHex }}
                          className="inline-flex flex-wrap items-baseline justify-center gap-x-2 px-5 py-1.5 text-center text-sm font-bold tracking-wide text-white shadow-sm sm:text-base"
                        >
                          <span>{era.title}</span>
                          {era.dateSpan && (
                            <span className="text-xs font-normal opacity-95">{era.dateSpan}</span>
                          )}
                        </h2>
                      </div>
                      <div className="h-20 w-full overflow-hidden border border-[#D6CEBE] bg-[#EFE9DC] sm:h-24">
                        <img
                          src={era.bannerImage}
                          alt={era.bannerAlt}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>

                    <div className="mx-auto mt-2 flex max-w-3xl items-center justify-between text-xs text-[#78716C]">
                      <span>{entries.length} doubles-pages</span>
                      <span className="font-mono tabular-nums">
                        Lues : {readInEra} / {entries.length}
                      </span>
                    </div>
                  </div>

                  {/* Liste avec points de suite et numéros de page colorés */}
                  <ul className="mx-auto max-w-3xl space-y-1.5">
                    {entries.map((entry) => {
                      const isDone = completedIds.includes(entry.id);
                      return (
                        <li key={entry.id}>
                          <button
                            type="button"
                            onClick={() => onOpenEntry(entry.id)}
                            className="group flex w-full items-baseline py-0.5 text-left text-[15px] leading-snug text-[#1C1917] transition-colors hover:bg-[#FAF8F2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B328A]"
                          >
                            <span className="inline-flex items-center gap-1.5 pr-1 group-hover:underline underline-offset-2">
                              <span>{entry.title}</span>
                              {isDone && (
                                <Check
                                  className="h-3.5 w-3.5 shrink-0 text-[#14532D]"
                                  aria-label="Lu"
                                />
                              )}
                            </span>
                            <span
                              aria-hidden="true"
                              className="mx-1.5 flex-1 border-b border-dotted border-[#B8B2A6]"
                            />
                            <span
                              style={{ color: era.accentHex }}
                              className="font-mono text-sm font-semibold tabular-nums"
                            >
                              {entry.page}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              );
            })}
          </div>
        )}

        {/* Fin de sommaire : Index (p. 318) et Crédits iconographiques (p. 323) */}
        {!normalizedQuery && selectedEraFilter === 'all' && (
          <div className="mx-auto mt-10 max-w-3xl space-y-2 border-t border-[#E4DCCD] pt-6">
            <button
              type="button"
              onClick={() => onOpenSpecial('index')}
              className="group flex w-full items-baseline text-left text-base font-semibold text-[#1C1917] hover:text-[#5B328A]"
            >
              <span className="group-hover:underline underline-offset-2">Index</span>
              <span
                aria-hidden="true"
                className="mx-2 flex-1 border-b border-dotted border-[#A8A29E]"
              />
              <span className="font-mono text-sm font-bold text-[#1C1917] tabular-nums">318</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenSpecial('credits')}
              className="group flex w-full items-baseline text-left text-base font-semibold text-[#1C1917] hover:text-[#5B328A]"
            >
              <span className="group-hover:underline underline-offset-2">
                {CREDITS_ICONOGRAPHIQUES.title}
              </span>
              <span
                aria-hidden="true"
                className="mx-2 flex-1 border-b border-dotted border-[#A8A29E]"
              />
              <span className="font-mono text-sm font-bold text-[#1C1917] tabular-nums">
                {CREDITS_ICONOGRAPHIQUES.page}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
