import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code2,
  Brain,
  Database,
  BarChart3,
  GraduationCap,
  Award,
  Briefcase,
  Menu,
  X,
  Sparkles,
  MapPin,
  Phone,
  ChevronRight,
  FileText,
  Layers3,
  Cpu,
} from "lucide-react";

const portfolio = {
  name: "Mahmoud Ahmed Nagiub Nafee",
  shortName: "Mahmoud Nagiub",
  title: "Software Engineer | AI Engineer",
  headline:
    "Building intelligent digital products with software engineering discipline, strong data foundations, and applied machine learning.",
  intro:
    "Software Engineering student specializing in Data Science with hands-on experience in machine learning, data analytics, model deployment, and dashboard development. I focus on turning data into practical systems that are useful, measurable, and production-minded.",
  location: "Cairo, Egypt",
  email: "mahmoud.nagib09@gmail.com",
  phone: "+20 1011534328",
  github: "https://github.com/MahmoudNagiubX",
  linkedin: "https://www.linkedin.com/in/mahmoudnagiubb/",
  cvPath: "/Mahmoud_Nagiub_CV.pdf",
  photoPath: "/profile.jpg",
  stats: [
    { label: "CGPA", value: "3.87 / 4.0" },
    { label: "Internship", value: "120 hrs" },
    { label: "ML Accuracy", value: "96%" },
    { label: "Focus", value: "AI + Data" },
  ],
  about: [
    "I am a Software Engineering student at the Egyptian Chinese University with a Data Science specialization and a strong interest in building intelligent systems that connect software engineering, analytics, and machine learning.",
    "My work combines clean implementation with applied AI, from data preprocessing and model development to dashboarding, APIs, and end-to-end deployment workflows.",
    "I aim to grow into a high-impact engineer who can design robust products, extract insight from data, and build AI-powered solutions that solve meaningful real-world problems.",
  ],
  skills: {
    "Programming Languages": ["Python", "SQL", "JavaScript"],
    Frontend: ["React", "HTML", "CSS", "JavaScript"],
    Backend: ["Flask", "FastAPI", "API Integration"],
    Databases: ["SQLite", "SQL"],
    "AI / Machine Learning": [
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "CNNs",
      "Model Evaluation",
      "Supervised Learning",
      "Unsupervised Learning",
    ],
    "Data Science": [
      "Pandas",
      "NumPy",
      "EDA",
      "Feature Engineering",
      "Data Cleaning",
      "ETL",
      "Matplotlib",
      "Seaborn",
      "Power BI",
      "Excel",
    ],
    "Tools & Platforms": ["Git", "Jupyter", "Kaggle", "Google Colab"],
    "Core AI Concepts": [
      "Computer Vision",
      "NLP",
      "Transformers",
      "Embeddings",
      "Model Optimization",
      "Model Deployment",
    ],
  },
  projects: [
    {
      title: "NeuroLearn",
      category: "AI",
      subtitle: "AI-Powered Student Intelligence Portal",
      description:
        "A research-heavy, engineering-focused academic platform designed to help university students study smarter through adaptive learning, retrieval-augmented assistance, AI code analysis, and productivity intelligence.",
      problem:
        "Students often rely on disconnected tools for studying, research, note-taking, coding practice, and progress tracking. NeuroLearn brings these workflows into one AI-native system focused on independent learning.",
      features: [
        "RAG-based study assistant for PDFs, slides, and notes",
        "Adaptive learning engine with quiz generation and mastery prediction",
        "AI code interview analyzer with evaluation and optimization guidance",
        "Research paper assistant for summarization, comparison, and gap discovery",
        "Analytics dashboard for mastery, productivity, burnout risk, and exam readiness",
      ],
      tech: [
        "React",
        "Python",
        "RAG",
        "Transformer Embeddings",
        "FAISS",
        "Pinecone",
        "Bayesian Knowledge Tracing",
        "Item Response Theory",
        "Reinforcement Learning",
      ],
      github: "https://github.com/MahmoudNagiubX/NeuroLearn",
      demo: "",
    },
    {
      title: "Egypt Smart City Digital Twin",
      category: "AI",
      subtitle: "AI-Powered Urban Intelligence Platform",
      description:
        "An advanced urban intelligence platform that creates a digital twin of an Egyptian city district, enabling monitoring, early issue detection, and predictive decision support through integrated geospatial and AI workflows.",
      problem:
        "Urban infrastructure, transportation, environmental sensing, satellite imagery, and citizen feedback are often fragmented across systems, making proactive planning and risk response difficult.",
      features: [
        "Digital twin modeling for a selected city district",
        "Multimodal data integration across infrastructure, transport, environment, and citizen feedback",
        "Urban risk prediction for flooding, congestion, waste, and infrastructure issues",
        "Computer vision, NLP, and geospatial analytics within one decision-support vision",
        "Interactive dashboard direction for planners, authorities, and researchers",
      ],
      tech: [
        "Machine Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Geospatial Analytics",
        "Digital Twin Systems",
        "Data Integration",
      ],
      github: "https://github.com/MahmoudNagiubX/Egypt-Smart-City-Digital-Twin",
      demo: "",
    },
    {
      title: "Quanta Compiler",
      category: "Software",
      subtitle: "Compiler Design & Language Engineering Project",
      description:
        "A university compiler engineering project focused on building a complete statically typed C-like programming language from scratch, with a structured pipeline from source code to executable output.",
      problem:
        "Compiler construction requires much more than parsing syntax. It needs language design, semantic validation, intermediate representation, optimization strategy, and backend execution planning.",
      features: [
        "Custom programming language design with Quanta syntax and tooling",
        "Three-stage compiler pipeline: frontend, middle-end, and backend",
        "Lexer, parser, AST construction, semantic analysis, and IR generation",
        "Planned LLVM-oriented backend workflow for executable generation",
        "Extended ecosystem vision including Quanta Studio, language server, and AI assistant",
      ],
      tech: [
        "Python",
        "Compiler Design",
        "LLVM",
        "Recursive Descent Parsing",
        "Lark",
        "React",
        "Monaco Editor",
        "FastAPI",
      ],
      github: "https://github.com/MahmoudNagiubX/Quanta-Compiler",
      demo: "",
    },
    {
      title: "Navigator Robot",
      category: "AI",
      subtitle: "Python Robotics Navigation Project",
      description:
        "A robotics-oriented navigation project centered on intelligent movement and guidance logic in a Python-based implementation.",
      problem:
        "Navigation robots require reliable control logic and structured project organization to support autonomous guidance workflows.",
      features: [
        "Navigation-focused robotics project structure",
        "Python implementation foundation",
        "Autonomous guidance direction",
      ],
      tech: ["Python", "Robotics", "Navigation Systems"],
      github: "https://github.com/MahmoudNagiubX/Navigator-Robot",
      demo: "",
    },
    {
      title: "Multi-Disease Detection System",
      category: "AI",
      subtitle: "Healthcare AI Screening Platform",
      description:
        "A robust healthcare web application that combines machine learning, deep learning, and conversational AI to support early screening and risk assessment for critical health conditions.",
      problem:
        "Medical screening tools are often isolated by task. This project unifies tabular prediction, medical imaging analysis, reporting, and conversational support in one integrated user experience.",
      features: [
        "Heart disease risk assessment using a Random Forest classifier",
        "Brain tumor MRI classification using a TensorFlow/Keras CNN",
        "Confidence-based outputs with tailored result explanations",
        "AI medical assistant powered by Groq Cloud with context-aware response flow",
        "Secure user experience with authentication and PDF report generation",
      ],
      tech: [
        "Python",
        "Flask",
        "Scikit-learn",
        "TensorFlow",
        "Keras",
        "CNNs",
        "Groq API",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      github: "https://github.com/MahmoudNagiubX/Multi-Disease-Detection-System",
      demo: "",
    },
    
    {
      title: "Space Invaders Game",
      category: "Software",
      subtitle: "C++ Arcade Game with Raylib",
      description:
        "A modern recreation of the classic Space Invaders arcade experience, built in C++ using Raylib with gameplay systems, scoring, audio, and restart flow.",
      problem:
        "Arcade games are excellent for demonstrating control flow, collision handling, event-driven interaction, and structured gameplay programming in C++.",
      features: [
        "Player spaceship movement and shooting mechanics",
        "Enemy invader waves with collision handling",
        "Score tracking and game-over flow",
        "Sound effects, background music, and custom sprite assets",
        "Built with Raylib for lightweight 2D game development",
      ],
      tech: ["C++", "Raylib", "Game Development", "2D Gameplay Programming"],
      github: "https://github.com/MahmoudNagiubX/Space-Invaders-Game",
      demo: "",
    },
    {
      title: "Super Mango Game",
      category: "Software",
      subtitle: "Interactive C++ Game Project",
      description:
        "A public game development project that showcases interactive programming, gameplay structure, and object-oriented implementation in C++.",
      problem:
        "Game projects help demonstrate how programming fundamentals translate into playable systems with rules, objects, and interaction loops.",
      features: [
        "Interactive gameplay-oriented project structure",
        "Object-oriented programming direction",
        "Public game repository for portfolio presentation",
      ],
      tech: ["C++", "Game Development", "OOP"],
      github: "https://github.com/MahmoudNagiubX/Super-Mango-Game",
      demo: "",
    },
    {
      title: "Pong Game",
      category: "Software",
      subtitle: "C++ Arcade Programming Project",
      description:
        "A C++ implementation of the classic Pong concept, built as a lightweight arcade programming project and released under the MIT License.",
      problem:
        "Simple arcade games are strong exercises for practicing loops, input handling, game state updates, and core interactive logic.",
      features: [
        "Classic Pong-style gameplay implementation",
        "C++ arcade programming workflow",
        "Public repository with executable and preview assets",
      ],
      tech: ["C++", "Game Development"],
      github: "https://github.com/MahmoudNagiubX/Pong-Game",
      demo: "",
    },
  ],
  experience: [
    {
      type: "experience",
      title: "Data Analyst Intern",
      place: "National Telecommunication Institute (NTI)",
      time: "Aug 2025 – Sep 2025",
      details: [
        "Completed a 120-hour intensive internship focused on data analysis, visualization, machine learning, and reporting.",
        "Applied Python, Pandas, and Scikit-learn for preprocessing, feature engineering, and predictive modeling.",
        "Built Power BI dashboards to visualize KPIs and support decision-making.",
        "Collaborated on end-to-end data pipelines including cleaning and transformation workflows.",
      ],
    },
    {
      type: "education",
      title: "Bachelor of Engineering in Software Engineering",
      place: "Egyptian Chinese University (ECU)",
      time: "Sep 2023 – Oct 2028",
      details: [
        "Data Science Specialization",
        "CGPA: 3.87 / 4.0",
        "Strong academic direction in software engineering, analytics, and AI systems.",
      ],
    },
  ],
  certifications: [
    "Machine Learning Specialization — Coursera (DeepLearning.AI & Stanford Online)",
    "Deep Learning Specialization — Coursera (DeepLearning.AI)",
    "AI & Machine Learning Program — Sprints & Microsoft",
    "Python Fundamentals & Python for Data Analysis — DataCamp",
    "Data Analytics — National Telecommunication Institute (NTI)",
    "Data Analytics Intern — Elevvo",
  ],
  achievements: [
    "Built AI and analytics projects spanning healthcare prediction and business intelligence.",
    "Developed both model-centric and dashboard-centric solutions with practical deployment thinking.",
    "Maintains a strong academic record while building hands-on technical experience.",
  ],
  featuredRepos: [
    {
      name: "NeuroLearn",
      description: "AI-native student intelligence platform with RAG, adaptive learning, research support, and productivity analytics.",
      link: "https://github.com/MahmoudNagiubX/NeuroLearn",
      tag: "Featured AI",
    },
    {
      name: "Egypt-Smart-City-Digital-Twin",
      description: "Urban intelligence platform combining digital twin thinking with multimodal AI and geospatial monitoring.",
      link: "https://github.com/MahmoudNagiubX/Egypt-Smart-City-Digital-Twin",
      tag: "Featured Vision",
    },
    {
      name: "Quanta-Compiler",
      description: "Compiler engineering project spanning language design, parsing, IR, backend planning, and development tooling.",
      link: "https://github.com/MahmoudNagiubX/Quanta-Compiler",
      tag: "Featured Software",
    },
    {
      name: "Multi-Disease-Detection-System",
      description: "Integrated healthcare AI platform combining ML, CNN-based imaging, reporting, and conversational assistance.",
      link: "https://github.com/MahmoudNagiubX/Multi-Disease-Detection-System",
      tag: "Featured AI",
    },
  ],
};

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "journey",
  "certifications",
  "presence",
  "contact",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-fuchsia-200/90">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">{description}</p>
    </motion.div>
  );
}

function NavLink({ item, active, onClick }) {
  return (
    <a
      href={`#${item}`}
      onClick={onClick}
      className={`transition-colors ${
        active
          ? "text-white"
          : "text-slate-300 hover:text-white"
      }`}
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </a>
  );
}

function NeuralBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrame;
    let width = 0;
    let height = 0;
    const pointer = { x: null, y: null, radius: 135 };
    let resizeTimeout;

    const particleCount = 58;
    const particles = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          size: Math.random() * 1.2 + 0.8,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;

        if (pointer.x !== null && pointer.y !== null) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          if (dist < pointer.radius) {
            const force = (pointer.radius - dist) / pointer.radius;
            p.x -= (dx / dist) * force * 0.38;
            p.y -= (dy / dist) * force * 0.38;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(233, 213, 255, 0.38)";
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const opacity = 1 - dist / 100;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity * 0.11})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      if (pointer.x !== null && pointer.y !== null) {
        for (let i = 0; i < particles.length; i += 1) {
          const p = particles[i];
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(pointer.x, pointer.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(216, 180, 254, ${(1 - dist / 110) * 0.08})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const handlePointerLeave = () => {
      pointer.x = null;
      pointer.y = null;
    };

    const handleResize = () => {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        resize();
        createParticles();
      }, 80);
    };

    resize();
    createParticles();
    draw();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-10 opacity-55" aria-hidden="true" />;
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [activeSection, setActiveSection] = useState("home");

  React.useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === "All") return portfolio.projects;
    return portfolio.projects.filter((project) => project.category === filter);
  }, [filter]);

  const categories = ["All", ...new Set(portfolio.projects.map((p) => p.category))];

  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-slate-100 selection:bg-fuchsia-400/30 selection:text-white">
      <NeuralBackground />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-fuchsia-500/14 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[26rem] w-[26rem] rounded-full bg-violet-500/14 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[24rem] w-[24rem] rounded-full bg-purple-500/12 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.15),rgba(2,6,23,0.98)_55%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-fuchsia-400/20 bg-white/5 text-fuchsia-300 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-white">{portfolio.shortName}</p>
              <p className="text-xs text-slate-400">Software Engineer & AI Engineer</p>
            </div>
          </a>

          <div className="hidden items-center gap-6 text-sm md:flex">
            {sectionIds.map((item) => (
              <NavLink key={item} item={item} active={activeSection === item} />
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={portfolio.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-200 transition hover:border-fuchsia-300/40 hover:bg-white/10 hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-200 transition hover:border-fuchsia-300/40 hover:bg-white/10 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          <button
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4 text-sm">
              {sectionIds.map((item) => (
                <NavLink
                  key={item}
                  item={item}
                  active={activeSection === item}
                  onClick={() => setMobileOpen(false)}
                />
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-fuchsia-200">
                <Sparkles className="h-3.5 w-3.5" />
                Open to impactful engineering opportunities
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                {portfolio.name}
              </h1>
              <p className="mt-5 text-lg font-medium text-fuchsia-200 md:text-2xl">{portfolio.title}</p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                {portfolio.headline}
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 md:text-base">
                {portfolio.intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                >
                  View Projects <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href={portfolio.cvPath}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-fuchsia-300/30 hover:bg-white/10"
                >
                  <Download className="h-4 w-4" /> Download CV
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:border-fuchsia-300/30 hover:bg-white/5"
                >
                  <Mail className="h-4 w-4" /> Contact Me
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 transition hover:bg-white/10"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={portfolio.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 transition hover:bg-white/10"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {portfolio.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
                  >
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-fuchsia-400/20 via-violet-500/10 to-purple-400/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_20px_80px_rgba(2,6,23,0.55)] backdrop-blur-2xl">
                <img
                  src={portfolio.photoPath}
                  alt={`${portfolio.name} portrait`}
                  className="h-full w-full rounded-[1.5rem] object-cover"
                />
                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-white">{portfolio.shortName}</p>
                      <p className="mt-1 text-xs text-slate-300">Applied AI • Data Science • Software Engineering</p>
                    </div>
                    <div className="rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-2 text-xs font-medium text-fuchsia-200">
                      Available
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="About"
            title="Engineering mindset with AI ambition"
            description="A concise profile designed to show technical depth, practical thinking, and long-term growth potential."
          />

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="space-y-5 text-sm leading-8 text-slate-300 md:text-base">
                {portfolio.about.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="grid gap-5"
            >
              {[
                {
                  icon: Code2,
                  title: "Software Engineering Foundation",
                  text: "Focused on structured implementation, reusable systems, maintainable code, and product-oriented thinking.",
                },
                {
                  icon: Brain,
                  title: "Applied AI & Machine Learning",
                  text: "Experienced with data preprocessing, predictive modeling, deep learning, evaluation, and practical deployment workflows.",
                },
                {
                  icon: Layers3,
                  title: "Data-Driven Problem Solving",
                  text: "Comfortable translating raw data into dashboards, insights, and decision-support tools with measurable value.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <item.icon className="mb-4 h-6 w-6 text-fuchsia-300" />
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Skills"
            title="A balanced technical stack"
            description="Organized to help recruiters quickly understand the range of engineering, analytics, and AI capabilities."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {Object.entries(portfolio.skills).map(([category, items], index) => {
              const icons = {
                "Programming Languages": Code2,
                Frontend: Layers3,
                Backend: Briefcase,
                Databases: Database,
                "AI / Machine Learning": Brain,
                "Data Science": BarChart3,
                "Tools & Platforms": FileText,
                "Core AI Concepts": Cpu,
              };

              const Icon = icons[category] || Code2;

              return (
                <motion.div
                  key={category}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/10 p-3 text-fuchsia-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-300 transition hover:border-fuchsia-300/30 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Projects"
              title="Proof through shipped work"
              description="Selected projects that highlight the ability to combine AI, analytics, software implementation, and product thinking."
            />

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    filter === category
                      ? "bg-white text-slate-950"
                      : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-fuchsia-300/20"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-fuchsia-200">
                    {project.category}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-500">{project.subtitle}</span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Problem Solved</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{project.problem}</p>
                </div>

                <div className="mt-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Key Features</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 transition hover:bg-white/10"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 transition hover:bg-white/10"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="journey" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Journey"
            title="Education and experience"
            description="A clean timeline that communicates both academic excellence and practical industry exposure."
          />

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2" />
            <div className="space-y-8">
              {portfolio.experience.map((item, index) => {
                const Icon = item.type === "education" ? GraduationCap : Briefcase;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative grid gap-4 md:grid-cols-2"
                  >
                    <div className={`${index % 2 === 0 ? "md:pr-10" : "md:order-2 md:pl-10"}`}>
                      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                        <div className="mb-4 inline-flex rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/10 p-3 text-fuchsia-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.time}</p>
                        <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 text-sm text-fuchsia-200">{item.place}</p>
                        <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                          {item.details.map((detail) => (
                            <li key={detail} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="hidden md:block" />
                    <div className="absolute left-4 top-8 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950 text-fuchsia-300 md:left-1/2">
                      <Icon className="h-4 w-4" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="certifications" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Credentials"
            title="Certifications and achievements"
            description="A concise credibility layer that reinforces commitment to continuous learning and technical growth."
          />

          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/10 p-3 text-fuchsia-300">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">Certifications</h3>
              </div>
              <div className="space-y-3">
                {portfolio.certifications.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/10 p-3 text-fuchsia-300">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">Highlights</h3>
              </div>
              <div className="space-y-4">
                {portfolio.achievements.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                    <p className="text-sm leading-7 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="presence" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Presence"
            title="GitHub and coding footprint"
            description="Designed to make technical activity easier to scan while leaving room for future automation and API-powered stats."
          />

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-white">Profile Links</h3>
              <div className="mt-5 space-y-4">
                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-4 transition hover:bg-slate-900"
                >
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-fuchsia-300" />
                    <div>
                      <p className="font-medium text-white">GitHub</p>
                      <p className="text-xs text-slate-400">Source code, projects, and repositories</p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-400" />
                </a>
                <a
                  href={portfolio.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-4 transition hover:bg-slate-900"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-fuchsia-300" />
                    <div>
                      <p className="font-medium text-white">LinkedIn</p>
                      <p className="text-xs text-slate-400">Professional profile and network</p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-400" />
                </a>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-dashed border-white/10 bg-slate-900/40 p-5">
                <p className="text-sm font-medium text-white">Future enhancement</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  This block is intentionally ready for GitHub API integration to show live repositories, contribution data, pinned projects, or coding stats.
                </p>
              </div>
            </motion.div>

            <div className="grid gap-5">
              {portfolio.featuredRepos.map((repo, index) => (
                <motion.a
                  key={repo.name}
                  href={repo.link}
                  target="_blank"
                  rel="noreferrer"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-fuchsia-300/20"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-fuchsia-200">
                      {repo.tag}
                    </span>
                    <ExternalLink className="h-4 w-4 text-slate-400" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{repo.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{repo.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something meaningful"
            description="This section is intentionally professional and simple so recruiters can take action quickly."
          />

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-white">Contact Information</h3>
              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <Mail className="mt-0.5 h-5 w-5 text-fuchsia-300" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a href={`mailto:${portfolio.email}`} className="text-slate-300 hover:text-white">
                      {portfolio.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <Phone className="mt-0.5 h-5 w-5 text-fuchsia-300" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <a href={`tel:${portfolio.phone}`} className="text-slate-300 hover:text-white">
                      {portfolio.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-fuchsia-300" />
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p>{portfolio.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:${portfolio.email}?subject=Portfolio Inquiry from Website`;
              }}
            >
              <h3 className="text-xl font-semibold text-white">Send a Message</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                This contact form currently opens the visitor’s email client. It can later be connected to Formspree, EmailJS, or a custom backend.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-fuchsia-300/40"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Your Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-fuchsia-300/40"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm text-slate-300">Subject</label>
                <input
                  type="text"
                  placeholder="Opportunity / Collaboration"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-fuchsia-300/40"
                />
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm text-slate-300">Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell me about your project, role, or opportunity..."
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-fuchsia-300/40"
                />
              </div>

              <button
                type="submit"
                className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" /> Send Message
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} {portfolio.shortName}. Crafted for a strong software and AI personal brand.</p>
          <div className="flex items-center gap-4">
            <a href={portfolio.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
            <a href={`mailto:${portfolio.email}`} className="hover:text-white">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
