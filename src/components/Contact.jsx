import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import "../styles/contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up yet — routes straight to her inbox via mailto.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "someone"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:manevaishnavi635@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">get in touch</p>
          <h2 className="section-title">Let's build something.</h2>
          <p className="section-sub">
            Open to full-stack and MERN roles. The fastest way to reach me is
            email — happy to walk through any project in more depth.
          </p>

          <div className="contact__links">
            <a href="mailto:manevaishnavi635@gmail.com" className="contact__link">
              <FiMail /> manevaishnavi635@gmail.com
            </a>
            {/* <a href="tel:9511707543" className="contact__link">
              <FiPhone /> +91 95117 07543
            </a> */}
            <a href="https://github.com/vaishnavimane896" target="_blank" rel="noreferrer" className="contact__link">
              <FiGithub /> github.com/vaishnavimane
            </a>
            <a href="https://www.linkedin.com/in/vaishnavi-mane-a36643397/" target="_blank" rel="noreferrer" className="contact__link">
              <FiLinkedin /> linkedin.com/in/vaishnavimane
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <label className="contact__label">
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </label>
          <label className="contact__label">
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>
          <label className="contact__label">
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about the role or project..."
              rows={5}
              required
            />
          </label>
          <button type="submit" className="btn btn--primary contact__submit">
            <FiSend /> {sent ? "Opening your mail app..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
