import { useEffect, useRef } from "react";
import "../styles/ambient.css";


export default function AmbientBackground() {
  const orbARef = useRef(null);
  const orbBRef = useRef(null);

  useEffect(() => {
    let raf;
    let mouseX = 0.5;
    let mouseY = 0.4;
    let curX = 0.5;
    let curY = 0.4;

    const handleMove = (e) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };
    window.addEventListener("pointermove", handleMove);

    const animate = () => {
      curX += (mouseX - curX) * 0.02;
      curY += (mouseY - curY) * 0.02;
      if (orbARef.current) {
        orbARef.current.style.transform = `translate(${curX * 60 - 30}px, ${curY * 50 - 25}px)`;
      }
      if (orbBRef.current) {
        orbBRef.current.style.transform = `translate(${(1 - curX) * 50 - 25}px, ${(1 - curY) * 60 - 30}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__grid" />
      <div className="ambient__orb ambient__orb--violet" ref={orbARef} />
      <div className="ambient__orb ambient__orb--cyan" ref={orbBRef} />
      <div className="ambient__noise" />
    </div>
  );
}
