import { useState } from 'react';
import { BookOpen, Maximize2, X } from 'lucide-react';

interface HistoricalPlateProps {
  src: string;
  alt: string;
  figureNumber: string;
  caption: string;
  observation?: string;
  aspectClass?: string;
  enableZoom?: boolean;
}

export function HistoricalPlate({
  src,
  alt,
  figureNumber,
  caption,
  observation,
  aspectClass = 'aspect-[4/3]',
  enableZoom = true,
}: HistoricalPlateProps) {
  const [hasError, setHasError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <figure className="w-full">
        <div className="relative overflow-hidden border border-[#D6CEBE] bg-[#EFE9DC] p-2 sm:p-3">
          <div className={`relative w-full overflow-hidden bg-[#E6DFCE] ${aspectClass}`}>
            {!hasError ? (
              <img
                src={src}
                alt={alt}
                referrerPolicy="no-referrer"
                onError={() => setHasError(true)}
                className="h-full w-full object-cover transition-transform duration-300 ease-out"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#F2EDE1] to-[#E2D9C6] p-6 text-center">
                <BookOpen className="mb-3 h-8 w-8 text-[#8B1E24]/70" strokeWidth={1.5} />
                <p className="font-display text-base font-semibold text-[#1C1917]">{figureNumber}</p>
                <p className="mt-1 max-w-xs text-xs text-[#57534E]">{alt}</p>
              </div>
            )}

            {enableZoom && !hasError && (
              <button
                type="button"
                onClick={() => setIsZoomed(true)}
                aria-label={`Agrandir ${figureNumber}`}
                className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 border border-[#D6CEBE] bg-[#FAF8F2]/95 px-3 py-1.5 text-xs font-medium text-[#1C1917] shadow-sm transition-colors hover:bg-[#FAF8F2] hover:text-[#8B1E24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E24]"
              >
                <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="whitespace-nowrap">Observer la planche</span>
              </button>
            )}
          </div>
        </div>

        <figcaption className="mt-2.5 flex flex-wrap items-baseline justify-between gap-2 text-xs leading-relaxed text-[#57534E]">
          <span>
            <strong className="font-semibold text-[#1C1917] not-italic">{figureNumber}</strong>
            {' — '}
            <span className="italic">{caption}</span>
          </span>
        </figcaption>

        {observation && (
          <div className="mt-3 border-t border-[#E4DCCD] pt-2.5 text-sm leading-relaxed text-[#44403C]">
            <span className="font-semibold text-[#8B1E24]">Lecture de l’image : </span>
            {observation}
          </div>
        )}
      </figure>

      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1917]/80 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${figureNumber} — ${caption}`}
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto border border-[#D6CEBE] bg-[#FAF8F2] p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4 border-b border-[#E4DCCD] pb-3">
              <div>
                <p className="text-xs font-medium tracking-wider text-[#8B1E24] uppercase">
                  Planche historique · {figureNumber}
                </p>
                <h3 className="font-display text-lg font-semibold text-[#1C1917]">{caption}</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                aria-label="Fermer l’aperçu agrandi"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-[#D6CEBE] bg-[#F2EDE1] text-[#1C1917] transition-colors hover:border-[#8B1E24] hover:text-[#8B1E24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E24]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="aspect-[4/3] w-full overflow-hidden border border-[#D6CEBE] bg-[#EFE9DC]">
              <img
                src={src}
                alt={alt}
                referrerPolicy="no-referrer"
                className="h-full w-full object-contain"
              />
            </div>

            {observation && (
              <p className="mt-4 border-t border-[#E4DCCD] pt-3 text-sm leading-relaxed text-[#44403C]">
                <strong className="text-[#8B1E24]">Analyse iconographique : </strong>
                {observation}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
