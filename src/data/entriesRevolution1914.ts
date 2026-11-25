import type { BledEntry } from './bledTypes';

const IMG_REVOLUTION = '/src/assets/images/chapter_6_revolution_1795633325152.jpg';
const IMG_REPUBLIQUE = '/src/assets/images/chapter_7_republique_1795633327055.jpg';
const IMG_PARIS = '/src/assets/images/chapter_8_europe_1795633326272.jpg';

export const ENTRIES_REVOLUTION_1914: BledEntry[] = [
  {
    id: 'p152-revolution-francaise',
    page: 152,
    title: 'La Révolution française',
    eraId: 'revolution-1914',
    kind: 'theme',
    dates: '1789 – 1799',
    subtitle: 'De la prise de la Bastille à la chute de la monarchie et à la République',
    image: IMG_REVOLUTION,
    imageCaption: 'La prise de la Bastille le 14 juillet 1789 marque la chute de l’absolutisme.',
    imageObservation: 'Sous les drapeaux tricolores, le peuple parisien s’empare de la forteresse royale, symbole de l’arbitraire.',
    sections: [
      {
        heading: 'L’été fondateur de 1789',
        body: 'Réunis à Versailles en mai 1789, les députés du Tiers État se constituent en Assemblée nationale et prêtent le serment du Jeu de paume (20 juin). Le 14 juillet, le peuple de Paris prend la Bastille ; le 4 août, les privilèges sont abolis ; le 26 août est votée la Déclaration des droits de l’homme et du citoyen.'
      },
      {
        heading: 'De la monarchie constitutionnelle à la République',
        body: 'Après la fuite du roi à Varennes (1791) et la déclaration de guerre aux monarchies européennes (1792), la royauté est renversée le 10 août 1792. Au lendemain de la victoire de Valmy, la Première République est proclamée le 21 septembre 1792.'
      }
    ],
    keyTakeaways: [
      '1789 met fin à l’Ancien Régime, à la société d’ordres et à la monarchie absolue.',
      'La Déclaration des droits de l’homme proclame la liberté, l’égalité et la souveraineté nationale.',
      'La Première République est proclamée le 21 septembre 1792.'
    ],
    keyDates: [
      { date: '14 juillet 1789', label: 'Prise de la Bastille' },
      { date: '26 août 1789', label: 'Déclaration des droits de l’homme et du citoyen' },
      { date: '21 sept. 1792', label: 'Proclamation de la Première République' }
    ],
    exercise: {
      question: 'Que décide l’Assemblée constituante lors de la célèbre nuit du 4 août 1789 ?',
      options: [
        'L’abolition des privilèges seigneuriaux et fiscaux',
        'Le sacre de Napoléon Ier',
        'La création des chemins de fer',
        'L’adoption du franc germinal'
      ],
      correctIndex: 0,
      explanation: 'Dans l’enthousiasme de la nuit du 4 août 1789, nobles et membres du clergé renoncent à leurs privilèges fiscaux et droits féodaux.'
    }
  },
  {
    id: 'p154-mirabeau-condorcet',
    page: 154,
    title: 'Mirabeau et Condorcet',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1789 – 1794',
    subtitle: 'L’éloquence constitutionnelle et l’idéal d’instruction publique universelle',
    image: IMG_REVOLUTION,
    imageCaption: 'Les grands orateurs et penseurs des assemblées révolutionnaires.',
    imageObservation: 'Mirabeau incarna la force parlementaire dès 1789, tandis que Condorcet jeta les bases de l’école publique moderne.',
    sections: [
      {
        heading: 'Mirabeau, tribun de l’Assemblée constituante',
        body: 'Élu député du Tiers État à Aix-en-Provence en 1789, Honoré-Gabriel Riqueti, comte de Mirabeau, devient la grande voix de l’Assemblée. Il répond fièrement à l’envoyé du roi le 23 juin 1789 et défend une monarchie constitutionnelle équilibrée avant sa mort prématurée en 1791.'
      },
      {
        heading: 'Condorcet et le projet d’école républicaine',
        body: 'Mathématicien et philosophe des Lumières, Nicolas de Condorcet défend l’égalité des droits pour les femmes, les protestants et les esclaves. En 1792, il présente un rapport majeur proposant une instruction publique laïque et gratuite pour former des citoyens libres et éclairés.'
      }
    ],
    keyTakeaways: [
      'Mirabeau symbolise la légitimité des représentants du peuple face au pouvoir royal en 1789.',
      'Condorcet formule dès 1792 le grand projet d’une instruction publique gratuite et laïque.',
      'Tous deux reposent aujourd’hui au Panthéon (Condorcet y entra en 1989).'
    ],
    keyDates: [
      { date: '23 juin 1789', label: 'Apostrophe célèbre de Mirabeau au marquis de Dreux-Brézé' },
      { date: 'Avril 1792', label: 'Rapport de Condorcet sur l’instruction publique' }
    ],
    exercise: {
      question: 'Quel grand projet de société Condorcet présenta-t-il à l’Assemblée législative en 1792 ?',
      options: [
        'Le rétablissement de la gabelle',
        'Une instruction publique gratuite, mixte et indépendante des dogmes',
        'La création du franc',
        'La construction du métro parisien'
      ],
      correctIndex: 1,
      explanation: 'Le plan Condorcet inspirera près d’un siècle plus tard les lois scolaires de Jules Ferry.'
    }
  },
  {
    id: 'p156-olympe-de-gouges',
    page: 156,
    title: 'Olympe de Gouges',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1748 – 1793',
    subtitle: 'L’auteure de la Déclaration des droits de la femme et de la citoyenne',
    image: IMG_REVOLUTION,
    imageCaption: 'Les combats féministes et abolitionnistes au cœur de la Révolution française.',
    imageObservation: 'Olympe de Gouges réclama dès 1791 l’égalité civile et politique complète entre femmes et hommes.',
    sections: [
      {
        heading: 'La Déclaration de 1791',
        body: 'Femme de lettres engagée contre l’esclavage (Zamore et Mirza), Marie Gouze, dite Olympe de Gouges, constate que la Déclaration de 1789 exclut les femmes de la citoyenneté. En septembre 1791, elle publie la Déclaration des droits de la femme et de la citoyenne, dédiée à la reine.'
      },
      {
        heading: 'Un courage payé de sa vie',
        body: 'Olympe de Gouges défend la liberté d’opinion, le divorce et la protection des mères et des enfants naturels. Opposée aux excès de la Terreur et aux exécutions politiques, elle est arrêtée en 1793 et guillotinée en novembre de la même année.'
      }
    ],
    keyTakeaways: [
      'En 1791, Olympe de Gouges rédige la Déclaration des droits de la femme et de la citoyenne.',
      'Elle milite également pour l’abolition de l’esclavage et la justice sociale.',
      'Pionnière des droits des femmes, elle est exécutée sous la Terreur en 1793.'
    ],
    keyDates: [
      { date: 'Septembre 1791', label: 'Publication de la Déclaration des droits de la femme et de la citoyenne' }
    ],
    quote: {
      text: 'La femme naît libre et demeure égale à l’homme en droits.',
      author: 'Olympe de Gouges, article 1er (1791)'
    },
    exercise: {
      question: 'Quel texte pionnier Olympe de Gouges publia-t-elle en 1791 ?',
      options: [
        'Le Code civil',
        'La Déclaration des droits de la femme et de la citoyenne',
        'Le Manifeste du Second Empire',
        'La Charte de 1814'
      ],
      correctIndex: 1,
      explanation: 'Elle y affirme que « la femme a le droit de monter sur l’échafaud ; elle doit avoir également celui de monter à la Tribune ».'
    }
  },
  {
    id: 'p158-danton',
    page: 158,
    title: 'Danton',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1759 – 1794',
    subtitle: 'L’orateur de la patrie en danger et le tribun du sursaut de 1792',
    image: IMG_REVOLUTION,
    imageCaption: '« De l’audace, encore de l’audace, toujours de l’audace ! » face aux armées étrangères.',
    imageObservation: 'En 1792, Danton incarna la défense nationale de la jeune République menacée d’invasion.',
    sections: [
      {
        heading: 'L’appel à l’audace en 1792',
        body: 'Avocat champenois à la voix tonnante, Georges Jacques Danton joue un rôle décisif dans l’insurrection du 10 août 1792 puis devient ministre de la Justice. Lorsque l’armée prussienne approche de Paris en septembre 1792, il galvanise les volontaires par un discours enflammé avant la victoire de Valmy.'
      },
      {
        heading: 'La chute des Indulgents',
        body: 'Premier président du Comité de salut public en 1793, Danton estime en 1794 que les victoires militaires permettent d’arrêter la Terreur (groupe des « Indulgents » avec Camille Desmoulins). Accusé de modérantisme et de corruption par Robespierre, il est guillotiné en avril 1794.'
      }
    ],
    keyTakeaways: [
      'Danton incarne le patriotisme révolutionnaire lors de l’invasion de 1792.',
      'Il contribue à la création du Tribunal révolutionnaire et du Comité de salut public en 1793.',
      'Réclamant la fin de la Terreur, il est exécuté en avril 1794.'
    ],
    keyDates: [
      { date: '2 septembre 1792', label: 'Discours de « l’audace » de Danton devant l’Assemblée' },
      { date: '5 avril 1794', label: 'Exécution de Danton et Desmoulins' }
    ],
    exercise: {
      question: 'À quel contexte correspond la célèbre exclamation de Danton : « De l’audace, encore de l’audace, toujours de l’audace ! » ?',
      options: [
        'Le sacre de Napoléon en 1804',
        'La défense de la France face à l’invasion prussienne en septembre 1792',
        'La construction de la tour Eiffel',
        'L’élection de Louis-Philippe'
      ],
      correctIndex: 1,
      explanation: 'Alors que Verdun venait de tomber, Danton appela le peuple aux armes pour sauver la patrie et la Révolution.'
    }
  },
  {
    id: 'p160-robespierre',
    page: 160,
    title: 'Robespierre',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1758 – 1794',
    subtitle: 'L’Incorruptible, le Comité de salut public et le gouvernement de la Terreur',
    image: IMG_REVOLUTION,
    imageCaption: 'Sous la Convention montagnarde (1793-1794), la République lutte contre ses ennemis intérieurs et extérieurs.',
    imageObservation: 'La chute de Robespierre le 9 thermidor an II (27 juillet 1794) mit fin à la Terreur.',
    sections: [
      {
        heading: 'La Convention et le salut public (1793 – 1794)',
        body: 'Avocat d’Arras surnommé « l’Incorruptible » pour sa vie austère, Maximilien de Robespierre domine les Jacobins et entre au Comité de salut public en juillet 1793. Face à la guerre extérieure, à l’insurrection vendéenne et à la crise économique, la Convention instaure la Terreur : loi des suspects, maximum des prix et levée en masse.'
      },
      {
        heading: 'La Grande Terreur et le 9 thermidor',
        body: 'L’armée républicaine redresse la situation (Fleurus, juin 1794), mais Robespierre accentue la répression par la loi de Prairial, envoyant à la guillotine des milliers de suspects. Craignant pour leur propre vie, les députés de la Convention le renversent le 9 thermidor an II (27 juillet 1794) ; il est guillotiné le lendemain.'
      }
    ],
    keyTakeaways: [
      'Robespierre dirige le gouvernement révolutionnaire pendant la Terreur (1793-1794).',
      'La Convention abolit l’esclavage dans les colonies pour la première fois en février 1794.',
      'Sa chute le 9 thermidor an II (27 juillet 1794) ouvre une période plus modérée (Directoire).'
    ],
    keyDates: [
      { date: 'Sept. 1793 – Juil. 1794', label: 'La Terreur sous l’impulsion du Comité de salut public' },
      { date: '4 février 1794', label: 'Première abolition de l’esclavage par la Convention' },
      { date: '27 juillet 1794', label: 'Chute de Robespierre (9 thermidor an II)' }
    ],
    exercise: {
      question: 'À quelle date du calendrier républicain correspond la chute de Robespierre (27 juillet 1794) ?',
      options: ['18 Brumaire', '9 Thermidor', '10 Août', '21 Janvier'],
      correctIndex: 1,
      explanation: 'Le 9 thermidor an II (27 juillet 1794), la Convention vota l’arrestation de Robespierre et de ses proches.'
    }
  },
  {
    id: 'p162-bilan-revolution',
    page: 162,
    title: 'Le bilan de la Révolution française',
    eraId: 'revolution-1914',
    kind: 'theme',
    dates: '1789 – 1799',
    subtitle: 'Unification du territoire en départements, système métrique et égalité civile',
    image: IMG_REVOLUTION,
    imageCaption: 'Les acquis politiques, territoriaux et culturels légués par la décennie révolutionnaire.',
    imageObservation: 'Les départements, le système métrique et le drapeau tricolore sont des créations directes de la Révolution.',
    sections: [
      {
        heading: 'Des réformes durables pour toute la France',
        body: 'Malgré les violences et l’instabilité du Directoire (1795-1799), la Révolution transforme profondément le pays : elle supprime les privilèges et le système féodal, crée les 83 départements (1790) pour unifier l’administration, unifie les poids et mesures avec le système métrique (mètre, kilogramme) et institue le mariage civil et l’état civil laïque.'
      },
      {
        heading: 'Un rayonnement universel',
        body: 'Les principes de souveraineté nationale, d’égalité devant la loi et d’État constitutionnel deviennent une référence dans toute l’Europe et dans le monde. Les symboles de la Nation — le drapeau tricolore, la Marseillaise (composée par Rouget de Lisle en 1792) et la devise républicaine — datent de cette époque.'
      }
    ],
    keyTakeaways: [
      'La France est divisée en départements égaux dès 1790.',
      'Le système métrique décimal et l’état civil laïque sont créés sous la Révolution.',
      'La souveraineté nationale et l’égalité civile remplacent définitivement l’ordre féodal.'
    ],
    keyDates: [
      { date: '1790', label: 'Création des départements français' },
      { date: '1792', label: 'Composition de La Marseillaise à Strasbourg' },
      { date: '1795', label: 'Adoption officielle du système métrique décimal' }
    ],
    exercise: {
      question: 'Quelle grande réforme scientifique et pratique la Révolution adopta-t-elle pour unifier les mesures dans tout le pays ?',
      options: ['Le calendrier romain', 'Le système métrique (mètre, gramme, litre)', 'Le pied du roi', 'L’heure solaire locale'],
      correctIndex: 1,
      explanation: 'Le système métrique remplaça des centaines de mesures locales différentes (aunes, lieues, livres) par des unités décimales universelles.'
    }
  },
  {
    id: 'p164-toussaint-louverture',
    page: 164,
    title: 'Toussaint Louverture',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1743 – 1803',
    subtitle: 'Le chef de la révolution de Saint-Domingue et l’abolition de l’esclavage',
    image: IMG_REVOLUTION,
    imageCaption: 'La lutte pour la liberté et la dignité à Saint-Domingue (actuelle Haïti).',
    imageObservation: 'Toussaint Louverture fit appliquer dans les faits les principes de liberté proclamés en 1789.',
    sections: [
      {
        heading: 'Le soulèvement de Saint-Domingue (1791)',
        body: 'Né esclave dans la riche colonie sucrière française de Saint-Domingue puis affranchi, François-Dominique Toussaint devient en 1791 le stratège de la révolte des esclaves réclamant l’application des Droits de l’homme.'
      },
      {
        heading: 'Gouverneur et précurseur de l’indépendance d’Haïti',
        body: 'Après l’abolition de l’esclavage votée par la Convention en février 1794, Toussaint Louverture rallie la République française, repousse Anglais et Espagnols et gouverne l’île avec autorité. Lorsque Napoléon Bonaparte rétablit l’esclavage en 1802, Toussaint est capturé par ruse et meurt emprisonné au fort de Joux (Doubs) en 1803, peu avant l’indépendance d’Haïti (1804).'
      }
    ],
    keyTakeaways: [
      'Toussaint Louverture mène l’insurrection victorieuse des esclaves de Saint-Domingue.',
      'La Convention abolit une première fois l’esclavage en 1794 avant que Bonaparte ne le rétablisse en 1802.',
      'Saint-Domingue devient en 1804 la République d’Haïti, premier État noir indépendant issu d’une révolte d’esclaves.'
    ],
    keyDates: [
      { date: '1791', label: 'Soulèvement des esclaves à Saint-Domingue' },
      { date: '1803', label: 'Mort de Toussaint Louverture au fort de Joux' },
      { date: '1804', label: 'Proclamation de l’indépendance d’Haïti' }
    ],
    exercise: {
      question: 'Quel pays indépendant naquit en 1804 de la lutte menée à Saint-Domingue par Toussaint Louverture et ses successeurs ?',
      options: ['La Martinique', 'Haïti', 'La Réunion', 'Madagascar'],
      correctIndex: 1,
      explanation: 'Le 1er janvier 1804, Jean-Jacques Dessalines proclama l’indépendance de l’ancienne colonie sous son nom amérindien d’Haïti.'
    }
  },
  {
    id: 'p166-napoleon-bonaparte',
    page: 166,
    title: 'Napoléon Bonaparte',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1769 – 1821',
    subtitle: 'Du jeune général corse au maître de la France et de l’Europe',
    image: IMG_REVOLUTION,
    imageCaption: 'L’ascension fulgurante du général Bonaparte des campagnes d’Italie au sacre impérial.',
    imageObservation: 'Brillant officier d’artillerie, Napoléon mit fin à l’instabilité du Directoire par le coup d’État du 18 Brumaire.',
    sections: [
      {
        heading: 'Des victoires d’Italie et d’Égypte au 18 Brumaire',
        body: 'Né à Ajaccio en 1769, formé à l’école militaire de Brienne, Napoléon Bonaparte s’illustre à Toulon (1793) puis lors de la fulgurante campagne d’Italie (1796-1797 : Arcole, Rivoli) et de l’expédition scientifique et militaire d’Égypte (1798). Devenu très populaire, il renverse le Directoire le 18 brumaire an VIII (9 novembre 1799).'
      },
      {
        heading: 'De l’apogée à l’exil à Sainte-Hélène',
        body: 'Premier consul puis sacré empereur des Français sous le nom de Napoléon Ier le 2 décembre 1804 à Notre-Dame de Paris, il domine l’Europe jusqu’en 1812. Contraint d’abdiquer en 1814, il revient cent jours en 1815 avant d’être définitivement vaincu à Waterloo et exilé à Sainte-Hélène, où il meurt en 1821.'
      }
    ],
    keyTakeaways: [
      'Général victorieux en Italie, Bonaparte prend le pouvoir le 18 brumaire (1799).',
      'Il est sacré empereur des Français en 1804 (Premier Empire).',
      'Vaincu à Waterloo en 1815, il meurt en exil sur l’île de Sainte-Hélène en 1821.'
    ],
    keyDates: [
      { date: '9 nov. 1799', label: 'Coup d’État du 18 Brumaire : Bonaparte devient Premier consul' },
      { date: '2 déc. 1804', label: 'Sacre de Napoléon Ier à Notre-Dame de Paris' },
      { date: '5 mai 1821', label: 'Mort de Napoléon à Sainte-Hélène' }
    ],
    exercise: {
      question: 'En quelle année Napoléon Bonaparte est-il sacré empereur des Français à Notre-Dame de Paris ?',
      options: ['1789', '1799', '1804', '1815'],
      correctIndex: 2,
      explanation: 'Le 2 décembre 1804, en présence du pape Pie VII, Napoléon Ier se couronna lui-même puis couronna Joséphine.'
    }
  },
  {
    id: 'p168-consulat-empire',
    page: 168,
    title: "Le Consulat et l'Empire napoléonien",
    eraId: 'revolution-1914',
    kind: 'theme',
    dates: '1799 – 1814',
    subtitle: 'Les « masses de granit » : Code civil, préfets, lycées, franc germinal et Concordat',
    image: IMG_REVOLUTION,
    imageCaption: 'Sous le Consulat et l’Empire se mettent en place les grandes institutions françaises modernes.',
    imageObservation: 'Bien que le régime soit autoritaire, Napoléon consolide les acquis civils de 1789.',
    sections: [
      {
        heading: 'Réconcilier la société et moderniser l’État',
        body: 'Sous le Consulat (1799-1804), Bonaparte rétablit la paix religieuse en signant le Concordat avec le pape (1801). Il crée un État centralisé autour des préfets dans chaque département, fonde la Banque de France et stabilise la monnaie avec le franc germinal (1803).'
      },
      {
        heading: 'Le Code civil (1804), les lycées et la Légion d’honneur',
        body: 'En 1804 est promulgué le Code civil (Code Napoléon), qui garantit l’égalité des citoyens devant la loi, la propriété privée et la liberté de conscience (tout en maintenant l’autorité du mari sur la famille). Il crée également les lycées pour former les élites et la Légion d’honneur (1802).'
      }
    ],
    keyTakeaways: [
      'Napoléon crée des institutions durables : préfets, Banque de France, Cour des comptes, lycées, baccalauréat.',
      'Le Concordat de 1801 apaise les tensions religieuses nées de la Révolution.',
      'Le Code civil de 1804 fixe les règles de la vie civile française jusqu’à nos jours.'
    ],
    keyDates: [
      { date: '1800', label: 'Création des préfets et de la Banque de France' },
      { date: '1801 – 1802', label: 'Concordat, création des lycées et de la Légion d’honneur' },
      { date: '1804', label: 'Promulgation du Code civil' }
    ],
    exercise: {
      question: 'Quel représentant de l’État dans chaque département fut institué par Bonaparte en 1800 ?',
      options: ['Le sénéchal', 'Le préfet', 'Le gouverneur royal', 'Le bailli'],
      correctIndex: 1,
      explanation: 'Nommé par le chef de l’État, le préfet dirigeait l’administration départementale et veillait à l’application des lois.'
    }
  },
  {
    id: 'p170-guerres-napoleoniennes',
    page: 170,
    title: 'Les guerres napoléoniennes',
    eraId: 'revolution-1914',
    kind: 'theme',
    dates: '1805 – 1815',
    subtitle: 'D’Austerlitz et Iéna à la retraite de Russie et à Waterloo',
    image: IMG_REVOLUTION,
    imageCaption: 'La Grande Armée parcourt l’Europe de Madrid à Moscou avant de succomber aux coalitions.',
    imageObservation: 'Ces guerres propagèrent les idées du Code civil en Europe mais suscitèrent aussi l’essor des nationalismes étrangers.',
    sections: [
      {
        heading: 'La Grande Armée maîtresse de l’Europe (1805 – 1811)',
        body: 'Face aux coalitions financées par l’Angleterre (qui garde la maîtrise des mers après Trafalgar en 1805), Napoléon remporte des victoires éclatantes : Austerlitz (2 décembre 1805), Iéna (1806), Friedland (1807) et Wagram (1809). En 1811, l’Empire français compte 130 départements et domine presque toute l’Europe.'
      },
      {
        heading: 'L’enlisement en Espagne, la Russie et Waterloo (1812 – 1815)',
        body: 'Épuisée par la guérilla en Espagne et le blocus continental contre l’Angleterre, la Grande Armée est décimée lors de la désastreuse campagne de Russie (1812, Bérézina). Battu à Leipzig (1813), Napoléon abdique en 1814, revient pour les Cent-Jours en 1815 et est définitivement vaincu à Waterloo (18 juin 1815).'
      }
    ],
    keyTakeaways: [
      'Austerlitz (1805) demeure le chef-d’œuvre tactique de Napoléon Ier.',
      'La campagne de Russie (1812) détruit la Grande Armée et inverse le cours de la guerre.',
      'La défaite de Waterloo (18 juin 1815) met fin définitivement au Premier Empire.'
    ],
    keyDates: [
      { date: '2 déc. 1805', label: 'Victoire d’Austerlitz contre l’Autriche et la Russie' },
      { date: '1812', label: 'Désastreuse campagne de Russie' },
      { date: '18 juin 1815', label: 'Défaite finale de Waterloo' }
    ],
    exercise: {
      question: 'Quelle célèbre victoire impériale fut remportée par Napoléon Ier le 2 décembre 1805, un an jour pour jour après son sacre ?',
      options: ['Waterloo', 'Austerlitz', 'Valmy', 'Verdun'],
      correctIndex: 1,
      explanation: 'À Austerlitz (« la bataille des Trois Empereurs »), Napoléon défit les armées autrichienne et russe.'
    }
  },
  {
    id: 'p172-talleyrand-fouche',
    page: 172,
    title: 'Talleyrand et Fouché',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1789 – 1838',
    subtitle: 'Les deux ministres habiles de la diplomatie et de la police à travers les régimes',
    image: IMG_REVOLUTION,
    imageCaption: 'Diplomatie européenne au Congrès de Vienne et organisation de la police moderne.',
    imageObservation: 'Talleyrand sauva les frontières essentielles de la France au Congrès de Vienne malgré la chute de Napoléon.',
    sections: [
      {
        heading: 'Talleyrand, maître de la diplomatie',
        body: 'Ancien évêque d’Autun rallié à la Révolution en 1789, Charles-Maurice de Talleyrand-Périgord sert le Directoire, Napoléon comme ministre des Relations extérieures, puis Louis XVIII. En 1814-1815, au Congrès de Vienne, son habileté permet à la France vaincue d’éviter le démembrement et de retrouver son rang de grande puissance.'
      },
      {
        heading: 'Fouché, organisateur de la police politique',
        body: 'Ancien conventionnel, Joseph Fouché dirige le ministère de la Police sous le Directoire, le Consulat, l’Empire et brièvement en 1815. Il crée un réseau complet de renseignement et de maintien de l’ordre, tout en préservant une grande autonomie face à Napoléon.'
      }
    ],
    keyTakeaways: [
      'Talleyrand incarne l’art diplomatique et négocie avec succès pour la France au Congrès de Vienne (1814-1815).',
      'Fouché jette les bases de la police moderne et du renseignement d’État.',
      'Tous deux surent traverser les bouleversements politiques de la Révolution à la Restauration.'
    ],
    keyDates: [
      { date: '1814 – 1815', label: 'Congrès de Vienne redessinant la carte de l’Europe' }
    ],
    exercise: {
      question: 'Lors de quel grand congrès européen de 1814-1815 Talleyrand défendit-il habilement les intérêts de la France après la chute de Napoléon ?',
      options: ['Le congrès de Versailles', 'Le congrès de Vienne', 'Le congrès de Berlin', 'Le traité de Rome'],
      correctIndex: 1,
      explanation: 'Au Congrès de Vienne, Talleyrand sut exploiter les divisions entre vainqueurs pour préserver l’intégrité de la France.'
    }
  },
  {
    id: 'p174-louis-xviii-charles-x',
    page: 174,
    title: 'Louis XVIII et Charles X',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1814 – 1830',
    subtitle: 'La Restauration des Bourbons, entre Charte constitutionnelle et retour à l’absolutisme',
    image: IMG_REVOLUTION,
    imageCaption: 'Le retour des frères de Louis XVI sur le trône après vingt-cinq ans de Révolution et d’Empire.',
    imageObservation: 'Si Louis XVIII comprit la nécessité d’un compromis, Charles X voulut restaurer l’ordre ancien.',
    sections: [
      {
        heading: 'Louis XVIII et la Charte de 1814',
        body: 'Après l’abdication de Napoléon en 1814 (puis après Waterloo en 1815), le frère de Louis XVI monte sur le trône sous le nom de Louis XVIII. Conscient qu’on ne peut effacer 1789, il octroie la Charte constitutionnelle de 1814 qui maintient le Code civil, les libertés fondamentales et crée un Parlement élu au suffrage censitaire.'
      },
      {
        heading: 'Charles X et la tentation réactionnaire',
        body: 'À la mort de Louis XVIII en 1824, son frère Charles X, sacré à Reims selon le rite ancien, cherche à renforcer l’influence de l’Église et des anciens émigrés (loi du « milliard des émigrés »). En juillet 1830, il publie quatre ordonnances suspendant la liberté de la presse et dissolvant la Chambre, déclenchant la révolution.'
      }
    ],
    keyTakeaways: [
      'La Restauration (1814-1830) instaure une monarchie constitutionnelle limitée par la Charte de 1814.',
      'Le droit de vote est réservé aux hommes les plus riches (suffrage censitaire).',
      'La politique autoritaire de Charles X provoque sa chute en juillet 1830.'
    ],
    keyDates: [
      { date: '1814', label: 'Octroi de la Charte constitutionnelle par Louis XVIII' },
      { date: '1824', label: 'Avènement de Charles X' }
    ],
    exercise: {
      question: 'Comment s’appelait le texte fondamental octroyé par Louis XVIII en 1814 pour gouverner avec un Parlement ?',
      options: ['Le Code civil', 'La Charte constitutionnelle', 'L’édit de Nantes', 'La Constitution de 1958'],
      correctIndex: 1,
      explanation: 'La Charte de 1814 garantissait les libertés publiques et l’égalité devant la loi tout en rétablissant la monarchie des Bourbons.'
    }
  },
  {
    id: 'p176-restauration-en-armes',
    page: 176,
    title: 'La Restauration en armes',
    eraId: 'revolution-1914',
    kind: 'theme',
    dates: '1823 – 1830',
    subtitle: 'L’expédition d’Espagne, Navarin et la prise d’Alger en 1830',
    image: IMG_REVOLUTION,
    imageCaption: 'Sous la Restauration, la France reconstruit son armée et intervient en Méditerranée.',
    imageObservation: 'La prise d’Alger en juillet 1830 marqua le point de départ d’une présence française de plus d’un siècle en Afrique du Nord.',
    sections: [
      {
        heading: 'Le retour de la France sur la scène militaire européenne',
        body: 'Après les traités de 1815, la France réintègre le concert des puissances européennes. En 1823, une armée française intervient en Espagne (prise du Trocadéro) pour rétablir le roi Ferdinand VII, puis en 1827 la flotte française combat aux côtés des Britanniques et des Russes à Navarin pour soutenir l’indépendance de la Grèce.'
      },
      {
        heading: 'L’expédition d’Alger (juillet 1830)',
        body: 'Pour restaurer le prestige de la couronne à l’intérieur et mettre fin à la piraterie en Méditerranée après un différend diplomatique avec le dey d’Alger, Charles X envoie une flotte qui débarque à Sidi-Ferruch et s’empare d’Alger le 5 juillet 1830 — trois semaines seulement avant d’être renversé à Paris.'
      }
    ],
    keyTakeaways: [
      'La France retrouve son rang militaire en soutenant notamment l’indépendance grecque (Navarin, 1827).',
      'Le 5 juillet 1830, les troupes françaises prennent Alger.',
      'Ce succès militaire lointain ne suffit pas à sauver le trône de Charles X face à l’opposition libérale parisienne.'
    ],
    keyDates: [
      { date: '1827', label: 'Bataille navale de Navarin en faveur de l’indépendance grecque' },
      { date: '5 juillet 1830', label: 'Prise d’Alger par l’expédition envoyée par Charles X' }
    ],
    exercise: {
      question: 'Quelle nation européenne reçut le soutien militaire de la France lors de la bataille navale de Navarin en 1827 ?',
      options: ['La Grèce', 'La Pologne', 'La Suisse', 'La Belgique'],
      correctIndex: 0,
      explanation: 'Soutenus par les intellectuels européens (Delacroix, Victor Hugo), les Grecs obtinrent leur indépendance face à l’Empire ottoman.'
    }
  },
  {
    id: 'p178-trois-glorieuses',
    page: 178,
    title: 'Les Trois Glorieuses',
    eraId: 'revolution-1914',
    kind: 'theme',
    dates: '27, 28 et 29 juillet 1830',
    subtitle: 'La révolution parisienne qui renverse Charles X et rétablit le drapeau tricolore',
    image: IMG_REVOLUTION,
    imageCaption: 'Les barricades de juillet 1830 immortalisées par Eugène Delacroix (La Liberté guidant le peuple).',
    imageObservation: 'En trois journées d’émeutes urbaines, ouvriers, étudiants et bourgeois mirent fin à la Restauration.',
    sections: [
      {
        heading: 'Les ordonnances de juillet et les barricades',
        body: 'Le 26 juillet 1830, Charles X publie les ordonnances de Saint-Cloud qui suppriment la liberté de la presse et réduisent encore le nombre d’électeurs. Dès le lendemain, les journalistes protestent (Adolphe Thiers) et Paris se couvre de barricades.'
      },
      {
        heading: 'Le triomphe des 27, 28 et 29 juillet 1830',
        body: 'Pendant trois jours surnommés les « Trois Glorieuses », les insurgés s’emparent de l’Hôtel de Ville et du Louvre, hissant le drapeau tricolore. Charles X abdique et part en exil. Les députés confient le trône à son cousin libéral, Louis-Philippe d’Orléans.'
      }
    ],
    keyTakeaways: [
      'Les 27, 28 et 29 juillet 1830 renversent Charles X à la suite des ordonnances contre la liberté de la presse.',
      'Le drapeau tricolore bleu-blanc-rouge redevient définitivement l’emblème de la France.',
      'Eugène Delacroix célèbre cet événement dans son célèbre tableau La Liberté guidant le peuple.'
    ],
    keyDates: [
      { date: '27 – 29 juillet 1830', label: 'Révolution des Trois Glorieuses à Paris' }
    ],
    exercise: {
      question: 'Quel peintre a immortalisé la révolution des Trois Glorieuses de 1830 dans La Liberté guidant le peuple ?',
      options: ['Jacques-Louis David', 'Eugène Delacroix', 'Claude Monet', 'Henri Matisse'],
      correctIndex: 1,
      explanation: 'Peint dès l’automne 1830 et exposé au Salon de 1831, le tableau d’Eugène Delacroix est conservé au Louvre.'
    }
  },
  {
    id: 'p180-romantisme',
    page: 180,
    title: 'Le romantisme',
    eraId: 'revolution-1914',
    kind: 'theme',
    dates: 'Première moitié du XIXe siècle',
    subtitle: 'L’émotion, la liberté créatrice et le goût de l’histoire dans les arts et les lettres',
    image: IMG_REVOLUTION,
    imageCaption: 'Poésie, peinture et musique célèbrent la passion, la nature et la liberté des peuples.',
    imageObservation: 'En rupture avec les règles strictes du classicisme, les romantiques placent la sensibilité au premier plan.',
    sections: [
      {
        heading: 'Une révolution de la sensibilité et du style',
        body: 'Apparu après la Révolution et l’Empire (Chateaubriand, Madame de Staël), le romantisme triomphe autour de 1830 (bataille d’Hernani de Victor Hugo). Il libère la poésie et le théâtre des règles classiques et explore la mélancolie, l’élan amoureux, la nature sauvage et la passion de la liberté (Lamartine, Musset, George Sand, Vigny).'
      },
      {
        heading: 'Peinture et musique romantiques',
        body: 'En peinture, Théodore Géricault (Le Radeau de la Méduse) et Eugène Delacroix privilégient le mouvement et la couleur. En musique, Hector Berlioz et Frédéric Chopin renouvellent la symphonie et le piano. Le romantisme redécouvre aussi le Moyen Âge et les cathédrales (Notre-Dame de Paris, Viollet-le-Duc).'
      }
    ],
    keyTakeaways: [
      'Le romantisme privilégie le sentiment, l’imagination et la liberté de l’artiste.',
      'Grands noms en France : Chateaubriand, Lamartine, Hugo, Musset, George Sand, Delacroix, Berlioz.',
      'Il nourrit aussi l’éveil du sentiment national et la sauvegarde du patrimoine médiéval.'
    ],
    keyDates: [
      { date: '1820', label: 'Méditations poétiques de Lamartine' },
      { date: '1830', label: 'Bataille d’Hernani (triomphe du drame romantique de Victor Hugo)' }
    ],
    exercise: {
      question: 'Quelle célèbre pièce de théâtre de Victor Hugo déclencha en 1830 une « bataille » entre classiques et romantiques ?',
      options: ['Le Cid', 'Hernani', 'Les Misérables', 'Cyrano de Bergerac'],
      correctIndex: 1,
      explanation: 'La première représentation d’Hernani à la Comédie-Française en février 1830 consacra le triomphe de la jeune école romantique.'
    }
  },
  {
    id: 'p182-louis-philippe',
    page: 182,
    title: 'Louis-Philippe Ier',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1773 – 1850',
    subtitle: 'La monarchie de Juillet : le « roi-citoyen » entre bourgeoisie d’affaires et oppositions',
    image: IMG_REVOLUTION,
    imageCaption: 'Sous la monarchie de Juillet (1830-1848), le « roi des Français » gouverne avec la bourgeoisie libérale.',
    imageObservation: 'La croissance économique s’accompagne d’une grande misère ouvrière et d’un blocage politique qui mènera à 1848.',
    sections: [
      {
        heading: 'Un « roi des Français » plus libéral au départ',
        body: 'Porté au pouvoir après les Trois Glorieuses de 1830, Louis-Philippe Ier n’est plus « roi de France » par la grâce de Dieu, mais « roi des Français » sous le drapeau tricolore. Il révise la Charte, supprime la censure et élargit légèrement le suffrage censitaire.'
      },
      {
        heading: 'Conservatisme et chute en février 1848',
        body: 'Soutenu par la haute bourgeoisie industrielle et financière (« Enrichissez-vous ! »), le régime réprime durement les révoltes ouvrières (canuts de Lyon en 1831 et 1834) et les insurrections républicaines. En refusant d’élargir le droit de vote, Louis-Philippe provoque la révolution de février 1848 et doit abdiquer.'
      }
    ],
    keyTakeaways: [
      'Louis-Philippe règne de 1830 à 1848 (monarchie de Juillet).',
      'La période voit le début des chemins de fer et la loi Guizot sur les écoles primaires (1833).',
      'Le refus du suffrage universel déclenche la révolution de février 1848.'
    ],
    keyDates: [
      { date: '1830', label: 'Avènement de Louis-Philippe Ier' },
      { date: '1831', label: 'Première révolte des canuts (ouvriers de la soie) à Lyon' },
      { date: 'Février 1848', label: 'Chute de Louis-Philippe et proclamation de la IIe République' }
    ],
    exercise: {
      question: 'Quel titre symbolique adopta Louis-Philippe Ier en 1830 pour marquer son lien avec la nation ?',
      options: ['Empereur d’Occident', 'Roi des Français', 'Premier consul', 'Roi de droit divin'],
      correctIndex: 1,
      explanation: 'Le passage de « roi de France » à « roi des Français » signifiait que sa légitimité venait de la nation et de la Charte.'
    }
  },
  {
    id: 'p184-age-industriel',
    page: 184,
    title: "L'âge industriel",
    eraId: 'revolution-1914',
    kind: 'theme',
    dates: 'XIXe siècle',
    subtitle: 'Charbon, machine à vapeur, métallurgie et révolution des chemins de fer',
    image: IMG_PARIS,
    imageCaption: 'L’industrialisation transforme les paysages, les villes et les transports en France.',
    imageObservation: 'Le réseau ferroviaire en étoile autour de Paris raccourcit les distances et unifie le marché national.',
    sections: [
      {
        heading: 'L’énergie du charbon et l’essor des usines',
        body: 'Au XIXe siècle, la France entre dans l’âge industriel : la machine à vapeur remplace progressivement l’énergie hydraulique et animale. Les grands bassins houillers et sidérurgiques (Nord-Pas-de-Calais, Lorraine, Saint-Étienne, Le Creusot avec les usines Schneider) produisent fonte et acier en grande quantité.'
      },
      {
        heading: 'La révolution du chemin de fer',
        body: 'Inaugurée pour les voyageurs entre Paris et Saint-Germain-en-Laye en 1837, la voie ferrée connaît une expansion fulgurante à partir des années 1840-1850. Le train facilite le transport des marchandises, l’exode rural vers les villes industrielles et les voyages.'
      }
    ],
    keyTakeaways: [
      'Charbon, machine à vapeur et acier (sidérurgie) sont les moteurs de la première industrialisation.',
      'Le chemin de fer transforme l’économie, les campagnes et le rythme de vie des Français.',
      'L’industrialisation fait émerger deux nouvelles classes : la bourgeoisie capitaliste et le prolétariat ouvrier.'
    ],
    keyDates: [
      { date: '1837', label: 'Inauguration de la ligne ferroviaire Paris – Saint-Germain-en-Laye' },
      { date: '1842', label: 'Grande loi ferroviaire traçant le réseau en étoile autour de Paris' }
    ],
    exercise: {
      question: 'Quelle source d’énergie alimentait les machines à vapeur et les locomotives de la première révolution industrielle ?',
      options: ['Le pétrole', 'Le charbon (houille)', 'L’énergie solaire', 'L’uranium'],
      correctIndex: 1,
      explanation: 'Le charbon extrait des mines du Nord, de Lorraine et du Massif central fournit l’énergie de base du XIXe siècle.'
    }
  },
  {
    id: 'p186-francois-guizot',
    page: 186,
    title: 'François Guizot',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1787 – 1874',
    subtitle: 'L’historien, le créateur des écoles primaires communales et le chef du gouvernement de Juillet',
    image: IMG_REPUBLIQUE,
    imageCaption: 'La loi Guizot de 1833 posa la première pierre du réseau d’écoles primaires en France.',
    imageObservation: 'Bien avant Jules Ferry, François Guizot obligea chaque commune à entretenir une école primaire pour les garçons.',
    sections: [
      {
        heading: 'La loi scolaire de 1833',
        body: 'Historien brillant et ministre de l’Instruction publique sous Louis-Philippe, François Guizot fait voter la loi du 28 juin 1833 : chaque commune doit désormais ouvrir une école primaire (pour les garçons) et chaque département créer une école normale pour former les instituteurs. L’école reste toutefois payante pour les familles aisées.'
      },
      {
        heading: 'Le chef conservateur face à la révolution de 1848',
        body: 'Chef de fait du gouvernement de 1840 à 1848, Guizot maintient la paix extérieure (« Entente cordiale ») mais refuse obstinément d’abaisser le cens électoral. L’interdiction des banquets réformistes en février 1848 provoque sa chute et celle du roi.'
      }
    ],
    keyTakeaways: [
      'La loi Guizot de 1833 généralise les écoles primaires publiques et les écoles normales d’instituteurs.',
      'Elle constitue une étape décisive vers l’alphabétisation du pays avant les lois Ferry.',
      'Sa fermeté conservatrice contre l’élargissement du droit de vote entraîne la révolution de 1848.'
    ],
    keyDates: [
      { date: '28 juin 1833', label: 'Loi Guizot sur l’instruction primaire' }
    ],
    exercise: {
      question: 'Qu’obligeait la loi Guizot de 1833 à chaque commune de France de créer et d’entretenir ?',
      options: ['Une gare ferroviaire', 'Une école primaire publique', 'Un musée', 'Un tribunal de commerce'],
      correctIndex: 1,
      explanation: 'La loi Guizot imposa une école primaire dans chaque commune et une école normale d’instituteurs par département.'
    }
  },
  {
    id: 'p188-abd-el-kader',
    page: 188,
    title: 'Abd el-Kader',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1808 – 1883',
    subtitle: 'L’émir qui mena la résistance algérienne face à la conquête française',
    image: IMG_REVOLUTION,
    imageCaption: 'La conquête de l’Algérie (1830-1847) et l’affrontement avec l’émir Abd el-Kader.',
    imageObservation: 'Stratège respecté jusque par ses adversaires, Abd el-Kader tenta de bâtir un État algérien unifié.',
    sections: [
      {
        heading: 'La résistance et l’État d’Abd el-Kader (1832 – 1847)',
        body: 'Proclamé émir à Mascara en 1832, le chef religieux et militaire Abd el-Kader unifie les tribus de l’Ouest algérien et organise un véritable État avec sa monnaie, ses impôts et sa capitale mobile (la smala). Après des trêves (traité de la Tafna, 1837), la guerre totale reprend face aux troupes du général Bugeaud.'
      },
      {
        heading: 'De la reddition à l’exil honoré à Damas',
        body: 'Après la prise de sa smala par le duc d’Aumale (1843) et l’usure d’une guerre très meurtrière, Abd el-Kader dépose les armes en décembre 1847. Retenu plusieurs années en France (Pau, Amboise), il est libéré par Louis-Napoléon Bonaparte en 1852 et se retire à Damas, où il sauvera des milliers de chrétiens lors des troubles de 1860.'
      }
    ],
    keyTakeaways: [
      'De 1832 à 1847, l’émir Abd el-Kader incarne la résistance algérienne à la conquête française.',
      'Il fait sa reddition en 1847 face aux troupes du maréchal Bugeaud et du duc d’Aumale.',
      'Figure respectée de tolérance et d’érudition, il reçoit plus tard la Grand-Croix de la Légion d’honneur.'
    ],
    keyDates: [
      { date: '1837', label: 'Traité de la Tafna entre Bugeaud et Abd el-Kader' },
      { date: '1843', label: 'Prise de la smala d’Abd el-Kader' },
      { date: '1847', label: 'Reddition d’Abd el-Kader' }
    ],
    exercise: {
      question: 'En quelle année l’émir Abd el-Kader mit-il fin à sa lutte armée en Algérie en déposant les armes ?',
      options: ['1830', '1847', '1870', '1962'],
      correctIndex: 1,
      explanation: 'Après quinze ans de résistance, Abd el-Kader se rendit au général Lamoricière et au duc d’Aumale en décembre 1847.'
    }
  },
  {
    id: 'p190-iie-republique',
    page: 190,
    title: 'La IIe République',
    eraId: 'revolution-1914',
    kind: 'theme',
    dates: '1848 – 1851',
    subtitle: 'Le suffrage universel masculin, l’abolition de l’esclavage et les journées de Juin',
    image: IMG_REVOLUTION,
    imageCaption: 'L’espoir fraternel du « printemps des peuples » de 1848 suivi de vives tensions sociales.',
    imageObservation: 'La IIe République instaure durablement le suffrage universel masculin en France.',
    sections: [
      {
        heading: 'Les grandes avancées démocratiques de 1848',
        body: 'Proclamée le 24 février 1848 par un gouvernement provisoire comprenant Lamartine, Arago et Louis Blanc, la IIe République instaure immédiatement le suffrage universel masculin (de 250 000 électeurs, on passe à 9 millions !), abolit la peine de mort en matière politique et supprime l’esclavage dans les colonies.'
      },
      {
        heading: 'Des journées de Juin au coup d’État de 1851',
        body: 'Pour résorber le chômage ouvrier, l’État crée les Ateliers nationaux à Paris, mais leur fermeture brutale en juin 1848 déclenche une sanglante insurrection ouvrière écrasée par le général Cavaignac. En décembre 1848, Louis-Napoléon Bonaparte est élu premier président de la République avant de renverser le régime le 2 décembre 1851.'
      }
    ],
    keyTakeaways: [
      'La IIe République proclame le suffrage universel masculin en mars 1848.',
      'Elle abolit définitivement l’esclavage (avril 1848).',
      'Élu président en décembre 1848, Louis-Napoléon Bonaparte met fin à la République par le coup d’État du 2 décembre 1851.'
    ],
    keyDates: [
      { date: '24 février 1848', label: 'Proclamation de la IIe République' },
      { date: 'Juin 1848', label: 'Insurrection ouvrière des journées de Juin' },
      { date: '10 déc. 1848', label: 'Élection de Louis-Napoléon Bonaparte à la présidence' }
    ],
    exercise: {
      question: 'Qui fut élu premier président de la République française au suffrage universel masculin en décembre 1848 ?',
      options: ['Alphonse de Lamartine', 'Louis-Napoléon Bonaparte', 'Adolphe Thiers', 'Victor Hugo'],
      correctIndex: 1,
      explanation: 'Neveu de Napoléon Ier, Louis-Napoléon Bonaparte remporta l’élection présidentielle avec près de 75 % des voix.'
    }
  },
  {
    id: 'p192-victor-schoelcher',
    page: 192,
    title: 'Victor Schœlcher',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1804 – 1893',
    subtitle: 'Le combat décisif pour l’abolition définitive de l’esclavage en 1848',
    image: IMG_REPUBLIQUE,
    imageCaption: 'Le décret du 27 avril 1848 affranchit plus de 250 000 esclaves dans les colonies françaises.',
    imageObservation: 'Par ce texte historique, le sol de la République française libère désormais quiconque le touche.',
    sections: [
      {
        heading: 'Une vie consacrée à la cause abolitionniste',
        body: 'Fils d’un fabricant de porcelaine parisien, Victor Schœlcher découvre la réalité de l’esclavage lors d’un voyage au Mexique, aux États-Unis et aux Antilles vers 1830. Devenu journaliste et essayiste, il dénonce sans relâche l’esclavage comme une honte morale et réclame une abolition immédiate et sans conditions.'
      },
      {
        heading: 'Le décret du 27 avril 1848',
        body: 'Nommé sous-secrétaire d’État aux Colonies par François Arago dès mars 1848, Schœlcher rédige et fait signer le décret du 27 avril 1848 qui abolit définitivement l’esclavage dans toutes les colonies et possessions françaises (Martinique, Guadeloupe, Guyane, La Réunion, Sénégal) et transforme les anciens esclaves en citoyens.'
      }
    ],
    keyTakeaways: [
      'Victor Schœlcher inspire et rédige le décret du 27 avril 1848 abolissant définitivement l’esclavage en France.',
      'Plus de 250 000 personnes deviennent libres et citoyennes à part entière.',
      'Victor Schœlcher repose au Panthéon depuis 1949 aux côtés de Félix Éboué.'
    ],
    keyDates: [
      { date: '27 avril 1848', label: 'Signature du décret d’abolition définitive de l’esclavage' }
    ],
    exercise: {
      question: 'En quelle année Victor Schœlcher fit-il adopter le décret d’abolition définitive de l’esclavage dans les colonies françaises ?',
      options: ['1789', '1830', '1848', '1881'],
      correctIndex: 2,
      explanation: 'Le 27 avril 1848, la IIe République mit définitivement fin à l’esclavage rétabli en 1802.'
    }
  },
  {
    id: 'p194-second-empire',
    page: 194,
    title: 'Le Second Empire',
    eraId: 'revolution-1914',
    kind: 'theme',
    dates: '1852 – 1870',
    subtitle: 'De l’Empire autoritaire à l’Empire libéral et à la politique des nationalités',
    image: IMG_PARIS,
    imageCaption: 'Le Second Empire modernise le pays tout en menant une diplomatie européenne active.',
    imageObservation: 'Nice et la Savoie rejoignent définitivement la France en 1860 par plébiscite.',
    sections: [
      {
        heading: 'Du coup d’État du 2 décembre 1851 à l’Empire autoritaire',
        body: 'Le 2 décembre 1851 (anniversaire d’Austerlitz), Louis-Napoléon Bonaparte dissout l’Assemblée et rétablit le suffrage universel masculin. Un an plus tard, le 2 décembre 1852, il devient empereur sous le nom de Napoléon III. Les premières années sont autoritaires : contrôle de la presse, candidats officiels aux élections et exil des opposants comme Victor Hugo.'
      },
      {
        heading: 'L’évolution vers l’Empire libéral (1860 – 1870)',
        body: 'À partir de 1860, Napoléon III assouplit le régime : il accorde le droit de grève aux ouvriers (1864), desserre la censure de la presse et donne davantage de pouvoirs au Corps législatif. En politique extérieure, la France intervient en Crimée (1854-1856) et soutient l’unité italienne (Solférino, 1859), recevant Nice et la Savoie en 1860, mais s’enlise au Mexique.'
      }
    ],
    keyTakeaways: [
      'Le Second Empire dure de 1852 à 1870 et se divise en phase autoritaire puis phase libérale.',
      'En 1860, la Savoie et le comté de Nice sont rattachés à la France après référendum.',
      'En 1864, les ouvriers obtiennent le droit de grève.'
    ],
    keyDates: [
      { date: '2 déc. 1852', label: 'Proclamation du Second Empire par Napoléon III' },
      { date: '1860', label: 'Rattachement de la Savoie et de Nice à la France' },
      { date: '1864', label: 'Reconnaissance légale du droit de grève' }
    ],
    exercise: {
      question: 'Quelles deux régions françaises sont rattachées à la France en 1860 sous le Second Empire ?',
      options: [
        'L’Alsace et la Lorraine',
        'La Savoie et le comté de Nice',
        'La Bretagne et l’Anjou',
        'La Corse et la Provence'
      ],
      correctIndex: 1,
      explanation: 'À la suite de l’aide française à l’unité italienne, la Savoie et Nice devinrent françaises après plébiscite en 1860.'
    }
  },
  {
    id: 'p196-napoleon-iii',
    page: 196,
    title: 'Napoléon III',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1808 – 1873',
    subtitle: 'L’empereur modernisateur emporté par la défaite de Sedan en 1870',
    image: IMG_PARIS,
    imageCaption: 'Souverain attentif au progrès technique, Napoléon III accueille les Expositions universelles à Paris.',
    imageObservation: 'Son règne vit une transformation sans précédent des banques, des transports et de la capitale.',
    sections: [
      {
        heading: 'Un souverain saint-simonien',
        body: 'Fils de Louis Bonaparte et d’Hortense de Beauharnais, Louis-Napoléon Bonaparte passa une grande partie de sa jeunesse en exil. Passionné par les questions industrielles et sociales (L’Extinction du paupérisme), il soutint activement les grands travaux, le libre-échange (traité de 1860 avec l’Angleterre) et l’essor bancaire.'
      },
      {
        heading: 'De l’Exposition universelle de 1867 au drame de Sedan',
        body: 'L’Exposition universelle de 1867 marque l’apogée mondain du Second Empire à Paris. Mais la montée en puissance de la Prusse de Bismarck fragilise sa diplomatie. Pris au piège de la guerre de 1870, Napoléon III capitule à Sedan le 2 septembre 1870, est déchu le 4 septembre et meurt en exil en Angleterre en 1873.'
      }
    ],
    keyTakeaways: [
      'Napoléon III favorise la modernisation économique, les grands travaux et le crédit bancaire.',
      'Il promeut le libre-échange et les Expositions universelles de Paris (1855 et 1867).',
      'Sa défaite à Sedan le 2 septembre 1870 entraîne la chute du Second Empire.'
    ],
    keyDates: [
      { date: '1867', label: 'Grande Exposition universelle de Paris' },
      { date: '2 sept. 1870', label: 'Capitulation de Napoléon III à Sedan' }
    ],
    exercise: {
      question: 'À la suite de quelle défaite militaire Napoléon III est-il fait prisonnier et déchu en septembre 1870 ?',
      options: ['Waterloo', 'Sedan', 'Verdun', 'Marignan'],
      correctIndex: 1,
      explanation: 'Encerclé dans Sedan le 2 septembre 1870 par l’armée prussienne, Napoléon III capitula ; la République fut proclamée à Paris le 4 septembre.'
    }
  },
  {
    id: 'p198-mutations-economiques-second-empire',
    page: 198,
    title: 'Les mutations économiques et sociales sous le Second Empire',
    eraId: 'revolution-1914',
    kind: 'theme',
    dates: '1852 – 1870',
    subtitle: 'Grands magasins, banques de dépôt, réseau ferré et essor des villes',
    image: IMG_PARIS,
    imageCaption: 'L’apparition des grands boulevards, des gares monumentales et des grands magasins parisiens.',
    imageObservation: 'La consommation moderne et l’épargne populaire se développent au cœur du XIXe siècle.',
    sections: [
      {
        heading: 'Banques modernes et grands magasins',
        body: 'Pour financer l’industrie et les chemins de fer (multipliés par cinq entre 1850 et 1870), naissent de grandes banques de dépôt (Crédit Lyonnais, Société Générale, Crédit Foncier). À Paris, Aristide Boucicaut crée Le Bon Marché (1852), premier grand magasin pratiquant prix fixes, entrée libre et soldes.'
      },
      {
        heading: 'L’exode rural et le basculement urbain',
        body: 'Tandis que la mécanisation progresse, des millions de paysans quittent les campagnes pour travailler dans les mines, les chantiers et les usines des villes. La France reste majoritairement rurale, mais les métropoles (Paris, Lyon, Marseille, Lille) connaissent une croissance spectaculaire.'
      }
    ],
    keyTakeaways: [
      'Le réseau ferroviaire passe d’environ 3 000 km à plus de 17 000 km sous le Second Empire.',
      'Les grandes banques de dépôt et les grands magasins (Le Bon Marché) voient le jour.',
      'L’urbanisation s’accélère tandis que la bourgeoisie et le monde ouvrier grandissent.'
    ],
    keyDates: [
      { date: '1852', label: 'Création du Bon Marché à Paris par Aristide Boucicaut' },
      { date: '1863', label: 'Fondation du Crédit Lyonnais' }
    ],
    exercise: {
      question: 'Quel premier grand magasin moderne fondé en 1852 à Paris inventa les prix affichés et l’entrée libre ?',
      options: ['Le Bon Marché', 'Les Galeries Lafayette', 'Le Louvre', 'La Samaritaine'],
      correctIndex: 0,
      explanation: 'Aristide Boucicaut et son épouse Marguerite firent du Bon Marché un modèle commercial imité dans le monde entier.'
    }
  },
  {
    id: 'p200-haussmann',
    page: 200,
    title: 'Georges Eugène Haussmann',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1809 – 1891',
    subtitle: 'Le préfet de la Seine qui transforma Paris en capitale moderne',
    image: IMG_PARIS,
    imageCaption: 'Les larges avenues haussmanniennes, les ponts de la Seine et les immeubles en pierre de taille.',
    imageObservation: 'Observez l’architecture homogène des immeubles parisiens à cinq ou six étages, balcons filants et toits d’ardoise.',
    sections: [
      {
        heading: 'Aérer, assainir et embellir Paris',
        body: 'Nommé préfet de la Seine par Napoléon III en 1853, le baron Georges Eugène Haussmann entreprend pendant dix-sept ans une métamorphose complète de Paris, jusque-là encombré de ruelles étroites et insalubres (épidémies de choléra).'
      },
      {
        heading: 'Boulevards, égouts, parcs et gares',
        body: 'Haussmann perce de grandes avenues rectilignes (Champs-Élysées, boulevard Saint-Michel, boulevard Haussmann) bordées d’immeubles réguliers en pierre de taille, facilite la circulation entre les nouvelles gares, aménage des parcs (Bois de Boulogne, Buttes-Chaumont), construit des réseaux d’eau potable et d’égouts (Belgrand) et fait bâtir l’Opéra Garnier.'
      }
    ],
    keyTakeaways: [
      'Entre 1853 et 1870, le baron Haussmann dessine le visage moderne de Paris.',
      'Les travaux améliorent l’hygiène (eau courante, égouts), la lumière et la circulation (et limitent les barricades).',
      'En 1860, Paris s’agrandit de 12 à 20 arrondissements.'
    ],
    keyDates: [
      { date: '1853 – 1870', label: 'Grands travaux d’urbanisme du baron Haussmann à Paris' },
      { date: '1860', label: 'Passage de Paris de 12 à 20 arrondissements' }
    ],
    exercise: {
      question: 'Quelle fonction occupait Georges Eugène Haussmann lorsqu’il dirigea la transformation de Paris sous Napoléon III ?',
      options: ['Maire de Lyon', 'Préfet de la Seine', 'Architecte de Versailles', 'Ministre de la Guerre'],
      correctIndex: 1,
      explanation: 'Préfet de la Seine de 1853 à 1870, Haussmann disposa de la confiance directe de Napoléon III pour mener ces chantiers colossaux.'
    }
  },
  {
    id: 'p202-monde-ouvrier',
    page: 202,
    title: 'Le monde ouvrier',
    eraId: 'revolution-1914',
    kind: 'theme',
    dates: 'XIXe siècle',
    subtitle: 'Conditions de travail difficiles, naissance des syndicats et conquêtes sociales',
    image: IMG_REPUBLIQUE,
    imageCaption: 'Dans les usines et les mines du XIXe siècle, les ouvriers s’organisent pour défendre leurs droits.',
    imageObservation: 'La prise de conscience ouvrière aboutit progressivement à la limitation du travail des enfants et à la création des syndicats.',
    sections: [
      {
        heading: 'La dureté de la condition ouvrière',
        body: 'Dans les filatures textiles, les mines et la métallurgie du XIXe siècle, les journées atteignent 12 à 15 heures pour de maigres salaires, sans retraite ni assurance maladie. Femmes et enfants travaillent dès leur plus jeune âge jusqu’à la première loi de 1841 interdisant le travail des enfants de moins de 8 ans.'
      },
      {
        heading: 'Grèves et naissance du syndicalisme',
        body: 'Longtemps interdits par la loi Le Chapelier (1791), les regroupements ouvriers arrachent progressivement leurs droits : le droit de grève est reconnu en 1864, et la loi Waldeck-Rousseau de 1884 autorise la création des syndicats professionnels (naissance de la CGT en 1895).'
      }
    ],
    keyTakeaways: [
      'Au XIXe siècle, les ouvriers subissent de longues journées de travail, la précarité et des logements exigus.',
      'Des lois sociales progressent lentement : loi de 1841 (travail des enfants), 1864 (droit de grève), 1884 (syndicats).',
      'Émile Zola décrit avec force la vie des mineurs dans Germinal (1885).'
    ],
    keyDates: [
      { date: '1841', label: 'Première loi limitant le travail des enfants (seuil de 8 ans)' },
      { date: '1884', label: 'Loi Waldeck-Rousseau autorisant les syndicats' }
    ],
    exercise: {
      question: 'Que permet la loi Waldeck-Rousseau votée sous la IIIe République en 1884 ?',
      options: [
        'Le travail gratuit à l’usine',
        'La création légale des syndicats professionnels',
        'L’interdiction des chemins de fer',
        'Le retour du cens électoral'
      ],
      correctIndex: 1,
      explanation: 'La loi du 21 mars 1884 reconnut aux travailleurs et patrons le droit de former librement des syndicats.'
    }
  },
  {
    id: 'p204-fourier-proudhon',
    page: 204,
    title: 'Charles Fourier et Pierre-Joseph Proudhon',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: 'Première moitié du XIXe siècle',
    subtitle: 'Les penseurs français du socialisme coopératif, de l’entraide et de la justice sociale',
    image: IMG_REPUBLIQUE,
    imageCaption: 'Les grands courants d’idées sociales imaginés au XIXe siècle face aux inégalités industrielles.',
    imageObservation: 'Fourier et Proudhon cherchèrent à remplacer l’exploitation industrielle par la coopération et la mutualité.',
    sections: [
      {
        heading: 'Charles Fourier et le phalanstère',
        body: 'Révolté par le gâchis commercial et la misère ouvrière, Charles Fourier imagine une société harmonieuse organisée en communautés coopératives appelées phalanstères, où chacun choisirait des tâches variées selon ses goûts. Son modèle inspirera le Familistère de Guise créé par Jean-Baptiste Godin.'
      },
      {
        heading: 'Pierre-Joseph Proudhon, père du mutuellisme',
        body: 'Ouvrier typographe autodidacte de Besançon, Pierre-Joseph Proudhon dénonce l’inégalité dans Qu’est-ce que la propriété ? (1840) et défend le fédéralisme, l’autogestion ouvrière et les sociétés de secours mutuels (mutuellisme), influençant profondément le mouvement ouvrier français.'
      }
    ],
    keyTakeaways: [
      'Au XIXe siècle émergent des théories socialistes visant à corriger les injustices du capitalisme industriel.',
      'Fourier imagine le phalanstère coopératif ; Proudhon défend le mutuellisme et l’association ouvrière.',
      'Leurs idées nourrissent l’essor des coopératives et des mutuelles en France.'
    ],
    keyDates: [
      { date: '1840', label: 'Publication de Qu’est-ce que la propriété ? de Proudhon' },
      { date: '1859', label: 'Création du Familistère de Guise inspiré des idées de Fourier' }
    ],
    exercise: {
      question: 'Comment Charles Fourier appelait-il les communautés coopératives idéales qu’il imaginait au XIXe siècle ?',
      options: ['Les ateliers nationaux', 'Les phalanstères', 'Les oppida', 'Les phalanges royales'],
      correctIndex: 1,
      explanation: 'Un phalanstère devait réunir environ 1 600 personnes vivant et travaillant en association dans un grand palais communautaire.'
    }
  },
  {
    id: 'p206-victor-hugo',
    page: 206,
    title: 'Victor Hugo',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1802 – 1885',
    subtitle: 'Le géant des lettres françaises, conscience républicaine et défenseur des misérables',
    image: IMG_REPUBLIQUE,
    imageCaption: 'Poète, romancier, dramaturge et sénateur, Victor Hugo accompagna tout le XIXe siècle français.',
    imageObservation: 'Ses funérailles nationales en 1885 rassemblèrent près de deux millions de Parisiens jusqu’au Panthéon.',
    sections: [
      {
        heading: 'Le chef de file littéraire et le défenseur de la justice',
        body: 'Écrivain prolifique dès sa jeunesse, Victor Hugo triomphe dans tous les genres : poésie (Les Contemplations), théâtre (Hernani, Ruy Blas) et roman (Notre-Dame de Paris, Les Misérables en 1862). Député dès 1848, il prononce de grands discours contre la misère, pour l’instruction gratuite et contre la peine de mort.'
      },
      {
        heading: 'L’exil sous le Second Empire et le Panthéon',
        body: 'Opposant farouche au coup d’État de Napoléon III en 1851 (« Napoléon le Petit »), Hugo s’exile pendant dix-neuf ans à Jersey puis Guernesey avant de rentrer triomphalement en 1870 lors de la proclamation de la République. À sa mort en 1885, le Panthéon est rouvert pour accueillir ses cendres.'
      }
    ],
    keyTakeaways: [
      'Victor Hugo est l’écrivain le plus célèbre et le plus engagé du XIXe siècle français.',
      'Il combat la peine de mort (Le Dernier Jour d’un condamné) et la pauvreté (Les Misérables).',
      'Exilé dix-neuf ans par fidélité républicaine, il reçoit en 1885 des funérailles nationales au Panthéon.'
    ],
    keyDates: [
      { date: '1851 – 1870', label: 'Exil de Victor Hugo à Jersey et Guernesey' },
      { date: '1862', label: 'Publication des Misérables' },
      { date: '1885', label: 'Funérailles nationales et entrée de Victor Hugo au Panthéon' }
    ],
    quote: {
      text: 'Ouvrez des écoles, vous fermerez des prisons.',
      author: 'Formule célèbre attribuée à Victor Hugo'
    },
    exercise: {
      question: 'Quel célèbre roman publié par Victor Hugo en 1862 raconte la vie de Jean Valjean et dénonce la misère sociale ?',
      options: ['Germinal', 'Les Misérables', 'Madame Bovary', 'Le Comte de Monte-Cristo'],
      correctIndex: 1,
      explanation: 'Écrit en grande partie durant son exil à Guernesey, Les Misérables connut un immense retentissement populaire.'
    }
  },
  {
    id: 'p208-guerre-1870',
    page: 208,
    title: 'La guerre franco-allemande de 1870-1871',
    eraId: 'revolution-1914',
    kind: 'theme',
    dates: 'Juillet 1870 – Mai 1871',
    subtitle: 'De Sedan au siège de Paris et à la perte de l’Alsace-Moselle',
    image: IMG_REPUBLIQUE,
    imageCaption: 'La carte de France affichée dans les écoles de la IIIe République rappelait le deuil des provinces perdues.',
    imageObservation: 'Remarquez sur la carte murale de la salle de classe le tracé amputé de l’Alsace et de la Moselle après 1871.',
    sections: [
      {
        heading: 'Une guerre mal préparée et la chute de l’Empire',
        body: 'Provoquée par le chancelier prussien Otto von Bismarck (dépêche d’Ems), la guerre éclate en juillet 1870. Mal organisée face aux armées allemandes coalisées, l’armée française est battue en Lorraine puis encerclée à Sedan où Napoléon III capitule le 2 septembre 1870.'
      },
      {
        heading: 'Le siège de Paris et le traité de Francfort (1871)',
        body: 'La République proclamée le 4 septembre organise la résistance (Léon Gambetta s’échappe de Paris assiégé en ballon), mais Paris affamé doit capituler en janvier 1871. Par le traité de Francfort (10 mai 1871), la France cède à l’Empire allemand nouvellement proclamé à Versailles l’Alsace et une partie de la Lorraine (Moselle) et verse 5 milliards de francs-or.'
      }
    ],
    keyTakeaways: [
      'La défaite de Sedan (2 septembre 1870) entraîne la chute du Second Empire.',
      'Paris résiste héroïquement à un long siège durant l’hiver 1870-1871.',
      'Par le traité de Francfort (1871), la France perd l’Alsace et la Moselle, nourrissant un désir de revanche jusqu’en 1914.'
    ],
    keyDates: [
      { date: '4 sept. 1870', label: 'Proclamation de la République à l’Hôtel de Ville de Paris' },
      { date: '10 mai 1871', label: 'Traité de Francfort cédant l’Alsace-Moselle à l’Allemagne' }
    ],
    exercise: {
      question: 'Quelles provinces françaises furent annexées par l’Empire allemand au traité de Francfort en 1871 ?',
      options: [
        'La Savoie et Nice',
        'L’Alsace et une partie de la Lorraine (Moselle)',
        'La Flandre et l’Artois',
        'La Normandie et le Maine'
      ],
      correctIndex: 1,
      explanation: 'L’Alsace (sauf Belfort) et la Moselle restèrent allemandes de 1871 jusqu’à la victoire de 1918.'
    }
  },
  {
    id: 'p210-iiie-republique',
    page: 210,
    title: 'La IIIe République',
    eraId: 'revolution-1914',
    kind: 'theme',
    dates: '1870 – 1940',
    subtitle: 'L’installation durable de la démocratie parlementaire et des grandes libertés',
    image: IMG_REPUBLIQUE,
    imageCaption: 'Sous la IIIe République, l’école publique forme les citoyens et ancre les valeurs républicaines.',
    imageObservation: 'C’est le régime républicain qui dura le plus longtemps en France (70 ans) et institua nos grandes libertés publiques.',
    sections: [
      {
        heading: 'Des débuts monarchistes au triomphe des républicains',
        body: 'Proclamée le 4 septembre 1870, la IIIe République est d’abord dominée par une Assemblée monarchiste divisée entre légitimistes et orléanistes. En 1875, les lois constitutionnelles instaurent un régime parlementaire à deux chambres (Chambre des députés et Sénat) et un président de la République (amendement Wallon adopté à une voix de majorité).'
      },
      {
        heading: 'Les lois fondatrices des libertés (1879 – 1884)',
        body: 'Devenus majoritaires dès 1879, les républicains font de la Marseillaise l’hymne national et du 14 Juillet la fête nationale (1880). Ils votent la liberté de réunion, la liberté de la presse (1881), l’élection des maires par les conseils municipaux (1882) et le droit syndical (1884).'
      }
    ],
    keyTakeaways: [
      'Les lois constitutionnelles de 1875 organisent durablement la IIIe République.',
      'En 1880, le 14 Juillet devient fête nationale et La Marseillaise hymne officiel.',
      'En 1881-1884 sont votées les grandes lois sur la presse, l’école, les communes et les syndicats.'
    ],
    keyDates: [
      { date: '1875', label: 'Adoption des lois constitutionnelles de la IIIe République' },
      { date: '1880', label: 'Le 14 Juillet devient fête nationale' },
      { date: '1881', label: 'Loi sur la liberté de la presse' }
    ],
    exercise: {
      question: 'En quelle année le 14 Juillet a-t-il été institué officiellement Fête nationale de la République française ?',
      options: ['1789', '1848', '1880', '1918'],
      correctIndex: 2,
      explanation: 'Votée en juillet 1880 sous la IIIe République, la loi commémore à la fois la prise de la Bastille (1789) et la fête de la Fédération (1790).'
    }
  },
  {
    id: 'p212-thiers-gambetta',
    page: 212,
    title: 'Adolphe Thiers et Léon Gambetta',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1870 – 1882',
    subtitle: 'Les deux artisans de l’enracinement de la République après 1870',
    image: IMG_REPUBLIQUE,
    imageCaption: 'Deux figures complémentaires de la naissance et de la consolidation républicaine.',
    imageObservation: 'Gambetta sut rallier les campagnes à la République par sa tournée infatigable en province.',
    sections: [
      {
        heading: 'Adolphe Thiers, premier président de la IIIe République',
        body: 'Ancien ministre de Louis-Philippe et historien, Adolphe Thiers devient chef du pouvoir exécutif en 1871 puis président de la République. S’il réprime implacablement la Commune de Paris, il signe la paix, libère rapidement le territoire de l’occupation allemande en payant l’indemnité de guerre et se rallie à une « République conservatrice » (« le régime qui nous divise le moins »).'
      },
      {
        heading: 'Léon Gambetta, l’âme de la République démocratique',
        body: 'Héros de la défense nationale en 1870 après son envol en ballon de Paris assiégé, le brillant avocat Léon Gambetta mène campagne dans toute la France pour convaincre les paysans et la petite bourgeoisie (« les couches nouvelles ») que la République garantit l’ordre, la paix et le progrès.'
      }
    ],
    keyTakeaways: [
      'Thiers organise la libération anticipée du territoire occupé après 1871 et accepte la République.',
      'Gambetta incarne la résistance de 1870 et l’enracinement populaire de la IIIe République.',
      'La victoire électorale des républicains en 1877 confirme la suprématie du Parlement.'
    ],
    keyDates: [
      { date: '1871 – 1873', label: 'Présidence d’Adolphe Thiers' },
      { date: '1877', label: 'Victoire des républicains menés par Gambetta face à Mac Mahon' }
    ],
    exercise: {
      question: 'Comment Léon Gambetta quitta-t-il Paris assiégé en octobre 1870 pour aller organiser la résistance en province ?',
      options: ['En sous-marin', 'En ballon monté (aérostat)', 'En TGV', 'À pied déguisé en prussien'],
      correctIndex: 1,
      explanation: 'Le 7 octobre 1870, Gambetta s’envola de Montmartre à bord du ballon l’Armand-Barbès pour rejoindre Tours.'
    }
  },
  {
    id: 'p214-louise-michel-commune',
    page: 214,
    title: 'Louise Michel et la Commune',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: 'Mars – Mai 1871',
    subtitle: 'L’insurrection parisienne de 1871 et les idéaux sociaux et laïques des communards',
    image: IMG_REVOLUTION,
    imageCaption: 'La Commune de Paris (18 mars – 28 mai 1871) et l’engagement de l’institutrice Louise Michel.',
    imageObservation: 'Écrasée lors de la Semaine sanglante, la Commune inspira durablement les combats sociaux et féministes.',
    sections: [
      {
        heading: 'Le soulèvement du 18 mars 1871',
        body: 'Humiliés par la capitulation et la perte de l’Alsace-Moselle, en désaccord avec une Assemblée conservatrice siégeant à Versailles, les Parisiens et la Garde nationale se soulèvent le 18 mars 1871 lorsque Thiers tente de reprendre les canons de Montmartre. Un conseil municipal révolutionnaire, la Commune de Paris, est élu.'
      },
      {
        heading: 'Louise Michel et la Semaine sanglante',
        body: 'En 72 jours, la Commune décrète la séparation de l’Église et de l’État, l’instruction laïque et la gestion ouvrière des ateliers abandonnés. L’institutrice Louise Michel soigne les blessés, anime les clubs féminins et combat sur les barricades. Fin mai 1871, l’armée versaillaise écrase Paris durant la « Semaine sanglante » (près de 20 000 morts) ; Louise Michel est déportée en Nouvelle-Calédonie jusqu’à l’amnistie de 1880.'
      }
    ],
    keyTakeaways: [
      'La Commune de Paris (mars-mai 1871) naît du refus de la capitulation et d’aspirations démocratiques et sociales.',
      'Elle proclame la laïcité de l’enseignement et l’égalité des salaires féminins.',
      'Louise Michel, surnommée la « Vierge rouge », demeure la figure emblématique des communards.'
    ],
    keyDates: [
      { date: '18 mars 1871', label: 'Soulèvement parisien et naissance de la Commune' },
      { date: '21 – 28 mai 1871', label: '« Semaine sanglante » et chute de la Commune' }
    ],
    exercise: {
      question: 'Quel métier exerçait Louise Michel avant de devenir l’une des grandes figures de la Commune de Paris en 1871 ?',
      options: ['Avocate', 'Institutrice', 'Médecin', 'Journaliste sportive'],
      correctIndex: 1,
      explanation: 'Institutrice républicaine et pédagogue novatrice à Montmartre, Louise Michel défendit avec passion l’école laïque pour les filles.'
    }
  },
  {
    id: 'p216-jules-ferry',
    page: 216,
    title: 'Jules Ferry',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1832 – 1893',
    subtitle: 'L’artisan de l’école primaire gratuite, laïque et obligatoire (1881 – 1882)',
    image: IMG_REPUBLIQUE,
    imageCaption: 'Salle de classe de la IIIe République avec carte de France, encriers et instituteur.',
    imageObservation: 'Les « hussards noirs de la République » instruisirent des générations d’écoliers dans tout le pays.',
    sections: [
      {
        heading: 'Les lois scolaires de 1881 et 1882',
        body: 'Ministre de l’Instruction publique puis président du Conseil, le républicain vosgien Jules Ferry estime que la démocratie exige des citoyens instruits. Par les lois du 16 juin 1881 et du 28 mars 1882, l’école primaire publique devient gratuite, laïque (l’instruction morale et civique remplace l’enseignement religieux) et obligatoire de 6 à 13 ans pour les filles comme pour les garçons.'
      },
      {
        heading: 'L’enseignement secondaire féminin et la politique coloniale',
        body: 'Avec Camille Sée, il ouvre les premiers lycées de jeunes filles (1880) et crée l’École normale supérieure de Sèvres pour former les professeures. Par ailleurs, Jules Ferry soutient activement l’expansion coloniale française (Tunisie, Tonkin, Madagascar), ce qui suscite l’opposition vive de Clemenceau à la Chambre.'
      }
    ],
    keyTakeaways: [
      'En 1881-1882, Jules Ferry rend l’école primaire gratuite, laïque et obligatoire pour tous les enfants.',
      'Il développe aussi la formation des maîtres et les lycées de jeunes filles.',
      'Il est également l’un des principaux promoteurs de l’expansion coloniale de la IIIe République.'
    ],
    keyDates: [
      { date: '16 juin 1881', label: 'Loi établissant la gratuité absolue de l’enseignement primaire public' },
      { date: '28 mars 1882', label: 'Loi rendant l’instruction primaire obligatoire et laïque' }
    ],
    exercise: {
      question: 'Entre quels âges l’instruction primaire devint-elle obligatoire grâce à la loi Jules Ferry du 28 mars 1882 ?',
      options: ['De 3 à 10 ans', 'De 6 à 13 ans', 'De 10 à 18 ans', 'Uniquement à 12 ans'],
      correctIndex: 1,
      explanation: 'La loi de 1882 imposait la scolarisation obligatoire des filles et des garçons de 6 à 13 ans révolus.'
    }
  },
  {
    id: 'p218-progres-scientifiques',
    page: 218,
    title: 'Les progrès scientifiques et technologiques',
    eraId: 'revolution-1914',
    kind: 'theme',
    dates: 'Fin XIXe – 1914',
    subtitle: 'Électricité, automobile, aviation, cinématographe et tour Eiffel',
    image: IMG_PARIS,
    imageCaption: 'Érigée en 1889, la tour Eiffel incarne la maîtrise française de la construction métallique et des techniques.',
    imageObservation: 'La seconde révolution industrielle (électricité et moteur à explosion) transforme la vie quotidienne.',
    sections: [
      {
        heading: 'La fée Électricité et la tour Eiffel (1889)',
        body: 'À la fin du XIXe siècle, l’électricité (dynamo de Gramme, éclairage urbain, hydroélectricité dans les Alpes), le téléphone et les nouveaux métaux bouleversent les villes. Pour le centenaire de la Révolution lors de l’Exposition universelle de 1889, Gustave Eiffel dresse la plus haute tour du monde (300 m) en fer puddlé.'
      },
      {
        heading: 'Cinéma, automobile et aviation',
        body: 'La France est pionnière des grandes inventions de l’époque : les frères Auguste et Louis Lumière inventent le cinématographe à Lyon en 1895 ; l’automobile prend son essor (Panhard, Peugeot, Renault) ; Clément Ader puis Louis Blériot (traversée de la Manche en 1909) ouvrent l’ère de l’aviation.'
      }
    ],
    keyTakeaways: [
      'La seconde révolution industrielle repose sur l’électricité, le pétrole et la chimie.',
      '1889 : Gustave Eiffel inaugure la tour Eiffel ; 1895 : les frères Lumière inventent le cinématographe.',
      '1909 : Louis Blériot traverse la Manche en avion pour la première fois.'
    ],
    keyDates: [
      { date: '1889', label: 'Inauguration de la tour Eiffel pour l’Exposition universelle' },
      { date: '1895', label: 'Première projection publique du cinématographe des frères Lumière' },
      { date: '1909', label: 'Traversée de la Manche en avion par Louis Blériot' }
    ],
    exercise: {
      question: 'À l’occasion de quel événement la tour Eiffel fut-elle inaugurée à Paris en 1889 ?',
      options: [
        'Le sacre de Napoléon III',
        'L’Exposition universelle célébrant le centenaire de 1789',
        'La fin de la Première Guerre mondiale',
        'Les Jeux olympiques de 1924'
      ],
      correctIndex: 1,
      explanation: 'Construite en un peu plus de deux ans par Gustave Eiffel et ses ingénieurs, la tour servit de porte d’entrée à l’Exposition universelle de 1889.'
    }
  },
  {
    id: 'p220-louis-pasteur',
    page: 220,
    title: 'Louis Pasteur',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1822 – 1895',
    subtitle: 'La découverte des microbes, la pasteurisation et le vaccin contre la rage',
    image: IMG_REPUBLIQUE,
    imageCaption: 'Les travaux de Louis Pasteur révolutionnent l’hygiène, l’agriculture et la médecine mondiale.',
    imageObservation: 'La mise au point du vaccin antirabique en 1885 sauva le jeune Joseph Meister et donna naissance à l’Institut Pasteur.',
    sections: [
      {
        heading: 'La fin de la génération spontanée et l’hygiène',
        body: 'Chimiste et physicien de formation né dans le Jura, Louis Pasteur démontre dans les années 1860 que les fermentations et de nombreuses maladies sont causées par des micro-organismes invisibles (les microbes), et non par une « génération spontanée ». Il invente la pasteurisation (chauffage des boissons pour détruire les germes) et promeut l’asepsie en chirurgie.'
      },
      {
        heading: 'Le vaccin contre la rage (1885) et l’Institut Pasteur',
        body: 'Après avoir vaincu la maladie des vers à soie et le charbon du bétail, Pasteur met au point le vaccin contre la rage. En juillet 1885, il l’administre avec succès au jeune berger alsacien Joseph Meister, mordu par un chien enragé. Grâce à une souscription internationale est fondé l’Institut Pasteur en 1888.'
      }
    ],
    keyTakeaways: [
      'Louis Pasteur prouve le rôle des microbes dans les maladies infectieuses et fonde la microbiologie.',
      'En 1885, il réussit la première vaccination humaine contre la rage sur le jeune Joseph Meister.',
      'L’Institut Pasteur (1888) devient un centre mondial de recherche médicale.'
    ],
    keyDates: [
      { date: '1865', label: 'Brevet de la pasteurisation' },
      { date: '1885', label: 'Premier vaccin humain réussi contre la rage' },
      { date: '1888', label: 'Inauguration de l’Institut Pasteur à Paris' }
    ],
    exercise: {
      question: 'Contre quelle maladie mortelle Louis Pasteur réussit-il la première vaccination sur le jeune Joseph Meister en 1885 ?',
      options: ['La peste noire', 'La rage', 'Le scorbut', 'La grippe espagnole'],
      correctIndex: 1,
      explanation: 'Le succès spectaculaire du vaccin contre la rage consacra la gloire universelle de Louis Pasteur.'
    }
  },
  {
    id: 'p222-affaire-dreyfus',
    page: 222,
    title: "L'Affaire Dreyfus",
    eraId: 'revolution-1914',
    kind: 'theme',
    dates: '1894 – 1906',
    subtitle: 'Une erreur judiciaire antisémite qui divisa la France et renforça la République',
    image: IMG_REPUBLIQUE,
    imageCaption: '« J’accuse… ! » d’Émile Zola : le combat pour la vérité, la justice et les droits de l’homme.',
    imageObservation: 'L’Affaire Dreyfus vit naître l’engagement moderne des « intellectuels » et la Ligue des droits de l’homme.',
    sections: [
      {
        heading: 'La condamnation injuste du capitaine Dreyfus (1894)',
        body: 'En 1894, le capitaine Alfred Dreyfus, officier français d’origine juive alsacienne, est accusé à tort de haute trahison au profit de l’Allemagne sur la foi d’un bordereau manuscrit, condamné sur un dossier secret illégal et déporté au bagne de l’île du Diable (Guyane).'
      },
      {
        heading: '« J’accuse… ! » et la réhabilitation (1898 – 1906)',
        body: 'Lorsque le lieutenant-colonel Picquart découvre le vrai coupable (Esterhazy), l’état-major cherche à étouffer l’affaire. Le 13 janvier 1898, le romancier Émile Zola publie « J’accuse… ! » dans L’Aurore (dirigé par Clemenceau). La France se déchire entre dreyfusards (défenseurs de la justice et des droits de l’homme) et antidreyfusards. Dreyfus est finalement totalement réhabilité en 1906.'
      }
    ],
    keyTakeaways: [
      'L’Affaire Dreyfus oppose les partisans des droits de l’homme et de la vérité aux courants nationalistes et antisémites.',
      'Émile Zola publie « J’accuse… ! » en janvier 1898 pour dénoncer le mensonge d’État.',
      'Réhabilité en 1906, Dreyfus est décoré de la Légion d’honneur ; l’Affaire consolide le camp républicain et prépare la loi de 1905.'
    ],
    keyDates: [
      { date: '1894', label: 'Condamnation injuste et dégradation d’Alfred Dreyfus' },
      { date: '13 janvier 1898', label: 'Publication de « J’accuse… ! » par Émile Zola dans L’Aurore' },
      { date: '1906', label: 'Annulation du jugement et réhabilitation complète d’Alfred Dreyfus' }
    ],
    exercise: {
      question: 'Quel célèbre écrivain publia en janvier 1898 la lettre ouverte « J’accuse… ! » pour défendre le capitaine Dreyfus ?',
      options: ['Victor Hugo', 'Émile Zola', 'Gustave Flaubert', 'Albert Camus'],
      correctIndex: 1,
      explanation: 'Le texte d’Émile Zola paru en une de L’Aurore le 13 janvier 1898 relança l’Affaire devant toute l’opinion publique.'
    }
  },
  {
    id: 'p224-expansion-coloniale',
    page: 224,
    title: "L'expansion coloniale",
    eraId: 'revolution-1914',
    kind: 'theme',
    dates: '1880 – 1914',
    subtitle: 'La constitution du second empire colonial français en Afrique et en Indochine',
    image: IMG_REPUBLIQUE,
    imageCaption: 'Les cartes scolaires de la IIIe République représentaient l’étendue de l’empire colonial en Afrique et en Asie.',
    imageObservation: 'Regardez la carte murale de la salle de classe : « La France — Départements et Colonies » était au cœur de la géographie de 1900.',
    sections: [
      {
        heading: 'Les motivations économiques, politiques et « civilisatrices »',
        body: 'Après 1870, la France se lance dans la course coloniale face au Royaume-Uni et à l’Allemagne. Les partisans de la colonisation (Jules Ferry) invoquent le prestige national, l’accès aux matières premières, de nouveaux marchés et une prétendue « mission civilisatrice », malgré les vives critiques de Clemenceau ou de Jaurès.'
      },
      {
        heading: 'Le deuxième empire colonial du monde',
        body: 'La France étend son autorité sur la Tunisie (1881) et le Maroc (1912) sous forme de protectorats, sur l’Afrique-Occidentale et l’Afrique-Équatoriale françaises (Savorgnan de Brazza), sur Madagascar (1896) et sur l’Indochine (Vietnam, Laos, Cambodge). En 1914, l’empire s’étend sur plus de 10 millions de km².'
      }
    ],
    keyTakeaways: [
      'À la veille de 1914, la France possède le deuxième empire colonial mondial après l’Empire britannique.',
      'Il couvre principalement le Maghreb, l’Afrique de l’Ouest et centrale, Madagascar et l’Indochine.',
      'Les populations colonisées sont soumises au statut inégalitaire du Code de l’indigénat.'
    ],
    keyDates: [
      { date: '1881', label: 'Protectorat français sur la Tunisie (traité du Bardo)' },
      { date: '1887', label: 'Création de l’Union indochinoise' },
      { date: '1912', label: 'Protectorat français sur le Maroc' }
    ],
    exercise: {
      question: 'Auquel de ces deux continents appartenait l’Union indochinoise (Vietnam, Laos, Cambodge) colonisée par la France ?',
      options: ['L’Amérique du Sud', 'L’Asie', 'L’Océanie', 'L’Europe'],
      correctIndex: 1,
      explanation: 'L’Indochine française se situait en Asie du Sud-Est, tandis que l’AOF et l’AEF couvraient une large part de l’Afrique.'
    }
  },
  {
    id: 'p226-separation-eglises-etat',
    page: 226,
    title: "La séparation des Églises et de l'État",
    eraId: 'revolution-1914',
    kind: 'theme',
    dates: '9 décembre 1905',
    subtitle: 'La loi fondatrice de la laïcité républicaine et de la liberté de conscience',
    image: IMG_REPUBLIQUE,
    imageCaption: 'La loi du 9 décembre 1905 garantit à la fois la liberté de culte et la neutralité de l’État.',
    imageObservation: 'Rapportée par Aristide Briand et Jean Jaurès, la loi de 1905 mit fin au Concordat de 1801.',
    sections: [
      {
        heading: 'La fin du Concordat et les principes de 1905',
        body: 'Après les tensions de l’Affaire Dreyfus et la politique anticléricale d’Émile Combes, le député socialiste Aristide Briand prépare une loi d’apaisement et de liberté, votée le 9 décembre 1905. L’État met fin au Concordat de 1801 et ne salarie ni ne subventionne plus aucun culte.'
      },
      {
        heading: 'Liberté de conscience et libre exercice des cultes',
        body: 'L’article 1er garantit la liberté de conscience et le libre exercice des cultes (catholique, protestant, juif…). L’article 2 pose que « la République ne reconnaît, ne salarie ni ne subventionne aucun culte ». Les églises antérieures à 1905 restent propriété publique tout en étant affectées gratuitement aux fidèles.'
      }
    ],
    keyTakeaways: [
      'Votée le 9 décembre 1905, la loi de séparation des Églises et de l’État est le pilier de la laïcité française.',
      'Elle assure la neutralité de la République à l’égard de toutes les religions et convictions.',
      'Elle protège pleinement la liberté de conscience et la liberté de culte de chaque citoyen.'
    ],
    keyDates: [
      { date: '9 décembre 1905', label: 'Promulgation de la loi de séparation des Églises et de l’État' }
    ],
    quote: {
      text: 'La République assure la liberté de conscience. Elle garantit le libre exercice des cultes.',
      author: 'Article 1er de la loi du 9 décembre 1905'
    },
    exercise: {
      question: 'Quels deux principes fondamentaux sont garantis ensemble par la loi du 9 décembre 1905 ?',
      options: [
        'L’interdiction des religions et la censure',
        'La liberté de conscience (et de culte) et la neutralité financière et politique de l’État',
        'Le salaire des prêtres par l’État',
        'La fermeture de toutes les écoles'
      ],
      correctIndex: 1,
      explanation: 'La laïcité française repose sur la séparation entre État et Églises et sur le respect de toutes les croyances et de l’incroyance.'
    }
  },
  {
    id: 'p228-pierre-marie-curie',
    page: 228,
    title: 'Pierre et Marie Curie',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1898 – 1934',
    subtitle: 'La découverte de la radioactivité, du radium et deux prix Nobel historiques',
    image: IMG_PARIS,
    imageCaption: 'Les travaux de Pierre et Marie Curie à Paris ouvrent l’âge de la physique moderne et des soins par radiothérapie.',
    imageObservation: 'Marie Curie fut la première femme à recevoir un prix Nobel et reste la seule personne lauréate dans deux sciences différentes.',
    sections: [
      {
        heading: 'La découverte du polonium et du radium (1898)',
        body: 'Née à Varsovie, Maria Skłodowska vient étudier les sciences à la Sorbonne à Paris et épouse le physicien Pierre Curie. Dans un modeste hangar parisien, le couple isole en 1898 deux éléments nouveaux hautement radioactifs : le polonium et le radium. Ils obtiennent ensemble le prix Nobel de physique en 1903 (avec Henri Becquerel).'
      },
      {
        heading: 'Une pionnière universelle',
        body: 'Après la mort accidentelle de Pierre en 1906, Marie Curie lui succède comme première femme professeure à la Sorbonne, reçoit un second prix Nobel (de chimie, en 1911) et organise pendant la guerre de 1914-1918 des ambulances radiologiques (« les petites Curies ») pour soigner les blessés. Elle repose au Panthéon depuis 1995 avec Pierre Curie.'
      }
    ],
    keyTakeaways: [
      'En 1898, Pierre et Marie Curie découvrent le polonium et le radium et forgent le mot « radioactivité ».',
      'Marie Curie reçoit deux prix Nobel : physique (1903) et chimie (1911).',
      'En 1995, elle devient la première femme à entrer au Panthéon pour ses propres mérites.'
    ],
    keyDates: [
      { date: '1898', label: 'Découverte du polonium et du radium' },
      { date: '1903', label: 'Prix Nobel de physique pour Pierre et Marie Curie' },
      { date: '1911', label: 'Prix Nobel de chimie décerné à Marie Curie' }
    ],
    exercise: {
      question: 'Combien de prix Nobel Marie Curie a-t-elle reçus au cours de sa carrière scientifique ?',
      options: ['Aucun', 'Un seul en médecine', 'Deux (physique en 1903 et chimie en 1911)', 'Trois en littérature'],
      correctIndex: 2,
      explanation: 'Marie Curie est la seule femme au monde à avoir obtenu deux prix Nobel, et la seule lauréate dans deux disciplines scientifiques distinctes.'
    }
  },
  {
    id: 'p230-jean-jaures',
    page: 230,
    title: 'Jean Jaurès',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1859 – 1914',
    subtitle: 'Le grand orateur socialiste, unificateur de la SFIO et apôtre de la paix',
    image: IMG_REPUBLIQUE,
    imageCaption: 'Jean Jaurès, défenseur de la justice sociale, des mineurs et de la paix européenne.',
    imageObservation: 'Son assassinat le 31 juillet 1914 brisa le dernier grand espoir pacifiste à la veille de la Grande Guerre.',
    sections: [
      {
        heading: 'De l’université aux combats ouvriers et à la SFIO',
        body: 'Agrégé de philosophie né à Castres, Jean Jaurès se rallie au socialisme en soutenant les mineurs et verriers en grève à Carmaux (Tarn). Il prend une part active à la défense d’Alfred Dreyfus, fonde le journal L’Humanité en 1904 et réalise l’unité des socialistes français au sein de la SFIO en 1905.'
      },
      {
        heading: 'Le combat passionné contre la guerre (1914)',
        body: 'Convaincu que le socialisme est l’aboutissement des idéaux de la République, Jaurès lutte contre la montée des nationalismes et tente de mobiliser les travailleurs européens contre le péril d’une guerre mondiale. Le 31 juillet 1914, trois jours avant la déclaration de guerre, il est assassiné au café du Croissant à Paris par un nationaliste exalté.'
      }
    ],
    keyTakeaways: [
      'Jean Jaurès unifie le mouvement socialiste français (SFIO, 1905) et fonde L’Humanité (1904).',
      'Orateur exceptionnel, il lie profondément socialisme, démocratie républicaine et instruction.',
      'Il est assassiné le 31 juillet 1914 pour son combat en faveur de la paix ; ses cendres reposent au Panthéon depuis 1924.'
    ],
    keyDates: [
      { date: '1904', label: 'Fondation du quotidien L’Humanité par Jean Jaurès' },
      { date: '1905', label: 'Unification socialiste au sein de la SFIO' },
      { date: '31 juillet 1914', label: 'Assassinat de Jean Jaurès à Paris' }
    ],
    quote: {
      text: 'Le courage, c’est de chercher la vérité et de la dire.',
      author: 'Jean Jaurès, Discours à la jeunesse (Albi, 1903)'
    },
    exercise: {
      question: 'Quel journal Jean Jaurès a-t-il fondé en 1904 pour défendre les idées socialistes et républicaines ?',
      options: ['Le Figaro', 'L’Humanité', 'L’Aurore', 'Le Monde'],
      correctIndex: 1,
      explanation: 'Le premier numéro de L’Humanité parut le 18 avril 1904 sous la direction de Jean Jaurès.'
    }
  },
  {
    id: 'p232-hubert-lyautey',
    page: 232,
    title: 'Hubert Lyautey',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1854 – 1934',
    subtitle: 'Le maréchal de France et l’organisation du protectorat au Maroc',
    image: IMG_REPUBLIQUE,
    imageCaption: 'L’administration coloniale française à la veille de 1914 et l’Exposition coloniale de 1931.',
    imageObservation: 'Contrairement à l’administration directe appliquée en Algérie, Lyautey prôna au Maroc le modèle du protectorat.',
    sections: [
      {
        heading: 'Du Tonkin et de Madagascar au Maroc',
        body: 'Officier de cavalerie formé aux côtés de Gallieni au Tonkin et à Madagascar, Hubert Lyautey publie dès 1891 « Du rôle social de l’officier ». Il défend une approche mêlant action militaire et infrastructures civiles (routes, écoles, dispensaires) pour pacifier les territoires sous tutelle.'
      },
      {
        heading: 'Résident général au Maroc (1912 – 1925)',
        body: 'Nommé premier résident général du protectorat français au Maroc en 1912, il gouverne tout en maintenant les institutions traditionnelles du sultan et préserve les anciennes médinas en bâtissant les villes modernes à l’écart (Rabat, Casablanca). Maréchal de France en 1921, il préside plus tard l’Exposition coloniale internationale de Paris (1931).'
      }
    ],
    keyTakeaways: [
      'Hubert Lyautey organise le protectorat français au Maroc de 1912 à 1925.',
      'Il théorise l’association entre pouvoir colonial et élites locales tout en développant infrastructures et ports (Casablanca).',
      'Il est élevé à la dignité de maréchal de France en 1921.'
    ],
    keyDates: [
      { date: '1912', label: 'Lyautey nommé premier résident général au Maroc' },
      { date: '1931', label: 'Exposition coloniale internationale à Paris présidée par Lyautey' }
    ],
    exercise: {
      question: 'De quel pays d’Afrique du Nord le maréchal Lyautey fut-il le premier résident général à partir de 1912 ?',
      options: ['L’Égypte', 'Le Maroc', 'La Tunisie', 'Le Sénégal'],
      correctIndex: 1,
      explanation: 'À la suite du traité de Fès (1912), Lyautey dirigea le protectorat français au Maroc jusqu’en 1925.'
    }
  },
  {
    id: 'p234-belle-epoque',
    page: 234,
    title: 'La Belle Époque',
    eraId: 'revolution-1914',
    kind: 'theme',
    dates: '1890 – 1914',
    subtitle: 'Métro parisien, loisirs, sport et optimisme avant le drame de 1914',
    image: IMG_PARIS,
    imageCaption: 'Paris rayonne comme capitale mondiale des arts, du spectacle et des progrès urbains.',
    imageObservation: 'L’Expression « Belle Époque » fut inventée après la guerre de 1914-1918 par nostalgie de cette période de paix.',
    sections: [
      {
        heading: 'Une ville lumière et des loisirs nouveaux',
        body: 'Autour de 1900 (Exposition universelle de 1900, inauguration de la première ligne du métro parisien et du Grand Palais), Paris vit une effervescence culturelle sans précédent. Cafés-concerts, cinémas, grands boulevards éclairés à l’électricité et stations balnéaires attirent une société bourgeoise confiante dans le progrès.'
      },
      {
        heading: 'L’essor du sport et les ombres sociales',
        body: 'Le sport moderne se popularise avec les Jeux olympiques rénovés par Pierre de Coubertin (Paris 1900) et le premier Tour de France cycliste (1903). Pourtant, derrière cette façade brillante persistent de fortes inégalités sociales et de grandes grèves ouvrières.'
      }
    ],
    keyTakeaways: [
      'L’Exposition universelle de 1900 et l’ouverture du métro parisien symbolisent la Belle Époque.',
      'Le sport populaire (Tour de France 1903) et le cinéma connaissent un essor fulgurant.',
      'Les tensions sociales et internationales annoncent toutefois les crises à venir.'
    ],
    keyDates: [
      { date: '1900', label: 'Exposition universelle de Paris et ouverture de la ligne 1 du métro' },
      { date: '1903', label: 'Création du premier Tour de France cycliste' }
    ],
    exercise: {
      question: 'Quel nouveau transport urbain est inauguré à Paris en juillet 1900 entre la Porte de Vincennes et la Porte Maillot ?',
      options: ['Le tramway à cheval', 'Le métro parisien', 'Le TGV', 'Le téléphérique'],
      correctIndex: 1,
      explanation: 'Le Métropolitain (avec les célèbres bouches Art nouveau d’Hector Guimard) ouvrit en juillet 1900.'
    }
  },
  {
    id: 'p236-matisse-picasso',
    page: 236,
    title: 'Matisse et Picasso',
    eraId: 'revolution-1914',
    kind: 'portrait',
    dates: '1900 – XXe siècle',
    subtitle: 'Du fauvisme au cubisme : Paris, capitale mondiale de l’art moderne',
    image: IMG_PARIS,
    imageCaption: 'Montmartre et Montparnasse attirent au début du XXe siècle les peintres du monde entier.',
    imageObservation: 'Avec l’impressionnisme puis Matisse et Picasso, la peinture française brise les règles académiques de la perspective.',
    sections: [
      {
        heading: 'Henri Matisse et l’explosion des couleurs (le fauvisme)',
        body: 'Après l’impressionnisme de Monet et Renoir puis les recherches de Cézanne, Henri Matisse provoque un scandale au Salon d’Automne de 1905 avec des couleurs pures et éclatantes : la critique surnomme son groupe les « Fauves ». Tout au long de sa vie, Matisse cherche l’harmonie lumineuse de la couleur et du trait.'
      },
      {
        heading: 'Pablo Picasso et la révolution cubiste (1907)',
        body: 'Installé à Paris au Bateau-Lavoir à Montmartre, l’Espagnol Pablo Picasso peint en 1907 Les Demoiselles d’Avignon. Avec Georges Braque, il invente le cubisme, qui décompose les objets en facettes géométriques vues sous plusieurs angles. Plus tard, Picasso peindra l’immense cri contre la guerre qu’est Guernica (1937).'
      }
    ],
    keyTakeaways: [
      'Au début du XXe siècle, Paris est la capitale incontestée de la création artistique mondiale.',
      'Matisse lance le fauvisme (1905) par la liberté totale de la couleur.',
      'Picasso et Braque fondent le cubisme (1907), bouleversant l’histoire de la peinture.'
    ],
    keyDates: [
      { date: '1905', label: 'Salon d’Automne : naissance du fauvisme autour de Matisse' },
      { date: '1907', label: 'Les Demoiselles d’Avignon de Pablo Picasso' }
    ],
    exercise: {
      question: 'Quel mouvement pictural révolutionnaire Pablo Picasso et Georges Braque créèrent-ils à partir de 1907 ?',
      options: ['Le romantisme', 'Le cubisme', 'Le classicisme', 'Le baroque'],
      correctIndex: 1,
      explanation: 'Le cubisme rompit avec la perspective traditionnelle héritée de la Renaissance en géométrisant les formes.'
    }
  },
  {
    id: 'p238-france-puissance-1914',
    page: 238,
    title: 'La France, une puissance mondiale en 1914',
    eraId: 'revolution-1914',
    kind: 'theme',
    dates: '1914',
    subtitle: 'Bilan démographique, économique, colonial et diplomatique à la veille du conflit',
    image: IMG_PARIS,
    imageCaption: 'En 1914, la France républicaine dispose d’atouts majeurs mais redoute le choc avec l’Allemagne.',
    imageObservation: 'Alliée à la Russie et au Royaume-Uni au sein de la Triple-Entente, la France compte alors près de 40 millions d’habitants.',
    sections: [
      {
        heading: 'Une puissance industrielle, financière et coloniale',
        body: 'À l’été 1914, la France est l’une des premières puissances économiques mondiales : premier créancier de la planète avec le Royaume-Uni (emprunts russes), leader européen de l’automobile et de l’aéronautique, à la tête d’un vaste empire colonial. Sa démographie (40 millions d’habitants) reste toutefois inférieure à celle de l’Empire allemand (67 millions).'
      },
      {
        heading: 'Des alliances face à la montée des périls',
        body: 'Pour ne pas rester isolée face à la Triple-Alliance (Allemagne, Autriche-Hongrie, Italie), la France s’est rapprochée de la Russie (1892) puis du Royaume-Uni (Entente cordiale, 1904) pour former la Triple-Entente. Lorsque l’attentat de Sarajevo déclenche l’engrenage de juillet 1914, le pays est prêt à l’Union sacrée.'
      }
    ],
    keyTakeaways: [
      'En 1914, la France est une grande puissance économique, culturelle et coloniale.',
      'Sa population (40 millions) vieillit plus vite et est moins nombreuse que celle de l’Allemagne.',
      'Elle appartient à la Triple-Entente avec le Royaume-Uni et la Russie.'
    ],
    keyDates: [
      { date: '1904', label: 'Entente cordiale entre la France et le Royaume-Uni' },
      { date: '1907', label: 'Formation complète de la Triple-Entente' }
    ],
    exercise: {
      question: 'Avec quels deux grands pays la France formait-elle l’alliance de la Triple-Entente en 1914 ?',
      options: [
        'L’Allemagne et l’Autriche-Hongrie',
        'Le Royaume-Uni et la Russie',
        'L’Espagne et le Portugal',
        'La Chine et le Japon'
      ],
      correctIndex: 1,
      explanation: 'La Triple-Entente unissait la France, le Royaume-Uni et l’Empire russe face aux Empires centraux.'
    }
  }
];
