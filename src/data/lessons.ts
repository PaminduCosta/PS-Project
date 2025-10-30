// src/data/lessons.ts
export type Lesson = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  accent: string;
  keyTakeaways?: string[];
  reflection?: string;
  references?: string[];
};

export const lessons: Lesson[] = [
  {
    slug: "course-intro-employability",
    title: "Employability Skills",
    summary:
      "Core employability skills valued by employers.",
    image:
      "./employability.jpg",
    accent: "from-brand-500 to-pink-500",
    keyTakeaways: [
      "Employability blends technical skills with power skills (communication, problem-solving, collaboration, adaptability).",
      "Future-of-work studies show fast skill turnover; analytical thinking, AI/data literacy, and leadership/social influence are rising.",
      "Keep an evidence trail (notes, artifacts, metrics) so projects convert smoothly into portfolio stories.",
    ],
    reflection:
      "This opener reframed employability as a moving target rather than a checklist. Reading skills forecasts made it clear why analytical thinking and adaptability keep topping employer wish lists: tools change, but sense-making and learning loops don’t. I started tagging class artifacts to the skills they demonstrated, which made it easier to translate work into portfolio language later. I also practiced pairing ‘human’ skills with ‘tech’ ones—for example, using AI to draft notes, then applying judgment to refine tone and highlight risks. The biggest shift was mindset: instead of chasing every new framework, I now ask how it sharpens my analysis, communication, or collaboration under real constraints.",
    references: [
      "World Economic Forum — Future of Jobs Report 2025 (skills outlook)."
    ],
  },
  {
    slug: "email-etiquette",
    title: "Email Etiquette",
    summary:
      "Write clear, professional emails: targeted subjects, tight structure, and considerate tone.",
    image:
      "/email.jpg",
    accent: "from-emerald-500 to-cyan-500",
    keyTakeaways: [
      "Subject line = topic + action. Open with purpose in sentence one.",
      "Use greeting + sign-off + signature block; keep one request per email; proofread; avoid ‘Reply All’ unless necessary.",
      "Structure: context → ask → specifics → deadline → thanks. Thread civility matters as much as content.",
    ],
    reflection:
      "Tuning my email habits had immediate payoff. I built small templates around a clear subject, one actionable ask, and a short context block. That structure reduced long back-and-forths and made my requests easier to scan on mobile. I also learned that tone is part mechanics, part empathy: a proper greeting, a line that acknowledges the reader’s workload, and precise next steps changed response speed more than fancy wording ever did. I now proofread for three things—ambiguity, length, and missing owners—before I hit send. When threads get noisy, I summarize decisions and owners at the top, which resets focus without shaming anyone.",
    references: [
      "Purdue OWL — Professional email guidance."
    ],
  },
  {
    slug: "telephone-etiquette",
    title: "Telephone Etiquette",
    summary:
      "Clear, courteous calls: professional openings, holds/transfers, confirmations, and closings.",
    image:
      "/telephone.jpg",
    accent: "from-cyan-500 to-sky-500",
    keyTakeaways: [
      "Open with your name/org + purpose; confirm you reached the right person; summarize next steps before ending.",
      "If placing on hold: ask permission, check back ~30–45s, and thank the caller when you return.",
      "For transfers: explain why, where, and what they’ll need to repeat; warm-transfer when possible.",
    ],
    reflection:
      "Practicing short scripts for the first and last ten seconds of a call made me sound calmer and more prepared. The basics—identify myself, confirm who I’m speaking with, and state the purpose—set a respectful tone. The hold/transfer etiquette was new muscle memory: asking before placing someone on hold, checking back within a minute, and explaining where a transfer is going keeps people from feeling abandoned. I now end calls with a mini-recap of owners and deadlines; it takes ten seconds and prevents follow-up confusion. Overall, the discipline is simple: set expectations early, be audible and warm, and close with concrete next steps.",
    references: [
      "UMKC HR — Telephone Etiquette (check-back on holds, transfer norms)."
    ],
  },
  {
    slug: "professional-etiquette",
    title: "Etiquette & Professionalism",
    summary:
      "Professional behavior at work: punctuality, preparation, civility, and follow-through.",
    image:
      "/proffrsional.jpg",
    accent: "from-amber-500 to-red-500",
    keyTakeaways: [
      "Civility and clear norms sustain team performance; align on meeting goals, roles, timing, and outcomes.",
      "Professionalism includes ethical conduct and respectful communication—especially in disagreement.",
      "Follow-ups (notes, decisions, owners, due dates) convert discussion into progress.",
    ],
    reflection:
      "Professionalism turned out to be a collection of small, consistent behaviors that compound into trust. I began arriving to meetings with an agenda, a timing plan, and a default template for notes so decisions and owners don’t evaporate. When tension rises, I try to separate ideas from identity and paraphrase the other person’s point before replying. That move keeps the room civil and prevents defensive spirals. Afterward, I send brief recaps with owners and dates; people appreciate the clarity even if the email is short. The net effect is momentum: less performative talk, more trackable progress, and fewer surprises later.",
    references: [
      "SHRM — Workplace civility & professionalism guidance."
    ],
  },
  {
    slug: "emotional-intelligence",
    title: "Emotional Intelligence",
    summary:
      "Self-awareness, self-regulation, empathy, motivation, and social skills applied at work.",
    image:
      "/emotion.jpg",
    accent: "from-violet-500 to-indigo-500",
    keyTakeaways: [
      "EI involves perceiving, understanding, using, and managing emotions to guide thinking and behavior.",
      "Name → tame: labeling emotions decreases reactivity; empathy reveals needs behind behavior.",
      "Deliberate feedback loops (1–2 actionable notes) accelerate growth and team trust.",
    ],
    reflection:
      "This module gave me a simple loop: notice, name, navigate. Naming what I felt—frustrated, anxious, impatient—created just enough distance to choose a better response. On teams, I’ve started asking curiosity-first questions like “What constraint am I missing?” before offering solutions. That shift uncovers needs (clarity, time, support) that anger often masks. I also added tiny rituals: a pause before tough messages, a draft I sleep on when emotions run hot, and a habit of closing feedback with a next experiment. Emotional intelligence isn’t about being ‘nice’; it’s about aligning human signals with the work so pace and relationships both survive.",
    references: [
      "APA Dictionary of Psychology — Emotional Intelligence."
    ],
  },
  {
    slug: "johari-window",
    title: "Johari Window",
    summary:
      "Grow self-awareness via disclosure and feedback (open, blind, hidden, unknown panes).",
    image:
      "/emotional-inteligence.jpg",
    accent: "from-fuchsia-500 to-purple-500",
    keyTakeaways: [
      "Expand the Open area by safe self-disclosure; reduce Blind spots by actively inviting feedback.",
      "Use time-boxed rounds: share one trait you see in yourself; peers add one trait they see in you.",
      "Revisit post-project to compare perceived vs. demonstrated strengths and adjust development plans.",
    ],
    reflection:
      "Running a Johari exercise with classmates showed me how quickly blind spots surface when the frame is safe and time-boxed. I shared one trait I believed described me; peers added a different one I under-valued—‘concise under pressure.’ Since then I’ve invited a single, actionable note after presentations and logged patterns. I’m also more deliberate about shrinking my Hidden pane by sharing constraints earlier, which helps teammates calibrate support. The model’s power is its cadence: disclose a bit, invite feedback, reflect, repeat. Over a few cycles, trust rises, language converges, and development goals become specific rather than vague aspirations.",
    references: [
      "Johari Window overviews (Communication Theory; MindTools)."
    ],
  },
  {
    slug: "cv-writing",
    title: "CV Writing",
    summary:
      "Achievement-focused, ATS-friendly CVs: action verbs, metrics, relevance, clarity.",
    image:
      "/cv.jpg",
    accent: "from-lime-500 to-emerald-600",
    keyTakeaways: [
      "Bullet formula: action verb + task/context + metric/outcome (quantify impact).",
      "Front-load relevance; mirror role language (without keyword stuffing) to pass ATS scans.",
      "For early career, keep to one page; emphasize projects, results, and tools used.",
    ],
    reflection:
      "Turning duties into outcomes was the breakthrough. I rewrote bullets with strong verbs and lightweight metrics (ranges or percentages when exact numbers weren’t available). I also mirrored language from job ads to improve ATS alignment—without stuffing keywords—so a human sees the same story the scanner does. Visual tweaks mattered too: clear section headings, consistent spacing, and scannable bullets. The more I iterated, the more I treated each line like a tiny case study: what changed because I was there? That question forced me to quantify impact, cut filler, and keep only what moves the hiring manager closer to ‘yes.’",
    references: [
      "Harvard career guides — resumes & action verbs."
    ],
  },
  {
    slug: "portfolio-management",
    title: "Portfolio Management",
    summary:
      "Curate case studies showing context, constraints, decisions, and outcomes—not just UI.",
    image:
      "/portfolio-management.jpg",
    accent: "from-rose-500 to-orange-500",
    keyTakeaways: [
      "Select 3–5 strong projects; tell a story: problem → options → decisions → evidence → results.",
      "Show process artifacts (research notes, sketches, tests) to demonstrate thinking.",
      "Close each case with impact metrics and next steps (what you’d iterate next).",
    ],
    reflection:
      "I treated my portfolio like a product with users: recruiters with seconds to scan and hiring managers who want depth on click-through. Each case now opens with a crisp problem statement, my role, and constraints. I include messy artifacts—sketches, test notes, dead ends—so the reader can see decisions evolve, not just polished screens. I finish with results and what I’d do next, which signals honesty and growth. The hardest part was cutting: three strong stories beat ten screenshots. That curation, plus consistent structure, made my portfolio feel intentional rather than scrapbook-y.",
    references: [
      "Nielsen Norman Group — UX portfolio best practices."
    ],
  },
  {
    slug: "job-interviews",
    title: "Job Interviews",
    summary:
      "Research the org, prepare STAR stories, and close with thoughtful questions & follow-up.",
    image:
      "/interview.jpg",
    accent: "from-sky-500 to-blue-600",
    keyTakeaways: [
      "Build a story bank mapped to competencies; answer behavioral questions with STAR.",
      "Demonstrate learning loops: what you tried, what changed, and impact.",
      "End with targeted questions; send a specific, appreciative follow-up.",
    ],
    reflection:
      "Building a STAR story bank made interviews feel less like improv and more like editing. I drafted five stories mapped to common competencies and practiced aloud until the timing was tight. The trick was weighting the ‘Action’ part more heavily and quantifying the ‘Result’—otherwise answers sounded vague. Company research changed my closing questions; instead of generic prompts, I asked about current metrics, upcoming bets, or team rituals. I now end interviews with a brief recap of why my evidence fits their needs and follow up with a thank-you that references specifics from the conversation.",
    references: [
      "Harvard Business Review — STAR method (2025).",
      "MIT CAPD — STAR proportions & interviewing tips."
    ],
  },
  {
    slug: "negotiation-skills",
    title: "Negotiation Skills",
    summary:
      "Prepare your BATNA and reservation point; separate people from problems; trade on interests.",
    image:
      "/nagotiation.jpg",
    accent: "from-teal-500 to-cyan-500",
    keyTakeaways: [
      "Know your BATNA and walk-away; improve it before the meeting.",
      "Surface interests (not just positions); package trades to expand value.",
      "Document agreements and next steps; avoid ‘agreement bias’ by checking against your BATNA.",
    ],
    reflection:
      "Treating negotiation as design work changed my approach. I now prep by mapping interests on both sides and drafting multiple packages that trade low-cost, high-value items. Writing down my BATNA and reservation point calms nerves and prevents me from over-conceding in the moment. In the room, I separate people from the problem and ask questions that reveal constraints or hidden priorities. If we stall, I propose objective criteria or a small pilot to test assumptions. Post-meeting, I document agreements and confirm owners, which keeps momentum real. The result is fewer tug-of-wars and more joint problem-solving.",
    references: [
      "Harvard Program on Negotiation — BATNA primers.",
      "Getting to Yes — principled negotiation."
    ],
  },
  {
    slug: "food-court-project",
    title: "Food Court Group Project",
    summary:
      "Team work, Budget management, Planing and Risk management.",
    image:
      "/food-court.jpeg",
    accent: "from-amber-400 to-red-500",
    keyTakeaways: [
      "Working with a group of people require patience and lot of social skills.",
      "Strategising a good marketing and having a lot of friends helps a lot in bussiness.",
      "Working hard with a group of people and achiving a goal is so much fun.",
    ],
    reflection:
      "This oppotunity helped me learn how to work with a group of people and connect with people, how to fit into a reasonable budget and achive something great while having fun.",
    references: [
      "Me and my friends. ;)"
    ],
  },
  {
    slug: "dining-etiquette",
    title: "Dining Etiquette",
    summary:
      "Napkin & place settings, when to start, passing/serving, and American vs. Continental styles.",
    image:
      "/dining.jpg",
    accent: "from-rose-400 to-amber-500",
    keyTakeaways: [
      "Place-setting basics: utensils are used outside-in; knife blades face the plate; napkin to the left or on the plate.",
      "BMW memory aid: Bread plate on the Left, Meal in the middle, Water/glasses on the Right.",
      "Begin when the host begins; phones stay away; use serving utensils for shared dishes.",
      "American vs. Continental styles are both acceptable—be consistent and keep movements tidy.",
      "When finished, rest cutlery in the appropriate ‘finished’ position; place napkin loosely to the left of the plate.",
    ],
    reflection:
      "Practicing table basics removed a lot of social noise so conversation could lead. I now place the napkin on my lap as soon as everyone is seated, start only after the host, and use serving utensils without reaching across. The BMW cue keeps me oriented, and working ‘outside-in’ with cutlery means I don’t second-guess which fork to use. I tried both American and Continental styles and learned to mirror the host’s preference gracefully; the real signal is consistency and tidy movements. When finished, I rest cutlery correctly and place the napkin to the left—small details that read as calm and considerate in business settings.",
    references: [
      "Emily Post Institute — Basic table setting & napkin norms.",
      "Debrett’s — Practical table manners.",
      "Forbes — American vs. Continental overview."
    ],
  },
];

export function getLesson(slug: string) {
  return lessons.find((l) => l.slug === slug);
}
