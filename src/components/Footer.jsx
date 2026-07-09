import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__text">
          <span className="footer__mono">{"//"}</span> Designed &amp; built by Vaishnavi Mane
        </span>
        <span className="footer__text footer__mono">
          {new Date().getFullYear()} · made with React + Vite
        </span>
      </div>
    </footer>
  );
}
