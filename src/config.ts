// Central place for site-wide settings.
// Replace placeholders when real info from Cris arrives.

export const SITE = {
  coachName: 'Cris',
  brandName: 'Cris Boxing & Fitness',
  tagline: {
    en: 'Professional boxer & weight-loss coach in Japan',
    ja: 'プロボクサー & ダイエットコーチ（日本）',
  },
  gym: {
    name: 'Tokyo Boxing Lab',
    address: '2-XX-XX XXX, Shinjuku-ku, Tokyo 160-XXXX',
    city: 'Tokyo',
  },
  email: 'contact@example.com',
  socials: {
    instagram: 'https://instagram.com/example',
    youtube: 'https://youtube.com/@example',
    x: 'https://x.com/example',
  },
  // Cal.com username/event-page — replace with the real one after signup
  cal: {
    username: 'cris-coach',
    groupSession: 'group-session',
    personalTraining: 'personal-training',
    consultation: 'consultation',
  },
} as const;
