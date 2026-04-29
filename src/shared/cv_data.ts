export const personalInfo = {
  name: "Joseph Benitez Arroyo",
  summary: "Estudiante de Ingeniería en Sistemas (9no semestre) con experiencia profesional como desarrollador Full Stack. Especializado en Go, React, y NestJS, con enfoque en arquitecturas escalables, orquestación de microservicios y desarrollo backend orientado a eventos.",
  role: "Full Stack Developer | Go & React Specialist",
  email: "benitezarroyojoseph@gmail.com",
  phone: "+591 65933751",
  location: "Santa Cruz, Bolivia",
  github: "https://github.com/MetaDandy"
};

export const experiences = [
  {
    company: "Eicap",
    role: "Desarrollador Full Stack",
    period: "Julio 2025 - Actualidad",
    description: "Participación en la planificación, arquitectura y desarrollo de una aplicación de escritorio contable construida con Wails (Go + React).",
    responsibilities: [
      "Diseño y desarrollo de módulos clave como cotizaciones, libro mayor y balance general.",
      "Implementación de servidor de autenticación independiente mediante sistema de keys/licenciamiento.",
      "Migración de modelo de datos y DTOs para compatibilidad tipada entre Go y React.",
      "Diseño e implementación del módulo de Inventarios."
    ],
    technologies: ["Go", "Wails", "React", "TypeScript", "Tailwind CSS", "SQLite"]
  },
  {
    company: "Multicenter",
    role: "Desarrollador Frontend",
    period: "Octubre 2025 - Febrero 2026",
    description: "Desarrollo de un sistema POS web orientado a la gestión de ventas en sucursales físicas.",
    responsibilities: [
      "Desarrollo y mantenimiento del frontend utilizando React + TypeScript.",
      "Implementación de manejo de estado global con Zustand.",
      "Integración con APIs REST protegidas mediante JWT.",
      "Integración con dispositivos externos (impresoras térmicas, lectores de barras)."
    ],
    technologies: ["React", "TypeScript", "Zustand", "Tailwind CSS", "shadcn/ui"]
  },
  {
    company: "Wabi",
    role: "Consultor en Desarrollo",
    period: "Julio - Octubre 2025",
    description: "Reestructuración e implementación de múltiples módulos del ecosistema Wabi y Customer Hub.",
    responsibilities: [
      "Diseño e implementación del módulo Customer Hub utilizando NestJS con Sequelize.",
      "Desarrollo de servicios para administración de clientes, billeteras y bancos.",
      "Implementación y mantenimiento de Lambda Payments para métodos de pago (QR, tarjeta, transferencia).",
      "Aseguramiento de integración Core-Workers y estandarización de APIs REST."
    ],
    technologies: ["NestJS", "Node.js", "Sequelize", "AWS Lambdas", "PostgreSQL", "TypeScript"]
  },
  {
    company: "Dyra Travel",
    role: "Desarrollador Full Stack (Freelance)",
    period: "Enero - Julio 2025",
    description: "Implementación de sistemas de scraping y gestión de paquetes turísticos.",
    responsibilities: [
      "Sistema de web scraping con Puppeteer para extracción de datos.",
      "Desarrollo de endpoints en Node.js para gestión de paquetes.",
      "Mejora de widget en Zoho CRM para tracking de clientes."
    ],
    technologies: ["React", "Node.js", "Puppeteer", "Zoho CRM"]
  }
];

export const projects = [
  {
    title: "Cuent AI Core",
    description: "Plataforma de Generación de Contenido con IA (Proyecto Universitario). Generación de audio/video con IA.",
    highlights: ["Integración Google Gemini & ElevenLabs", "Procesamiento con FFmpeg", "Arquitectura Dockerizada"],
    technologies: ["Go", "Fiber", "Google Gemini API", "ElevenLabs API", "Supabase", "FFmpeg", "WebSockets", "Docker"]
  },
  {
    title: "E-commerce Autorepuestos",
    description: "Backend para gestión de inventario de autorepuestos.",
    highlights: ["Screaming Architecture", "Real-time updates", "Auth system"],
    technologies: ["NestJS", "TypeScript", "Supabase", "PostgreSQL", "Next.js"]
  },
  {
    title: "MaquetAngular",
    description: "Demostración de versatilidad en diferentes frameworks frontend.",
    highlights: ["Frontend Angular", "Backend Go"],
    technologies: ["Angular", "TypeScript", "Go"]
  }
];

export const education = [
  {
    degree: "Ingeniería en Sistemas",
    institution: "Universidad Autónoma Gabriel René Moreno",
    period: "2021 - 2026 (9no semestre)"
  }
];

export const skills = {
  languages: ["Go", "TypeScript", "JavaScript", "SQL", "Bash"],
  frameworks: ["Fiber", "NestJS", "React", "Next.js", "Angular", "Express"],
  databases: ["PostgreSQL", "SQLite", "MongoDB", "Supabase"],
  tools: ["Docker", "Docker Compose", "Git", "AWS Lambdas", "Puppeteer", "FFmpeg", "Linux (Arch)"]
};

export const languages = [
  { language: "Español", level: "Nativo" },
  { language: "Inglés", level: "Intermedio (Técnico)" }
];
