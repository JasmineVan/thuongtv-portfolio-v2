import { useEffect, useRef } from "react";

type Sparkle = {
  x: number;
  y: number;
  life: number;
  maxLife: number;
  rot: number;
  vr: number;
};

const SparkleCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const sparksRef = useRef<Sparkle[]>([]);

  useEffect(() => {
    const c = canvasRef.current!;
    const ctx = c.getContext("2d")!;
    let w = (c.width = window.innerWidth);
    let h = (c.height = window.innerHeight);

    const onResize = () => {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
    };

    const spawn = (x: number, y: number, n = 3) => {
      for (let i = 0; i < n; i++) {
        sparksRef.current.push({
          x: x + (Math.random() - 0.5) * 14,
          y: y + (Math.random() - 0.5) * 14,
          life: 0,
          maxLife: 30 + Math.random() * 30,
          rot: Math.random() * Math.PI * 2,
          vr: (Math.random() - 0.5) * 0.2,
        });
      }
    };

    const onMove = (e: MouseEvent) => spawn(e.clientX, e.clientY, 2);
    const onClick = (e: MouseEvent) => spawn(e.clientX, e.clientY, 10);

    const drawStar = (
      x: number,
      y: number,
      size: number,
      a: number,
      rot: number,
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.globalAlpha = a;
      // white glow base
      ctx.shadowColor = "rgba(255,255,255,0.9)";
      ctx.shadowBlur = 12;
      ctx.fillStyle = "white";
      // simple 4-point star (diamond + cross)
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.3, -size * 0.3);
      ctx.lineTo(size, 0);
      ctx.lineTo(size * 0.3, size * 0.3);
      ctx.lineTo(0, size);
      ctx.lineTo(-size * 0.3, size * 0.3);
      ctx.lineTo(-size, 0);
      ctx.lineTo(-size * 0.3, -size * 0.3);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = sparksRef.current.length - 1; i >= 0; i--) {
        const s = sparksRef.current[i];
        s.life++;
        s.rot += s.vr;
        const t = s.life / s.maxLife; // 0..1
        const alpha = Math.max(0, 1 - t);
        const size = 2 + 3 * (1 - t) + Math.sin(t * Math.PI * 2) * 1.2; // twinkle pulse
        drawStar(s.x, s.y, size, alpha, s.rot);
        if (s.life >= s.maxLife) sparksRef.current.splice(i, 1);
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("click", onClick, { passive: true });

    loop();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove as any);
      window.removeEventListener("click", onClick as any);
    };
  }, []);

  return (
    <>
      <style>{`
        @media (hover:hover) {
          html, body { cursor: none; }
        }
        @media (hover:none) {
          canvas[data-sparkle-cursor] { display:none; }
        }
      `}</style>
      <canvas
        ref={canvasRef}
        data-sparkle-cursor
        className="pointer-events-none fixed inset-0 z-[9999]"
      />
    </>
  );
};

export default SparkleCursor;
