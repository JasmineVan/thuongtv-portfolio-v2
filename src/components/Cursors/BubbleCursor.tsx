import { useEffect, useRef } from "react";

type Bubble = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
};

const BubbleCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const mouseRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      // spawn a few bubbles per move
      for (let i = 0; i < 3; i++) {
        const r = 3 + Math.random() * 8;
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.2 + Math.random() * 0.6;
        bubblesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          r,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.3, // drift upwards
          life: 0,
          maxLife: 40 + Math.random() * 30,
        });
      }
    };

    const onClick = (e: MouseEvent) => {
      // burst on click
      for (let i = 0; i < 12; i++) {
        const r = 4 + Math.random() * 10;
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.8 + Math.random() * 1.5;
        bubblesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          r,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.2,
          life: 0,
          maxLife: 35 + Math.random() * 25,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // draw trailing bubbles
      for (let i = bubblesRef.current.length - 1; i >= 0; i--) {
        const b = bubblesRef.current[i];
        b.x += b.vx;
        b.y += b.vy;
        b.life++;

        const t = b.life / b.maxLife; // 0..1
        const alpha = Math.max(0, 0.6 * (1 - t));
        const radius = b.r * (1 + 0.5 * (1 - t));

        // glassy bubble: blurred, soft white with subtle border
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.6})`;
        ctx.lineWidth = 1;
        // backdrop-ish glow
        ctx.shadowColor = `rgba(255,255,255,${alpha * 0.8})`;
        ctx.shadowBlur = 12;

        ctx.arc(b.x, b.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // fade out
        if (b.life >= b.maxLife) {
          bubblesRef.current.splice(i, 1);
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("click", onClick, { passive: true });

    draw();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove as any);
      window.removeEventListener("click", onClick as any);
    };
  }, []);

  return (
    <>
      {/* Hide native cursor only on devices that have a cursor */}
      <style>{`
        @media (hover:hover) {
          html, body { cursor: none; }
        }
        @media (hover:none) {
          canvas[data-bubble-cursor] { display:none; }
        }
      `}</style>
      <canvas
        ref={canvasRef}
        data-bubble-cursor
        className="pointer-events-none fixed inset-0 z-[9999]"
      />
    </>
  );
};

export default BubbleCursor;
