import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/2.png";
import project3 from "../assets/projects/3.png";
import project4 from "../assets/projects/4.png";
import project5 from "../assets/projects/5.png";
import project6 from "../assets/projects/6.png";
import project61 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/7.png";
import project9 from "../assets/projects/sparkImage.jpg";
import project10 from "../assets/projects/9.png";
import project11 from "../assets/projects/project11.jpg";
import project12 from "../assets/projects/project12.jpg";

import image1 from "../assets/Open/image1.jpg";
import image2 from "../assets/Open/image-2.jpg";
import image3 from "../assets/Open/image-3.jpg";
import image4 from "../assets/Open/image-4.jpg";
import image5 from "../assets/Open/image-5.jpg";

export const HERO_CONTENT = `I am a passionate Full Stack Developer actively building scalable and modern web applications using the MERN stack. On the frontend, I specialize in React.js with TypeScript, Redux Toolkit, and Tailwind CSS, crafting responsive and dynamic user experiences. On the backend, I work with Node.js, Express.js, MongoDB (with Mongoose ODM), and Prisma, and I’m also exploring PostgreSQL with Neon for advanced data handling. I have experience implementing authentication, secure APIs, and third-party integrations like Firebase and Cloudinary. Additionally, I bring analytical skills in Data Analysis using Python and Excel, along with dashboarding and insights visualization using Power BI.`;

export const ABOUT_TEXT = `Hi, I’m Nevin Bali — a tech enthusiast, problem solver, and passionate full stack developer who finds joy in building products that are both functional and beautiful.

🎓 I'm currently pursuing my B.Tech in Computer Science at MSIT (2023–2027), and already diving deep into real-world development. From crafting scalable APIs to designing pixel-perfect UIs, I enjoy the full journey from backend logic to frontend delight.

⚙️ My stack? Think MERN, Next.js, TypeScript, Firebase, Prisma, and Tailwind — a perfect blend of performance and aesthetics. I've worked with powerful state tools like Redux Toolkit and Zustand, implemented secure JWT auth, and handled real-time magic with Socket.io.

📊 I also explore Data Science fundamentals, with experience in Power BI, NumPy, and EDA using Python. Visualization, for me, is where code meets storytelling.

🚀 I’ve contributed to communities like Geekroom & GDG MSIT, where I serve as Deputy Head of Development. Mentorship, teamwork, and hackathons fuel my growth.

💬 Always open to exciting collaborations, freelance gigs, and open source missions. Let’s build something that matters!

🔗 Scroll below, check out my work, or just drop me a “Hey” in the contact section.`;

export const EXPERIENCES = [
  {
    Duration: "Mar 2025 – Apr 2025",
    role: "Full Stack Web Developer Intern",
    company: "Financea",
    description: `Worked in a remote startup environment to build the core MVP of Financea using Next.js, TypeScript, and MongoDB.`,
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "React 19",
    ],
    Tasks: `Delivered full-stack features and contributed to the scalable architecture of the product.`,
  },
  {
    Duration: "Feb 2025 – Present",
    role: "Deputy Head of Development",
    company: "Geek Room – MSIT",
    description: `Leading development initiatives to boost the technical growth of the community. Coordinating meets and projects to empower students.`,
    technologies: ["React.js", "Node.js", "Tailwind", "MongoDB"],
  },
  {
    Duration: "Oct 2024 – Present",
    role: "Deputy Head of Development",
    company: "GDGOC – MSIT",
    description: `Spearheading development initiatives to drive the community's technical advancement, while organizing projects and meetups to empower and upskill fellow students`,
    technologies: [
      "Departent Supervision",
      "Department Management",
      "Full Stack Development",
    ],
  },
];

export const PROJECTS = [
  {
    title: "🤖 InteliMail – AI Cold Email Generator",
    image: project12,
    github: "https://github.com/Nevin100/InteliMail-AI-Cold-Email-Generator",
    description:
      "InteliMail is a lightweight AI-powered web tool that helps users generate formal, personalized cold emails instantly using the Gemini LLM model.".padEnd(
        140,
        " "
      ),
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Gemini API",
    ],
    keyFeatures: [
      "Generate formal emails based on user details using Gemini LLM",
      "Supports name, position, role, qualities, and social links",
      "Fully responsive design with clean UI and one-click copy",
      "No sign-up or authentication needed – just plug and play",
    ],
    learnings: [
      "Integrated Gemini API for dynamic email generation",
      "Designed a frictionless user flow with no backend complexity",
      "Built a sleek UI using TailwindCSS and shadcn/ui",
    ],
  },
  {
    title: "📰 NewsMail – AI-Integrated Newsletter Platform",
    image: project11,
    github: "https://github.com/Nevin100/NewsMail",
    description:
      "NewsMail is a powerful MERN stack newsletter platform that allows scraping news articles, managing subscribers, and sending bulk emails with AI-enhanced summaries.".padEnd(
        140,
        " "
      ),
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind",
      "Nodemailer",
      "Gemini API",
      "Cheerio",
    ],
    keyFeatures: [
      "Scrapes and summarizes news content using Gemini API",
      "Bulk email sending via Nodemailer",
      "Admin dashboard for newsletter management",
      "AI integration for custom content generation",
    ],
    learnings: [
      "Worked with Cheerio for DOM parsing and scraping",
      "Integrated Gemini API for summarizing articles",
      "Handled newsletter scheduling and bulk mailing",
    ],
  },
  {
    title: "⚡ HireWire – AI-Powered Interview Preparation Tool",
    image: project1,
    github: "https://github.com/Nevin100/HireWire",
    description:
      "HireWire is an AI-powered interview prep tool that generates tailored technical questions based on your role and experience using Gemini API.".padEnd(
        140,
        " "
      ),
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind",
      "Gemini API",
    ],
    keyFeatures: [
      "AI-generated interview questions using Gemini API",
      "Session-based prep with role and domain context",
    ],
    learnings: [
      "Implemented Gemini API for dynamic question generation",
      "Built session-based flows for personalized prep",
    ],
  },
  {
    title: "📚 PagePulse – E-Commerce Bookstore",
    image: project2,
    github: "https://github.com/Nevin100/PagePulse",
    description:
      "PagePulse is a full-stack bookstore with user authentication, product management, and admin dashboard secured by Firebase and JWT.".padEnd(
        140,
        " "
      ),
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "JWT",
      "Redux Toolkit",
      "Firebase",
    ],
    keyFeatures: [
      "Role-based dashboards and product CRUD",
      "JWT and Firebase for secure dual authentication",
    ],
    learnings: [
      "Built protected routes using JWT and Firebase",
      "Managed global state with Redux Toolkit",
    ],
  },
  {
    title: "🚀 Sociopedia – MERN Social Media App",
    image: project3,
    github: "https://github.com/Nevin100/Sociopedia",
    description:
      "Sociopedia is a MERN social platform with real-time posts, likes, comments, friends, and profile management features.".padEnd(
        140,
        " "
      ),
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind",
      "Material UI",
    ],
    keyFeatures: [
      "Create, like, and comment on posts",
      "Manage friends and user profiles securely",
    ],
    learnings: [
      "Designed social graph schemas in MongoDB",
      "Built JWT-secured authentication flows",
    ],
  },
  {
    title: "🗒️ Notify – Cloud Notes App",
    image: project5,
    github: "https://github.com/Nevin100/Notify",
    description:
      "Notify is a minimalist notes app supporting CRUD, tagging, pinning, search, and secure JWT-based user authentication.".padEnd(
        140,
        " "
      ),
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "TailwindCSS",
    ],
    keyFeatures: [
      "Note creation, editing, pinning, and deletion",
      "Tag-based filtering and search functionality",
    ],
    learnings: [
      "Built protected API routes with JWT",
      "Enhanced search and filtering using React",
    ],
  },
  {
    title: "🍽️ Restaura – Restaurant Showcase Website",
    image: project6,
    github: "https://github.com/Nevin100/Restaura",
    description:
      "Restaura is a responsive restaurant website featuring animations, menus, and highlights with clean UI/UX using React and Tailwind.".padEnd(
        140,
        " "
      ),
    technologies: ["React.js", "TailwindCSS", "Framer Motion", "HTML"],
    keyFeatures: [
      "Responsive layout for all screen sizes",
      "Framer Motion powered smooth animations",
    ],
    learnings: [
      "Applied animation techniques with Framer Motion",
      "Focused on branding with UI/UX design balance",
    ],
  },
  {
    title: "🌱 Plantventory — Track Your Greens Like a Pro 🪴✨",
    image: project8,
    github: "https://github.com/Nevin100/Plantventory",
    description:
      `Welcome to Plantventory, your personal jungle journal! A full-stack, modern-as-heck plant inventory app built with Next.js, TypeScript, Prisma, Neon (PostgreSQL), Stack Auth, and UploadThing. Curate, care for, and celebrate your favorite medicinal herbs, houseplants, and garden greens — all in one smooth digital space. 🌼🧪🌾`.padEnd(
        140,
        " "
      ),
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Neon (PostgreSQL)",
      "Stack Auth",
      "UploadThing",
      "Tailwind CSS",
    ],
    keyFeatures: [
      "Custom Plant Inventory: Add, edit, and organize all your leafy friends with love and labels",
      "Smart Notes to log care routines and growth stages",
    ],
    learnings: [
      "Built a full-stack Next.js app with TypeScript",
      "Integrated Prisma ORM with Neon PostgreSQL",
    ],
  },
  {
    title: "💬 Baatein – Real-Time Chat App",
    image: project4,
    github: "https://github.com/Nevin100/Baatein",
    description:
      "Baatein is a MERN chat app with real-time messaging via Socket.io, dynamic themes, and secure authentication using JWT.".padEnd(
        140,
        " "
      ),
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Bcrypt.js",
      "Zustand",
      "TailwindCSS",
      "DaisyUI",
    ],
    keyFeatures: [
      "Real-time messaging with Socket.io",
      "Dynamic themes using DaisyUI components",
    ],
    learnings: [
      "Implemented instant chat with WebSockets",
      "Handled secure login with Bcrypt and JWT",
    ],
  },
  {
    title: "⚡ SPARK – Bridging the Gap Between Campus & Code! 🚀",
    image: project9,
    github: "https://github.com/Nevin100/S.P.A.R.K",
    description:
      `A revolutionary platform for students, societies, sponsors, and curious minds in tech. SPARK bridges skill gaps by connecting academia, industry, and hackathons to build job-ready developers.`.padEnd(
        140,
        " "
      ),
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Firebase Auth",
      "JWT",
      "MongoDB",
      "Cloudinary",
    ],
    keyFeatures: [
      "Industry Challenges: Solve real tasks by companies",
      "Multi-Chapter Societies: Enable cross-campus collaborations",
    ],
    learnings: [
      "Designed scalable dev ecosystem connecting students and industry",
      "Integrated Firebase Authentication and JWT for secure login",
    ],
  },
  {
    title: "🚀 ReactIn3D 🧠💌",
    image: project10,
    github: "https://github.com/Nevin100/ReactIn3D",
    description:
      `ReactIn3D is a futuristic 3D email platform for developers. Built with React.js, Tailwind CSS, and Spline, it redefines frontend presentation with stunning visuals.`.padEnd(
        140,
        " "
      ),
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Spline 3D",
      "Vercel (Deployment)",
    ],
    keyFeatures: [
      "3D Interactive Visuals powered by Spline",
      "Fully Responsive Layout with Flexbox and Tailwind",
    ],
    learnings: [
      "Integrated 3D scenes into React via Spline",
      "Built a responsive and aesthetic layout using Tailwind CSS",
    ],
  },
  {
    title: "📊 HR Analytics Dashboard",
    image: project61,
    github: "#",
    description:
      "A Power BI dashboard analyzing employee attrition by demographics to identify HR trends and provide actionable insights.".padEnd(
        140,
        " "
      ),
    technologies: ["Power BI"],
    keyFeatures: [
      "Interactive attrition metrics by age and dept",
      "Demographic segmented visual analytics",
    ],
    learnings: [
      "Mastered data modeling in Power BI",
      "Created dynamic metrics using DAX formulas",
    ],
  },
  {
    title: "📈 Firm Financial Dashboard",
    image: project7,
    github: "#",
    description:
      "Power BI dashboard visualizing savings, investments, and revenues to deliver comprehensive financial insights to decision-makers.".padEnd(
        140,
        " "
      ),
    technologies: ["Power BI"],
    keyFeatures: [
      "Consolidated KPIs across financial metrics",
      "Time-series analysis with slicers and drilldowns",
    ],
    learnings: [
      "Built financial data flows for dashboard",
      "Utilized Power BI drilldowns and filters",
    ],
  },
];

export const OpenSourceContributionsData = [
  {
    image: image4,
    role: "Frontend Developer",
    company: "Code Kshetra 2.0 (MLH Hackathon)",
    repo: "https://github.com/Nevin100/CodeKshetra2.0",
    description: `Worked on the main event website, implemented animated interfaces using Tailwind and React. Collaborated with the offline team to coordinate logistics with major tech partners.`,
    technologies: ["React.js", "TypeScript", "TailwindCSS", "Animations"],
    link: "https://code-kshetra2-0.vercel.app/#/",
  },
  {
    image: image5,
    role: "Frontend Developer & Moderator",
    company: "Pears Global Hackathon",
    repo: "https://github.com/Nevin100/pears-hack-website",
    description: `Handled frontend development and event moderation. Ensured smooth user onboarding and built dynamic event modules to streamline hackathon participation.`,
    technologies: ["React.js", "TailwindCSS", "User Experience"],
    link: "https://pearshack.geekroom.in/",
  },
  {
    image: image3,
    role: "Frontend Developer & Participant",
    company: "Manipal University Jaipur (MUJ)",
    repo: "https://github.com/Nevin100/MUJ-Hack-Website",
    description: `Built a responsive hackathon website using React, TypeScript, and Tailwind during participation at MUJ Hackathon. Delivered performance-optimized components under tight deadlines.`,
    technologies: [
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "Responsive Design",
    ],
    link: "https://codemanipal.geekroom.in/#/",
  },
  {
    image: image2,
    role: "Frontend Developer",
    company: "Geekroom – MSIT",
    repo: "https://github.com/Nevin100/Geek-Room",
    description: `Developed the official Geekroom website using Next.js and SASS with a focus on responsive UI, optimized structure, and seamless animations.`,
    technologies: ["Next.js", "SASS", "TailwindCSS", "Responsiveness"],
    link: "https://www.geekroom.in/",
  },
  {
    image: image1,
    role: "Deputy Head & Frontend Supervisor",
    company: "GDGOC – MSIT",
    repo: "https://github.com/Nevin100/gdgoc-website",
    description: `Led the frontend team in developing the GDGOC website using React and TailwindCSS. Oversaw animation workflows with Framer Motion and coordinated team execution across modules.`,
    technologies: [
      "React.js",
      "Framer Motion",
      "TailwindCSS",
      "Department Management",
      "Team Supervision",
    ],
    link: "https://www.gdgmsit.in/",
  },
];

export const CONTACT = {
  address: "Sector 8, Dwarka, New Delhi – 110077, India",
  email1: "opopopopop100000@gmail.com",
  email2: "nevinbali10@gmail.com",
};
