import { motion } from "framer-motion";
import "../styles/about.css";

const STATS = [
  { label: "CGPA (MCA)", value: "8.6" },
  { label: "CGPA (BCA)", value: "8.60" },
  { label: "Core Projects Shipped", value: "4" },
  { label: "Stack", value: "MERN" },
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">about</p>
          <h2 className="section-title">
            Full-stack by training,<br /> problem-solver by habit.
          </h2>
          <p className="about__text">
            I'm an MCA candidate specializing in the MERN stack, currently building
            production-style web applications that go beyond tutorials — real-time
            data sync, image pipelines, and full CRUD systems that actually hold up.
          </p>
          <p className="about__text">
            I'm comfortable moving across the stack: React and Redux on the frontend,
            Node.js and Express on the backend, MongoDB or Firebase depending on what
            the project needs. I care less about chasing every new framework and more
            about writing code that's clean, maintainable, and ships features that
            actually work end to end.
          </p>
          <p className="about__text">
            Outside of the MERN world, I've also worked with Java, SQL, and even
            desktop application development with .NET — which keeps my problem-solving
            grounded, not just framework-deep.
          </p>
        </motion.div>

        <motion.div
          className="about__stats"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="about__stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <span className="about__stat-value">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
