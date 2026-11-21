import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
};

const COLORS = [
  "129, 140, 248", // indigo-400
  "139, 92, 246", // violet-500
  "167, 139, 250", // violet-400
  "99, 102, 241", // indigo-500
  "165, 180, 252", // indigo-300
];

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let particles: Particle[] = [];
    let w = 0;
    let h = 0;

    const countForSize = () => {
      const area = w * h;
      // умеренная плотность
      return Math.max(28, Math.min(70, Math.floor(area / 22000)));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const n = countForSize();
      particles = Array.from({ length: n }, () => spawn(true));
    };

    const spawn = (randomY = false): Particle => {
      const r = 1.2 + Math.random() * 2.8;
      return {
        x: Math.random() * w,
        y: randomY ? Math.random() * h : h + r + Math.random() * 40,
        r,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.15 - Math.random() * 0.35, // медленно вверх
        alpha: 0.15 + Math.random() * 0.35,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // мягкие связи между близкими частицами
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            const opacity = (1 - dist / 120) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // лёгкое покачивание
        p.x += Math.sin(p.y * 0.008) * 0.12;

        if (p.y < -20 || p.x < -40 || p.x > w + 40) {
          Object.assign(p, spawn(false));
          p.y = h + p.r;
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduced) {
      // статичный кадр
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha * 0.8})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" aria-hidden="true" />;
}
