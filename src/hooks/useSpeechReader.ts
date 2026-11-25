import { useCallback, useEffect, useRef, useState } from 'react';

function splitIntoChunks(text: string): string[] {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  if (!cleaned) return [];

  const sentences = cleaned.split(/(?<=[.!?;:»])\s+/);
  const chunks: string[] = [];
  let buffer = '';

  for (const sentence of sentences) {
    if (!buffer) {
      buffer = sentence;
    } else if (buffer.length + 1 + sentence.length <= 220) {
      buffer = `${buffer} ${sentence}`;
    } else {
      chunks.push(buffer);
      buffer = sentence;
    }
  }
  if (buffer) {
    chunks.push(buffer);
  }
  return chunks;
}

function pickFrenchVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  if (!voices.length) return null;
  const frVoices = voices.filter((v) => v.lang.toLowerCase().startsWith('fr'));
  if (!frVoices.length) return null;

  return (
    frVoices.find((v) => v.lang.toLowerCase() === 'fr-fr' && !v.localService) ??
    frVoices.find((v) => v.lang.toLowerCase() === 'fr-fr') ??
    frVoices[0]
  );
}

export function useSpeechReader() {
  const isSupported =
    typeof window !== 'undefined' &&
    'speechSynthesis' in window &&
    typeof SpeechSynthesisUtterance !== 'undefined';

  const [activeId, setActiveId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const sessionRef = useRef(0);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    if (!isSupported) return;

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      voiceRef.current = pickFrenchVoice(voices);
    };

    loadVoices();
    window.speechSynthesis.addEventListener?.('voiceschanged', loadVoices);
    return () => {
      window.speechSynthesis.removeEventListener?.('voiceschanged', loadVoices);
    };
  }, [isSupported]);

  const stop = useCallback(() => {
    sessionRef.current += 1;
    if (isSupported) {
      window.speechSynthesis.cancel();
    }
    setActiveId(null);
    setIsPaused(false);
  }, [isSupported]);

  useEffect(() => {
    return () => {
      sessionRef.current += 1;
      if (isSupported) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSupported]);

  const speak = useCallback(
    (id: string, text: string) => {
      if (!isSupported) return;

      const chunks = splitIntoChunks(text);
      if (chunks.length === 0) return;

      sessionRef.current += 1;
      const currentSession = sessionRef.current;

      window.speechSynthesis.cancel();
      setActiveId(id);
      setIsPaused(false);

      const speakChunkAt = (index: number) => {
        if (sessionRef.current !== currentSession) return;
        if (index >= chunks.length) {
          setActiveId(null);
          setIsPaused(false);
          return;
        }

        const utterance = new SpeechSynthesisUtterance(chunks[index]);
        utterance.lang = 'fr-FR';
        utterance.rate = 0.98;
        utterance.pitch = 1;

        const voice =
          voiceRef.current ?? pickFrenchVoice(window.speechSynthesis.getVoices());
        if (voice) {
          utterance.voice = voice;
        }

        utterance.onend = () => {
          if (sessionRef.current === currentSession) {
            speakChunkAt(index + 1);
          }
        };

        utterance.onerror = () => {
          if (sessionRef.current === currentSession) {
            setActiveId(null);
            setIsPaused(false);
          }
        };

        window.speechSynthesis.speak(utterance);
      };

      speakChunkAt(0);
    },
    [isSupported]
  );

  const toggleSpeak = useCallback(
    (id: string, text: string) => {
      if (activeId === id) {
        stop();
      } else {
        speak(id, text);
      }
    },
    [activeId, speak, stop]
  );

  const togglePause = useCallback(() => {
    if (!isSupported || !activeId) return;

    if (window.speechSynthesis.paused || isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  }, [activeId, isPaused, isSupported]);

  return {
    isSupported,
    activeId,
    isPaused,
    speak,
    stop,
    toggleSpeak,
    togglePause,
  };
}
