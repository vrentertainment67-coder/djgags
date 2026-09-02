/**
 * SINGLE SOURCE OF TRUTH.
 *
 * Every claim, number, venue and contact detail on the site is defined here
 * and nowhere else. Correcting a fact = editing one line in this file.
 *
 * SOURCE: "Final PressKit.pdf" (5pp, supplied by the artist). Where the
 * earlier website-strategy document disagreed with the press kit, the press
 * kit wins — it is first-party. Notable corrections it forced:
 *   · Genres are Hip Hop / Afro / Bass / House — not Bollywood / Punjabi.
 *   · He is a producer and remixer, not only a selector.
 *   · Career starts 2000, so 26 years, not "24+".
 *   · Residency cities are Delhi, Goa and Bangalore.
 *   · The press kit contains no wedding work at all. Weddings were later
 *     confirmed by the client directly and added as a service track — so
 *     that copy deliberately claims no venues or counts, because none are
 *     evidenced. Do not add figures here without a source.
 */

export const site = {
  name: 'DJ Gags',
  legalName: 'Gagandip Singh',
  role: 'DJ · Producer · Remixer',
  domain: 'djgags.com',
  url: 'https://djgags.com',
  city: 'New Delhi',
  region: 'Delhi NCR',
  /** First show, per the press kit. Every "years active" figure derives from this. */
  careerStart: 2000,
  description:
    'DJ, producer and remixer based in New Delhi. Hip Hop, Afro, Bass and House across India — club residencies, festivals, weddings and the country’s biggest campus circuit.',
} as const;

/** Years active, computed so it never goes stale. */
export const yearsActive = new Date().getFullYear() - site.careerStart;

/** Contact — all verified from the press kit. */
export const contact = {
  whatsapp: '919873225803',
  whatsappDisplay: '+91 98732 25803',
  phoneAlt: '+91 93106 63864',
  email: 'djgagangags@gmail.com',
  /** Soul City is his production/booking outfit. */
  labelEmail: 'soulcityind@gmail.com',
  label: 'Soul City',
  instagram: 'djgagsofficial',
  instagramUrl: 'https://instagram.com/djgagsofficial',
  youtube: '',
  soundcloud: '',
  responseTime: 'within 24 hours',
} as const;

/** Headline numbers. Each one is countable from the press kit lists below. */
export const stats = [
  { value: `${yearsActive}`, label: 'Years since his first show' },
  { value: '6', label: 'Current residencies' },
  { value: '100+', label: 'Venues played' },
  { value: '40+', label: 'Campus festivals' },
] as const;

/**
 * Current residencies. The U.S. Embassy is the standout credential on the
 * whole press kit — it leads for a reason.
 */
export const residencies = [
  { name: 'U.S. Embassy New Delhi', city: 'New Delhi', flagship: true },
  { name: 'Summer House Cafe', city: 'New Delhi' },
  { name: 'Auro Kitchen & Bar', city: 'New Delhi' },
  { name: 'Casa Danza', city: 'New Delhi' },
  { name: 'Privee Nightclub', city: 'New Delhi' },
  { name: 'BW Nightclub', city: 'New Delhi' },
] as const;

/** Major shows and festivals — the scale proof. */
export const majorShows = [
  'US Marine Ball — U.S. Embassy Delhi',
  'Sunkissed Goa NYE',
  'Wonderworld Goa NYE',
  'Maa Holi Bangalore',
  'Holi Moo Delhi',
] as const;

/** Venue book, grouped by city. Straight from the press kit. */
export const venuesByCity = [
  {
    city: 'Delhi NCR',
    note: 'Nightclubs, cafés and lounges',
    venues: [
      'Playboy Nightclub', 'White Delhi Nightclub', 'Esquire Nightclub', 'Kitty Su Nightclub',
      'Key Nightclub', 'Hype Nightclub', 'Agni Nightclub', 'Skooter Nightclub',
      'Decibal Nightclub', 'Dublin Nightclub', 'Philoi', 'Aquila', 'Novelle',
      'Social HKV', 'Social Nehru Place', 'Social Gurugram', 'The Code', 'FRIO',
      'Moonshine', 'Mango', 'Raasta', 'Raasta Gurugram', 'Out of the Box', 'E.L.F',
      'Fork You', 'Levels', 'Cafe Hi-5', 'Chamman Lal & Sons', 'Bandstand', 'Junction',
      'Baci Cafe', 'Benngan Cafe', 'S-Lounge Cafe', 'Forgetful Elephant Cafe',
      'Bromfy Cafe', 'Orange Hara Cafe', 'Spasso Cafe', 'Al Love Hotel Cafe',
      'Manre Cafe', 'Themis', 'Urban Pind', 'Roxbury', 'Zook', 'Shroom', 'Kuki',
      'Smoke House Grill', 'Chalchitra', 'Cibo', 'Darzi Cafe', 'Public Connection',
      'Gatsy By BW', 'Asia 7',
    ],
  },
  {
    city: 'Chandigarh',
    venues: [
      'Playboy Nightclub', 'Kakuna', 'Tizo', 'Molecule', 'Playground', 'Drinkery 52',
      'Escape', 'Upstairs Lounge', 'Social', 'S-Lounge', 'Satva', 'Hollywood', 'Kitty Su',
    ],
  },
  {
    city: 'Bangalore',
    note: 'Hotel and rooftop circuit',
    venues: [
      'Kitty Ko — Hotel Ashok', 'Blue Bar — Taj Westend', 'Spice Terrace — JW Marriott',
      'CloudNYN — Hotel Sterling Mac', 'Ice Bar — Taj MG Road', 'Hyatt Centric MG Road',
      '1Q1 Bar',
    ],
  },
  { city: 'Guwahati', venues: ['Madiza'] },
  { city: 'Indore', venues: ['Revolutions'] },
  { city: 'Macleodganj', venues: ['Labooze'] },
  { city: 'Chennai', venues: ['Sekhmet'] },
] as const;

/** The campus circuit — an unusually deep list, and a story on its own. */
export const campuses = [
  'IIT Delhi', 'IIT Roorkee', 'IIT Kanpur', 'BHU Banaras', 'Thapar University Patiala',
  'JP University Himachal Pradesh', 'Doon Dehradun', 'Petroleum University Dehradun',
  'AIIMS Delhi', 'MAMC Delhi', 'LHMC Delhi', 'PGI University Chandigarh',
  'Government Medical College Chandigarh', 'Amity University Noida', 'JP University Noida',
  'IMT Ghaziabad', 'DEC Delhi', 'NIFT Delhi', 'Pearl Academy Delhi', 'BVCE Delhi',
  'IP University Delhi', 'Miranda College Delhi', 'Gargi College Delhi',
  'Kamla Nehru College Delhi', 'JMC Delhi', 'Lady Irwin Delhi', 'JDMC Delhi',
  'Kalindi College Delhi', 'Pusa Institute Delhi', 'ForeSchool of Management Delhi',
  'IMI Delhi', 'JNU Delhi', 'KMC College Delhi', 'Hindu College Delhi',
  'Hans Raj College Delhi', 'SRCC Delhi', 'Law Faculty Delhi', 'Shardha University',
] as const;

/** Genres, per the press kit's closing line. */
export const genres = ['Hip Hop', 'Afro', 'Bass', 'House'] as const;

/** Influences — the retro/modern split is the most interesting thing in the bio. */
export const influences = {
  retro: ['Michael Jackson', 'Madonna', 'Boney M', 'ABBA'],
  production: ['Skrillex', 'Diplo'],
} as const;

/**
 * Service tracks. Clubs, festivals and campus work are evidenced by the press
 * kit; weddings were confirmed separately by the client, which is why that
 * entry argues from transferable craft instead of citing venues it cannot.
 */
export const tracks = [
  {
    slug: 'clubs',
    title: 'Clubs & Residencies',
    lead: 'Six current residencies, including the U.S. Embassy in New Delhi.',
    body: 'A residency is the hardest room in the business: the same crowd, every week, expecting something they have not heard yet. Six of them run concurrently — which is less a booking than a standing verdict on whether the floor keeps filling.',
    points: ['Weekly and monthly residencies', 'Guest sets across 100+ venues', 'Delhi NCR, Chandigarh, Bangalore'],
  },
  {
    slug: 'festivals',
    title: 'Festivals & Large Format',
    lead: 'Goa NYE, Holi Moo, Maa Holi — crowds measured in thousands.',
    body: 'Big rooms do not forgive hesitation. Sunkissed and Wonderworld on Goa New Year, Holi Moo in Delhi, Maa Holi in Bangalore: main-stage slots where the set has to land on people standing fifty metres back who did not come for you specifically.',
    points: ['Festival main stages', 'NYE and Holi headline slots', 'Embassy and diplomatic events'],
  },
  {
    slug: 'weddings',
    title: 'Weddings & Celebrations',
    lead: 'Sangeet, cocktail, reception — the nights that only happen once.',
    body: 'A wedding floor is the hardest read in the business: three generations in one room, all of whom have to be moved, none of whom want the same record. Twenty-six years of club and festival work is what makes that solvable — the instinct is identical, only the stakes are higher, because this floor does not get a second Saturday.',
    points: ['Sangeet and cocktail evenings', 'Receptions and after-parties', 'Destination weddings across India'],
  },
  {
    slug: 'campus',
    title: 'Campus & Corporate',
    lead: 'The IITs, AIIMS, SRCC, JNU — forty-plus college festivals.',
    body: 'The Indian college circuit is the toughest audience research there is: the crowd is young, enormous, unsentimental, and turns over completely every three years. Forty-plus campuses means forty-plus times reading a brand-new generation cold — and it is why the sets never calcify.',
    points: ['College and university festivals', 'Brand activations and launches', 'Corporate and private events'],
  },
] as const;

/**
 * Mixes. Empty by default — an honest empty state beats a rack of dead
 * players. Add embeds and /mixes fills itself in.
 */
export const mixes: {
  title: string;
  context: string;
  embed: string;
  platform: 'soundcloud' | 'youtube';
}[] = [];

/** Extra gallery images. Empty = /gallery falls back to the press shots. */
export const gallery: { src: string; alt: string; caption?: string }[] = [];

export const images = {
  hero: '/images/gags-hero.jpg',
  booth: '/images/gags-booth.jpg',
  daytime: '/images/gags-daytime.jpg',
  portrait: '/images/gags-portrait.jpg',
} as const;

/**
 * The hero shot carries a visible watermark, so this credit is not optional
 * courtesy — it is the condition on which the image is usable.
 */
export const photoCredits = [
  { name: 'Roy Raymond Henderson Photography', shots: 'Live photography' },
] as const;

export const nav = [
  { href: '/about', label: 'About' },
  { href: '/mixes', label: 'Mixes' },
  { href: '/experience', label: 'Experience' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/instagram', label: 'Instagram' },
] as const;

/** Pre-filled WhatsApp enquiry link used by every "WhatsApp" button. */
export function whatsappLink(
  message = 'Hi Gags — I’d like to check your availability for an event.',
) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Total venue count, derived so it can never drift from the list itself. */
export const venueCount = venuesByCity.reduce((n, c) => n + c.venues.length, 0);
