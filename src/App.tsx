import { useEffect, useMemo, useRef, useState, type MouseEvent } from 'react';
import { BookOpen, List, Clock, HelpCircle, ArrowUp } from 'lucide-react';
import { ALL_BLED_ENTRIES, getEntryById } from './data/bledSommaire';
import { SommaireView } from './components/SommaireView';
import { DoublePageReader } from './components/DoublePageReader';
import { BledTimelineView } from './components/BledTimelineView';
import { IndexView } from './components/IndexView';
import { BledQuizView } from './components/BledQuizView';

type AppView = 'sommaire' | 'double-page' | 'frise' | 'index' | 'quiz';

const STORAGE_KEY_COMPLETED = 'bled_integrale_completed_v2';
const STORAGE_KEY_ANSWERS = 'bled_integrale_answers_v2';

export default function App() {
  const [view, setView] = useState<AppView>('sommaire');
  const [activeEntryId, setActiveEntryId] = useState<string>(ALL_BLED_ENTRIES[0].id);
  const [specialPage, setSpecialPage] = useState<'avant-propos' | 'credits' | null>(null);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const contextMenuRef = useRef<HTMLDivElement | null>(null);

  const [completedIds, setCompletedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_COMPLETED);
      return saved ? (JSON.parse(saved) as string[]) : [];
    } catch {
      return [];
    }
  });

  const [answers, setAnswers] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ANSWERS);
      return saved ? (JSON.parse(saved) as Record<string, number>) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(completedIds));
    } catch {
      // Ignorer les erreurs de stockage en mode privé
    }
  }, [completedIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ANSWERS, JSON.stringify(answers));
    } catch {
      // Ignorer les erreurs de stockage en mode privé
    }
  }, [answers]);

  useEffect(() => {
    if (!contextMenu) return;

    const handleMouseDown = (event: globalThis.MouseEvent) => {
      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(event.target as Node)
      ) {
        setContextMenu(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setContextMenu(null);
      }
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [contextMenu]);

  const activeEntry = useMemo(() => getEntryById(activeEntryId), [activeEntryId]);

  const navigateToView = (nextView: AppView) => {
    setContextMenu(null);
    setSpecialPage(null);
    setView(nextView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageDoubleClick = (event: MouseEvent<HTMLElement>) => {
    if (view === 'sommaire' || event.button !== 0) return;

    const target = event.target as HTMLElement | null;
    if (
      target?.closest(
        'button, a, input, select, textarea, label, [role="button"], [role="dialog"]'
      )
    ) {
      return;
    }

    window.getSelection()?.removeAllRanges();

    const menuWidth = 248;
    const menuHeight = 224;
    const padding = 12;
    const clampedX = Math.max(
      padding,
      Math.min(event.clientX, window.innerWidth - menuWidth - padding)
    );
    const clampedY = Math.max(
      padding,
      Math.min(event.clientY, window.innerHeight - menuHeight - padding)
    );

    setContextMenu({ x: clampedX, y: clampedY });
  };

  const openEntry = (entryId: string) => {
    setSpecialPage(null);
    setActiveEntryId(entryId);
    setView('double-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openSpecial = (page: 'avant-propos' | 'credits' | 'index') => {
    if (page === 'index') {
      setSpecialPage(null);
      setView('index');
    } else {
      setSpecialPage(page);
      setView('double-page');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleCompleted = (entryId: string) => {
    setCompletedIds((prev) =>
      prev.includes(entryId) ? prev.filter((id) => id !== entryId) : [...prev, entryId]
    );
  };

  const handleAnswer = (entryId: string, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [entryId]: optionIndex }));
  };

  const handleResetAllAnswers = () => {
    setAnswers({});
  };

  return (
    <div className="paper-surface min-h-screen flex flex-col text-[#1C1917]">
      {/* Barre supérieure : contrat à 3 zones sur une seule ligne */}
      <header className="sticky top-0 z-40 border-b border-[#DDD5C5] bg-[#FAF8F2]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1260px] items-center justify-between gap-8 px-4 py-3.5 sm:px-6">
          {/* Zone 1 : Titre sur une seule ligne */}
          <button
            type="button"
            onClick={() => navigateToView('sommaire')}
            className="font-display text-left text-lg font-bold tracking-tight text-[#1C1917] transition-colors hover:text-[#5B328A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B328A] whitespace-nowrap shrink-0"
          >
            L’Histoire de France
          </button>

          {/* Zone 2 : 4 liens de navigation simples */}
          <nav
            aria-label="Navigation principale"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#57534E]"
          >
            <button
              type="button"
              onClick={() => navigateToView('sommaire')}
              className={`border-b-2 py-0.5 transition-colors whitespace-nowrap shrink-0 ${
                view === 'sommaire'
                  ? 'border-[#5B328A] text-[#1C1917]'
                  : 'border-transparent hover:text-[#1C1917]'
              }`}
            >
              Sommaire
            </button>
            <button
              type="button"
              onClick={() => navigateToView('double-page')}
              className={`border-b-2 py-0.5 transition-colors whitespace-nowrap shrink-0 ${
                view === 'double-page'
                  ? 'border-[#5B328A] text-[#1C1917]'
                  : 'border-transparent hover:text-[#1C1917]'
              }`}
            >
              Double-page
            </button>
            <button
              type="button"
              onClick={() => navigateToView('frise')}
              className={`border-b-2 py-0.5 transition-colors whitespace-nowrap shrink-0 ${
                view === 'frise'
                  ? 'border-[#5B328A] text-[#1C1917]'
                  : 'border-transparent hover:text-[#1C1917]'
              }`}
            >
              Frise
            </button>
            <button
              type="button"
              onClick={() => navigateToView('index')}
              className={`border-b-2 py-0.5 transition-colors whitespace-nowrap shrink-0 ${
                view === 'index'
                  ? 'border-[#5B328A] text-[#1C1917]'
                  : 'border-transparent hover:text-[#1C1917]'
              }`}
            >
              Index
            </button>
          </nav>

          {/* Zone 3 : 1 action principale */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => navigateToView('quiz')}
              className="border border-[#5B328A] bg-[#5B328A] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#492771] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B328A] whitespace-nowrap shrink-0"
            >
              Quiz du livre
            </button>
          </div>
        </div>

        {/* Navigation mobile compacte sur une ligne */}
        <nav
          aria-label="Navigation mobile"
          className="flex items-center justify-around border-t border-[#EAE3D5] px-2 py-1.5 text-xs font-medium text-[#57534E] md:hidden"
        >
          {(
            [
              ['sommaire', 'Sommaire'],
              ['double-page', 'Pages'],
              ['frise', 'Frise'],
              ['index', 'Index'],
              ['quiz', 'Quiz'],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => navigateToView(id)}
              className={`px-2 py-1 whitespace-nowrap shrink-0 ${
                view === id ? 'font-semibold text-[#5B328A] underline underline-offset-4' : ''
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      {/* Contenu principal */}
      <main className="flex-1" onDoubleClick={handlePageDoubleClick}>
        {view === 'sommaire' && (
          <SommaireView
            completedIds={completedIds}
            onOpenEntry={openEntry}
            onOpenSpecial={openSpecial}
          />
        )}

        {view === 'double-page' && (
          <DoublePageReader
            entry={activeEntry}
            specialPage={specialPage}
            completedIds={completedIds}
            answers={answers}
            onSelectEntry={openEntry}
            onClearSpecial={() => setSpecialPage(null)}
            onBackToSummary={() => navigateToView('sommaire')}
            onToggleCompleted={toggleCompleted}
            onAnswer={handleAnswer}
          />
        )}

        {view === 'frise' && (
          <BledTimelineView
            onOpenEntry={openEntry}
            onBackToSummary={() => navigateToView('sommaire')}
          />
        )}

        {view === 'index' && (
          <IndexView
            onOpenEntry={openEntry}
            onBackToSummary={() => navigateToView('sommaire')}
          />
        )}

        {view === 'quiz' && (
          <BledQuizView
            answers={answers}
            onAnswer={handleAnswer}
            onResetAll={handleResetAllAnswers}
            onOpenEntry={openEntry}
            onBackToSummary={() => navigateToView('sommaire')}
          />
        )}
      </main>

      {/* Pied de page sobre */}
      <footer className="mt-14 border-t border-[#DDD5C5] bg-[#F4EFE4] py-7">
        <div className="mx-auto flex max-w-[1260px] flex-wrap items-center justify-between gap-4 px-4 text-xs text-[#57534E] sm:px-6">
          <div>
            <span className="font-display font-semibold text-[#1C1917]">
              L’Histoire de France
            </span>
            {' — '}
            <span className="font-mono tabular-nums">
              149 doubles-pages (pp. 3 – 323) · {completedIds.length} lue
              {completedIds.length > 1 ? 's' : ''}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={() => openSpecial('avant-propos')}
              className="hover:text-[#1C1917] hover:underline underline-offset-2"
            >
              Avant-propos (p. 3)
            </button>
            <button
              type="button"
              onClick={() => navigateToView('sommaire')}
              className="hover:text-[#1C1917] hover:underline underline-offset-2"
            >
              Sommaire
            </button>
            <button
              type="button"
              onClick={() => navigateToView('index')}
              className="hover:text-[#1C1917] hover:underline underline-offset-2"
            >
              Index (p. 318)
            </button>
            <button
              type="button"
              onClick={() => openSpecial('credits')}
              className="hover:text-[#1C1917] hover:underline underline-offset-2"
            >
              Crédits (p. 323)
            </button>
          </div>
        </div>
      </footer>

      {/* Menu contextuel au double-clic gauche hors sommaire */}
      {contextMenu && view !== 'sommaire' && (
        <div
          ref={contextMenuRef}
          role="menu"
          aria-label="Menu rapide de navigation"
          style={{ left: `${contextMenu.x}px`, top: `${contextMenu.y}px` }}
          className="fixed z-50 w-[248px] border border-[#D6CEBE] bg-[#FAF8F2] p-1.5 shadow-xl"
        >
          <div className="mb-1 border-b border-[#E4DCCD] px-2.5 py-1.5 text-[11px] font-medium text-[#78716C]">
            Navigation rapide
          </div>

          <button
            type="button"
            role="menuitem"
            onClick={() => navigateToView('sommaire')}
            className="flex w-full items-center gap-2.5 bg-[#5B328A] px-3 py-2 text-left text-sm font-medium text-white transition-colors hover:bg-[#492771] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B328A]"
          >
            <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Afficher le sommaire</span>
          </button>

          <div className="mt-1 space-y-0.5">
            <button
              type="button"
              role="menuitem"
              onClick={() => navigateToView('frise')}
              className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-xs font-medium text-[#1C1917] transition-colors hover:bg-[#EFE9DC]"
            >
              <Clock className="h-3.5 w-3.5 shrink-0 text-[#57534E]" aria-hidden="true" />
              <span>Frise chronologique</span>
            </button>

            <button
              type="button"
              role="menuitem"
              onClick={() => navigateToView('index')}
              className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-xs font-medium text-[#1C1917] transition-colors hover:bg-[#EFE9DC]"
            >
              <List className="h-3.5 w-3.5 shrink-0 text-[#57534E]" aria-hidden="true" />
              <span>Index alphabétique (p. 318)</span>
            </button>

            <button
              type="button"
              role="menuitem"
              onClick={() => navigateToView('quiz')}
              className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-xs font-medium text-[#1C1917] transition-colors hover:bg-[#EFE9DC]"
            >
              <HelpCircle className="h-3.5 w-3.5 shrink-0 text-[#57534E]" aria-hidden="true" />
              <span>Quiz du livre</span>
            </button>

            <button
              type="button"
              role="menuitem"
              onClick={() => {
                setContextMenu(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex w-full items-center gap-2.5 border-t border-[#EAE3D5] px-3 py-2 text-left text-xs font-medium text-[#57534E] transition-colors hover:bg-[#EFE9DC] hover:text-[#1C1917]"
            >
              <ArrowUp className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>Haut de la page</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
