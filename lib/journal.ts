export type JournalBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] };

export type JournalReference = {
  id: number;
  text: string;
};

export type JournalPost = {
  slug: string;
  title: string;
  dek: string;
  publishedAt: string; // ISO date
  readMinutes: number;
  body: JournalBlock[];
  references: JournalReference[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: "how-to-wake-up-fresher",
    title: "How to wake up fresher, according to the research",
    dek: "Most morning-routine advice is vibes. Here's what's actually been studied — and where we're being honest that the science is thinner than the internet pretends.",
    publishedAt: "2026-08-27",
    readMinutes: 7,
    body: [
      {
        type: "p",
        text: "Waking up groggy isn't a discipline problem. It's mostly mechanical — a stack of biological processes that either work for you or against you, depending on what you do in the first hour. Here's what's actually been studied, what it means in practice, and where we're being honest that the evidence is thinner than the internet pretends.",
      },
      { type: "h2", text: "You're already getting a cortisol spike. Use it, don't fight it." },
      {
        type: "p",
        text: "Whether you feel like it or not, your body is already trying to wake you up. Cortisol — the hormone most people only associate with stress — rises sharply in the first 30 to 45 minutes after you open your eyes, sometimes 50% to 160% above its overnight low.{{cite:1}} This is called the cortisol awakening response, and it isn't optional; it happens whether you're well-rested or not. The grogginess you're fighting isn't a lack of cortisol. It's usually something else entirely.",
      },
      { type: "h2", text: "Sleep inertia is real, and it's not about willpower." },
      {
        type: "p",
        text: "That specific fog — heavy limbs, slow thinking, the urge to lie back down — has a name: sleep inertia. It's a measurable, temporary drop in cognitive and motor performance right after waking, and researchers have been studying it since the 1970s.{{cite:2}} Two things make it worse: getting woken out of deep slow-wave sleep instead of lighter sleep, and short sleep the night before. Time makes it better — most sleep inertia clears in 15 to 30 minutes on its own, which is worth knowing, because the fog you feel in the first ten minutes isn't a reliable preview of the rest of your morning.",
      },
      { type: "h2", text: "Get outside before you get online." },
      {
        type: "p",
        text: "Light is the strongest signal your circadian clock responds to, and morning light does more than wake you up in the moment. In a controlled study, college students who got 1.5 hours of bright light exposure in the early morning for a week slept more efficiently that night and reported feeling more alert the next morning, compared to a week under regular indoor lighting.{{cite:3}} You don't need a light-therapy box for this — outdoor light on an overcast day is still far brighter than indoor lighting. The payoff isn't really in that exact moment; it's in how much easier tomorrow's wake-up is.",
      },
      { type: "h2", text: "Same wake-up time beats more sleep." },
      {
        type: "p",
        text: "If you only fix one thing, fix this. Researchers tracking sleep patterns in college students found that irregular sleep timing was linked to worse academic performance and a circadian clock that drifted later — independent of how much total sleep people actually got.{{cite:4}} An inconsistent 8 hours can leave you worse off than a consistent 7. Your body doesn't just want sleep; it wants to predict when sleep is coming, and a moving wake-up time makes that prediction impossible.",
      },
      { type: "h2", text: "Rehydrate before you caffeinate. (This is also why we exist.)" },
      {
        type: "p",
        text: "You've probably already read this elsewhere on this site, so we'll keep it short: you wake up down measurable water and sodium, enough to slow attention and working memory in controlled studies.{{cite:5}} Sodium is what makes that water actually stay in circulation instead of passing straight through you.{{cite:6}} We're not pretending this is a stretch to include — it's the entire premise of AM Salt. Water and salt before coffee, not instead of it.",
      },
      { type: "h2", text: "The “wait before coffee” advice is popular. The evidence is thinner than people think." },
      {
        type: "p",
        text: "You've probably heard some version of: wait 90 minutes after waking before your first coffee, so it doesn't clash with your cortisol spike. It's popular advice, and the honest answer is that it's more theory than proven protocol. Caffeine can measurably increase cortisol secretion, particularly in people who aren't regular caffeine users.{{cite:7}} That part is real. But there's no controlled study showing a specific wait time produces better alertness, and the common claim that delaying caffeine lets adenosine “clear” misunderstands the mechanism — adenosine is mostly cleared during sleep, not by waiting after you're already awake. If delaying your coffee by half an hour fits your morning, there's a plausible mechanism behind it. If it doesn't fit, you're not ignoring settled science by skipping it — there isn't settled science here yet.",
      },
      { type: "h2", text: "What this actually looks like" },
      {
        type: "p",
        text: "None of this requires a fifteen-step routine. Roughly in order of how much evidence actually backs each one:",
      },
      {
        type: "list",
        items: [
          "Same wake-up time, every day — weekends included. The single highest-leverage change, and it's free.",
          "Light within the first hour. Outside, or near a window — it doesn't need to be direct sun.",
          "Water and sodium before caffeine. Sixteen ounces, one stick, whatever's fastest for you.",
          "Give sleep inertia its 15–30 minutes. Don't judge your day by how you feel at minute two.",
          "Coffee whenever you actually want it. The 90-minute rule is optional, not proven.",
        ],
      },
    ],
    references: [
      {
        id: 1,
        text: "Stalder T, Kirschbaum C, Kudielka BM, et al. “Assessment of the cortisol awakening response: Expert consensus guidelines.” Psychoneuroendocrinology, 63, 2016: 414–432.",
      },
      {
        id: 2,
        text: "Tassi P, Muzet A. “Sleep inertia.” Sleep Medicine Reviews, 4(4), 2000: 341–353.",
      },
      {
        id: 3,
        text: "He M, Ru T, Li S, Li Y, Zhou G. “Shine light on sleep: Morning bright light improves nocturnal sleep and next morning alertness among college students.” Journal of Sleep Research, 2023.",
      },
      {
        id: 4,
        text: "Phillips AJK, et al. “Irregular sleep/wake patterns are associated with poorer academic performance and delayed circadian and sleep/wake timing.” Scientific Reports, 7, 2017.",
      },
      {
        id: 5,
        text: "Ganio MS, Armstrong LE, Casa DJ, et al. “Mild dehydration impairs cognitive performance and mood of men.” British Journal of Nutrition, 106(10), 2011: 1535–1543.",
      },
      {
        id: 6,
        text: "Evans GH, James LJ, Shirreffs SM, Maughan RJ. “Optimizing the restoration and maintenance of fluid balance after exercise-induced dehydration.” Journal of Applied Physiology, 122(4), 2017.",
      },
      {
        id: 7,
        text: "Lovallo WR, Whitsett TL, Al’Absi M, Sung BH, Vincent AS, Wilson MF. “Caffeine Stimulation of Cortisol Secretion Across the Waking Hours in Relation to Caffeine Intake Levels.” Psychosomatic Medicine, 67(5), 2005: 734–739.",
      },
    ],
  },
];

export function getJournalPost(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}
