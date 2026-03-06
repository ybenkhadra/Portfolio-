/**
 * ============================================================
 * FICHIER DE CONFIGURATION DU PORTFOLIO
 * ============================================================
 * 
 * Modifiez ce fichier pour mettre à jour toutes les informations
 * de votre portfolio. Toutes les sections du site utilisent ces données.
 * 
 * Instructions :
 * - Remplacez les valeurs par vos propres informations
 * - Les icônes utilisent des emojis ou des classes CSS
 * - Les liens doivent être des URLs complètes (https://...)
 * ============================================================
 */

export const personalInfo = {
  /** Votre photo de profil (placez l'image dans le dossier public/) */
  profileImage: "/pfp.jpg",

  /**
   * Focus/cadrage de la photo (CSS object-position).
   * Utile si l'image est trop rognée sur mobile.
   * Exemples: "50% 20%" (monter un peu), "50% 50%" (centré), "50% 0%" (haut)
   */
  profileImagePosition: "50% 35%",

  /** Votre nom complet */
  name: "Youssef Benkhadra",

  /** Votre titre professionnel ou poste visé */
  title: "Étudiant Ingénieur en Informatique",

  /** Une courte phrase d'accroche affichée sur la page d'accueil */
  headline: "Passionné par le développement logiciel et les nouvelles technologies",

  /** Votre adresse email de contact */
  email: "y.benkhadra@esisa.ac.ma",

  /** Votre localisation (ville, pays) */
  location: "Fès, Maroc",

  /** Lien vers votre profil LinkedIn */
  linkedin: "https://www.linkedin.com/in/youssef-benkhadra-6601b3391/",

  /** Lien vers votre profil GitHub */
  github: "https://github.com/ybenkhadra",

  /** Description détaillée pour la section "À propos" */
  about: `Étudiant ambitieux en première année d'ingénierie informatique à l'ESISA (École Supérieure d'Ingénierie en Sciences Appliquées) à Fès, Maroc. 
  
Passionné par le développement web, la programmation et la résolution de problèmes complexes. Je cherche constamment à apprendre de nouvelles technologies et à développer mes compétences techniques.

Mon objectif est de devenir un ingénieur informatique polyvalent, capable de concevoir et développer des solutions innovantes qui répondent aux besoins réels des utilisateurs.`,
};

/** 
 * Section Éducation
 * Ajoutez vos formations en ordre chronologique inverse (la plus récente en premier)
 */
export const education = [
  {
    degree: "Diplôme d'Ingénieur en Informatique",
    institution: "ESISA - École Supérieure d'Ingénierie en Sciences Appliquées",
    location: "Fès, Maroc",
    period: "2025 - Présent",
    description:
      "Formation d'ingénieur en informatique couvrant le développement logiciel, les bases de données, les réseaux et l'intelligence artificielle.",
  },
  // Ajoutez d'autres formations ici :
  // {
  //   degree: "Baccalauréat Sciences Mathématiques",
  //   institution: "Lycée ...",
  //   location: "Ville, Maroc",
  //   period: "2022 - 2025",
  //   description: "Description de votre formation...",
  // },
];

/**
 * Section Expérience Professionnelle
 * Ajoutez vos expériences en ordre chronologique inverse
 */
export const experience = [
  {
    role: "Projets Académiques",
    company: "ESISA",
    location: "Fès, Maroc",
    period: "2025 - Présent",
    description:
      "Réalisation de projets académiques en programmation, bases de données et développement web dans le cadre de la formation d'ingénieur.",
    achievements: [
      "Développement d'applications en utilisant différents langages de programmation",
      "Travail en équipe sur des projets collaboratifs",
      "Apprentissage continu des bonnes pratiques de développement",
    ],
  },
  // Ajoutez d'autres expériences ici :
  // {
  //   role: "Stagiaire Développeur",
  //   company: "Nom de l'entreprise",
  //   location: "Ville, Maroc",
  //   period: "Juin 2025 - Août 2025",
  //   description: "Description du poste...",
  //   achievements: ["Réalisation 1", "Réalisation 2"],
  // },
];

/**
 * Section Projets
 * Présentez vos projets personnels et académiques
 */
export const projects = [
  {
    title: "Portfolio Personnel",
    description:
      "Site web portfolio développé avec Next.js et Tailwind CSS, déployé sur Vercel. Design responsive et moderne pour présenter mes compétences et projets.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/ybenkhadra",
    live: "", // Ajoutez le lien du site déployé
  },
  {
    title: "Projet Académique - Application Web",
    description:
      "Application web développée dans le cadre de la formation à l'ESISA. Mise en pratique des concepts de développement full-stack.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "",
    live: "",
  },
  // Ajoutez d'autres projets ici :
  // {
  //   title: "Nom du projet",
  //   description: "Description détaillée du projet...",
  //   technologies: ["Tech1", "Tech2", "Tech3"],
  //   github: "https://github.com/ybenkhadra/nom-du-repo",
  //   live: "https://lien-du-site.vercel.app",
  // },
];

/**
 * Compétences Techniques
 * Organisées par catégorie
 */
export const skills = [
  {
    category: "Langages de Programmation",
    items: ["JavaScript", "TypeScript", "Python", "C", "Java", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Bibliothèques",
    items: ["Next.js", "React", "Tailwind CSS", "Node.js"],
  },
  {
    category: "Outils & Technologies",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Linux"],
  },
  {
    category: "Bases de Données",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Langues",
    items: ["Français", "Arabe", "Anglais"],
  },
];

/**
 * Liens de navigation du site
 */
export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Éducation", href: "#education" },
  { label: "Expérience", href: "#experience" },
  { label: "Projets", href: "#projets" },
  { label: "Compétences", href: "#competences" },
  { label: "Contact", href: "#contact" },
];
