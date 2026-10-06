"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { GitBranch, ExternalLink, ShoppingBag, Shield, GraduationCap, Bot, MessageSquare, Activity, TrendingUp, Wallet, type LucideIcon } from "lucide-react";

interface Project {
  index: string;
  category: string;
  year: string;
  status: string;
  statusColor: string;
  live: boolean;
  headline: string;
  name: string;
  role: string;
  company: string;
  stack: string[];
  github: string;
  demo: string | null;
  type: "mobile" | "web";
  screenshots: string[]; // placeholder gradient colors
  images?: string[]; // screenshots in /public, e.g. "/projects/blockdegrees-1.png" (web: use a TALL full-page shot, it auto-scrolls)
  video?: string; // mobile: screen recording in /public, e.g. "/projects/ecommerce.mp4"
  embed?: boolean; // web: show the live site inside the browser frame (needs the site to allow iframes)
  accent: string;
  icon: LucideIcon;
}

const projects: Project[] = [
  {
    index: "01",
    category: "MOBILE APP",
    year: "2025 — now",
    status: "In Development",
    live: true,
    statusColor: "#22c55e",
    headline: "Shop smarter.\nCheckout faster.\nBuilt for Nigeria.",
    name: "Modern E-Commerce App",
    role: "Solo Developer",
    company: "Personal Project",
    stack: ["FLUTTER", "FIREBASE", "PROVIDER", "PAYSTACK"],
    github: "https://github.com/nuel232/modern-ecommerce-app",
    demo: null,
    type: "mobile",
    screenshots: ["#e2e8f0", "#cbd5e1", "#94a3b8"],
    accent: "#6366f1",
    icon: ShoppingBag,
  },
  {
    index: "02",
    category: "WEB3 APP",
    year: "2025",
    status: "Live",
    live: true,
    statusColor: "#f59e0b",
    headline: "Drug supply chain.\nOn-chain.\nTamper-proof.",
    name: "SecureMedChain",
    role: "Solo Developer",
    company: "Personal Project",
    stack: ["REACT", "SOLIDITY", "ETHERS.JS", "METAMASK"],
    github: "https://github.com/nuel232/secure-med-chain",
    demo: "https://secure-med-chain.vercel.app/",
    type: "web",
    screenshots: ["#d1fae5", "#a7f3d0", "#6ee7b7"],
    accent: "#10b981",
    icon: Shield,
  },
  {
    index: "03",
    category: "BLOCKCHAIN",
    year: "Feb — Jun 2025",
    status: "Completed",
    live: false,
    statusColor: "#8b5cf6",
    headline: "Fake degrees.\nMeet the\nblockchain.",
    name: "BlockDegrees",
    role: "Lead Developer",
    company: "BlockDegrees",
    stack: ["HARDHAT", "SOLIDITY", "NEO4J", "NODE.JS"],
    github: "https://github.com/nuel232/BlockDegrees",
    demo: "https://block-degrees-gilt.vercel.app/",
    type: "web",
    screenshots: ["#ede9fe", "#ddd6fe", "#c4b5fd"],
    accent: "#8b5cf6",
    icon: GraduationCap,
  },
  {
    index: "04",
    category: "AI APP",
    year: "2024",
    status: "Live",
    live: true,
    statusColor: "#ef4444",
    headline: "Your AI coach\nknows every\nplay.",
    name: "Basketball Coaching Assistant",
    role: "Solo Developer",
    company: "Personal Project",
    stack: ["REACT", "EXPRESS", "GEMINI AI", "NODE.JS"],
    github: "https://github.com/nuel232/coach-carter",
    demo: "https://coach-carter-weld.vercel.app/",
    type: "web",
    screenshots: ["#fef3c7", "#fde68a", "#fcd34d"],
    accent: "#f59e0b",
    icon: Bot,
  },
  {
    index: "05",
    category: "MOBILE APP",
    year: "2024",
    status: "Completed",
    live: false,
    statusColor: "#64748b",
    headline: "Real-time chat.\nZero friction.\nFirebase fast.",
    name: "Modern Chat App",
    role: "Solo Developer",
    company: "Personal Project",
    stack: ["FLUTTER", "FIREBASE", "PROVIDER", "FIRESTORE"],
    github: "https://github.com/nuel232/modern-Chat-App",
    demo: null,
    type: "mobile",
    screenshots: ["#dbeafe", "#bfdbfe", "#93c5fd"],
    accent: "#3b82f6",
    icon: MessageSquare,
  },
  {
    index: "06",
    category: "MOBILE APP",
    year: "2024",
    status: "Completed",
    live: false,
    statusColor: "#64748b",
    headline: "NBA stats.\nEvery player.\nRight now.",
    name: "NBA Stats App",
    role: "Solo Developer",
    company: "Personal Project",
    stack: ["FLUTTER", "REST API", "PROVIDER", "DART"],
    github: "https://github.com/nuel232/NBA-App-",
    demo: null,
    type: "mobile",
    screenshots: ["#fee2e2", "#fecaca", "#fca5a5"],
    accent: "#ef4444",
    icon: Activity,
  },
  {
    index: "07",
    category: "MOBILE APP",
    year: "2024",
    status: "Completed",
    live: false,
    statusColor: "#64748b",
    headline: "Track every naira.\nSee where\nit goes.",
    name: "Expense Tracker",
    role: "Solo Developer",
    company: "Personal Project",
    stack: ["FLUTTER", "HIVE", "FL_CHART", "PROVIDER"],
    github: "https://github.com/nuel232/Expense-tracker",
    demo: null,
    type: "mobile",
    screenshots: ["#dcfce7", "#bbf7d0", "#86efac"],
    accent: "#22c55e",
    icon: Wallet,
  },
];

// Gentle floating motion for the device frames
const Float = ({ children }: { children: React.ReactNode }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="w-full flex items-center justify-center"
      animate={reduce ? undefined : { y: [0, -12, 0], rotate: [0, 0.8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

// Live site shown inside the browser frame, scaled down from a 1280px-wide viewport
const LiveEmbed = ({ url }: { url: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setScale(el.clientWidth / 1280));
    ro.observe(el);
    setScale(el.clientWidth / 1280);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <iframe
        src={url}
        title="Live preview"
        loading="lazy"
        tabIndex={-1}
        className="border-0 pointer-events-none origin-top-left"
        style={{ width: 1280, height: 800, transform: `scale(${scale})` }}
      />
    </div>
  );
};

// Minimal SVG iPhone frame
const PhoneFrame = ({
  accent,
  screenshots,
  icon: Icon,
  image,
  video,
}: {
  accent: string;
  screenshots: string[];
  icon: LucideIcon;
  image?: string;
  video?: string;
}) => (
  <div className="relative flex items-center justify-center w-full h-full select-none">
    {/* Phone SVG shell */}
    <div className="relative" style={{ width: 260, height: 530 }}>
      {/* Outer frame */}
      <div
        className="absolute inset-0 rounded-[44px] shadow-2xl"
        style={{
          background: "linear-gradient(145deg, #2d2d2d, #1a1a1a)",
          boxShadow: `0 30px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 0 1px rgba(255,255,255,0.05)`,
        }}
      />
      {/* Side buttons */}
      <div className="absolute -left-[3px] top-[100px] w-[3px] h-8 rounded-l-sm bg-[#333]" />
      <div className="absolute -left-[3px] top-[148px] w-[3px] h-12 rounded-l-sm bg-[#333]" />
      <div className="absolute -left-[3px] top-[210px] w-[3px] h-12 rounded-l-sm bg-[#333]" />
      <div className="absolute -right-[3px] top-[140px] w-[3px] h-16 rounded-r-sm bg-[#333]" />
      {/* Screen bezel */}
      <div className="absolute inset-[6px] rounded-[38px] overflow-hidden bg-black">
        {/* Status bar */}
        <div className="relative h-10 bg-black flex items-end justify-between px-6 pb-1">
          <span className="text-white text-[10px] font-semibold">9:41</span>
          {/* Dynamic island */}
          <div
            className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-[26px] rounded-full"
            style={{ background: "#000" }}
          />
          <div className="flex items-center gap-1">
            <svg width="12" height="10" viewBox="0 0 12 10" fill="white">
              <rect x="0" y="3" width="2" height="7" rx="1" />
              <rect x="3" y="2" width="2" height="8" rx="1" />
              <rect x="6" y="1" width="2" height="9" rx="1" />
              <rect x="9" y="0" width="2" height="10" rx="1" />
            </svg>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="white">
              <path d="M7 2.5C9.5 2.5 11.7 3.7 13 5.6L14 4.4C12.4 2.1 9.9 0.7 7 0.7C4.1 0.7 1.6 2.1 0 4.4L1 5.6C2.3 3.7 4.5 2.5 7 2.5Z" />
              <path d="M7 5.5C8.5 5.5 9.8 6.2 10.7 7.3L11.7 6C10.4 4.5 8.8 3.5 7 3.5C5.2 3.5 3.6 4.5 2.3 6L3.3 7.3C4.2 6.2 5.5 5.5 7 5.5Z" />
              <circle cx="7" cy="9" r="1.2" />
            </svg>
            <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
              <rect x="0.5" y="0.5" width="18" height="9" rx="2.5" stroke="white" strokeOpacity="0.35" />
              <rect x="1.5" y="1.5" width="14" height="7" rx="1.5" fill="white" />
              <path d="M20 3.5V6.5C20.8 6.2 21.4 5.5 21.4 4.9C21.4 4.3 20.8 3.8 20 3.5Z" fill="white" fillOpacity="0.4" />
            </svg>
          </div>
        </div>

        {/* App content area */}
        <div
          className="flex-1 flex flex-col"
          style={{
            background: `linear-gradient(160deg, ${screenshots[0]}ee, ${screenshots[1]}cc, ${screenshots[2]}aa)`,
            height: "calc(100% - 40px - 34px)",
          }}
        >
          {/* App bar */}
          <div className="px-5 py-3 flex items-center justify-between" style={{ background: accent + "22" }}>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: accent + "33" }}>
                <Icon size={14} style={{ color: accent }} />
              </div>
              <div className="h-2.5 w-20 rounded-full opacity-40" style={{ background: accent }} />
            </div>
            <div className="w-7 h-7 rounded-full" style={{ background: accent + "33" }} />
          </div>

          {/* Mock content blocks */}
          <div className="flex-1 p-4 flex flex-col gap-3">
            {/* Big card */}
            <div className="rounded-2xl p-4 flex flex-col gap-2" style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(8px)" }}>
              <div className="h-2 w-3/4 rounded-full opacity-50" style={{ background: accent }} />
              <div className="h-16 rounded-xl opacity-20" style={{ background: accent }} />
              <div className="flex gap-2">
                <div className="h-2 w-12 rounded-full opacity-30" style={{ background: accent }} />
                <div className="h-2 w-16 rounded-full opacity-20" style={{ background: accent }} />
              </div>
            </div>

            {/* Two smaller cards */}
            <div className="grid grid-cols-2 gap-2">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="rounded-xl p-3 flex flex-col gap-1.5"
                  style={{ background: "rgba(255,255,255,0.45)", backdropFilter: "blur(8px)" }}
                >
                  <div className="w-6 h-6 rounded-lg opacity-40" style={{ background: accent }} />
                  <div className="h-1.5 w-full rounded-full opacity-30" style={{ background: accent }} />
                  <div className="h-1.5 w-2/3 rounded-full opacity-20" style={{ background: accent }} />
                </div>
              ))}
            </div>

            {/* List items */}
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-xl px-3 py-2 flex items-center gap-3"
                style={{ background: "rgba(255,255,255,0.4)", backdropFilter: "blur(8px)" }}
              >
                <div className="w-8 h-8 rounded-lg flex-shrink-0 opacity-30" style={{ background: accent }} />
                <div className="flex flex-col gap-1 flex-1">
                  <div className="h-1.5 rounded-full opacity-40" style={{ background: accent, width: `${60 + i * 15}%` }} />
                  <div className="h-1.5 rounded-full opacity-20" style={{ background: accent, width: `${40 + i * 10}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real app media (video or screenshot) covers the placeholder UI */}
        {(video || image) && (
          <div className="absolute inset-x-0 top-10 bottom-[34px] bg-black">
            {video ? (
              <video src={video} autoPlay muted loop playsInline className="w-full h-full object-cover object-top" />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={image} alt="" className="w-full h-full object-cover object-top" />
            )}
          </div>
        )}

        {/* Home indicator */}
        <div className="h-[34px] bg-black flex items-center justify-center">
          <div className="w-28 h-1 rounded-full bg-white opacity-30" />
        </div>
      </div>
    </div>
  </div>
);

// Minimal browser window frame for web projects
const BrowserFrame = ({
  accent,
  screenshots,
  icon: Icon,
  url,
  image,
  embed,
}: {
  accent: string;
  screenshots: string[];
  icon: LucideIcon;
  url: string | null;
  image?: string;
  embed?: boolean;
}) => {
  const host = url ? new URL(url).host : "localhost:3000";
  return (
    <div className="w-full max-w-[560px] select-none">
      <div
        className="rounded-xl overflow-hidden border border-foreground/10 bg-background"
        style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.05)" }}
      >
        {/* Toolbar */}
        <div className="flex items-center gap-3 px-3.5 py-2.5 bg-foreground/[0.04] border-b border-foreground/10">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-foreground/[0.06] text-[11px] font-mono text-muted-foreground truncate text-center">
            {host}
          </div>
        </div>

        {/* Viewport */}
        <div className="relative aspect-[16/10] overflow-hidden">
          {image ? (
            // Tall screenshot that slowly scrolls top to bottom and back
            <motion.div
              className="w-full h-full"
              style={{ backgroundImage: `url(${image})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat" }}
              initial={{ backgroundPositionY: "0%" }}
              animate={{ backgroundPositionY: ["0%", "100%"] }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", repeatDelay: 1.5 }}
            />
          ) : embed && url ? (
            <LiveEmbed url={url} />
          ) : (
            <div
              className="w-full h-full flex flex-col"
              style={{ background: `linear-gradient(160deg, ${screenshots[0]}ee, ${screenshots[1]}cc, ${screenshots[2]}aa)` }}
            >
              <div className="px-5 py-3 flex items-center justify-between" style={{ background: accent + "22" }}>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: accent + "33" }}>
                    <Icon size={13} style={{ color: accent }} />
                  </div>
                  <div className="h-2 w-16 rounded-full opacity-40" style={{ background: accent }} />
                </div>
                <div className="flex gap-3">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="h-1.5 w-10 rounded-full opacity-30" style={{ background: accent }} />
                  ))}
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col gap-4">
                <div className="h-3 w-1/2 rounded-full opacity-50" style={{ background: accent }} />
                <div className="h-2 w-2/3 rounded-full opacity-25" style={{ background: accent }} />
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="h-20 rounded-lg" style={{ background: "rgba(255,255,255,0.5)" }} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const project = projects[active];
  const total = String(projects.length).padStart(2, "0");

  const go = (idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return;
      if (e.key === "ArrowRight" && active < projects.length - 1) go(active + 1);
      if (e.key === "ArrowLeft" && active > 0) go(active - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const variants = {
    enter: (d: number) => ({ opacity: 0, y: d > 0 ? 40 : -40 }),
    center: { opacity: 1, y: 0 },
    exit: (d: number) => ({ opacity: 0, y: d > 0 ? -40 : 40 }),
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col overflow-hidden bg-background"
    >
      {/* Section label */}
      <div className="container mx-auto px-6 pt-16 pb-4">
        <p className="text-xs font-mono tracking-[0.25em] text-muted-foreground uppercase">
          Selected Work · Through the Lens
        </p>
      </div>

      {/* Main content */}
      <div className="flex-1 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-0 pb-10">
        {/* LEFT */}
        <div className="flex-1 flex flex-col justify-center lg:pr-10 w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="flex flex-col gap-5"
            >
              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono tracking-widest text-muted-foreground">
                <span style={{ color: project.accent }}>
                  {project.index} / {total}
                </span>
                <span>·</span>
                <span>{project.category}</span>
                <span>·</span>
                <span>{project.year}</span>
                <span
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-white text-[10px]"
                  style={{ background: project.statusColor }}
                >
                  <span className={`w-1.5 h-1.5 rounded-full bg-white opacity-80 ${project.live ? "animate-pulse" : ""}`} />
                  {project.status}
                </span>
              </div>

              {/* Headline */}
              <h2
                className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight"
                style={{ whiteSpace: "pre-line" }}
              >
                {project.headline}
              </h2>

              {/* App identity */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0"
                  style={{ background: project.accent + "22", border: `1px solid ${project.accent}33` }}
                >
                  <project.icon size={20} style={{ color: project.accent }} />
                </div>
                <div>
                  <p className="font-semibold text-sm">{project.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {project.role} · {project.company}
                  </p>
                </div>
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded border"
                    style={{
                      color: project.accent,
                      borderColor: project.accent + "44",
                      background: project.accent + "0d",
                    }}
                  >
                    [ {s} ]
                  </span>
                ))}
              </div>

              {/* Screenshot thumbnails */}
              <div className="flex gap-2">
                {project.screenshots.map((c, i) => (
                  <div
                    key={i}
                    className={`relative rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10 ${project.type === "web" ? "w-[112px] h-[70px]" : "w-[70px] h-[112px]"}`}
                    style={
                      project.images?.[i]
                        ? { background: `url(${project.images[i]}) center top / cover` }
                        : { background: `linear-gradient(160deg, ${c}cc, ${c}88)` }
                    }
                  >
                    <span className="absolute bottom-1.5 left-2 text-[9px] font-mono text-white/60">
                      0{i + 1}
                    </span>
                    {i === 0 && (
                      <div
                        className="absolute inset-0 rounded-xl"
                        style={{ outline: `2px solid ${project.accent}`, outlineOffset: "2px" }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border border-foreground/20 hover:bg-foreground/5 transition-colors"
                >
                  <GitBranch size={14} />
                  View Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-white transition-colors"
                    style={{ background: project.accent }}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT — phone */}
        <div className={`flex-1 flex items-center justify-center lg:pl-10 w-full ${project.type === "web" ? "min-h-[320px]" : "min-h-[560px]"}`}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={{
                enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60, rotate: d > 0 ? 4 : -4 }),
                center: { opacity: 1, x: 0, rotate: 0 },
                exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60, rotate: d > 0 ? -4 : 4 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="w-full flex items-center justify-center"
            >
              <Float>
                {project.type === "web" ? (
                  <BrowserFrame
                    accent={project.accent}
                    screenshots={project.screenshots}
                    icon={project.icon}
                    url={project.demo}
                    image={project.images?.[0]}
                    embed={project.embed}
                  />
                ) : (
                  <PhoneFrame
                    accent={project.accent}
                    screenshots={project.screenshots}
                    icon={project.icon}
                    image={project.images?.[0]}
                    video={project.video}
                  />
                )}
              </Float>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom project switcher */}
      <div className="container mx-auto px-6 pb-10">
        <div className="flex items-center gap-1 overflow-x-auto pb-2 scrollbar-hide">
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Show ${p.name}`}
              aria-current={i === active}
              title={p.name}
              className="flex-shrink-0 flex flex-col items-center gap-1.5 group"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: i === active ? p.accent + "22" : "transparent",
                  border: `1.5px solid ${i === active ? p.accent : "transparent"}`,
                  transform: i === active ? "scale(1.1)" : "scale(0.9)",
                  opacity: i === active ? 1 : 0.45,
                }}
              >
                <p.icon size={18} style={{ color: i === active ? p.accent : "currentColor", opacity: i === active ? 1 : 0.55 }} />
              </div>
              {i === active && (
                <motion.div
                  layoutId="dot"
                  className="w-1 h-1 rounded-full"
                  style={{ background: p.accent }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-3 h-px w-full bg-border relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full"
            style={{ background: project.accent }}
            animate={{ width: `${((active + 1) / projects.length) * 100}%` }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          />
        </div>
        <div className="mt-2 flex justify-between text-[10px] font-mono text-muted-foreground tracking-widest">
          <span>SELECTED WORK</span>
          <span>{project.index} / {total}</span>
        </div>
      </div>
    </section>
  );
}