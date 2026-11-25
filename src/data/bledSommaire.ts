import { BLED_ERAS } from './bledEras';
import type { BledEntry, EraId, EraMeta } from './bledTypes';
import { ENTRIES_ANTIQUITE_MOYEN_AGE } from './entriesAntiquiteMoyenAge';
import { ENTRIES_TEMPS_MODERNES } from './entriesTempsModernes';
import { ENTRIES_REVOLUTION_1914 } from './entriesRevolution1914';
import { ENTRIES_1914_NOS_JOURS } from './entries1914NosJours';

export const ALL_BLED_ENTRIES: BledEntry[] = [
  ...ENTRIES_ANTIQUITE_MOYEN_AGE,
  ...ENTRIES_TEMPS_MODERNES,
  ...ENTRIES_REVOLUTION_1914,
  ...ENTRIES_1914_NOS_JOURS,
].sort((a, b) => a.page - b.page);

export function getEraMeta(eraId: EraId): EraMeta {
  return BLED_ERAS.find((e) => e.id === eraId) ?? BLED_ERAS[0];
}

export function getEntriesByEra(eraId: EraId): BledEntry[] {
  return ALL_BLED_ENTRIES.filter((entry) => entry.eraId === eraId);
}

export function getEntryById(id: string): BledEntry {
  return ALL_BLED_ENTRIES.find((entry) => entry.id === id) ?? ALL_BLED_ENTRIES[0];
}

export interface IndexGroup {
  letter: string;
  entries: BledEntry[];
}

export function getAlphabeticalIndex(): IndexGroup[] {
  const groups = new Map<string, BledEntry[]>();
  const sorted = [...ALL_BLED_ENTRIES].sort((a, b) =>
    a.title.localeCompare(b.title, 'fr', { sensitivity: 'base' })
  );

  for (const entry of sorted) {
    // Strip leading French articles/apostrophes for natural alphabetical indexing,
    // or use the initial letter normalized without accents.
    const cleanTitle = entry.title
      .replace(/^(L'|L’|Le |La |Les )/i, '')
      .trim();
    const rawLetter = (cleanTitle[0] ?? entry.title[0] ?? 'A').toUpperCase();
    const letter = rawLetter.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    if (!groups.has(letter)) {
      groups.set(letter, []);
    }
    groups.get(letter)!.push(entry);
  }

  return Array.from(groups.entries())
    .sort(([a], [b]) => a.localeCompare(b, 'fr'))
    .map(([letter, entries]) => ({ letter, entries }));
}
