export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'anatomi', label: 'Anatomi' },
  { id: 'pembentukan', label: 'Pembentukan' },
  { id: 'jenis', label: 'Jenis' },
  { id: 'fisika', label: 'Fisika' },
  { id: 'pengamatan', label: 'Pengamatan' },
  { id: 'einstein', label: 'Einstein' },
  { id: 'mitos', label: 'Mitos' },
  { id: 'timeline', label: 'Timeline' },
];

export interface AnatomyPart {
  id: string;
  name: string;
  description: string;
  position: { top: string; left: string };
  color: string;
}

export const ANATOMY_PARTS: AnatomyPart[] = [
  {
    id: 'singularitas',
    name: 'Singularitas',
    description:
      'Relativitas umum klasik memprediksi adanya singularitas di pusat black hole, tempat kelengkungan ruang-waktu menjadi ekstrem. Sifat fisik sebenarnya dari bagian ini masih belum diketahui karena kita belum memiliki teori gravitasi kuantum yang lengkap.',
    position: { top: '50%', left: '50%' },
    color: '#ff5d8f',
  },
  {
    id: 'horizon',
    name: 'Horizon Peristiwa',
    description:
      'Batas di mana tidak ada jalan kembali bagi sesuatu yang telah melewatinya. Horizon peristiwa bukan permukaan fisik seperti permukaan planet. Seseorang yang jatuh melewatinya tidak selalu mengalami sensasi lokal yang dramatis tepat pada saat melewati horizon. Ukuran horizon berkaitan dengan massa black hole.',
    position: { top: '50%', left: '50%' },
    color: '#4d8bff',
  },
  {
    id: 'foton',
    name: 'Bola Foton',
    description:
      'Wilayah di mana foton secara teoritis dapat bergerak dalam orbit melingkar yang tidak stabil. Cahaya dapat mengorbit black hole pada jarak tertentu sebelum akhirnya jatuh atau melarikan diri.',
    position: { top: '38%', left: '62%' },
    color: '#38d4ff',
  },
  {
    id: 'akresi',
    name: 'Cakram Akresi',
    description:
      'Materi dan gas yang mengorbit black hole. Gesekan dan kompresi membuat materi menjadi sangat panas. Materi tersebut dapat menghasilkan radiasi elektromagnetik yang sangat kuat, membuatnya menjadi salah satu objek tercerah di alam semesta.',
    position: { top: '30%', left: '25%' },
    color: '#ffb84d',
  },
  {
    id: 'jet',
    name: 'Jet Relativistik',
    description:
      'Beberapa black hole dapat memiliki jet partikel yang bergerak mendekati kecepatan cahaya. Jet tersebut bukan berasal dari materi yang keluar dari dalam horizon peristiwa, melainkan berkaitan dengan materi, medan magnet, dan proses fisik di sekitar black hole.',
    position: { top: '12%', left: '52%' },
    color: '#8b6cff',
  },
];

export interface FormationCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const FORMATION_CARDS: FormationCard[] = [
  {
    id: 'keruntuhan',
    title: 'Keruntuhan Bintang',
    description:
      'Bintang yang cukup masif dapat mengalami keruntuhan gravitasi setelah bahan bakar nuklirnya habis dan berpotensi membentuk black hole bermassa bintang. Ketika tekanan radiasi yang sebelumnya menahan gravitasi berhenti, inti bintang yang sangat padat dapat runtuh ke dalam dirinya sendiri.',
    icon: 'Star',
  },
  {
    id: 'penggabungan',
    title: 'Penggabungan Black Hole',
    description:
      'Dua black hole dapat bergabung menjadi black hole yang lebih besar dan menghasilkan gelombang gravitasi. Proses ini diamati untuk pertama kalinya oleh LIGO pada tahun 2015 dan membuka jendela baru untuk mempelajari alam semesta.',
    icon: 'Combine',
  },
  {
    id: 'supermasif',
    title: 'Black Hole Supermasif',
    description:
      'Black hole supermasif berada di pusat sebagian besar galaksi besar dan memiliki massa jutaan hingga miliaran kali massa Matahari. Asal-usul black hole supermasif pertama di alam semesta awal masih menjadi topik penelitian aktif.',
    icon: 'Atom',
  },
];

export interface TypeCard {
  id: string;
  title: string;
  mass: string;
  description: string;
  confirmed: boolean;
  icon: string;
}

export const TYPE_CARDS: TypeCard[] = [
  {
    id: 'bintang',
    title: 'Black Hole Bermassa Bintang',
    mass: 'Beberapa hingga puluhan kali massa Matahari',
    description:
      'Terbentuk dari keruntuhan bintang masif. Kategori ini merupakan jenis black hole yang paling banyak diamati melalui interaksi dengan bintang pendamping.',
    confirmed: true,
    icon: 'Star',
  },
  {
    id: 'menengah',
    title: 'Black Hole Bermassa Menengah',
    mass: 'Ratusan hingga ribuan kali massa Matahari',
    description:
      'Berada di antara black hole bermassa bintang dan supermasif. Objek dalam kategori ini sulit dideteksi dan keberadaan serta populasinya masih terus diteliti.',
    confirmed: true,
    icon: 'CircleDot',
  },
  {
    id: 'supermasif',
    title: 'Black Hole Supermasif',
    mass: 'Jutaan hingga miliaran kali massa Matahari',
    description:
      'Biasanya ditemukan di pusat galaksi. Contoh terkenal termasuk Sagittarius A* di pusat Bima Sakti dan M87* di pusat galaksi Messier 87.',
    confirmed: true,
    icon: 'Atom',
  },
  {
    id: 'primordial',
    title: 'Black Hole Primordial',
    mass: 'Secara teoritis dapat sangat bervariasi',
    description:
      'Merupakan black hole hipotetis yang mungkin terbentuk pada alam semesta awal. Keberadaannya belum dikonfirmasi dan masih merupakan objek penelitian teoritis.',
    confirmed: false,
    icon: 'HelpCircle',
  },
];

export interface PhysicsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const PHYSICS_ITEMS: PhysicsItem[] = [
  {
    id: 'dilatasi',
    title: 'Dilatasi Waktu',
    description:
      'Menurut relativitas umum, laju waktu dapat berbeda antara lokasi dengan medan gravitasi berbeda jika dibandingkan oleh pengamat yang berjauhan. Semakin kuat medan gravitasi, semakin lambat waktu berlalu relatif terhadap pengamat yang jauh.',
    icon: 'Clock',
  },
  {
    id: 'redshift',
    title: 'Pergeseran Merah Gravitasi',
    description:
      'Cahaya yang keluar dari medan gravitasi kuat dapat mengalami pergeseran menuju panjang gelombang yang lebih besar. Energi foton berkurang saat melawan gravitasi yang kuat, menyebabkan cahaya bergeser ke spektrum merah.',
    icon: 'Waves',
  },
  {
    id: 'spaghettifikasi',
    title: 'Spaghettifikasi',
    description:
      'Gaya pasang surut gravitasi menyebabkan perbedaan gaya gravitasi pada bagian tubuh yang berbeda, yang dapat menyebabkan objek tertarik dan memanjang. Gaya pasang surut di sekitar horizon dapat jauh lebih kuat pada black hole yang lebih kecil dibandingkan black hole supermasif.',
    icon: 'StretchVertical',
  },
];

export interface ObservationCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const OBSERVATION_CARDS: ObservationCard[] = [
  {
    id: 'akresi',
    title: 'Cakram Akresi',
    description:
      'Materi panas di sekitar black hole dapat menghasilkan radiasi yang kuat, termasuk sinar-X yang dapat dideteksi oleh teleskop luar angkasa.',
    icon: 'Disc',
  },
  {
    id: 'orbit',
    title: 'Orbit Bintang',
    description:
      'Bintang dapat mengorbit objek yang tidak terlihat secara langsung. Dari gerak orbit tersebut, astronom dapat memperkirakan keberadaan dan massanya.',
    icon: 'Orbit',
  },
  {
    id: 'lensing',
    title: 'Pelensaan Gravitasi',
    description:
      'Gravitasi black hole dapat membelokkan cahaya dari objek yang berada di belakangnya, menciptakan efek lensa yang dapat dideteksi.',
    icon: 'Eye',
  },
  {
    id: 'gelombang',
    title: 'Gelombang Gravitasi',
    description:
      'Penggabungan black hole menghasilkan riak dalam ruang-waktu yang dapat dideteksi oleh instrumen seperti LIGO dan Virgo.',
    icon: 'Activity',
  },
];

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '1915',
    title: 'Teori Relativitas Umum',
    description:
      'Einstein mempublikasikan Teori Relativitas Umum, yang menggambarkan gravitasi sebagai kelengkungan ruang-waktu akibat massa dan energi.',
  },
  {
    year: '1916',
    title: 'Solusi Schwarzschild',
    description:
      'Karl Schwarzschild menemukan solusi eksak persamaan Einstein yang menggambarkan apa yang sekarang dikaitkan dengan black hole non-rotasi.',
  },
  {
    year: '1960-an',
    title: 'Istilah "Black Hole"',
    description:
      'Istilah "black hole" mulai digunakan secara luas dan bukti observasional mengenai objek kompak bermassa besar semakin berkembang.',
  },
  {
    year: '1970-an',
    title: 'Termodinamika & Radiasi Hawking',
    description:
      'Stephen Hawking mengembangkan teori mengenai termodinamika black hole dan radiasi Hawking, yang memprediksi black hole dapat kehilangan energi secara perlahan.',
  },
  {
    year: '2015',
    title: 'Deteksi Gelombang Gravitasi',
    description:
      'LIGO mendeteksi gelombang gravitasi dari penggabungan dua black hole untuk pertama kalinya, mengkonfirmasi prediksi Einstein seabad sebelumnya.',
  },
  {
    year: '2019',
    title: 'Gambar Pertama M87*',
    description:
      'Event Horizon Telescope merilis gambar pertama bayangan black hole M87* di pusat galaksi Messier 87.',
  },
  {
    year: '2022',
    title: 'Gambar Pertama Sagittarius A*',
    description:
      'Event Horizon Telescope merilis gambar pertama Sagittarius A*, black hole supermasif di pusat Galaksi Bima Sakti.',
  },
];

export interface MythFact {
  myth: string;
  fact: string;
}

export const MYTH_FACTS: MythFact[] = [
  {
    myth: 'Black hole menyedot semua benda di sekitarnya.',
    fact:
      'Dari jarak yang cukup jauh, gravitasi black hole berperilaku seperti gravitasi objek lain dengan massa yang sama. Benda dapat mengorbit black hole tanpa langsung jatuh ke dalamnya.',
  },
  {
    myth: 'Semua benda langsung hancur ketika mendekati black hole.',
    fact:
      'Efek gravitasi bergantung pada jarak, massa black hole, dan gaya pasang surut. Objek dapat berada cukup dekat tanpa langsung hancur, tergantung pada kondisi spesifiknya.',
  },
  {
    myth: 'Kita dapat melihat black hole secara langsung.',
    fact:
      'Kita mengamati bayangannya serta pengaruhnya terhadap materi, cahaya, dan ruang-waktu di sekitarnya. Black hole tidak memancarkan cahaya yang dapat kita lihat secara langsung.',
  },
  {
    myth: 'Black hole akan bertahan selamanya.',
    fact:
      'Menurut prediksi teoritis Hawking, black hole dapat kehilangan energi secara perlahan melalui radiasi Hawking, meskipun fenomena tersebut belum diamati secara langsung pada black hole astrofisika.',
  },
];

export interface FactItem {
  label: string;
  value: string;
  icon: string;
}

export const FACT_ITEMS: FactItem[] = [
  {
    label: 'Gravitasi',
    value: 'Sangat kuat di dekat horizon peristiwa',
    icon: 'Gauge',
  },
  {
    label: 'Kecepatan Lepas di Horizon',
    value: 'Setara dengan kecepatan cahaya',
    icon: 'Zap',
  },
  {
    label: 'Kategori',
    value: 'Bermassa bintang, menengah, supermasif, primordial (hipotetis)',
    icon: 'Layers',
  },
  {
    label: 'Black Hole Supermasif',
    value: 'Dapat memiliki massa hingga miliaran kali massa Matahari',
    icon: 'Atom',
  },
  {
    label: 'Gambar Bayangan Pertama',
    value: 'M87* (Event Horizon Telescope, 2019)',
    icon: 'Camera',
  },
  {
    label: 'Black Hole di Pusat Bima Sakti',
    value: 'Sagittarius A* (Event Horizon Telescope, 2022)',
    icon: 'Crosshair',
  },
];

export interface Reference {
  source: string;
  description: string;
}

export const REFERENCES: Reference[] = [
  {
    source: 'NASA — Black Holes',
    description: 'Sumber informasi resmi dari NASA tentang black hole, termasuk penjelasan untuk publik dan materi edukasi.',
  },
  {
    source: 'ESA — European Space Agency',
    description: 'Publikasi dan sumber daya dari Badan Antariksa Eropa mengenai black hole dan objek astrofisika kompak.',
  },
  {
    source: 'Event Horizon Telescope (EHT)',
    description: 'Kolaborasi teleskop yang menghasilkan gambar pertama bayangan black hole M87* (2019) dan Sagittarius A* (2022).',
  },
  {
    source: 'LIGO — Laser Interferometer Gravitational-Wave Observatory',
    description: 'Observatorium yang mendeteksi gelombang gravitasi dari penggabungan black hole untuk pertama kalinya pada 2015.',
  },
  {
    source: 'Einstein, A. (1915). Die Feldgleichungen der Gravitation',
    description: 'Publikasi asli Teori Relativitas Umum oleh Albert Einstein, yang menjadi dasar teoretis pemahaman black hole.',
  },
  {
    source: 'Schwarzschild, K. (1916). Über das Gravitationsfeld eines Massenpunktes',
    description: 'Solusi eksak pertama persamaan Einstein yang menggambarkan metrik black hole non-rotasi.',
  },
];
