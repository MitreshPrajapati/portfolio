import { motion as Motion } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiCodepen, FiCoffee, FiFeather, FiGithub, FiPenTool, FiStar, FiZap } from "react-icons/fi";
import type { IconType } from "react-icons";
import {
  SiAmazonwebservices,
  SiDocker,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import type { ReactNode } from "react";
import type { Project, SkillGroup, Stat, TimelineEntry } from "../types";
import { useDeveloperStats } from "../hooks/useDeveloperStats";

type RevealProps = { children: ReactNode; className?: string; delay?: number };
type HeadingProps = {
  index: string;
  label: string;
  title: string;
  accent?: string;
  description?: string;
};
const skillIcons: Record<string, ReactNode> = {
  React: <SiReact />,
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  "Node.js": <SiNodedotjs />,
  MongoDB: <SiMongodb />,
  Redux: <SiRedux />,
  Docker: <SiDocker />,
  AWS: <SiAmazonwebservices />,
  Git: <SiGit />,
};
const doodles: Array<{ Icon: IconType; label: string }> = [
  { Icon: FiPenTool, label: "pen" }, { Icon: FiCodepen, label: "code" },
  { Icon: FiStar, label: "star" }, { Icon: FiCoffee, label: "coffee" },
  { Icon: FiFeather, label: "feather" }, { Icon: FiZap, label: "spark" },
  { Icon: FiStar, label: "star" }, { Icon: FiCodepen, label: "code" },
];

export const Reveal = ({
  children,
  className = "",
  delay = 0,
}: RevealProps) => (
  <Motion.div
    className={className}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.18 }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </Motion.div>
);

export const DoodleBackdrop = () => (
  <div className="doodle-backdrop" aria-hidden="true">
    {doodles.map(({ Icon, label }, index) => (
      <Motion.span className="doodle" key={`${label}-${index}`}
        animate={{ y: [0, index % 2 ? 10 : -10, 0], rotate: [0, index % 2 ? 5 : -5, 0] }}
        transition={{ duration: 7 + index, repeat: Infinity, ease: "easeInOut", delay: index * .35 }}>
        <Icon />
      </Motion.span>
    ))}
    <span className="doodle-word doodle-braces">&#123; creative &#125;</span>
    <span className="doodle-word doodle-note">ideas → interfaces</span>
    <span className="doodle-squiggle" />
  </div>
);

export const SectionHeading = ({
  index,
  label,
  title,
  accent,
  description,
}: HeadingProps) => (
  <Reveal className="section-heading split">
    <div>
      <span>
        {index} / {label}
      </span>
      <h2>
        {title}
        {accent && (
          <>
            <br />
            <em>{accent}</em>
          </>
        )}
      </h2>
    </div>
    {description && <p>{description}</p>}
  </Reveal>
);

export const StatsGrid = ({ items }: { items: Stat[] }) => (
  <Reveal className="metrics" delay={0.1}>
    {items.map((item) => (
      <div key={item.label}>
        <strong>{item.value}</strong>
        <span>{item.label}</span>
      </div>
    ))}
  </Reveal>
);

export const SkillsGrid = ({ groups }: { groups: SkillGroup[] }) => (
  <div className="skill-grid">
    {groups.map((group, index) => (
      <Reveal className="skill-card" delay={index * 0.08} key={group.id}>
        <span className="skill-index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3>{group.title}</h3>
        <div className="skill-list">
          {group.skills.map((skill) => (
            <span key={skill.name}>
              <FiCheck />
              {skill.name}
            </span>
          ))}
        </div>
      </Reveal>
    ))}
  </div>
);

export const SkillMarquee = ({ items }: { items: string[] }) => {
  const loopItems = [...items, ...items];
  return (
    <section className="skill-marquee" aria-label="Core technologies">
      <div className="marquee-label">Core stack</div>
      <div className="marquee-viewport">
        <div className="marquee-track">
          {loopItems.map((item, index) => (
            <div
              className="marquee-item"
              key={`${item}-${index}`}
              aria-hidden={index >= items.length}
            >
              <span>{skillIcons[item]}</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const DeveloperImpact = ({
  github,
  gitlab,
}: {
  github: string[];
  gitlab: string;
}) => {
  const { data, loading, error } = useDeveloperStats(github, gitlab);
  if (loading)
    return (
      <div className="impact-grid" aria-live="polite">
        {[0, 1, 2].map((item) => (
          <div className="impact-card impact-loading" key={item} />
        ))}
      </div>
    );
  if (error)
    return (
      <p className="impact-error">
        Public activity is temporarily unavailable.
      </p>
    );
  return (
    <div className="impact-grid">
      {data.map((platform) => (
        <Reveal className="impact-card" key={platform.platform}>
          <div className="impact-card-head">
            <span>
              {platform.platform === "GitHub" ? <SiGithub /> : <SiGitlab />}
            </span>
            <div>
              <small>
                {platform.context} · @{platform.account}
              </small>
              <h3>{platform.platform}</h3>
            </div>
            <a
              href={platform.profileUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${platform.platform} profile`}
            >
              <FiArrowUpRight />
            </a>
          </div>
          <div className="impact-metrics">
            <div>
              <strong>{platform.repositories}</strong>
              <span>Repositories</span>
            </div>
            <div>
              <strong>{platform.recentCommits}</strong>
              <span>Recent commits</span>
            </div>
            <div>
              <strong>{platform.pullRequests}</strong>
              <span>
                {platform.platform === "GitLab"
                  ? "Merge requests"
                  : "Pull requests"}
              </span>
            </div>
            <div>
              <strong>{platform.stars}</strong>
              <span>Stars earned</span>
            </div>
            <div>
              <strong>{platform.forks}</strong>
              <span>Repository forks</span>
            </div>
            <div>
              <strong>{platform.followers}</strong>
              <span>Followers</span>
            </div>
          </div>
          {platform.context === "Work" && (
            <p className="private-activity-note">
              Public activity only. Private company repositories and commits
              are intentionally hidden by GitHub&apos;s unauthenticated API.
            </p>
          )}
        </Reveal>
      ))}
    </div>
  );
};

export const Timeline = ({
  items,
  type,
}: {
  items: TimelineEntry[];
  type: "experience" | "education";
}) => (
  <div className="timeline">
    {items.map((item, index) => (
      <Reveal className="timeline-item" delay={index * 0.08} key={item.id}>
        <div className="timeline-period">{item.period}</div>
        <div className="timeline-content">
          <span>{type === "education" ? item.institution : item.company}</span>
          <h3>{type === "education" ? item.degree : item.role}</h3>
          <p>{item.description}</p>
          {item.highlights && (
            <ul>
              {item.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </Reveal>
    ))}
  </div>
);

export const ProjectsGrid = ({ items }: { items: Project[] }) => (
  <div className="project-grid">
    {items.map((project, index) => (
      <Motion.article
        className={`project-card ${index === 0 || index === 3 ? "wide" : ""}`}
        key={project.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: (index % 3) * 0.08 }}
      >
        <a
          href={project.show_live_url ? project.live : project.github}
          target="_blank"
          rel="noreferrer"
          className="project-image"
        >
          <img src={project.image} alt={`${project.title} preview`} />
          <span>
            <FiArrowUpRight />
          </span>
        </a>
        <div className="project-info">
          <div>
            <p>{project.tech.slice(0, 3).join(" · ")}</p>
            <h3>{project.title}</h3>
          </div>
          <p>{project.description}</p>
          <div className="project-links">
            {project.show_live_url && (
              <a href={project.live} target="_blank" rel="noreferrer">
                Live site <FiArrowUpRight />
              </a>
            )}
            {project.show_git_url && (
              <a href={project.github} target="_blank" rel="noreferrer">
                Source <FiGithub />
              </a>
            )}
          </div>
        </div>
      </Motion.article>
    ))}
  </div>
);
