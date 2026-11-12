import { useEffect, useState } from "react";
import { motion as Motion, useScroll, useSpring } from "framer-motion";
import { LottieLight } from "lottie-react";
import Lenis from "lenis";
import {
  FiArrowUpRight,
  FiCode,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiMoon,
  FiHexagon,
  FiSun,
  FiX,
} from "react-icons/fi";
import { projects, portfolio } from "./utils/data";
import {
  DeveloperImpact,
  DoodleBackdrop,
  ProjectsGrid,
  Reveal,
  SectionHeading,
  SkillMarquee,
  SkillsGrid,
  StatsGrid,
  Timeline,
} from "./Components";
import profile from "./assets/profile.png";
import resume from "./assets/Resume.pdf";
import developerMotion from "./assets/developer-motion.json";
import { calculateExperience } from "./utils/experience";

const featured = projects.slice(0, 6);
const palettes = ["royal", "emerald", "amethyst", "graphite"] as const;
type Palette = (typeof palettes)[number];

function App() {
  const calculatedStats = portfolio.stats.map((stat) =>
    stat.label === "Years of experience"
      ? { ...stat, value: calculateExperience(portfolio.experience) }
      : stat,
  );
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );
  const [palette, setPalette] = useState<Palette>(() => {
    const saved = localStorage.getItem("palette") as Palette | null;
    return saved && palettes.includes(saved) ? saved : "royal";
  });
  const [menu, setMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => {
    document.documentElement.dataset.palette = palette;
    localStorage.setItem("palette", palette);
  }, [palette]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      anchors: { offset: -76 },
    });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;
    const cards = document.querySelectorAll<HTMLElement>(
      ".skill-card, .project-card, .metrics > div, .timeline-item",
    );
    const cleanups = Array.from(cards).map((card) => {
      const move = (event: PointerEvent) => {
        const bounds = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${event.clientX - bounds.left}px`);
        card.style.setProperty("--mouse-y", `${event.clientY - bounds.top}px`);
        card.dataset.glow = "true";
      };
      const leave = () => delete card.dataset.glow;
      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", leave);
      return () => {
        card.removeEventListener("pointermove", move);
        card.removeEventListener("pointerleave", leave);
      };
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return (
    <>
      <Motion.div className="progress" style={{ scaleX }} />
      <DoodleBackdrop />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Mitresh Prajapati home">
          MP<span>.</span>
        </a>
        <nav
          className={menu ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          {portfolio.navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenu(false)}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-btn palette-btn"
            onClick={() =>
              setPalette(
                palettes[(palettes.indexOf(palette) + 1) % palettes.length],
              )
            }
            aria-label={`Current palette: ${palette}. Switch color palette`}
            title={`Palette: ${palette}`}
            data-label={palette}
          >
            <FiHexagon />
            <span className="palette-indicator" />
          </button>
          <button
            className="icon-btn"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <a className="header-cta" href="#contact">
            Let’s talk <FiArrowUpRight />
          </a>
          <button
            className="menu-btn"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle menu"
          >
            {menu ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>
      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <Motion.div
              className="eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span /> Available for opportunities
            </Motion.div>
            <Motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              I build digital products that feel <em>effortless.</em>
            </Motion.h1>
            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              I’m Mitresh, a full-stack developer focused on thoughtful
              interfaces, resilient backends, and web experiences people enjoy
              using.
            </Motion.p>
            <Motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <a className="button primary" href="#projects">
                Explore my work <FiArrowUpRight />
              </a>
              <a className="button ghost" href={resume} download>
                Download resume <FiDownload />
              </a>
            </Motion.div>
            <Motion.div
              className="social-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="https://github.com/MitreshPrajapati"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mitresh-prajapati/"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin /> LinkedIn
              </a>
            </Motion.div>
          </div>
          <Motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-lottie" aria-hidden="true">
              <LottieLight src={developerMotion} loop autoplay />
            </div>
            <div className="portrait-wrap">
              <img src={profile} alt="Mitresh Prajapati" />
            </div>
            <Motion.div
              className="floating-card code-card"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <FiCode />
              <span>
                Clean code.
                <br />
                <b>Real impact.</b>
              </span>
            </Motion.div>
            <div className="floating-card stats-card">
              <strong>2.5+</strong>
              <span>
                years crafting
                <br />
                digital products
              </span>
            </div>
          </Motion.div>
        </section>
        <SkillMarquee items={portfolio.featuredSkills} />
        <section className="section-shell about" id="about">
          <Reveal className="section-heading">
            <span>01 / About</span>
            <h2>
              Developer by craft.
              <br />
              <em>Problem solver</em> by nature.
            </h2>
          </Reveal>
          <div className="about-grid">
            <Reveal className="about-copy">
              <p>
                I turn product ideas into fast, accessible, production-ready
                applications. My sweet spot is the space between sharp visual
                thinking and dependable engineering.
              </p>
              <p>
                From React interfaces to Node.js APIs, I care about the small
                decisions that make software easier to use, scale, and maintain.
              </p>
              <a href="#contact" className="text-link">
                Let’s build something meaningful <FiArrowUpRight />
              </a>
            </Reveal>
            <StatsGrid items={calculatedStats} />
          </div>
        </section>
        <section className="section-shell" id="skills">
          <SectionHeading
            index="02"
            label="Expertise"
            title="Tools I use to turn"
            accent="ideas into products."
            description="Balanced across the stack, with a strong eye for frontend detail."
          />
          <SkillsGrid groups={portfolio.skillGroups} />
        </section>
        {/* <section className="section-shell" id="impact"> 
          <SectionHeading
            index="03"
            label="Developer impact"
            title="Proof in the"
            accent="public record."
            description="Live public engineering activity across GitHub and GitLab. Recent commits reflect activity exposed by each platform's public events API."
          />
          <DeveloperImpact {...portfolio.developerAccounts} />
        </section> */}
        <section className="section-shell" id="experience">
          <SectionHeading
            index="03"
            label="Experience"
            title="Building products"
            accent="that perform."
            description="Practical experience across user interfaces, backend systems, and production workflows."
          />
          <Timeline items={portfolio.experience} type="experience" />
        </section>
        <section className="section-shell" id="education">
          <SectionHeading
            index="04"
            label="Education"
            title="Always learning,"
            accent="always improving."
            description="Continuous development across architecture, product engineering, and modern tooling."
          />
          <Timeline items={portfolio.education} type="education" />
        </section>
        <section className="section-shell " id="projects">
        {/* <section className="section-shell projects" id="projects"> */}
          <SectionHeading
            index="04"
            label="Selected work"
            title="Ideas, shipped."
            description="A selection of products spanning full-stack platforms, dashboards, and commerce experiences."
          />
          <ProjectsGrid items={featured} />
        </section>
        <section className="contact section-shell" id="contact">
          <Reveal>
            <span className="contact-kicker">Have a project in mind?</span>
            <h2>
              Let’s make something
              <br />
              <em>remarkable.</em>
            </h2>
            <p>
              Whether you’re building a new product or improving an existing
              one, I’d love to hear what you’re working on.
            </p>
            <a className="button light" href="mailto:mitreshverma@gmail.com">
              Start a conversation <FiMail />
            </a>
          </Reveal>
        </section>
      </main>
      <footer>
        <a className="brand" href="#home">
          MP<span>.</span>
        </a>
        <p>Designed & built by Mitresh Prajapati</p>
        <div>
          <a
            href="https://github.com/MitreshPrajapati"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mitresh-prajapati/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
export default App;
