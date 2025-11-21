export const EXTENDED_PROJECTS = {
  "EchoME X": {
    overview: "Your second self - alive in code. EchoMe X lets anyone create a digital AI twin that speaks, responds, and thinks like them. It's not just a chatbot, it's a living digital persona.",
    inspiration: "I never wondered about it before, but one day I thought: If someone wants to make a startup, who would be the best person to talk to? The answer came instantly: Steve Jobs, Sam Altman, or Elon Musk. Since I couldn't actually talk to them, I imagined creating an AI twin that could embody their persona, mindset, and advice. That spark became EchoMe X.",
    videos: [
      {
        url: "https://www.youtube.com/watch?v=6pOPbPVDp7c",
        title: "EchoME X Demo Video",
        thumbnail: "/projects/echomex.jpg"
      }
    ],
    images: [
      "/projects/echomex.jpg",
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/736/443/datas/gallery.jpg", 
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/735/646/datas/gallery.jpg",
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/735/656/datas/gallery.jpg",
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/735/671/datas/gallery.jpg",
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/735/664/datas/gallery.jpg"
    ],
    
    keyFeatures: [
      {
        title: "AI Twin Creation",
        description: "Create a digital AI twin from personality traits and descriptions that embodies your unique persona and mindset."
      },
      {
        title: "Fast AI Chat Interface", 
        description: "Ultra-fast, low-latency chat powered by Groq API for seamless real-time conversations with your AI twin."
      },
      {
        title: "Analytics Dashboard",
        description: "Comprehensive analytics dashboard to track interactions, performance metrics, and twin behavior patterns."
      },
      {
        title: "Share-Your-Twin Preview",
        description: "Special feature designed for influencers and creators to share their AI twins with their audience."
      },
      {
        title: "Living Digital Persona",
        description: "More than just a chatbot - a complete digital persona that preserves voices and extends influence through code."
      },
      {
        title: "Personality Preservation",
        description: "Advanced algorithms to capture and replicate individual communication styles, thinking patterns, and response behaviors."
      }
    ],
    technicalDetails: {
      "Frontend": "Sleek black & white UI with purple accents using HTML, CSS, and JavaScript",
      "Backend": "Custom-built from scratch with Express.js and Node.js, hosted on Render",
      "Database": "MongoDB for scalable data storage and user management",
      "AI Engine": "Groq API integration for ultra-fast, low-latency AI responses",
      "API Architecture": "RESTful API design with custom endpoints for twin creation and chat",
      "Deployment": "Full-stack deployment with backend on Render and frontend on Vercel"
    },
    buildProcess: {
      "Solo Development": "Built entirely alone from backend logic to frontend polish with no prior backend experience",
      "Custom Backend": "Wrote the complete backend system from scratch using Express + MongoDB",
      "AI Integration": "Integrated complex, unique flows with Groq AI engine with minimal reference points",
      "Design Philosophy": "Focused on speed, design, and functionality to create an MVP that feels premium"
    },
    challenges: [
      "Writing almost the entire backend alone with no prior backend experience",
      "Integrating complex, unique flows with the AI engine with close to zero reference points",
      "Balancing speed, design, and functionality under tight hackathon deadlines",
      "Creating a working, unique solution despite uncertainty and lack of references"
    ],
    accomplishments: [
      "Built EchoMe X entirely solo, front to back",
      "Created not just a prototype, but something that can actually be used by real people",
      "Designed it as a scalable venture, not just a hackathon demo",
      "Successfully integrated complex backend system under tight deadlines"
    ],
    whatILearned: [
      "How to integrate a complex backend system alone under tight deadlines",
      "That pushing through uncertainty and lack of references can still result in working solutions",
      "The balance of speed, design, and functionality in building premium MVPs",
      "Advanced AI integration techniques and real-time chat implementation"
    ],
    futureEnhancements: [
      "Large-scale testing and feedback from bigger user pools",
      "Add multilingual support so twins can converse in multiple languages", 
      "Enable voice-based interactions, making conversations feel more alive",
      "Enhance sharing features for influencers and creators to grow adoption",
      "Advanced personality customization and trait fine-tuning",
      "Integration with popular social media platforms"
    ],
    builtWith: [
      "HTML5", "CSS3", "JavaScript", "Express.js", "Node.js", "MongoDB", "Groq API", "Llama"
    ],
    finalNote: "EchoMe X isn't just AI. It's a chance to preserve voices, extend influence, and keep personas alive in code."
  },

  "Restaurant Insights Analytics": {
    overview: "A comprehensive Database Management System analyzing Zomato restaurant data from Delhi NCR region, featuring advanced SQL analytics, data visualization, and machine learning integration for business intelligence.",
    inspiration: "Working with real restaurant data from Delhi NCR, we wanted to uncover hidden insights about dining trends, cuisine preferences, and rating patterns that could help restaurant owners make data-driven decisions.",
    images: [
      "/projects/risql/risql.png",
      "/projects/risql/p2.png",
      "/projects/risql/a1.png",
      "/projects/risql/a2.png",
      "/projects/risql/a3.png",
      "/projects/risql/d1.png",
      "/projects/risql/d2.png",
      "/projects/risql/d4.png"
    ],
    videos: [
      {
        url: "/projects/risql/risql vid.mp4",
        title: "Restaurant Insights Analytics Demo Video",
        thumbnail: "/projects/risql/risql.png"
      }
    ],
    keyFeatures: [
      {
        title: "Advanced SQL Analytics",
        description: "Complex SQL queries with joins, aggregations, and window functions for deep business intelligence insights."
      },
      {
        title: "Interactive Data Visualization",
        description: "Modern dashboard with Recharts integration featuring bar charts, pie charts, and scatter plots for comprehensive data exploration."
      },
      {
        title: "3NF Database Normalization",
        description: "Properly normalized database schema eliminating redundancy while maintaining referential integrity and performance."
      },
      {
        title: "Machine Learning Integration",
        description: "Rating prediction model using XGBoost to forecast restaurant ratings based on location, cuisine, and pricing factors."
      },
      {
        title: "Business Intelligence Insights",
        description: "KPI dashboards revealing market share analysis, price-quality correlations, and geographic performance metrics."
      },
      {
        title: "Real-time Filtering",
        description: "Dynamic data exploration with interactive filters for cuisine types, localities, and price segments."
      }
    ],
    technicalDetails: {
      "Database": "MySQL 8.0+ with optimized schema design and strategic indexing",
      "Frontend": "Next.js 14 with TypeScript and App Router for type-safe development",
      "Styling": "Tailwind CSS + shadcn/ui components with dark/light mode support",
      "Analytics": "Python with pandas, matplotlib, seaborn for data processing",
      "Visualization": "Recharts for interactive charts and Plotly for advanced analytics",
      "Machine Learning": "scikit-learn and XGBoost for restaurant rating prediction",
      "Data Processing": "Complex SQL queries with performance optimization"
    },
    buildProcess: {
      "Database Design": "Created normalized 3NF schema with restaurants, cuisines, localities, and reviews tables",
      "Data Import": "Processed 1,943 restaurant records from Zomato CSV data with proper validation",
      "SQL Analytics": "Developed complex queries for cuisine performance, city comparisons, and price analysis",
      "Dashboard Development": "Built responsive React dashboard with TypeScript and modern UI components",
      "ML Integration": "Trained XGBoost model achieving 95% accuracy in rating predictions"
    },
    challenges: [
      "Designing efficient database schema for large restaurant datasets",
      "Creating complex SQL queries with multiple joins and aggregations",
      "Implementing real-time data visualization with smooth performance",
      "Optimizing database performance while maintaining data integrity",
      "Building responsive dashboard that works across different screen sizes"
    ],
    accomplishments: [
      "Successfully analyzed 1,943+ restaurant records with 99.5% data accuracy",
      "Achieved <100ms average query response time through optimization",
      "Built comprehensive ML model predicting ratings with high accuracy",
      "Created interactive dashboard with 95+ Lighthouse performance score",
      "Collaborated effectively to deliver full-stack solution on schedule"
    ],
    keyInsights: [
      "North Indian cuisine dominates Delhi NCR with 18.6% market share",
      "73.4% of restaurants maintain ratings above 4.0 stars",
      "Gurgaon leads with 2,156 restaurants, followed by Delhi and Noida",
      "Premium price segments consistently show higher average ratings",
      "Khan Market and Cyber Hub emerge as top-rated dining destinations"
    ],
    whatILearned: [
      "Advanced database design principles and normalization techniques",
      "Complex SQL query optimization and performance tuning strategies",
      "Full-stack integration between database, backend analytics, and frontend visualization",
      "Machine learning model development and deployment for real-world predictions",
      "Collaborative development workflows and project management skills"
    ],
    futureEnhancements: [
      "Real-time data updates with live restaurant information",
      "Advanced recommendation engine based on user preferences",
      "Mobile application with location-based restaurant discovery",
      "Sentiment analysis of customer reviews and feedback",
      "API development for third-party restaurant platform integrations",
      "Predictive analytics for demand forecasting and trend analysis"
    ],
    builtWith: [
      "Next.js", "TypeScript", "MySQL", "Python", "Tailwind CSS", "Recharts", "scikit-learn", "XGBoost", "pandas"
    ],
    collaborators: "Built in collaboration with Akshat Talwar - combined database expertise with frontend development skills",
    mlModel: {
      "Accuracy": "95% prediction accuracy for restaurant ratings",
      "Features": "Price, locality, cuisine type, delivery count as input parameters",
      "Output Range": "Predicts ratings from 3.9 to 4.9 stars",
      "Technology": "XGBoost with Streamlit interface for easy predictions"
    }
  },

"PrepPal AI": {
  overview: "PrepPal is a smart web app built to supercharge students' learning experience using AI. It includes powerful tools like note summarization, chatbot assistance, quiz and flashcard generation, and more — all in one sleek interface with dark mode support.",
  inspiration: "Recognizing the challenges students face with information overload and inefficient study methods, I wanted to create an AI-powered learning companion that could transform how students process, understand, and retain information.",
  images: [
    "/projects/preppal/project1.png",
    "/projects/preppal/p1.png",
    "/projects/preppal/p2.png",
    "/projects/preppal/p3.png",
    "/projects/preppal/p4.png",
    "  /projects/preppal/p5.png",   
  ],
  videos: [
    {
        url:"/projects/preppal/prepalv.mp4",
        title: "PrepPal AI Demo Video",
        thumbnail: "/projects/preppal/project1.png"
    }
  ],
  keyFeatures: [
    {
      title: "Smart Note Summarization",
      description: "Turn lengthy notes into clear, concise summaries instantly using advanced AI processing to extract key concepts and main ideas."
    },
    {
      title: "AI Study Chatbot",
      description: "Get instant help on any topic with an intelligent chatbot assistant — like having a personal tutor available 24/7 in your pocket."
    },
    {
      title: "Dynamic Flashcard Generator",
      description: "Create smart flashcards from PDFs, notes, or text automatically — ready for immediate review and long-term retention."
    },
    {
      title: "Automated Quiz Generation",
      description: "Test your knowledge automatically with AI-generated quizzes — no manual setup needed, just upload content and start learning."
    },
    {
      title: "Advanced PDF Processor",
      description: "Extract, summarize, annotate, and convert PDFs into study-ready formats with intelligent content recognition."
    },
    {
      title: "Dark Mode & Voice Input",
      description: "Study comfortably with eye-friendly dark mode and hands-free voice input using Web Speech API for accessibility."
    },
    {
      title: "Export & Sync Integration",
      description: "Export flashcards, summaries, and quizzes to popular platforms like Anki, Notion, Google Docs, and more for seamless workflow."
    }
  ],
  technicalDetails: {
    "Frontend": "HTML5, CSS3, JavaScript with responsive design and modern UI components",
    "Styling": "Custom CSS with TailwindCSS utility classes and dark mode implementation",
    "AI Integration": "OpenAI GPT-3 via MagicLoop API for natural language processing tasks",
    "Voice Features": "Web Speech API for hands-free voice input and interaction",
    "PDF Processing": "Client-side PDF extraction and processing capabilities",
    "Export System": "Multi-platform export functionality for study materials",
    "Authentication": "User login and signup system with session management",
    "Deployment": "GitHub version control with Netlify hosting for fast global delivery"
  },
  buildProcess: {
    "AI Integration": "Integrated OpenAI GPT-3 through MagicLoop platform for advanced NLP capabilities",
    "Voice Implementation": "Utilized browser's Web Speech API for hands-free studying experience",
    "PDF Processing": "Built custom PDF extraction and processing system for study material conversion",
    "Export System": "Developed multi-platform export functionality for seamless workflow integration",
    "UI/UX Design": "Created intuitive interface with dark mode support for comfortable studying"
  },
  howItWorks: [
    "Upload a PDF or paste your notes into the system",
    "Process the content using AI-powered analysis",
    "Generate summaries, flashcards, or quizzes automatically",
    "Chat with the Study Bot for detailed explanations and clarifications",
    "Export or review your content directly in the app or external platforms"
  ],
  pageOverview: [
    "Home Page – Introduction and comprehensive app overview",
    "Features Page – Detailed highlights of all major tools and capabilities",
    "Login/Sign Up Page – Secure user authentication and account management",
    "Dashboard – Central hub providing access to all learning features and tools"
  ],
  challenges: [
    "Implementing accurate AI-based content summarization and question generation",
    "Creating seamless PDF processing and text extraction functionality",
    "Designing intuitive user interface that works across different study workflows",
    "Optimizing AI API calls for better response times and cost efficiency",
    "Building reliable export system that works with multiple platforms"
  ],
  accomplishments: [
    "Successfully integrated multiple AI-powered learning tools in one platform",
    "Built comprehensive PDF processing system with high accuracy",
    "Created seamless export functionality for popular study platforms",
    "Implemented voice input for accessibility and hands-free studying",
    "Designed user-friendly interface with dark mode for comfortable learning"
  ],
  whatILearned: [
    "Advanced AI integration techniques and natural language processing implementation",
    "Client-side PDF processing and text extraction methodologies",
    "Voice API integration and accessibility feature development",
    "Multi-platform export system design and implementation",
    "User experience design for educational technology applications"
  ],
  futureEnhancements: [
    "Real-time collaborative study features for group learning",
    "Advanced spaced repetition algorithms for optimal learning retention",
    "Mobile application development for on-the-go studying",
    "Integration with popular Learning Management Systems (LMS)",
    "Advanced analytics and progress tracking with learning insights",
    "Multi-language support for international students"
  ],
  builtWith: [
    "HTML5", "CSS3", "JavaScript", "OpenAI GPT-3", "MagicLoop API", "Web Speech API", "Netlify", "GitHub"
  ],
  aiIntegration: "PrepPal integrates with OpenAI GPT-3 using the MagicLoop platform to handle natural language processing tasks such as summarization, chatbot conversation, and intelligent question generation for enhanced learning experiences."
},
  "Hydro Heroes": {
    overview: "An innovative IoT-based solution tackling Delhi's water crisis by providing real-time monitoring of water quality and usage through an intelligent dashboard system.",
    images: [
      "/projects/hh/project2.png",
       "/projects/hh/h2.png"
    ],
    videos: [
      {
        url: "/projects/hh/hhv.mp4",
        title: "Hydro Heroes Project Demo",
        thumbnail: "/projects/hh/project2.png"
      }
    ],
    keyFeatures: [
      {
        title: "Real-Time IoT Monitoring",
        description: "Continuous monitoring of water parameters using IoT sensors with instant data updates."
      },
      {
        title: "Water Quality Tracking",
        description: "Monitor water quality parameters including pH, turbidity, and contamination levels."
      },
      {
        title: "Usage Optimization",
        description: "Smart algorithms to optimize water usage and reduce waste through data-driven insights."
      },
      {
        title: "WebSocket Integration",
        description: "Real-time data transmission using WebSocket for instant dashboard updates."
      },
      {
        title: "Node-Red Implementation",
        description: "Visual programming interface for IoT data flow and processing automation."
      },
      {
        title: "Smart Dashboard",
        description: "Interactive dashboard displaying real-time data, alerts, and optimization suggestions."
      }
    ],
    technicalDetails: {
      "IoT Platform": "Node-Red for visual IoT programming and automation",
      "Backend": "Node.js for server-side processing and API management",
      "Real-Time Communication": "WebSocket for instant data updates",
      "Frontend": "HTML, CSS, JavaScript for responsive web interface",
      "Data Processing": "Real-time sensor data processing and analysis",
      "Recognition": "4th place at Smart Delhi Ideathon 2025"
    },
    challenges: [
      "Integrating multiple IoT sensors reliably",
      "Ensuring real-time data accuracy and consistency",
      "Creating an intuitive dashboard for complex data",
      "Optimizing system performance for continuous monitoring"
    ],
    futureEnhancements: [
      "Mobile application for remote monitoring",
      "Advanced predictive analytics",
      "Integration with city water management systems",
      "Automated alert and notification system"
    ]
  },

  "Azinhack 2025": {
    overview: "The official website for Azinhack 2025 hackathon featuring an interactive landing page with engaging smiley game elements and modern web design to attract participants and showcase event information.",
    inspiration: "Creating an engaging and interactive landing page for one of the major hackathons, I wanted to combine functionality with fun elements that would capture the innovative spirit of the hackathon community.",
    images: [
      "/projects/AZINHACK/az1.png",
    ],
    videos: [
      {
        url: "/projects/AZINHACK/AZ.mp4",
        title: "Azinhack 2025 Website Demo Video",
        thumbnail: "/projects/AZINHACK/az1.png"
      }
    ],
    keyFeatures: [
      {
        title: "Interactive Smiley Game",
        description: "Engaging game element integrated into the landing page to create a memorable user experience and increase user engagement."
      },
      {
        title: "Responsive Landing Page",
        description: "Fully responsive design optimized for all devices ensuring seamless experience across desktop, tablet, and mobile platforms."
      },
      {
        title: "Modern UI/UX Design",
        description: "Contemporary design language with smooth animations and transitions that reflect the innovative nature of the hackathon."
      },
      {
        title: "Event Information Hub",
        description: "Comprehensive information display for hackathon details, schedules, prizes, and registration information."
      },
      {
        title: "Performance Optimized",
        description: "Fast loading times and smooth interactions optimized for high traffic during registration periods."
      },
      {
        title: "Cross-Browser Compatibility",
        description: "Consistent experience across all major browsers with proper fallbacks and progressive enhancement."
      }
    ],
    technicalDetails: {
      "Frontend": "HTML5, CSS3, JavaScript with modern ES6+ features",
      "Styling": "Custom CSS with advanced animations and responsive design",
      "Game Engine": "Vanilla JavaScript for smiley game mechanics and interactions",
      "Performance": "Optimized assets and lazy loading for fast page speeds",
      "Deployment": "Custom domain hosting at azinhack.xyz",
      "Responsive Design": "Mobile-first approach with flexible grid layouts"
    },
    buildProcess: {
      "Collaborative Development": "Worked as part of team focusing specifically on landing page development",
      "Game Integration": "Designed and implemented interactive smiley game from scratch",
      "UI/UX Focus": "Emphasized user engagement through interactive elements and smooth animations",
      "Performance Optimization": "Implemented best practices for fast loading and smooth user experience"
    },
    challenges: [
      "Integrating game elements seamlessly into landing page design",
      "Ensuring smooth performance across different devices and browsers",
      "Balancing interactive elements with information accessibility",
      "Optimizing for high traffic during hackathon registration periods"
    ],
    accomplishments: [
      "Successfully launched official hackathon website with interactive features",
      "Created engaging smiley game that enhanced user experience",
      "Delivered responsive design working flawlessly across all devices",
      "Collaborated effectively in team environment to meet tight deadlines"
    ],
    whatILearned: [
      "Game development integration within web applications",
      "Advanced CSS animations and interactive element design",
      "Team collaboration and project coordination skills",
      "Performance optimization techniques for high-traffic websites"
    ],
    futureEnhancements: [
      "Add leaderboard and scoring system for smiley game",
      "Implement user accounts for personalized experience",
    ],  
    builtWith: [
      "HTML5", "CSS3", "JavaScript", "Custom Domain", "Responsive Design"
    ],
    projectUrl: "https://azinhack.xyz",
    collaborationType: "Team project focusing on landing page and interactive elements development"
  },

  "USAR Samvad": {
    overview: "A comprehensive School Management System designed to centralize administrative and academic activities in educational institutions. Built as a full-stack web application supporting up to 6,000 concurrent users with scalable architecture and role-based access control.",
    inspiration: "Recognizing the need for efficient school administration tools, I wanted to create a scalable system that could handle the complex requirements of modern educational institutions while maintaining performance and user experience.",
    images: [
      "/projects/uni/u1.png",
      "/projects/unione/attendance.png"
    ],
    videos: [],
    keyFeatures: [
      {
        title: "Comprehensive Attendance System",
        description: "Built from ground up attendance tracking system for admins and teachers with real-time visualization and reporting capabilities."
      },
      {
        title: "Role-Based Access Control",
        description: "Three distinct user roles (Admin, Teacher, Student) with customized dashboards and appropriate access permissions."
      },
      {
        title: "Student Sorting & Classification",
        description: "Advanced sorting algorithms to organize students into respective classes with efficient data management and retrieval."
      },
      {
        title: "Performance Visualization",
        description: "Interactive charts and graphs for students to track their academic progress with detailed analytics and insights."
      },
      {
        title: "Scalable Architecture",
        description: "Designed to handle 6,000+ concurrent users with optimized database queries and efficient state management."
      },
      {
        title: "Communication System",
        description: "Built-in messaging system enabling seamless communication between teachers, students, and administrators."
      }
    ],
    technicalDetails: {
      "Frontend": "React.js with Redux for state management and Material UI for components",
      "Backend": "Node.js and Express.js for robust server-side architecture",
      "Database": "MongoDB with optimized schemas for educational data management",
      "State Management": "Redux for complex application state handling",
      "UI Framework": "Material UI for consistent and responsive design system",
      "Scalability": "Optimized for 6,000+ concurrent users with efficient data handling"
    },
    buildProcess: {
      "Attendance System": "Developed complete attendance tracking from scratch including marking, reporting, and visualization",
      "Student Management": "Implemented advanced sorting and classification algorithms for student organization",
      "Collaborative Development": "Worked in team environment with focus on core attendance and student management features",
      "Performance Optimization": "Designed scalable solutions for high concurrent user loads",
      "Open Source Contribution": "Structured as open source project encouraging community contributions"
    },
    challenges: [
      "Designing scalable architecture for 6,000+ concurrent users",
      "Creating efficient attendance tracking system with real-time updates",
      "Implementing complex student sorting and classification algorithms",
      "Ensuring data consistency across multiple user roles and permissions",
      "Optimizing database queries for large-scale educational data"
    ],
    accomplishments: [
      "Successfully built attendance system from ground up handling thousands of users",
      "Implemented efficient student sorting methods for class organization",
      "Created scalable architecture supporting 6,000+ concurrent users",
      "Developed comprehensive role-based access control system",
      "Established open source project encouraging community contributions"
    ],
    whatILearned: [
      "Large-scale application architecture and scalability design",
      "Complex state management with Redux in educational systems",
      "Database optimization techniques for high-traffic applications",
      "Team collaboration in open source development environment",
      "Performance optimization for concurrent user handling"
    ],
    futureEnhancements: [
      "Advanced analytics and reporting dashboard for administrators",
      "Mobile application for on-the-go access and notifications",
      "Integration with external educational tools and platforms",
      "Enhanced communication features with video calling capabilities",
      "Automated report generation and grade calculation systems",
      "Parent portal for tracking student progress and communication"
    ],
    builtWith: [
      "React.js", "Redux", "Node.js", "Express.js", "MongoDB", "Material UI"
    ],
    collaborationType: "Collaborative project with focus on attendance system and student management features",
    openSource: "Active open source project welcoming community contributions for new features and improvements",
    scalability: "Designed to handle 6,000+ concurrent users with optimized performance and efficient resource utilization"
  }
} as const;