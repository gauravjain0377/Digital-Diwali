import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
  size: number;
}

const Fireworks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const colors = [
      "hsl(0, 100%, 60%)", // red
      "hsl(45, 100%, 55%)", // gold
      "hsl(210, 100%, 60%)", // blue
      "hsl(120, 80%, 55%)", // green
      "hsl(280, 70%, 60%)", // purple
    ];

    let particles: Particle[] = [];
    let lastFirework = 0;

    const createFirework = (x: number, y: number) => {
      const particleCount = 80;
      const color = colors[Math.floor(Math.random() * colors.length)];

      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = Math.random() * 3 + 2;

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 1,
          color,
          size: Math.random() * 3 + 1,
        });
      }
    };

    const animate = (timestamp: number) => {
      ctx.fillStyle = "rgba(10, 5, 32, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create new fireworks randomly
      if (timestamp - lastFirework > 1500 + Math.random() * 1000) {
        const x = Math.random() * canvas.width * 0.6 + canvas.width * 0.2;
        const y = Math.random() * canvas.height * 0.4 + canvas.height * 0.1;
        createFirework(x, y);
        lastFirework = timestamp;
      }

      // Update and draw particles
      particles = particles.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.05; // gravity
        particle.vx *= 0.99; // air resistance
        particle.vy *= 0.99;
        particle.life -= 0.01;

        if (particle.life <= 0) return false;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(")", `, ${particle.life})`).replace("hsl", "hsla");
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        return true;
      });

      requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-20" />;
};

export default Fireworks;
