// app/page.tsx (or src/app/page.tsx)
import ArrowScrollHint from "@/components/ArrowScrollHint";
import BentoGrid, { type BentoItem } from "@/components/ChaptersGrid";
import { lessons as DATA } from "@/data/lessons";

const YEAR = new Date().getFullYear();

// Map shared data -> grid items (slug, title, summary, image)
const gridItems: BentoItem[] = DATA.map(({ slug, title, summary, image }) => ({
  slug,
  title,
  summary,
  image,
}));

export default function Home() {
  return (
    <main className="main-scroller scroll-snap-y h-screen overflow-y-scroll scroll-smooth">
      {/* HERO */}
      <section
        id="hero"
        aria-label="Hero"
        className="section-snap relative grid h-screen place-items-center hero-gradient"
      >
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-white/60">
            Academic Journal
          </p>
          <h1 className="mt-3 text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
            Professional Skills
          </h1>
          <h1 className="mt-3 text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
            Course
          </h1>
          <p className="mt-5 text-white/70 max-w-2xl mx-auto">
            A concise, interactive reflection on the core lessons I studied—
            presented with smooth snap scrolling and deep-dive pages.
          </p>
        </div>
        <ArrowScrollHint />
      </section>

      {/* INTRO */}
<section
  id="intro"
  aria-label="Course Introduction"
  className="section-snap grid h-screen place-items-center intro-gradient"
>
  <div className="mx-auto max-w-4xl px-6">
    <div className="glass rounded-2xl p-8 md:p-5">
      <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
        About this module
      </p>
      <h2 className="mt-1 text-3xl md:text-4xl font-semibold">
        Professional Practice & Employability
      </h2>

      <p className="mt-4 text-white/80 leading-relaxed">
        This journal captures how I connected classroom ideas to practical, job-ready behaviors.
        It spans employability skills and workplace etiquette (email, telephone, meetings),
        self-awareness frameworks (Emotional Intelligence & Johari Window), career materials
        (achievement-focused CVs and narrative portfolios), interview prep (STAR) and negotiation
        basics (BATNA & interests), plus real-world polish through dining etiquette. The Food Court
        group project pulls it all together—research, flows, prototyping, and measurable outcomes.
      </p>

      <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-white/75 text-sm">
        <li className="glass rounded-xl px-4 py-3">Employability & professionalism habits</li>
        <li className="glass rounded-xl px-4 py-3">Email & telephone etiquette that reduces friction</li>
        <li className="glass rounded-xl px-4 py-3">Emotional Intelligence & the Johari Window</li>
        <li className="glass rounded-xl px-4 py-3">CV writing with metrics & portfolio storytelling</li>
        <li className="glass rounded-xl px-4 py-3">Interview (STAR) & negotiation (BATNA, interests)</li>
        <li className="glass rounded-xl px-4 py-3">Dining etiquette & the Food Court capstone</li>
      </ul>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
        <div className="glass rounded-xl px-4 py-3">
          <span className="block text-white/60 text-xs">Format</span>
          <span className="font-medium">Summary → Key Takeaways → Reflection</span>
        </div>
        <div className="glass rounded-xl px-4 py-3">
          <span className="block text-white/60 text-xs">Outcome</span>
          <span className="font-medium">Preparing me to enter professional world</span>
        </div>
        <div className="glass rounded-xl px-4 py-3">
          <span className="block text-white/60 text-xs">Core Skills</span>
          <span className="font-medium">Communication, EQ, collaboration, judgment</span>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CHAPTERS */}
      <section
        id="chapters"
        aria-label="Chapters"
        className="section-snap relative h-screen chapters-grid-bg"
      >
        <div className="mx-auto w-full max-w-7xl h-full px-6 py-6">
          <BentoGrid items={gridItems} />
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        aria-label="Contact"
        className="section-snap grid h-screen place-items-center contact-gradient"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="glass rounded-2xl p-10">
            <h2 className="text-3xl md:text-4xl font-semibold">Let’s Connect</h2>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              Thanks for reading! If you’d like to discuss the journal,
              collaborate, or just say hi—reach out below.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:you@example.com"
                className="rounded-xl bg-white text-neutral-900 px-5 py-3 font-medium shadow-[0_8px_30px_rgba(2,12,27,0.08)] hover:opacity-90 transition"
              >
                costapamindu7@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/pamindu-bhanuka-costa-559586346/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 px-5 py-3 font-medium hover:bg-white/10 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/PaminduCosta/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 px-5 py-3 font-medium hover:bg-white/10 transition"
              >
                GitHub
              </a>
            </div>
          </div>
          <p className="mt-6 text-xs text-white/50">© {YEAR} Pamindu Costa</p>
        </div>
      </section>
    </main>
  );
}
