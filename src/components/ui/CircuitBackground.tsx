import React, { useEffect, useRef } from "react";

interface CircuitBackgroundProps {
  className?: string;
  density?: "low" | "medium" | "high";
  interactive?: boolean;
}

export const CircuitBackground: React.FC<CircuitBackgroundProps> = ({
  className = "",
  density = "medium",
  interactive = true,
}) => {
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
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const nodeCount = density === "low" ? 18 : density === "medium" ? 30 : 45;
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      pulse: number;
      color: string;
      isOrange: boolean;
    }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const isOrange = i % 7 === 0;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: isOrange ? 2.5 : Math.random() * 2 + 1,
        pulse: Math.random() * Math.PI,
        color: isOrange ? "#FF5A1F" : Math.random() > 0.4 ? "#0066FF" : "#00A3C4",
        isOrange,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            if ((i + j) % 3 === 0) {
              const midX = nodes[i].x + (nodes[j].x - nodes[i].x) * 0.5;
              ctx.lineTo(midX, nodes[i].y);
              ctx.lineTo(midX, nodes[j].y);
            }
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = nodes[i].isOrange || nodes[j].isOrange
              ? `rgba(255, 90, 31, ${alpha * 1.5})`
              : `rgba(0, 102, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        node.pulse += 0.03;
        const currentSize = node.size + Math.sin(node.pulse) * 0.5;

        // Mouse interaction
        const mdx = node.x - mouseX;
        const mdy = node.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 90) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(0, 102, 255, ${0.25 * (1 - mdist / 90)})`;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none w-full h-full opacity-40 ${className}`}
    />
  );
};
