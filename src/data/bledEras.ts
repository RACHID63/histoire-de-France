import type { EraMeta } from './bledTypes';

export const BLED_ERAS: EraMeta[] = [
  {
    id: 'antiquite',
    title: "L'ANTIQUITÉ",
    dateSpan: '(3500 av. J.-C. – 476 apr. J.-C.)',
    pageStart: 12,
    pageEnd: 23,
    accentHex: '#9E2A7B',
    softBgHex: '#FAF0F6',
    bannerImage: '/src/assets/images/chapter_1_gaule_1795633323069.jpg',
    bannerAlt: 'La Gaule antique et Vercingétorix',
    introSummary:
      'Des peuples celtes de la Gaule à la conquête romaine de Jules César, puis à la romanisation et aux grandes invasions qui closent le monde antique.'
  },
  {
    id: 'moyen-age',
    title: 'LE MOYEN ÂGE',
    dateSpan: '(476 – vers 1470)',
    pageStart: 26,
    pageEnd: 87,
    accentHex: '#D61F4B',
    softBgHex: '#FDF2F4',
    bannerImage: '/src/assets/images/chapter_3_moyen_age_1795633324618.jpg',
    bannerAlt: 'Chevalerie médiévale, châteaux forts et Jeanne d’Arc',
    introSummary:
      'Mille ans d’histoire, de Clovis et Charlemagne aux premiers Capétiens, de la société féodale et des cathédrales jusqu’à Saint Louis, la guerre de Cent Ans et Louis XI.'
  },
  {
    id: 'temps-modernes',
    title: 'LES TEMPS MODERNES',
    dateSpan: '(vers 1470 – 1789)',
    pageStart: 90,
    pageEnd: 149,
    accentHex: '#E06D1B',
    softBgHex: '#FEF6EE',
    bannerImage: '/src/assets/images/chapter_5_versailles_1795633324722.jpg',
    bannerAlt: 'La cour de France, la Renaissance et le château de Versailles',
    introSummary:
      'De l’humanisme, de François Ier et des Grandes Découvertes aux guerres de Religion, à l’édit de Nantes, au Grand Siècle de Louis XIV et aux philosophes des Lumières.'
  },
  {
    id: 'revolution-1914',
    title: 'DE LA RÉVOLUTION FRANÇAISE À 1914',
    dateSpan: '(1789 – 1914)',
    pageStart: 152,
    pageEnd: 239,
    accentHex: '#75B01B',
    softBgHex: '#F4F9EC',
    bannerImage: '/src/assets/images/chapter_6_revolution_1795633325152.jpg',
    bannerAlt: 'La Révolution française et le XIXe siècle',
    introSummary:
      'De 1789 et de l’Empire napoléonien à l’âge industriel, aux révolutions du XIXe siècle, à l’enracinement de la IIIe République, de l’école laïque et de la Belle Époque.'
  },
  {
    id: '1914-nos-jours',
    title: 'DE 1914 À NOS JOURS',
    dateSpan: '',
    pageStart: 242,
    pageEnd: 317,
    accentHex: '#0090C8',
    softBgHex: '#EFF8FC',
    bannerImage: '/src/assets/images/chapter_8_europe_1795633326272.jpg',
    bannerAlt: 'La France contemporaine de 1914 à nos jours',
    introSummary:
      'Des deux Guerres mondiales et de la Résistance aux Trente Glorieuses, à la décolonisation, à la Ve République, à la construction européenne et aux enjeux du XXIe siècle.'
  }
];

export const AVANT_PROPOS = {
  page: 3,
  title: 'Avant-propos',
  subtitle: 'Un manuel de référence pour comprendre et mémoriser l’Histoire de France',
  paragraphs: [
    'Conçu comme un ouvrage de référence clair et accessible, ce livre propose un panorama complet et rigoureux de l’Histoire de France, depuis les sociétés gauloises jusqu’aux mutations de la société contemporaine.',
    'L’ouvrage est découpé en cinq grandes périodes historiques clairement identifiées par un code couleur : l’Antiquité, le Moyen Âge, les Temps modernes, De la Révolution française à 1914, et De 1914 à nos jours.',
    'Chaque thème ou grande figure historique est présenté sous la forme d’une double page claire et structurée : un récit précis mettant en lumière les faits majeurs, une illustration commentée, des repères chronologiques, un encadré « L’essentiel à retenir » et un exercice de contrôle immédiat.'
  ],
  howToUse: [
    'Parcourez le Sommaire fidèle à l’ouvrage pour accéder d’un clic à n’importe quelle double page (pages 12 à 316).',
    'Utilisez la barre de recherche ou l’Index alphabétique (page 318) pour retrouver immédiatement un personnage ou un événement.',
    'Testez vos connaissances sur chaque fiche ou dans le Quiz général du livre.'
  ]
};

export const CREDITS_ICONOGRAPHIQUES = {
  page: 323,
  title: 'Crédits iconographiques',
  subtitle: 'Planches historiques et illustrations pédagogiques de l’édition numérique',
  items: [
    {
      era: "L'Antiquité (pp. 12 – 23)",
      plate: 'Planche I — Oppidum gaulois et Vercingétorix',
      description: 'Reconstitution pédagogique des cités fortifiées celtes et de l’armement gaulois.'
    },
    {
      era: 'Le Moyen Âge (pp. 26 – 87)',
      plate: 'Planches II & III — Charlemagne et Jeanne d’Arc',
      description: 'L’école du palais carolingien (enluminures et manuscrits) et la chevalerie royale devant Orléans.'
    },
    {
      era: 'Les Temps modernes (pp. 90 – 149)',
      plate: 'Planches IV & V — Château de Chambord et Château de Versailles',
      description: 'Architecture de la Renaissance ligérienne sous François Ier et faste classique du Roi-Soleil.'
    },
    {
      era: 'De la Révolution française à 1914 (pp. 152 – 239)',
      plate: 'Planches VI & VII — Prise de la Bastille et École de la IIIe République',
      description: 'Les journées fondatrices de 1789 et la salle de classe républicaine des lois Jules Ferry.'
    },
    {
      era: 'De 1914 à nos jours (pp. 242 – 317)',
      plate: 'Planche VIII — Paris et l’Europe contemporaine',
      description: 'Le dialogue architectural parisien entre héritage historique et modernité européenne.'
    }
  ]
};
