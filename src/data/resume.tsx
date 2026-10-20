import { Icons } from "@/components/icons";
import {
  BriefcaseBusiness,
  CodeIcon,
  GraduationCap,
  HomeIcon,
  icons,
  NotebookIcon,
  PencilLine,
} from "lucide-react";

export interface WorkRole {
  title: string;
  start: string;
  end?: string;
  description?: string;
}

export interface WorkExperience {
  company: string;
  href?: string;
  badges?: string[];
  location?: string;
  title?: string;
  icon: boolean;
  logoUrl: string;
  start: string;
  end?: string;
  description?: string;
  roles?: WorkRole[];
}

export const DATA = {
  name: "Waqar Akhtar",
  initials: "WA",
  url: "https://waqarakhtar.codes",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
    "Motivated B.Tech AI & Data Science student at GGSIPU with hands-on experience in full-stack development, AI-driven applications, and technical leadership roles.",
  summary:
    "I thrive in turning ideas into functional, user-focused products from AI-powered learning platforms to productivity tools and enjoy working across the stack, from backend logic to polished, responsive UIs. My projects are designed not just to \"work\" but to solve real problems and scale." +
    "\n\n" +
    "I'm actively expanding my skills in data structures, algorithms, cloud infrastructure, AI/ML pipelines, and scalable architectures to be ready for both engineering roles and innovation-driven environments.",
  avatarUrl: "/profile.jpg",
  skills: [
    "Java",
    "Javascript",
    "React.js",
    "Next.js",
    "Typescript",
    "Python",
    "C",     
    "Node.js",
    "Express.js",
    "Flask",
    "React Native",
    "MongoDB",
    "GraphQL",
    "DBMS",
    "NGINX",
    "Git",
    "GitHub Actions",
    "TailwindCSS",
    "Shadcn UI",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: CodeIcon, label: "Projects" },
    { href: "/#experience", icon: BriefcaseBusiness, label: "Experience" },
    { href: "/#education", icon: GraduationCap, label: "Education" },
    {
      href: "https://dev.to/waqar_akhtar_f4a1df2340f1",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "syed.waqar.akhtar08@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Waqar080206",
        icon: Icons.github,
        contact: true,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/waqar-akhtar-081954178/",
        icon: Icons.linkedin,
        contact: true,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/WaqarAkhtar_08",
        icon: Icons.x,
        contact: true,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "mailto:syed.waqar.akhtar08@gmail.com",
        icon: Icons.email,
        contact: true,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "SYNK",
      href: "https://synk.today/",
      badges: ["Remote"],
      location: "Austin, Texas, United States",
      title: "Forward Deployed Engineering Intern",
      icon: false,
      logoUrl: "/experience/synk.jpg",
      start: "August 2026",
      end: "October 2026",
      description: `• Developed customizable meeting-room experiences based on host descriptions, enabling personalized and engaging sessions.
      \n• Built features that provide hosts with insights and recommendations based on the common interests of registered participants.`,
    },
    {
      company: "INTEL oneAPI STUDENT CLUB · EDC (IoSC EDC)",
      href: "https://www.iosc.win/",
      badges: ["USAR, Delhi, India"],
      location: "USAR, Delhi, India",
      icon: false,
      logoUrl: "/experience/iosc.jpg",
      start: "November 2024",
      end: "Present",
      roles: [
        {
          title: "Tech Lead",
          start: "May 2026",
          end: "Present",
          description: `Lead technical initiatives and contribute to the development and execution of the club's technical activities.`,
        },
        {
          title: "i5 Team Co-Lead",
          start: "November 2025",
          end: "May 2026",
          description: `Co-led the i5 team, supporting technical initiatives, team coordination, and execution of planned activities.`,
        },
        {
          title: "Core Team Member",
          start: "November 2024",
          end: "November 2025",
          description: `• Organized technical and community initiatives, including BhasaBandhu (MeitY), DockUp orientation and quiz, and a structured one-month mentorship program.
      \n• Served as a core organizer for Azinhack 2025, managing on-ground operations and developing the main landing page for [azinhack.xyz](https://azinhack.xyz/).`,
        },
      ],
    },
    {
      company: "TnP Cell, GGSIPU EDC",
      href: "https://sites.google.com/view/ggsipuedc/students/training-placement/tp-usar",
      badges: ["USAR, Delhi, India"],
      location: "USAR, Delhi, India",
      title: "Database Manager",
      icon: false,
      logoUrl: "/experience/tnp.jpg",
      start: "July 2025",
      end: "October 2025",
      description: `* Maintained and structured student and company databases to support placement operations and data-driven decision-making.
        \n* Drafted and distributed official notices, placement-drive announcements, and eligibility communications.
        \n* Supported the organization of a NASSCOM campus event, contributing to coordination, communication, and operational execution.`,
    },
  ] as WorkExperience[],
  programs: [
    {
      title: "Aspire Leaders Program",
      organization: "Aspire Institute",
      href: "https://www.aspireleaders.org/",
      category: "Leadership Development",
      dates: "July 2026 – September 2026",
      status: "Completed",
      designation: "Aspire Leaders Program Fellow",
      accent: true,
      description:
        "Completed Cohort 3, developing leadership, communication, critical-thinking, and personal-development skills.",
      logoUrl: "/programs/aspire.jpg",
    },
    {
      title: "Extended Leadership Program",
      organization: "Aspire Institute",
      href: "https://www.aspireleaders.org/",
      category: "Higher Education & Research",
      dates: "2026",
      status: "Selected",
      accent: true,
      description:
        "Selected for the Higher Education & Research pathway, focused on graduate school applications, research support, standardized examinations, mentorship, and professional networking.",
      logoUrl: "/programs/aspire.jpg",
    },
    {
      title: "McKinsey Forward",
      organization: "McKinsey & Company",
      href: "https://www.mckinsey.com/forward",
      category: "Professional Development",
      dates: "2026 – Present",
      status: "In Progress",
      description:
        "Developing structured problem-solving, analytical thinking, communication, and adaptability through a professional development program.",
      logoUrl: "/programs/mckinsey.jpg",
    },
    {
      title: "AI Automation & Intelligent Solutions",
      organization: "BharatCares (CSRBOX Group)",
      href: "https://skillsbuild.org/",
      category: "AI Training Internship",
      dates: "June 2026 – July 2026",
      status: "Completed",
      platform: "IBM SkillsBuild",
      description:
        "Completed a six-week training program covering Agentic AI, AI workflows, transformer architecture, large language models, and intelligent automation, with a project component.",
      logoUrl: "/programs/ibm.png",
    },
    {
      title: "Machine Learning Program",
      organization: "FlyRank AI",
      href: "https://flyrank.ai/",
      category: "Self-Paced Learning",
      dates: "July 2026 – September 2026",
      status: "Completed",
      description:
        "Completed a self-paced learning program focused on machine learning and its applications in AI-driven organic growth.",
      logoUrl: "/programs/flyrank.jpg",
    },
    {
      title: "Deloitte Technology Virtual Experience",
      organization: "Deloitte · Forage",
      href: "https://www.theforage.com/",
      category: "Virtual Job Simulation",
      dates: "July 2025",
      status: "Completed",
      description:
        "Completed a software development job simulation focused on client requirements analysis and technical solution design.",
      logoUrl: "/programs/deloitte.png",
    },
  ],
  education: [
    {
      school: "GGSIPU EDC",
      href: "http://ipu.ac.in/",
      degree: "B.Tech in Artificial Intelligence and Data Science",
      icon: true,
      logoUrl: "/clg.jpg",
      start: "2024",
      end: "2028",
    },
    {
      school: "Faith Academy, New Delhi",
      href: "https://faithacademy.co.in/",
      degree: "Secondary Education",
      icon: true,
      logoUrl: "/school.jpg",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "EchoME X",
      href: "https://github.com/Waqar080206/EchoME-X",
      dates: "",
      active: true,
      description:
        "EchoMe X is an AI Twin platform that allows users to create digital personas that mimic their communication style and personality. The platform features a comprehensive interface for twin creation through personality assessment, real-time chat interaction, and analytics dashboard with insights into your AI twin's performance.",
      technologies: [
        "HTML CSS",
        "JavaScript",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Groq API",
        "Restful API",
              ],
      links: [
        {          
          type: "Website",
          href: "https://echo-me-x.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
          {
          type: "Github",
          href: "https://github.com/Waqar080206/EchoME-X/",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Devpost",
          href: "https://devpost.com/software/echome-x",
          icon: <Icons.devpost className="size-3" />,
          
        },
        {
          type: "YouTube",
          href: "https://www.youtube.com/watch?v=6pOPbPVDp7c&t=7s",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/projects/echomex.jpg",
      video: "",
    },
    {
      title: "Restaurant Insights Analytics",
      href: "https://curly-octo-spork-two.vercel.app/",
      dates: "",
      active: true,
      description:
        "This comprehensive Database Management System (DBMS) project analyzes Zomato restaurant data from Delhi NCR region using SQL-driven analytics and modern web technologies. The project demonstrates advanced database design, normalization, complex queries, data visualization, and machine learning integration.",
      technologies: [
        "Next.js",
        "MySQL",
        "TypeScript",
        "Tailwind CSS",
        "Python",
        "ML",
      ],
      links: [
        {
          type: "Website",
          href: "https://curly-octo-spork-two.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/Waqar080206/curly-octo-spork",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/risql/risql.png",
      video: "",
    },
    {
      title: "PrepPal AI",
      href: "https://preppal-pi.vercel.app/",
      dates: "",
      active: true,
      description:
        "PrepPal is a smart web app built to supercharge students' learning experience using AI. It includes powerful tools like note summarization, chatbot assistance, quiz and flashcard generation, and more with multi mode support.",
      technologies: [
        "HTML",
        "JavaScript",
        "CSS",
        "TailwindCSS",
        "Magic Loop",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://preppal-pi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/Waqar080206/PrepPal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/preppal/project1.png",
      video: "",
    },
    {
      title: "Hydro Heroes",
      href: "https://github.com/Waqar080206/Hydro-Heroes",
      dates: "",
      active: true,
      description:
        "The Hydro Heroes Website is part of an innovative solution to tackle Delhi's water crisis by maximizing water efficiency. It integrates real-time data from IoT sensors into a user-friendly dashboard, enabling users to monitor water usage and quality in real time. This project was developed during the Smart Delhi Ideathon 2025 , where our team, Hydro Heroes , secured 4th place and received recognition from the Lieutenant Governor of Delhi.",
      technologies: [
        "Node.js", 
        "Node-Red", 
        "WebSocket",
        "HTML", 
        "CSS", 
        "JavaScript",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Waqar080206/Hydro-Heroes",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Youtube",
          href: "https://www.youtube.com/watch?v=6GAW66m9QK8",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/projects/hh/project2.png",
      video: "",
    },
    {
      title: "Azinhack 2025",
      href: "https://azinhack.xyz",
      dates: "2025",
      active: true,
      description: "Official hackathon website with interactive smiley game elements and modern web design to attract participants and showcase event information.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Game Development", "Responsive Design"],
      links: [
        {
          type: "Website",
          href: "https://azinhack.xyz",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Source",
          href: "https://github.com/Waqar080206/Azinhack",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "/projects/AZINHACK/az1.png",
      video: ""
    },
    {
      title: "USAR Samvad",
      href: "#", // Add GitHub link if available
      dates: "2024",
      active: true,
      description: "Comprehensive School Management System supporting 6,000+ concurrent users with attendance tracking, role-based access, and performance visualization.",
      technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "Material UI"],
      links: [
        {
          type: "Source",
          href: "#", // Add actual GitHub link
          icon: <Icons.github className="size-3" />
        },
        {
          type: "Website",
          href: "https://ioscstudentteacher.vercel.app/", // Add actual demo link
          icon: <Icons.globe className="size-3" />
        }
      ],
      image: "/projects/uni/u1.png",
      video: ""
    }
  ],
  featuredProjects: [
    // Handpicked 4 projects for main page
    {
      title: "EchoME X",
      href: "https://github.com/Waqar080206/EchoME-X",
      dates: "",
      active: true,
      description:
        "EchoMe X is an AI Twin platform that allows users to create digital personas that mimic their communication style and personality. The platform features a comprehensive interface for twin creation through personality assessment, real-time chat interaction, and analytics dashboard with insights into your AI twin's performance.",
      technologies: [
        "HTML CSS",
        "JavaScript",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Groq API",
        "Restful API",
      ],
      links: [
        {          
          type: "Website",
          href: "https://echo-me-x.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/Waqar080206/EchoME-X/",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Devpost",
          href: "https://devpost.com/software/echome-x",
          icon: <Icons.devpost className="size-3" />,
        },
        {
          type: "YouTube",
          href: "https://www.youtube.com/watch?v=6pOPbPVDp7c&t=7s",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/projects/echomex.jpg",
      video: "",
    },
    {
      title: "Restaurant Insights Analytics",
      href: "https://curly-octo-spork-two.vercel.app/",
      dates: "",
      active: true,
      description:
        "This comprehensive Database Management System (DBMS) project analyzes Zomato restaurant data from Delhi NCR region using SQL-driven analytics and modern web technologies. The project demonstrates advanced database design, normalization, complex queries, data visualization, and machine learning integration.",
      technologies: [
        "Next.js",
        "MySQL",
        "TypeScript",
        "Tailwind CSS",
        "Python",
        "ML",
      ],
      links: [
        {
          type: "Website",
          href: "https://curly-octo-spork-two.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/Waqar080206/curly-octo-spork",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/risql/risql.png",
      video: "",
    },
    {
      title: "PrepPal AI",
      href: "https://preppal-pi.vercel.app/",
      dates: "",
      active: true,
      description:
        "PrepPal is a smart web app built to supercharge students' learning experience using AI. It includes powerful tools like note summarization, chatbot assistance, quiz and flashcard generation, and more with multi mode support.",
      technologies: [
        "HTML",
        "JavaScript",
        "CSS",
        "TailwindCSS",
        "Magic Loop",
      ],
      links: [
        {
          type: "Website",
          href: "https://preppal-pi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/Waqar080206/PrepPal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/preppal/project1.png",
      video: "",
    },
    {
      title: "USAR Samvad",
      href: "https://github.com/IoscEdc/IoSC-Student-Teacher", // Add GitHub link if available
      dates: "2024",
      active: true,
      description: "Comprehensive School Management System supporting 6,000+ concurrent users with attendance tracking, role-based access, and performance visualization.",
      technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "Material UI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/IoscEdc/IoSC-Student-Teacher", // Add actual GitHub link
          icon: <Icons.github className="size-3" />
        },
        {
          type: "Website",
          href: "https://ioscstudentteacher.vercel.app/", // Add actual demo link
          icon: <Icons.globe className="size-3" />
        }
      ],
      image: "/projects/uni/u1.png",
      video: ""
    }
  ],
  hackathons: [
      {
      title: "Code with Kiro Hackathon",
      dates: "Aug 5th - Sep 15th, 2025",
      location: "Remote",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/505/605/datas/medium.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/echome-x",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=6pOPbPVDp7c&t=7s",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Waqar080206/EchoME-X",
        },
      ],
    },
  
    {
      title: "SDI Smart Delhi Ideathon 2025",
      dates: "Jan 27th - Feb 4th, 2025",  
      location: "Delhi, India",
      description:
        "Developed a web dashboard to monitor real-time water quality and usage data from IoT sensors, helping users optimize water consumption and address Delhi's water crisis.",
      image:
        "https://www.sdi2025.in/logo.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Waqar080206/Hydro-Heroes",
        },
      ],
    },
  ],
};
