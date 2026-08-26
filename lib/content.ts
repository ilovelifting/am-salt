export const steps = [
  {
    n: "01",
    title: "Don’t reach for the kettle yet.",
    body: "Fill 16 oz of cold water. The coffee maker can wait ninety seconds — it's not going anywhere.",
  },
  {
    n: "02",
    title: "One stick. Thirty seconds.",
    body: "Dissolves clear. It's flavored — but you'll still taste the salt underneath. That's kind of the point.",
  },
  {
    n: "03",
    title: "Then coffee.",
    body: "Now it actually works — sharp, not wired.",
  },
];

export const panel = [
  { name: "Sodium (as sodium chloride)", amount: "850 mg" },
  { name: "Potassium (as citrate)", amount: "350 mg" },
  { name: "Magnesium (as malate)", amount: "85 mg" },
  { name: "Citric acid, natural citrus", amount: "—" },
  { name: "Added sugar / sweetener", amount: "0 g" },
];

export const flavors = [
  {
    id: "citrus",
    name: "Citrus Salt",
    short: "Citrus",
    note: "Grapefruit, lemon peel, salt. Tastes like you'd expect something with “salt” in the name to taste.",
    bg: "#F7F7F5",
    fg: "#121212",
  },
  {
    id: "blackcurrant",
    name: "Blackcurrant",
    short: "Currant",
    note: "Tart, a little moody. For mornings that are also tart and a little moody.",
    bg: "#1F4FD8",
    fg: "#F7F7F5",
  },
] as const;

export type ScienceStat = {
  stat: string;
  body: string;
  refIndex: number;
};

export const scienceStats: ScienceStat[] = [
  {
    stat: "1–2%",
    body: "That's how little water loss it takes to measurably slow down your attention span. You lose more than this overnight, every night, for free.",
    refIndex: 1,
  },
  {
    stat: "8 hrs",
    body: "How long you went without a sip of water while unconscious. Your body kept losing it anyway — breathing, skin, no exceptions for being asleep.",
    refIndex: 2,
  },
  {
    stat: "Salt",
    body: "The part that makes the water actually absorb — into circulation, into your brain — instead of running straight through you. This is what turns awake into alert.",
    refIndex: 3,
  },
];

export const faq = [
  {
    q: "Why not just drink water?",
    a: "Water alone doesn't stay in circulation. Without sodium, most of it passes straight through and you're back where you started within the hour — that's the whole first stat on this page.",
  },
  {
    q: "Who should check with a doctor before making this a daily habit?",
    a: "If you're on blood pressure medication, have kidney disease, are pregnant or nursing, or a doctor has you on a sodium-restricted diet — talk to them first. For most healthy adults, 850mg once a day, first thing in the morning, is unremarkable. But “most people” isn't a guarantee, and we'd rather say this plainly than bury it in fine print.",
  },
  {
    q: "Is 850mg of sodium a lot?",
    a: "It's a little under a third of the FDA's daily recommended limit, in one serving, first thing in the morning. If the rest of your day looks like a normal diet, that's not unusual for an active adult. If it's not — see the question above.",
  },
  {
    q: "Can I drink this every day?",
    a: "That's the design. One stick, one morning, not an occasional thing.",
  },
  {
    q: "Does it have caffeine?",
    a: "No. This is what you drink before coffee, not a caffeine product. Pair it with whatever you already drink.",
  },
  {
    q: "What's actually in it?",
    a: "Sodium chloride, potassium citrate, magnesium malate, citric acid, natural flavor. That's the whole list — the full panel is above, down to the milligram.",
  },
];

export const references = [
  {
    id: 1,
    text: "Ganio MS, Armstrong LE, Casa DJ, et al. “Mild dehydration impairs cognitive performance and mood of men.” British Journal of Nutrition, 106(10), 2011: 1535–1543.",
  },
  {
    id: 2,
    text: "Weissenberg S. “Insensible water loss during sleep: a theoretical exercise.” Advances in Physiology Education, 29(4), 2005: 213–215.",
  },
  {
    id: 3,
    text: "Evans GH, James LJ, Shirreffs SM, Maughan RJ. “Optimizing the restoration and maintenance of fluid balance after exercise-induced dehydration.” Journal of Applied Physiology, 122(4), 2017.",
  },
];
