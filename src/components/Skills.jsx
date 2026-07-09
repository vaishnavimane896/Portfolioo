import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/skills.css";

const LAYERS = [
  {
    letter: "M",
    name: "MongoDB",
    role: "Database",
    detail: "Document storage, schema design & aggregation for app data.",
    chips: ["MongoDB", "MySQL", "Firestore"],
    color: "#22c55e",
  },
  {
    letter: "E",
    name: "Express.js",
    role: "Backend framework",
    detail: "REST APIs, routing & middleware powering the server layer.",
    chips: ["Express.js", "REST APIs", "Node.js"],
    color: "#fbbf24",
  },
  {
    letter: "R",
    name: "React.js",
    role: "Frontend library",
    detail: "Component-driven UIs with state management via Redux.",
    chips: ["React.js", "Redux", "Responsive Design"],
    color: "#2dd4bf",
  },
  {
    letter: "N",
    name: "Node.js",
    role: "Runtime",
    detail: "JavaScript runtime tying frontend requests to backend logic.",
    chips: ["Node.js", "Firebase Auth", "Cloudinary"],
    color: "#8b5cf6",
  },
];

const OTHER_GROUPS = [
  { label: "Languages", items: ["JavaScript (ES6+)", "Java", "Python","PHP","C++","SQL", "C#"] },
  { label: "Frontend", items: ["HTML5", "CSS3", "Bootstrap","ReactJs"] },
  { label: "Tools & Platforms", items: ["Git/GitHub", "Postman", "Netlify", "VS Code", ".NET (basics)"] },
];

export default function Skills() {
  const [active, setActive] = useState(2); // React highlighted by default

  return (
    <section className="section skills" id="stack">
      <div className="container">
        <p className="eyebrow">tech stack</p>
        <h2 className="section-title">The stack, layer by layer.</h2>
        <p className="section-sub">
          Hover a layer to see how it's actually used. This is the same order
          data travels through in every project below.
        </p>

        <div className="skills__stack">
          {LAYERS.map((layer, i) => (
            <motion.div
              key={layer.letter}
              className={`skills__layer ${active === i ? "skills__layer--active" : ""}`}
              style={{ "--layer-color": layer.color }}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="skills__layer-left">
                <span className="skills__layer-letter">{layer.letter}</span>
                <div>
                  <div className="skills__layer-name">{layer.name}</div>
                  <div className="skills__layer-role">{layer.role}</div>
                </div>
              </div>
              <div className="skills__layer-chips">
                {layer.chips.map((chip) => (
                  <span key={chip} className="skills__chip">
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <div className="skills__connector" aria-hidden="true" />

          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              className="skills__detail"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <span style={{ color: LAYERS[active].color }}>{LAYERS[active].name}</span>
              {" — "}
              {LAYERS[active].detail}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="skills__other">
          {OTHER_GROUPS.map((group, gi) => (
            <motion.div
              key={group.label}
              className="skills__group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <span className="skills__group-label">{group.label}</span>
              <div className="skills__group-items">
                {group.items.map((item) => (
                  <span key={item} className="skills__pill">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
