import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    let time = 0;

    class InteractiveBlob {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      radius: number;
      speedX: number;
      speedY: number;
      hue: number;
      phase: number;

      constructor() {
        if (!canvas) {
          this.x = 0;
          this.y = 0;
          this.baseX = 0;
          this.baseY = 0;
          this.radius = 50;
          this.speedX = 0;
          this.speedY = 0;
          this.hue = 200;
          this.phase = 0;
          return;
        }
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.radius = Math.random() * 80 + 40;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.hue = Math.random() * 60 + 180;
        this.phase = Math.random() * Math.PI * 2;
      }

      update(mouseX: number, mouseY: number, time: number) {
        if (!canvas) return;
        this.baseX += this.speedX;
        this.baseY += this.speedY;

        if (this.baseX > canvas.width) this.baseX = 0;
        if (this.baseX < 0) this.baseX = canvas.width;
        if (this.baseY > canvas.height) this.baseY = 0;
        if (this.baseY < 0) this.baseY = canvas.height;

        // React to mouse - attract towards cursor
        const dx = mouseX - this.baseX;
        const dy = mouseY - this.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 300;

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 0.3;
          this.x = this.baseX + dx * force;
          this.y = this.baseY + dy * force;
        } else {
          this.x = this.baseX;
          this.y = this.baseY;
        }

        // Pulsing effect
        const pulse = Math.sin(time + this.phase) * 0.2 + 1;
        this.radius = (Math.random() * 80 + 40) * pulse;
      }

      draw() {
        if (!ctx) return;

        ctx.filter = "blur(40px)";
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius,
        );
        gradient.addColorStop(0, `hsla(${this.hue}, 70%, 50%, 0.15)`);
        gradient.addColorStop(0.5, `hsla(${this.hue}, 70%, 50%, 0.08)`);
        gradient.addColorStop(1, `hsla(${this.hue}, 70%, 50%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.filter = "none";
      }
    }

    class MeshGrid {
      points: { x: number; y: number; baseX: number; baseY: number }[][];
      cols: number;
      rows: number;
      spacing: number;

      constructor() {
        if (!canvas) {
          this.points = [];
          this.cols = 0;
          this.rows = 0;
          this.spacing = 0;
          return;
        }
        this.spacing = 60;
        this.cols = Math.ceil(canvas.width / this.spacing) + 1;
        this.rows = Math.ceil(canvas.height / this.spacing) + 1;
        this.points = [];

        for (let row = 0; row < this.rows; row++) {
          this.points[row] = [];
          for (let col = 0; col < this.cols; col++) {
            const x = col * this.spacing;
            const y = row * this.spacing;
            this.points[row][col] = { x, y, baseX: x, baseY: y };
          }
        }
      }

      update(mouseX: number, mouseY: number) {
        for (let row = 0; row < this.rows; row++) {
          for (let col = 0; col < this.cols; col++) {
            const point = this.points[row][col];
            const dx = mouseX - point.baseX;
            const dy = mouseY - point.baseY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 200;

            if (distance < maxDistance) {
              const force = (1 - distance / maxDistance) * 30;
              point.x = point.baseX + (dx / distance) * force;
              point.y = point.baseY + (dy / distance) * force;
            } else {
              point.x += (point.baseX - point.x) * 0.1;
              point.y += (point.baseY - point.y) * 0.1;
            }
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.strokeStyle = "rgba(100, 200, 255, 0.08)";
        ctx.lineWidth = 1;

        // Draw horizontal lines
        for (let row = 0; row < this.rows; row++) {
          ctx.beginPath();
          for (let col = 0; col < this.cols; col++) {
            const point = this.points[row][col];
            if (col === 0) {
              ctx.moveTo(point.x, point.y);
            } else {
              ctx.lineTo(point.x, point.y);
            }
          }
          ctx.stroke();
        }

        // Draw vertical lines
        for (let col = 0; col < this.cols; col++) {
          ctx.beginPath();
          for (let row = 0; row < this.rows; row++) {
            const point = this.points[row][col];
            if (row === 0) {
              ctx.moveTo(point.x, point.y);
            } else {
              ctx.lineTo(point.x, point.y);
            }
          }
          ctx.stroke();
        }
      }
    }

    class InteractiveParticle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        if (!canvas) {
          this.x = 0;
          this.y = 0;
          this.baseX = 0;
          this.baseY = 0;
          this.size = 1;
          this.speedX = 0;
          this.speedY = 0;
          return;
        }
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
      }

      update(mouseX: number, mouseY: number) {
        if (!canvas) return;
        this.baseX += this.speedX;
        this.baseY += this.speedY;

        if (this.baseX > canvas.width) this.baseX = 0;
        if (this.baseX < 0) this.baseX = canvas.width;
        if (this.baseY > canvas.height) this.baseY = 0;
        if (this.baseY < 0) this.baseY = canvas.height;

        // Repel from mouse
        const dx = this.baseX - mouseX;
        const dy = this.baseY - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 50;
          this.x = this.baseX + (dx / distance) * force;
          this.y = this.baseY + (dy / distance) * force;
        } else {
          this.x += (this.baseX - this.x) * 0.05;
          this.y += (this.baseY - this.y) * 0.05;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.filter = "blur(1px)";
        ctx.fillStyle = "rgba(100, 200, 255, 0.4)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.filter = "none";
      }
    }

    // Create instances
    const blobs: InteractiveBlob[] = [];
    for (let i = 0; i < 8; i++) {
      blobs.push(new InteractiveBlob());
    }

    const meshGrid = new MeshGrid();

    const particles: InteractiveParticle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push(new InteractiveParticle());
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      time += 0.02;

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      // Update and draw all elements
      meshGrid.update(mouseX, mouseY);
      meshGrid.draw();

      blobs.forEach((blob) => {
        blob.update(mouseX, mouseY, time);
        blob.draw();
      });

      particles.forEach((particle) => {
        particle.update(mouseX, mouseY);
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" />
  );
}
