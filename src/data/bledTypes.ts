export type EraId =
  | 'antiquite'
  | 'moyen-age'
  | 'temps-modernes'
  | 'revolution-1914'
  | '1914-nos-jours';

export interface EraMeta {
  id: EraId;
  title: string;
  dateSpan: string;
  pageStart: number;
  pageEnd: number;
  accentHex: string;
  softBgHex: string;
  bannerImage: string;
  bannerAlt: string;
  introSummary: string;
}

export interface BledExercise {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface BledEntry {
  id: string;
  page: number;
  title: string;
  eraId: EraId;
  kind: 'theme' | 'portrait';
  dates: string;
  subtitle: string;
  image: string;
  imageCaption: string;
  imageObservation: string;
  sections: {
    heading: string;
    body: string;
  }[];
  keyTakeaways: string[];
  keyDates: { date: string; label: string }[];
  quote?: { text: string; author: string };
  exercise: BledExercise;
}
