export interface SkillCategory {
  title: string;
  category: 'core_ml' | 'web_db' | 'concepts';
  description: string;
  skills: {
    name: string;
    badge?: string;
    experienceLevel?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedPoints: string[];
  tags: string[];
  category: 'AI/ML' | 'Full-Stack' | 'Database Architecture';
  link?: string;
  hasGithub: boolean;
  statusBadge: string;
}

export const PERSONAL_INFO = {
  name: 'Yash Pandey',
  role: '2nd-Year B.Tech CS & AIML Student',
  subHeadline: 'Driven by solving real-world problems through data and intelligent systems.',
  location: 'India',
  availability: 'Open to AI/ML Internships & Collaborations',
  email: 'yashpandey2211@gmail.com',
  phone: '+91 9129711378',
  phoneFormatted: '+91 91297 11378',
  links: {
    github: 'https://github.com/yashpandey2211-a11y',
    linkedin: 'https://www.linkedin.com/in/yash-pandey-577106381/',
    leetcode: 'https://leetcode.com/problemset/',
    email: 'mailto:yashpandey2211@gmail.com',
    phone: 'tel:+919129711378',
  },
  aboutExactText:
    "I’m a Computer Science student focused on Artificial Intelligence and Machine Learning, driven by solving real-world problems through data and intelligent systems. My interests include Machine learning model development, Data pipelines and APIs, Experimenting with LLM and automation workflows, and Participating in hackathons and technical competitions. I’ve worked with Python-based tools and enjoy exploring practical implementations rather than just theoretical study. I’m continuously building projects that strengthen my understanding of model design, optimization, and deployment. Currently seeking opportunities to collaborate, learn, and contribute to AI/ML initiatives or internships where I can apply and expand my technical skills.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core & Machine Learning',
    category: 'core_ml',
    description: 'Statistical modeling, data exploration, numerical computing, and generative AI orchestration.',
    skills: [
      { name: 'Python', badge: 'Primary' },
      { name: 'Pandas', badge: 'Data' },
      { name: 'NumPy', badge: 'Compute' },
      { name: 'Matplotlib', badge: 'Visualization' },
      { name: 'LLM Workflows', badge: 'GenAI' },
    ],
  },
  {
    title: 'Web & Database Systems',
    category: 'web_db',
    description: 'Frontend interfaces, serverless database backends, relational databases, and query optimization.',
    skills: [
      { name: 'React', badge: 'Frontend' },
      { name: 'Tailwind CSS', badge: 'Styling' },
      { name: 'Supabase', badge: 'Backend DB' },
      { name: 'SQL', badge: 'Queries' },
      { name: 'MySQL', badge: 'RDBMS' },
      { name: 'MongoDB', badge: 'NoSQL' },
    ],
  },
  {
    title: 'Concepts & Engineering Foundations',
    category: 'concepts',
    description: 'Algorithmic problem solving, API contract design, data orchestration pipelines, and interface usability.',
    skills: [
      { name: 'Data Structures & Algorithms', badge: 'Core' },
      { name: 'APIs', badge: 'Integration' },
      { name: 'Data Pipelines', badge: 'ETL' },
      { name: 'UI Design', badge: 'Design' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'signbridge',
    title: 'SignBridge',
    subtitle: 'Accessibility-Focused AI/ML System',
    description: 'An accessibility-focused AI/ML project designed to bridge communication barriers through intelligent computer vision and machine learning interpretation.',
    detailedPoints: [
      'Engineered for assistive communication and accessibility technology using computer vision techniques.',
      'Practical implementation utilizing Python-based data processing and neural network modeling.',
      'Designed with high real-world empathy to enable inclusive digital interactions.'
    ],
    tags: ['Python', 'AI/ML', 'Computer Vision', 'Accessibility'],
    category: 'AI/ML',
    link: 'https://github.com/yashpandey2211-a11y/SignBridge',
    hasGithub: true,
    statusBadge: 'Active Repository',
  },
  {
    id: 'sales-dashboard',
    title: 'Interactive Sales Dashboard',
    subtitle: 'Full-Stack Real-time Analytics System',
    description: 'A responsive full-stack analytics dashboard connected to a Supabase backend database, featuring interactive charts and secure data routing.',
    detailedPoints: [
      'Architected end-to-end data synchronization between a Supabase PostgreSQL backend and a responsive UI.',
      'Implemented dynamic filtering, performance metrics visualization, and aggregation pipelines.',
      'Optimized query performance and interface responsiveness across desktop and mobile form factors.'
    ],
    tags: ['React', 'Tailwind CSS', 'Supabase', 'SQL', 'Data Analytics'],
    category: 'Full-Stack',
    hasGithub: false,
    statusBadge: 'Full-Stack Architecture',
  },
  {
    id: 'paytm-dbms',
    title: 'Paytm DBMS Case Study',
    subtitle: 'Relational Database Architecture & Query Optimization',
    description: 'Comprehensive database management analysis involving ER diagram modeling, relational schema normalization, and complex SQL query execution.',
    detailedPoints: [
      'Modeled complete fintech transaction workflows from consumer wallets to merchant payment gateways.',
      'Enforced 3NF normalization rules to eliminate data redundancy and preserve ACID transactional integrity.',
      'Constructed complex multi-join SQL queries, index strategies, and concurrency-safe ledger structures.'
    ],
    tags: ['DBMS', 'SQL', 'ER Modeling', 'Relational Schema', 'Normalization'],
    category: 'Database Architecture',
    hasGithub: false,
    statusBadge: 'Case Study & Analysis',
  },
];

export const INTEREST_PILLARS = [
  {
    id: 'ml-models',
    title: 'ML Model Development',
    description: 'Designing, optimizing, and evaluating machine learning architectures with practical Python toolchains.',
    icon: 'BrainCircuit',
  },
  {
    id: 'data-pipelines',
    title: 'Data Pipelines & APIs',
    description: 'Building robust ingestion flows, structured schemas, and clean RESTful API integration layers.',
    icon: 'DatabaseZap',
  },
  {
    id: 'llm-workflows',
    title: 'LLM & Automation Workflows',
    description: 'Experimenting with prompt orchestration, intelligent agents, and automated data pipelines.',
    icon: 'Sparkles',
  },
  {
    id: 'hackathons',
    title: 'Hackathons & Competitions',
    description: 'Thriving in fast-paced technical environments, solving real-world challenges through rapid prototyping.',
    icon: 'Trophy',
  },
];
