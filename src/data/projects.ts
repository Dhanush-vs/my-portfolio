export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  status: "Experimental" | "In Development" | "Built" | "SIH 2026";
  tech: string[];
  problem: string;
  approach: string;
  contribution: string;
  learned: string;
  github: string;
  demo?: string;
  accent: string;
}

export const projects: Project[] = [
  {
    slug: "resqmesh",
    name: "ResQMesh",
    tagline: "Communication when connectivity isn't guaranteed.",
    category: "Emergency Networking",
    status: "Experimental",
    tech: ["Kotlin", "Android", "Nearby Devices", "Location"],
    problem:
      "During emergencies, floods, or crowded events, mobile networks can get congested or drop out entirely, leaving people unable to reach nearby help even when other phones are a few meters away.",
    approach:
      "I explored device-to-device communication on Android — discovering nearby devices without relying on a cell tower or internet connection, and relaying simple messages and location data between them in a mesh-like pattern.",
    contribution:
      "I built the Android client, implemented nearby-device discovery, and wired up location sharing between connected devices. This is a working exploration, not a deployed emergency network.",
    learned:
      "How device discovery protocols actually behave in the field, the limits of peer-to-peer range and battery cost, and why 'no internet' doesn't have to mean 'no communication.'",
    github: "https://github.com/",
    accent: "#E0A05F",
  },
  {
    slug: "project-minus-one",
    name: "Project Minus One",
    tagline: "A college portal that treats attendance and syllabus data like real software, not a spreadsheet.",
    category: "EdTech / College Management",
    status: "Built",
    tech: ["Python", "Flask", "SQLite", "PostgreSQL"],
    problem:
      "Student-faculty coordination at college — attendance, syllabus tracking, and basic student records — was scattered across notice boards and informal channels with no shared source of truth.",
    approach:
      "I designed a role-based portal separating student and faculty views, with attendance logging, syllabus progress tracking, and student information management, backed by a relational schema built to handle concurrent reads and writes.",
    contribution:
      "I designed the schema, built the Flask backend and routes, and migrated the data layer from SQLite to PostgreSQL partway through the project to handle multiple users hitting the same records at once — the part I learned the most from.",
    learned:
      "Why SQLite's write-locking becomes a real problem under concurrent access, how to plan a migration without losing data, and how role-based access control changes the shape of a schema.",
    github: "https://github.com/",
    accent: "#5FE0C7",
  },
  {
    slug: "aquascan-ai",
    name: "AquaScan-AI",
    tagline: "A visual, AI-assisted first look at water quality — not a lab replacement.",
    category: "AI / Computer Vision",
    status: "In Development",
    tech: ["TypeScript", "Computer Vision", "Web"],
    problem:
      "Basic water-quality signals — turbidity, discoloration, visible contamination — are often judged by eye. I wanted to see whether a model could give a fast, visual first read before lab testing.",
    approach:
      "I'm building a TypeScript web interface that takes an image and runs it through a visual analysis pipeline to flag likely quality indicators, treating the output as an assistive signal rather than a certified result.",
    contribution:
      "I'm building the frontend, defining the analysis pipeline, and using AI tools to help scaffold the computer-vision integration while I work through the underlying image-processing logic myself.",
    learned:
      "How to scope an AI feature honestly — being clear about what a visual model can and can't claim about water safety.",
    github: "https://github.com/",
    accent: "#7C9CFF",
  },
  {
    slug: "sih26145",
    name: "SIH26145 — Network Threat Detection",
    tagline: "Real-time packet analysis with ML behind it, built for Smart India Hackathon 2026.",
    category: "AI / Cybersecurity",
    status: "SIH 2026",
    tech: ["Python", "PCAP", "Wireshark", "Zeek", "ML"],
    problem:
      "Security teams need to catch anomalous network behavior as it happens, not after a post-incident log review. SIH problem statement 26145 asks for AI/ML-based real-time threat detection from live traffic.",
    approach:
      "The plan: capture and parse traffic with Zeek and PCAP tooling, extract features from flows, and run them through an ML classifier feeding a live dashboard — moving from raw packets to a readable threat signal.",
    contribution:
      "I'm currently building the packet-capture and feature-extraction pipeline and researching model choices for real-time classification with my team. This is an active build, not a finished platform.",
    learned:
      "How much of 'real-time ML' is actually a data-pipeline problem before it's a modeling problem, and how tools like Wireshark and Zeek structure raw traffic into something a model can use.",
    github: "https://github.com/",
    accent: "#E0A05F",
  },
  {
    slug: "ecovision",
    name: "EcoVision",
    tagline: "A student dashboard for reading your own environmental footprint.",
    category: "Data Visualization / Sustainability",
    status: "Experimental",
    tech: ["Tailwind CSS", "Chart.js", "Three.js", "OpenWeatherMap API"],
    problem:
      "Carbon and weather data are publicly available but rarely presented in a way that makes a personal footprint easy to actually read.",
    approach:
      "I built a dashboard pulling live weather data from OpenWeatherMap and carbon-related figures, visualized with Chart.js for trends and a light Three.js scene for a more spatial view of the data.",
    contribution:
      "I built the API integration, the charting layer, and the responsive dashboard layout end to end.",
    learned:
      "How to keep a data-heavy dashboard readable instead of overwhelming, and how far a small API budget goes when you cache and batch requests properly.",
    github: "https://github.com/",
    accent: "#5FE0C7",
  },
];
