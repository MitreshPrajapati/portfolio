export interface Skill {
  name: string;
  level: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: Skill[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface TimelineEntry {
  id: string;
  period: string;
  startDate?: string;
  endDate?: string;
  description: string;
  role?: string;
  company?: string;
  degree?: string;
  institution?: string;
  highlights?: string[];
}

export interface Project {
  id: number;
  image: string;
  title: string;
  github: string;
  live: string;
  show_git_url: boolean;
  show_live_url: boolean;
  tech: string[];
  description: string;
}

export interface PortfolioData {
  navigation: string[];
  developerAccounts: { github: string[]; gitlab: string; bitbucket?: string };
  featuredSkills: string[];
  stats: Stat[];
  skillGroups: SkillGroup[];
  experience: TimelineEntry[];
  education: TimelineEntry[];
}
