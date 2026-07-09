import { motion } from "framer-motion";
import "../styles/education.css";

const TIMELINE = [
  {
    year: "2023",
    title: "BCA — Shivaji University, Kolhapur",
    detail: "Bachelor of Computer Applications · CGPA 8.60",
    type: "education",
  },
  {
    year: "2024",
    title: "Certificate of Proficiency in C#",
    detail: "Issued August 2024",
    type: "certification",
  },
  {
    year: "2025",
    title: "Core Java Certificate Course",
    detail: "Issued September 2025",
    type: "certification",
  },
  {
    year: "2025 — ongoing",
    title: "MCA — Tatyasaheb Kore Institute of Engineering & Technology",
    detail: "Master of Computer Applications · Warananagar · First Year",
    type: "education",
  },
];

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <p className="eyebrow">education & certifications</p>
        <h2 className="section-title">The timeline so far.</h2>

        <div className="edu-timeline">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.title}
              className="edu-item"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="edu-item__marker">
                <span className={`edu-item__dot edu-item__dot--${item.type}`} />
                {i !== TIMELINE.length - 1 && <span className="edu-item__line" />}
              </div>
              <div className="edu-item__content">
                <span className="edu-item__year">{item.year}</span>
                <h3 className="edu-item__title">{item.title}</h3>
                <p className="edu-item__detail">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
