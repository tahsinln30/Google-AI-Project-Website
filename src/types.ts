export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  skillsAndTools?: string[];
  location?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  details?: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  type: string;
  description: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  journal: string;
  url: string;
  description: string;
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  description: string;
}

export interface VitalMetric {
  id: string;
  label: string;
  value: string;
  subtext: string;
}
