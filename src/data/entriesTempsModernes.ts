import type { BledEntry } from './bledTypes';

const IMG_RENAISSANCE = '/src/assets/images/chapter_4_renaissance_1795633324628.jpg';
const IMG_VERSAILLES = '/src/assets/images/chapter_5_versailles_1795633324722.jpg';
const IMG_REVOLUTION = '/src/assets/images/chapter_6_revolution_1795633325152.jpg';

export const ENTRIES_TEMPS_MODERNES: BledEntry[] = [
  {
    id: 'p90-humanisme',
    page: 90,
    title: "L'humanisme",
    eraId: 'temps-modernes',
    kind: 'theme',
    dates: 'Fin XVe – XVIe siècle',
    subtitle: 'La redécouverte de l’Antiquité, l’imprimerie et la confiance dans la raison humaine',
    image: IMG_RENAISSANCE,
    imageCaption: 'La Renaissance et l’humanisme ouvrent un nouvel horizon intellectuel en Europe.',
    imageObservation: 'L’imprimerie de Gutenberg multiplia la circulation des livres, des traductions et des idées nouvelles.',
    sections: [
      {
        heading: 'L’être humain et les lettres antiques au centre du savoir',
        body: 'Né en Italie avant de rayonner en Europe avec Érasme, Guillaume Budé, Rabelais et Montaigne, l’humanisme redécouvre les textes originaux grecs et latins. Les humanistes prônent l’esprit critique, la curiosité scientifique et une éducation ouverte plutôt que l’apprentissage mécanique.'
      },
      {
        heading: 'L’imprimerie, moteur de diffusion',
        body: 'Mise au point vers 1450 par Gutenberg grâce aux caractères mobiles en métal, l’imprimerie permet d’éditer des milliers d’ouvrages (premier atelier parisien installé à la Sorbonne en 1470). Le savoir sort des seuls monastères.'
      }
    ],
    keyTakeaways: [
      'L’humanisme place l’éducation, la raison et la dignité de l’homme au cœur de la pensée.',
      'L’imprimerie accélère de manière spectaculaire la diffusion des idées en Europe.',
      'En France, Rabelais (Gargantua) et Montaigne (Essais) incarnent la pensée humaniste.'
    ],
    keyDates: [
      { date: 'v. 1450', label: 'Invention de l’imprimerie moderne par Gutenberg' },
      { date: '1532', label: 'Publication de Pantagruel de François Rabelais' }
    ],
    quote: {
      text: 'Science sans conscience n’est que ruine de l’âme.',
      author: 'François Rabelais, Pantagruel (1532)'
    },
    exercise: {
      question: 'Quelle invention technique du milieu du XVe siècle permit la diffusion rapide des idées humanistes ?',
      options: ['La machine à vapeur', 'L’imprimerie à caractères mobiles', 'Le télégraphe', 'La photographie'],
      correctIndex: 1,
      explanation: 'L’imprimerie de Gutenberg permit de produire des livres bien plus rapidement et à moindre coût que les manuscrits copiés à la main.'
    }
  },
  {
    id: 'p92-charles-viii-anne-louis-xii',
    page: 92,
    title: 'Charles VIII, Anne de Bretagne et Louis XII',
    eraId: 'temps-modernes',
    kind: 'portrait',
    dates: '1483 – 1515',
    subtitle: 'Le rattachement de la Bretagne et les premières guerres d’Italie',
    image: IMG_RENAISSANCE,
    imageCaption: 'Les débuts de la Renaissance ligérienne entre Blois, Amboise et Langeais.',
    imageObservation: 'C’est en découvrant les palais d’Italie lors des campagnes militaires que les rois français s’éprirent du style Renaissance.',
    sections: [
      {
        heading: 'Anne de Bretagne et l’union au royaume',
        body: 'Fils de Louis XI, Charles VIII épouse en 1491 la jeune duchesse Anne de Bretagne. À la mort prématurée de Charles VIII en 1498, son cousin et successeur Louis XII épouse à son tour Anne de Bretagne, préparant le rattachement définitif du duché à la couronne (1532).'
      },
      {
        heading: 'La découverte éblouie de l’Italie',
        body: 'Revendiquant les royaumes de Naples et de Milan, Charles VIII puis Louis XII conduisent plusieurs expéditions en Italie (1494 – 1515). Si les succès militaires sont éphémères, ces campagnes révèlent à la noblesse française le raffinement artistique et architectural de la Renaissance italienne.'
      }
    ],
    keyTakeaways: [
      'Anne de Bretagne fut deux fois reine de France, épousant successivement Charles VIII puis Louis XII.',
      'Les guerres d’Italie (à partir de 1494) introduisent en France le goût de la Renaissance.',
      'Louis XII fut surnommé le « Père du peuple » pour avoir modéré les impôts.'
    ],
    keyDates: [
      { date: '1491', label: 'Mariage de Charles VIII et d’Anne de Bretagne à Langeais' },
      { date: '1494', label: 'Début des guerres d’Italie' }
    ],
    exercise: {
      question: 'De quel grand duché Anne de Bretagne permit-elle le rapprochement durable avec le royaume de France ?',
      options: ['La Normandie', 'La Bretagne', 'La Bourgogne', 'La Savoie'],
      correctIndex: 1,
      explanation: 'Ses mariages avec Charles VIII puis Louis XII préparèrent l’acte d’union de la Bretagne à la France en 1532.'
    }
  },
  {
    id: 'p94-francois-ier',
    page: 94,
    title: 'François Ier',
    eraId: 'temps-modernes',
    kind: 'portrait',
    dates: '1494 – 1547',
    subtitle: 'Le roi chevalier de Marignan, mécène des arts et bâtisseur de l’État moderne',
    image: IMG_RENAISSANCE,
    imageCaption: 'Le château de Chambord, symbole de la grandeur de François Ier.',
    imageObservation: 'Vainqueur à Marignan à 21 ans, François Ier fit du mécénat artistique un instrument de prestige royal.',
    sections: [
      {
        heading: 'Marignan (1515) et la rivalité avec Charles Quint',
        body: 'Sacré roi à 20 ans en 1515, François Ier remporte dès septembre la brillante victoire de Marignan en Italie. Il consacre ensuite une grande partie de son règne à lutter contre l’empereur Charles Quint, qui encercle la France par ses possessions d’Espagne, d’Allemagne et des Pays-Bas.'
      },
      {
        heading: 'L’ordonnance de Villers-Cotterêts (1539)',
        body: 'En 1539, François Ier signe l’ordonnance de Villers-Cotterêts : le français remplace désormais le latin dans tous les actes de justice et les registres paroissiaux (naissance de l’état civil). Il fonde aussi le Collège des lecteurs royaux (actuel Collège de France).'
      }
    ],
    keyTakeaways: [
      '1515 : victoire de François Ier à Marignan et début d’un règne emblématique de la Renaissance.',
      '1539 : l’ordonnance de Villers-Cotterêts impose le français comme langue administrative et judiciaire.',
      'Il invite en France de grands maîtres italiens, dont Léonard de Vinci.'
    ],
    keyDates: [
      { date: '1515', label: 'Avènement de François Ier et bataille de Marignan' },
      { date: '1525', label: 'Défaite et capture de François Ier à Pavie face à Charles Quint' },
      { date: '1539', label: 'Ordonnance de Villers-Cotterêts imposant le français' }
    ],
    exercise: {
      question: 'Que rend obligatoire l’ordonnance de Villers-Cotterêts signée par François Ier en 1539 ?',
      options: [
        'L’usage de l’italien à la cour',
        'La rédaction des actes de justice en français à la place du latin',
        'La construction de Versailles',
        'L’interdiction de l’imprimerie'
      ],
      correctIndex: 1,
      explanation: 'L’ordonnance impose le « langage maternel françois » dans les tribunaux et ordonne la tenue des registres de baptêmes.'
    }
  },
  {
    id: 'p96-renaissance-en-france',
    page: 96,
    title: 'La Renaissance en France',
    eraId: 'temps-modernes',
    kind: 'theme',
    dates: 'XVIe siècle',
    subtitle: 'Les châteaux de la Loire, Léonard de Vinci et les poètes de la Pléiade',
    image: IMG_RENAISSANCE,
    imageCaption: 'Façades sculptées, hautes fenêtres et jardins ordonnés du château de Chambord.',
    imageObservation: 'À la différence des châteaux forts médiévaux, les châteaux de la Renaissance sont conçus pour le plaisir et la lumière.',
    sections: [
      {
        heading: 'L’architecture des châteaux de la Loire et du Louvre',
        body: 'Dans le Val de Loire (Chambord, Chenonceau, Azay-le-Rideau, Blois) puis à Fontainebleau et au Louvre (Pierre Lescot, Jean Goujon), les architectes marient le décor antique (colonnes, frontons) aux toitures d’ardoise françaises.'
      },
      {
        heading: 'Léonard de Vinci et la Pléiade',
        body: 'En 1516, Léonard de Vinci s’installe au Clos Lucé près d’Amboise avec trois chefs-d’œuvre dont la Joconde. En littérature, les poètes de la Pléiade — Pierre de Ronsard et Joachim du Bellay — défendent et illustrent la langue française dans des vers devenus célèbres.'
      }
    ],
    keyTakeaways: [
      'Les châteaux de la Loire remplacent les forteresses sombres par des palais lumineux ouverts sur des jardins.',
      'Léonard de Vinci passe les trois dernières années de sa vie en France à Amboise (1516-1519).',
      'Ronsard et du Bellay renouvellent la poésie française au sein de la Pléiade.'
    ],
    keyDates: [
      { date: '1516', label: 'Arrivée de Léonard de Vinci en France au Clos Lucé' },
      { date: '1519', label: 'Début de la construction du château de Chambord' }
    ],
    exercise: {
      question: 'Dans quel groupe de poètes du XVIe siècle Pierre de Ronsard et Joachim du Bellay se sont-ils illustrés ?',
      options: ['Le Parnasse', 'La Pléiade', 'Les Romantiques', 'Les Surréalistes'],
      correctIndex: 1,
      explanation: 'Réunis autour de Ronsard et du Bellay, les sept poètes de la Pléiade voulurent hisser la langue française au niveau du grec et du latin.'
    }
  },
  {
    id: 'p98-grandes-decouvertes',
    page: 98,
    title: 'Les Grandes Découvertes',
    eraId: 'temps-modernes',
    kind: 'theme',
    dates: 'Fin XVe – XVIe siècle',
    subtitle: 'De Christophe Colomb à Jacques Cartier : le monde élargi aux Amériques',
    image: IMG_RENAISSANCE,
    imageCaption: 'L’ouverture maritime de l’Europe vers les Amériques et la Nouvelle-France.',
    imageObservation: 'Grâce à la caravelle, à la boussole et à l’astrolabe, les navigateurs européens traversent désormais les océans.',
    sections: [
      {
        heading: 'Les nouveaux horizons maritimes',
        body: 'Cherchant une route maritime directe vers les épices d’Asie, le navigateur génois Christophe Colomb atteint l’Amérique en 1492 au service de l’Espagne, tandis que le Portugais Vasco de Gama contourne l’Afrique (1498) et que l’expédition de Magellan réalise le premier tour du monde (1519-1522).'
      },
      {
        heading: 'Jacques Cartier et le Canada (1534)',
        body: 'Mandaté par François Ier pour explorer les terres du Nord, le navigateur malouin Jacques Cartier remonte le fleuve Saint-Laurent en 1534 et 1535, et prend possession de la « Nouvelle-France » (futur Canada).'
      }
    ],
    keyTakeaways: [
      'En 1492, Christophe Colomb aborde en Amérique, transformant l’économie et la géographie mondiales.',
      'En 1534, Jacques Cartier explore le Canada au nom de François Ier.',
      'De nouveaux produits arrivent en Europe : pomme de terre, tomate, maïs, cacao.'
    ],
    keyDates: [
      { date: '1492', label: 'Arrivée de Christophe Colomb en Amérique' },
      { date: '1534', label: 'Premier voyage de Jacques Cartier au Canada' }
    ],
    exercise: {
      question: 'Quel navigateur français envoyé par François Ier explore le fleuve Saint-Laurent et le Canada en 1534 ?',
      options: ['Vasco de Gama', 'Jacques Cartier', 'Magellan', 'La Pérouse'],
      correctIndex: 1,
      explanation: 'Parti de Saint-Malo en 1534, Jacques Cartier planta une croix à Gaspé au nom du roi de France.'
    }
  },
  {
    id: 'p100-protestantisme',
    page: 100,
    title: 'Naissance et diffusion du protestantisme',
    eraId: 'temps-modernes',
    kind: 'theme',
    dates: '1517 – XVIe siècle',
    subtitle: 'La Réforme de Luther et de Calvin brise l’unité religieuse de l’Occident',
    image: IMG_RENAISSANCE,
    imageCaption: 'Les idées de la Réforme se diffusent rapidement en Europe grâce à l’imprimerie.',
    imageObservation: 'En France, les protestants calvinistes reçoivent le nom de « huguenots ».',
    sections: [
      {
        heading: 'Luther et Calvin : le retour à la Bible',
        body: 'Choqué par les abus au sein du clergé (vente des indulgences), le moine allemand Martin Luther publie ses 95 thèses en 1517 : c’est le début de la Réforme protestante. Le Français Jean Calvin prolonge ce mouvement (Institution de la religion chrétienne, 1536) depuis Genève.'
      },
      {
        heading: 'Les protestants en France',
        body: 'Les réformés (bientôt appelés huguenots en France) prônent la lecture directe de la Bible traduite en français, simplifient le culte et rejettent l’autorité du pape. D’abord tolérée avec prudence, la Réforme est réprimée après l’affaire des Placards en 1534.'
      }
    ],
    keyTakeaways: [
      'La Réforme protestante naît en 1517 avec Martin Luther puis est structurée en français par Jean Calvin.',
      'Les chrétiens d’Europe occidentale se divisent durablement entre catholiques et protestants.',
      'L’Église catholique réagit par la Contre-Réforme (concile de Trente, 1545-1563).'
    ],
    keyDates: [
      { date: '1517', label: 'Martin Luther lance la Réforme en Allemagne' },
      { date: '1534', label: 'Affaire des Placards à Paris : début de la répression royale' }
    ],
    exercise: {
      question: 'Quel réformateur français installé à Genève donna son nom à la branche protestante majoritaire en France (calvinisme) ?',
      options: ['Martin Luther', 'Jean Calvin', 'Érasme', 'Richelieu'],
      correctIndex: 1,
      explanation: 'Originaire de Noyon, Jean Calvin organisa à Genève une Église réformée qui inspira les protestants français.'
    }
  },
  {
    id: 'p102-henri-ii',
    page: 102,
    title: 'Henri II',
    eraId: 'temps-modernes',
    kind: 'portrait',
    dates: '1519 – 1559',
    subtitle: 'La reprise de Calais, les Trois-Évêchés et la mort tragique en tournoi',
    image: IMG_RENAISSANCE,
    imageCaption: 'Sous Henri II, le Louvre est agrandi et la cour rayonne avant sa mort accidentelle.',
    imageObservation: 'Son mariage avec Catherine de Médicis eut une influence majeure sur le destin des derniers Valois.',
    sections: [
      {
        heading: 'Les conquêtes militaires et le traité du Cateau-Cambrésis',
        body: 'Fils de François Ier, Henri II règne de 1547 à 1559. Allié aux princes protestants allemands contre Charles Quint, il occupe Metz, Toul et Verdun (les Trois-Évêchés) et, en 1558, le duc de Guise reprend enfin Calais aux Anglais. En 1559, la paix du Cateau-Cambrésis met fin aux guerres d’Italie.'
      },
      {
        heading: 'Un tournoi fatal',
        body: 'Époux de Catherine de Médicis, Henri II réprime sévèrement le protestantisme. En juin 1559, lors des fêtes célébrant la paix à Paris, le roi est mortellement blessé à l’œil par la lance du comte de Montgomery au cours d’une joute de tournoi.'
      }
    ],
    keyTakeaways: [
      'Sous Henri II, la France récupère Calais en 1558 après plus de deux siècles d’occupation anglaise.',
      'La paix du Cateau-Cambrésis (1559) clôt soixante-cinq ans de guerres d’Italie.',
      'Sa mort accidentelle en 1559 laisse le trône à ses jeunes fils et fragilise le pouvoir royal.'
    ],
    keyDates: [
      { date: '1558', label: 'Reprise de Calais aux Anglais par François de Guise' },
      { date: '1559', label: 'Paix du Cateau-Cambrésis et mort accidentelle d’Henri II' }
    ],
    exercise: {
      question: 'En quelle année le duc de Guise reprend-il Calais aux Anglais sous le règne d’Henri II ?',
      options: ['1453', '1515', '1558', '1598'],
      correctIndex: 2,
      explanation: 'Calais, dernière possession anglaise sur le sol français depuis 1347, fut reprise en janvier 1558.'
    }
  },
  {
    id: 'p104-guerres-religion',
    page: 104,
    title: 'Les Guerres de religion',
    eraId: 'temps-modernes',
    kind: 'theme',
    dates: '1562 – 1598',
    subtitle: 'Trente-six ans de déchirements entre catholiques et protestants',
    image: IMG_RENAISSANCE,
    imageCaption: 'Huit guerres civiles ensanglantèrent le royaume pendant la seconde moitié du XVIe siècle.',
    imageObservation: 'Le conflit religieux se doublait d’une lutte politique entre grandes familles nobles (Guise et Bourbon).',
    sections: [
      {
        heading: 'Du massacre de Wassy à la Saint-Barthélemy (1572)',
        body: 'En 1562, le massacre de protestants à Wassy déclenche huit guerres de religion successives. Malgré les tentatives de conciliation de la régente Catherine de Médicis et du chancelier Michel de l’Hospital, les haines s’exacerbent.'
      },
      {
        heading: 'La nuit du 24 août 1572',
        body: 'Quelques jours après le mariage d’Henri de Navarre (protestant) et de Marguerite de Valois, l’amiral protestant Coligny est blessé dans un attentat. Craignant un soulèvement huguenot, le roi Charles IX ordonne d’éliminer les chefs protestants : dans la nuit du 24 août 1572 (la Saint-Barthélemy), des milliers de protestants sont massacrés à Paris puis en province.'
      }
    ],
    keyTakeaways: [
      'De 1562 à 1598, huit guerres de religion opposent catholiques et protestants (huguenots).',
      'Le massacre de la Saint-Barthélemy (24 août 1572) marque le paroxysme de la violence.',
      'Le royaume est ravagé jusqu’à l’avènement et la pacification d’Henri IV.'
    ],
    keyDates: [
      { date: '1562', label: 'Massacre de Wassy et début des Guerres de religion' },
      { date: '24 août 1572', label: 'Massacre de la Saint-Barthélemy' }
    ],
    exercise: {
      question: 'Quel événement tragique eut lieu dans la nuit du 24 août 1572 à Paris ?',
      options: [
        'La prise de la Bastille',
        'Le massacre de la Saint-Barthélemy',
        'La signature de l’édit de Nantes',
        'La mort de Louis XIV'
      ],
      correctIndex: 1,
      explanation: 'Le massacre de la Saint-Barthélemy coûta la vie à des milliers de protestants à Paris et dans plusieurs villes de province.'
    }
  },
  {
    id: 'p106-derniers-valois',
    page: 106,
    title: 'Les derniers Valois',
    eraId: 'temps-modernes',
    kind: 'theme',
    dates: '1559 – 1589',
    subtitle: 'François II, Charles IX et Henri III : l’affaiblissement du pouvoir royal',
    image: IMG_RENAISSANCE,
    imageCaption: 'Sous Catherine de Médicis et ses trois fils, la monarchie lutte pour sa survie.',
    imageObservation: 'L’assassinat d’Henri III en 1589 met fin à la dynastie des Valois au profit des Bourbons.',
    sections: [
      {
        heading: 'La régence difficile de Catherine de Médicis',
        body: 'Les trois fils d’Henri II montent successivement sur le trône : François II (mort à 16 ans), Charles IX (marqué par la Saint-Barthélemy) et Henri III. Leur mère Catherine de Médicis tente sans relâche de préserver l’autorité royale entre les catholiques intransigeants de la Ligue (duc Henri de Guise) et le camp protestant.'
      },
      {
        heading: 'La « guerre des trois Henri » et la fin des Valois',
        body: 'Chassé de Paris par la Ligue lors de la journée des Barricades (1588), Henri III fait assassiner Henri de Guise à Blois puis s’allie au protestant Henri de Navarre. En août 1589, le moine ligueur Jacques Clément poignarde Henri III, désignant avant de mourir Henri de Navarre comme successeur.'
      }
    ],
    keyTakeaways: [
      'François II, Charles IX et Henri III forment les derniers souverains de la dynastie des Valois.',
      'La Ligue catholique menée par les Guise conteste l’autorité même du roi Henri III.',
      'À la mort d’Henri III en 1589, la couronne passe à la maison de Bourbon avec Henri IV.'
    ],
    keyDates: [
      { date: '1588', label: 'Journée des Barricades à Paris et assassinat d’Henri de Guise à Blois' },
      { date: '1589', label: 'Assassinat d’Henri III, dernier roi Valois' }
    ],
    exercise: {
      question: 'Quel roi assassiné en 1589 fut le dernier souverain de la dynastie des Valois ?',
      options: ['François Ier', 'Charles IX', 'Henri III', 'Louis XIII'],
      correctIndex: 2,
      explanation: 'Henri III mourut sans enfant en août 1589, laissant le trône à son cousin Henri de Navarre (Henri IV).'
    }
  },
  {
    id: 'p108-edit-de-nantes',
    page: 108,
    title: "L'édit de Nantes",
    eraId: 'temps-modernes',
    kind: 'theme',
    dates: '13 avril 1598',
    subtitle: 'L’acte de tolérance civile qui rétablit la paix religieuse en France',
    image: IMG_RENAISSANCE,
    imageCaption: 'La paix retrouvée après trente-six années de guerres civiles.',
    imageObservation: 'L’édit de Nantes inventa une coexistence légale entre deux confessions au sein d’un même État.',
    sections: [
      {
        heading: 'Abjuration et pacification du royaume',
        body: 'Devenu roi en 1589 mais rejeté par Paris catholique, Henri IV comprend qu’il doit apaiser les cœurs. En 1593, il se convertit au catholicisme (« Paris vaut bien une messe », lui prête-t-on) et entre enfin dans sa capitale en 1594.'
      },
      {
        heading: 'Les garanties de l’édit de Nantes (1598)',
        body: 'Signé en avril 1598, l’édit de Nantes accorde aux protestants la liberté de conscience dans tout le royaume, la liberté de culte dans les lieux autorisés, l’égalité d’accès aux emplois publics et une centaine de « places de sûreté » (comme La Rochelle) pour garantir leur protection.'
      }
    ],
    keyTakeaways: [
      'Signé par Henri IV en 1598, l’édit de Nantes met fin aux Guerres de religion.',
      'Il reconnaît la liberté de conscience et les droits civils des protestants dans un royaume catholique.',
      'Il reste en vigueur pendant 87 ans, jusqu’à sa révocation par Louis XIV en 1685.'
    ],
    keyDates: [
      { date: '1593', label: 'Conversion d’Henri IV au catholicisme à Saint-Denis' },
      { date: '13 avril 1598', label: 'Signature de l’édit de Nantes' }
    ],
    exercise: {
      question: 'En quelle année Henri IV signe-t-il l’édit de Nantes pour mettre fin aux guerres de Religion ?',
      options: ['1572', '1589', '1598', '1685'],
      correctIndex: 2,
      explanation: 'Signé le 13 avril 1598, l’édit de Nantes instaura la paix civile entre catholiques et protestants.'
    }
  },
  {
    id: 'p110-henri-iv',
    page: 110,
    title: 'Henri IV',
    eraId: 'temps-modernes',
    kind: 'portrait',
    dates: '1553 – 1610',
    subtitle: 'Le « Bon Roi Henri », premier souverain Bourbon et artisan du redressement français',
    image: IMG_RENAISSANCE,
    imageCaption: 'Sous Henri IV, Paris s’embellit (Pont-Neuf, place des Vosges) et le royaume retrouve la prospérité.',
    imageObservation: 'Premier roi de la branche des Bourbons, il sut conquérir le trône par les armes puis par la clémence.',
    sections: [
      {
        heading: 'Un roi populaire et énergique',
        body: 'Roi de Navarre élevé simplement dans le Béarn, Henri IV sait parler aux soldats comme aux paysans (« le panache blanc » d’Ivry). Une fois la paix intérieure et extérieure (paix de Vervins avec l’Espagne, 1598) rétablie, il relève un pays ruiné.'
      },
      {
        heading: 'L’embellissement de Paris et l’attentat de 1610',
        body: 'Henri IV transforme Paris : il achève le Pont-Neuf, aménage la place Royale (place des Vosges) et la place Dauphine, et agrandit le Louvre. Alors qu’il s’apprête à partir en campagne, il est assassiné dans son carrosse par le fanatique Ravaillac le 14 mai 1610.'
      }
    ],
    keyTakeaways: [
      'Henri IV fonde la dynastie des Bourbons qui régnera jusqu’à la Révolution.',
      'Il rétablit la paix civile et relance l’économie et l’urbanisme parisien.',
      'Son assassinat par Ravaillac en 1610 plonge le pays dans le deuil.'
    ],
    keyDates: [
      { date: '1589', label: 'Henri IV devient roi de France' },
      { date: '14 mai 1610', label: 'Assassinat d’Henri IV rue de la Ferronnerie à Paris' }
    ],
    quote: {
      text: 'Je veux qu’il n’y ait si pauvre paysan en mon royaume qu’il n’ait tous les dimanches sa poule au pot.',
      author: 'Formule célèbre attribuée à Henri IV'
    },
    exercise: {
      question: 'De quelle dynastie Henri IV est-il le premier roi sur le trône de France ?',
      options: ['Les Valois', 'Les Bourbons', 'Les Carolingiens', 'Les Bonaparte'],
      correctIndex: 1,
      explanation: 'Descendant de Saint Louis par son dernier fils Robert, Henri IV inaugura la lignée des Bourbons.'
    }
  },
  {
    id: 'p112-sully',
    page: 112,
    title: 'Sully',
    eraId: 'temps-modernes',
    kind: 'portrait',
    dates: '1559 – 1641',
    subtitle: 'Le ministre protestant d’Henri IV qui assainit les finances et relança l’agriculture',
    image: IMG_RENAISSANCE,
    imageCaption: 'Routes plantées d’ormes, canaux et assainissement des marais sous l’impulsion de Sully.',
    imageObservation: '« Labourage et pâturage » résumait pour Sully le socle de la richesse nationale.',
    sections: [
      {
        heading: 'Le compagnon d’armes devenu grand gestionnaire',
        body: 'Compagnon d’armes protestant d’Henri IV, Maximilien de Béthune, duc de Sully, devient surintendant des finances en 1598. Il vérifie rigoureusement les comptes, réduit les dettes de l’État, baisse la taille pesant sur les paysans et crée la paulette (taxe sur la transmission des offices).'
      },
      {
        heading: '« Labourage et pâturage »',
        body: 'Convaincu que la terre fait la force du royaume, Sully encourage l’assèchement des marais, protège les forêts, fait planter des ormes le long des routes royales et entreprend le canal de Briare reliant la Loire à la Seine.'
      }
    ],
    keyTakeaways: [
      'Sully redresse les finances publiques ruinées par les Guerres de religion.',
      'Il développe les routes, les ponts, les canaux (Briare) et soutient l’agriculture.',
      'Sa formule « Labourage et pâturage sont les deux mamelles de la France » est restée célèbre.'
    ],
    keyDates: [
      { date: '1598 – 1610', label: 'Ministère de Sully aux côtés d’Henri IV' }
    ],
    quote: {
      text: 'Labourage et pâturage sont les deux mamelles dont la France est alimentée.',
      author: 'Maximilien de Béthune, duc de Sully, Économies royales'
    },
    exercise: {
      question: 'Selon la célèbre formule de Sully, quelles étaient « les deux mamelles de la France » ?',
      options: [
        'La banque et la guerre',
        'Le labourage et le pâturage',
        'La marine et l’industrie',
        'L’or et les épices'
      ],
      correctIndex: 1,
      explanation: 'Sully voyait dans l’agriculture (labourage) et l’élevage (pâturage) les vraies richesses durables du royaume.'
    }
  },
  {
    id: 'p114-champlain-lasalle',
    page: 114,
    title: 'Samuel de Champlain et Robert Cavelier de La Salle',
    eraId: 'temps-modernes',
    kind: 'portrait',
    dates: 'XVIIe siècle (1608 – 1682)',
    subtitle: 'Les fondateurs de Québec et de la Louisiane en Amérique du Nord',
    image: IMG_RENAISSANCE,
    imageCaption: 'L’exploration et la cartographie de la Nouvelle-France du Saint-Laurent au Mississippi.',
    imageObservation: 'Ces explorateurs établirent des alliances durables avec les peuples autochtones autour de la traite des fourrures.',
    sections: [
      {
        heading: 'Samuel de Champlain fonde Québec (1608)',
        body: 'Géographe et navigateur envoyé sous Henri IV, Samuel de Champlain fonde la ville de Québec en 1608 sur les bords du Saint-Laurent. Surnommé le « père de la Nouvelle-France », il explore les Grands Lacs et noue des alliances avec les Hurons et les Algonquins.'
      },
      {
        heading: 'Cavelier de La Salle descend le Mississippi (1682)',
        body: 'Quelques décennies plus tard, sous Louis XIV, l’explorateur rouennais Robert Cavelier de La Salle descend le fleuve Mississippi jusqu’au golfe du Mexique en 1682. Il baptise cet immense territoire « Louisiane » en l’honneur du roi Louis XIV.'
      }
    ],
    keyTakeaways: [
      'En 1608, Samuel de Champlain fonde Québec, berceau du Canada francophone.',
      'En 1682, Cavelier de La Salle explore le Mississippi et fonde la Louisiane.',
      'L’Empire colonial français d’Amérique du Nord s’étend alors du Québec jusqu’au golfe du Mexique.'
    ],
    keyDates: [
      { date: '1608', label: 'Fondation de Québec par Samuel de Champlain' },
      { date: '1682', label: 'Cavelier de La Salle atteint l’embouchure du Mississippi (Louisiane)' }
    ],
    exercise: {
      question: 'En l’honneur de quel roi Cavelier de La Salle nomma-t-il la « Louisiane » en 1682 ?',
      options: ['Louis IX', 'Louis XIII', 'Louis XIV', 'Louis XVI'],
      correctIndex: 2,
      explanation: 'C’est en hommage au roi Louis XIV que Robert Cavelier de La Salle baptisa ce territoire Louisiane.'
    }
  },
  {
    id: 'p116-louis-xiii-richelieu',
    page: 116,
    title: 'Louis XIII et Richelieu',
    eraId: 'temps-modernes',
    kind: 'portrait',
    dates: '1610 – 1643',
    subtitle: 'L’abaissement des grands seigneurs et la construction de l’absolutisme royal',
    image: IMG_VERSAILLES,
    imageCaption: 'Sous Louis XIII et le cardinal de Richelieu, l’État royal devient une puissance souveraine.',
    imageObservation: 'Richelieu posa les bases administratives et culturelles du futur Grand Siècle de Louis XIV.',
    sections: [
      {
        heading: 'Le programme implacable du cardinal de Richelieu',
        body: 'Devenu principal ministre de Louis XIII en 1624, le cardinal de Richelieu se fixe trois objectifs : soumettre les protestants sur le plan militaire (prise de La Rochelle en 1628, tout en maintenant la liberté de culte), briser l’orgueil des grands nobles (interdiction des duels, démolition des châteaux forts inutiles) et contrer la puissance des Habsbourg d’Espagne et d’Autriche.'
      },
      {
        heading: 'Les intendants et l’Académie française',
        body: 'Pour contrôler les provinces, le roi et son ministre s’appuient sur les intendants, agents révocables chargés de la justice, de la police et des impôts. En 1635, Richelieu fonde l’Académie française pour fixer et embellir la langue nationale.'
      }
    ],
    keyTakeaways: [
      'Louis XIII et Richelieu renforcent l’autorité centrale de l’État face aux grands seigneurs.',
      '1628 : capitulation de La Rochelle (paix d’Alès en 1629 : fin des places de sûreté protestantes).',
      '1635 : fondation de l’Académie française et entrée de la France dans la guerre de Trente Ans.'
    ],
    keyDates: [
      { date: '1624', label: 'Entrée du cardinal de Richelieu au Conseil du roi' },
      { date: '1628', label: 'Siège et prise de La Rochelle' },
      { date: '1635', label: 'Fondation de l’Académie française' }
    ],
    exercise: {
      question: 'Quelle célèbre institution chargée de veiller sur la langue française le cardinal de Richelieu crée-t-il en 1635 ?',
      options: ['Le Collège de France', 'L’Académie française', 'La Sorbonne', 'Le Louvre'],
      correctIndex: 1,
      explanation: 'Fondée en 1635 par lettres patentes de Louis XIII à l’initiative de Richelieu, l’Académie française rédige le Dictionnaire.'
    }
  },
  {
    id: 'p118-anne-autriche-mazarin',
    page: 118,
    title: "Anne d'Autriche et Mazarin",
    eraId: 'temps-modernes',
    kind: 'portrait',
    dates: '1643 – 1661',
    subtitle: 'La régence d’Anne d’Autriche, l’épreuve de la Fronde et la paix européenne',
    image: IMG_VERSAILLES,
    imageCaption: 'La victoire sur la Fronde prépara l’exercice absolu du pouvoir par le jeune Louis XIV.',
    imageObservation: 'Le souvenir de la Fronde marqua profondément l’enfant Louis XIV, qui décida plus tard d’écarter la noblesse du pouvoir.',
    sections: [
      {
        heading: 'La régence et la guerre de la Fronde (1648 – 1653)',
        body: 'À la mort de Louis XIII en 1643, Louis XIV n’a que quatre ans et demi. Sa mère Anne d’Autriche devient régente et accorde sa confiance au cardinal italien Jules Mazarin. Entre 1648 et 1653 éclate la Fronde, une grave révolte du Parlement de Paris puis des grands princes contre les nouveaux impôts et l’autorité ministérielle.'
      },
      {
        heading: 'Des traités victorieux pour la France',
        body: 'Avec patience et fermeté, Anne d’Autriche et Mazarin triomphent de la Fronde. Sur le plan extérieur, Mazarin signe les traités de Westphalie (1648, rattachant une grande partie de l’Alsace) puis la paix des Pyrénées (1659, Roussillon, Artois et mariage de Louis XIV avec Marie-Thérèse d’Espagne).'
      }
    ],
    keyTakeaways: [
      'Anne d’Autriche et Mazarin préservent la couronne du jeune Louis XIV durant la Fronde (1648-1653).',
      'Les traités de Westphalie (1648) et des Pyrénées (1659) font de la France la première puissance d’Europe.',
      'À sa mort en 1661, Mazarin lègue au roi un État pacifié et un personnel compétent (dont Colbert).'
    ],
    keyDates: [
      { date: '1648', label: 'Traités de Westphalie et début de la Fronde' },
      { date: '1659', label: 'Traité des Pyrénées avec l’Espagne' }
    ],
    exercise: {
      question: 'Comment s’appelle la grande révolte des parlementaires et des princes durant la minorité de Louis XIV (1648-1653) ?',
      options: ['La Jacquerie', 'La Fronde', 'La Ligue', 'La Terreur'],
      correctIndex: 1,
      explanation: 'Le nom de « Fronde » vient des jeux de fronde des enfants parisiens interdits par la police royale.'
    }
  },
  {
    id: 'p120-fouquet-colbert',
    page: 120,
    title: 'Nicolas Fouquet et Jean-Baptiste Colbert',
    eraId: 'temps-modernes',
    kind: 'portrait',
    dates: '1661 – 1683',
    subtitle: 'De la chute du fastueux surintendant à la politique économique de Colbert',
    image: IMG_VERSAILLES,
    imageCaption: 'Manufactures royales, chantiers navals et essor du commerce sous l’impulsion de Colbert.',
    imageObservation: 'L’arrestation de Fouquet marqua l’entrée en scène du jeune Louis XIV et la montée de Colbert.',
    sections: [
      {
        heading: 'La fête de Vaux-le-Vicomte et la chute de Fouquet (1661)',
        body: 'En août 1661, le surintendant des finances Nicolas Fouquet offre à Louis XIV une fête somptueuse dans son château de Vaux-le-Vicomte. Quelques semaines plus tard, le roi fait arrêter Fouquet par d’Artagnan pour malversations et supprime la charge trop puissante de surintendant.'
      },
      {
        heading: 'Le colbertisme : manufactures, commerce et marine',
        body: 'Nommé contrôleur général des finances, Jean-Baptiste Colbert veut enrichir le royaume en limitant les importations et en développant les exportations (mercantilisme). Il crée de grandes manufactures royales (Gobelins, Saint-Gobain), fonde les compagnies des Indes, creuse le canal du Midi et reconstruit une puissante marine royale.'
      }
    ],
    keyTakeaways: [
      'L’arrestation de Nicolas Fouquet en 1661 permet à Louis XIV de reprendre le contrôle total des finances.',
      'Colbert développe les manufactures de luxe, les routes, les ports (Rochefort, Brest) et le commerce maritime.',
      'La rigueur de Colbert finance les premières années du château de Versailles et de l’armée.'
    ],
    keyDates: [
      { date: '1661', label: 'Arrestation de Nicolas Fouquet à Nantes' },
      { date: '1665', label: 'Colbert devient contrôleur général des finances' }
    ],
    exercise: {
      question: 'Dans quel château célèbre Nicolas Fouquet reçut-il fastueusement Louis XIV peu avant son arrestation en 1661 ?',
      options: ['Chambord', 'Vaux-le-Vicomte', 'Fontainebleau', 'Chenonceau'],
      correctIndex: 1,
      explanation: 'Le château de Vaux-le-Vicomte, conçu par Le Vau, Le Brun et Le Nôtre, inspira ensuite à Louis XIV l’équipe de Versailles.'
    }
  },
  {
    id: 'p122-louis-xiv',
    page: 122,
    title: 'Louis XIV',
    eraId: 'temps-modernes',
    kind: 'portrait',
    dates: '1638 – 1715',
    subtitle: 'Le Roi-Soleil et l’apogée de la monarchie absolue de droit divin',
    image: IMG_VERSAILLES,
    imageCaption: 'Pendant 72 ans de règne, Louis XIV incarne l’ordre monarchique classique.',
    imageObservation: 'Dès mars 1661, à la mort de Mazarin, le roi déclare qu’il gouvernera désormais seul sans Premier ministre.',
    sections: [
      {
        heading: 'Le gouvernement personnel du Roi-Soleil',
        body: 'En 1661, à 22 ans, Louis XIV prend seul les rênes de l’État. Travailleur infatigable présidant chaque jour les Conseils, il choisit le soleil comme emblème (« Nec pluribus impar ») pour signifier que l’astre royal éclaire et ordonne tout le royaume.'
      },
      {
        heading: 'La monarchie absolue de droit divin',
        body: 'Le roi détient tous les pouvoirs : il fait les lois, commande les armées, lève les impôts et nomme les juges. Selon Bossuet, le souverain ne tient son pouvoir que de Dieu et doit gouverner dans le respect des lois fondamentales et pour le bien de l’État.'
      }
    ],
    keyTakeaways: [
      'Louis XIV règne de 1643 à 1715 (72 ans), le plus long règne de l’histoire de France.',
      'À partir de 1661, il exerce personnellement une monarchie absolue de droit divin.',
      'Il s’entoure de grands serviteurs comme Colbert, Louvois et Vauban.'
    ],
    keyDates: [
      { date: '1643', label: 'Avènement de Louis XIV à l’âge de quatre ans et demi' },
      { date: '1661', label: 'Début du règne personnel de Louis XIV' },
      { date: '1715', label: 'Mort de Louis XIV à Versailles' }
    ],
    exercise: {
      question: 'Quel astre Louis XIV choisit-il comme emblème personnel de son règne ?',
      options: ['La lune', 'Le soleil', 'L’étoile polaire', 'La comète'],
      correctIndex: 1,
      explanation: 'Le soleil donnait vie et ordre au monde, à l’image du roi au centre de son royaume et de la cour.'
    }
  },
  {
    id: 'p124-louis-xiv-versailles',
    page: 124,
    title: 'Louis XIV et le château de Versailles',
    eraId: 'temps-modernes',
    kind: 'theme',
    dates: '1661 – 1682',
    subtitle: 'Un palais somptueux conçu pour exalter la majesté royale et domestiquer la noblesse',
    image: IMG_VERSAILLES,
    imageCaption: 'Le château de Versailles et les jardins géométriques dessinés par André Le Nôtre.',
    imageObservation: 'La symétrie du château et de ses perspectives reflète la maîtrise absolue du pouvoir royal.',
    sections: [
      {
        heading: 'Du relais de chasse au plus grand palais d’Europe',
        body: 'À partir d’un modeste relais de chasse de Louis XIII, Louis XIV mobilise les meilleurs créateurs : les architectes Louis Le Vau puis Jules Hardouin-Mansart (Galerie des Glaces), le peintre Charles Le Brun et le paysagiste André Le Nôtre qui trace bassins, bosquets et Grand Canal.'
      },
      {
        heading: 'La cour et l’étiquette en 1682',
        body: 'En 1682, le roi installe officiellement le gouvernement et la cour à Versailles. Soumis à une étiquette rigoureuse (lever, dîner, coucher du roi), des milliers de nobles rivalisent pour obtenir une pension ou une charge honorifique, perdant ainsi toute envie de comploter en province.'
      }
    ],
    keyTakeaways: [
      'Versailles est l’œuvre de Le Vau, Hardouin-Mansart, Le Brun et Le Nôtre.',
      'En 1682, le château devient la résidence officielle du roi et le siège du gouvernement.',
      'L’étiquette de cour permet à Louis XIV de tenir la haute noblesse sous son contrôle permanent.'
    ],
    keyDates: [
      { date: '1682', label: 'Installation officielle du gouvernement et de la cour à Versailles' }
    ],
    exercise: {
      question: 'Quel célèbre jardinier-paysagiste dessina les parcs, bosquets et bassins du château de Versailles ?',
      options: ['Vauban', 'André Le Nôtre', 'Charles Le Brun', 'Mansart'],
      correctIndex: 1,
      explanation: 'André Le Nôtre créa à Versailles le modèle achevé du « jardin à la française », fondé sur la symétrie et la perspective.'
    }
  },
  {
    id: 'p126-arts-sous-louis-xiv',
    page: 126,
    title: 'Les arts sous Louis XIV',
    eraId: 'temps-modernes',
    kind: 'theme',
    dates: 'XVIIe siècle',
    subtitle: 'Le classicisme, les Académies royales, la peinture et la musique de cour',
    image: IMG_VERSAILLES,
    imageCaption: 'Peinture, sculpture, architecture et musique concourent à la gloire du Grand Siècle.',
    imageObservation: 'Les artistes travaillent au sein d’Académies royales définissant les règles de l’équilibre classique.',
    sections: [
      {
        heading: 'L’ordre classique et le contrôle des Académies',
        body: 'Louis XIV et Colbert placent les arts au service de l’État en organisant les Académies royales (Peinture et Sculpture, Architecture, Musique, Sciences). L’idéal classique privilégie la raison, la clarté, la mesure et l’inspiration antique.'
      },
      {
        heading: 'Le Brun, Rigaud et Lully',
        body: 'Charles Le Brun dirige la décoration de Versailles et les tapisseries des Gobelins ; Hyacinthe Rigaud peint le célèbre portrait d’apparat de Louis XIV ; Jean-Baptiste Lully invente la tragédie lyrique française et compose de grands divertissements royaux avec Molière.'
      }
    ],
    keyTakeaways: [
      'L’art classique recherche l’ordre, l’harmonie, la symétrie et l’équilibre.',
      'Les Académies royales forment les artistes et orientent le goût européen.',
      'La cour de France devient le modèle culturel de toute l’Europe monarchique.'
    ],
    keyDates: [
      { date: '1666', label: 'Fondation de l’Académie des sciences et de l’Académie de France à Rome' }
    ],
    exercise: {
      question: 'Quel compositeur d’origine italienne dirigea la musique de la cour de Louis XIV et créa l’opéra français ?',
      options: ['Mozart', 'Jean-Baptiste Lully', 'Berlioz', 'Debussy'],
      correctIndex: 1,
      explanation: 'Devenu surintendant de la musique du roi, Lully collabora notamment avec Molière pour les comédies-ballets.'
    }
  },
  {
    id: 'p128-corneille-racine-moliere',
    page: 128,
    title: 'Corneille, Racine et Molière',
    eraId: 'temps-modernes',
    kind: 'portrait',
    dates: 'XVIIe siècle',
    subtitle: 'Les maîtres du théâtre classique et le rayonnement de la langue française',
    image: IMG_VERSAILLES,
    imageCaption: 'Les grandes représentations théâtrales dans les châteaux royaux et à la Comédie-Française.',
    imageObservation: 'Protégé par Louis XIV, le théâtre classique porta la langue française au sommet de son rayonnement européen.',
    sections: [
      {
        heading: 'La tragédie classique : Corneille et Racine',
        body: 'Pierre Corneille exalte le sens du devoir et l’héroïsme dans Le Cid (1637), Horace et Cinna. Jean Racine peint avec une poésie bouleversante la fatalité des passions humaines dans Andromaque, Phèdre ou Britannicus, dans le respect strict de la règle des trois unités (temps, lieu, action).'
      },
      {
        heading: 'Molière et les grands moralistes',
        body: 'Jean-Baptiste Poquelin, dit Molière, fait rire la cour et la ville tout en dénonçant l’hypocrisie, l’avarice ou la vanité (Tartuffe, L’Avare, Le Bourgeois gentilhomme). À leurs côtés brillent La Fontaine (Fables), Madame de Sévigné et La Bruyère. En 1680 naît la Comédie-Française.'
      }
    ],
    keyTakeaways: [
      'Corneille et Racine portent la tragédie en alexandrins à son plus haut degré de perfection.',
      'Molière mêle farce, comédie de mœurs et critique sociale avec le soutien de Louis XIV.',
      'En 1680, Louis XIV crée la Comédie-Française, plus ancienne troupe théâtrale permanente au monde.'
    ],
    keyDates: [
      { date: '1637', label: 'Triomphe du Cid de Pierre Corneille' },
      { date: '1680', label: 'Fondation de la Comédie-Française' }
    ],
    exercise: {
      question: 'Laquelle de ces célèbres pièces a été écrite par Molière pour critiquer l’hypocrisie religieuse ?',
      options: ['Le Cid', 'Phèdre', 'Tartuffe', 'Les Fables'],
      correctIndex: 2,
      explanation: 'Créée en 1664 et longtemps censurée avant d’être autorisée par Louis XIV en 1669, Tartuffe demeure un chef-d’œuvre de Molière.'
    }
  },
  {
    id: 'p130-revoltes-populaires',
    page: 130,
    title: 'Les révoltes populaires en France',
    eraId: 'temps-modernes',
    kind: 'theme',
    dates: 'XVIIe siècle',
    subtitle: 'Croquants, Nu-Pieds et Bonnets rouges face au poids croissant des impôts',
    image: IMG_VERSAILLES,
    imageCaption: 'Sous le faste de Versailles, les campagnes et provinces souffrent des impôts de guerre.',
    imageObservation: 'La pression fiscale destinée à financer les armées royales déclencha de vifs soulèvements ruraux.',
    sections: [
      {
        heading: 'Le poids de la fiscalité royale',
        body: 'Pour payer les guerres continuelles de Louis XIII puis de Louis XIV, l’impôt royal (taille, gabelle sur le sel, aides sur les boissons) ne cesse de croître. Ces charges pèsent presque exclusivement sur les paysans et artisans, car le clergé et la noblesse en sont largement exemptés.'
      },
      {
        heading: 'Des soulèvements réprimés avec dureté',
        body: 'Au XVIIe siècle éclatent de violentes émeutes rurales et urbaines : les Croquants en Périgord et Saintonge, les Va-nu-pieds en Normandie (1639) contre la gabelle, et la révolte du Papier timbré dite des « Bonnets rouges » en Bretagne (1675). Toutes sont écrasées par l’armée royale.'
      }
    ],
    keyTakeaways: [
      'L’augmentation de la taille et de la gabelle provoque de fréquentes révoltes antifiscales.',
      'En 1675, la révolte des Bonnets rouges secoue la Bretagne sous le règne de Louis XIV.',
      'La répression royale démontre la fermeté du pouvoir absolutiste dans les provinces.'
    ],
    keyDates: [
      { date: '1639', label: 'Révolte des Va-nu-pieds en Normandie' },
      { date: '1675', label: 'Révolte du Papier timbré (Bonnets rouges) en Bretagne' }
    ],
    exercise: {
      question: 'Quel impôt très impopulaire de l’Ancien Régime obligeait les habitants à acheter du sel taxé par l’État ?',
      options: ['La dîme', 'La gabelle', 'La corvée', 'Le cens'],
      correctIndex: 1,
      explanation: 'La gabelle taxait lourdement le sel, produit indispensable pour conserver les aliments.'
    }
  },
  {
    id: 'p132-guerres-louis-xiv',
    page: 132,
    title: 'Les guerres de Louis XIV',
    eraId: 'temps-modernes',
    kind: 'theme',
    dates: '1667 – 1713',
    subtitle: 'Les conquêtes de Louvois, la « ceinture de fer » de Vauban et les coalitions européennes',
    image: IMG_VERSAILLES,
    imageCaption: 'Vauban fortifia les frontières du royaume tandis que les armées françaises combattaient en Europe.',
    imageObservation: 'La France gagna la Franche-Comté, la Flandre et Strasbourg, mais s’épuisa dans des guerres incessantes.',
    sections: [
      {
        heading: 'Une armée modernisée et des frontières fortifiées',
        body: 'Le ministre Louvois dote la France d’une armée disciplinée, équipée d’uniformes et du fusil à baïonnette. L’ingénieur Sébastien Le Prestre de Vauban bâtit ou modernise plus de cent places fortes en étoile (Besançon, Neuf-Brisach, Mont-Louis) protégeant le « pré carré ».'
      },
      {
        heading: 'Des victoires aux coalitions européennes',
        body: 'Inquiètes des succès de Louis XIV (Flandre, Franche-Comté en 1678, Strasbourg en 1681), les puissances européennes (Angleterre, Hollande, Autriche) s’allient contre lui. La longue guerre de Succession d’Espagne (1701-1713) ruine les finances mais maintient le petit-fils du roi, Philippe V, sur le trône d’Espagne.'
      }
    ],
    keyTakeaways: [
      'Louis XIV agrandit le royaume au nord et à l’est (Lille, Franche-Comté, Strasbourg).',
      'Vauban protège les frontières par un réseau remarquable de citadelles.',
      'Le coût énorme des guerres et les hivers rigoureux (1709) plongent le peuple dans la misère à la fin du règne.'
    ],
    keyDates: [
      { date: '1678', label: 'Paix de Nimègue rattachant la Franche-Comté à la France' },
      { date: '1713', label: 'Traités d’Utrecht mettant fin à la guerre de Succession d’Espagne' }
    ],
    exercise: {
      question: 'Quel célèbre maréchal et ingénieur militaire conçut les citadelles en étoile protégeant les frontières sous Louis XIV ?',
      options: ['Colbert', 'Vauban', 'Turenne', 'Du Guesclin'],
      correctIndex: 1,
      explanation: 'Sébastien Le Prestre de Vauban réalisa une « ceinture de fer » de forteresses dont douze sites sont classés à l’UNESCO.'
    }
  },
  {
    id: 'p134-louis-xiv-religion',
    page: 134,
    title: 'Louis XIV et la religion',
    eraId: 'temps-modernes',
    kind: 'theme',
    dates: '1685 – XVIIIe siècle',
    subtitle: 'La révocation de l’édit de Nantes et l’exil des protestants français',
    image: IMG_VERSAILLES,
    imageCaption: 'La volonté d’unité religieuse (« Un roi, une loi, une foi ») marque la fin du règne.',
    imageObservation: 'La révocation de 1685 priva la France de près de 200 000 sujets, souvent artisans et savants.',
    sections: [
      {
        heading: 'L’édit de Fontainebleau (1685)',
        body: 'Convaincu qu’un royaume uni doit partager la même religion (« Un roi, une loi, une foi »), Louis XIV multiplie les pressions sur les protestants (dragonnades) avant de signer l’édit de Fontainebleau le 18 octobre 1685 : il révoque l’édit de Nantes et interdit le culte protestant.'
      },
      {
        heading: 'L’exil du Refuge et les Camisards',
        body: 'Malgré l’interdiction de quitter le royaume, près de 200 000 protestants s’exilent vers l’Angleterre, la Prusse, la Suisse ou les Provinces-Unies, emportant savoir-faire industriels et capitaux. Dans les Cévennes éclate la révolte des Camisards (1702-1704). Le roi réprime aussi le jansénisme (Port-Royal).'
      }
    ],
    keyTakeaways: [
      'En 1685, par l’édit de Fontainebleau, Louis XIV révoque l’édit de Nantes.',
      'Près de 200 000 protestants fuient la France vers les pays du Refuge.',
      'Cette décision affaiblit l’économie française et suscite l’hostilité des États protestants d’Europe.'
    ],
    keyDates: [
      { date: '18 octobre 1685', label: 'Révocation de l’édit de Nantes (édit de Fontainebleau)' },
      { date: '1702 – 1704', label: 'Guerre des Camisards dans les Cévennes' }
    ],
    exercise: {
      question: 'En quelle année Louis XIV révoque-t-il l’édit de Nantes par l’édit de Fontainebleau ?',
      options: ['1598', '1661', '1685', '1715'],
      correctIndex: 2,
      explanation: 'Signé en octobre 1685, l’édit de Fontainebleau mit fin à la tolérance accordée par Henri IV en 1598.'
    }
  },
  {
    id: 'p136-louis-xv',
    page: 136,
    title: 'Louis XV',
    eraId: 'temps-modernes',
    kind: 'portrait',
    dates: '1710 – 1774',
    subtitle: 'Du « Bien-Aimé » à la perte des colonies d’Amérique et aux blocages politiques',
    image: IMG_VERSAILLES,
    imageCaption: 'Sous Louis XV, les arts brillent mais la monarchie peine à se réformer.',
    imageObservation: 'Le traité de Paris (1763) marqua un tournant colonial majeur en faveur de la Grande-Bretagne.',
    sections: [
      {
        heading: 'La Régence et le long règne de Louis XV',
        body: 'Arrière-petit-fils de Louis XIV, Louis XV devient roi à cinq ans en 1715. Après la Régence de Philippe d’Orléans (marquée par le krach financier du système de Law), il gouverne avec le sage cardinal de Fleury, puis affronte l’opposition croissante des Parlements qui refusent toute réforme fiscale touchant aux privilèges.'
      },
      {
        heading: 'La guerre de Sept Ans (1756 – 1763)',
        body: 'Malgré l’acquisition de la Lorraine (1766) et de la Corse (1768), la défaite de la France et de ses alliés dans la guerre de Sept Ans face à la Grande-Bretagne entraîne le désastreux traité de Paris (1763) : la France cède le Canada (Nouvelle-France) et perd ses positions en Inde.'
      }
    ],
    keyTakeaways: [
      'Louis XV règne de 1715 à 1774 : d’abord populaire (« le Bien-Aimé »), il devient impopulaire à la fin de sa vie.',
      'Par le traité de Paris (1763), la France perd la Nouvelle-France (Canada) au profit de l’Angleterre.',
      'La Lorraine (1766) et la Corse (1768) sont rattachées à la France.'
    ],
    keyDates: [
      { date: '1715', label: 'Mort de Louis XIV et début du règne de Louis XV' },
      { date: '1763', label: 'Traité de Paris : perte du Canada et de la Louisiane' },
      { date: '1766 – 1768', label: 'Rattachement de la Lorraine et de la Corse' }
    ],
    exercise: {
      question: 'Quel vaste territoire nord-américain la France cède-t-elle à la Grande-Bretagne au traité de Paris en 1763 ?',
      options: ['Le Mexique', 'Le Canada (Nouvelle-France)', 'Le Brésil', 'Saint-Domingue'],
      correctIndex: 1,
      explanation: 'À l’issue de la guerre de Sept Ans, le traité de Paris de 1763 consacra la perte de la Nouvelle-France.'
    }
  },
  {
    id: 'p138-lumieres',
    page: 138,
    title: 'Les Lumières',
    eraId: 'temps-modernes',
    kind: 'theme',
    dates: 'XVIIIe siècle',
    subtitle: 'Montesquieu, Rousseau, Diderot et l’Encyclopédie contre l’absolutisme et l’intolérance',
    image: IMG_REVOLUTION,
    imageCaption: 'Les salons et les cafés deviennent au XVIIIe siècle les creusets d’idées politiques nouvelles.',
    imageObservation: 'Les philosophes des Lumières préparent les esprits aux principes de liberté, d’égalité et de séparation des pouvoirs.',
    sections: [
      {
        heading: 'Éclairer le monde par la Raison',
        body: 'Au XVIIIe siècle, les philosophes des Lumières défendent l’usage critique de la raison contre les préjugés et l’intolérance. Montesquieu propose la séparation des trois pouvoirs (législatif, exécutif, judiciaire) dans De l’esprit des lois (1748), tandis que Jean-Jacques Rousseau fonde la légitimité politique sur la souveraineté du peuple dans Du contrat social (1762).'
      },
      {
        heading: 'L’Encyclopédie de Diderot et d’Alembert',
        body: 'Entre 1751 et 1772, Denis Diderot et le mathématicien Jean le Rond d’Alembert dirigent l’Encyclopédie (28 volumes), monumental dictionnaire rassemblant toutes les connaissances scientifiques, techniques et philosophiques de leur temps malgré la censure royale.'
      }
    ],
    keyTakeaways: [
      'Les Lumières critiquent la monarchie absolue, les privilèges de la noblesse et le fanatisme religieux.',
      'Montesquieu théorise la séparation des pouvoirs ; Rousseau défend la souveraineté du peuple.',
      'Diderot et d’Alembert publient l’Encyclopédie pour diffuser les savoirs et les métiers.'
    ],
    keyDates: [
      { date: '1748', label: 'De l’esprit des lois de Montesquieu' },
      { date: '1751', label: 'Parution du premier tome de l’Encyclopédie' },
      { date: '1762', label: 'Du contrat social de Jean-Jacques Rousseau' }
    ],
    exercise: {
      question: 'Quel philosophe des Lumières a formulé le principe de la séparation des trois pouvoirs dans De l’esprit des lois ?',
      options: ['Voltaire', 'Montesquieu', 'Rousseau', 'Diderot'],
      correctIndex: 1,
      explanation: 'Montesquieu montra que pour éviter la tyrannie, les pouvoirs de faire la loi, d’exécuter et de juger doivent être séparés.'
    }
  },
  {
    id: 'p140-voltaire',
    page: 140,
    title: 'Voltaire',
    eraId: 'temps-modernes',
    kind: 'portrait',
    dates: '1694 – 1778',
    subtitle: 'L’écrivain infatigable de la tolérance et de la liberté d’expression',
    image: IMG_REVOLUTION,
    imageCaption: 'Voltaire devint la conscience critique de l’Europe des Lumières.',
    imageObservation: 'Son engagement public pour réhabiliter des innocents condamnés à tort préfigure la figure moderne de l’intellectuel.',
    sections: [
      {
        heading: 'Une œuvre brillante et mordante',
        body: 'François-Marie Arouet, dit Voltaire, connaît la Bastille puis l’exil en Angleterre, dont il admire les libertés politiques et religieuses (Lettres philosophiques, 1734). Dans ses contes philosophiques comme Candide (1759) ou Zadig, il raille avec ironie les guerres absurdes et les privilèges.'
      },
      {
        heading: 'Le combat contre l’injustice : l’affaire Calas',
        body: 'Retiré à Ferney près de la frontière suisse, Voltaire mène campagne pour réformer la justice criminelle (abolition de la torture). En 1762-1765, il mobilise l’opinion européenne pour obtenir la réhabilitation du protestant toulousain Jean Calas, condamné à mort sans preuve, et publie son Traité sur la tolérance (1763).'
      }
    ],
    keyTakeaways: [
      'Voltaire combat le fanatisme, la torture judiciaire et la censure.',
      'Il défend la liberté d’opinion et la tolérance religieuse (Traité sur la tolérance, 1763).',
      'Sa tombe fut transférée au Panthéon par la Révolution en 1791.'
    ],
    keyDates: [
      { date: '1759', label: 'Publication de Candide ou l’Optimisme' },
      { date: '1763', label: 'Traité sur la tolérance à la suite de l’affaire Calas' }
    ],
    quote: {
      text: 'Il faut cultiver notre jardin.',
      author: 'Voltaire, Candide (1759)'
    },
    exercise: {
      question: 'À l’occasion de quelle célèbre erreur judiciaire Voltaire rédige-t-il son Traité sur la tolérance en 1763 ?',
      options: ['L’affaire Dreyfus', 'L’affaire Calas', 'L’affaire du Collier', 'Le procès des Templiers'],
      correctIndex: 1,
      explanation: 'Le marchand protestant Jean Calas avait été roué vif à Toulouse en 1762 sur une accusation infondée ; Voltaire obtint sa réhabilitation posthume en 1765.'
    }
  },
  {
    id: 'p142-louis-xvi',
    page: 142,
    title: 'Louis XVI',
    eraId: 'temps-modernes',
    kind: 'portrait',
    dates: '1754 – 1793',
    subtitle: 'Le roi bien intentionné mais dépassé par la crise financière et révolutionnaire',
    image: IMG_REVOLUTION,
    imageCaption: 'L’impasse des réformes financières pousse Louis XVI à convoquer les États généraux en 1789.',
    imageObservation: 'La dette publique, aggravée par l’aide aux États-Unis, rendit incontournable la remise en cause des privilèges fiscaux.',
    sections: [
      {
        heading: 'Des réformes bloquées par les privilégiés',
        body: 'Petit-fils de Louis XV, Louis XVI monte sur le trône en 1774 aux côtés de la reine Marie-Antoinette d’Autriche. Conscient de la crise des finances, il nomme successivement des ministres réformateurs comme Turgot, Necker et Calonne, qui tentent de faire payer l’impôt foncier à la noblesse et au clergé. Chaque projet se heurte au refus des Parlements.'
      },
      {
        heading: 'Vers la convocation des États généraux',
        body: 'Le Trésor royal étant proche de la faillite en 1788 après des récoltes catastrophiques, Louis XVI se résout à convoquer les États généraux pour mai 1789 à Versailles et invite les Français à rédiger des cahiers de doléances. Dépassé par la Révolution, il sera jugé et guillotiné en janvier 1793.'
      }
    ],
    keyTakeaways: [
      'Louis XVI échoue à réformer la fiscalité face à l’opposition des ordres privilégiés.',
      'Il convoque les États généraux pour mai 1789 après une grave crise financière et agricole.',
      'Sa chute ouvre la voie à la Première République en 1792.'
    ],
    keyDates: [
      { date: '1774', label: 'Avènement de Louis XVI' },
      { date: '1788', label: 'Convocation des États généraux et rédaction des cahiers de doléances' }
    ],
    exercise: {
      question: 'Comment s’appelaient les registres dans lesquels les Français écrivirent leurs plaintes et espoirs avant les États généraux de 1789 ?',
      options: ['Les capitulaires', 'Les cahiers de doléances', 'Les lettres de cachet', 'Les assignats'],
      correctIndex: 1,
      explanation: 'Plus de 60 000 cahiers de doléances furent rédigés dans les paroisses et corporations au printemps 1789.'
    }
  },
  {
    id: 'p144-traite-negriere',
    page: 144,
    title: 'La traite négrière européenne',
    eraId: 'temps-modernes',
    kind: 'theme',
    dates: 'XVIIe – XVIIIe siècle',
    subtitle: 'Le commerce triangulaire, l’économie de plantation et le Code noir',
    image: IMG_REVOLUTION,
    imageCaption: 'Les ports atlantiques français participèrent au commerce triangulaire reliant Europe, Afrique et Amériques.',
    imageObservation: 'Les philosophes des Lumières et la Société des amis des Noirs commencèrent à dénoncer ce crime contre l’humanité.',
    sections: [
      {
        heading: 'Le mécanisme du commerce triangulaire',
        body: 'Aux XVIIe et XVIIIe siècles, les navires européens (notamment depuis Nantes, Bordeaux, La Rochelle et Le Havre) pratiquent le commerce triangulaire : ils échangent en Afrique des marchandises manufacturées contre des hommes, femmes et enfants capturés, les déportent aux Antilles (Saint-Domingue, Martinique, Guadeloupe) dans des conditions inhumaines, et rentrent chargés de sucre, de café et de coton.'
      },
      {
        heading: 'Le Code noir et les premiers combats abolitionnistes',
        body: 'Promulgué sous Louis XIV en 1685, le Code noir fixe le statut juridique des personnes réduites en esclavage dans les colonies françaises, les traitant comme des « biens meubles ». Dès le XVIIIe siècle, Montesquieu, Rousseau puis l’abbé Grégoire et Condorcet (Société des amis des Noirs, 1788) réclament l’abolition.'
      }
    ],
    keyTakeaways: [
      'La traite atlantique et le commerce triangulaire déportent des millions d’Africains vers les plantations des Amériques.',
      'En France, Nantes et Bordeaux figurent parmi les grands ports négriers du XVIIIe siècle.',
      'Le Code noir de 1685 encadre l’esclavage colonial jusqu’aux abolitions de 1794 puis 1848.'
    ],
    keyDates: [
      { date: '1685', label: 'Promulgation du Code noir dans les colonies françaises' },
      { date: '1788', label: 'Création de la Société des amis des Noirs à Paris' }
    ],
    exercise: {
      question: 'Quels trois continents reliait le « commerce triangulaire » aux XVIIe et XVIIIe siècles ?',
      options: [
        'Asie, Océanie et Europe',
        'Europe, Afrique et Amériques',
        'Afrique, Asie et Antarctique',
        'Europe, Australie et Amérique du Sud'
      ],
      correctIndex: 1,
      explanation: 'Les navires partaient d’Europe vers l’Afrique, traversaient l’Atlantique vers les colonies américaines et revenaient en Europe.'
    }
  },
  {
    id: 'p146-la-perouse',
    page: 146,
    title: 'La Pérouse',
    eraId: 'temps-modernes',
    kind: 'portrait',
    dates: '1741 – 1788',
    subtitle: 'La grande expédition scientifique autour du monde commandée par Louis XVI',
    image: IMG_REVOLUTION,
    imageCaption: 'Les voyages d’exploration scientifique du XVIIIe siècle dans l’océan Pacifique.',
    imageObservation: 'Passionné de géographie et de marine, Louis XVI suivit personnellement l’expédition de La Pérouse.',
    sections: [
      {
        heading: 'L’expédition de la Boussole et de l’Astrolabe (1785)',
        body: 'Après Bougainville (premier tour du monde français, 1766-1769), Louis XVI confie en 1785 au navigateur Jean-François de Galaup de La Pérouse une grande mission scientifique, astronomique et ethnographique dans le Pacifique, à bord des frégates La Boussole et L’Astrolabe.'
      },
      {
        heading: 'Des découvertes au mystère de Vanikoro',
        body: 'Après avoir cartographié les côtes de Californie, du Japon, de la Sibérie et fait escale en Australie (Botany Bay, janvier 1788), l’expédition disparaît sans laisser de traces. On découvrira quarante ans plus tard que ses deux navires ont fait naufrage sur les récifs de l’île de Vanikoro.'
      }
    ],
    keyTakeaways: [
      'L’expédition de La Pérouse (1785-1788) incarne la passion scientifique du siècle des Lumières.',
      'Ses journaux et cartes envoyés par voie de terre depuis la Sibérie parvinrent à Paris.',
      'Les épaves des deux navires furent retrouvées à Vanikoro (îles Salomon) au XIXe siècle.'
    ],
    keyDates: [
      { date: '1785', label: 'Départ de Brest des frégates La Boussole et L’Astrolabe' },
      { date: '1788', label: 'Disparition de l’expédition à Vanikoro' }
    ],
    exercise: {
      question: 'Comment s’appelaient les deux frégates de l’expédition scientifique de La Pérouse partie en 1785 ?',
      options: [
        'La Pinta et la Niña',
        'La Boussole et L’Astrolabe',
        'L’Hermione et le Soleil-Royal',
        'Le Pourquoi-Pas et la Calypso'
      ],
      correctIndex: 1,
      explanation: 'La Boussole (commandée par La Pérouse) et L’Astrolabe (commandée par Fleuriot de Langle) emportaient savants et dessinateurs.'
    }
  },
  {
    id: 'p148-la-fayette',
    page: 148,
    title: 'La Fayette',
    eraId: 'temps-modernes',
    kind: 'portrait',
    dates: '1757 – 1834',
    subtitle: 'Le « héros des deux mondes », de l’indépendance américaine à 1789',
    image: IMG_REVOLUTION,
    imageCaption: 'L’engagement français aux côtés des insurgés américains et l’adoption des couleurs tricolores.',
    imageObservation: 'L’expérience américaine diffusa en France les idéaux de constitution écrite et de droits naturels.',
    sections: [
      {
        heading: 'Au secours des insurgés américains (1777 – 1781)',
        body: 'En 1777, à 19 ans, le marquis de La Fayette s’embarque clandestinement pour l’Amérique afin de combattre pour l’indépendance des treize colonies face à l’Angleterre. Ami de George Washington, il s’illustre à la victoire décisive de Yorktown (1781), appuyée par la flotte et l’armée françaises de Rochambeau.'
      },
      {
        heading: 'De l’Amérique à la Révolution française',
        body: 'De retour en France auréolé de prestige, La Fayette devient un partisan des droits de l’homme et d’une monarchie constitutionnelle. En juillet 1789, nommé commandant de la Garde nationale de Paris, il contribue à associer le blanc royal au bleu et rouge parisiens pour former la cocarde tricolore.'
      }
    ],
    keyTakeaways: [
      'La Fayette combat aux côtés de George Washington pour l’indépendance des États-Unis (1777-1781).',
      'L’aide française contribue de façon décisive à la victoire américaine, mais alourdit la dette du royaume.',
      'Il présente dès juillet 1789 un premier projet de Déclaration des droits inspiré du modèle américain.'
    ],
    keyDates: [
      { date: '1777', label: 'Départ de La Fayette pour l’Amérique' },
      { date: '1781', label: 'Victoire franco-américaine décisive à Yorktown' }
    ],
    exercise: {
      question: 'À la tête de quelle force parisienne La Fayette fut-il placé en juillet 1789 ?',
      options: ['La Garde impériale', 'La Garde nationale', 'Les Mousquetaires du roi', 'Les Sans-culottes'],
      correctIndex: 1,
      explanation: 'Commandant de la Garde nationale de Paris, La Fayette popularisa la cocarde bleu-blanc-rouge.'
    }
  }
];
