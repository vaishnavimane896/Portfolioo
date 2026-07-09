import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import "../styles/hero.css";

const BOOT_LINES = [
  { prompt: "who am i", output: "vaishnavi_mane" },
  { prompt: "cat role.txt", output: "MERN Stack Developer" },
  { prompt: "status --current", output: "MCA Candidate · 8.6 CGPA · Building end-to-end" },
];

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState("prompt"); // prompt -> output -> done
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (lineIndex >= BOOT_LINES.length) {
      const t = setTimeout(() => setShowContent(true), 350);
      return () => clearTimeout(t);
    }

    const current = BOOT_LINES[lineIndex];
    const target = phase === "prompt" ? current.prompt : current.output;

    if (charIndex < target.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), phase === "prompt" ? 38 : 18);
      return () => clearTimeout(t);
    }

    if (phase === "prompt") {
      const t = setTimeout(() => {
        setPhase("output");
        setCharIndex(0);
      }, 220);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setPhase("prompt");
      setCharIndex(0);
    }, 380);
    return () => clearTimeout(t);
  }, [charIndex, phase, lineIndex]);

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__terminal">
          <div className="hero__terminal-bar">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
            <span className="hero__terminal-title">vaishnavi@portfolio: ~</span>
          </div>
          <div className="hero__terminal-body">
            {BOOT_LINES.slice(0, lineIndex).map((line, i) => (
              <div key={i} className="hero__line">
                <span className="hero__prompt-symbol">➜</span>
                <span className="hero__prompt-text">{line.prompt}</span>
                <div className="hero__output">{line.output}</div>
              </div>
            ))}

            {lineIndex < BOOT_LINES.length && (
              <div className="hero__line">
                <span className="hero__prompt-symbol">➜</span>
                <span className="hero__prompt-text">
                  {phase === "prompt"
                    ? BOOT_LINES[lineIndex].prompt.slice(0, charIndex)
                    : BOOT_LINES[lineIndex].prompt}
                  {phase === "prompt" && <span className="hero__cursor" />}
                </span>
                {phase === "output" && (
                  <div className="hero__output">
                    {BOOT_LINES[lineIndex].output.slice(0, charIndex)}
                    <span className="hero__cursor" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {showContent && (
          <motion.div
            className="hero__content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="eyebrow">available for full-stack roles</p>
            <h1 className="hero__name">
              Vaishnavi Mane
            </h1>
            <p className="hero__tagline">
              I build production-style web apps end to end —{" "}
              <span className="hero__highlight">React</span> on the front,{" "}
              <span className="hero__highlight">Node, Express &amp; MongoDB</span>{" "}
              underneath, shipped with real-time data and clean architecture.
            </p>

            <div className="hero__actions">
              <a href="#projects" className="btn btn--primary">
                View Projects
              </a>
              <a href="/Vaishnavi_Mane_Resume.pdf" download className="btn btn--ghost">
                Download Resume
              </a>
            </div>

            <div className="hero__socials">
              <a href="https://github.com/vaishnavimane896" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/vaishnavi-mane-a36643397/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="mailto:manevaishnavi635@gmail.com" aria-label="Email">
                <FiMail />
              </a>
            </div>
          </motion.div>
        )}
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About">
        <FiArrowDown />
      </a>
    </section>
  );
}
