import React, { useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Camera,
  Coffee,
  FileText,
  Globe2,
  Heart,
  Lightbulb,
  Mail,
  Menu,
  Mic2,
  PenLine,
  Shield,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "story", id: "story" },
  { label: "work", id: "work" },
  { label: "research", id: "research" },
  { label: "journey", id: "journey" },
  { label: "notes", id: "notes" },
  { label: "connect", id: "connect" },
];

const beliefs = [
  {
    icon: FileText,
    title: "Build, then refine",
    body: "A useful thing that exists beats a perfect thing that never meets people. Ship it. Learn from it. Make it clearer.",
  },
  {
    icon: Heart,
    title: "People, not personas",
    body: "Real students are more complex than any user story. Talk to them first. Design from what they actually feel.",
  },
  {
    icon: Star,
    title: "Compound curiosity",
    body: "Every question can become a sharper product decision, a better essay, or a more honest piece of writing.",
  },
];

const workCards = [
  {
    tag: "the mission",
    scribble: "this is the whole thing →",
    title: "The Abroad Company",
    body: "Infrastructure for crossing borders. The bigger mission behind everything: fixing the broken study abroad system through mentorship, AI, and honest guidance.",
  },
  {
    tag: "building now",
    scribble: "launched & growing ✓",
    title: "AbroadMates",
    body: "Peer-to-peer study abroad mentorship. Students talk to people who have actually done it, not sales agents. Real guidance from real experience.",
  },
  {
    tag: "AI copilot",
    scribble: "Pearl is cute 🐚",
    title: "ApplicationMate",
    body: "AI-powered study abroad application guidance. It tracks the full journey from confusion to clarity, one decision at a time.",
  },
  {
    tag: "personal notes",
    scribble: "you’re reading it ✦",
    title: "Proma’s Notes",
    body: "A personal writing space for founder stories, AI learning, travel, political thoughts, and everything that becomes clearer after writing.",
  },
];

const timeline = [
  ["2018", "Early curiosity in Bangladesh", "Leadership, organizing, and a growing urge to fix broken systems."],
  ["2020", "Applied abroad independently", "Rejected the agency model. Self-applied to universities across North America, Europe, and Asia."],
  ["2021", "Full-tuition scholarship to Japan", "Moved to Tokyo International University to study Digital Business & Innovation."],
  ["2022", "Started AbroadMates", "Built a peer-to-peer mentorship platform so students could talk to people who actually walked the path."],
  ["2023", "Co-founded The Abroad Company", "Turned the personal mission into a bigger company for crossing borders."],
  ["Now", "Building AI guidance tools", "Working on ApplicationMate, essay intelligence, and student-first application infrastructure."],
];

const research = [
  ["AI/ML Personalization", "my main focus"],
  ["Natural Language Processing", "BERT, transformers"],
  ["Automated Essay Scoring", "for applications"],
  ["Data Science", "HarvardX ongoing"],
  ["Prompt Engineering", "also teaching others"],
];

const posts = [
  {
    category: "Founder Notes",
    time: "6 min read",
    date: "Jan 2025",
    title: "I Decided to Organize the Chaos of Crossing Borders",
    body: "The study abroad system is broken. Here’s why I decided to build the alternative and what it took to get started.",
  },
  {
    category: "AI Learning",
    time: "8 min read",
    date: "Feb 2025",
    title: "How to Talk to AI So It Actually Understands You",
    body: "A beginner-friendly guide to prompt engineering and getting consistently better outputs from LLMs.",
  },
  {
    category: "Building in Public",
    time: "5 min read",
    date: "Mar 2025",
    title: "What I Learned Building AbroadMates From Scratch",
    body: "Lessons from turning a frustrating personal experience into a platform real students actually use.",
  },
];

const archiveLinks = [
  { icon: BookOpen, title: "Policy Papers", body: "Long-form analysis, research notes, and structured arguments." },
  { icon: FileText, title: "Policy Briefs", body: "Shorter pieces written for action, clarity, and public usefulness." },
  { icon: Mic2, title: "Podcast", body: "Conversations on AI, study abroad, borders, ambition, and building." },
  { icon: Camera, title: "Travel Stories", body: "Personal notes from Japan, Bangladesh, and everywhere in between." },
];

const pages = [
  { key: "cover", label: "cover", page: "01", nav: "story" },
  { key: "beliefs", label: "beliefs", page: "02", nav: "story" },
  { key: "story", label: "story", page: "03", nav: "story" },
  { key: "work", label: "work", page: "04", nav: "work" },
  { key: "research", label: "research", page: "05", nav: "research" },
  { key: "journey", label: "journey", page: "06", nav: "journey" },
  { key: "mentorship", label: "mentorship", page: "07", nav: "connect" },
];

function DoodleFrame() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden text-red">
      <div className="absolute left-10 top-24 h-10 w-10 rounded-md border border-current opacity-50 rotate-3" />
      <div className="absolute bottom-16 left-14 h-8 w-8 rounded-full border border-current opacity-35" />
      <div className="absolute right-8 top-20 h-12 w-8 rounded-t-full border border-current opacity-50" />
      <div className="absolute bottom-24 right-16 text-5xl opacity-50">☆</div>
      <div className="absolute left-5 top-[38%] h-12 w-20 rounded-full border-t border-current opacity-40" />
      <div className="absolute right-4 top-[44%] h-12 w-20 rounded-full border-t border-current opacity-40" />
      <div className="absolute right-10 bottom-52 h-16 w-12 rounded-t-full border border-current opacity-40" />
    </div>
  );
}

function NotebookShell({ children, page = "01", label = "cover", tilt = 0 }) {
  return (
    <motion.div
      style={{ rotate: tilt }}
      className="relative mx-auto h-[min(70vh,680px)] w-full max-w-5xl rounded-[18px] border-[10px] border-red bg-paperSoft shadow-[12px_16px_0_rgba(143,43,31,0.24)] md:h-[680px]"
    >
      <div className="absolute -top-4 left-8 right-8 z-10 hidden justify-between md:flex">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="h-5 w-5 rounded-full border-[3px] border-red bg-dark" />
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(203,72,48,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(203,72,48,0.12)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute bottom-0 top-0 left-1/2 hidden w-[2px] bg-red/35 md:block" />
      <div className="absolute bottom-0 top-0 left-[49.2%] hidden w-[1px] bg-red/20 md:block" />
      <div className="absolute right-8 top-7 font-mono text-xs uppercase tracking-[0.26em] text-red/65">
        pg. {page} / 07 — {label}
      </div>
      <div className="relative z-10 h-full overflow-hidden p-8 md:p-20">{children}</div>
    </motion.div>
  );
}

function Tag({ children }) {
  return <span className="inline-flex rounded-full border border-red/25 bg-red px-3 py-1 font-hand text-lg leading-none text-white shadow-[3px_3px_0_rgba(143,43,31,0.18)]">{children}</span>;
}

function BlogFilterPill({ Icon, title }) {
  return (
    <button className="group inline-flex items-center gap-2 rounded-full bg-red px-4 py-2 font-hand text-xl leading-none text-white shadow-[4px_4px_0_rgba(143,43,31,0.20)] transition hover:-translate-y-0.5 hover:bg-redDark">
      <Icon size={15} className="text-white" />
      <span>{title}</span>
    </button>
  );
}

function SectionTitle({ children, right = false }) {
  return (
    <div className={`mb-8 flex items-center gap-4 ${right ? "justify-end" : ""}`}>
      <h2 className="font-hand text-4xl font-bold text-red md:text-5xl">{children}</h2>
      <div className="h-px flex-1 bg-red/25" />
      <PenLine className="hidden text-muted md:block" size={18} />
    </div>
  );
}

function PaperCard({ children, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-[6px] border-2 border-red/25 bg-paperSoft shadow-[6px_6px_0_rgba(201,66,43,0.12)] ${className}`}>
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_0,transparent_31px,rgba(201,66,43,0.10)_32px)] bg-[length:100%_32px]" />
      <div className="relative p-6 md:p-8">{children}</div>
    </div>
  );
}

function MiniAppSketch() {
  return (
    <div className="relative h-[220px] rounded-[12px] border-4 border-redDark bg-paper/60 p-5">
      <div className="mb-6 flex items-center gap-2 border-b-4 border-redDark pb-4">
        <span className="h-3 w-3 rounded-full border-2 border-redDark" />
        <span className="h-3 w-3 rounded-full border-2 border-redDark" />
        <span className="h-3 w-3 rounded-full border-2 border-redDark" />
        <span className="ml-auto font-mono text-xs text-redDark">applicationmate</span>
      </div>
      <div className="space-y-4">
        <div className="h-3 w-36 rounded border-2 border-redDark" />
        <div className="h-3 w-64 max-w-full rounded border-2 border-redDark" />
        <div className="h-3 w-48 rounded border-2 border-redDark" />
      </div>
      <div className="absolute right-14 top-24 grid h-16 w-16 place-items-center rounded-full border-4 border-redDark text-redDark">
        <span className="text-3xl">⌣</span>
      </div>
      <div className="absolute -right-3 top-20 text-4xl text-red">✧</div>
    </div>
  );
}

function DoodlePerson() {
  return (
    <div className="relative mx-auto h-[250px] w-full max-w-[360px]">
      <svg viewBox="0 0 360 260" fill="none" className="h-full w-full text-ink">
        <path d="M56 70C95 18 185 18 222 79" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M109 82C94 114 91 145 93 184" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M221 83C236 115 238 153 236 200" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M121 86C147 112 175 111 203 86" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M154 105C154 130 149 144 137 162" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M139 181C160 196 189 194 207 178" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M69 212C108 188 145 196 171 228" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M178 228C219 184 265 190 303 230" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="134" cy="126" r="3" fill="currentColor" />
        <circle cx="195" cy="126" r="3" fill="currentColor" />
        <path d="M30 44C48 26 67 20 91 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M255 42C282 21 311 19 334 34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function CoverPage() {
  return (
    <div className="grid h-full items-center gap-10 md:grid-cols-2">
      <div>
        <div className="mb-7 flex items-center gap-3">
          <Tag>page 1 of 7</Tag>
          <span className="text-sm text-muted">Founder / AI Researcher</span>
        </div>
        <h1 className="font-hand text-6xl font-bold leading-[0.95] text-red md:text-8xl">Proma ✦</h1>
        <h2 className="mt-8 max-w-lg font-hand text-5xl font-bold leading-[1.02] text-ink md:text-7xl">
          Founder.<br />AI Researcher.<br /><span className="text-red">Border-crosser.</span>
        </h2>
        <div className="mt-7 flex flex-wrap gap-3 text-sm text-muted">
          <span>● Bangladesh</span>
          <span>↔ Japan</span>
          <span>● GMT+9</span>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-3 font-hand text-2xl text-red">
          <span>✦ build things</span>
          <span>♡ write often</span>
          <span>☕ talk to students</span>
        </div>
        <p className="mt-8 max-w-sm border-b-2 border-red/30 pb-3 font-hand text-2xl font-bold text-red/80">
          scroll to flip the page ↓
        </p>
      </div>
      <div className="hidden md:block">
        <div className="scale-90">
          <MiniAppSketch />
        </div>
        <div className="mx-auto mt-12 flex w-fit gap-4 font-hand text-3xl text-red/70">
          <span>✧</span><span>☾</span><span>♡</span>
        </div>
      </div>
    </div>
  );
}

function BeliefsPage() {
  return (
    <div className="h-full overflow-y-auto pr-1">
      <SectionTitle>3 things I strongly believe in</SectionTitle>
      <div className="grid gap-6 md:grid-cols-3">
        {beliefs.map((belief, index) => {
          const Icon = belief.icon;
          return (
            <PaperCard key={belief.title} className="min-h-[250px] bg-paper/70">
              <div className="mb-8 flex items-center justify-between text-red">
                <span className="font-mono text-sm">0{index + 1}</span>
                <Icon size={34} strokeWidth={1.8} />
              </div>
              <h3 className="font-hand text-3xl font-bold text-ink">{belief.title}</h3>
              <p className="mt-4 leading-8 text-muted">{belief.body}</p>
            </PaperCard>
          );
        })}
      </div>
      <div className="mt-12 text-center font-hand text-3xl text-red">✦ ✦ ✦</div>
    </div>
  );
}

function StoryPage() {
  return (
    <div id="story" className="h-full overflow-y-auto pr-1">
      <SectionTitle>The chaos I couldn’t ignore</SectionTitle>
      <div className="grid gap-8 md:grid-cols-[120px_1fr]">
        <div className="hidden border-r border-red/20 pr-5 font-hand text-lg text-red/70 md:block">
          <p>this is still true</p>
          <p className="mt-16">↑ this made me so angry</p>
          <p className="mt-16">the mission</p>
        </div>
        <div className="space-y-7 text-lg leading-9 md:text-xl md:leading-10">
          <p>I’ve always been the person who sees chaos and feels pushed to organize it. As a kid, it was messy drawers and tangled wires. As an adult, it became broken systems that hurt people.</p>
          <p>When I decided to study abroad, I ran into a system designed to extract money, not provide guidance. Commission-driven agencies sold dreams without accountability. Students were confused, misled, and alone.</p>
          <p>I self-applied to universities across Japan. I figured it out the hard way and got a full-tuition scholarship to Tokyo International University for Digital Business & Innovation.</p>
          <div className="rounded bg-note px-5 py-4 shadow-sm">
            That experience broke something in me, in the best way. I knew I had to build the alternative. Together with Rahat, I co-founded <span className="font-bold text-red">The Abroad Company</span>, launched <span className="font-bold text-red">AbroadMates</span>, and started building <span className="font-bold text-red">ApplicationMate</span>.
          </div>
          <blockquote className="border-l-4 border-red/40 pl-5 font-hand text-3xl font-bold text-red">
            I care about turning confusing systems into clear paths for people.
          </blockquote>
        </div>
      </div>
    </div>
  );
}

function WorkPage() {
  return (
    <div id="work" className="h-full overflow-y-auto pr-1">
      <SectionTitle>What I’m building</SectionTitle>
      <div className="grid gap-5">
        {workCards.map((card) => (
          <PaperCard key={card.title} className="bg-paper/70 transition hover:-translate-y-1">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <Tag>{card.tag}</Tag>
                  <span className="font-hand text-lg text-muted">{card.scribble}</span>
                </div>
                <h3 className="font-serif-display text-3xl font-bold text-ink">{card.title}</h3>
                <p className="mt-3 max-w-4xl leading-8 text-muted">{card.body}</p>
              </div>
              <ArrowRight className="mt-3 shrink-0 text-red" size={30} />
            </div>
          </PaperCard>
        ))}
      </div>
    </div>
  );
}

function ResearchPage() {
  return (
    <div id="research" className="h-full overflow-y-auto pr-1">
      <SectionTitle>Research & technical work</SectionTitle>
      <div className="grid gap-8 lg:grid-cols-2">
        <PaperCard className="bg-paper/70">
          <p className="mb-8 text-xl leading-9">My work focuses on making AI guidance more <mark className="bg-note px-1 text-ink">personal</mark>, <mark className="bg-note px-1 text-ink">explainable</mark>, and useful in real human decisions.</p>
          <div className="space-y-5">
            {research.map(([name, note]) => (
              <div key={name} className="flex flex-wrap items-center gap-3 border-b border-red/10 pb-4">
                <Sparkles size={16} className="text-red" />
                <span className="font-semibold text-ink">{name}</span>
                <span className="font-hand text-lg text-red/70">{note}</span>
              </div>
            ))}
          </div>
        </PaperCard>
        <div className="rounded-[6px] border-2 border-red bg-[#20120f] p-6 font-mono text-sm text-orange-100/25 shadow-[8px_8px_0_rgba(143,43,31,0.34)]">
          <div className="mb-7 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red/80" />
            <span className="h-3 w-3 rounded-full bg-orange-200/70" />
            <span className="h-3 w-3 rounded-full bg-redDark/80" />
            <span className="ml-5 text-orange-100/30">research_lab.py</span>
          </div>
          <p>$ python train_model.py</p>
          <p className="mt-4">→ Loading BERT model...</p>
          <p className="mt-4">→ Processing essay embeddings...</p>
          <p className="mt-4 text-orange-200">→ clarity signal: strong ✓</p>
          <p className="mt-4">→ Model ready for deployment</p>
          <div className="mt-20 ml-auto w-fit rotate-[-2deg] rounded bg-note px-4 py-3 font-hand text-lg text-redDark">need to write a blog post about this!</div>
        </div>
      </div>
    </div>
  );
}

function JourneyPage() {
  return (
    <div id="journey" className="h-full overflow-y-auto pr-1">
      <SectionTitle>The journey so far</SectionTitle>
      <div className="relative ml-2 border-l-2 border-red/25 pl-8 md:ml-20">
        {timeline.map(([year, title, body], index) => (
          <div key={title} className="relative pb-10 last:pb-0">
            <span className={`absolute -left-[43px] top-1 h-5 w-5 rounded-full border-2 border-red ${index === 4 ? "bg-red" : "bg-paperSoft"}`} />
            <div className="grid gap-2 md:grid-cols-[90px_1fr]">
              <span className="font-mono text-sm text-red/70">{year}</span>
              <div>
                <h3 className="text-xl font-bold text-ink">{title}</h3>
                <p className="mt-1 text-muted">{body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MentorshipPage() {
  return (
    <div id="connect" className="h-full overflow-y-auto pr-1">
      <SectionTitle>Mentorship</SectionTitle>
      <div className="grid h-[82%] items-center gap-10 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-3xl leading-[3.2rem] text-ink">
            I mentor students who want <span className="font-bold text-red">honest, practical guidance</span> from someone who has already walked the path.
          </p>
          <p className="mt-5 font-hand text-3xl text-red">No sales. No commission. Just clarity.</p>
          <div className="mt-9 grid gap-4 text-muted">
            {["Japan applications & student life", "TIU applications & scholarships", "SOP & essay strategy", "Application planning & timelines", "AI/data science learning path", "Self-application, skip the agents"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Sparkles size={15} className="text-red" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <PaperCard className="bg-paper/70">
          <p className="font-hand text-3xl text-red">for students who feel lost</p>
          <p className="mt-5 text-lg leading-8 text-muted">You bring the confusion. I help you turn it into a plan, a shortlist, an essay direction, or a next step you can actually take.</p>
          <Button className="mt-8 rounded bg-red px-7 py-6 text-base text-white shadow-[5px_5px_0_rgba(143,43,31,0.35)] hover:bg-redDark">Book through AbroadMates <ArrowRight className="ml-2" size={18} /></Button>
        </PaperCard>
      </div>
    </div>
  );
}

function ConnectCard({ Icon, title, sub }) {
  return (
    <a className="group flex items-center justify-between rounded border-2 border-red/20 bg-paperSoft p-4 shadow-[5px_5px_0_rgba(143,43,31,0.12)] transition hover:-translate-y-1 hover:border-red/50 hover:shadow-[7px_7px_0_rgba(143,43,31,0.18)]" href="#top">
      <div className="flex items-center gap-5">
        <span className="grid h-12 w-12 place-items-center rounded bg-red text-white"><Icon size={18} /></span>
        <span>
          <span className="block text-lg font-bold text-ink">{title}</span>
          <span className="font-mono text-xs text-muted">{sub}</span>
        </span>
      </div>
      <ArrowRight className="text-red transition group-hover:translate-x-1" />
    </a>
  );
}

function ThankYouIllustration() {
  return (
    <section id="connect" className="bg-paper px-8 pb-28 pt-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[30px] border border-red/10 bg-[#f7f3e8] p-4 shadow-[10px_10px_0_rgba(143,43,31,0.12)]">
        <img
          src="/images/proma-thank-you.png"
          alt="Thank you illustration for Proma with connect details"
          className="block w-full rounded-[22px]"
        />
      </div>
    </section>
  );
}

function MobileFallback() {
  return (
    <main className="bg-paper px-5 py-8 text-ink md:hidden">
      <div className="mb-8 flex items-center justify-between">
        <span className="font-hand text-4xl font-bold text-red">Proma ✦</span>
        <Menu className="text-red" />
      </div>
      <PaperCard>
        <CoverPage />
      </PaperCard>
      <div className="mt-8 space-y-8">
        <PaperCard><BeliefsPage /></PaperCard>
        <PaperCard><StoryPage /></PaperCard>
        <PaperCard><WorkPage /></PaperCard>
        <PaperCard><ResearchPage /></PaperCard>
        <PaperCard><JourneyPage /></PaperCard>
        <PaperCard><MentorshipPage /></PaperCard>
        <ThankYouIllustration />
      </div>
    </main>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const pageIndex = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.45, 0.6, 0.76, 0.91], [0, 1, 2, 3, 4, 5, 6]);
  const rotate = useTransform(scrollYProgress, [0, 0.18, 0.36, 0.54, 0.72, 0.9], [-1.5, 1.2, -0.8, 1.4, -1, 0.6]);
  const flipShadow = useTransform(scrollYProgress, [0, 0.5, 1], ["12px 16px 0 rgba(203,72,48,0.16)", "18px 24px 0 rgba(203,72,48,0.22)", "12px 16px 0 rgba(203,72,48,0.16)"]);

  const [activePage, setActivePage] = useState(0);
  React.useEffect(() => {
    return pageIndex.on("change", (latest) => setActivePage(Math.min(6, Math.max(0, Math.round(latest)))));
  }, [pageIndex]);

  const localTime = useMemo(() => {
    try {
      return new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Tokyo",
      }).format(new Date());
    } catch {
      return "GMT+9";
    }
  }, []);

  const content = [
    <CoverPage key="cover" />,
    <BeliefsPage key="beliefs" />,
    <StoryPage key="story" />,
    <WorkPage key="work" />,
    <ResearchPage key="research" />,
    <JourneyPage key="journey" />,
    <MentorshipPage key="mentorship" />,
  ];

  const current = pages[activePage];

  return (
    <div className="min-h-screen bg-dark text-ink selection:bg-note selection:text-ink [--paper:#f6efe3] [--paperSoft:#fff7ec] [--red:#d55235] [--redDark:#8f2b1f] [--ink:#34211c] [--muted:#917d74] [--note:#fff0b8] [--dark:#120907]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap');
        .font-hand { font-family: 'Caveat', cursive; }
        .font-serif-display { font-family: 'Playfair Display', serif; }
        .bg-paper { background-color: var(--paper); }
        .bg-paperSoft { background-color: var(--paperSoft); }
        .bg-note { background-color: var(--note); }
        .bg-dark { background-color: var(--dark); }
        .text-ink { color: var(--ink); }
        .text-muted { color: var(--muted); }
        .text-red { color: var(--red); }
        .text-redDark { color: var(--redDark); }
        .border-red { border-color: var(--red); }
        html { scroll-behavior: smooth; }
        .page-scroll::-webkit-scrollbar { width: 6px; }
        .page-scroll::-webkit-scrollbar-thumb { background: rgba(213,82,53,0.45); border-radius: 999px; }
      `}</style>

      <MobileFallback />

      <div className="hidden md:block">
        <header className="fixed left-0 right-0 top-0 z-40 px-8 py-7 text-paper">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <a href="#top" className="font-hand text-2xl font-bold text-red">✦ Proma</a>
            <nav className="flex items-center gap-7">
              {navItems.slice(0, 4).map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`font-hand text-xl transition ${current.nav === item.id ? "text-red" : "text-paper/55 hover:text-red"}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-paper/55">Local time: {localTime}</div>
          </div>
        </header>

        {mobileOpen && (
          <div className="fixed inset-0 z-50 bg-dark p-8 text-paper">
            <div className="mb-10 flex items-center justify-between">
              <span className="font-hand text-4xl font-bold text-red">Proma ✦</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu"><X /></button>
            </div>
            <div className="grid gap-5">
              {navItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={() => setMobileOpen(false)} className="border-b border-red/20 py-3 font-hand text-5xl text-red">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}

        <DoodleFrame />

        <section id="top" className="relative h-[720vh]">
          <div className="sticky top-0 grid h-screen place-items-center overflow-hidden px-10 pt-20">
            <motion.div style={{ rotate, boxShadow: flipShadow }} className="relative w-full max-w-6xl">
              <NotebookShell page={current.page} label={current.label}>
                <motion.div
                  key={current.key}
                  initial={{ opacity: 0, y: 26, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="h-full"
                >
                  {content[activePage]}
                </motion.div>
              </NotebookShell>
            </motion.div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-hand text-lg text-paper/40">↓ scroll to flip the page</div>

            <div className="absolute bottom-8 right-12 flex items-center gap-2">
              {pages.map((page, index) => (
                <a
                  key={page.key}
                  href={`#${page.nav}`}
                  className={`h-2 rounded-full transition-all ${index === activePage ? "w-8 bg-red" : "w-2 bg-paper/30"}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="notes" className="bg-paper px-8 py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
              <div>
                <SectionTitle>Proma’s Notes</SectionTitle>
                <p className="max-w-xl font-hand text-3xl leading-10 text-muted">I write to think. Small notes, honest founder logs, travel memories, and policy thoughts live here.</p>
              </div>
              <div className="flex flex-wrap justify-start gap-3 md:justify-end">
                <BlogFilterPill Icon={BookOpen} title="Founder Notes" />
                <BlogFilterPill Icon={Camera} title="Travel Stories" />
                <BlogFilterPill Icon={Shield} title="Policy" />
                <BlogFilterPill Icon={PenLine} title="Thoughts" />
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-12">
              <article className="md:col-span-7">
                <div className="relative h-full overflow-hidden rounded-[24px] border-2 border-red/25 bg-paperSoft p-8 shadow-[10px_10px_0_rgba(143,43,31,0.16)]">
                  <div className="absolute right-8 top-8 rotate-6 font-hand text-4xl text-red/25">✦</div>
                  <div className="mb-8 flex flex-wrap items-center gap-3">
                    <Tag>{posts[0].category}</Tag>
                    <span className="font-hand text-xl text-muted">{posts[0].time}</span>
                    <span className="font-hand text-xl text-muted">{posts[0].date}</span>
                  </div>
                  <h3 className="max-w-2xl font-hand text-5xl font-bold leading-[1.03] text-ink">{posts[0].title}</h3>
                  <p className="mt-7 max-w-2xl text-lg leading-9 text-muted">{posts[0].body}</p>
                  <div className="mt-12 flex items-center justify-between border-t border-red/15 pt-6">
                    <span className="font-hand text-3xl text-red">start here if you want the origin story</span>
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-red text-white shadow-[4px_4px_0_rgba(143,43,31,0.18)]"><ArrowRight size={18} /></span>
                  </div>
                </div>
              </article>

              <div className="grid gap-6 md:col-span-5">
                {posts.slice(1).map((post, index) => (
                  <article key={post.title} className="rounded-[22px] border-2 border-red/20 bg-paperSoft p-6 shadow-[7px_7px_0_rgba(143,43,31,0.12)]">
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <Tag>{post.category}</Tag>
                      <span className="font-hand text-xl text-muted">{post.time}</span>
                    </div>
                    <h3 className="font-hand text-4xl font-bold leading-tight text-ink">{post.title}</h3>
                    <p className="mt-4 leading-8 text-muted">{post.body}</p>
                    <div className="mt-6 flex justify-end font-hand text-2xl text-red">read note →</div>
                  </article>
                ))}
              </div>

              <div className="md:col-span-12">
                <div className="rounded-[26px] border border-red/15 bg-paperSoft/60 p-5">
                  <div className="flex flex-wrap gap-3">
                    {[
                      [BookOpen, "Founder Notes"],
                      [Camera, "Travel Stories"],
                      [Shield, "Policy"],
                      [PenLine, "Thoughts"],
                      [Coffee, "Daily Logs"],
                      [Sparkles, "AI Learning"],
                    ].map(([Icon, title]) => (
                      <BlogFilterPill key={title} Icon={Icon} title={title} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper px-8 pb-24">
          <div className="mx-auto max-w-5xl">
            <SectionTitle>Archive</SectionTitle>
            <div className="grid gap-6 md:grid-cols-4">
              {archiveLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <PaperCard key={item.title} className="bg-paperSoft">
                    <Icon className="mb-6 text-red" size={34} />
                    <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                    <p className="mt-3 leading-7 text-muted">{item.body}</p>
                  </PaperCard>
                );
              })}
            </div>
          </div>
        </section>

        <ThankYouIllustration />

        <footer className="border-t border-red/15 bg-paper px-8 py-10 text-center font-hand text-xl text-muted">
          ✦ designed & built with love in Kawagoe, Japan ✦
          <div className="mt-2 font-mono text-xs">Proma · 2025</div>
        </footer>
      </div>
    </div>
  );
}

export default App;
