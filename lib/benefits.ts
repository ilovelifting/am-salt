export type Benefit = {
  id: string;
  title: string;
  body: string;
};

export const benefits: Benefit[] = [
  {
    id: "sharper-start",
    title: "A sharper start that actually holds",
    body: "Your brain runs on water it doesn't have yet. Losing just 1–2% of your body's water is enough to dull focus and flatten your mood — and you lose more than that every night, just by sleeping. Rehydrate with sodium before anything else and you get that sharpness back before the coffee even brews. Then you spend the rest of the day topped up, instead of chasing a deficit you woke up with.",
  },
  {
    id: "actually-absorbed",
    title: "Actually absorbed, not just swallowed",
    body: "Water without sodium doesn't stick around. It passes through fast instead of getting into circulation where it can do something. Sodium is what keeps it there — the entire reason rehydration drinks contain salt in the first place, not sugar.",
  },
  {
    id: "headaches",
    title: "Fewer headaches, maybe",
    body: "Chronic low fluid intake shows up as more frequent headaches for a lot of people. We won't oversell this one — the strongest study on it was small — but hydration is one of the few headache levers you can pull in thirty seconds each morning. Worth trying if you get them.",
  },
  {
    id: "beyond-sodium",
    title: "Not just sodium — potassium and magnesium too",
    body: "Sodium gets all the attention, but it's not the only mineral you lose overnight. Potassium keeps your cells and fluid balance running. Magnesium powers over 300 processes in your body, including the ones that control muscle and nerve function. Most morning drinks stop at sodium. This one doesn't.",
  },
  {
    id: "before-a-workout",
    title: "Works before a workout too",
    body: "This isn't only a desk-morning fix. The same sodium-and-water combination is what keeps blood volume up and delays dehydration during exercise. If your morning starts with movement instead of a commute, the packet works exactly the same way — before you start, not after.",
  },
  {
    id: "no-crash-no-blend",
    title: "No sugar, no crash, no proprietary blend",
    body: "Zero added sugar means there's no crash waiting for you at 10am. And unlike most of the electrolyte aisle, we're not hiding behind a “proprietary blend” — every ingredient, and its exact amount, is right there on the label.",
  },
];

export const benefitReferences = [
  {
    id: 1,
    text: "Ganio MS, Armstrong LE, Casa DJ, et al. “Mild dehydration impairs cognitive performance and mood of men.” British Journal of Nutrition, 106(10), 2011: 1535–1543.",
  },
  {
    id: 2,
    text: "Evans GH, James LJ, Shirreffs SM, Maughan RJ. “Optimizing the restoration and maintenance of fluid balance after exercise-induced dehydration.” Journal of Applied Physiology, 122(4), 2017.",
  },
  {
    id: 3,
    text: "Pérez-Castillo ÍM, Williams JA, López-Chicharro J, Mihic N, Rueda R, Bouzamondo H, Horswill CA. “Compositional Aspects of Beverages Designed to Promote Hydration Before, During, and After Exercise: Concepts Revisited.” Nutrients, 16(1), 2023: 17.",
  },
  {
    id: 4,
    text: "Spigt M, Weerkamp N, Troost J, van Schayck CP, Knottnerus JA. “A randomized trial on the effects of regular water intake in patients with recurrent headaches.” Family Practice, 29(4), 2012: 370–375.",
  },
  {
    id: 5,
    text: "National Institutes of Health, Office of Dietary Supplements. “Potassium — Health Professional Fact Sheet.” ods.od.nih.gov/factsheets/Potassium-HealthProfessional.",
  },
  {
    id: 6,
    text: "National Institutes of Health, Office of Dietary Supplements. “Magnesium — Health Professional Fact Sheet.” ods.od.nih.gov/factsheets/Magnesium-HealthProfessional.",
  },
];
