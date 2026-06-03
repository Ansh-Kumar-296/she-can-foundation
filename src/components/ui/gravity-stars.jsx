"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function GravityStarsBackground({
  starsCount = 75,
  starsSize = 2,
  starsOpacity = 0.75,
  glowIntensity = 15,
  glowAnimation = "ease",
  movementSpeed = 0.3,
  mouseInfluence = 100,
  mouseGravity = "attract",
  gravityStrength = 75,
  starsInteraction = false,
  starsInteractionType = "bounce",
  className,
  ...props
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const starsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  const [dpr, setDpr] = useState(1);
  const [canvasSize, setCanvasSize] = useState({
    width: 800,
    height: 600,
  });

  const readColor = useCallback(() => {
    const el = containerRef.current;
    if (!el) return "#ffffff";
    const cs = getComputedStyle(el);
    return cs.color || "#ffffff";
  }, []);

  const initStars = useCallback(
    (w, h) => {
      starsRef.current = Array.from({ length: starsCount }).map(() => {
        const angle = Math.random() * Math.PI * 2;
        const speed = movementSpeed * (0.5 + Math.random() * 0.5);

        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * starsSize + 1,
          opacity: starsOpacity,
          baseOpacity: starsOpacity,
          mass: Math.random() * 0.5 + 0.5,
          glowMultiplier: 1,
          glowVelocity: 0,
        };
      });
    },
    [starsCount, movementSpeed, starsOpacity, starsSize]
  );

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();

    const nextDpr = Math.max(
      1,
      Math.min(window.devicePixelRatio || 1, 2)
    );

    setDpr(nextDpr);

    canvas.width = rect.width * nextDpr;
    canvas.height = rect.height * nextDpr;

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    setCanvasSize({
      width: rect.width,
      height: rect.height,
    });

    initStars(rect.width, rect.height);
  }, [initStars]);

  const handlePointerMove = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();

    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  const updateStars = useCallback(() => {
    const w = canvasSize.width;
    const h = canvasSize.height;

    const mouse = mouseRef.current;

    for (let i = 0; i < starsRef.current.length; i++) {
      const p = starsRef.current[i];

      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.hypot(dx, dy);

      if (dist < mouseInfluence && dist > 0) {
        const force = (mouseInfluence - dist) / mouseInfluence;

        const nx = dx / dist;
        const ny = dy / dist;

        const g = force * (gravityStrength * 0.001);

        if (mouseGravity === "attract") {
          p.vx += nx * g;
          p.vy += ny * g;
        } else {
          p.vx -= nx * g;
          p.vy -= ny * g;
        }

        p.opacity = Math.min(1, p.baseOpacity + force * 0.4);

        const targetGlow = 1 + force * 2;
        const currentGlow = p.glowMultiplier || 1;

        if (glowAnimation === "instant") {
          p.glowMultiplier = targetGlow;
        } else {
          p.glowMultiplier =
            currentGlow + (targetGlow - currentGlow) * 0.15;
        }
      } else {
        p.opacity = Math.max(
          p.baseOpacity * 0.3,
          p.opacity - 0.02
        );

        p.glowMultiplier =
          (p.glowMultiplier || 1) +
          (1 - (p.glowMultiplier || 1)) * 0.08;
      }

      p.x += p.vx;
      p.y += p.vy;

      p.vx *= 0.999;
      p.vy *= 0.999;

      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;

      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;
    }
  }, [
    canvasSize.width,
    canvasSize.height,
    mouseInfluence,
    mouseGravity,
    gravityStrength,
    glowAnimation,
  ]);

  const drawStars = useCallback(
    (ctx) => {
      ctx.clearRect(
        0,
        0,
        ctx.canvas.width,
        ctx.canvas.height
      );

      const color = readColor();

      for (const p of starsRef.current) {
        ctx.save();

        ctx.shadowColor = color;
        ctx.shadowBlur =
          glowIntensity * (p.glowMultiplier || 1) * 2;

        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = color;

        ctx.beginPath();

        ctx.arc(
          p.x * dpr,
          p.y * dpr,
          p.size * dpr,
          0,
          Math.PI * 2
        );

        ctx.fill();

        ctx.restore();
      }
    },
    [dpr, glowIntensity, readColor]
  );

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    updateStars();
    drawStars(ctx);

    animRef.current = requestAnimationFrame(animate);
  }, [updateStars, drawStars]);

  useEffect(() => {
    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
      }
    };
  }, [animate]);

  return (
    <div
      ref={containerRef}
      className={cn(
  "absolute inset-0 h-full w-full overflow-hidden text-white",
  className
)}
      onMouseMove={handlePointerMove}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="block h-full w-full"
      />
    </div>
  );
}