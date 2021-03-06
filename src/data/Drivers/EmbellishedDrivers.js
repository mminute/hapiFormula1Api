import Countries from '../SupportClasses/Countries';
// TODO's:
// status: {active:, reserve:, test:}
// maybe {'2017': 'Active'}
// Bio


// Note JS Date object is 0 indexed for the month
const drivers = [
  // 2018
  {
    primaryKey: 'pierre-gasly',
    abbrev: 'GAS',
    country: Countries.France,
    dob: new Date(Date.UTC(1996, 1, 7)),
    number: '10',
    name: 'Pierre Gasly',
    pob: 'Rouen, France',
    seasonsActive: ['2017', '2018'],
    notes: '',
    socialMedia: {
      web: 'https://www.pierregasly.com/',
      twitter: 'pierregasly',
      instagram: 'pierregasly',
      facebook: 'PierreGasly',
    },
  },
  {
    primaryKey: 'brendon-hartley',
    abbrev: 'HAR',
    country: Countries.NewZealand,
    dob: new Date(Date.UTC(1989, 10, 10)),
    number: '28',
    name: 'Brendon Hartley',
    pob: 'Palmerston North, New Zealand',
    seasonsActive: ['2017', '2018'],
    notes: '',
    socialMedia: {
      web: 'http://www.brendonhartley.nz/',
      twitter: 'BrendonHartley',
      facebook: 'BrendonHartleyMotorsport',
    },
  },
  {
    primaryKey: 'charles-leclerc',
    abbrev: 'LEC',
    country: Countries.Monaco,
    dob: new Date(Date.UTC(1997, 9, 16)),
    number: '16',
    name: 'Charles Leclerc',
    pob: 'Monte Carlo, Monaco',
    seasonsActive: ['2018'],
    notes: '',
    socialMedia: {
      web: 'https://www.charlesleclerc.com/',
      twitter: 'Charles_Leclerc',
      instagram: 'charles_leclerc7',
      facebook: 'CharlesLeclercOfficiel',
    },
  },
  {
    primaryKey: 'sergey-sirotkin',
    abbrev: 'SIR',
    country: Countries.Russia,
    dob: new Date(Date.UTC(1995, 7, 27)),
    number: '35',
    name: 'Sergey Sirotkin',
    pob: 'Moscow, Russia',
    seasonsActive: ['2018'],
    notes: '',
    socialMedia: {
      web: 'http://sirotkinsergey.com/',
      twitter: 'sirotkin_sergey',
      instagram: 'sergeysirotkin_official',
      vKontakte: 'id74200758',
      facebook: 'https://www.facebook.com/profile.php?id=100002676274886&lst=613967%3A100002676274886%3A1523381365',
    },
  },
  // 2017
  {
    primaryKey: 'lewis-hamilton',
    abbrev: 'HAM',
    country: Countries.UnitedKingdom,
    dob: new Date(Date.UTC(1985, 0, 7)),
    number: '44',
    name: 'Lewis Hamilton',
    pob: 'Stevenage, England',
    seasonsActive: [
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
    ],
    notes: '',
    socialMedia: {
      web: 'http://www.lewishamilton.com/',
      twitter: 'lewishamilton',
      instagram: 'LewisHamilton',
      googlePlus: '+LewisHamilton',
      youtube: 'https://www.youtube.com/user/lewishamilton',
      facebook: 'LewisHamilton',
    },
  },
  {
    primaryKey: 'valtteri-bottas',
    abbrev: 'BOT',
    country: Countries.Finland,
    dob: new Date(Date.UTC(1987, 7, 28)),
    number: '77',
    name: 'Valtteri Bottas',
    pob: 'Nastola, Finland',
    seasonsActive: ['2013', '2014', '2015', '2016', '2017', '2018'],
    notes: '',
    socialMedia: {
      web: 'http://valtteribottas.com/',
      twitter: 'valtteribottas',
      instagram: 'valtteribottas',
      facebook: 'ValtteriBottas',
    },
  },
  {
    primaryKey: 'sebastian-vettel',
    abbrev: 'VET',
    country: Countries.Germany,
    dob: new Date(Date.UTC(1987, 6, 3)),
    number: '5',
    name: 'Sebastian Vettel',
    pob: 'Heppenheim, Germany',
    seasonsActive: [
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
    ],
    notes: '',
    socialMedia: {
      web: 'http://www.sebastianvettel.de/',
    },
  },
  {
    primaryKey: 'kimi-raikkonen',
    abbrev: 'RAI',
    country: Countries.Finland,
    dob: new Date(Date.UTC(1979, 9, 17)),
    number: '7',
    name: 'Kimi Räikköne',
    pob: 'Espoo, Finland',
    seasonsActive: [
      '2001',
      '2002',
      '2003',
      '2004',
      '2005',
      '2006',
      '2007',
      '2008',
      '2009',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
    ],
    notes: '',
    socialMedia: {
      web: 'http://www.kimiraikkonen.com/',
      instagram: 'kimimatiasraikkonen',
    },
  },
  {
    primaryKey: 'daniel-ricciardo',
    abbrev: 'RIC',
    country: Countries.Australia,
    dob: new Date(Date.UTC(1989, 6, 1)),
    number: '3',
    name: 'Daniel Ricciardo',
    pob: 'Perth, Australi',
    seasonsActive: [
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
    ],
    notes: '',
    socialMedia: {
      web: 'http://danielricciardo.com/',
      twitter: 'danielricciardo',
      instagram: 'danielricciardo',
      youtube: 'https://www.youtube.com/channel/UC23P0g2Vt4o6qt5dglgOGKQ',
      facebook: 'DanielRicciardo',
    },
  },
  {
    primaryKey: 'max-verstappen',
    abbrev: 'VER',
    country: Countries.Netherlands,
    dob: new Date(Date.UTC(1997, 8, 30)),
    number: '33',
    name: 'Max Verstappen',
    pob: 'Hasselt, Belgium',
    seasonsActive: ['2015', '2016', '2017', '2018'],
    notes: 'Former driver abbreviation ’VES’',
    socialMedia: {
      web: 'https://www.verstappen.nl',
      twitter: 'Max33Verstappen',
      instagram: 'maxverstappen1',
      youtube: 'https://www.youtube.com/c/VerstappenNL33',
      facebook: 'MaxVerstappen',
    },
  },
  {
    primaryKey: 'sergio-perez',
    abbrev: 'PER',
    country: Countries.Mexico,
    dob: new Date(Date.UTC(1990, 0, 26)),
    number: '11',
    name: 'Sergio Perez',
    pob: 'Guadalajara, Mexico',
    seasonsActive: [
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
    ],
    notes: '',
    socialMedia: {
      web: 'https://sergioperez.mx',
      twitter: 'SChecoPerez',
      instagram: 'SChecoPerez',
      facebook: 'sergioperezf1',
    },
  },
  {
    primaryKey: 'esteban-ocon',
    abbrev: 'OCO',
    country: Countries.France,
    dob: new Date(Date.UTC(1996, 8, 17)),
    number: '31',
    name: 'Esteban Ocon',
    pob: 'Évreux, Normandy',
    seasonsActive: ['2016', '2017', '2018'],
    notes: '',
    socialMedia: {
      web: 'http://www.esteban-ocon.com/',
      twitter: 'oconesteban',
      instagram: 'estebanocon',
    },
  },
  {
    primaryKey: 'felipe-massa',
    abbrev: 'MAS',
    country: Countries.Brazil,
    dob: new Date(Date.UTC(1981, 3, 25)),
    number: '19',
    name: 'Felipe Massa',
    pob: 'São Paulo, Brazil',
    seasonsActive: [
      '2002',
      '2004',
      '2005',
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
    ],
    notes: '',
    socialMedia: {
      web: 'http://felipemassa.com.br/',
      twitter: 'massafelipe19',
      instagram: 'massafelipe19',
      facebook: 'massafelipe19',
    },
  },
  {
    primaryKey: 'lance-stroll',
    abbrev: 'STR',
    country: Countries.Canada,
    dob: new Date(Date.UTC(1998, 9, 29)),
    number: '18',
    name: 'Lance Stroll',
    pob: 'Montreal, Canada',
    seasonsActive: ['2017', '2018'],
    notes: '',
    socialMedia: {
      web: 'https://www.lancestroll.com',
      twitter: 'lance_stroll',
      instagram: 'lance_stroll',
      facebook: 'stroll.lance',
    },
  },
  {
    primaryKey: 'daniil-kvyat',
    abbrev: 'KVY',
    country: Countries.Russian,
    dob: new Date(Date.UTC(1994, 3, 26)),
    number: '26',
    name: 'Daniil Kvyat',
    pob: 'Ufa, Russia',
    seasonsActive: ['2014', '2015', '2016', '2017'],
    notes: '',
    socialMedia: {
      web: 'http://ru.kvyat.com/',
      twitter: 'kvyatofficial',
      vKontakte: 'kvyatofficial',
      instagram: 'danydk1',
      youtube: 'https://www.youtube.com/kvyatofficial',
      facebook: 'daniilkvyatofficial',
      odnoklassniki: 'group/<54490552139901></54490552139901>',
      pinterest: 'kvyatofficial',
    },
  },
  {
    primaryKey: 'carlos-sainz',
    abbrev: 'SAI',
    country: Countries.Spain,
    dob: new Date(Date.UTC(1994, 8, 1)),
    number: '55',
    name: 'Carlos Sainz Jr',
    pob: 'Madrid, Spain',
    seasonsActive: ['2015', '2016', '2017', '2018'],
    notes: '',
    socialMedia: {
      web: 'http://www.carlossainz.es',
      twitter: 'carlosainz',
      instagram: 'carlosainz',
      youtube: 'https://www.youtube.com/channel/UCsT2zNzVe3Z55sQVB8I6OBg',
      facebook: 'carlosainz',
    },
  },
  {
    primaryKey: 'romain-grosjean',
    abbrev: 'GRO',
    country: Countries.France,
    dob: new Date(Date.UTC(1986, 3, 17)),
    number: '8',
    name: 'Romain Grosjean',
    pob: 'Geneva, Switzerland',
    seasonsActive: [
      '2009',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
    ],
    notes: '',
    socialMedia: {
      web: 'http://www.romaingrosjean.com/',
      twitter: 'RGrosjean',
      instagram: 'grosjeanromain',
      facebook: 'grosjeanromain',
    },
  },
  {
    primaryKey: 'kevin-magnussen',
    abbrev: 'MAG',
    country: Countries.Denmark,
    dob: new Date(Date.UTC(1992, 9, 5)),
    number: '20',
    name: 'Kevin Magnussen',
    pob: 'Roskilde, Denmark',
    seasonsActive: ['2014', '2015', '2016', '2017', '2018'],
    notes: '',
    socialMedia: {
      web: 'http://kevinmagnussen.com/',
      twitter: 'KevinMagnussen',
      instagram: 'kevinmagnussen',
      facebook: 'KevinMagnussen',
    },
  },
  {
    primaryKey: 'nico-hulkenberg',
    abbrev: 'HUL',
    country: Countries.Germany,
    dob: new Date(Date.UTC(1987, 7, 19)),
    number: '27',
    name: 'Nico Hulkenberg',
    pob: 'Emmerich am Rhein, Germany',
    seasonsActive: [
      '2010',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
    ],
    notes: '',
    socialMedia: {
      web: 'http://www.nicohulkenberg.net/',
      twitter: 'HulkHulkenberg',
      instagram: 'hulkhulkenberg',
      facebook: 'NicoHulkenberg.official',
    },
  },
  {
    primaryKey: 'jolyon-palmer',
    abbrev: 'PAL',
    country: Countries.UnitedKingdom,
    dob: new Date(Date.UTC(1991, 0, 20)),
    number: '30',
    name: 'Jolyon Palmer',
    pob: 'Horsham, England',
    seasonsActive: ['2016', '2017'],
    notes: '',
    socialMedia: {
      web: 'http://www.jolyonpalmer.com/',
      twitter: 'JolyonPalmer',
      instagram: 'jolyon_palmer',
      facebook: 'jolyonpalmer',
    },
  },
  {
    primaryKey: 'fernando-alonso',
    abbrev: 'ALO',
    country: Countries.Spain,
    dob: new Date(Date.UTC(1981, 6, 29)),
    number: '14',
    name: 'Fernando Alonso',
    pob: 'Oviedo, Spain',
    seasonsActive: [
      '2001',
      '2003',
      '2004',
      '2005',
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
    ],
    notes: '',
    socialMedia: {
      web: 'http://www.fernandoalonso.com/',
      twitter: 'alo_oficial',
      instagram: 'fernandoalo_oficial',
      youtube: 'https://www.youtube.com/user/ALOoficial',
      facebook: 'FernandoAlonsoOficial',
    },
  },
  {
    primaryKey: 'stoffel-vandoorne',
    abbrev: 'VAN',
    country: Countries.Belgium,
    dob: new Date(Date.UTC(1992, 2, 26)),
    number: '2',
    name: 'Stoffel Vandoorne',
    pob: 'Kortrijk, Belgium',
    seasonsActive: ['2016', '2017', '2018'],
    notes: '',
    socialMedia: {
      web: 'http://stoffelvandoorne.com/',
      twitter: 'svandoorne',
      instagram: 'svandoorne',
      facebook: 'Stoffel-Vandoorne-131994126828971',
    },
  },
  {
    primaryKey: 'marcus-ericsson',
    abbrev: 'ERI',
    country: Countries.Sweden,
    dob: new Date(Date.UTC(1990, 8, 2)),
    number: '9',
    name: 'Marcus Ericsson',
    pob: 'Kumla, Sweden',
    seasonsActive: ['2014', '2015', '2016', '2017', '2018'],
    notes: '',
    socialMedia: {
      web: 'http://marcusericsson.com/',
      twitter: 'ericsson_marcus',
      instagram: 'ericsson_marcus',
      facebook: 'MarcusEricssonOfficialF1Page',
    },
  },
  {
    primaryKey: 'pascal-wehrlein',
    abbrev: 'WEH',
    country: Countries.Germany,
    dob: new Date(Date.UTC(1994, 9, 18)),
    number: '94',
    name: 'Pascal Wehrlein',
    pob: 'Sigmaringen, Germany',
    seasonsActive: ['2016', '2017'],
    notes: '',
    socialMedia: {
      web: 'http://www.pascal-wehrlein.de/',
      twitter: 'pwehrlein',
      instagram: 'pascal_wehrlein',
      facebook: 'PWehrlein',
    },
  },
  {
    primaryKey: 'antonio-giovinazzi',
    abbrev: 'GIO',
    country: Countries.Italy,
    dob: new Date(Date.UTC(1993, 11, 14)),
    number: '50',
    name: 'Antonio Giovinazzi',
    pob: 'Martina Franca, Italy',
    seasonsActive: ['2017'],
    notes: '',
    socialMedia: {
      web: 'http://antoniogiovinazzi.com/',
      twitter: 'anto_giovinazzi',
      instagram: 'antogiovinazzi',
      facebook: 'antogiovinazzi',
    },
  },
  {
    primaryKey: 'jenson-button',
    abbrev: 'BUT',
    country: Countries.UnitedKingdom,
    dob: new Date(Date.UTC(1980, 0, 19)),
    number: '22',
    name: 'Jenson Button',
    pob: 'Frome, England',
    seasonsActive: [
      '2000',
      '2001',
      '2002',
      '2003',
      '2004',
      '2005',
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
    ],
    notes: '',
    socialMedia: {
      web: 'https://www.jensonbutton.com/',
      twitter: 'jensonbutton',
      instagram: 'jensonbutton_22',
      googlePlus: 'https://plus.google.com/115831988003154421904',
      facebook: 'JensonButtonOfficialPage',
    },
  },
  {
    primaryKey: 'paul-diresta',
    abbrev: 'DIR',
    country: Countries.UnitedKingdom,
    dob: new Date(Date.UTC(1986, 3, 16)),
    number: '40',
    name: 'Paul di Resta',
    pob: 'Uphall, West Lothian, Scotland',
    seasonsActive: ['2011', '2012', '2013', '2017'],
    notes: '',
    socialMedia: {
      web: 'http://www.pauldiresta.com/',
      twitter: 'pauldiresta',
      instagram: 'paul_diresta',
      facebook: 'PaulDiRestaOfficial',
    },
  },
  // Miscellaneous Drivers:
  // Thomas Monarch: Entered 1 racec- 1963 Mexican GP
  // Very little is known about this driver.  Wikipedia redirect to the 1963 Mexican GP
  // Not entirely sure he even entered this event.
  // http://www.racingsportscars.com/driver/Tom-Monarch-USA.html
  {
    primaryKey: 'thomas-monarch',
    country: Countries.USA,
    dob: null,
    name: 'Thomas Monarch',
    seasonsActive: ['1963'],
    notes: 'Very little is known about this driver.  Wikipedia redirect to the 1963 Mexican GP.' +
      'There seems to be a question as to whether he participated in this race or entered then withdrew.',
    socialMedia: {
      web: 'http://www.pauldiresta.com/',
    },
    bio: {
      wikiLink: 'https://en.wikipedia.org/wiki/Wikipedia:Articles_for_deletion/Thomas_Monarch',
    },
  },
];

module.exports = drivers;
