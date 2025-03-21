import { AnagramRequestData } from '../src/app.service';

export type AnagramTest = {
  get: string;
  description: string;
  anagramRequest: AnagramRequestData;
};

const anagramRequestUrl = '/AnagramSolver';

/* Array containing all tests to run when testing AnagramSolver */
export let AnagramTests: AnagramTest[] = [
  {
    get: anagramRequestUrl + '/Test',
    description: 'return anagrams for the word "Test"',
    anagramRequest: {
      word: 'Test',
      anagrams: ['sett', 'stet', 'Test', 'tets', 'est', 'ETS', 'SET', 'Ste', 'TES', 'tet', 'TSE', 'TST', 'TTS'],
    },
  },
  {
    get: anagramRequestUrl + '/world',
    description: 'return anagrams for the word "world"',
    anagramRequest: {
      word: 'world',
      anagrams: [
        'world',
        'dowl',
        'drow',
        'Lord',
        'Rodl',
        'wold',
        'Word',
        'Worl',
        'DLO',
        'dlr',
        'Dol',
        'Dor',
        'DOW',
        'Lod',
        'lor',
        'Low',
        'Lwo',
        'Old',
        'Ord',
        'orl',
        'owd',
        'owl',
        'RDL',
        'RLD',
        'Rod',
        'ROW',
        'rwd',
        'wod',
        'wro',
      ],
    },
  },
  {
    get: anagramRequestUrl + '/alerts',
    description: 'return anagrams for the word "alerts"',
    anagramRequest: {
      word: 'alerts',
      anagrams: [
        'alerts',
        'alters',
        'artels',
        'estral',
        'laster',
        'lastre',
        'rastle',
        'ratels',
        'relast',
        'resalt',
        'Salter',
        'Slater',
        'staler',
        'stelar',
        'talers',
        'alert',
        'alter',
        'Altes',
        'arest',
        'Arles',
        'arsle',
        'artel',
        'astel',
        'aster',
        'astre',
        'earls',
        'Lares',
        'LASER',
        'later',
        'lears',
        'least',
        'rales',
        'ratel',
        'rates',
        'reals',
        'reast',
        'resat',
        'retal',
        'salet',
        'seral',
        'serta',
        'setal',
        'slare',
        'slart',
        'slate',
        'stale',
        'stare',
        'steal',
        'stela',
        'strae',
        'taels',
        'taler',
        'tales',
        'tares',
        'tarse',
        'teals',
        'tears',
        'telar',
        'teras',
        'Tesla',
        'treas',
        'Trela',
        'Tresa',
        'ales',
        'alts',
        'Arel',
        'Ares',
        'Aret',
        'arle',
        'arse',
        'Arst',
        'Arte',
        'arts',
        'Asel',
        'Aser',
        'astr',
        'ates',
        'atle',
        'ATRS',
        'Earl',
        'ears',
        'East',
        'eats',
        'ELAS',
        'Elat',
        'Elsa',
        'eral',
        'Eras',
        'erat',
        'erst',
        'Esra',
        'Esta',
        'ETAS',
        'ETLA',
        'Etra',
        'laet',
        'lare',
        'Lars',
        'lase',
        'last',
        'late',
        'lats',
        'Lear',
        'LEAS',
        'leat',
        'LEST',
        'Leta',
        'lets',
        'rale',
        'rals',
        'rase',
        'rate',
        'rats',
        'real',
        'Resa',
        'rest',
        'Reta',
        'rets',
        'RSLE',
        'RTLS',
        'RTSE',
        'RTSL',
        'Sale',
        'SALT',
        'sare',
        'Sart',
        'sate',
        'seal',
        'sear',
        'seat',
        'Sela',
        'selt',
        'Sera',
        'Sert',
        'Seta',
        'slae',
        'SLAR',
        'slat',
        'Srta',
        'Star',
        'ster',
        'stra',
        'stre',
        'tael',
        'tale',
        'Tare',
        'tars',
        'teal',
        'tear',
        'teas',
        'tela',
        'tels',
        'Tera',
        'tres',
        'TRSA',
        'tsar',
        'TSEL',
        'aer',
        'AES',
        'AET',
        'ale',
        'ALS',
        'alt',
        'ARE',
        'ARS',
        'art',
        'ase',
        'ASR',
        'ast',
        'ate',
        'ATR',
        'ATS',
        'Eal',
        'ear',
        'EAS',
        'eat',
        'Ela',
        'els',
        'ELT',
        'ERA',
        'ERL',
        'ERS',
        'ERT',
        'ESA',
        'ESL',
        'ESR',
        'est',
        'ETA',
        'ETR',
        'ETS',
        'Lae',
        'LAR',
        'Las',
        'LAT',
        'LEA',
        'Ler',
        'Les',
        'let',
        'LRS',
        'LSE',
        'LSR',
        'LST',
        'LTA',
        'ltr',
        'LTS',
        'Rae',
        'RAS',
        'rat',
        'REA',
        'rel',
        'res',
        'ret',
        'rle',
        'RLT',
        'RSA',
        'RSE',
        'RSL',
        'RTA',
        'rte',
        'RTL',
        'RTS',
        'SAE',
        'Sal',
        'SAR',
        'SAT',
        'sea',
        'SEL',
        'SER',
        'SET',
        'SLA',
        'SLE',
        'SLR',
        'slt',
        'SRA',
        'Sta',
        'Ste',
        'STL',
        'str',
        'TAE',
        'TAL',
        'TAR',
        'TAS',
        'tea',
        'TEL',
        'TER',
        'TES',
        'TLA',
        'tlr',
        'tra',
        'trs',
        'TSE',
        'TSR',
      ],
    },
  },
];
