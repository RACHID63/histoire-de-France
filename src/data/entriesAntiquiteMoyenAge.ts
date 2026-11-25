import type { BledEntry } from './bledTypes';

const IMG_GAULE = '/src/assets/images/chapter_1_gaule_1795633323069.jpg';
const IMG_CHARLEMAGNE = '/src/assets/images/chapter_2_charlemagne_1795633324173.jpg';
const IMG_MOYEN_AGE = '/src/assets/images/chapter_3_moyen_age_1795633324618.jpg';

export const ENTRIES_ANTIQUITE_MOYEN_AGE: BledEntry[] = [
  // ==================== L'ANTIQUITÉ (pp. 12 - 22) ====================
  {
    id: 'p12-societe-gauloise',
    page: 12,
    title: 'La société gauloise',
    eraId: 'antiquite',
    kind: 'theme',
    dates: 'Ve – Ier siècle av. J.-C.',
    subtitle: 'Un ensemble de peuples celtes agriculteurs, artisans et bâtisseurs d’oppida',
    image: IMG_GAULE,
    imageCaption: 'Oppidum fortifié et guerrier gaulois sur les hauteurs de la Gaule.',
    imageObservation: 'Les villages fortifiés (oppida) protégeaient les greniers, les ateliers de forge et les sanctuaires des tribus celtes.',
    sections: [
      {
        heading: 'Des tribus celtes organisées',
        body: 'Avant la conquête romaine, la Gaule est peuplée d’une cinquantaine de peuples celtes indépendants (Arvernes, Éduens, Parisii, Belges, Aquitains). Chaque cité est dirigée par une aristocratie de cavaliers et conseillée par les druides, prêtres et juges détenant la mémoire orale.'
      },
      {
        heading: 'Une économie agricole et artisanale avancée',
        body: 'Les Gaulois défrichent de vastes terres et inventent des outils performants comme la charrue à roues, le tonneau en bois cerclé de fer et la moissonneuse tirée par un mulet. Leurs forgerons maîtrisent l’acier et l’émaillage, et leurs villes fortifiées (oppida) commercent déjà avec le monde méditerranéen.'
      }
    ],
    keyTakeaways: [
      'La Gaule rassemble plusieurs dizaines de peuples celtes souvent rivaux mais unis par une même culture.',
      'La société est dominée par les nobles guerriers et les druides, tandis que la majorité du peuple cultive la terre.',
      'Les Gaulois sont de remarquables artisans du fer et bâtissent des places fortes appelées oppida.'
    ],
    keyDates: [
      { date: 'Ve s. av. J.-C.', label: 'Essor de la civilisation celte de La Tène en Gaule' },
      { date: 'IIe s. av. J.-C.', label: 'Développement des grands oppida (Bibracte, Gergovie)' }
    ],
    exercise: {
      question: 'Comment appelle-t-on les villes fortifiées gauloises bâties sur des hauteurs ?',
      options: ['Les forums', 'Les oppida', 'Les thermes', 'Les bastides'],
      correctIndex: 1,
      explanation: 'Un oppidum (au pluriel oppida) était une cité fortifiée protégée par un rempart de terre, de pierre et de poutres (le murus gallicus).'
    }
  },
  {
    id: 'p14-vercingetorix',
    page: 14,
    title: 'Vercingétorix',
    eraId: 'antiquite',
    kind: 'portrait',
    dates: 'v. 82 – 46 av. J.-C.',
    subtitle: 'Le jeune chef arverne qui fédéra les Gaulois face aux légions romaines',
    image: IMG_GAULE,
    imageCaption: 'Vercingétorix dominant les collines d’Auvergne.',
    imageObservation: 'Chef charismatique issu de la noblesse arverne, il parvint à unir temporairement des tribus habituellement divisées.',
    sections: [
      {
        heading: 'La révolte de 52 av. J.-C.',
        body: 'Fils du chef arverne Celtillos, Vercingétorix prend la tête du soulèvement général des Gaulois en 52 av. J.-C. contre Jules César. Adoptant la tactique de la terre brûlée pour priver les légions romaines de vivres, il remporte une brillante victoire devant Gergovie.'
      },
      {
        heading: 'Le siège d’Alésia et le sacrifice',
        body: 'Poursuivi par César, Vercingétorix se retranche sur le plateau d’Alésia. Les Romains encerclent l’oppidum par une double ligne de fortifications. Après l’échec de l’armée de secours gauloise, Vercingétorix se rend pour épargner ses guerriers. Emmené à Rome, il est exécuté en 46 av. J.-C.'
      }
    ],
    keyTakeaways: [
      'En 52 av. J.-C., Vercingétorix réalise l’union de la plupart des peuples gaulois contre Rome.',
      'Vainqueur à Gergovie, il est assiégé et contraint de capituler à Alésia la même année.',
      'Sa résistance héroïque en fait l’une des grandes figures fondatrices de la mémoire nationale.'
    ],
    keyDates: [
      { date: '52 av. J.-C.', label: 'Victoire à Gergovie puis défaite et reddition à Alésia' },
      { date: '46 av. J.-C.', label: 'Exécution de Vercingétorix à Rome après le triomphe de César' }
    ],
    quote: {
      text: 'Je n’ai pas entrepris cette guerre par intérêt personnel, mais pour la liberté commune.',
      author: 'Paroles attribuées à Vercingétorix devant Alésia'
    },
    exercise: {
      question: 'De quel peuple gaulois Vercingétorix était-il issu ?',
      options: ['Les Parisii', 'Les Arvernes', 'Les Vénètes', 'Les Éduens'],
      correctIndex: 1,
      explanation: 'Vercingétorix était un jeune noble des Arvernes, peuple établi dans l’actuelle Auvergne.'
    }
  },
  {
    id: 'p16-jules-cesar',
    page: 16,
    title: 'Jules César',
    eraId: 'antiquite',
    kind: 'portrait',
    dates: '100 – 44 av. J.-C.',
    subtitle: 'Le général et homme d’État romain, conquérant de la Gaule',
    image: IMG_GAULE,
    imageCaption: 'La conquête de la Gaule transforme durablement l’Occident romain.',
    imageObservation: 'La supériorité d’organisation des légions et des travaux de siège romains fut décisive lors de la guerre des Gaules.',
    sections: [
      {
        heading: 'La guerre des Gaules (58 – 51 av. J.-C.)',
        body: 'Proconsul ambitieux, Jules César profite des appels à l’aide de tribus alliées pour pénétrer en Gaule en 58 av. J.-C. Grâce à la discipline de ses légions, à son génie tactique et aux divisions gauloises, il soumet l’ensemble du territoire en sept campagnes militaires.'
      },
      {
        heading: 'Écrivain et maître de Rome',
        body: 'César relate lui-même ses campagnes dans les Commentaires sur la guerre des Gaules, source majeure pour notre connaissance des Gaulois. Auréolé de sa victoire, il franchit le Rubicon en 49 av. J.-C., devient dictateur à vie à Rome et meurt assassiné aux ides de mars 44 av. J.-C.'
      }
    ],
    keyTakeaways: [
      'Jules César conquiert la Gaule indépendante entre 58 et 51 av. J.-C.',
      'Ses Commentaires sur la guerre des Gaules constituent un témoignage littéraire et historique essentiel.',
      'La conquête intègre la Gaule pour cinq siècles dans l’orbite de Rome.'
    ],
    keyDates: [
      { date: '58 av. J.-C.', label: 'Début de la guerre des Gaules' },
      { date: '44 av. J.-C.', label: 'Assassinat de Jules César au Sénat de Rome' }
    ],
    exercise: {
      question: 'Combien d’années dura approximativement la conquête de la Gaule par Jules César ?',
      options: ['Un an', 'Huit ans (58 à 51 av. J.-C.)', 'Cinquante ans', 'Trois mois'],
      correctIndex: 1,
      explanation: 'Menée de 58 à 51 av. J.-C., la guerre des Gaules s’acheva après Alésia et la prise des derniers oppida.'
    }
  },
  {
    id: 'p18-romanisation-gaule',
    page: 18,
    title: 'La romanisation de la Gaule',
    eraId: 'antiquite',
    kind: 'theme',
    dates: 'Ier – IIIe siècle apr. J.-C.',
    subtitle: 'La Pax Romana, les cités de pierre et la naissance du monde gallo-romain',
    image: IMG_GAULE,
    imageCaption: 'De l’oppidum gaulois à la cité gallo-romaine dotée de voies pavées et d’aqueducs.',
    imageObservation: 'L’architecture romaine (voies, aqueducs, théâtres) a profondément structuré le territoire français.',
    sections: [
      {
        heading: 'L’essor des villes et des voies romaines',
        body: 'Sous l’empereur Auguste, la Gaule est découpée en provinces autour de Lugdunum (Lyon), capitale des Gaules. Un réseau dense de voies pavées facilite les échanges. Les anciennes cités se dotent de forums, de thermes, d’aqueducs (comme le pont du Gard) et d’amphithéâtres (Nîmes, Arles).'
      },
      {
        heading: 'Langue latine et citoyenneté',
        body: 'Les élites gauloises adoptent la toge, le droit romain et la langue latine, dont dérivera plus tard le français. En 212, l’édit de Caracalla accorde la citoyenneté romaine à tous les hommes libres de l’Empire, achevant l’intégration des Gallo-Romains.'
      }
    ],
    keyTakeaways: [
      'La paix romaine (Pax Romana) apporte prospérité urbaine et essor des échanges commerciaux.',
      'Le latin se diffuse dans toute la Gaule et donne naissance aux langues romanes, dont le français.',
      'En 212, tous les habitants libres de la Gaule deviennent citoyens romains.'
    ],
    keyDates: [
      { date: '27 av. J.-C.', label: 'Réorganisation administrative de la Gaule par Auguste' },
      { date: '212 apr. J.-C.', label: 'Édit de Caracalla accordant la citoyenneté romaine' }
    ],
    exercise: {
      question: 'Quelle ville était considérée comme la « capitale des Gaules » à l’époque romaine ?',
      options: ['Lutèce (Paris)', 'Lugdunum (Lyon)', 'Massalia (Marseille)', 'Burdigala (Bordeaux)'],
      correctIndex: 1,
      explanation: 'Fondée en 43 av. J.-C., Lugdunum (Lyon) devint le centre administratif et religieux des trois Gaules.'
    }
  },
  {
    id: 'p20-martin-de-tours',
    page: 20,
    title: 'Martin de Tours',
    eraId: 'antiquite',
    kind: 'portrait',
    dates: 'v. 316 – 397',
    subtitle: 'L’évêque et apôtre des campagnes qui christianisa la Gaule',
    image: IMG_CHARLEMAGNE,
    imageCaption: 'La diffusion du christianisme et de la vie monastique en Gaule.',
    imageObservation: 'Les premiers monastères fondés autour de Tours devinrent des foyers religieux et culturels majeurs.',
    sections: [
      {
        heading: 'Du soldat romain au partage du manteau',
        body: 'Né en Pannonie (actuelle Hongrie), Martin sert d’abord dans l’armée romaine en Gaule. Selon la tradition, à Amiens, il coupe son manteau militaire en deux pour en vêtir un pauvre transi de froid. Peu après, il quitte l’armée pour se consacrer à Dieu.'
      },
      {
        heading: 'L’évangélisation des campagnes',
        body: 'Devenu évêque de Tours en 371, Martin fonde l’abbaye de Marmoutier et parcourt les campagnes gauloises, jusque-là restées attachées aux cultes païens. À sa mort en 397, son tombeau devient l’un des plus grands pèlerinages d’Occident.'
      }
    ],
    keyTakeaways: [
      'Édit de Milan (313) : Constantin autorise le christianisme, qui devient religion officielle en 380.',
      'Saint Martin de Tours contribue de manière décisive à l’évangélisation des campagnes gallo-romaines.',
      'Il contribue à implanter le monachisme en Gaule (abbayes de Ligugé et Marmoutier).'
    ],
    keyDates: [
      { date: '313', label: 'Édit de Milan autorisant le culte chrétien dans l’Empire' },
      { date: '371', label: 'Martin devient évêque de Tours' }
    ],
    exercise: {
      question: 'Quel geste célèbre de charité est associé à saint Martin de Tours ?',
      options: [
        'Le partage de son manteau avec un pauvre à Amiens',
        'La construction de Notre-Dame de Paris',
        'Le couronnement de Charlemagne',
        'La fondation de Lyon'
      ],
      correctIndex: 0,
      explanation: 'Officier de la garde impériale à Amiens, Martin partagea sa chlamyde (manteau de soldat) avec un mendiant.'
    }
  },
  {
    id: 'p22-invasions-barbares',
    page: 22,
    title: 'Les invasions barbares',
    eraId: 'antiquite',
    kind: 'theme',
    dates: 'IVe – Ve siècle (476)',
    subtitle: 'L’effondrement de l’Empire romain d’Occident et l’installation des peuples germaniques',
    image: IMG_GAULE,
    imageCaption: 'Les mouvements de peuples aux frontières du Rhin marquent la fin de l’Antiquité.',
    imageObservation: 'Au Ve siècle, les cités gallo-romaines s’entourent de remparts pour résister aux incursions venues d’Europe centrale.',
    sections: [
      {
        heading: 'Le franchissement du Rhin et les Huns',
        body: 'Affaibli par des crises politiques et économiques, l’Empire romain peine à défendre le limes (frontière du Rhin). À partir de 406, Wisigoths, Burgondes, Vandales et Francs pénètrent en Gaule. En 451, une coalition gallo-romaine et germanique arrête les Huns d’Attila aux Champs Catalauniques.'
      },
      {
        heading: '476 : la fin de l’Antiquité',
        body: 'En 476, le dernier empereur romain d’Occident, Romulus Augustule, est déposé. La Gaule se morcelle en plusieurs royaumes germaniques : les Wisigoths au sud-ouest, les Burgondes à l’est et les Francs au nord. Le Moyen Âge commence.'
      }
    ],
    keyTakeaways: [
      'À partir du Ve siècle, divers peuples germaniques s’installent durablement en Gaule.',
      'En 451, Attila et les Huns sont repoussés ; Paris est rassurée par sainte Geneviève.',
      'La chute de l’Empire romain d’Occident en 476 marque traditionnellement la fin de l’Antiquité.'
    ],
    keyDates: [
      { date: '406', label: 'Grand franchissement du Rhin gelé par les peuples germaniques' },
      { date: '451', label: 'Défaite d’Attila aux Champs Catalauniques' },
      { date: '476', label: 'Chute de l’Empire romain d’Occident' }
    ],
    exercise: {
      question: 'Quelle date marque traditionnellement la fin de l’Antiquité et le début du Moyen Âge ?',
      options: ['52 av. J.-C.', '313', '476', '800'],
      correctIndex: 2,
      explanation: 'L’année 476 correspond à la déposition du dernier empereur romain d’Occident, Romulus Augustule.'
    }
  },

  // ==================== LE MOYEN ÂGE (pp. 26 - 86) ====================
  {
    id: 'p26-clovis-merovingiens',
    page: 26,
    title: 'Clovis et les Mérovingiens',
    eraId: 'moyen-age',
    kind: 'theme',
    dates: '481 – 751',
    subtitle: 'L’unification de la Gaule par les Francs et le baptême de Reims',
    image: IMG_CHARLEMAGNE,
    imageCaption: 'Royauté franque et alliance décisive avec l’Église chrétienne.',
    imageObservation: 'Sous les Mérovingiens, la Gaule prend progressivement le nom de royaume des Francs (Francia).',
    sections: [
      {
        heading: 'Les conquêtes de Clovis',
        body: 'Devenu roi des Francs saliens en 481, Clovis bat le dernier gouverneur romain Syagrius à Soissons (486), puis repousse les Alamans et les Wisigoths à Vouillé (507). Il fixe sa capitale à Paris et unifie la majeure partie de l’ancienne Gaule.'
      },
      {
        heading: 'Le baptême à Reims et l’héritage mérovingien',
        body: 'Influencé par son épouse Clotilde, Clovis est baptisé à Reims par l’évêque Rémi vers 496. Cette conversion au catholicisme lui rallie les évêques et les populations gallo-romaines. Après sa mort en 511, le royaume est partagé entre ses fils selon la coutume franque.'
      }
    ],
    keyTakeaways: [
      'Clovis fonde la puissance de la dynastie des Mérovingiens.',
      'Son baptême à Reims (v. 496) scelle l’alliance entre la royauté franque et l’Église.',
      'La pratique des partages successoraux affaiblit toutefois ses successeurs.'
    ],
    keyDates: [
      { date: '481', label: 'Avènement de Clovis, roi des Francs' },
      { date: 'v. 496', label: 'Baptême de Clovis à Reims' },
      { date: '507', label: 'Victoire de Vouillé sur les Wisigoths' }
    ],
    exercise: {
      question: 'Dans quelle ville Clovis reçut-il le baptême des mains de l’évêque Rémi ?',
      options: ['Soissons', 'Reims', 'Tours', 'Aix-la-Chapelle'],
      correctIndex: 1,
      explanation: 'Baptisé à Reims vers 496, Clovis fit de cette ville le futur lieu traditionnel du sacre des rois de France.'
    }
  },
  {
    id: 'p28-brunehaut-fredegonde',
    page: 28,
    title: 'Brunehaut et Frédégonde',
    eraId: 'moyen-age',
    kind: 'portrait',
    dates: 'VIe – VIIe siècle',
    subtitle: 'La rivalité des deux reines mérovingiennes entre Austrasie et Neustrie',
    image: IMG_CHARLEMAGNE,
    imageCaption: 'Les cours royales mérovingiennes déchirées par les luttes de pouvoir.',
    imageObservation: 'Les reines jouèrent un rôle politique majeur dans les royaumes francs divisés entre Austrasie et Neustrie.',
    sections: [
      {
        heading: 'Deux royaumes rivaux : Austrasie et Neustrie',
        body: 'À la fin du VIe siècle, le royaume franc est divisé entre Sigebert Ier (roi d’Austrasie, à l’est) et Chilpéric Ier (roi de Neustrie, à l’ouest). Sigebert épouse la princesse wisigothe Brunehaut, tandis que Chilpéric s’unit à l’ambitieuse Frédégonde.'
      },
      {
        heading: 'Une lutte dynastique implacable',
        body: 'Après l’assassinat de la sœur de Brunehaut puis celui de Sigebert, une guerre sans merci oppose les deux reines pendant près de quarante ans. Habile administratrice, Brunehaut gouverne longtemps au nom de ses descendants avant d’être capturée et suppliciée par Clotaire II, fils de Frédégonde, en 613.'
      }
    ],
    keyTakeaways: [
      'Le VIe siècle mérovingien est marqué par les guerres civiles entre Austrasie et Neustrie.',
      'Brunehaut tenta de maintenir l’autorité royale et les routes romaines (chaussées Brunehaut).',
      'Clotaire II réunit finalement les royaumes francs en 613.'
    ],
    keyDates: [
      { date: '575', label: 'Assassinat de Sigebert Ier ; début de la guerre entre les deux reines' },
      { date: '613', label: 'Mort de Brunehaut et réunification du royaume par Clotaire II' }
    ],
    exercise: {
      question: 'Quels étaient les deux grands royaumes francs rivaux à l’époque de Brunehaut et Frédégonde ?',
      options: [
        'L’Aquitaine et la Bretagne',
        'L’Austrasie et la Neustrie',
        'La Normandie et la Champagne',
        'La Flandre et la Provence'
      ],
      correctIndex: 1,
      explanation: 'L’Austrasie (à l’est) et la Neustrie (à l’ouest) se disputèrent la suprématie dans le royaume franc.'
    }
  },
  {
    id: 'p30-charles-martel-pepin',
    page: 30,
    title: 'Charles Martel et Pépin le Bref',
    eraId: 'moyen-age',
    kind: 'portrait',
    dates: '714 – 768',
    subtitle: 'Des maires du palais à la naissance de la dynastie carolingienne',
    image: IMG_CHARLEMAGNE,
    imageCaption: 'L’avènement des Carolingiens et le sacre royal par le pape.',
    imageObservation: 'Le sacre royal confère au nouveau souverain une légitimité religieuse inédite.',
    sections: [
      {
        heading: 'Charles Martel et la bataille de Poitiers (732)',
        body: 'Au VIIIe siècle, les derniers rois mérovingiens — surnommés « rois fainéants » — laissent le pouvoir effectif aux maires du palais. En 732, le maire du palais Charles Martel arrête près de Poitiers une armée arabo-berbère venue d’Espagne, consolidant son prestige en Gaule.'
      },
      {
        heading: 'Pépin le Bref, premier roi carolingien (751)',
        body: 'Son fils Pépin le Bref obtient l’accord du pape pour déposer le dernier roi mérovingien Childéric III en 751. Sacré par saint Boniface puis par le pape Étienne II, Pépin fonde la dynastie des Carolingiens et inaugure la tradition du sacre royal en France.'
      }
    ],
    keyTakeaways: [
      'Charles Martel arrête l’avancée musulmane à Poitiers en 732.',
      'Pépin le Bref met fin aux Mérovingiens en 751 et fonde la dynastie carolingienne.',
      'Le sacre par l’onction sainte fait du roi l’élu de Dieu.'
    ],
    keyDates: [
      { date: '732', label: 'Victoire de Charles Martel à Poitiers' },
      { date: '751', label: 'Élection et sacre de Pépin le Bref' }
    ],
    exercise: {
      question: 'Quel titre exerçait Charles Martel avant que son fils Pépin ne devienne roi en 751 ?',
      options: ['Empereur d’Occident', 'Maire du palais', 'Sénéchal de Paris', 'Comte de Toulouse'],
      correctIndex: 1,
      explanation: 'Les maires du palais dirigeaient l’administration et l’armée à la place des derniers rois mérovingiens.'
    }
  },
  {
    id: 'p32-charlemagne-carolingiens',
    page: 32,
    title: 'Charlemagne et les Carolingiens',
    eraId: 'moyen-age',
    kind: 'portrait',
    dates: '768 – 814',
    subtitle: 'Le roi conquérant couronné empereur d’Occident en l’an 800',
    image: IMG_CHARLEMAGNE,
    imageCaption: 'Charlemagne en manteau impérial dans son palais.',
    imageObservation: 'Couronné à Rome en 800, Charlemagne restaura l’idée d’un grand empire chrétien en Occident.',
    sections: [
      {
        heading: 'De grandes conquêtes militaires',
        body: 'Fils de Pépin le Bref, Charles le Grand (Charlemagne) règne de 768 à 814. Par plus de cinquante campagnes, il soumet les Lombards en Italie, les Saxons à l’est du Rhin et établit la Marche d’Espagne (épisode de Roncevaux célébré plus tard par la Chanson de Roland).'
      },
      {
        heading: 'Le couronnement impérial de l’an 800',
        body: 'Le 25 décembre 800, dans la basilique Saint-Pierre de Rome, le pape Léon III couronne Charlemagne empereur. Maître d’un immense territoire allant de l’Atlantique à l’Elbe, il gouverne depuis Aix-la-Chapelle.'
      }
    ],
    keyTakeaways: [
      'Charlemagne rassemble sous son autorité une grande partie de l’Europe occidentale chrétienne.',
      'Le 25 décembre 800, il est couronné empereur à Rome par le pape Léon III.',
      'Il établit sa résidence principale à Aix-la-Chapelle.'
    ],
    keyDates: [
      { date: '768', label: 'Début du règne de Charlemagne' },
      { date: '778', label: 'Bataille de Roncevaux et mort du chevalier Roland' },
      { date: '800', label: 'Couronnement impérial de Charlemagne à Rome' }
    ],
    exercise: {
      question: 'En quelle année Charlemagne fut-il couronné empereur à Rome ?',
      options: ['732', '768', '800', '987'],
      correctIndex: 2,
      explanation: 'Le jour de Noël de l’an 800, le pape Léon III couronna Charlemagne empereur d’Occident.'
    }
  },
  {
    id: 'p34-empire-renaissance-carolingienne',
    page: 34,
    title: "L'Empire carolingien et la Renaissance carolingienne",
    eraId: 'moyen-age',
    kind: 'theme',
    dates: 'IXe siècle',
    subtitle: 'Administration impériale, écoles monastiques et minuscule caroline',
    image: IMG_CHARLEMAGNE,
    imageCaption: 'Charlemagne examinant des manuscrits avec les moines copistes.',
    imageObservation: 'L’écriture minuscule caroline rendit les manuscrits clairs et lisibles dans tout l’Empire.',
    sections: [
      {
        heading: 'Comtes et missi dominici',
        body: 'Pour administrer son immense empire, Charlemagne le divise en comtés dirigés par des comtes. Afin de contrôler leur fidélité et l’application des lois (capitulaires), il dépêche deux par deux des inspecteurs appelés missi dominici (« envoyés du maître »).'
      },
      {
        heading: 'Le renouveau des écoles et des livres',
        body: 'Entouré de lettrés comme le savant Alcuin, l’empereur encourage l’ouverture d’écoles dans les monastères et cathédrales. Les moines copistes élaborent une nouvelle écriture régulière, la minuscule caroline, qui donne naissance à nos lettres minuscules actuelles.'
      }
    ],
    keyTakeaways: [
      'Les comtes administrent localement l’Empire sous le contrôle des missi dominici.',
      'La Renaissance carolingienne sauve et recopie de nombreux textes antiques dans les scriptoria.',
      'En 843, le traité de Verdun partage l’Empire entre les trois petits-fils de Charlemagne (Charles le Chauve reçoit la Francie occidentale).'
    ],
    keyDates: [
      { date: '789', label: 'Capitulaire prescrivant l’ouverture d’écoles dans les abbayes' },
      { date: '843', label: 'Traité de Verdun partageant l’Empire carolingien' }
    ],
    exercise: {
      question: 'Quel traité de 843 partage l’Empire carolingien entre les petits-fils de Charlemagne ?',
      options: ['Le traité de Rome', 'Le traité de Verdun', 'L’édit de Nantes', 'Le traité de Troyes'],
      correctIndex: 1,
      explanation: 'Par le traité de Verdun (843), la Francie occidentale revient à Charles le Chauve, préfigurant le royaume de France.'
    }
  },
  {
    id: 'p36-invasions-ixe-xe',
    page: 36,
    title: 'Les invasions des IXe et Xe siècles',
    eraId: 'moyen-age',
    kind: 'theme',
    dates: 'IXe – Xe siècle',
    subtitle: 'Vikings, Sarrasins et Hongrois : l’insécurité qui donne naissance aux châteaux',
    image: IMG_MOYEN_AGE,
    imageCaption: 'La nécessité de défendre les populations favorise l’essor des forteresses locales.',
    imageObservation: 'Face à des raids rapides, les seigneurs locaux deviennent les protecteurs directs des villages.',
    sections: [
      {
        heading: 'Les raids des Normands (Vikings)',
        body: 'Venus de Scandinavie à bord de leurs navires rapides (drakkars), les Vikings remontent la Seine et la Loire dès le IXe siècle, pillant monastères et villes comme Paris (assiégée en 885). Au sud, des pirates sarrasins menacent les côtes provençales, tandis que les Hongrois mènent des raids à l’est.'
      },
      {
        heading: 'Le traité de Saint-Clair-sur-Epte (911)',
        body: 'Incapable de repousser partout les assaillants, le roi Charles le Simple cède en 911 au chef viking Rollon un territoire à l’embouchure de la Seine : la Normandie, à condition qu’il se convertisse et défende la côte.'
      }
    ],
    keyTakeaways: [
      'Aux IXe et Xe siècles, l’Europe occidentale subit les attaques des Vikings, des Sarrasins et des Hongrois.',
      'En 911, Rollon reçoit le duché de Normandie par le traité de Saint-Clair-sur-Epte.',
      'L’affaiblissement du pouvoir royal renforce l’autorité des seigneurs locaux : c’est le début de la féodalité.'
    ],
    keyDates: [
      { date: '885 – 886', label: 'Siège de Paris par les Vikings, défendue par Eudes' },
      { date: '911', label: 'Création du duché de Normandie pour Rollon' }
    ],
    exercise: {
      question: 'Quelle région française tire son nom des « hommes du Nord » (Vikings) installés en 911 ?',
      options: ['La Bretagne', 'La Normandie', 'L’Aquitaine', 'La Bourgogne'],
      correctIndex: 1,
      explanation: '« Normands » signifie « hommes du Nord » ; Rollon devint le premier duc de Normandie en 911.'
    }
  },
  {
    id: 'p38-hugues-capet',
    page: 38,
    title: 'Hugues Capet et les premiers Capétiens',
    eraId: 'moyen-age',
    kind: 'theme',
    dates: '987 – XIIe siècle',
    subtitle: 'L’avènement d’une dynastie qui régnera sur la France pendant huit siècles',
    image: IMG_MOYEN_AGE,
    imageCaption: 'Les débuts modestes du domaine royal capétien autour de Paris et d’Orléans.',
    imageObservation: 'En associant leur fils aîné au trône de leur vivant, les Capétiens rendirent la couronne héréditaire.',
    sections: [
      {
        heading: 'L’élection de 987',
        body: 'En 987, à la mort du dernier roi carolingien Louis V, les grands seigneurs et évêques élisent Hugues Capet, duc des Francs. Son domaine direct est modeste (de Senlis à Orléans), bien plus petit que ceux des ducs de Normandie ou d’Aquitaine.'
      },
      {
        heading: 'La force du sacre et de l’hérédité',
        body: 'Pour éviter une nouvelle élection, Hugues Capet fait sacrer son fils Robert de son vivant. Pendant plus de trois siècles, tous les Capétiens auront un fils pour leur succéder (le « miracle capétien »), renforçant patiemment la légitimité royale.'
      }
    ],
    keyTakeaways: [
      'Hugues Capet est élu et sacré roi en 987, fondant la dynastie capétienne.',
      'Les premiers Capétiens règnent sur un domaine royal restreint autour de Paris et d’Orléans.',
      'En faisant sacrer leur fils de leur vivant, ils imposent la succession héréditaire.'
    ],
    keyDates: [
      { date: '987', label: 'Élection et sacre de Hugues Capet à Noyon' }
    ],
    exercise: {
      question: 'Autour de quelles deux villes principales s’étendait le modeste domaine royal de Hugues Capet ?',
      options: ['Lyon et Marseille', 'Paris et Orléans', 'Bordeaux et Toulouse', 'Reims et Rouen'],
      correctIndex: 1,
      explanation: 'Le domaine royal capétien d’origine s’étendait principalement en Île-de-France et dans l’Orléanais.'
    }
  },
  {
    id: 'p40-guillaume-conquerant',
    page: 40,
    title: 'Guillaume le Conquérant',
    eraId: 'moyen-age',
    kind: 'portrait',
    dates: 'v. 1027 – 1087',
    subtitle: 'Le duc de Normandie devenu roi d’Angleterre après la bataille d’Hastings',
    image: IMG_MOYEN_AGE,
    imageCaption: 'La chevalerie normande et l’essor d’une puissance anglo-normande.',
    imageObservation: 'Duc de Normandie, Guillaume devint en 1066 roi d’Angleterre tout en restant vassal du roi de France.',
    sections: [
      {
        heading: 'La conquête de l’Angleterre (1066)',
        body: 'Duc de Normandie depuis son enfance, Guillaume revendique la couronne d’Angleterre à la mort d’Édouard le Confesseur. En octobre 1066, il débarque avec une flotte puissante et remporte la bataille décisive d’Hastings contre Harold.'
      },
      {
        heading: 'Un vassal plus puissant que son suzerain',
        body: 'Couronné à Westminster, Guillaume réorganise l’Angleterre (recensement du Domesday Book) et introduit le français normand à la cour anglaise. Cette double couronne ouvre une longue rivalité entre rois de France et rois d’Angleterre.'
      }
    ],
    keyTakeaways: [
      'En 1066, le duc de Normandie Guillaume bat Harold à Hastings et devient roi d’Angleterre.',
      'L’épopée est racontée sur la célèbre Tapisserie de Bayeux.',
      'Roi d’Angleterre mais vassal du roi de France pour la Normandie, il crée un équilibre fragile source de futurs conflits.'
    ],
    keyDates: [
      { date: '1066', label: 'Victoire de Guillaume le Conquérant à Hastings' }
    ],
    exercise: {
      question: 'Quelle célèbre œuvre brodée relate la conquête de l’Angleterre par Guillaume en 1066 ?',
      options: ['La tapisserie de la Dame à la licorne', 'La tapisserie de Bayeux', 'Les Très Riches Heures', 'La fresque d’Avignon'],
      correctIndex: 1,
      explanation: 'Longue de près de 70 mètres, la broderie (tapisserie) de Bayeux raconte scène par scène la conquête de 1066.'
    }
  },
  {
    id: 'p42-societe-medievale',
    page: 42,
    title: 'La société médiévale',
    eraId: 'moyen-age',
    kind: 'theme',
    dates: 'Xe – XIIIe siècle',
    subtitle: 'Les trois ordres et les liens d’hommage de la féodalité',
    image: IMG_MOYEN_AGE,
    imageCaption: 'Seigneurs, chevaliers et château fort au cœur de l’ordre féodal.',
    imageObservation: 'Le château fort symbolise à la fois la protection militaire du territoire et l’autorité du seigneur.',
    sections: [
      {
        heading: 'Ceux qui prient, ceux qui combattent, ceux qui travaillent',
        body: 'La société chrétienne du Moyen Âge se conçoit en trois groupes complémentaires : le clergé qui prie pour le salut des âmes, la noblesse qui défend la population par les armes (chevaliers), et l’immense majorité de paysans et d’artisans qui travaille pour nourrir tous les ordres.'
      },
      {
        heading: 'La pyramide féodale',
        body: 'Entre seigneurs s’établissent des liens personnels par la cérémonie de l’hommage : le vassal jure fidélité à son suzerain et lui doit aide militaire et conseil, en échange d’un fief (une terre et ses revenus).'
      }
    ],
    keyTakeaways: [
      'La société médiévale est divisée en trois ordres : oratores (clergé), bellatores (noblesse), laboratores (travailleurs).',
      'La féodalité repose sur le contrat d’hommage entre un suzerain et son vassal.',
      'Les chevaliers obéissent progressivement à un code d’honneur et aux trêves de Dieu prônées par l’Église.'
    ],
    keyDates: [
      { date: 'XIe siècle', label: 'Affirmation du système féodal et de l’adoubement chevaleresque' }
    ],
    exercise: {
      question: 'Comment appelle-t-on la terre accordée par un suzerain à son vassal en échange de sa fidélité ?',
      options: ['Une dîme', 'Un fief', 'Un oppidum', 'Une gabelle'],
      correctIndex: 1,
      explanation: 'Le fief (feudum en latin, d’où vient le mot « féodalité ») permettait au vassal d’entretenir son équipement de chevalier.'
    }
  },
  {
    id: 'p44-paysans-moyen-age',
    page: 44,
    title: 'Les paysans au Moyen Âge',
    eraId: 'moyen-age',
    kind: 'theme',
    dates: 'XIe – XIIIe siècle',
    subtitle: 'La vie quotidienne dans la seigneurie rurale, entre corvées et solidarités',
    image: IMG_MOYEN_AGE,
    imageCaption: 'Le village médiéval rassemblé autour de l’église et au pied du château seigneurial.',
    imageObservation: 'Près de 90 % de la population vivait dans les campagnes et dépendait du calendrier des saisons et des récoltes.',
    sections: [
      {
        heading: 'Vilains et serfs dans la seigneurie',
        body: 'Les paysans représentent près de neuf habitants sur dix. On distingue les vilains (paysans libres qui louent une terre au seigneur) des serfs (attachés au domaine du seigneur). Tous doivent au seigneur des redevances (le cens), les corvées gratuites sur sa réserve et les banalités (paiement pour utiliser le four, le moulin et le pressoir).'
      },
      {
        heading: 'Une vie rythmée par la paroisse et les saisons',
        body: 'Les familles vivent dans de modestes maisons à murs de torchis et toit de chaume. L’alimentation repose sur le pain noir, les bouillies de céréales et les légumes du potager. La paroisse et le clocher rythment les travaux agricoles et les fêtes religieuses.'
      }
    ],
    keyTakeaways: [
      'Près de 90 % de la population médiévale vit à la campagne dans le cadre de la seigneurie.',
      'Les paysans paient des taxes seigneuriales (cens, banalités), des corvées et la dîme à l’Église.',
      'En échange, le seigneur assure leur protection en cas de guerre et rend la justice locale.'
    ],
    keyDates: [
      { date: 'XIe – XIIIe s.', label: 'Multiplication des villages paroissiaux autour des églises rurales' }
    ],
    exercise: {
      question: 'Comment appelait-on les journées de travail gratuit dues par les paysans sur les terres du seigneur ?',
      options: ['Les tailles', 'Les corvées', 'Les dîmes', 'Les croisades'],
      correctIndex: 1,
      explanation: 'Les corvées obligeaient les paysans à labourer la réserve du seigneur ou à entretenir les chemins et fossés du château.'
    }
  },
  {
    id: 'p46-bernard-de-clairvaux',
    page: 46,
    title: 'Bernard de Clairvaux',
    eraId: 'moyen-age',
    kind: 'portrait',
    dates: '1090 – 1153',
    subtitle: 'Le moine cistercien réformateur et grande voix spirituelle du XIIe siècle',
    image: IMG_CHARLEMAGNE,
    imageCaption: 'La vie monastique, la prière et le travail manuel dans les abbayes cisterciennes.',
    imageObservation: 'Les abbayes cisterciennes s’installaient dans des vallées isolées pour vivre selon une stricte sobriété.',
    sections: [
      {
        heading: 'L’idéal cistercien de pauvreté et de travail',
        body: 'Entré à l’abbaye de Cîteaux en 1112, Bernard fonde à 25 ans l’abbaye de Clairvaux en Champagne. Critique envers le luxe de certaines grandes abbayes bénédictines comme Cluny, il prône un retour rigoureux à la règle de saint Benoît : prière, silence, architecture dépouillée et travail manuel.'
      },
      {
        heading: 'Une autorité morale dans toute la chrétienté',
        body: 'Conseiller des papes et des rois de France, Bernard de Clairvaux exerce une immense influence intellectuelle. C’est lui qui prêche la deuxième croisade à Vézelay en 1146 devant le roi Louis VII et la reine Aliénor d’Aquitaine.'
      }
    ],
    keyTakeaways: [
      'Bernard de Clairvaux donne un essor européen à l’ordre cistercien.',
      'Les moines cisterciens participent activement au défrichement des terres et à la maîtrise de l’eau.',
      'Son éloquence en fit l’une des figures religieuses les plus influentes du XIIe siècle.'
    ],
    keyDates: [
      { date: '1115', label: 'Fondation de l’abbaye de Clairvaux par saint Bernard' },
      { date: '1146', label: 'Prédication de la deuxième croisade à Vézelay' }
    ],
    exercise: {
      question: 'De quel grand ordre monastique saint Bernard de Clairvaux fut-il l’âme au XIIe siècle ?',
      options: ['Les Templiers', 'Les Cisterciens', 'Les Jésuites', 'Les Franciscains'],
      correctIndex: 1,
      explanation: 'À partir de Cîteaux et de Clairvaux, l’ordre cistercien essaima dans toute l’Europe médiévale.'
    }
  },
  {
    id: 'p48-progres-agriculture',
    page: 48,
    title: "Les progrès de l'agriculture",
    eraId: 'moyen-age',
    kind: 'theme',
    dates: 'XIe – XIIIe siècle',
    subtitle: 'Charrue à versoir, assolement triennal et grands défrichements',
    image: IMG_MOYEN_AGE,
    imageCaption: 'L’essor des campagnes et des moulins nourrit une population en forte croissance.',
    imageObservation: 'Le perfectionnement des outils agricoles permit au Moyen Âge de doubler la population du royaume.',
    sections: [
      {
        heading: 'Des inventions techniques décisives',
        body: 'À partir du XIe siècle, le remplacement de l’araire en bois par la charrue lourde à soc de fer et versoir permet de labourer profondément les terres grasses du Nord. Le collier d’épaule rigide et le fer à cheval décuplent la force de traction des chevaux.'
      },
      {
        heading: 'Assolement triennal et essor démographique',
        body: 'Les paysans adoptent l’assolement triennal : chaque année, un tiers des terres porte du blé d’hiver, un tiers des céréales ou légumineuses de printemps (avoine, pois), et un tiers reste en jachère. Les moulins à eau et à vent se multiplient, les rendements augmentent et la population française double entre l’an 1000 et 1300.'
      }
    ],
    keyTakeaways: [
      'La charrue à soc de fer et le collier d’épaule révolutionnent le travail de la terre.',
      'L’assolement triennal réduit la jachère à un tiers des terres au lieu de la moitié.',
      'Les grands défrichements et ces progrès techniques entraînent une forte croissance démographique.'
    ],
    keyDates: [
      { date: 'XIe – XIIIe s.', label: '« Beau Moyen Âge » marqué par les grands défrichements et l’essor agricole' }
    ],
    exercise: {
      question: 'Quel avantage principal apporte l’assolement triennal par rapport à l’assolement biennal ?',
      options: [
        'Il supprime complètement les récoltes de blé',
        'Il permet de cultiver deux tiers des terres chaque année au lieu de la moitié',
        'Il remplace tous les bœufs par des tracteurs',
        'Il interdit les moulins à eau'
      ],
      correctIndex: 1,
      explanation: 'Grâce à l’assolement triennal, seule une parcelle sur trois reste au repos (jachère), ce qui accroît fortement la production alimentaire.'
    }
  },
  {
    id: 'p50-croisades-orient',
    page: 50,
    title: 'Les Croisades en Orient',
    eraId: 'moyen-age',
    kind: 'theme',
    dates: '1095 – 1291',
    subtitle: 'Les expéditions de la chrétienté vers Jérusalem et leurs échanges culturels',
    image: IMG_MOYEN_AGE,
    imageCaption: 'Chevaliers croisés et bannières en route vers les États latins d’Orient.',
    imageObservation: 'Les croisades mirent en contact durable l’Occident médiéval avec le monde byzantin et arabo-musulman.',
    sections: [
      {
        heading: 'L’appel de Clermont et la prise de Jérusalem (1099)',
        body: 'En 1095, au concile de Clermont, le pape Urbain II appelle les chevaliers chrétiens à secourir les chrétiens d’Orient et à reprendre Jérusalem aux Turcs seldjoukides. La première croisade aboutit à la prise de Jérusalem en 1099 et à la fondation des États latins d’Orient.'
      },
      {
        heading: 'De nouvelles expéditions et la découverte de l’Orient',
        body: 'Sept autres croisades suivront (menées notamment par Louis VII, Philippe Auguste ou Saint Louis) jusqu’à la perte de Saint-Jean-d’Acre en 1291. Au-delà des combats, ces contacts ouvrent la Méditerranée au commerce (épices, soieries) et transmettent à l’Occident des savoirs scientifiques, médicaux et mathématiques.'
      }
    ],
    keyTakeaways: [
      'Huit grandes croisades sont organisées entre 1095 et 1270 vers la Terre sainte.',
      'Des ordres religieux et militaires (Templiers, Hospitaliers) naissent pour défendre les pèlerins.',
      'Les croisades stimulent le grand commerce méditerranéen et les échanges scientifiques avec l’Orient.'
    ],
    keyDates: [
      { date: '1095', label: 'Appel du pape Urbain II à Clermont' },
      { date: '1099', label: 'Prise de Jérusalem lors de la première croisade' },
      { date: '1291', label: 'Chute de Saint-Jean-d’Acre, fin des États latins d’Orient' }
    ],
    exercise: {
      question: 'En quelle année et dans quelle ville française le pape Urbain II lança-t-il l’appel à la première croisade ?',
      options: ['1066 à Rouen', '1095 à Clermont', '1214 à Bouvines', '1429 à Orléans'],
      correctIndex: 1,
      explanation: 'En novembre 1095, à Clermont (Auvergne), Urbain II exhorte les seigneurs à prendre la croix.'
    }
  },
  {
    id: 'p52-alienor-aquitaine',
    page: 52,
    title: "Aliénor d'Aquitaine",
    eraId: 'moyen-age',
    kind: 'portrait',
    dates: 'v. 1122 – 1204',
    subtitle: 'Duchesse d’Aquitaine, successivement reine de France puis reine d’Angleterre',
    image: IMG_MOYEN_AGE,
    imageCaption: 'Cour chevaleresque, troubadours et enjeux territoriaux entre France et Angleterre.',
    imageObservation: 'Son immense duché d’Aquitaine fit d’Aliénor l’une des personnalités politiques les plus courtisées d’Europe.',
    sections: [
      {
        heading: 'Reine de France, puis reine d’Angleterre',
        body: 'Héritière du riche duché d’Aquitaine, Aliénor épouse en 1137 le roi de France Louis VII et l’accompagne à la deuxième croisade. Mais le couple ne s’entend pas et leur mariage est annulé en 1152. Deux mois plus tard, elle épouse Henri Plantagenêt, qui devient roi d’Angleterre (Henri II) en 1154.'
      },
      {
        heading: 'Protectrice des troubadours et mère de rois',
        body: 'Cette union place près de la moitié de la France sous l’autorité du roi d’Angleterre, déclenchant une longue lutte avec les Capétiens. Mère de Richard Cœur de Lion et de Jean sans Terre, Aliénor tient à Poitiers une cour raffinée où s’épanouit la poésie des troubadours et l’amour courtois.'
      }
    ],
    keyTakeaways: [
      'Aliénor d’Aquitaine fut tour à tour reine de France (épouse de Louis VII) et reine d’Angleterre (épouse d’Henri II).',
      'Son second mariage crée l’immense « Empire Plantagenêt », rival direct du roi de France.',
      'Elle fut une grande mécène des lettres médiévales et de la culture courtoise.'
    ],
    keyDates: [
      { date: '1137', label: 'Mariage d’Aliénor avec Louis VII, roi de France' },
      { date: '1152', label: 'Annulation du mariage et remariage avec Henri Plantagenêt' }
    ],
    exercise: {
      question: 'Quel roi d’Angleterre était le fils célèbre d’Aliénor d’Aquitaine et d’Henri II Plantagenêt ?',
      options: ['Guillaume le Conquérant', 'Richard Cœur de Lion', 'Henri VIII', 'Édouard III'],
      correctIndex: 1,
      explanation: 'Richard Cœur de Lion (1157-1199), célèbre pour sa bravoure lors de la troisième croisade, était le fils préféré d’Aliénor.'
    }
  },
  {
    id: 'p54-philippe-auguste',
    page: 54,
    title: 'Philippe II Auguste',
    eraId: 'moyen-age',
    kind: 'portrait',
    dates: '1165 – 1223',
    subtitle: 'Le roi bâtisseur qui quadrupla le domaine royal et triompha à Bouvines',
    image: IMG_MOYEN_AGE,
    imageCaption: 'La victoire de Bouvines (1214) consolide durablement l’autorité du roi de France.',
    imageObservation: 'Philippe Auguste transforme Paris (enceinte, pavage, forteresse du Louvre) et affirme l’État royal.',
    sections: [
      {
        heading: 'La conquête des terres Plantagenêt et la victoire de Bouvines',
        body: 'Roi de 1180 à 1223, Philippe II, surnommé Auguste (« celui qui accroît »), reprend au roi anglais Jean sans Terre la Normandie, le Maine, l’Anjou et la Touraine. En 1214, à Bouvines (dans le Nord), il écrase une coalition conduite par l’empereur germanique Otton IV et le comte de Flandre.'
      },
      {
        heading: 'La naissance de l’administration royale et de Paris',
        body: 'Premier souverain à se proclamer « roi de France » (et non plus seulement « roi des Francs »), il crée des baillis et sénéchaux salariés pour contrôler la justice et les impôts. À Paris, il fait paver les rues principales, édifie une grande muraille et bâtit la forteresse du Louvre.'
      }
    ],
    keyTakeaways: [
      'Philippe Auguste multiplie par quatre l’étendue du domaine royal aux dépens des Plantagenêt.',
      'Le 27 juillet 1214, sa victoire à Bouvines suscite un véritable élan de fierté dans le royaume.',
      'Il crée l’administration des baillis et sénéchaux et fait construire la forteresse du Louvre.'
    ],
    keyDates: [
      { date: '1180', label: 'Avènement de Philippe II Auguste' },
      { date: '1204', label: 'Rattachement de la Normandie au domaine royal' },
      { date: '27 juillet 1214', label: 'Victoire décisive de Bouvines' }
    ],
    exercise: {
      question: 'Quelle grande bataille de 1214 permet à Philippe Auguste de l’emporter sur l’empereur Otton IV et ses alliés ?',
      options: ['Alésia', 'Poitiers', 'Bouvines', 'Marignan'],
      correctIndex: 2,
      explanation: 'La victoire de Bouvines (27 juillet 1214) assura définitivement les conquêtes de Philippe Auguste face aux Plantagenêt.'
    }
  },
  {
    id: 'p56-simon-de-montfort',
    page: 56,
    title: 'Simon IV de Montfort',
    eraId: 'moyen-age',
    kind: 'portrait',
    dates: 'v. 1165 – 1218',
    subtitle: 'La croisade contre les Albigeois (Cathares) et le rattachement du Languedoc',
    image: IMG_MOYEN_AGE,
    imageCaption: 'Sièges des places fortes du Midi lors de la croisade des Albigeois.',
    imageObservation: 'Cette guerre religieuse et politique permit à terme à la couronne de France de s’étendre jusqu’à la Méditerranée.',
    sections: [
      {
        heading: 'L’essor du catharisme en Languedoc',
        body: 'Au XIIe siècle, le Midi toulousain connaît un brillant essor urbain mais voit se diffuser le catharisme, un mouvement chrétien dissident (appelé hérésie albigeoise par Rome) qui rejette les sacrements et la richesse de l’Église.'
      },
      {
        heading: 'La croisade conduite par Simon de Montfort',
        body: 'En 1209, le pape Innocent III lance une croisade vers le Languedoc. Le seigneur francilien Simon IV de Montfort prend la tête des croisés, s’empare de Béziers et de Carcassonne et bat le comte de Toulouse à Muret (1213), avant d’être tué au siège de Toulouse en 1218. Plus tard, le Languedoc sera rattaché au royaume.'
      }
    ],
    keyTakeaways: [
      'La croisade contre les Albigeois (1209 – 1229) vise à éradiquer le catharisme dans le Sud.',
      'Simon IV de Montfort conquiert une grande partie du Languedoc avant de mourir en 1218.',
      'À l’issue du conflit, le royaume de France s’ouvre un accès direct à la mer Méditerranée.'
    ],
    keyDates: [
      { date: '1209', label: 'Début de la croisade contre les Albigeois' },
      { date: '1213', label: 'Victoire de Simon de Montfort à Muret' }
    ],
    exercise: {
      question: 'Contre quel mouvement religieux du Languedoc fut menée la croisade conduite par Simon de Montfort ?',
      options: ['Les protestants', 'Les Cathares (Albigeois)', 'Les Templiers', 'Les Jansénistes'],
      correctIndex: 1,
      explanation: 'Le catharisme (ou hérésie des Albigeois, d’après la ville d’Albi) s’était implanté dans le comté de Toulouse.'
    }
  },
  {
    id: 'p58-saint-louis',
    page: 58,
    title: 'Louis IX dit Saint Louis',
    eraId: 'moyen-age',
    kind: 'portrait',
    dates: '1214 – 1270',
    subtitle: 'L’idéal du roi juste, bâtisseur de la Sainte-Chapelle et artisan de paix',
    image: IMG_MOYEN_AGE,
    imageCaption: 'Sous Saint Louis, le prestige moral et judiciaire de la monarchie atteint son apogée.',
    imageObservation: 'Son biographe Joinville a popularisé l’image du roi rendant la justice lui-même sous le chêne de Vincennes.',
    sections: [
      {
        heading: 'Un roi réformateur de la justice et de la monnaie',
        body: 'Élevé par sa mère Blanche de Castille, Louis IX règne de 1226 à 1270. Il interdit les guerres privées entre seigneurs ainsi que les duels judiciaires, développe l’appel au Parlement royal et crée une monnaie d’or fiable, l’écu d’or, valable dans tout le royaume.'
      },
      {
        heading: 'La foi, la Sainte-Chapelle et les croisades',
        body: 'Profondément pieux, Louis IX fait édifier à Paris la Sainte-Chapelle pour abriter la couronne d’épines. Il mène deux croisades en Égypte puis à Tunis, où il meurt de la peste en 1270. Canonisé en 1297, il devient Saint Louis, modèle du souverain chrétien.'
      }
    ],
    keyTakeaways: [
      'Louis IX renforce l’autorité de la justice royale et instaure une monnaie commune fiable.',
      'Il conclut le traité de Paris (1259) avec l’Angleterre pour pacifier le royaume.',
      'Il meurt devant Tunis en 1270 et est canonisé en 1297 sous le nom de Saint Louis.'
    ],
    keyDates: [
      { date: '1226 – 1270', label: 'Règne de Louis IX (régence initiale de Blanche de Castille)' },
      { date: '1248', label: 'Consécration de la Sainte-Chapelle à Paris' },
      { date: '1270', label: 'Mort de Saint Louis à Tunis' }
    ],
    quote: {
      text: 'Maintes fois advint qu’en été il allait s’asseoir au bois de Vincennes après sa messe, et s’appuyait à un chêne.',
      author: 'Jean de Joinville, Vie de Saint Louis'
    },
    exercise: {
      question: 'Quel joyau de l’art gothique rayonnant Saint Louis fit-il bâtir à Paris pour abriter les reliques de la Passion ?',
      options: ['La cathédrale de Chartres', 'La Sainte-Chapelle', 'La tour Eiffel', 'Le château de Chambord'],
      correctIndex: 1,
      explanation: 'Édifiée en un temps record sur l’île de la Cité (1242-1248), la Sainte-Chapelle est célèbre pour ses immenses verrières.'
    }
  },
  {
    id: 'p60-robert-de-sorbon',
    page: 60,
    title: 'Robert de Sorbon',
    eraId: 'moyen-age',
    kind: 'portrait',
    dates: '1201 – 1274',
    subtitle: 'Le fondateur du collège de Sorbonne et l’essor des universités médiévales',
    image: IMG_CHARLEMAGNE,
    imageCaption: 'L’enseignement universitaire et l’étude des textes au cœur du Quartier latin.',
    imageObservation: 'Dès le XIIIe siècle, Paris devient le principal foyer théologique et intellectuel d’Europe.',
    sections: [
      {
        heading: 'La naissance de l’Université de Paris',
        body: 'À partir de 1200, maîtres et étudiants venus de toute l’Europe se regroupent sur la rive gauche de la Seine (le Quartier latin, car les cours se donnent en latin) au sein d’une corporation protégée par le roi et le pape : l’Université.'
      },
      {
        heading: 'Le collège de Sorbonne (1257)',
        body: 'Chapelain et confesseur de Saint Louis, le théologien Robert de Sorbon fonde en 1257 un collège destiné à loger et instruire gratuitement des étudiants pauvres en théologie. Cet établissement gagne un tel renom que le nom de « Sorbonne » finit par désigner l’Université de Paris tout entière.'
      }
    ],
    keyTakeaways: [
      'Au XIIIe siècle, les universités (Paris, Montpellier, Toulouse) remplacent peu à peu les écoles monastiques.',
      'En 1257, Robert de Sorbon fonde le collège qui donnera son nom à la Sorbonne.',
      'On y enseigne les « sept arts libéraux », le droit, la médecine et la théologie.'
    ],
    keyDates: [
      { date: '1200', label: 'Charte de Philippe Auguste reconnaissant les privilèges de l’Université de Paris' },
      { date: '1257', label: 'Fondation du collège de Sorbonne par Robert de Sorbon' }
    ],
    exercise: {
      question: 'Pourquoi le quartier des universités à Paris s’appelle-t-il le « Quartier latin » ?',
      options: [
        'Parce qu’il fut bâti par Jules César seul',
        'Parce que tous les cours et échanges universitaires s’y faisaient en latin',
        'Parce qu’on y parlait italien',
        'Parce qu’il abritait le château de Versailles'
      ],
      correctIndex: 1,
      explanation: 'Le latin étant la langue savante commune de toute l’Europe médiévale, étudiants français, anglais ou allemands se comprenaient en latin.'
    }
  },
  {
    id: 'p62-art-roman-gothique',
    page: 62,
    title: 'Art roman et art gothique',
    eraId: 'moyen-age',
    kind: 'theme',
    dates: 'XIe – XIVe siècle',
    subtitle: 'Des églises romanes massives aux cathédrales gothiques de lumière',
    image: IMG_MOYEN_AGE,
    imageCaption: 'L’évolution architecturale des édifices religieux au Moyen Âge.',
    imageObservation: 'L’arc brisé et l’arc-boutant permirent d’alléger les murs et d’ouvrir d’immenses rosaces colorées.',
    sections: [
      {
        heading: 'L’art roman (XIe – XIIe siècle)',
        body: 'L’art roman se caractérise par des murs épais, de petites fenêtres, des voûtes en berceau et des arcs en plein cintre (demi-cercle). Les chapiteaux sculptés et les tympans racontent les scènes bibliques aux fidèles (abbayes de Conques, Vézelay, Cluny).'
      },
      {
        heading: 'L’art gothique (à partir du XIIe siècle)',
        body: 'Apparu en Île-de-France vers 1140 (Saint-Denis), l’art gothique repose sur l’arc brisé (ogive) et les arcs-boutants extérieurs qui reportent le poids des voûtes. Les murs s’effacent au profit d’immenses vitraux lumineux dans les cathédrales de Notre-Dame de Paris, Chartres, Reims ou Amiens.'
      }
    ],
    keyTakeaways: [
      'Art roman : arcs en plein cintre, murs épais, atmosphère recueillie.',
      'Art gothique : croisée d’ogives, arcs-boutants, élévation vertigineuse et grands vitraux.',
      'Les cathédrales sont le cœur spirituel, artistique et civique des villes médiévales.'
    ],
    keyDates: [
      { date: 'v. 1140', label: 'Chœur de l’abbaye de Saint-Denis, manifeste du premier art gothique' },
      { date: '1163', label: 'Début de la construction de Notre-Dame de Paris' }
    ],
    exercise: {
      question: 'Quel élément technique extérieur permet aux cathédrales gothiques de s’élever très haut tout en ouvrant de vastes vitraux ?',
      options: ['L’aqueduc', 'L’arc-boutant', 'Le pont-levis', 'La voûte en berceau'],
      correctIndex: 1,
      explanation: 'L’arc-boutant reprend la poussée latérale des voûtes à l’extérieur du bâtiment, permettant de percer les murs.'
    }
  },
  {
    id: 'p64-philippe-le-bel',
    page: 64,
    title: 'Philippe IV le Bel',
    eraId: 'moyen-age',
    kind: 'portrait',
    dates: '1268 – 1314',
    subtitle: 'L’affirmation de l’État souverain, les États généraux et la fin des Templiers',
    image: IMG_MOYEN_AGE,
    imageCaption: 'Sous Philippe le Bel, les légistes affirment que le roi est « empereur en son royaume ».',
    imageObservation: 'Pour financer un État moderne, Philippe le Bel convoqua les premiers États généraux en 1302.',
    sections: [
      {
        heading: 'Un roi entouré de légistes face au pape',
        body: 'Petit-fils de Saint Louis, Philippe IV le Bel renforce l’administration centrale (Parlement, Chambre des comptes). Lorsqu’il veut taxer les biens du clergé, il entre en conflit ouvert avec le pape Boniface VIII et réunit en 1302 les premiers États généraux (représentants du clergé, de la noblesse et des villes) pour obtenir leur soutien.'
      },
      {
        heading: 'Le procès des Templiers (1307 – 1314)',
        body: 'Endetté par ses guerres en Flandre, le roi fait arrêter en 1307 les chevaliers de l’ordre du Temple (les Templiers), riches banquiers accusés d’hérésie. L’ordre est dissous en 1312 et son grand maître Jacques de Molay est brûlé à Paris en 1314.'
      }
    ],
    keyTakeaways: [
      'En 1302, Philippe le Bel convoque les premiers États généraux du royaume.',
      'Il impose la souveraineté du roi de France face à l’autorité temporelle du pape.',
      'Il supprime l’ordre des Templiers en 1307-1314 pour saisir leurs biens et affermir son pouvoir.'
    ],
    keyDates: [
      { date: '1302', label: 'Première convocation des États généraux à Notre-Dame de Paris' },
      { date: '1307', label: 'Arrestation des Templiers dans tout le royaume' }
    ],
    exercise: {
      question: 'Quelle grande assemblée réunissant les trois ordres du royaume Philippe le Bel convoque-t-il pour la première fois en 1302 ?',
      options: ['L’Assemblée nationale', 'Les États généraux', 'Le Sénat romain', 'Le Concile de Clermont'],
      correctIndex: 1,
      explanation: 'Les États généraux réunissaient les députés du clergé, de la noblesse et des bonnes villes (futur Tiers État).'
    }
  },
  {
    id: 'p66-peste-noire',
    page: 66,
    title: 'La peste noire',
    eraId: 'moyen-age',
    kind: 'theme',
    dates: '1347 – 1352',
    subtitle: 'L’épidémie foudroyante qui décime un tiers de la population européenne',
    image: IMG_MOYEN_AGE,
    imageCaption: 'Le XIVe siècle est frappé par les famines, la guerre et la grande épidémie de peste.',
    imageObservation: 'Arrivée par les navires marchands de Méditerranée, la peste bouleversa profondément l’économie et les mentalités.',
    sections: [
      {
        heading: 'Une contagion fulgurante venue d’Orient',
        body: 'Venue d’Asie centrale par les routes commerciales, la peste noire débarque à Marseille fin 1347 à bord de navires génois, avant de gagner tout le royaume de France en 1348. Transmise par les puces des rats, la maladie est alors incomprise par les médecins.'
      },
      {
        heading: 'Un choc démographique et social durable',
        body: 'En quelques années, l’épidémie emporte entre un tiers et la moitié des habitants dans certaines régions. Des villages se vident, la main-d’œuvre devient rare et les salaires agricoles augmentent, tandis que l’art et la piété s’expriment à travers le thème des danses macabres.'
      }
    ],
    keyTakeaways: [
      'La peste noire touche la France à partir de 1347-1348 et tue environ un tiers de la population.',
      'Elle s’ajoute aux disettes et aux ravages de la guerre de Cent Ans.',
      'La chute démographique entraîne un manque de bras dans les campagnes et transforme l’économie.'
    ],
    keyDates: [
      { date: '1347 – 1348', label: 'Propagation de la peste noire depuis Marseille à travers le royaume' }
    ],
    exercise: {
      question: 'Par quel grand port méditerranéen la peste noire pénètre-t-elle en France fin 1347 ?',
      options: ['Bordeaux', 'Marseille', 'Calais', 'Nantes'],
      correctIndex: 1,
      explanation: 'Des galères génoises venues de mer Noire contaminèrent d’abord les ports italiens puis Marseille à l’automne 1347.'
    }
  },
  {
    id: 'p68-philippe-vi',
    page: 68,
    title: 'Philippe VI',
    eraId: 'moyen-age',
    kind: 'portrait',
    dates: '1293 – 1350',
    subtitle: 'Le premier roi de la branche des Valois et les débuts de la guerre de Cent Ans',
    image: IMG_MOYEN_AGE,
    imageCaption: 'Le changement dynastique de 1328 ouvre la voie au long conflit franco-anglais.',
    imageObservation: 'L’exclusion des femmes de la succession royale (loi salique) écarta le roi d’Angleterre au profit des Valois.',
    sections: [
      {
        heading: 'L’avènement des Valois (1328)',
        body: 'En 1328, Charles IV, dernier fils de Philippe le Bel, meurt sans héritier mâle. Les barons français écartent le roi d’Angleterre Édouard III (petit-fils de Philippe le Bel par sa mère) et choisissent un cousin en ligne masculine : Philippe de Valois, qui devient Philippe VI.'
      },
      {
        heading: 'Les premiers revers militaires',
        body: 'Lorsque Philippe VI confisque le duché de Guyenne à Édouard III en 1337, celui-ci revendique le trône de France : c’est le début de la guerre de Cent Ans. Le règne de Philippe VI est assombri par la défaite navale de l’Écluse (1340) puis par le désastre de la chevalerie française à Crécy (1346) et la perte de Calais.'
      }
    ],
    keyTakeaways: [
      'En 1328, Philippe VI fonde la dynastie des Valois, branche cadette des Capétiens.',
      'En 1337 éclate la guerre de Cent Ans contre le roi d’Angleterre Édouard III.',
      'À Crécy (1346), les archers anglais déciment la chevalerie lourde française.'
    ],
    keyDates: [
      { date: '1328', label: 'Avènement de Philippe VI de Valois' },
      { date: '1346', label: 'Défaite française à Crécy et siège de Calais (Les Bourgeois de Calais)' }
    ],
    exercise: {
      question: 'Quelle nouvelle branche dynastique Philippe VI inaugure-t-il en 1328 ?',
      options: ['Les Carolingiens', 'Les Valois', 'Les Bourbons', 'Les Mérovingiens'],
      correctIndex: 1,
      explanation: 'Les rois de la maison de Valois régneront sur la France de 1328 à 1589 (jusqu’à Henri III).'
    }
  },
  {
    id: 'p70-etienne-marcel',
    page: 70,
    title: 'Étienne Marcel',
    eraId: 'moyen-age',
    kind: 'portrait',
    dates: 'v. 1310 – 1358',
    subtitle: 'Le prévôt des marchands de Paris qui tenta de limiter le pouvoir royal',
    image: IMG_MOYEN_AGE,
    imageCaption: 'Les troubles parisiens et la crise de la monarchie après la capture de Jean II le Bon.',
    imageObservation: 'Dans les villes, la bourgeoisie marchande réclama un droit de regard sur les impôts levés par le roi.',
    sections: [
      {
        heading: 'Le désastre de Poitiers et la révolte parisienne',
        body: 'En 1356, le roi Jean II le Bon est fait prisonnier par les Anglais à la bataille de Poitiers. Pour payer son immense rançon, le dauphin Charles doit demander de nouveaux impôts aux États généraux.'
      },
      {
        heading: 'La Grande Ordonnance de 1357',
        body: 'Le prévôt des marchands de Paris, Étienne Marcel, prend la tête d’un mouvement réformateur et impose la Grande Ordonnance de 1357, qui soumet la levée des impôts à l’accord des États généraux. Emporté par la violence et l’alliance avec la jacquerie paysanne, il est tué aux portes de Paris en 1358.'
      }
    ],
    keyTakeaways: [
      'Étienne Marcel, prévôt des marchands de Paris, exige en 1357 un contrôle des finances royales par les États généraux.',
      'La même année, une grande révolte paysanne éclate en Île-de-France : la Grande Jacquerie.',
      'Le dauphin Charles (futur Charles V) parvient finalement à rétablir l’autorité royale.'
    ],
    keyDates: [
      { date: '1356', label: 'Capture du roi Jean II le Bon à Poitiers' },
      { date: '1357 – 1358', label: 'Révolte parisienne d’Étienne Marcel et Grande Jacquerie' }
    ],
    exercise: {
      question: 'Quelle fonction occupait Étienne Marcel à la tête de la ville de Paris en 1357 ?',
      options: ['Connétable de France', 'Prévôt des marchands', 'Évêque de Paris', 'Premier ministre'],
      correctIndex: 1,
      explanation: 'Le prévôt des marchands dirigeait la municipalité parisienne et les puissantes corporations commerciales de la Seine.'
    }
  },
  {
    id: 'p72-guerre-cent-ans',
    page: 72,
    title: 'La guerre de Cent Ans',
    eraId: 'moyen-age',
    kind: 'theme',
    dates: '1337 – 1453',
    subtitle: 'Un siècle de conflits entre les couronnes de France et d’Angleterre',
    image: IMG_MOYEN_AGE,
    imageCaption: 'Armées royales, sièges de châteaux et chevauchées durant la guerre de Cent Ans.',
    imageObservation: 'Entrecoupée de longues trêves, cette guerre dura en réalité 116 ans et forgea le sentiment national français.',
    sections: [
      {
        heading: 'Les causes d’un conflit interminable',
        body: 'Commencée en 1337, la guerre de Cent Ans oppose les rois de France Valois aux rois d’Angleterre, qui détiennent de riches fiefs en France (Aquitaine) et revendiquent la couronne française après l’extinction des Capétiens directs.'
      },
      {
        heading: 'Des défaites terribles au sursaut final',
        body: 'Le conflit alterne crises dramatiques (Crécy 1346, Poitiers 1356, Azincourt 1415) et redressements spectaculaires sous Charles V puis Charles VII avec Jeanne d’Arc. L’utilisation de l’artillerie à poudre par les frères Bureau permet la victoire de Castillon en 1453 : les Anglais ne conservent plus que Calais.'
      }
    ],
    keyTakeaways: [
      'La guerre de Cent Ans dure de 1337 à 1453, entrecoupée de trêves.',
      'Elle ruine temporairement les campagnes françaises mais renforce l’État royal, l’impôt permanent et l’armée de métier.',
      'À la victoire finale de 1453 (bataille de Castillon), les Anglais sont chassés du continent sauf de Calais.'
    ],
    keyDates: [
      { date: '1337', label: 'Début de la guerre de Cent Ans' },
      { date: '1415', label: 'Lourde défaite française à Azincourt' },
      { date: '1453', label: 'Victoire française à Castillon et fin du conflit' }
    ],
    exercise: {
      question: 'Quelle est la seule ville française que les Anglais conservent à la fin de la guerre de Cent Ans en 1453 ?',
      options: ['Bordeaux', 'Calais', 'Rouen', 'Orléans'],
      correctIndex: 1,
      explanation: 'Prise en 1347, Calais resta anglaise jusqu’en 1558, date de sa reprise par le duc de Guise sous Henri II.'
    }
  },
  {
    id: 'p74-charles-v-du-guesclin',
    page: 74,
    title: 'Charles V et du Guesclin',
    eraId: 'moyen-age',
    kind: 'portrait',
    dates: '1364 – 1380',
    subtitle: 'La reconquête méthodique du royaume par le roi sage et son connétable',
    image: IMG_MOYEN_AGE,
    imageCaption: 'Le connétable Bertrand du Guesclin mène une guerre d’usure efficace.',
    imageObservation: 'En évitant les grandes batailles rangées et en assiégeant méthodiquement les places fortes, du Guesclin renversa la situation.',
    sections: [
      {
        heading: 'Charles V le Sage, réformateur de l’État',
        body: 'Devenu roi en 1364 après les désastres du règne précédent, Charles V réorganise les finances, crée une monnaie stable (le franc) et fonde la première bibliothèque royale au Louvre. Homme d’étude et fin diplomate, il préfère la stratégie patiente aux charges chevaleresques imprudentes.'
      },
      {
        heading: 'La tactique de Bertrand du Guesclin',
        body: 'Nommé connétable (chef des armées) en 1370, le chevalier breton Bertrand du Guesclin débarrasse la France des Grandes Compagnies de mercenaires et reconquiert presque tous les territoires cédés aux Anglais par une tactique d’escarmouches et de sièges.'
      }
    ],
    keyTakeaways: [
      'Charles V redresse les finances et la justice du royaume après le traité de Brétigny (1360).',
      'Bertrand du Guesclin évite les batailles rangées et reprend place par place aux Anglais.',
      'À la mort de Charles V en 1380, les Anglais ne contrôlent plus que quelques ports.'
    ],
    keyDates: [
      { date: '1364', label: 'Sacre de Charles V à Reims' },
      { date: '1370', label: 'Bertrand du Guesclin nommé connétable de France' }
    ],
    exercise: {
      question: 'Quelle tactique militaire permit à Bertrand du Guesclin de reprendre la majeure partie du royaume aux Anglais ?',
      options: [
        'Des charges frontales en terrain découvert',
        'Éviter les grandes batailles rangées et mener des sièges et escarmouches',
        'Abandonner toutes les forteresses',
        'Signer la paix sans combattre'
      ],
      correctIndex: 1,
      explanation: 'Refusant d’offrir aux archers anglais une cible facile comme à Crécy ou Poitiers, du Guesclin pratiqua la guerre d’usure.'
    }
  },
  {
    id: 'p76-armagnacs-bourguignons',
    page: 76,
    title: 'Armagnacs contre Bourguignons',
    eraId: 'moyen-age',
    kind: 'theme',
    dates: '1407 – 1435',
    subtitle: 'La guerre civile française qui favorisa l’invasion anglaise',
    image: IMG_MOYEN_AGE,
    imageCaption: 'La division tragique des princes français au début du XVe siècle.',
    imageObservation: 'Pendant la folie de Charles VI, le royaume se déchira entre deux factions rivales.',
    sections: [
      {
        heading: 'La folie de Charles VI et l’assassinat de 1407',
        body: 'À partir de 1392, le roi Charles VI sombre dans la démence. Ses parents se disputent le pouvoir : d’un côté son frère Louis d’Orléans, de l’autre son cousin le duc de Bourgogne Jean sans Peur, qui fait assassiner Louis d’Orléans dans Paris en 1407.'
      },
      {
        heading: 'Le traité de Troyes (1420)',
        body: 'La France bascule dans la guerre civile entre Armagnacs (partisans du dauphin Charles) et Bourguignons. Alliés aux Anglais après Azincourt (1415), les Bourguignons obtiennent en 1420 le traité de Troyes qui déshérite le dauphin au profit du roi d’Angleterre Henri V.'
      }
    ],
    keyTakeaways: [
      'La démence de Charles VI plonge le royaume dans la guerre civile entre Armagnacs et Bourguignons.',
      'Le roi d’Angleterre Henri V profite de cette division pour vaincre à Azincourt (1415).',
      'En 1435, la paix d’Arras réconcilie finalement Charles VII et le duc de Bourgogne.'
    ],
    keyDates: [
      { date: '1407', label: 'Assassinat de Louis d’Orléans ; début de la guerre civile' },
      { date: '1420', label: 'Traité de Troyes livrant la succession royale au roi d’Angleterre' },
      { date: '1435', label: 'Traité d’Arras réconciliant Charles VII et le duc de Bourgogne' }
    ],
    exercise: {
      question: 'Quel traité de 1420 prétendit déshériter le dauphin Charles au profit du roi d’Angleterre ?',
      options: ['Le traité de Verdun', 'Le traité de Troyes', 'Le traité de Paris', 'L’édit de Nantes'],
      correctIndex: 1,
      explanation: 'Imposé sous la pression bourguignonne et anglaise, le traité de Troyes ne fut jamais reconnu par les partisans du dauphin (futur Charles VII).'
    }
  },
  {
    id: 'p78-charles-vii',
    page: 78,
    title: 'Charles VII',
    eraId: 'moyen-age',
    kind: 'portrait',
    dates: '1403 – 1461',
    subtitle: 'Du « roi de Bourges » contesté au restaurateur victorieux du royaume',
    image: IMG_MOYEN_AGE,
    imageCaption: 'Charles VII reconquiert le royaume et crée la première armée permanente.',
    imageObservation: 'Grâce à une réforme fiscale et militaire de grande ampleur, Charles VII acheva victorieusement la guerre de Cent Ans.',
    sections: [
      {
        heading: 'Du roi de Bourges au sacre de Reims',
        body: 'Réfugié au sud de la Loire au début de son règne et moqué comme le « petit roi de Bourges », Charles VII retrouve toute sa légitimité en 1429 lorsque Jeanne d’Arc le conduit à Reims pour y être sacré roi de France.'
      },
      {
        heading: 'La création d’une armée et d’un impôt permanents',
        body: 'Réconcilié avec la Bourgogne en 1435, Charles VII reprend Paris (1436), crée les compagnies d’ordonnance (première armée permanente payée par l’État) grâce à la taille royale permanente, et équipe son armée d’une artillerie moderne. Il chasse ainsi les Anglais de Normandie (1450) et de Guyenne (1453).'
      }
    ],
    keyTakeaways: [
      'Sacré à Reims en 1429 grâce à Jeanne d’Arc, Charles VII s’impose comme roi légitime.',
      'Il institue une armée permanente (compagnies d’ordonnance) financée par un impôt régulier (la taille).',
      'Il met fin à la guerre de Cent Ans en 1453 et mérite son surnom de « Charles le Victorieux ».'
    ],
    keyDates: [
      { date: '1429', label: 'Sacre de Charles VII à Reims' },
      { date: '1445', label: 'Création des compagnies d’ordonnance (armée permanente)' }
    ],
    exercise: {
      question: 'Quel impôt direct permanent permet à Charles VII de financer la première armée royale de métier ?',
      options: ['La gabelle', 'La taille', 'L’octroi', 'La dîme'],
      correctIndex: 1,
      explanation: 'La taille devint sous Charles VII un impôt annuel permanent levé sans convocation des États généraux pour solder l’armée.'
    }
  },
  {
    id: 'p80-jeanne-darc',
    page: 80,
    title: "Jeanne d'Arc",
    eraId: 'moyen-age',
    kind: 'portrait',
    dates: 'v. 1412 – 1431',
    subtitle: 'La jeune Lorraine qui délivra Orléans et rendit courage au royaume',
    image: IMG_MOYEN_AGE,
    imageCaption: 'Jeanne d’Arc à cheval devant Orléans portant sa bannière blanche fleurdelisée.',
    imageObservation: 'En armure blanche, Jeanne d’Arc rallia chevaliers et gens du peuple autour de l’autorité du roi légitime.',
    sections: [
      {
        heading: 'De Domrémy à la délivrance d’Orléans (1429)',
        body: 'Née dans une famille paysanne à Domrémy (Lorraine), Jeanne affirme entendre des voix lui ordonnant de « bouter les Anglais hors de France ». Reçue par le dauphin Charles à Chinon en 1429, elle obtient le commandement d’une troupe et délivre Orléans en quelques jours (8 mai 1429), puis remporte Patay.'
      },
      {
        heading: 'Le sacre de Reims et le martyre de Rouen (1431)',
        body: 'Elle conduit Charles VII à Reims le 17 juillet 1429 pour le sacre royal. Capturée devant Compiègne par les Bourguignons en 1430 et vendue aux Anglais, elle est jugée pour hérésie par un tribunal acquis à l’Angleterre et brûlée vive à Rouen le 30 mai 1431. Réhabilitée en 1456, elle est canonisée en 1920.'
      }
    ],
    keyTakeaways: [
      'En mai 1429, Jeanne d’Arc libère Orléans assiégée par les Anglais.',
      'Le 17 juillet 1429, elle fait sacrer Charles VII à Reims.',
      'Brûlée à Rouen le 30 mai 1431 à 19 ans, elle demeure le symbole du sursaut patriotique français.'
    ],
    keyDates: [
      { date: '8 mai 1429', label: 'Délivrance d’Orléans' },
      { date: '17 juillet 1429', label: 'Sacre de Charles VII à Reims' },
      { date: '30 mai 1431', label: 'Supplice de Jeanne d’Arc à Rouen' }
    ],
    quote: {
      text: 'De par le Roi du Ciel, je suis venue pour bouter hors les Anglais de toute France.',
      author: 'Lettre de Jeanne d’Arc aux Anglais, 1429'
    },
    exercise: {
      question: 'Dans quelle ville Jeanne d’Arc fut-elle jugée et brûlée vive le 30 mai 1431 ?',
      options: ['Orléans', 'Reims', 'Rouen', 'Paris'],
      correctIndex: 2,
      explanation: 'C’est sur la place du Vieux-Marché à Rouen, alors occupée par les Anglais, que Jeanne d’Arc fut exécutée.'
    }
  },
  {
    id: 'p82-developpement-villes-commerce',
    page: 82,
    title: 'Le développement des villes et du commerce',
    eraId: 'moyen-age',
    kind: 'theme',
    dates: 'XIIe – XVe siècle',
    subtitle: 'Communes affranchies, corporations d’artisans et grandes foires marchandes',
    image: IMG_MOYEN_AGE,
    imageCaption: 'Aux pieds des forteresses et des cathédrales, les bourgs marchands prennent leur essor.',
    imageObservation: 'Les villes médiévales s’entourent de remparts, élèvent des beffrois et organisent les métiers en corporations.',
    sections: [
      {
        heading: 'L’essor des communes et des bourgeois',
        body: 'Grâce aux surplus agricoles, l’artisanat et les échanges renaissent dès le XIe siècle. Les habitants des bourgs — les bourgeois — s’unissent pour obtenir du seigneur ou du roi une charte de franchise : la ville devient une commune autonome dotée d’un beffroi et de ses propres juges (échevins).'
      },
      {
        heading: 'Foires de Champagne et corporations',
        body: 'Les artisans se regroupent par métiers (drapiers, orfèvres, charpentiers) au sein de corporations strictes formant apprentis, compagnons et maîtres. Aux XIIe et XIIIe siècles, les foires de Champagne (Troyes, Provins) deviennent le carrefour commercial de l’Europe entre draps flamands et épices italiennes.'
      }
    ],
    keyTakeaways: [
      'De nombreuses villes obtiennent des chartes de franchise et s’administrent librement (communes).',
      'Les artisans et commerçants s’organisent en corporations réglementées.',
      'Les grandes foires de Champagne favorisent l’essor de la banque et de la lettre de change.'
    ],
    keyDates: [
      { date: 'XIIe – XIIIe s.', label: 'Apogée des foires internationales de Champagne' }
    ],
    exercise: {
      question: 'Quel bâtiment municipal symbolisait au Moyen Âge les libertés acquises par une ville ou commune ?',
      options: ['Le donjon', 'Le beffroi', 'L’aqueduc', 'Le théâtre antique'],
      correctIndex: 1,
      explanation: 'Le beffroi abritait la cloche municipale servant à appeler les bourgeois aux assemblées ou à sonner l’alerte.'
    }
  },
  {
    id: 'p84-jacques-coeur',
    page: 84,
    title: 'Jacques Cœur',
    eraId: 'moyen-age',
    kind: 'portrait',
    dates: 'v. 1395 – 1456',
    subtitle: 'Le grand marchand et argentier de Charles VII à l’aube des Temps modernes',
    image: IMG_RENAISSANCE_PLACEHOLDER(),
    imageCaption: 'L’opulence marchande à la fin du Moyen Âge, incarnée par l’hôtel Jacques-Cœur à Bourges.',
    imageObservation: 'Sa devise « À vaillants cœurs rien d’impossible » illustre l’ambition d’une grande bourgeoisie d’affaires.',
    sections: [
      {
        heading: 'Un empire commercial méditerranéen',
        body: 'Fils d’un pelletier de Bourges, Jacques Cœur bâtit une flotte de galères à Montpellier et commerce directement avec l’Orient (soieries, épices, tapis), tout en exploitant des mines et des ateliers en France.'
      },
      {
        heading: 'Grand argentier du roi et disgrâce',
        body: 'Nommé Grand Argentier par Charles VII en 1439, il assainit la monnaie royale et finance par ses prêts personnels la reconquête de la Normandie. Jalouse de sa fortune immense, la noblesse l’accuse à tort en 1451 ; arrêté et dépouillé de ses biens, il s’évade et meurt en Orient en 1456.'
      }
    ],
    keyTakeaways: [
      'Jacques Cœur est le premier grand capitaliste et armateur français de la fin du Moyen Âge.',
      'Grand Argentier de Charles VII, il aide à financer la fin de la guerre de Cent Ans.',
      'Son palais gothique flamboyant à Bourges témoigne de sa réussite exceptionnelle.'
    ],
    keyDates: [
      { date: '1439', label: 'Jacques Cœur devient Grand Argentier de Charles VII' },
      { date: '1451', label: 'Arrestation et procès de Jacques Cœur' }
    ],
    quote: {
      text: 'À vaillants cœurs rien d’impossible.',
      author: 'Devise gravée sur le palais de Jacques Cœur à Bourges'
    },
    exercise: {
      question: 'Dans quelle ville Jacques Cœur fit-il bâtir son célèbre palais gothique flamboyant ?',
      options: ['Rouen', 'Bourges', 'Nantes', 'Lyon'],
      correctIndex: 1,
      explanation: 'Le palais Jacques-Cœur à Bourges reste l’un des plus beaux édifices civils de la fin du Moyen Âge.'
    }
  },
  {
    id: 'p86-louis-xi-charles-temeraire',
    page: 86,
    title: 'Louis XI et Charles le Téméraire',
    eraId: 'moyen-age',
    kind: 'portrait',
    dates: '1461 – 1483',
    subtitle: 'L’achèvement territorial du royaume par le « roi prudent »',
    image: IMG_MOYEN_AGE,
    imageCaption: 'L’affrontement politique entre le roi Louis XI et le puissant duc de Bourgogne.',
    imageObservation: 'Par la diplomatie, les alliances et le réseau de relais de poste, Louis XI unifia le territoire royal.',
    sections: [
      {
        heading: 'La rivalité avec le duché de Bourgogne',
        body: 'Fils de Charles VII, Louis XI (1461-1483) cherche à soumettre les grands féodaux qui menacent le trône, en particulier son cousin Charles le Téméraire, riche duc de Bourgogne et des Flandres, qui rêve de créer un royaume indépendant entre la France et l’Empire.'
      },
      {
        heading: 'La mort du Téméraire et l’unification du royaume',
        body: 'Plutôt que de risquer une guerre ouverte, Louis XI finance habilement les Suisses et les Lorrains contre Charles le Téméraire, qui est tué devant Nancy en 1477. Louis XI rattache aussitôt la Bourgogne, la Picardie, puis l’Anjou, le Maine et la Provence à la couronne : la France moderne prend forme.'
      }
    ],
    keyTakeaways: [
      'Louis XI privilégie la diplomatie, l’espionnage et le commerce (foires de Lyon, soieries de Tours).',
      'Il crée le service royal de la poste aux lettres pour transmettre rapidement ses ordres.',
      'À sa mort en 1483, le domaine royal inclut la Bourgogne, l’Anjou et la Provence.'
    ],
    keyDates: [
      { date: '1461', label: 'Avènement de Louis XI' },
      { date: '1477', label: 'Mort de Charles le Téméraire devant Nancy ; retour de la Bourgogne à la France' },
      { date: '1481', label: 'Rattachement de la Provence au domaine royal' }
    ],
    exercise: {
      question: 'Quel territoire majeur revient au domaine royal français après la mort de Charles le Téméraire en 1477 ?',
      options: ['La Normandie', 'Le duché de Bourgogne', 'La Bretagne', 'La Corse'],
      correctIndex: 1,
      explanation: 'Dès la mort du Téméraire à Nancy en 1477, Louis XI réunit le duché de Bourgogne et la Picardie au domaine royal.'
    }
  }
];

function IMG_RENAISSANCE_PLACEHOLDER(): string {
  return '/src/assets/images/chapter_4_renaissance_1795633324628.jpg';
}
