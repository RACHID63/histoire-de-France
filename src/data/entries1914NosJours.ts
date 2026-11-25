import type { BledEntry } from './bledTypes';

const IMG_REPUBLIQUE = '/src/assets/images/chapter_7_republique_1795633327055.jpg';
const IMG_PARIS = '/src/assets/images/chapter_8_europe_1795633326272.jpg';

export const ENTRIES_1914_NOS_JOURS: BledEntry[] = [
  {
    id: 'p242-premiere-guerre-1',
    page: 242,
    title: 'La Première Guerre mondiale (1)',
    eraId: '1914-nos-jours',
    kind: 'theme',
    dates: '1914 – 1916',
    subtitle: 'De la mobilisation d’août 1914 à l’enfer des tranchées et de Verdun',
    image: IMG_REPUBLIQUE,
    imageCaption: 'L’Union sacrée et le sacrifice d’une génération dans les tranchées du front de l’Ouest.',
    imageObservation: 'À partir de l’automne 1914, la guerre de mouvement cède la place à une guerre de position meurtrière.',
    sections: [
      {
        heading: 'L’engrenage de 1914 et la bataille de la Marne',
        body: 'Après l’attentat de Sarajevo (28 juin 1914), le jeu des alliances déclenche la guerre générale début août 1914. Les Français partent dans l’Union sacrée. En septembre 1914, l’armée du général Joffre (aidée des « taxis de la Marne ») stoppe l’avancée allemande lors de la bataille de la Marne.'
      },
      {
        heading: 'La guerre des tranchées et Verdun (1916)',
        body: 'Le front se fige de la mer du Nord à la Suisse. Les soldats — surnommés les Poilus — survivent dans la boue des tranchées sous les obus, les mitrailleuses et les gaz asphyxiants. En 1916, la terrible bataille de Verdun (menée côté français par Pétain puis Nivelle) et celle de la Somme font des centaines de milliers de victimes sans percée décisive.'
      }
    ],
    keyTakeaways: [
      'En août 1914 éclate la Première Guerre mondiale entre Triple-Entente et Empires centraux.',
      'La victoire de la Marne (septembre 1914) sauve Paris mais ouvre quatre ans de guerre de tranchées.',
      'La bataille de Verdun (1916) symbolise l’endurance et le sacrifice des Poilus.'
    ],
    keyDates: [
      { date: 'Août 1914', label: 'Mobilisation générale et entrée en guerre' },
      { date: 'Sept. 1914', label: 'Bataille de la Marne' },
      { date: 'Fév. – Déc. 1916', label: 'Bataille de Verdun' }
    ],
    exercise: {
      question: 'Quel surnom affectueux donnait-on aux soldats français combattant dans les tranchées entre 1914 et 1918 ?',
      options: ['Les Sans-culottes', 'Les Poilus', 'Les Grognards', 'Les Mousquetaires'],
      correctIndex: 1,
      explanation: 'Le mot « Poilu » signifiait alors « courageux, viril », et rappelait la difficulté de se raser au front.'
    }
  },
  {
    id: 'p244-premiere-guerre-2',
    page: 244,
    title: 'La Première Guerre mondiale (2)',
    eraId: '1914-nos-jours',
    kind: 'theme',
    dates: '1917 – 1918',
    subtitle: 'L’arrière mobilisé, l’entrée des États-Unis, l’armistice du 11 novembre et le bilan',
    image: IMG_REPUBLIQUE,
    imageCaption: 'Après quatre années de guerre totale, l’armistice du 11 novembre 1918 ramène l’Alsace-Lorraine.',
    imageObservation: 'La mobilisation totale transforma la place des femmes (« munitionnettes ») et marqua le pays par un deuil immense.',
    sections: [
      {
        heading: 'L’année 1917, les Américains et la victoire de 1918',
        body: 'Épuisée par les offensives meurtrières (Chemin des Dames, 1917), l’armée connaît des mutineries que le général Pétain apaise tout en améliorant la vie des soldats. Tandis que la Russie quitte la guerre après la révolution de 1917, les États-Unis entrent dans le conflit aux côtés des Alliés. Sous le commandement unique du maréchal Foch, les offensives alliées contraignent l’Allemagne à signer l’armistice le 11 novembre 1918 à Rethondes.'
      },
      {
        heading: 'Un bilan humain et matériel dramatique',
        body: 'La « Grande Guerre » a mobilisé l’arrière (femmes dans les usines d’armement et aux champs, troupes coloniales). La France pleure 1,4 million de morts, plus de 3 millions de blessés (dont les « gueules cassées ») et des régions entières du Nord et de l’Est dévastées. Le traité de Versailles (1919) rend l’Alsace-Lorraine à la France.'
      }
    ],
    keyTakeaways: [
      'La guerre de 1914-1918 est une guerre totale mobilisant les soldats, les colonies et les femmes à l’arrière.',
      'L’armistice du 11 novembre 1918 marque la victoire des Alliés ; l’Alsace et la Moselle redeviennent françaises.',
      'La France perd 1,4 million d’hommes : presque chaque commune érige un monument aux morts.'
    ],
    keyDates: [
      { date: 'Avril 1917', label: 'Entrée en guerre des États-Unis aux côtés des Alliés' },
      { date: '11 nov. 1918', label: 'Signature de l’armistice à Rethondes' },
      { date: '28 juin 1919', label: 'Signature du traité de Versailles' }
    ],
    exercise: {
      question: 'À quelle date précise et dans quelle clairière fut signé l’armistice mettant fin à la Première Guerre mondiale ?',
      options: [
        'Le 14 juillet 1918 à Verdun',
        'Le 11 novembre 1918 à Rethondes',
        'Le 8 mai 1919 à Versailles',
        'Le 18 juin 1918 à Paris'
      ],
      correctIndex: 1,
      explanation: 'Signé dans un wagon-restaurant dans la forêt de Compiègne (clairière de Rethondes), l’armistice entra en vigueur le 11 novembre 1918 à 11 heures.'
    }
  },
  {
    id: 'p246-georges-clemenceau',
    page: 246,
    title: 'Georges Clemenceau',
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: '1841 – 1929',
    subtitle: 'Le « Tigre » et le « Père la Victoire » de 1918',
    image: IMG_REPUBLIQUE,
    imageCaption: 'À 76 ans en 1917, Georges Clemenceau incarne la volonté inflexible de vaincre.',
    imageObservation: 'Ancien maire de Montmartre et grand adversaire de l’injustice dans l’Affaire Dreyfus, il conduisit la France à la victoire.',
    sections: [
      {
        heading: 'Un républicain combatif : « le Tigre »',
        body: 'Médecin vendéen de formation, radical intransigeant, Georges Clemenceau fonde L’Aurore (où paraît « J’accuse… ! »), défend l’école laïque et crée les « Brigades du Tigre » (police moderne) lorsqu’il est ministre de l’Intérieur (1906-1909).'
      },
      {
        heading: '« Je fais la guerre ! » (1917 – 1919)',
        body: 'En novembre 1917, alors que le moral du pays vacille, le président Poincaré l’appelle à la tête du gouvernement. Clemenceau relève l’énergie nationale par sa détermination (« Politique intérieure : je fais la guerre ; politique extérieure : je fais la guerre »), visite régulièrement les soldats au front et négocie le traité de Versailles en 1919.'
      }
    ],
    keyTakeaways: [
      'Surnommé « le Tigre », Clemenceau est une grande figure du parti radical sous la IIIe République.',
      'Président du Conseil en novembre 1917, il redresse la France et devient le « Père la Victoire ».',
      'Il représente la France lors de la conférence de paix de Paris (1919).'
    ],
    keyDates: [
      { date: 'Nov. 1917', label: 'Clemenceau devient président du Conseil et ministre de la Guerre' },
      { date: '1919', label: 'Signature du traité de Versailles' }
    ],
    exercise: {
      question: 'Quel surnom affectueux les Français donnèrent-ils à Georges Clemenceau après la victoire de 1918 ?',
      options: ['Le Roi-Soleil', 'Le Père la Victoire', 'L’Incorruptible', 'Le Bien-Aimé'],
      correctIndex: 1,
      explanation: 'Déjà surnommé « le Tigre » pour son tempérament combattu au Parlement, Clemenceau fut célébré en 1918 comme le « Père la Victoire ».'
    }
  },
  {
    id: 'p248-raymond-poincare',
    page: 248,
    title: 'Raymond Poincaré',
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: '1860 – 1934',
    subtitle: 'Le président de l’Union sacrée (1914) et le sauveur du franc (1926)',
    image: IMG_REPUBLIQUE,
    imageCaption: 'L’homme d’État lorrain qui présida la République durant la Grande Guerre et stabilisa la monnaie.',
    imageObservation: 'C’est Poincaré qui appela son rival politique Clemenceau au pouvoir en 1917 pour le salut du pays.',
    sections: [
      {
        heading: 'Président de la République durant la Grande Guerre (1913 – 1920)',
        body: 'Avocat lorrain attaché à la défense nationale et à la rigueur juridique, Raymond Poincaré est élu président de la République en 1913. En août 1914, il lance l’appel à l’« Union sacrée » de tous les partis politiques, et en 1917 il sait dépasser ses désaccords personnels pour nommer Clemenceau.'
      },
      {
        heading: 'Le « franc Poincaré » (1926 – 1928)',
        body: 'Redevenue président du Conseil après la guerre, il fait face aux difficultés de reconstruction et à l’effondrement monétaire de 1926. Rappelé en urgence à la tête d’un gouvernement d’union nationale, il rétablit la confiance et stabilise la devise avec le « franc Poincaré » en 1928.'
      }
    ],
    keyTakeaways: [
      'Raymond Poincaré est président de la République durant toute la Première Guerre mondiale.',
      'Il forge en août 1914 l’expression d’« Union sacrée ».',
      'En 1926-1928, il sauve le franc et rétablit l’équilibre budgétaire.'
    ],
    keyDates: [
      { date: '1913 – 1920', label: 'Présidence de la République de Raymond Poincaré' },
      { date: '1926 – 1928', label: 'Redressement financier et stabilisation du « franc Poincaré »' }
    ],
    exercise: {
      question: 'Quelle formule célèbre Raymond Poincaré employa-t-il en août 1914 pour appeler tous les partis à s’unir face à la guerre ?',
      options: ['Le Front populaire', 'L’Union sacrée', 'Les Trente Glorieuses', 'La Nouvelle Vague'],
      correctIndex: 1,
      explanation: 'Dans son message du 4 août 1914 au Parlement, Poincaré déclara que la France serait « héroïquement défendue par tous ses fils, dont rien ne brisera devant l’ennemi l’union sacrée ».'
    }
  },
  {
    id: 'p250-annees-folles',
    page: 250,
    title: 'Les Années folles',
    eraId: '1914-nos-jours',
    kind: 'theme',
    dates: '1919 – 1929',
    subtitle: 'Effervescence culturelle, jazz, arts décoratifs et émancipation féminine',
    image: IMG_PARIS,
    imageCaption: 'À Paris, les années 1920 sont marquées par le goût de la fête, de la vitesse et de l’avant-garde.',
    imageObservation: 'Montparnasse remplace Montmartre comme foyer des artistes, écrivains et musiciens venus du monde entier.',
    sections: [
      {
        heading: 'Une soif de vivre après le traumatisme de la guerre',
        body: 'Dès la reconstruction entamée, les années 1920 — baptisées « Années folles » — voient naître une société avide de liberté et de distraction. La radio (TSF), le jazz venu des États-Unis (Joséphine Baker à la Revue nègre en 1925), le cinéma parlant et l’Art déco (Exposition de 1925) transforment les goûts.'
      },
      {
        heading: 'La mode « garçonne » et les contrastes',
        body: 'Ayant travaillé à l’arrière pendant la guerre, beaucoup de femmes revendiquent plus d’autonomie : jupes raccourcies, cheveux courts (la « garçonne »), sport et conduite automobile (Coco Chanel), même si le Sénat refuse encore le droit de vote aux femmes. L’euphorie s’achève avec la crise mondiale de 1929.'
      }
    ],
    keyTakeaways: [
      'Les Années folles (1919-1929) brillent par la musique jazz, l’Art déco, le surréalisme (André Breton) et le cinéma.',
      'Paris accueille de nombreux artistes étrangers (Hemingway, Chagall, Modigliani).',
      'Le krach boursier de Wall Street en 1929 met fin à cette période d’insouciance.'
    ],
    keyDates: [
      { date: '1925', label: 'Exposition internationale des Arts décoratifs à Paris et succès de Joséphine Baker' },
      { date: '1929', label: 'Krach boursier américain déclenchant la Grande Dépression mondiale' }
    ],
    exercise: {
      question: 'Quel nouveau style géométrique et élégant triompha lors de l’Exposition internationale de Paris en 1925 ?',
      options: ['L’Art gothique', 'L’Art déco', 'Le baroque', 'Le roman'],
      correctIndex: 1,
      explanation: 'L’Art déco (Arts décoratifs) marqua l’architecture, le mobilier et les affiches de tout l’entre-deux-guerres.'
    }
  },
  {
    id: 'p252-citroen-renault',
    page: 252,
    title: 'André Citroën et Louis Renault',
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: '1898 – 1945',
    subtitle: 'Les deux pionniers de l’industrie automobile de masse en France',
    image: IMG_PARIS,
    imageCaption: 'L’automobile passe du luxe artisanal à la fabrication en série dans les usines parisiennes.',
    imageObservation: 'Inspirés par le travail à la chaîne (fordisme), Citroën et Renault firent de la France le premier constructeur européen dans les années 1920.',
    sections: [
      {
        heading: 'Louis Renault et les usines de Billancourt',
        body: 'Mécanicien inventif, Louis Renault construit sa première voiturette à prise directe dès 1898 à Boulogne-Billancourt. Il bâtit un immense empire industriel produisant voitures, taxis (les taxis de la Marne), chars légers (FT-17 en 1917) et camions, faisant de Billancourt un bastion ouvrier majeur.'
      },
      {
        heading: 'André Citroën, le génie de la série et de la publicité',
        body: 'Polytechnicien, André Citroën convertit en 1919 son usine d’obus du quai de Javel pour lancer la première voiture européenne produite à la chaîne (la Type A), suivie plus tard de la célèbre Traction Avant (1934). Il révolutionne aussi la publicité (tour Eiffel illuminée à son nom, Croisière jaune) et le réseau de panneaux routiers.'
      }
    ],
    keyTakeaways: [
      'Louis Renault et André Citroën modernisent l’industrie française par le travail à la chaîne.',
      'La France devient dans les années 1920 le premier producteur automobile d’Europe.',
      'Citroën innove avec la Traction Avant (1934) et les méthodes modernes de publicité.'
    ],
    keyDates: [
      { date: '1898', label: 'Louis Renault construit sa première voiture à Billancourt' },
      { date: '1919', label: 'André Citroën lance la première voiture européenne fabriquée en grande série' }
    ],
    exercise: {
      question: 'Quel célèbre monument parisien André Citroën fit-il illuminer de son nom entre 1925 et 1934 comme publicité géante ?',
      options: ['L’Arc de Triomphe', 'La tour Eiffel', 'Le Panthéon', 'Notre-Dame de Paris'],
      correctIndex: 1,
      explanation: '250 000 ampoules affichaient le nom CITROËN sur la tour Eiffel, visible à des dizaines de kilomètres.'
    }
  },
  {
    id: 'p254-front-populaire',
    page: 254,
    title: 'Le Front populaire',
    eraId: '1914-nos-jours',
    kind: 'theme',
    dates: 'Mai 1936 – 1938',
    subtitle: 'L’union des gauches face à la crise et les grandes conquêtes sociales de 1936',
    image: IMG_REPUBLIQUE,
    imageCaption: 'Les congés payés de l’été 1936 permettent à des millions de travailleurs de découvrir la mer ou la campagne.',
    imageObservation: 'La solidarité syndicale et les accords de Matignon transformèrent durablement le droit du travail français.',
    sections: [
      {
        heading: 'De la crise des années 1930 à la victoire de mai 1936',
        body: 'Touchée à partir de 1931 par la crise économique mondiale (chômage, faillites) et secouée par la montée des ligues d’extrême droite (émeute du 6 février 1934), la gauche française (radicaux, socialistes SFIO et communistes) forme le Front populaire sous le mot d’ordre « Pain, Paix, Liberté » et remporte les élections de mai 1936.'
      },
      {
        heading: 'Les accords de Matignon et les congés payés',
        body: 'Au milieu d’une vague joyeuse de grèves avec occupation d’usines, le gouvernement de Léon Blum réunit patronat et syndicats et signe les accords de Matignon (7 juin 1936) : hausses de salaires, reconnaissance des délégués du personnel, semaine de travail de 40 heures et création des deux semaines de congés payés.'
      }
    ],
    keyTakeaways: [
      'Le Front populaire réunit radicaux, socialistes et communistes et gagne les élections de mai 1936.',
      'Les accords de Matignon (juin 1936) accordent la semaine de 40 heures et les deux premières semaines de congés payés.',
      'Léo Lagrange organise les premiers loisirs populaires et les auberges de jeunesse.'
    ],
    keyDates: [
      { date: '6 février 1934', label: 'Émeutes antiparlementaires à Paris devant la Chambre' },
      { date: 'Mai – Juin 1936', label: 'Victoire du Front populaire et accords de Matignon (40 h, congés payés)' }
    ],
    exercise: {
      question: 'Combien de semaines de congés payés furent instaurées pour la première fois en France par le Front populaire en juin 1936 ?',
      options: ['Une semaine', 'Deux semaines', 'Cinq semaines', 'Huit semaines'],
      correctIndex: 1,
      explanation: 'Les salariés obtinrent deux semaines (15 jours) de congés payés par an en 1936, portées ensuite à trois (1956), quatre (1969) puis cinq semaines (1982).'
    }
  },
  {
    id: 'p256-leon-blum',
    page: 256,
    title: 'Léon Blum',
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: '1872 – 1950',
    subtitle: 'Le premier chef de gouvernement socialiste et un républicain fidèle jusque dans l’épreuve',
    image: IMG_REPUBLIQUE,
    imageCaption: 'Léon Blum incarna l’humanisme socialiste et le courage républicain face au nazisme.',
    imageObservation: 'Déporté à Buchenwald pendant la guerre après le procès de Riom, il survécut et revint servir la République.',
    sections: [
      {
        heading: 'Le chef du Front populaire en 1936',
        body: 'Normalien, juriste au Conseil d’État et critique littéraire proche de Jean Jaurès, Léon Blum devient en juin 1936 le premier socialiste (et le premier Français de confession juive) à diriger le gouvernement, ouvrant l’exécutif pour la première fois à trois femmes sous-secrétaires d’État (dont Irène Joliot-Curie) alors que les femmes ne votent pas encore.'
      },
      {
        heading: 'Le refus de Vichy et la déportation',
        body: 'Attaqué avec haine par l’extrême droite antisémite, confronté aux difficultés économiques et à la guerre d’Espagne, il quitte le pouvoir en 1938. En juillet 1940, il fait partie des 80 parlementaires qui refusent les pleins pouvoirs à Pétain. Arrêté par Vichy, il tient tête à ses juges au procès de Riom avant d’être déporté en Allemagne (Buchenwald).'
      }
    ],
    keyTakeaways: [
      'Léon Blum préside le gouvernement du Front populaire (1936-1937), réalisant les grandes réformes sociales de 1936.',
      'Il nomme trois femmes au gouvernement dès 1936, huit ans avant l’obtention du droit de vote féminin.',
      'Il vote contre les pleins pouvoirs à Pétain en juillet 1940 et survit à la déportation.'
    ],
    keyDates: [
      { date: 'Juin 1936', label: 'Léon Blum nommé président du Conseil' },
      { date: '10 juillet 1940', label: 'Vote contre les pleins pouvoirs à Philippe Pétain' }
    ],
    exercise: {
      question: 'Quelle initiative symbolique prit Léon Blum dès la formation de son gouvernement en juin 1936 ?',
      options: [
        'Nommer pour la première fois trois femmes au gouvernement',
        'Supprimer l’école publique',
        'Rétablir le franc-or impérial',
        'Interdire les syndicats'
      ],
      correctIndex: 0,
      explanation: 'Irène Joliot-Curie, Cécile Brunschvicg et Suzanne Lacore devinrent les premières femmes membres d’un gouvernement français en 1936.'
    }
  },
  {
    id: 'p258-seconde-guerre-1',
    page: 258,
    title: 'La France dans la Seconde Guerre mondiale (1)',
    eraId: '1914-nos-jours',
    kind: 'theme',
    dates: '1939 – 1942',
    subtitle: 'La défaite de juin 1940, l’Exode, l’armistice et la France occupée',
    image: IMG_REPUBLIQUE,
    imageCaption: 'L’effondrement militaire de mai-juin 1940 jette des millions de Français sur les routes de l’Exode.',
    imageObservation: 'La ligne de démarcation coupe le territoire entre la zone nord occupée par l’Allemagne et la zone dite « libre ».',
    sections: [
      {
        heading: 'De la « drôle de guerre » à la défaite de juin 1940',
        body: 'Après l’invasion de la Pologne par Hitler, la France et le Royaume-Uni déclarent la guerre à l’Allemagne le 3 septembre 1939. Après huit mois d’attente (la « drôle de guerre »), la Wehrmacht contourne la ligne Maginot par les Ardennes le 10 mai 1940 et enfonce les armées alliées (rembarquement de Dunkerque).'
      },
      {
        heading: 'L’Exode et la France coupée en deux',
        body: 'Près de huit millions de civils fuient vers le Sud : c’est l’Exode. Nommé président du Conseil, le maréchal Pétain signe l’armistice le 22 juin 1940 à Rethondes. L’Alsace-Moselle est annexée de fait, le Nord et l’Atlantique sont occupés par l’armée allemande, les prisonniers de guerre (1,8 million) restent en Allemagne et la population subit rationnement et pénuries.'
      }
    ],
    keyTakeaways: [
      'Le 3 septembre 1939, la France entre en guerre contre l’Allemagne nazie.',
      'En mai-juin 1940, la défaite militaire éclair provoque l’Exode de millions de civils.',
      'L’armistice du 22 juin 1940 divise la France par une ligne de démarcation et impose une lourde occupation.'
    ],
    keyDates: [
      { date: '3 sept. 1939', label: 'Déclaration de guerre de la France et du Royaume-Uni à l’Allemagne' },
      { date: '10 mai 1940', label: 'Début de l’offensive allemande à l’Ouest' },
      { date: '22 juin 1940', label: 'Signature de l’armistice à Rethondes' }
    ],
    exercise: {
      question: 'Comment appelait-on la frontière intérieure qui séparait entre 1940 et 1942 la zone occupée par l’Allemagne et la zone sud ?',
      options: ['La ligne Maginot', 'La ligne de démarcation', 'Le rideau de fer', 'La ceinture de fer'],
      correctIndex: 1,
      explanation: 'La ligne de démarcation contrôlée par les Allemands coupa la France jusqu’à l’invasion de la zone sud en novembre 1942.'
    }
  },
  {
    id: 'p260-petain-laval',
    page: 260,
    title: 'Philippe Pétain et Pierre Laval',
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: '1940 – 1944',
    subtitle: 'Le régime de Vichy, la Révolution nationale et la collaboration d’État',
    image: IMG_REPUBLIQUE,
    imageCaption: 'À Vichy, la République est abolie et remplacée par un État autoritaire collaborant avec l’Allemagne nazie.',
    imageObservation: 'La devise « Travail, Famille, Patrie » remplace « Liberté, Égalité, Fraternité » durant les quatre années de Vichy.',
    sections: [
      {
        heading: 'La fin de la IIIe République et la « Révolution nationale »',
        body: 'Le 10 juillet 1940 à Vichy, l’Assemblée vote les pleins pouvoirs constituants au maréchal Pétain (seuls 80 parlementaires refusent). L’« État français » supprime la République, les libertés politiques et les syndicats, et prône une « Révolution nationale » conservatrice.'
      },
      {
        heading: 'La collaboration et les persécutions antisémites',
        body: 'Après l’entrevue de Montoire avec Hitler (octobre 1940), Pétain et son chef de gouvernement Pierre Laval engagent la France dans la collaboration : livraison de matières premières, envoi de jeunes travailleurs en Allemagne (STO, 1943) et création de la Milice pour traquer les résistants. Dès octobre 1940, Vichy adopte de sa propre initiative des lois antisémites (Statut des Juifs) et participe en juillet 1942 à la rafle du Vélodrome d’Hiver.'
      }
    ],
    keyTakeaways: [
      'Le 10 juillet 1940 marque la fin de la IIIe République et la naissance du régime autoritaire de Vichy.',
      'Pétain et Pierre Laval mènent une politique de collaboration économique, policière et militaire avec l’Allemagne nazie.',
      'La police de Vichy participe activement à la déportation de près de 76 000 Juifs de France (rafle du Vel’ d’Hiv’).'
    ],
    keyDates: [
      { date: '10 juillet 1940', label: 'Vote des pleins pouvoirs au maréchal Pétain à Vichy' },
      { date: '24 oct. 1940', label: 'Poignée de main de Montoire et début de la collaboration' },
      { date: '16 – 17 juil. 1942', label: 'Rafle du Vélodrome d’Hiver à Paris par la police française' }
    ],
    exercise: {
      question: 'Par quelle devise le régime de Vichy remplaça-t-il « Liberté, Égalité, Fraternité » entre 1940 et 1944 ?',
      options: [
        'Un roi, une loi, une foi',
        'Travail, Famille, Patrie',
        'Pain, Paix, Liberté',
        'Ordre et Progrès'
      ],
      correctIndex: 1,
      explanation: 'Le régime autoritaire du maréchal Pétain substitua « Travail, Famille, Patrie » à la devise républicaine.'
    }
  },
  {
    id: 'p262-de-gaulle-1',
    page: 262,
    title: 'Charles de Gaulle (1)',
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: '1890 – 1944',
    subtitle: 'L’Appel du 18 juin 1940 et le chef de la France libre à Londres',
    image: IMG_REPUBLIQUE,
    imageCaption: '« Quoi qu’il arrive, la flamme de la résistance française ne doit pas s’éteindre. »',
    imageObservation: 'Depuis Londres, le général de Gaulle maintient la France dans le camp des Alliés et de la démocratie.',
    sections: [
      {
        heading: 'Le refus de l’armistice : l’Appel du 18 juin 1940',
        body: 'Général de brigade à titre temporaire et spécialiste des chars de combat, Charles de Gaulle refuse la capitulation. Réfugié à Londres, il lance le 18 juin 1940 à la radio de la BBC un appel solennel aux militaires et citoyens français à poursuivre le combat aux côtés des Alliés.'
      },
      {
        heading: 'La France libre et la légitimité retrouvée',
        body: 'Rejoint par des volontaires (Forces françaises libres), par l’Afrique-Équatoriale française grâce au gouverneur Félix Éboué, puis par le général Leclerc (serment de Koufra), de Gaulle fait rayonner la France combattante (Bir Hakeim, 1942) et unifie la Résistance intérieure en 1943.'
      }
    ],
    keyTakeaways: [
      'Le 18 juin 1940, Charles de Gaulle refuse la défaite et fonde la France libre à Londres.',
      'Il obtient le ralliement de territoires d’outre-mer (Tchad avec Félix Éboué) et forme les FFL.',
      'Il rétablit le rang de la France parmi les vainqueurs de 1945.'
    ],
    keyDates: [
      { date: '18 juin 1940', label: 'Appel du général de Gaulle sur les ondes de la BBC à Londres' },
      { date: '1942', label: 'Héroïque résistance des Forces françaises libres à Bir Hakeim' }
    ],
    quote: {
      text: 'La France a perdu une bataille ! Mais la France n’a pas perdu la guerre !',
      author: 'Affiche de la France libre d’après le général de Gaulle, 1940'
    },
    exercise: {
      question: 'De quelle ville et sur quelle radio le général de Gaulle lança-t-il son appel à la résistance le 18 juin 1940 ?',
      options: [
        'Depuis Alger sur Radio France',
        'Depuis Londres sur la BBC',
        'Depuis Paris sur Radio Paris',
        'Depuis New York sur NBC'
      ],
      correctIndex: 1,
      explanation: 'Le général de Gaulle s’exprima au micro de la BBC à Londres à 18 heures le 18 juin 1940.'
    }
  },
  {
    id: 'p264-seconde-guerre-2',
    page: 264,
    title: 'La France dans la Seconde Guerre mondiale (2)',
    eraId: '1914-nos-jours',
    kind: 'theme',
    dates: '1943 – 1945',
    subtitle: 'La Résistance intérieure, les Justes, les débarquements et la victoire du 8 mai 1945',
    image: IMG_PARIS,
    imageCaption: 'La libération de Paris (août 1944) et la liesse populaire sur les Champs-Élysées.',
    imageObservation: 'Résistants de l’intérieur (FFI) et troupes alliées et françaises libres conjuguèrent leurs efforts pour libérer le pays.',
    sections: [
      {
        heading: 'La Résistance intérieure et les Justes',
        body: 'Face à l’occupation totale du territoire (novembre 1942) et au STO, les mouvements de résistance (Combat, Libération, Francs-Tireurs, FTP) publient des journaux clandestins, renseignent Londres, organisent des maquis (Vercors, Glières) et sabotent les voies ferrées. Parallèlement, de nombreux « Justes parmi les nations » (comme au Chambon-sur-Lignon) cachent et sauvent les trois quarts des Juifs de France.'
      },
      {
        heading: 'Les débarquements de 1944 et le 8 mai 1945',
        body: 'Le 6 juin 1944, les Alliés débarquent en Normandie (commandos français Kieffer), suivis le 15 août par le débarquement de Provence (armée du général de Lattre de Tassigny). Paris se soulève et est libéré le 25 août 1944 par la 2e DB du général Leclerc. La guerre en Europe s’achève par la capitulation allemande le 8 mai 1945.'
      }
    ],
    keyTakeaways: [
      'La Résistance lutte par la presse clandestine, le renseignement, le sabotage et les maquis (FFI).',
      'Le 6 juin 1944 (Normandie) et le 15 août 1944 (Provence) ouvrent la libération du territoire.',
      'Paris est libéré le 25 août 1944 ; l’Allemagne capitule le 8 mai 1945.'
    ],
    keyDates: [
      { date: '6 juin 1944', label: 'Débarquement allié en Normandie (Jour J)' },
      { date: '25 août 1944', label: 'Libération de Paris' },
      { date: '8 mai 1945', label: 'Capitulation de l’Allemagne nazie (victoire en Europe)' }
    ],
    exercise: {
      question: 'À la tête de quelle unité militaire le général Leclerc entra-t-il le premier dans Paris pour le libérer en août 1944 ?',
      options: ['La 2e Division blindée (2e DB)', 'La Garde impériale', 'Les Poilus de Verdun', 'La flotte de Brest'],
      correctIndex: 0,
      explanation: 'Le 25 août 1944, la 2e DB du général Leclerc reçut la reddition de la garnison allemande de Paris.'
    }
  },
  {
    id: 'p266-jean-moulin',
    page: 266,
    title: 'Jean Moulin',
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: '1899 – 1943',
    subtitle: 'Le préfet héros qui unifia la Résistance intérieure française',
    image: IMG_REPUBLIQUE,
    imageCaption: 'Jean Moulin préside le Conseil national de la Résistance (CNR) le 27 mai 1943.',
    imageObservation: 'Son sacrifice sous la torture sans jamais livrer un seul nom fit de Jean Moulin le symbole absolu de la Résistance.',
    sections: [
      {
        heading: 'Le préfet révoqué qui rejoint de Gaulle',
        body: 'Plus jeune préfet de France à Chartres en 1940, Jean Moulin résiste dès juin 1940 aux exigences des occupants allemands et tente de se donner la mort plutôt que de signer un document accusant à tort des tirailleurs sénégalais. Révoqué par Vichy, il rejoint Londres à l’automne 1941.'
      },
      {
        heading: 'Le Conseil national de la Résistance et Caluire (1943)',
        body: 'Parachuté en Provence en janvier 1942 avec la mission d’unifier les mouvements divisés, Jean Moulin (« Rex », « Max ») parvient à réunir pour la première fois mouvements de résistance, syndicats et partis politiques au sein du Conseil national de la Résistance (CNR) le 27 mai 1943 à Paris. Arrêté à Caluire près de Lyon le 21 juin 1943 par la Gestapo (Klaus Barbie), il meurt des suites de ses tortures sans avoir parlé.'
      }
    ],
    keyTakeaways: [
      'Jean Moulin fonde et préside le Conseil national de la Résistance (CNR) en mai 1943.',
      'Il relie la Résistance intérieure à la France libre du général de Gaulle.',
      'Arrêté en juin 1943 et mort en déportation, ses cendres entrent au Panthéon en 1964 (discours célèbre d’André Malraux).'
    ],
    keyDates: [
      { date: '27 mai 1943', label: 'Première réunion du Conseil national de la Résistance à Paris' },
      { date: '21 juin 1943', label: 'Arrestation de Jean Moulin à Caluire' },
      { date: '19 déc. 1964', label: 'Transfert des cendres de Jean Moulin au Panthéon' }
    ],
    exercise: {
      question: 'Quel organisme unifiant les mouvements de résistance, partis et syndicats Jean Moulin créa-t-il le 27 mai 1943 ?',
      options: [
        'Le Conseil d’État',
        'Le Conseil national de la Résistance (CNR)',
        'Le Parlement européen',
        'Le Front populaire'
      ],
      correctIndex: 1,
      explanation: 'Le CNR unifia toutes les forces résistantes et rédigea en mars 1944 un vaste programme de réformes sociales pour l’après-guerre.'
    }
  },
  {
    id: 'p268-liberation-gprf',
    page: 268,
    title: 'La Libération et le GPRF',
    eraId: '1914-nos-jours',
    kind: 'theme',
    dates: '1944 – 1946',
    subtitle: 'Le rétablissement de la légalité républicaine, le vote des femmes et la Sécurité sociale',
    image: IMG_PARIS,
    imageCaption: 'À la Libération, le Gouvernement provisoire présidé par de Gaulle reconstruit la démocratie.',
    imageObservation: 'Inspiré du programme du CNR, le GPRF crée la Sécurité sociale et consacre enfin le droit de vote des femmes.',
    sections: [
      {
        heading: 'Restaurer la République et la justice',
        body: 'Présidé par le général de Gaulle à partir de juin 1944, le Gouvernement provisoire de la République française (GPRF) rétablit les libertés démocratiques, annule tous les actes du régime de Vichy et organise l’épuration judiciaire (condamnations de Laval et de Pétain, dont la peine est commuée en prison à vie).'
      },
      {
        heading: 'Le vote des femmes et l’État-providence',
        body: 'Dès le 21 avril 1944, une ordonnance accorde enfin le droit de vote et d’éligibilité aux femmes (premier vote en avril 1945). En 1945-1946, le GPRF applique le programme du CNR : création de la Sécurité sociale (Pierre Laroque, Ambroise Croizat), des comités d’entreprise et nationalisations (Renault, Charbonnages, EDF-GDF, banques).'
      }
    ],
    keyTakeaways: [
      'Le GPRF rétablit la légalité républicaine entre 1944 et 1946.',
      'L’ordonnance du 21 avril 1944 institue le droit de vote et d’éligibilité des femmes.',
      'En 1945 est fondée la Sécurité sociale, garantissant maladie, famille et retraites.'
    ],
    keyDates: [
      { date: '21 avril 1944', label: 'Droit de vote accordé aux femmes françaises' },
      { date: 'Octobre 1945', label: 'Création de la Sécurité sociale' }
    ],
    exercise: {
      question: 'En quelle année les femmes françaises ont-elles obtenu le droit de vote (et voté pour la première fois l’année suivante) ?',
      options: ['1918', '1936', '1944', '1958'],
      correctIndex: 2,
      explanation: 'L’ordonnance du 21 avril 1944 signée à Alger par le général de Gaulle accorda le droit de vote et d’éligibilité aux femmes.'
    }
  },
  {
    id: 'p270-abbe-pierre',
    page: 270,
    title: "L'abbé Pierre",
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: '1912 – 2007',
    subtitle: 'L’appel de l’hiver 1954 contre la misère et la fondation des communautés Emmaüs',
    image: IMG_PARIS,
    imageCaption: 'L’appel radiophonique du 1er février 1954 déclencha un immense élan de solidarité face à la crise du logement.',
    imageObservation: 'Dans une France en reconstruction, des milliers de familles vivaient encore dans des bidonvilles et baraquements.',
    sections: [
      {
        heading: 'Le résistant et le fondateur d’Emmaüs',
        body: 'Henri Grouès, dit l’abbé Pierre, participe activement à la Résistance durant la guerre (sauvant des personnes pourchassées vers la Suisse), devient député à la Libération puis fonde dès 1949 les premiers chiffonniers d’Emmaüs pour loger les sans-abri par la solidarité et la récupération.'
      },
      {
        heading: 'L’insurrection de la bonté (1er février 1954)',
        body: 'Lors du terrible hiver glacial de janvier-février 1954, alors que des sans-abri meurent de froid dans les rues de Paris, l’abbé Pierre lance le 1er février 1954 un appel bouleversant à la radio : « Mes amis, au secours ! ». Les dons affluent par milliers, contraignant l’État à lancer d’urgence de grands programmes de logements sociaux (HLM).'
      }
    ],
    keyTakeaways: [
      'L’abbé Pierre fonde le mouvement Emmaüs pour aider les plus démunis à retrouver dignité et logement.',
      'Son appel du 1er février 1954 provoque une mobilisation nationale contre le mal-logement.',
      'Il contribue directement à l’accélération de la construction de logements sociaux en France.'
    ],
    keyDates: [
      { date: '1949', label: 'Naissance d’Emmaüs en région parisienne' },
      { date: '1er février 1954', label: 'Appel radiophonique historique contre le froid et la misère' }
    ],
    exercise: {
      question: 'Quel mouvement d’entraide et de solidarité envers les sans-abri fut fondé par l’abbé Pierre dès 1949 ?',
      options: ['Les Restos du Cœur', 'Emmaüs', 'Médecins sans frontières', 'Le Secours populaire'],
      correctIndex: 1,
      explanation: 'Le mouvement Emmaüs, appuyé par l’élan de l’hiver 1954, s’est depuis développé dans le monde entier.'
    }
  },
  {
    id: 'p272-ive-republique',
    page: 272,
    title: 'La IVe République',
    eraId: '1914-nos-jours',
    kind: 'theme',
    dates: '1946 – 1958',
    subtitle: 'Reconstruction économique et instabilité ministérielle face aux crises coloniales',
    image: IMG_PARIS,
    imageCaption: 'Sous la IVe République, la France se modernise rapidement malgré vingt-deux gouvernements en douze ans.',
    imageObservation: 'Un régime d’assemblée très parlementaire rendait les majorités fragiles durant la guerre froide et la décolonisation.',
    sections: [
      {
        heading: 'Des institutions dominées par l’Assemblée nationale',
        body: 'Après la démission de de Gaulle en janvier 1946 (qui voulait un exécutif fort), la Constitution de la IVe République est adoptée en octobre 1946. Le pouvoir appartient presque entièrement à l’Assemblée nationale élue à la proportionnelle. La guerre froide entraîne la fin du tripartisme (départ des ministres communistes en 1947).'
      },
      {
        heading: 'Modernisation réussie mais impuissance politique',
        body: 'Malgré une valse de gouvernements (22 présidents du Conseil entre 1947 et 1958), la IVe République lance la modernisation du pays (Plan Monnet, reconstruction, CECA, traité de Rome de 1957). Elle succombe finalement à l’enlisement de la guerre d’Algérie en mai 1958.'
      }
    ],
    keyTakeaways: [
      'La IVe République (1946-1958) est un régime parlementaire marqué par l’instabilité des gouvernements.',
      'Elle assure pourtant la reconstruction rapide du pays et engage la construction européenne.',
      'La crise algérienne de mai 1958 entraîne sa chute et le retour du général de Gaulle.'
    ],
    keyDates: [
      { date: 'Octobre 1946', label: 'Adoption de la Constitution de la IVe République' },
      { date: 'Mai 1958', label: 'Crise politique à Alger et fin de la IVe République' }
    ],
    exercise: {
      question: 'Quelle crise majeure précipita la chute de la IVe République et le rappel de Charles de Gaulle en mai 1958 ?',
      options: [
        'La guerre d’Indochine',
        'La crise liée à la guerre d’Algérie',
        'Le premier choc pétrolier',
        'La crise de 1929'
      ],
      correctIndex: 1,
      explanation: 'Le soulèvement du 13 mai 1958 à Alger et la crainte d’un coup de force militaire précipitèrent l’effondrement de la IVe République.'
    }
  },
  {
    id: 'p274-monnet-schuman',
    page: 274,
    title: 'Jean Monnet et Robert Schuman',
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: '1950 – 1957',
    subtitle: 'Les pères fondateurs de la construction européenne et de la réconciliation franco-allemande',
    image: IMG_PARIS,
    imageCaption: 'À partir de 1950, l’Europe s’unit économiquement pour rendre la guerre impossible.',
    imageObservation: 'La déclaration du 9 mai 1950 de Robert Schuman est aujourd’hui célébrée comme la Journée de l’Europe.',
    sections: [
      {
        heading: 'La déclaration Schuman du 9 mai 1950 et la CECA',
        body: 'Pour empêcher tout nouveau conflit entre la France et l’Allemagne, le haut fonctionnaire Jean Monnet conçoit le projet de mettre en commun le charbon et l’acier — matériaux indispensables à l’armement. Le 9 mai 1950, le ministre des Affaires étrangères Robert Schuman présente ce plan historique, créant en 1951 la CECA entre six pays.'
      },
      {
        heading: 'Le traité de Rome (25 mars 1957)',
        body: 'Prolongeant ce premier succès, la France, la RFA, l’Italie, la Belgique, les Pays-Bas et le Luxembourg signent le 25 mars 1957 le traité de Rome, instituant la Communauté économique européenne (CEE, « Marché commun ») et Euratom.'
      }
    ],
    keyTakeaways: [
      'Jean Monnet et Robert Schuman jettent les bases de l’unification européenne le 9 mai 1950.',
      'En 1951 naît la CECA (charbon et acier) ; en 1957, le traité de Rome fonde la CEE à six.',
      'La construction européenne repose sur la paix durable et la solidarité économique.'
    ],
    keyDates: [
      { date: '9 mai 1950', label: 'Déclaration Schuman proposant la mise en commun du charbon et de l’acier' },
      { date: '25 mars 1957', label: 'Signature du traité de Rome créant la CEE' }
    ],
    quote: {
      text: 'L’Europe ne se fera pas d’un coup, ni dans une construction d’ensemble : elle se fera par des réalisations concrètes.',
      author: 'Robert Schuman, 9 mai 1950'
    },
    exercise: {
      question: 'Quelles deux ressources stratégiques furent mises en commun en 1951 pour fonder la première communauté européenne (CECA) ?',
      options: [
        'Le pétrole et le gaz',
        'Le charbon et l’acier',
        'Le blé et le vin',
        'L’or et le diamant'
      ],
      correctIndex: 1,
      explanation: 'En plaçant le charbon et l’acier sous une Haute Autorité commune, la France et l’Allemagne rendaient matériellement impossible toute préparation secrète de guerre.'
    }
  },
  {
    id: 'p276-maurice-thorez',
    page: 276,
    title: 'Maurice Thorez',
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: '1900 – 1964',
    subtitle: 'Le dirigeant historique du Parti communiste français au cœur du XXe siècle',
    image: IMG_REPUBLIQUE,
    imageCaption: 'Sous la IVe République, le PCF devient le premier parti électoral de France au sortir de la Résistance.',
    imageObservation: 'Fort de son engagement dans la Résistance et le monde ouvrier, le parti communiste joua un rôle politique majeur jusqu’aux années 1970.',
    sections: [
      {
        heading: 'Du mineur du Pas-de-Calais au Front populaire',
        body: 'Ancien mineur du Pas-de-Calais devenu secrétaire général du Parti communiste français (PCF) en 1930, Maurice Thorez impulse en 1934-1936 l’alliance antifasciste qui permet la victoire du Front populaire, tout en restant fidèle aux directives de Moscou.'
      },
      {
        heading: 'Ministre d’État à la Libération puis opposant de guerre froide',
        body: 'Rentré d’URSS fin 1944, il siège au gouvernement du général de Gaulle et de la IVe République jusqu’en mai 1947 (statut général de la fonction publique). Évincé au début de la guerre froide, il dirige le « parti des 75 000 fusillés » qui recueille alors près d’un quart des suffrages jusqu’à sa mort en 1964.'
      }
    ],
    keyTakeaways: [
      'Maurice Thorez dirige le Parti communiste français pendant plus de trente ans (1930-1964).',
      'Ministre de 1945 à 1947, il fait adopter le statut protecteur des fonctionnaires.',
      'Le PCF pèse lourdement dans la vie sociale et politique française durant la guerre froide.'
    ],
    keyDates: [
      { date: '1930 – 1964', label: 'Direction du Parti communiste français par Maurice Thorez' },
      { date: 'Mai 1947', label: 'Départ des ministres communistes du gouvernement Ramadier' }
    ],
    exercise: {
      question: 'En quelle année les ministres communistes quittèrent-ils le gouvernement français au début de la guerre froide ?',
      options: ['1936', '1945', '1947', '1968'],
      correctIndex: 2,
      explanation: 'En mai 1947, sur fond de grèves chez Renault et de tensions Est-Ouest, le président du Conseil Paul Ramadier révoqua les ministres communistes.'
    }
  },
  {
    id: 'p278-trente-glorieuses',
    page: 278,
    title: 'Les Trente Glorieuses',
    eraId: '1914-nos-jours',
    kind: 'theme',
    dates: '1945 – 1975',
    subtitle: 'Trois décennies de forte croissance, de plein emploi et de société de consommation',
    image: IMG_PARIS,
    imageCaption: 'Urbanisation rapide, électroménager, automobile populaire et grands travaux transforment la France.',
    imageObservation: 'L’expression « Trente Glorieuses » fut créée par l’économiste Jean Fourastié en 1979.',
    sections: [
      {
        heading: 'Le baby-boom et la croissance exceptionnelle',
        body: 'Aidé au départ par le plan Marshall américain, le pays connaît entre 1945 et 1973 une croissance annuelle moyenne proche de 5 % et le plein emploi. La natalité repart fortement (le « baby-boom ») tandis que l’agriculture se mécanise rapidement et que la population devient majoritairement urbaine et salariée.'
      },
      {
        heading: 'L’entrée dans la société de consommation',
        body: 'Le pouvoir d’achat triple en trente ans : les foyers s’équipent de réfrigérateurs, de machines à laver, de téléviseurs et de voitures populaires (2 CV, 4 CV, DS). Les premiers hypermarchés ouvrent (Carrefour en 1963) et les congés payés passent à quatre semaines en 1969.'
      }
    ],
    keyTakeaways: [
      'De 1945 à 1973, la France connaît le plein emploi, une forte croissance et le baby-boom.',
      'Le niveau de vie progresse spectaculairement avec l’équipement des ménages et les loisirs.',
      'Cette période s’achève avec le premier choc pétrolier de 1973.'
    ],
    keyDates: [
      { date: '1947', label: 'Lancement du plan Marshall et début du baby-boom' },
      { date: '1963', label: 'Ouverture du premier hypermarché en France à Sainte-Geneviève-des-Bois' }
    ],
    exercise: {
      question: 'Quel économiste français a inventé l’expression « les Trente Glorieuses » pour désigner la période 1945-1975 ?',
      options: ['Jean Monnet', 'Jean Fourastié', 'John Maynard Keynes', 'Thomas Piketty'],
      correctIndex: 1,
      explanation: 'En 1979, Jean Fourastié publia Les Trente Glorieuses ou la Révolution invisible de 1946 à 1975.'
    }
  },
  {
    id: 'p280-pierre-mendes-france',
    page: 280,
    title: 'Pierre Mendès France',
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: '1907 – 1982',
    subtitle: 'La fin de la guerre d’Indochine en 1954 et l’exigence de rigueur morale',
    image: IMG_PARIS,
    imageCaption: '« Gouverner, c’est choisir » : sept mois d’action décisive entre 1954 et 1955.',
    imageObservation: 'Son style direct à la radio (« causeries du samedi soir ») lui valut un immense respect moral.',
    sections: [
      {
        heading: 'Les accords de Genève (juillet 1954)',
        body: 'Résistant et ancien ministre de de Gaulle, le radical Pierre Mendès France devient président du Conseil en juin 1954 juste après la défaite de Diên Biên Phu. Il se fixe un délai d’un mois pour conclure la paix en Indochine : le 20 juillet 1954, les accords de Genève mettent fin à huit ans de guerre.'
      },
      {
        heading: 'La Tunisie et la rigueur économique',
        body: 'Dans la foulée, il prononce le discours de Carthage promettant l’autonomie interne à la Tunisie (qui conduit à l’indépendance en 1956), lance des réformes contre l’alcoolisme et pour la recherche scientifique avant d’être renversé dès février 1955 par une coalition parlementaire.'
      }
    ],
    keyTakeaways: [
      'En juillet 1954, Pierre Mendès France met fin à la guerre d’Indochine par les accords de Genève.',
      'Il engage l’autonomie interne de la Tunisie par le discours de Carthage.',
      'Il reste une référence d’honnêteté intellectuelle et de modernité politique.'
    ],
    keyDates: [
      { date: '20 juillet 1954', label: 'Accords de Genève mettant fin à la guerre d’Indochine' }
    ],
    exercise: {
      question: 'À quel conflit colonial Pierre Mendès France mit-il fin en un mois lors des accords de Genève de juillet 1954 ?',
      options: ['La guerre d’Algérie', 'La guerre d’Indochine', 'La guerre de Suez', 'La guerre de Corée'],
      correctIndex: 1,
      explanation: 'Appelé au pouvoir après la chute de Diên Biên Phu en mai 1954, Mendès France négocia la paix en Indochine le 20 juillet.'
    }
  },
  {
    id: 'p282-decolonisation',
    page: 282,
    title: "La Décolonisation : de la Guerre d'Indochine à la Guerre d'Algérie",
    eraId: '1914-nos-jours',
    kind: 'theme',
    dates: '1945 – 1962',
    subtitle: 'La fin de l’empire colonial français, entre négociations et guerres douloureuses',
    image: IMG_PARIS,
    imageCaption: 'Entre 1954 et 1962, les anciennes colonies françaises accèdent à l’indépendance.',
    imageObservation: 'Si la décolonisation de l’Afrique noire se fit pacifiquement en 1960, celles d’Indochine et d’Algérie furent très meurtrières.',
    sections: [
      {
        heading: 'L’Indochine (1946-1954) et les indépendances pacifiques (1956-1960)',
        body: 'Affaiblie par la Seconde Guerre mondiale face à la montée des nationalismes coloniaux, la France affronte le Viêt-minh d’Hô Chi Minh en Indochine de 1946 à 1954 (Diên Biên Phu). Le Maroc et la Tunisie deviennent indépendants en 1956, puis quatorze colonies d’Afrique subsaharienne accèdent pacifiquement à l’indépendance en 1960.'
      },
      {
        heading: 'La guerre d’Algérie (1954 – 1962)',
        body: 'En Algérie, alors divisée en départements français où vivait un million d’Européens (les « pieds-noirs »), le FLN déclenche l’insurrection le 1er novembre 1954. Le conflit mobilise le contingent des appelés, connaît le terrorisme, la torture et les divisions en France (putsch d’Alger de 1961, attentats de l’OAS), avant d’aboutir aux accords d’Évian (18 mars 1962) et à l’indépendance de l’Algérie.'
      }
    ],
    keyTakeaways: [
      'La guerre d’Indochine s’achève en 1954 après Diên Biên Phu.',
      'En 1960, la quasi-totalité de l’Afrique francophone accède pacifiquement à l’indépendance.',
      'La guerre d’Algérie (1954-1962) s’achève par les accords d’Évian signés sous Charles de Gaulle.'
    ],
    keyDates: [
      { date: '1er nov. 1954', label: 'Début de la guerre d’Algérie' },
      { date: '1960', label: 'Indépendance de la majorité des États d’Afrique francophone' },
      { date: '18 mars 1962', label: 'Signature des accords d’Évian ; indépendance de l’Algérie en juillet 1962' }
    ],
    exercise: {
      question: 'Quels accords signés le 18 mars 1962 ouvrent la voie au cessez-le-feu et à l’indépendance de l’Algérie ?',
      options: ['Les accords de Genève', 'Les accords d’Évian', 'Les accords de Matignon', 'Le traité de Rome'],
      correctIndex: 1,
      explanation: 'Négociés entre le gouvernement français et le GPRA, les accords d’Évian furent approuvés par référendum en France et en Algérie.'
    }
  },
  {
    id: 'p284-senghor-cesaire',
    page: 284,
    title: 'Léopold Sédar Senghor et Aimé Césaire',
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: 'XXe siècle',
    subtitle: 'Les poètes de la « négritude », la francophonie et la dignité des peuples',
    image: IMG_PARIS,
    imageCaption: 'Deux grandes voix littéraires et politiques du monde francophone au XXe siècle.',
    imageObservation: 'Tous deux transformèrent la langue française en un outil d’émancipation, de poésie et de dialogue universel.',
    sections: [
      {
        heading: 'L’invention de la « négritude » à Paris (années 1930)',
        body: 'Étudiants à Paris au début des années 1930, le Sénégalais Léopold Sédar Senghor et le Martiniquais Aimé Césaire (avec Léon-Gontran Damas) fondent le mouvement littéraire de la négritude, affirmant fièrement la valeur des cultures africaines et caribéennes face aux préjugés coloniaux.'
      },
      {
        heading: 'Poètes, hommes d’État et bâtisseurs de la francophonie',
        body: 'Aimé Césaire, auteur du Cahier d’un retour au pays natal, devient député-maire de Fort-de-France et porte la loi de départementalisation de 1946 (Guadeloupe, Martinique, Guyane, La Réunion). Léopold Sédar Senghor devient le premier président du Sénégal indépendant (1960), cofonde la Francophonie et est élu à l’Académie française en 1983.'
      }
    ],
    keyTakeaways: [
      'Léopold Sédar Senghor et Aimé Césaire sont les grands théoriciens et poètes de la négritude.',
      'Aimé Césaire obtient en 1946 le statut de départements français pour les « quatre vieilles colonies ».',
      'Senghor préside le Sénégal indépendant (1960-1980) et siège à l’Académie française.'
    ],
    keyDates: [
      { date: '1939', label: 'Cahier d’un retour au pays natal d’Aimé Césaire' },
      { date: '1946', label: 'Loi de départementalisation des DOM (Martinique, Guadeloupe, Guyane, La Réunion)' },
      { date: '1960', label: 'Léopold Sédar Senghor premier président du Sénégal' }
    ],
    exercise: {
      question: 'De quel pays devenu indépendant en 1960 le poète et académicien Léopold Sédar Senghor fut-il le premier président ?',
      options: ['La Côte d’Ivoire', 'Le Sénégal', 'Le Mali', 'Le Cameroun'],
      correctIndex: 1,
      explanation: 'Poète et agrégé de grammaire, Léopold Sédar Senghor présida le Sénégal pendant vingt ans (1960-1980).'
    }
  },
  {
    id: 'p286-albert-camus',
    page: 286,
    title: 'Albert Camus',
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: '1913 – 1960',
    subtitle: 'L’écrivain de l’absurde, le journaliste résistant de Combat et le prix Nobel 1957',
    image: IMG_PARIS,
    imageCaption: 'Albert Camus incarna l’exigence morale, la liberté individuelle et l’amour de la vérité.',
    imageObservation: 'Son discours de Stockholm (1957) rendit un vibrant hommage à son instituteur d’Alger, Louis Germain.',
    sections: [
      {
        heading: 'De l’enfance algéroise à la Résistance',
        body: 'Né à Mondovi (Algérie) dans une famille ouvrière très modeste et encouragé par son instituteur Louis Germain, Albert Camus se révèle en 1942 avec L’Étranger et Le Mythe de Sisyphe. Pendant l’Occupation, il dirige le journal clandestin Combat, appelant à une morale politique intransigeante.'
      },
      {
        heading: 'L’homme révolté et le prix Nobel de littérature (1957)',
        body: 'Avec La Peste (1947) et L’Homme révolté (1951), Camus dénonce tous les totalitarismes au nom de la solidarité humaine. Déchiré par la guerre d’Algérie (où il appelle en vain à une trêve civile), il reçoit le prix Nobel de littérature en 1957 avant de mourir dans un accident de voiture en 1960.'
      }
    ],
    keyTakeaways: [
      'Albert Camus explore les thèmes de l’absurde (L’Étranger) puis de la révolte et de la fraternité (La Peste).',
      'Il dirige le journal résistant Combat à la Libération.',
      'Il reçoit le prix Nobel de littérature en 1957 à seulement 44 ans.'
    ],
    keyDates: [
      { date: '1942', label: 'Publication de L’Étranger' },
      { date: '1957', label: 'Prix Nobel de littérature décerné à Albert Camus' }
    ],
    quote: {
      text: 'Au milieu de l’hiver, j’apprenais enfin qu’il y avait en moi un été invincible.',
      author: 'Albert Camus, Retour à Tipasa (1954)'
    },
    exercise: {
      question: 'À qui Albert Camus dédia-t-il son discours lors de la remise du prix Nobel de littérature en 1957 ?',
      options: [
        'Au président de la République',
        'À son ancien instituteur d’école primaire, Louis Germain',
        'À son éditeur',
        'À Napoléon Bonaparte'
      ],
      correctIndex: 1,
      explanation: 'Camus écrivit à son maître : « Sans vous, sans cette main affectueuse que vous avez tendue au petit enfant pauvre que j’étais, rien de tout cela ne serait arrivé. »'
    }
  },
  {
    id: 'p288-naissance-ve-republique',
    page: 288,
    title: 'La naissance de la Ve République',
    eraId: '1914-nos-jours',
    kind: 'theme',
    dates: '4 octobre 1958 – 1962',
    subtitle: 'Une Constitution garantissant la stabilité de l’État et la légitimité présidentielle',
    image: IMG_PARIS,
    imageCaption: 'La Constitution de 1958, toujours en vigueur, rééquilibre les pouvoirs au profit du président.',
    imageObservation: 'Depuis la réforme de 1962, le président de la République est élu au suffrage universel direct.',
    sections: [
      {
        heading: 'La Constitution du 4 octobre 1958',
        body: 'Rappelé au pouvoir en mai 1958 pour résoudre la crise algérienne et réformer les institutions, le général de Gaulle confie à Michel Debré la rédaction d’une nouvelle Constitution. Massivement approuvée par référendum (82,6 % de oui), elle est promulguée le 4 octobre 1958.'
      },
      {
        heading: 'Un exécutif fort et la réforme de 1962',
        body: 'Le président de la République devient la clé de voûte des institutions : il nomme le Premier ministre, peut dissoudre l’Assemblée nationale et recourir au référendum. En octobre 1962, après l’attentat du Petit-Clamart, de Gaulle fait adopter par référendum l’élection du président au suffrage universel direct.'
      }
    ],
    keyTakeaways: [
      'La Constitution du 4 octobre 1958 fonde la Cinquième République, mettant fin à l’instabilité ministérielle.',
      'Elle crée le Conseil constitutionnel chargé de veiller à la conformité des lois.',
      'Depuis 1962, le président de la République est élu directement par tous les citoyens.'
    ],
    keyDates: [
      { date: '4 octobre 1958', label: 'Promulgation de la Constitution de la Ve République' },
      { date: '28 oct. 1962', label: 'Référendum instituant l’élection du président au suffrage universel direct' }
    ],
    exercise: {
      question: 'Depuis quelle réforme constitutionnelle le président de la République est-il élu au suffrage universel direct en France ?',
      options: ['La réforme de 1946', 'Le référendum de 1958', 'Le référendum d’octobre 1962', 'La réforme de 1981'],
      correctIndex: 2,
      explanation: 'En 1958, de Gaulle avait été élu par un collège de 80 000 grands électeurs ; la réforme de 1962 donna directement ce choix à tous les citoyens.'
    }
  },
  {
    id: 'p290-de-gaulle-2',
    page: 290,
    title: 'Charles de Gaulle (2)',
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: '1958 – 1970',
    subtitle: 'Premier président de la Ve République, indépendance nationale et réconciliation avec l’Allemagne',
    image: IMG_PARIS,
    imageCaption: 'Sous la présidence du général de Gaulle, la France retrouve une voix singulière dans le monde.',
    imageObservation: 'Le traité de l’Élysée (1963) scella l’amitié franco-allemande entre Charles de Gaulle et Konrad Adenauer.',
    sections: [
      {
        heading: 'La politique de grandeur et d’indépendance',
        body: 'De 1959 à 1969, le général de Gaulle dote la France de l’arme nucléaire (force de dissuasion, 1960), quitte le commandement militaire intégré de l’OTAN (1966) tout en restant allié des Occidentaux, reconnaît la Chine populaire (1964) et condamne la guerre du Vietnam (discours de Phnom Penh).'
      },
      {
        heading: 'La réconciliation franco-allemande et le départ de 1969',
        body: 'En janvier 1963, Charles de Gaulle et le chancelier allemand Konrad Adenauer signent le traité de l’Élysée, scellant une réconciliation historique. Réélu au suffrage universel en 1965 face à François Mitterrand, il surmonte la crise de Mai 68 mais démissionne en avril 1969 après l’échec de son référendum sur les régions et le Sénat.'
      }
    ],
    keyTakeaways: [
      'De Gaulle impose une politique d’indépendance nationale (dissuasion nucléaire, sortie du commandement de l’OTAN).',
      'Il signe avec Konrad Adenauer le traité de l’Élysée (1963) fondant le couple franco-allemand.',
      'Fidèle à la légitimité populaire, il quitte le pouvoir en avril 1969 après le « non » à son référendum.'
    ],
    keyDates: [
      { date: '22 janvier 1963', label: 'Traité de l’Élysée de réconciliation franco-allemande' },
      { date: '28 avril 1969', label: 'Démission du général de Gaulle' }
    ],
    exercise: {
      question: 'Avec quel chancelier allemand Charles de Gaulle signa-t-il le traité d’amitié de l’Élysée en janvier 1963 ?',
      options: ['Willy Brandt', 'Konrad Adenauer', 'Helmut Kohl', 'Angela Merkel'],
      correctIndex: 1,
      explanation: 'Le traité de l’Élysée du 22 janvier 1963 entre de Gaulle et Adenauer créa notamment l’Office franco-allemand pour la jeunesse.'
    }
  },
  {
    id: 'p292-beauvoir-sartre',
    page: 292,
    title: 'Simone de Beauvoir et Jean-Paul Sartre',
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: '1945 – 1986',
    subtitle: 'L’existentialisme, Le Deuxième Sexe et la figure de l’intellectuel engagé',
    image: IMG_PARIS,
    imageCaption: 'À Saint-Germain-des-Prés après 1945, Sartre et Beauvoir influencent la philosophie et les débats de société.',
    imageObservation: 'Le Deuxième Sexe (1949) posa les bases théoriques des mouvements féministes contemporains.',
    sections: [
      {
        heading: 'Jean-Paul Sartre et l’existentialisme',
        body: 'Philosophe, dramaturge et romancier (La Nausée, Huis clos), Jean-Paul Sartre popularise l’existentialisme : l’être humain est « condamné à être libre » et se définit par ses choix et ses actes. Il fonde la revue Les Temps modernes, prend position sur la décolonisation et refuse le prix Nobel de littérature en 1964 par souci d’indépendance.'
      },
      {
        heading: 'Simone de Beauvoir et Le Deuxième Sexe (1949)',
        body: 'Agrégée de philosophie et écrivaine (Mémoires d’une jeune fille rangée), Simone de Beauvoir publie en 1949 Le Deuxième Sexe, analyse majeure de la condition féminine (« On ne naît pas femme : on le devient »). Elle s’engage activement dans les combats féministes des années 1970 pour la contraception et l’avortement.'
      }
    ],
    keyTakeaways: [
      'Sartre et Beauvoir dominent la vie intellectuelle française de l’après-guerre autour de Saint-Germain-des-Prés.',
      'Le Deuxième Sexe (1949) de Simone de Beauvoir est un ouvrage fondateur du féminisme moderne.',
      'Jean-Paul Sartre incarne le modèle de l’intellectuel engagé dans les luttes de son temps.'
    ],
    keyDates: [
      { date: '1949', label: 'Publication du Deuxième Sexe de Simone de Beauvoir' },
      { date: '1964', label: 'Jean-Paul Sartre refuse le prix Nobel de littérature' }
    ],
    quote: {
      text: 'On ne naît pas femme : on le devient.',
      author: 'Simone de Beauvoir, Le Deuxième Sexe (1949)'
    },
    exercise: {
      question: 'Quel célèbre essai de Simone de Beauvoir paru en 1949 a profondément marqué l’histoire des droits des femmes ?',
      options: ['Le Mythe de Sisyphe', 'Le Deuxième Sexe', 'Les Mots', 'La Condition humaine'],
      correctIndex: 1,
      explanation: 'Le Deuxième Sexe analysa les mécanismes culturels et sociaux expliquant l’inégalité entre femmes et hommes.'
    }
  },
  {
    id: 'p294-andre-malraux',
    page: 294,
    title: 'André Malraux',
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: '1901 – 1976',
    subtitle: 'L’écrivain aventurier devenu le premier ministre des Affaires culturelles',
    image: IMG_PARIS,
    imageCaption: 'Sous l’impulsion d’André Malraux, la France invente une politique publique d’accès à la culture.',
    imageObservation: 'Nettoyage des monuments historiques de Paris, Maisons de la culture et protection du patrimoine datent de son ministère.',
    sections: [
      {
        heading: 'De La Condition humaine à la brigade Alsace-Lorraine',
        body: 'Écrivain engagé dès les années 1930 contre le fascisme (La Condition humaine, prix Goncourt 1933 ; L’Espoir sur la guerre d’Espagne), André Malraux combat durant la Seconde Guerre mondiale dans la Résistance et à la tête de la brigade Alsace-Lorraine.'
      },
      {
        heading: 'Le créateur du ministère des Affaires culturelles (1959 – 1969)',
        body: 'Appelé par Charles de Gaulle en 1959, Malraux devient le premier ministre chargé des Affaires culturelles. Il veut rendre les grandes œuvres accessibles à tous : il crée les Maisons de la culture en province, lance la loi de sauvegarde des centres historiques et fait nettoyer les façades noircies de Paris. Orateur bouleversant, il prononce l’hommage à Jean Moulin en 1964.'
      }
    ],
    keyTakeaways: [
      'André Malraux est un grand romancier engagé (La Condition humaine, 1933) et un chef résistant.',
      'En 1959, il crée le premier ministère de la Culture au monde et les Maisons de la culture.',
      'Il repose au Panthéon depuis 1996.'
    ],
    keyDates: [
      { date: '1933', label: 'Prix Goncourt pour La Condition humaine' },
      { date: '1959', label: 'Création du ministère des Affaires culturelles confié à Malraux' }
    ],
    exercise: {
      question: 'Quel nouveau ministère inédit fut confié à André Malraux par le général de Gaulle en 1959 ?',
      options: [
        'Le ministère de la Marine',
        'Le ministère des Affaires culturelles',
        'Le ministère des Colonies',
        'Le ministère des Transports'
      ],
      correctIndex: 1,
      explanation: 'Malraux fit de la démocratisation culturelle et de la préservation du patrimoine une mission majeure de l’État.'
    }
  },
  {
    id: 'p296-evolution-moeurs',
    page: 296,
    title: "L'évolution des mœurs depuis 1945",
    eraId: '1914-nos-jours',
    kind: 'theme',
    dates: '1945 – Aujourd’hui',
    subtitle: 'Émancipation des femmes, nouvelle place de la jeunesse et transformation de la famille',
    image: IMG_PARIS,
    imageCaption: 'Depuis 1945, la société française connaît une profonde évolution des modes de vie et des droits familiaux.',
    imageObservation: 'L’accès massif des femmes au travail salarié et aux études supérieures transforma l’équilibre familial.',
    sections: [
      {
        heading: 'L’égalité progressive entre femmes et hommes',
        body: 'Après l’obtention du droit de vote (1944), les femmes conquièrent leur autonomie juridique et corporelle : en 1965, elles peuvent travailler et ouvrir un compte bancaire sans l’autorisation du mari ; en 1967, la loi Neuwirth autorise la contraception ; en 1970, l’autorité parentale remplace la « puissance paternelle ».'
      },
      {
        heading: 'Jeunesse, loisirs et nouvelles formes familiales',
        body: 'La scolarité obligatoire est portée à 16 ans en 1959 et les lycées et universités s’ouvrent largement. La culture « jeune » (rock, pop, radio) s’affirme dans les années 1960. Plus tard, le PACS (1999) puis le mariage pour tous (2013) reconnaissent la diversité des familles.'
      }
    ],
    keyTakeaways: [
      'À partir des années 1960, les femmes acquièrent l’égalité juridique (1965) et la maîtrise de la contraception (1967).',
      'La démocratisation scolaire prolonge les études et fait émerger la jeunesse comme groupe social autonome.',
      'Le droit de la famille évolue profondément : divorce par consentement mutuel (1975), PACS (1999), mariage pour tous (2013).'
    ],
    keyDates: [
      { date: '1965', label: 'Réforme des régimes matrimoniaux : autonomie financière des femmes mariées' },
      { date: '1967', label: 'Loi Neuwirth légalisant la contraception' },
      { date: '1999', label: 'Création du Pacte civil de solidarité (PACS)' }
    ],
    exercise: {
      question: 'Que permettait enfin la réforme juridique de juillet 1965 aux femmes mariées en France ?',
      options: [
        'Voter aux municipales',
        'Travailler et ouvrir un compte en banque sans l’accord de leur mari',
        'Conduire une automobile',
        'Entrer à l’école primaire'
      ],
      correctIndex: 1,
      explanation: 'Jusqu’en 1965, une femme mariée devait obtenir l’autorisation maritale pour exercer une profession ou gérer ses biens propres.'
    }
  },
  {
    id: 'p298-mai-68',
    page: 298,
    title: 'Mai 68',
    eraId: '1914-nos-jours',
    kind: 'theme',
    dates: 'Mai – Juin 1968',
    subtitle: 'La révolte étudiante et la plus grande grève ouvrière de l’histoire de France',
    image: IMG_PARIS,
    imageCaption: 'En mai 1968, le Quartier latin et les usines de France sont paralysés par une contestation inédite.',
    imageObservation: 'Si les élections de juin donnent une large victoire à de Gaulle, les mœurs et le monde du travail sont durablement transformés.',
    sections: [
      {
        heading: 'Des universités aux barricades du Quartier latin',
        body: 'Née à l’université de Nanterre en mars 1968 face à l’engorgement des facultés et au poids de l’autorité traditionnelle, l’agitation gagne la Sorbonne début mai. Les affrontements entre étudiants et police dans la nuit du 10 mai (« nuit des barricades ») suscitent une vague de solidarité dans tout le pays.'
      },
      {
        heading: 'La grève générale et les accords de Grenelle',
        body: 'À partir du 13 mai, près de neuf millions de salariés entrent en grève, paralysant la France. Le gouvernement de Georges Pompidou négocie les accords de Grenelle (hausse de 35 % du SMIG et reconnaissance de la section syndicale d’entreprise). Après la dissolution décidée par de Gaulle, les gaullistes remportent largement les élections législatives de juin 1968.'
      }
    ],
    keyTakeaways: [
      'Mai 68 réunit une contestation étudiante antiautoritaire et la plus vaste grève ouvrière du XXe siècle.',
      'Les accords de Grenelle revalorisent fortement les bas salaires et renforcent les droits syndicaux.',
      'Mai 68 accélère la libération des mœurs et l’autonomie des universités (loi Edgar Faure).'
    ],
    keyDates: [
      { date: '10 mai 1968', label: 'Nuit des barricades au Quartier latin' },
      { date: '27 mai 1968', label: 'Accords de Grenelle entre gouvernement, patronat et syndicats' }
    ],
    exercise: {
      question: 'Comment s’appellent les accords négociés fin mai 1968 qui augmentèrent fortement le salaire minimum (SMIG) et créèrent la section syndicale en entreprise ?',
      options: ['Accords de Matignon', 'Accords de Grenelle', 'Accords d’Évian', 'Accords de Genève'],
      correctIndex: 1,
      explanation: 'Négociés au ministère du Travail rue de Grenelle par Georges Pompidou, ces accords permirent une sortie progressive de la grève générale.'
    }
  },
  {
    id: 'p300-georges-pompidou',
    page: 300,
    title: 'Georges Pompidou',
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: '1911 – 1974',
    subtitle: 'Le Premier ministre de Mai 68 devenu le président de la modernisation industrielle',
    image: IMG_PARIS,
    imageCaption: 'Georges Pompidou impulse les grands projets modernes : Centre Beaubourg, Airbus, TGV et nucléaire.',
    imageObservation: 'Son quinquennat présidentiel interrompu par la maladie marque l’apogée de la modernisation industrielle des Trente Glorieuses.',
    sections: [
      {
        heading: 'Du Premier ministre au président de la République (1969)',
        body: 'Normalien agrégé de lettres, originaire du Cantal, Georges Pompidou est Premier ministre de Charles de Gaulle de 1962 à 1968. Élu président de la République en juin 1969 après le départ du Général, il incarne la continuité gaulliste ouverte aux réalités économiques modernes.'
      },
      {
        heading: 'L’ardeur industrielle et le Centre Pompidou',
        body: 'Convaincu que la France doit devenir une grande nation industrielle, il soutient les programmes aéronautiques (Concorde, Airbus), lance le programme électronucléaire (plan Messmer de 1974) et les prémices du TGV. Passionné d’art contemporain, il décide la création au cœur de Paris du centre Beaubourg (Centre Georges-Pompidou). Il meurt en fonction en avril 1974.'
      }
    ],
    keyTakeaways: [
      'Georges Pompidou est Premier ministre (1962-1968) puis président de la République (1969-1974).',
      'Il accélère la modernisation industrielle (Airbus, programme nucléaire, autoroutes, future ligne TGV).',
      'Il crée le Centre national d’art et de culture Beaubourg qui porte aujourd’hui son nom.'
    ],
    keyDates: [
      { date: '1969', label: 'Élection de Georges Pompidou à la présidence de la République' },
      { date: '1973', label: 'Élargissement européen (Royaume-Uni, Irlande, Danemark)' }
    ],
    exercise: {
      question: 'Quel grand musée et centre d’art moderne parisien inauguré en 1977 porte le nom du président qui l’a initié ?',
      options: ['Le musée d’Orsay', 'Le Centre Georges-Pompidou (Beaubourg)', 'Le musée du quai Branly', 'Le Louvre'],
      correctIndex: 1,
      explanation: 'Voulu par Georges Pompidou dès 1969 et conçu par Renzo Piano et Richard Rogers, le Centre Pompidou ouvrit en 1977.'
    }
  },
  {
    id: 'p302-giscard-estaing',
    page: 302,
    title: "Valéry Giscard d'Estaing",
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: '1926 – 2020',
    subtitle: 'La majorité à 18 ans, les réformes de société et l’élan européen des années 1970',
    image: IMG_PARIS,
    imageCaption: 'Élu à 48 ans en 1974, Valéry Giscard d’Estaing modernise la société française face à la crise.',
    imageObservation: 'Son septennat vit abaisser la majorité à 18 ans, voter l’IVG et instaurer l’élection du Parlement européen au suffrage universel.',
    sections: [
      {
        heading: '« Une ère nouvelle » et les grandes réformes de société',
        body: 'Élu président de la République en mai 1974 face à François Mitterrand, Valéry Giscard d’Estaing nomme Jacques Chirac puis Raymond Barre à Matignon. Dès 1974-1975, il fait voter la majorité civile et électorale à 18 ans (au lieu de 21 ans), le divorce par consentement mutuel et la loi Veil sur l’IVG, tout en ouvrant le Conseil constitutionnel à l’opposition.'
      },
      {
        heading: 'La relance européenne et le début de la crise',
        body: 'En étroite entente avec le chancelier allemand Helmut Schmidt, il crée le Conseil européen, le Système monétaire européen (SME) et l’élection du Parlement européen au suffrage universel (1979). Confronté à la montée du chômage après les chocs pétroliers, il est battu en mai 1981.'
      }
    ],
    keyTakeaways: [
      'Valéry Giscard d’Estaing préside la France de 1974 à 1981.',
      'Il abaisse la majorité à 18 ans (1974) et fait adopter de grandes réformes de société (divorce, IVG, collège unique Haby).',
      'Il renforce la construction européenne avec la création du Conseil européen et du Parlement élu (1979).'
    ],
    keyDates: [
      { date: '1974', label: 'Élection présidentielle et abaissement de la majorité à 18 ans' },
      { date: '1979', label: 'Première élection du Parlement européen au suffrage universel' }
    ],
    exercise: {
      question: 'À quel âge la majorité civile et électorale a-t-elle été abaissée en France en juillet 1974 sous Valéry Giscard d’Estaing ?',
      options: ['16 ans', '18 ans', '20 ans', '21 ans'],
      correctIndex: 1,
      explanation: 'Jusqu’à la loi du 5 juillet 1974, il fallait avoir 21 ans pour voter et être majeur en France.'
    }
  },
  {
    id: 'p304-simone-veil',
    page: 304,
    title: 'Simone Veil',
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: '1927 – 2017',
    subtitle: 'Rescapée de la Shoah, ministre de la loi de 1975 et présidente du Parlement européen',
    image: IMG_PARIS,
    imageCaption: 'Simone Veil incarne la défense des droits des femmes, de la mémoire et de la paix européenne.',
    imageObservation: 'Son combat courageux devant une Assemblée presque exclusivement masculine en 1974 marqua l’histoire parlementaire.',
    sections: [
      {
        heading: 'De la déportation à la loi de 1975',
        body: 'Déportée à Auschwitz-Birkenau à l’âge de 16 ans en 1944, Simone Jacob devient magistrate après la guerre. Nommée ministre de la Santé par Valéry Giscard d’Estaing en 1974, elle porte avec courage et dignité la loi légalisant l’interruption volontaire de grossesse (IVG), promulguée le 17 janvier 1975 pour mettre fin aux drames des avortements clandestins.'
      },
      {
        heading: 'Première présidente du Parlement européen (1979)',
        body: 'Convaincue que la construction européenne est la meilleure garantie contre le retour de la barbarie, Simone Veil conduit la liste victorieuse aux premières élections européennes de 1979 et devient la première présidente du Parlement européen élu. Elle entre au Panthéon avec son époux Antoine Veil en 2018.'
      }
    ],
    keyTakeaways: [
      'Rescapée d’Auschwitz, Simone Veil porte la loi du 17 janvier 1975 dépénalisant l’IVG.',
      'En 1979, elle devient la première femme élue présidente du Parlement européen.',
      'Symbole de réconciliation et de droiture morale, elle repose au Panthéon depuis 2018.'
    ],
    keyDates: [
      { date: '17 janvier 1975', label: 'Promulgation de la loi Veil légalisant l’IVG' },
      { date: '1979', label: 'Simone Veil élue présidente du Parlement européen' },
      { date: '1er juillet 2018', label: 'Entrée de Simone Veil au Panthéon' }
    ],
    exercise: {
      question: 'Quelle haute fonction européenne Simone Veil exerça-t-elle la première après les élections au suffrage universel de 1979 ?',
      options: [
        'Présidente de la Banque centrale européenne',
        'Présidente du Parlement européen',
        'Chancelière d’Allemagne',
        'Secrétaire générale de l’ONU'
      ],
      correctIndex: 1,
      explanation: 'Élues pour la première fois au suffrage universel direct en juin 1979, les assemblées de Strasbourg choisirent Simone Veil pour présidente.'
    }
  },
  {
    id: 'p306-chocs-petroliers',
    page: 306,
    title: 'Les deux chocs pétroliers',
    eraId: '1914-nos-jours',
    kind: 'theme',
    dates: '1973 et 1979',
    subtitle: 'La fin des Trente Glorieuses, le chômage de masse et le choix du nucléaire',
    image: IMG_PARIS,
    imageCaption: 'Le renchérissement brutal du pétrole en 1973 et 1979 bouleverse l’économie française.',
    imageObservation: 'Face à la dépendance énergétique, la France développe massivement son parc nucléaire et les économies d’énergie.',
    sections: [
      {
        heading: '1973 et 1979 : la crise énergétique mondiale',
        body: 'En octobre 1973 (guerre du Kippour), les pays arabes producteurs de pétrole quadruplent le prix du baril. En 1979 (révolution iranienne), un second choc pétrolier double à nouveau les prix. La facture énergétique de la France explose, déclenchant inflation, fermetures d’usines (sidérurgie, textile) et montée du chômage de masse.'
      },
      {
        heading: '« En France, on n’a pas de pétrole, mais on a des idées »',
        body: 'L’État réagit par la chasse au gaspillage (instauration de l’heure d’été en 1976, limitations de vitesse) et accélère le plan électronucléaire (plan Messmer) afin d’assurer l’indépendance électrique du pays, tout en inaugurant le premier TGV Paris-Lyon en 1981.'
      }
    ],
    keyTakeaways: [
      'Les chocs pétroliers de 1973 et 1979 mettent fin à la croissance rapide des Trente Glorieuses.',
      'La France subit l’inflation et la montée durable du chômage (de moins de 3 % à plus de 10 % dans les années 1980).',
      'Pour réduire sa dépendance au pétrole, la France mise massivement sur l’énergie nucléaire.'
    ],
    keyDates: [
      { date: '1973', label: 'Premier choc pétrolier et fin des Trente Glorieuses' },
      { date: '1979', label: 'Second choc pétrolier' }
    ],
    exercise: {
      question: 'Quelle filière énergétique la France a-t-elle massivement développée à partir de 1974 pour réduire sa dépendance au pétrole ?',
      options: ['Le charbon importé', 'L’énergie nucléaire (centrales électriques)', 'Le gaz de schiste', 'Le bois de chauffage'],
      correctIndex: 1,
      explanation: 'Le plan Messmer permit de bâtir un parc de réacteurs nucléaires produisant la majorité de l’électricité française.'
    }
  },
  {
    id: 'p308-francois-mitterrand',
    page: 308,
    title: 'François Mitterrand',
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: '1916 – 1996',
    subtitle: 'L’alternance historique de 1981, l’abolition de la peine de mort et le traité de Maastricht',
    image: IMG_PARIS,
    imageCaption: 'Deux septennats marqués par l’alternance politique, les grandes réformes de 1981 et les cohabitations.',
    imageObservation: 'La Pyramide du Louvre, l’Arche de la Défense et l’Opéra Bastille témoignent des « Grands Travaux » mitterrandiens.',
    sections: [
      {
        heading: 'La victoire de la gauche en 1981 et les réformes',
        body: 'Ancien ministre de la IVe République et architecte de l’union de la gauche au congrès d’Épinay (1971), François Mitterrand est élu président le 10 mai 1981 : c’est la première alternance de la Ve République. Avec son Premier ministre Pierre Mauroy, il abolit la peine de mort (loi portée par Robert Badinter), accorde la retraite à 60 ans, la 5e semaine de congés payés et les lois de décentralisation (1982).'
      },
      {
        heading: 'Tournant de la rigueur, cohabitations et Maastricht (1992)',
        body: 'Face à la crise, il adopte la rigueur budgétaire dès 1983. Réélu en 1988 après une première cohabitation avec Jacques Chirac (1986-1988), il fait approuver par référendum en 1992 le traité de Maastricht créant l’Union européenne et la monnaie unique (futur euro), avant une seconde cohabitation avec Édouard Balladur (1993-1995).'
      }
    ],
    keyTakeaways: [
      '10 mai 1981 : première alternance à gauche de la Ve République.',
      'Réformes majeures : abolition de la peine de mort (1981), décentralisation (1982), 5e semaine de congés payés.',
      'François Mitterrand accomplit deux septennats complets (14 ans) et fait ratifier le traité de Maastricht (1992).'
    ],
    keyDates: [
      { date: '10 mai 1981', label: 'Élection de François Mitterrand à la présidence' },
      { date: '9 octobre 1981', label: 'Promulgation de la loi abolissant la peine de mort (Robert Badinter)' },
      { date: '1992', label: 'Ratification par référendum du traité de Maastricht' }
    ],
    exercise: {
      question: 'Quel garde des Sceaux porta devant le Parlement en septembre 1981 la loi historique abolissant la peine de mort en France ?',
      options: ['Michel Debré', 'Robert Badinter', 'Pierre Mauroy', 'Simone Veil'],
      correctIndex: 1,
      explanation: 'Le discours du ministre de la Justice Robert Badinter le 17 septembre 1981 emporta le vote massif de l’Assemblée nationale.'
    }
  },
  {
    id: 'p310-crise-reformes-1',
    page: 310,
    title: 'Crise et réformes (1)',
    eraId: '1914-nos-jours',
    kind: 'theme',
    dates: '1995 – 2007',
    subtitle: 'De la présidence de Jacques Chirac au passage à l’euro et au quinquennat',
    image: IMG_PARIS,
    imageCaption: 'L’entrée de l’euro dans la vie quotidienne des Français (2002) et la réforme du quinquennat.',
    imageObservation: 'La période est marquée par la cohabitation Jospin-Chirac, la parité politique et le refus de la guerre en Irak (2003).',
    sections: [
      {
        heading: 'Jacques Chirac, la cohabitation et la fin du service militaire',
        body: 'Élu président en 1995, Jacques Chirac reconnaît la responsabilité de l’État français dans la rafle du Vel’ d’Hiv’ (discours de 1995) et suspend la conscription pour professionnaliser l’armée. Après la dissolution de 1997, il cohabite cinq ans avec le Premier ministre socialiste Lionel Jospin (35 heures, CMU, PACS, parité).'
      },
      {
        heading: 'Quinquennat (2000), euro (2002) et non à la guerre en Irak (2003)',
        body: 'En 2000, le mandat présidentiel passe de 7 à 5 ans (quinquennat) pour limiter les cohabitations. En 2002, l’euro remplace le franc ; réélu largement face à Jean-Marie Le Pen au second tour, Jacques Chirac s’oppose en 2003 à l’intervention américaine en Irak (discours de Dominique de Villepin à l’ONU) et fait voter la Charte de l’environnement (2005).'
      }
    ],
    keyTakeaways: [
      'En 2000, le quinquennat remplace le septennat présidentiel.',
      'Le 1er janvier 2002, les pièces et billets en euro remplacent le franc français.',
      'En 2003, la France refuse de participer à la guerre en Irak au nom du droit international.'
    ],
    keyDates: [
      { date: '1997 – 2002', label: 'Troisième cohabitation (Jacques Chirac / Lionel Jospin)' },
      { date: '2000', label: 'Adoption du quinquennat présidentiel par référendum' },
      { date: '1er janvier 2002', label: 'Mise en circulation de l’euro fiduciaire' }
    ],
    exercise: {
      question: 'En quelle année les billets et pièces en euro ont-ils remplacé le franc dans le porte-monnaie des Français ?',
      options: ['1992', '1999', '2002', '2007'],
      correctIndex: 2,
      explanation: 'Créé en tant que monnaie scripturale dès 1999, l’euro entra concrètement en circulation le 1er janvier 2002.'
    }
  },
  {
    id: 'p312-crise-reformes-2',
    page: 312,
    title: 'Crise et réformes (2)',
    eraId: '1914-nos-jours',
    kind: 'theme',
    dates: '2007 – Nos jours',
    subtitle: 'La crise financière de 2008, les défis économiques, numériques et écologiques',
    image: IMG_PARIS,
    imageCaption: 'Au XXIe siècle, la France s’adapte à la mondialisation numérique et à la transition écologique.',
    imageObservation: 'Les gouvernements successifs alternent réformes économiques, sociétales et réponses aux crises mondiales.',
    sections: [
      {
        heading: 'De Nicolas Sarkozy à François Hollande (2007 – 2017)',
        body: 'Élu en 2007, Nicolas Sarkozy affronte dès 2008 une grave crise financière et économique mondiale venue des États-Unis, réforme les universités et reporte l’âge légal de la retraite à 62 ans. Élu en 2012, François Hollande fait adopter le mariage pour tous (2013), accueille la COP21 débouchant sur l’Accord de Paris sur le climat (2015) et fait face à une vague d’attentats terroristes (2015-2016).'
      },
      {
        heading: 'Les mutations du quinquennat d’Emmanuel Macron (depuis 2017)',
        body: 'Élu à 39 ans en 2017 puis réélu en 2022, Emmanuel Macron dépasse le clivage traditionnel gauche-droite, réforme le droit du travail, la fiscalité et les retraites (64 ans), et dirige le pays durant la pandémie de Covid-19 (« quoi qu’il en coûte »), les mouvements sociaux et le retour de la guerre en Europe (Ukraine, 2022).'
      }
    ],
    keyTakeaways: [
      'La crise financière de 2008 alourdit la dette publique et freine durablement la croissance.',
      'En 2015, l’Accord de Paris (COP21) mobilise la communauté internationale pour le climat.',
      'Le XXIe siècle confronte la France aux transitions numérique et écologique ainsi qu’aux crises sanitaires et géopolitiques.'
    ],
    keyDates: [
      { date: '2008', label: 'Crise financière et économique mondiale' },
      { date: '2013', label: 'Loi ouvrant le mariage et l’adoption aux couples de même sexe' },
      { date: 'Déc. 2015', label: 'Signature de l’Accord de Paris sur le climat (COP21)' }
    ],
    exercise: {
      question: 'Quel accord mondial historique contre le réchauffement climatique fut conclu près de Paris en décembre 2015 ?',
      options: ['Le traité de Rome', 'L’Accord de Paris (COP21)', 'Le protocole de Versailles', 'La Charte de Nantes'],
      correctIndex: 1,
      explanation: 'Adopté par 195 pays lors de la COP21 au Bourget, l’Accord de Paris vise à limiter le réchauffement climatique bien en dessous de 2 °C.'
    }
  },
  {
    id: 'p314-gisele-halimi',
    page: 314,
    title: 'Gisèle Halimi',
    eraId: '1914-nos-jours',
    kind: 'portrait',
    dates: '1927 – 2020',
    subtitle: 'L’avocate engagée pour les droits humains, la justice et l’émancipation des femmes',
    image: IMG_PARIS,
    imageCaption: 'Par ses plaidoiries retentissantes, Gisèle Halimi fit progresser le droit et la condition féminine.',
    imageObservation: 'Des procès pour l’indépendance algérienne au procès de Bobigny (1972), elle utilisa la justice comme levier de liberté.',
    sections: [
      {
        heading: 'Avocate des libertés et des droits humains',
        body: 'Née en Tunisie dans une famille modeste, Zeiza Gisèle Élise Taïeb devient avocate à Paris en 1949. Elle défend les militants indépendantistes tunisiens et algériens durant la guerre d’Algérie (notamment Djamila Boupacha, avec Simone de Beauvoir), dénonçant l’usage de la torture.'
      },
      {
        heading: 'Le procès de Bobigny (1972) et l’engagement féministe',
        body: 'Fondatrice du mouvement « Choisir la cause des femmes » (1971), Gisèle Halimi assure en 1972 la défense retentissante d’une jeune mineure jugée pour avortement après un viol au procès de Bobigny, ouvrant la voie à la loi Veil de 1975. Députée à partir de 1981, elle contribue à la criminalisation du viol (1980) et au combat pour la parité politique.'
      }
    ],
    keyTakeaways: [
      'Gisèle Halimi utilise le prétoire comme tribune pour les droits humains et la justice.',
      'Le procès de Bobigny (1972) qu’elle plaide prépare directement la légalisation de l’IVG en 1975.',
      'Elle milite jusqu’à la fin de sa vie pour l’égalité réelle et la parité femmes-hommes.'
    ],
    keyDates: [
      { date: '1971', label: 'Création de l’association « Choisir la cause des femmes »' },
      { date: '1972', label: 'Procès de Bobigny plaidé par Gisèle Halimi' }
    ],
    exercise: {
      question: 'Quel procès célèbre plaidé par Gisèle Halimi en 1972 ouvrit la voie à la légalisation de l’avortement en France ?',
      options: ['Le procès de Riom', 'Le procès de Bobigny', 'L’affaire Dreyfus', 'Le procès des Templiers'],
      correctIndex: 1,
      explanation: 'À Bobigny en 1972, Gisèle Halimi transforma le procès d’une adolescente et de sa mère en procès d’une loi jugée injuste.'
    }
  },
  {
    id: 'p316-societe-francaise-tensions',
    page: 316,
    title: 'La société française sous tensions',
    eraId: '1914-nos-jours',
    kind: 'theme',
    dates: 'XXIe siècle',
    subtitle: 'Fractures territoriales, question sociale, laïcité et vitalité démocratique',
    image: IMG_PARIS,
    imageCaption: 'Au XXIe siècle, la France cherche à renouveler son pacte républicain entre métropoles et territoires ruraux.',
    imageObservation: 'L’attachement aux services publics, à l’égalité des chances et à la liberté d’expression demeure au cœur du débat citoyen.',
    sections: [
      {
        heading: 'Inégalités territoriales et mouvements sociaux',
        body: 'Si la France bénéficie d’un modèle social protecteur et d’infrastructures modernes, les déséquilibres se creusent entre grandes métropoles dynamiques et certains territoires ruraux, périurbains ou quartiers populaires (désindustrialisation, accès aux services publics, pouvoir d’achat). Le mouvement des Gilets jaunes (2018-2019) ou les débats sur les retraites témoignent de ces attentes sociales.'
      },
      {
        heading: 'Faire vivre le pacte républicain au XXIe siècle',
        body: 'Face au défi climatique, aux tensions identitaires, à la désinformation sur les réseaux sociaux et au recul de la participation électorale, la France s’appuie sur ses valeurs fondatrices — Liberté, Égalité, Fraternité, laïcité et solidarité — pour construire son avenir européen et démocratique.'
      }
    ],
    keyTakeaways: [
      'La société française du XXIe siècle est traversée par des fractures sociales et territoriales (métropoles / périphéries).',
      'Le modèle social français reste l’un des plus protecteurs au monde mais fait face à de forts enjeux de financement.',
      'L’école, la laïcité et l’engagement citoyen demeurent les piliers de la cohésion nationale.'
    ],
    keyDates: [
      { date: '2018 – 2019', label: 'Mouvement des Gilets jaunes et Grand Débat national' },
      { date: '2024', label: 'Jeux olympiques et paralympiques de Paris et réouverture de Notre-Dame' }
    ],
    exercise: {
      question: 'Quelles sont les trois valeurs inscrites dans la devise officielle de la République française ?',
      options: [
        'Travail, Famille, Patrie',
        'Liberté, Égalité, Fraternité',
        'Ordre, Justice, Progrès',
        'Paix, Science, Industrie'
      ],
      correctIndex: 1,
      explanation: 'Héritée de 1789 et inscrite dans la Constitution, la devise « Liberté, Égalité, Fraternité » résume l’idéal républicain français.'
    }
  }
];
