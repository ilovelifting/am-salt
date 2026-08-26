export type Benefit = {
  id: string;
  title: string;
  body: string; // may contain {{cite:N}} tokens
};

export const benefits: Benefit[] = [
  {
    id: "sharper-first-hour",
    title: "A sharper first hour",
    body: "Mild dehydration — as little as 1–2% of body water — measurably slows attention, working memory, and mood in controlled studies.{{cite:1}} You lose more than that overnight without eating or drinking anything, every single night. Rehydrating with sodium before anything else gives your brain back what it was already missing before the coffee even brews.",
  },
  {
    id: "actually-absorbed",
    title: "Actually absorbed, not just swallowed",
    body: "Water without sodium doesn't stay in circulation as well — sodium is what keeps fluid where your body can use it, instead of passing straight through.{{cite:2}} That's the specific, mechanical reason rehydration science treats sodium as a required part of a hydration beverage, not a flavoring choice.{{cite:3}}",
  },
  {
    id: "headaches",
    title: "Fewer headaches, maybe",
    body: "Chronic low fluid intake is linked to more frequent headaches, and in one small randomized trial, patients with recurrent headaches who increased their water intake reported meaningfully more improvement than those who didn't.{{cite:4}} We're not going to oversell this one — the trial was small and only partially blinded, and later critical appraisals flagged real methodological limits. But hydration is one of the few headache levers you can adjust in thirty seconds each morning, so it's worth trying if you get them.",
  },
  {
    id: "beyond-sodium",
    title: "Not just sodium — potassium and magnesium too",
    body: "Sodium isn't the only mineral your body loses and runs on. Potassium is the main mineral inside your cells and is required for normal cell function and fluid balance;{{cite:5}} magnesium is a cofactor in more than 300 enzyme reactions, including the ones regulating muscle and nerve function.{{cite:6}} Most morning-hydration advice stops at sodium. This formula doesn't.",
  },
  {
    id: "before-a-workout",
    title: "Works before a workout too",
    body: "This isn't only a desk-morning product. Sports-science reviews on hydration beverages consistently land on the same conclusion: fluids containing sodium — not plain water — are what actually help maintain blood volume and delay dehydration during exercise.{{cite:3}} If your morning starts with movement instead of a commute, the same packet applies before you start, not just before you start typing.",
  },
  {
    id: "no-crash-no-blend",
    title: "No sugar, no crash, no proprietary blend",
    body: "None of this comes from a stimulant or a sugar spike — there's zero added sugar in the formula, so there's no crash to manage two hours later. And unlike a lot of the electrolyte category, we're not asking you to trust a “proprietary blend”: every ingredient and its exact milligram amount is on the panel, in full.",
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
