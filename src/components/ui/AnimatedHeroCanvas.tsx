import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  pulseSpeed: number;
  pulseVal: number;
  isOrange?: boolean;
}

interface PulseLine {
  from: number;
  to: number;
  progress: number;
  speed: number;
  color: string;
}

export const AnimatedHeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    // Mouse interaction across container
    const mouse = { x: -1000, y: -1000, radius: 170 };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Color Palette
    const colors = [
      "rgba(0, 102, 255, ",   // Electric Blue
      "rgba(0, 180, 216, ",   // Cyan
      "rgba(10, 37, 64, ",    // Deep Navy
      "rgba(255, 90, 31, ",   // Brand Orange Accent
    ];

    let particles: Particle[] = [];
    let pulseLines: PulseLine[] = [];

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((width * height) / 14000);

      for (let i = 0; i < particleCount; i++) {
        const isOrange = Math.random() < 0.15; // 15% orange accents
        const colorBase = isOrange ? colors[3] : colors[Math.floor(Math.random() * 3)];
        
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius: Math.random() * 2.5 + 1.2,
          color: colorBase,
          alpha: Math.random() * 0.5 + 0.3,
          pulseSpeed: Math.random() * 0.03 + 0.01,
          pulseVal: Math.random() * Math.PI * 2,
          isOrange,
        });
      }
    };

    initParticles();

    // Spawn pulses along connected node pathways
    const spawnPulse = () => {
      if (particles.length < 2) return;
      const from = Math.floor(Math.random() * particles.length);
      // Find a close neighbor
      for (let to = 0; to < particles.length; to++) {
        if (from === to) continue;
        const dx = particles[from].x - particles[to].x;
        const dy = particles[from].y - particles[to].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          pulseLines.push({
            from,
            to,
            progress: 0,
            speed: Math.random() * 0.02 + 0.015,
            color: particles[from].isOrange ? "rgba(255, 90, 31, 0.9)" : "rgba(0, 180, 216, 0.9)",
          });
          break;
        }
      }
    };

    const pulseInterval = setInterval(spawnPulse, 400);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background circuit grid
      const gridSize = 48;
      ctx.strokeStyle = "rgba(0, 102, 255, 0.04)";
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Update & Draw Connections
      const maxDistance = 140;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 102, 255, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw Pulse Packets
      for (let k = pulseLines.length - 1; k >= 0; k--) {
        const pulse = pulseLines[k];
        const p1 = particles[pulse.from];
        const p2 = particles[pulse.to];

        if (!p1 || !p2) {
          pulseLines.splice(k, 1);
          continue;
        }

        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulseLines.splice(k, 1);
          continue;
        }

        const px = p1.x + (p2.x - p1.x) * pulse.progress;
        const py = p1.y + (p2.y - p1.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = pulse.color;
        ctx.shadowColor = pulse.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce at boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse repulsion
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * force * 3;
          p.y -= Math.sin(angle) * force * 3;
        }

        // Pulse alpha
        p.pulseVal += p.pulseSpeed;
        const dynamicAlpha = p.alpha + Math.sin(p.pulseVal) * 0.2;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0.1, dynamicAlpha)})`;

        if (p.isOrange || p.radius > 2.8) {
          ctx.shadowColor = `${p.color}0.6)`;
          ctx.shadowBlur = 8;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(pulseInterval);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ touchAction: "none" }}
    />
  );
};
