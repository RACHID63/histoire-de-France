import { Pause, Play, Square, Volume2 } from 'lucide-react';

interface SpeakButtonProps {
  id: string;
  text: string;
  label?: string;
  compact?: boolean;
  accentHex?: string;
  isSupported: boolean;
  activeId: string | null;
  isPaused: boolean;
  onToggleSpeak: (id: string, text: string) => void;
  onTogglePause: () => void;
  onStop: () => void;
}

export function SpeakButton({
  id,
  text,
  label = 'Écouter le texte',
  compact = false,
  accentHex = '#5B328A',
  isSupported,
  activeId,
  isPaused,
  onToggleSpeak,
  onTogglePause,
  onStop,
}: SpeakButtonProps) {
  if (!isSupported) return null;

  const isActive = activeId === id;

  if (compact) {
    return (
      <button
        type="button"
        onClick={() => onToggleSpeak(id, text)}
        aria-label={isActive ? 'Arrêter la lecture vocale' : label}
        aria-pressed={isActive}
        title={isActive ? 'Arrêter la lecture' : label}
        style={
          isActive
            ? { backgroundColor: accentHex, borderColor: accentHex, color: '#FFFFFF' }
            : undefined
        }
        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B328A] ${
          isActive
            ? ''
            : 'border-[#D6CEBE] bg-white text-[#57534E] hover:border-[#5B328A] hover:text-[#5B328A]'
        }`}
      >
        {isActive ? (
          <Square className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
        ) : (
          <Volume2 className="h-4 w-4" aria-hidden="true" />
        )}
      </button>
    );
  }

  if (isActive) {
    return (
      <div className="inline-flex items-center gap-1.5">
        <button
          type="button"
          onClick={onTogglePause}
          style={{ backgroundColor: accentHex, borderColor: accentHex }}
          className="inline-flex items-center gap-1.5 border px-3 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B328A] whitespace-nowrap shrink-0"
        >
          {isPaused ? (
            <>
              <Play className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Reprendre</span>
            </>
          ) : (
            <>
              <Pause className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Pause</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={onStop}
          aria-label="Arrêter la lecture vocale"
          className="inline-flex items-center gap-1.5 border border-[#D6CEBE] bg-white px-3 py-1.5 text-xs font-medium text-[#1C1917] transition-colors hover:border-[#991B1B] hover:text-[#991B1B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B328A] whitespace-nowrap shrink-0"
        >
          <Square className="h-3 w-3 fill-current" aria-hidden="true" />
          <span>Arrêter</span>
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onToggleSpeak(id, text)}
      aria-label={label}
      className="inline-flex items-center gap-1.5 border border-[#D6CEBE] bg-white px-3 py-1.5 text-xs font-medium text-[#1C1917] transition-colors hover:border-[#5B328A] hover:text-[#5B328A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B328A] whitespace-nowrap shrink-0"
    >
      <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}
