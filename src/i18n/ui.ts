import { SITE } from '../config';

export const languages = {
  en: 'English',
  ja: '日本語',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

const en = {
  nav: {
    home: 'Home',
    services: 'Services',
    weightLoss: 'Weight Loss',
    about: 'About',
    schedule: 'Schedule',
    testimonials: 'Testimonials',
    contact: 'Contact',
    book: 'Book a Session',
  },
  hero: {
    badge: 'Professional Boxer · Tokyo, Japan',
    welcomeKicker: 'Welcome to',
    title: 'Train Like a Fighter. Get Lean for Good.',
    subtitle: `${SITE.coachName} is a professional boxer who trains clients at ${SITE.gym.name} in ${SITE.gym.city}. Fast, sustainable weight loss and real boxing conditioning — group sessions and 1-on-1 coaching.`,
    ctaPrimary: 'Claim Your Free Session',
    ctaSecondary: 'See Services',
  },
  infoStrip: [
    { title: 'First session is free', text: 'Try a training session before committing to anything.' },
    { title: 'All levels welcome', text: 'From complete beginners to experienced athletes.' },
    { title: 'Real results', text: 'Structured programs for weight loss that stays off.' },
  ],
  help: {
    kicker: 'How we can help you',
    title: 'How We Can Help You',
    subtitle: 'Programs built around your goal — whether it is losing weight, learning to box or getting in the best shape of your life.',
  },
  benefits: [
    { title: 'Weight Loss', text: 'Rapid, safe fat loss with a maintenance plan so the weight stays off.', icon: 'scale' },
    { title: 'Boxing Skills', text: 'Learn real technique from a professional boxer — footwork, combos, defense.', icon: 'glove' },
    { title: 'Strength & Conditioning', text: 'Build a stronger, faster, more resilient body with fighter conditioning.', icon: 'bolt' },
    { title: 'Group Training', text: 'High-energy small-group sessions with limited spots per class.', icon: 'group' },
    { title: '1-on-1 Coaching', text: 'Fully personalized sessions built around your body and your schedule.', icon: 'one' },
    { title: 'Confidence', text: 'Nothing builds confidence like training like a fighter — inside and out.', icon: 'shield' },
  ],
  mission: {
    kicker: 'Our mission',
    title: 'Coaching With a Fighter\'s Discipline',
    p1: 'Most gyms sell workouts. I build people. As a professional boxer I learned that results come from structure, consistency and honest coaching — not gimmicks.',
    p2: `Every session at ${SITE.gym.name} follows the same principles I use in my own fight camps: train hard, recover smart, and never stop learning. My mission is simple — help you achieve a body and a mindset you are proud of.`,
    signature: `— ${SITE.coachName}, Professional Boxer`,
  },
  stats: {
    sessions: 'Sessions coached',
    clients: 'kg lost by clients',
    years: 'Years of pro boxing',
  },
  servicesSection: {
    kicker: 'What I offer',
    title: 'Services',
    subtitle: 'Choose the format that fits your goal.',
    learnMore: 'Learn more',
    book: 'Book',
  },
  services: [
    {
      name: 'Group Training',
      description: 'High-energy boxing & conditioning sessions in small groups. Train alongside others, limited spots per class.',
      features: ['Small groups (max 8)', 'Boxing fundamentals + conditioning', 'All levels welcome'],
    },
    {
      name: '1-on-1 Personal Training',
      description: 'Fully personalized sessions built around your body, your schedule and your goals — from technique to fat loss.',
      features: ['Custom program', 'Technique & sparring basics', 'Flexible scheduling'],
    },
    {
      name: 'Rapid Weight Loss Program',
      description: `My specialty: fast fat loss that stays off. Structured training + nutrition guidance, used with real athletes preparing for weigh-ins.`,
      features: ['Proven fight-camp method', 'Nutrition guidance', 'Maintenance plan included'],
    },
  ],
  weightLoss: {
    kicker: 'My specialty',
    title: 'Lose Weight Fast — and Keep It Off',
    p1: 'As a professional boxer, I cut and manage weight for a living. I took the same methods athletes use before a fight and adapted them for everyday people: fast results without wrecking your body or your metabolism.',
    p2: 'Most diets fail because they end. My program is built around a maintenance phase from day one — so the weight you lose is weight you keep off.',
    steps: [
      { title: 'Assessment', text: 'Body composition, habits and goal setting in a 1-on-1 consultation.' },
      { title: 'Accelerated Phase', text: 'Structured training and simple nutrition rules for rapid, safe fat loss.' },
      { title: 'Maintenance', text: 'We lock in your new weight with sustainable routines — for good.' },
    ],
    cta: 'Start with a consultation',
  },
  about: {
    kicker: 'About',
    title: `Hi, I'm ${SITE.coachName}`,
    p1: `I'm a professional boxer based in ${SITE.gym.city}, Japan, competing at the national level and training daily at ${SITE.gym.name}.`,
    p2: 'Over my career, weight management has been part of my job — cutting weight safely and keeping performance high. Along the way I discovered a passion for helping regular people do the same: busy professionals, parents, beginners — anyone who wants to lose weight fast and never find it again.',
    p3: 'My coaching combines real boxing training with practical, sustainable fat-loss strategies. No fads. No starvation. Just the method of a professional athlete, adapted to your life.',
    credentialsTitle: 'Credentials',
    credentials: [
      'Professional boxer — Japan',
      'Daily training at ' + SITE.gym.name,
      'Specialist in rapid weight loss & maintenance',
      'Certified personal trainer',
    ],
  },
  schedule: {
    kicker: 'Booking',
    title: 'Schedule & Booking',
    subtitle: 'Pick a session below and reserve your spot. Booking is free — you pay at the gym.',
    weeklyTitle: 'Weekly Training Times',
    weekly: {
      group: 'Group session',
      personal: '1-on-1',
      note: 'Times may change — the live calendar below is always up to date.',
    },
    calendarTitle: 'Live Availability',
    calendarSubtitle: 'Reserve directly through the calendar:',
  },
  testimonials: {
    kicker: 'Results',
    title: 'What Clients Say',
    subtitle: 'Real people, real weight loss, real change.',
    empty: 'Testimonials coming soon.',
  },
  contact: {
    kicker: 'Contact',
    title: 'Find Me at the Gym',
    subtitle: `Train with me at ${SITE.gym.name}, ${SITE.gym.city}. For questions, reach out on social media or by email.`,
    addressLabel: 'Address',
    emailLabel: 'Email',
    socialLabel: 'Social',
    cta: 'Book a session instead',
  },
  cta: {
    title: 'Claim Your Free Trial Session!',
    subtitle: 'First session consultation is free. Spots are limited — reserve yours.',
    button: 'Book Now',
  },
  footer: {
    rights: 'All rights reserved.',
    admin: 'Admin',
  },
};

const ja: typeof en = {
  nav: {
    home: 'ホーム',
    services: 'サービス',
    weightLoss: 'ダイエット',
    about: 'プロフィール',
    schedule: 'スケジュール',
    testimonials: 'お客様の声',
    contact: 'アクセス',
    book: '予約する',
  },
  hero: {
    badge: 'プロボクサー · 東京',
    welcomeKicker: 'ようこそ',
    title: '戦うようにトレーニング。リバウンドなしで痩せる。',
    subtitle: `${SITE.coachName}は${SITE.gym.name}（${SITE.gym.city}）で活動するプロボクサーです。短期間で結果が出る、リバウンドしないダイエットと本格ボクシングトレーニング。グループレッスンとパーソナルトレーニングをご用意しています。`,
    ctaPrimary: '無料セッションを予約',
    ctaSecondary: 'サービスを見る',
  },
  infoStrip: [
    { title: '初回は無料', text: 'まずはお試しでレッスンに参加できます。' },
    { title: '初心者歓迎', text: '運動経験ゼロの方からアスリートまで対応。' },
    { title: '確実な結果', text: 'リバウンドしないための構造化されたプログラム。' },
  ],
  help: {
    kicker: 'サポート内容',
    title: 'どのようにサポートできるか',
    subtitle: 'ダイエット、ボクシング、体力づくり——あなたの目標に合わせたプログラムをご用意しています。',
  },
  benefits: [
    { title: 'ダイエット', text: 'リバウンドしない維持プラン付きの、安全で短期間の減量。', icon: 'scale' },
    { title: 'ボクシング技術', text: 'プロボクサーから学ぶ本格的なフットワーク・コンビネーション・ディフェンス。', icon: 'glove' },
    { title: '体力・コンディショニング', text: 'ファイターのコンディショニングで強く速い体を作ります。', icon: 'bolt' },
    { title: 'グループレッスン', text: '少人数制のエネルギッシュなグループセッション。', icon: 'group' },
    { title: 'パーソナル指導', text: 'あなたの体とスケジュールに合わせた完全マンツーマン。', icon: 'one' },
    { title: '自信', text: 'ファイターのように鍛えることで、内面から自信がつきます。', icon: 'shield' },
  ],
  mission: {
    kicker: '私たちのミッション',
    title: 'ファイターの規律で指導する',
    p1: '多くのジムはトレーニングを売っています。私は「人」を育てます。プロボクサーとして学んだのは、結果は構造・継続・誠実な指導から生まれるということです。',
    p2: `${SITE.gym.name}でのすべてのセッションは、私自身の試合準備と同じ原則に基づいています：強く鍛え、賢く回復し、学び続ける。あなたの目標は、誇りを持てる体と精神を手にすることです。`,
    signature: `— ${SITE.coachName}（プロボクサー）`,
  },
  stats: {
    sessions: 'レッスン実施数',
    clients: 'お客様の減量合計 (kg)',
    years: 'プロボクサー歴',
  },
  servicesSection: {
    kicker: 'サービス紹介',
    title: 'サービス',
    subtitle: 'あなたの目標に合ったスタイルをお選びください。',
    learnMore: '詳しく見る',
    book: '予約',
  },
  services: [
    {
      name: 'グループトレーニング',
      description: '少人数制のボクシング＆コンディショニングクラス。みんなで切磋琢磨しながらトレーニングできます。',
      features: ['少人数制（最大8名）', 'ボクシング基礎＋体力づくり', '初心者歓迎'],
    },
    {
      name: 'パーソナルトレーニング',
      description: 'あなたの体・スケジュール・目標に合わせた完全オーダーメイドのトレーニングです。',
      features: ['完全カスタムプログラム', '技術＆スパーリング基礎', '予約は柔軟に対応'],
    },
    {
      name: '短期集中ダイエットプログラム',
      description: '私の得意分野です。プロの減量メソッドを一般向けにアレンジ。リバウンドしにくい体づくりまでサポートします。',
      features: ['実績ある試合前減量メソッド', '栄養指導付き', '維持プラン込み'],
    },
  ],
  weightLoss: {
    kicker: '得意分野',
    title: '短期間で痩せる。そして太らない。',
    p1: 'プロボクサーとして、減量は私の仕事の一部です。試合前に選手が使う本格的な減量メソッドを、無理のない形で一般の方向けにアレンジしました。体や代謝を壊さずに、短期間で結果を出せます。',
    p2: '多くのダイエットは「終わる」から失敗します。私のプログラムは初日から維持フェーズを組み込んでいるので、一度落とした体重は戻りにくいのです。',
    steps: [
      { title: 'カウンセリング', text: 'マンツーマンで体組成・生活習慣・目標をチェックします。' },
      { title: '加速フェーズ', text: '計画的なトレーニングとシンプルな食事ルールで、安全かつ短期間に脂肪を落とします。' },
      { title: '維持フェーズ', text: '無理のない習慣で新しい体重をキープ。リバウンドなしで終わらせます。' },
    ],
    cta: 'まずはカウンセリングから',
  },
  about: {
    kicker: 'プロフィール',
    title: `${SITE.coachName}です`,
    p1: `${SITE.gym.city}を拠点とするプロボクサーです。${SITE.gym.name}で毎日トレーニングを積み、全国レベルの試合に出場しています。`,
    p2: '選手生活を通じて、安全な減量とパフォーマンス維持は常に自分自身の課題でした。その中で、一般の方のダイエットを支援することにやりがいを見つけました。忙しい会社員、子育て中の方、運動初心者——短期間で痩せて、二度とリバウンドしたくない方こそ、私の活躍できる場所です。',
    p3: '本物のボクシングトレーニングと、実践的で持続可能なダイエット戦略を組み合わせて指導します。流行のダイエット法や極端な食事制限は使いません。プロアスリートのメソッドを、あなたの生活に合わせて提供するだけです。',
    credentialsTitle: '経歴・資格',
    credentials: [
      'プロボクサー（日本）',
      `${SITE.gym.name}で日々トレーニング`,
      '短期減量・体重維持のスペシャリスト',
      'パーソナルトレーナー資格保有',
    ],
  },
  schedule: {
    kicker: '予約',
    title: 'スケジュール＆予約',
    subtitle: '下のカレンダーからセッションを選んで予約してください。予約は無料——支払いはジムで。',
    weeklyTitle: '週間スケジュール',
    weekly: {
      group: 'グループレッスン',
      personal: 'パーソナル',
      note: '時間は変更される場合があります。下のカレンダーが常に最新です。',
    },
    calendarTitle: '空き状況（リアルタイム）',
    calendarSubtitle: 'カレンダーから直接ご予約いただけます：',
  },
  testimonials: {
    kicker: '結果',
    title: 'お客様の声',
    subtitle: '本物の変化をお届けします。',
    empty: '準備中です。',
  },
  contact: {
    kicker: 'アクセス',
    title: 'ジムでお待ちしています',
    subtitle: `${SITE.gym.city}の${SITE.gym.name}でお会いしましょう。ご質問はSNSまたはメールでどうぞ。`,
    addressLabel: '住所',
    emailLabel: 'メール',
    socialLabel: 'SNS',
    cta: '予約ページへ',
  },
  cta: {
    title: '無料体験はこちらから！',
    subtitle: '初回カウンセリングは無料。定員に達し次第締め切ります。',
    button: '今すぐ予約',
  },
  footer: {
    rights: 'All rights reserved.',
    admin: '管理',
  },
};

export const translations = { en, ja };

export function getTranslation(lang: Lang) {
  return translations[lang] ?? translations[defaultLang];
}
