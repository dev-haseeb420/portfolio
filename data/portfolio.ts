import {
  Activity,
  Cloud,
  Container,
  FileCode2,
  GitBranch,
  Lock,
  Network,
  ShieldCheck,
  Terminal,
  type LucideIcon,
} from "lucide-react";

/** Core identity and contact details. Reused across metadata, hero, navbar and footer. */
export const profile = {
  name: "Muhammad Haseeb",
  initials: "MH",
  role: "Senior DevOps Engineer",
  subRole: "Cloud & Platform Engineering",
  headline:
    "DevOps Engineer | Cloud & Platform Engineering | AWS & Azure | Kubernetes | Terraform | CI/CD | Docker | DevSecOps",
  location: "Lahore, Punjab, Pakistan",
  email: "muhammadhaseebb854@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-haseeb-960aa8364/",
  resumeHref: "/resume/muhammad-haseeb-resume.pdf",
  resumeFileName: "Muhammad-Haseeb-Resume.pdf",
} as const;

export const navLinks: { label: string; href: string }[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

export const heroTech = ["AWS", "Terraform", "Kubernetes", "Docker", "CI/CD", "DevSecOps"];

export const heroCopy =
  "DevOps Engineer with 7+ years of experience building scalable cloud infrastructure, Infrastructure as Code, CI/CD pipelines, containerized environments, observability platforms, and secure production systems.";

/** Rewritten, portfolio-friendly professional summary. */
export const summary = {
  paragraphs: [
    "I design and operate cloud infrastructure that engineering teams can build on with confidence — provisioned as code, deployed through automated pipelines, and observed in production rather than guessed at.",
    "Across enterprise, startup and healthcare-grade environments, my focus stays consistent: repeatable Infrastructure as Code, secure-by-default AWS architecture, resilient CI/CD, and Kubernetes platforms that stay reliable as they scale. I work closely with engineering and security teams to turn manual, error-prone operations into automated, auditable workflows.",
  ],
  highlights: [
    { label: "7+ Years", detail: "in DevOps & cloud engineering" },
    { label: "Multi-Cloud", detail: "AWS · Azure · GCP" },
    { label: "IaC-First", detail: "Terraform & CloudFormation" },
    { label: "3-Stage Delivery", detail: "dev · staging · production" },
  ],
} as const;

/** Compact keyword band — the breadth of the stack, distinct from the grouped Skills matrix. */
export const coreExpertise: string[] = [
  "AWS",
  "Azure",
  "GCP",
  "Kubernetes",
  "EKS",
  "AKS",
  "Docker",
  "Terraform",
  "CloudFormation",
  "Ansible",
  "GitHub Actions",
  "GitLab CI/CD",
  "Jenkins",
  "Azure DevOps",
  "Argo CD",
  "Flux",
  "Python",
  "Bash",
  "Prometheus",
  "Grafana",
  "CloudWatch",
  "Azure Monitor",
  "ELK Stack",
  "IAM",
  "RBAC",
  "Secrets Management",
  "HashiCorp Vault",
  "DevSecOps",
  "Infrastructure as Code",
  "Release Engineering",
  "Incident Response",
  "Disaster Recovery",
  "High Availability",
  "Cost Optimization",
];

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Turing",
    role: "Senior DevOps Engineer",
    period: "Nov 2022 – Present",
    highlights: [
      "Lead AWS infrastructure architecture and platform reliability initiatives across enterprise and healthcare-focused environments.",
      "Design and maintain reusable Terraform modules for secure, scalable infrastructure provisioning.",
      "Architect GitHub Actions pipelines covering build, testing, security scanning, artifact management and automated deployments.",
      "Implement OIDC-based authentication between GitHub Actions and AWS to eliminate long-lived credentials.",
      "Strengthen cloud security posture with IAM least-privilege policies, Secrets Manager, encryption standards and centralized audit logging.",
      "Build observability frameworks using CloudWatch, Prometheus and Grafana for proactive monitoring and incident detection.",
    ],
  },
  {
    company: "Devsarch",
    role: "Senior DevOps Engineer",
    period: "Oct 2019 – Oct 2022",
    highlights: [
      "Built and maintained highly available AWS infrastructure across development, staging and production environments.",
      "Developed reusable Terraform modules covering networking, compute, security and data services.",
      "Implemented CI/CD pipelines with GitHub Actions and Jenkins across multi-environment deployment workflows.",
      "Supported Kubernetes workloads on Amazon EKS, including provisioning, configuration and deployment validation.",
      "Automated backup validation and disaster recovery testing to strengthen infrastructure resilience.",
      "Collaborated with security teams on compliance controls, access management and vulnerability remediation.",
    ],
  },
  {
    company: "Contour Software",
    role: "DevOps Engineer",
    period: "Feb 2018 – Sep 2019",
    highlights: [
      "Managed AWS infrastructure for healthcare applications handling sensitive patient data.",
      "Designed HIPAA-aligned cloud environments with strong access controls, encryption and auditability.",
      "Automated infrastructure provisioning and deployments using Infrastructure as Code and CI/CD tooling.",
      "Administered RDS databases, backup strategies and recovery procedures.",
      "Implemented monitoring, alerting and production incident response processes to improve uptime.",
      "Managed IAM policies, secrets management and compliance-focused infrastructure operations.",
    ],
  },
];

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Cloud",
    icon: Cloud,
    items: ["AWS", "Azure", "GCP"],
  },
  {
    title: "Containers & Orchestration",
    icon: Container,
    items: ["Kubernetes", "EKS", "AKS", "GKE", "Docker", "Helm"],
  },
  {
    title: "Infrastructure as Code",
    icon: FileCode2,
    items: ["Terraform", "AWS CloudFormation", "Ansible", "ARM / Bicep"],
  },
  {
    title: "CI/CD & GitOps",
    icon: GitBranch,
    items: ["GitHub Actions", "GitLab CI/CD", "Jenkins", "Azure DevOps", "Argo CD", "Flux"],
  },
  {
    title: "Programming & Automation",
    icon: Terminal,
    items: ["Python", "Bash", "Shell", "PowerShell"],
  },
  {
    title: "Observability",
    icon: Activity,
    items: ["Prometheus", "Grafana", "CloudWatch", "Azure Monitor", "ELK / Elastic Stack"],
  },
  {
    title: "Security",
    icon: Lock,
    items: [
      "IAM",
      "RBAC",
      "HashiCorp Vault",
      "Secrets Management",
      "Encryption",
      "Vulnerability Management",
      "SonarQube",
      "DevSecOps",
    ],
  },
  {
    title: "Infrastructure & Operations",
    icon: Network,
    items: [
      "Linux",
      "Networking",
      "DNS",
      "Load Balancing",
      "VPNs",
      "High Availability",
      "Incident Response",
      "Disaster Recovery",
      "Cost Optimization",
    ],
  },
];

export interface CapabilityCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const capabilities: CapabilityCard[] = [
  {
    title: "Cloud Infrastructure",
    description:
      "Designing scalable, secure and reliable infrastructure across AWS, Azure and GCP.",
    icon: Cloud,
  },
  {
    title: "Infrastructure as Code",
    description:
      "Reusable and maintainable infrastructure using Terraform, CloudFormation and Ansible.",
    icon: FileCode2,
  },
  {
    title: "CI/CD & Automation",
    description:
      "Automating build, test, security validation, artifact management and deployments.",
    icon: GitBranch,
  },
  {
    title: "Kubernetes & Containers",
    description: "Running containerized workloads across Kubernetes, EKS and AKS.",
    icon: Container,
  },
  {
    title: "Observability & Reliability",
    description: "Monitoring and operational visibility using Prometheus, Grafana and CloudWatch.",
    icon: Activity,
  },
  {
    title: "Cloud Security",
    description: "IAM, secrets management, encryption, auditing and DevSecOps practices.",
    icon: ShieldCheck,
  },
];

export interface EducationEntry {
  institution: string;
  credential: string;
  period: string;
  location?: string;
}

export const education: EducationEntry[] = [
  {
    institution: "University of the Punjab",
    credential: "Bachelor of Science in Information Technology (BSIT)",
    period: "2015 – 2019",
    location: "Lahore, Pakistan",
  },
];

export const contactCta = {
  heading: "Let's build reliable infrastructure.",
  body: "Open to conversations about DevOps, cloud architecture and platform engineering roles.",
};
