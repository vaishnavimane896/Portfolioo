import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "../styles/projects.css";

const PROJECTS = [
  {
    title: "Civic One",
    subtitle: "Civic Issue Reporting Platform",
    description:
      "A platform for citizens to report and track civic complaints. Built RESTful APIs to manage users, complaints, and media uploads, with a full lifecycle from Pending to Resolved.",
    points: [
      "Responsive React.js frontend for submitting and tracking complaints",
      "Complaint lifecycle management with live status updates",
      "Cloudinary integration for secure image upload & optimization",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/vaishnavimane896/CivicOne",
    live: "https://civicone20.netlify.app/",
    accent: "#2dd4bf",
  },
  {
    title: "Real-Time Chat Application",
    subtitle: "Firebase-powered messaging platform",
    description:
      "A full-stack messaging app with real-time data sync and live presence tracking, built on Firebase's Cloud Firestore with secure, session-persistent authentication.",
    points: [
      "Real-time sync & live presence across connected users",
      "Google OAuth + Email/Password auth with protected routing",
      "Firestore NoSQL structuring using MongoDB-style data modelling",
    ],
    stack: ["React.js", "Firebase", "Firestore", "Firebase Auth"],
    github: "https://github.com/vaishnavimane896/ChatApp",
    live: "https://vaishnavimane896.github.io/QuickChat/",
    accent: "#8b5cf6",
  },
  {
    title: "Generative AI Chat Interface (Gemini Clone)",
    subtitle: "Website interface for AI chat models",
    description:
      "A responsive web application for interacting with generative AI models, featuring a clean UI and seamless integration with the Gemini API.",
    points: [
      "Intuitive chat interface for natural language interaction",
      "Real-time responses from the Gemini AI model",
      "Clean and modern UI design with React.js",
    ],
    stack: ["React.js", "Gemini API", "CSS Modules"],
    github: "https://github.com/vaishnavimane896/Geminii",
    live: "https://vaishnavimane896.github.io/Gemini",
    accent: "#fbbf24",
  },
  {
    title: "Beauty Parlour Management System",
    subtitle: "Desktop application · ASP.NET",
    description:
      "A Windows Forms desktop application to manage salon operations — course details, employee information, salary records, and billing — connected end-to-end to SQL Server.",
    points: [
      "Forms wired to database tables for add / view / update / delete",
      "Employee, salary, and billing record management",
      "Built with .NET (Windows Forms) and SQL Server",
    ],
    stack: [".NET", "Windows Forms", "SQL Server", "C#"],
    github: "https://github.com/vaishnavimane896",
    live: null,
    accent: "#56fb24",
  },
  {
    title: "Smart Resource Sharing Platform",
    subtitle: "Spring Boot, Java, JavaScript, HTML5, CSS3, REST APIs",
    description:
      "Architected and developed a web platform to streamline community resource allocation and sharing within a smart city ecosystem using Spring Boot and modern frontend technologie",
    points: [
      "Implemented RESTful APIs for resource management and user interactions",
      "Developed a responsive frontend with JavaScript, HTML5, and CSS3",
      "Integrated authentication and authorization mechanisms for secure access",
    ],
    stack: ["Spring Boot", "Java", "JavaScript", "HTML5", "CSS3", "REST APIs"],
    github: "https://github.com/vaishnavimane896",
    live: null,
    accent: "#2269ec",
  },
];

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <p className="eyebrow">projects</p>
        <h2 className="section-title">Things I've actually shipped.</h2>
        <p className="section-sub">
          Live links below are placeholders for now — swap them in once each
          project has its own deployment.
        </p>

        <div className="projects__list">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              className="project-card"
              style={{ "--accent": project.accent }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <div className="project-card__number">0{i + 1}</div>
              <div className="project-card__body">
                <div className="project-card__head">
                  <div>
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__subtitle">{project.subtitle}</p>
                  </div>
                  <div className="project-card__links">
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub repository">
                      <FiGithub />
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live demo">
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>

                <p className="project-card__desc">{project.description}</p>

                <ul className="project-card__points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="project-card__stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="project-card__tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
