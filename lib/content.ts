export const steps = [
  {
    n: "01",
    title: "Wake up. Don’t reach for the kettle.",
    body: "Fill 16 oz of cold water while the coffee grinder stays off.",
  },
  {
    n: "02",
    title: "One stick, thirty seconds.",
    body: "Dissolves clear. Faint citrus, definite salt — it is supposed to taste like that.",
  },
  {
    n: "03",
    title: "Then coffee.",
    body: "Ten minutes later, on a system that can actually use it.",
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
    note: "Grapefruit and lemon peel. The everyday one.",
    bg: "#F7F7F5",
    fg: "#121212",
  },
  {
    id: "blackcurrant",
    name: "Blackcurrant",
    short: "Currant",
    note: "Darker, slightly tart. Less bright first thing.",
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
    body: "Mild dehydration in this range — well within what you can lose overnight — has been shown to measurably impair attention and working memory.",
    refIndex: 1,
  },
  {
    stat: "8 hrs",
    body: "Since your last drink. At rest, the body loses roughly half a liter overnight through breath and skin alone, with nothing coming in to offset it.",
    refIndex: 2,
  },
  {
    stat: "Salt",
    body: "Water alone moves through the gut faster than it's absorbed. Sodium is what the intestine uses to pull it into circulation and hold it there.",
    refIndex: 3,
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
