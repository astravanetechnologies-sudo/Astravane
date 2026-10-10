/* Company-wide content: navigation, services, industries, stats, approach and contact details. */

export const company = {
  name: "Astravane",
  legalName: "Astravane Technologies",
  tagline: "Innovate · Elevate · Transform",
  email: "info@astravane.com",
  phone: "+92 333 4245089",
  address: "123 Tech Avenue, Lahore, Punjab, Pakistan",
};

export const navItems = [
  { id: "about-us", label: "About" },
  { id: "services", label: "Services" },
  { id: "products", label: "Platforms" },
  { id: "work", label: "Work" },
  { id: "industries", label: "Industries" },
  { id: "approach", label: "Approach" },
  { id: "careers", label: "Careers" },
];

export const stats = [
  { num: "50+", label: "Projects Delivered" },
  { num: "30+", label: "Happy Clients" },
  { num: "20+", label: "Industries Served" },
  { num: "99%", label: "Client Satisfaction" },
  { num: "24/7", label: "Support Available" },
];

/* Businesses whose projects appear in the portfolio below. */
export const clients = [
  "Bin Sultan Fabrics",
  "Alpha Builders Group",
  "Zero/Six Consulting",
  "M Luqman Attar House",
  "Access Ability Assist",
  "Work Supplies",
  "Mertzon Construction",
  "The Animal Clinic",
  "TAOK Visuals",
  "Ricky's Dry Cleaners",
];

export const values = ["Client Success", "Innovation", "Integrity", "Excellence", "Collaboration"];

export const services = [
  { icon: "code", title: "Custom Software Development", desc: "Scalable, secure and high-performing software built for your unique needs." },
  { icon: "devices", title: "Web & Mobile Development", desc: "Engaging web and mobile applications that deliver seamless user experiences." },
  { icon: "brain", title: "AI & Machine Learning", desc: "Intelligent solutions that learn, adapt and help you make smarter decisions." },
  { icon: "cloud", title: "Cloud & DevOps", desc: "Scalable cloud solutions and DevOps practices that accelerate your growth." },
  { icon: "transform", title: "Digital Transformation", desc: "Modernize your processes and create a future-ready organization." },
  { icon: "layers", title: "ERP & Enterprise Solutions", desc: "Integrated software solutions to streamline operations and growth." },
  { icon: "bot", title: "Automation & RPA", desc: "Automate repetitive tasks and workflows to improve productivity and accuracy." },
  { icon: "chart", title: "Data Analytics & BI", desc: "Turn your data into actionable insights with powerful analytics and dashboards." },
  { icon: "shield", title: "Cybersecurity", desc: "Secure your digital assets with robust security solutions and compliance." },
  { icon: "advisory", title: "IT Consulting & Advisory", desc: "Expert guidance to help you achieve the right technology strategy." },
  { icon: "check", title: "QA & Testing", desc: "Ensure quality, performance and reliability with rigorous testing." },
  { icon: "api", title: "System Integration & APIs", desc: "Seamless integration of systems and APIs for connected experiences." },
];

/* Technologies used across the projects in the portfolio. */
export const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Flutter", "React Native", "Firebase", "Supabase",
  "PostgreSQL", "Drizzle ORM", "Tailwind CSS", "WordPress", "Elementor", "Shopify", "Figma", "Google Maps",
];

/* The four solution suites, each backed by systems from the portfolio (project slugs from projects.js). */
export const suites = [
  { icon: "box", title: "Astravane ERP", desc: "Sales, purchasing, stock, payroll and accounts managed in one system.", color: "linear-gradient(135deg,#7B4DFF,#B44DFF)", projects: ["bin-sultan-erp", "mechamanpro", "management-suite"] },
  { icon: "heart", title: "Astravane Health", desc: "Digital solutions for healthcare providers, billing and management.", color: "linear-gradient(135deg,#FF5C7A,#FF9F43)", projects: ["emr", "access-ability-assist", "the-animal-clinic"] },
  { icon: "ai", title: "Astravane AI", desc: "AI-powered assistants, analytics and decision support inside the product.", color: "linear-gradient(135deg,#2E5EE8,#7B4DFF)", projects: ["mechamanpro", "ai-fitex"] },
  { icon: "pie", title: "Astravane BI", desc: "Dashboards and reports that turn daily operations into clear numbers.", color: "linear-gradient(135deg,#2E5EE8,#31C6C6)", projects: ["bin-sultan-erp", "emr", "mechamanpro"] },
];

/* Industries with delivered work. The projects under each one come from the `industry` field in projects.js. */
export const industries = [
  { icon: "cart", label: "Retail & E-commerce" },
  { icon: "medical", label: "Healthcare" },
  { icon: "car", label: "Automotive" },
  { icon: "building", label: "Construction & Real Estate" },
  { icon: "utensils", label: "Food & Travel" },
  { icon: "dumbbell", label: "Fitness & Wellness" },
  { icon: "clapper", label: "Media & Entertainment" },
  { icon: "cap", label: "Education & Productivity" },
  { icon: "factory", label: "Manufacturing" },
  { icon: "store", label: "Local Services" },
];

/* Sectors the company also serves. */
export const alsoServing = [
  { icon: "bank", label: "Banking & Finance" },
  { icon: "gov", label: "Government" },
  { icon: "truck", label: "Logistics" },
];

export const approach = [
  { icon: "search", title: "Discover", desc: "We understand your business, challenges and opportunities." },
  { icon: "compass", title: "Design", desc: "We shape solutions and user experiences that fit your goals." },
  { icon: "hammer", title: "Develop", desc: "We build scalable and high-performing solutions." },
  { icon: "rocket", title: "Deploy", desc: "We deploy with confidence, ensuring a smooth transition to production." },
  { icon: "refresh", title: "Evolve", desc: "We continuously improve and support as your business grows." },
];
