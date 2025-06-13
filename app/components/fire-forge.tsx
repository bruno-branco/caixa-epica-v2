"use client";

import { useEffect, useState, useRef } from "react";

const FireForge = () => {
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      left: number;
      startY: number;
      delay: number;
      duration: number;
      size: number;
      type: "spark" | "ember" | "flame" | "light";
      trajectory: number;
      isLateral: boolean;
    }>
  >([]);

  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    setIsClient(true);

    // Optimized particle count: 80 total, but 90% on laterals
    const newParticles = Array.from({ length: 80 }, (_, i) => {
      let left: number;
      let startY: number;
      let isLateral: boolean;
      let size: number;

      // 90% of particles on lateral sides
      if (Math.random() < 0.9) {
        isLateral = true;
        // Heavy concentration on far sides
        if (Math.random() < 0.5) {
          left = Math.pow(Math.random(), 2) * 35; // Left side: 0-35% (exponential toward edge)
        } else {
          left = 100 - Math.pow(Math.random(), 2) * 35; // Right side: 65-100%
        }

        // Lateral particles reach half screen height
        const edgeDistance = Math.min(left, 100 - left); // Distance from nearest edge
        const heightMultiplier = Math.pow((35 - edgeDistance) / 35, 0.3); // Stronger near edges
        const maxHeight = window.innerHeight * 0.5 * heightMultiplier; // Half screen
        startY = -(Math.random() * maxHeight);

        // Lateral particles are bigger and stronger
        size = 3 + Math.random() * 8; // 3-11px
      } else {
        isLateral = false;
        // Center particles: small and low
        left = 42 + Math.random() * 16; // 42-58% (narrow center band)

        // Center particles stay very low
        const centerHeight = 80 + Math.random() * 40; // Only 80-120px high
        startY = -centerHeight;

        // Center particles are much smaller
        size = 1 + Math.random() * 3; // 1-4px
      }

      // Particle types based on location
      let type: "spark" | "ember" | "flame" | "light";
      if (isLateral) {
        // Lateral particles get more dramatic types
        const lateralTypes: Array<"spark" | "ember" | "flame"> = [
          "spark",
          "ember",
          "flame",
        ];
        type = lateralTypes[Math.floor(Math.random() * lateralTypes.length)];
      } else {
        // Center gets more subtle particles
        const centerTypes: Array<"ember" | "light"> = ["ember", "light"];
        type = centerTypes[Math.floor(Math.random() * centerTypes.length)];
      }

      return {
        id: i,
        left,
        startY,
        delay: Math.random() * 4,
        duration: 1.5 + Math.random() * 3,
        size: type === "light" ? size * 1.5 : size,
        type,
        trajectory: isLateral
          ? (Math.random() - 0.5) * 150
          : (Math.random() - 0.5) * 50, // More chaos on sides
        isLateral,
      };
    });

    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = Math.abs(currentScrollY - lastScrollY.current);

      const velocity = Math.min(deltaY / 20, 1);
      setScrollVelocity(velocity);

      lastScrollY.current = currentScrollY;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setScrollVelocity(0);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  if (!isClient) {
    return null;
  }

  const getParticleStyle = (particle: (typeof particles)[0]) => {
    // Lateral particles are more sensitive to scroll
    const scrollMultiplier = particle.isLateral ? 2 : 1;
    const baseStyle = {
      left: `${particle.left}%`,
      bottom: `${particle.startY}px`,
      animationDelay: `${particle.delay}s`,
      animationDuration: `${particle.duration}s`,
      "--trajectory": `${particle.trajectory}px`,
      "--fire-scale": 1 + scrollVelocity * scrollMultiplier,
    } as React.CSSProperties;

    switch (particle.type) {
      case "spark":
        return {
          ...baseStyle,
          width: `${particle.size}px`,
          height: `${particle.size}px`,
        };
      case "ember":
        return {
          ...baseStyle,
          width: `${particle.size}px`,
          height: `${particle.size}px`,
        };
      case "flame":
        return {
          ...baseStyle,
          width: `${particle.size}px`,
          height: `${particle.size * 1.5}px`,
        };
      case "light":
        return {
          ...baseStyle,
          width: `${particle.size}px`,
          height: `${particle.size * 0.3}px`,
        };
      default:
        return baseStyle;
    }
  };

  const getParticleClass = (particle: (typeof particles)[0]) => {
    const baseClasses = "absolute animate-forge-particle";

    // Lateral particles are more visible and reactive to scroll
    const baseOpacity = particle.isLateral ? 0.4 : 0.2;
    const scrollOpacity = particle.isLateral ? 0.8 : 0.6;
    const opacity = `opacity-[${baseOpacity + scrollVelocity * scrollOpacity}]`;

    switch (particle.type) {
      case "spark":
        return `${baseClasses} bg-yellow-400 ${opacity} spark-shape glow-yellow`;
      case "ember":
        return `${baseClasses} bg-orange-500 rounded-full ${opacity} glow-orange`;
      case "flame":
        return `${baseClasses} bg-gradient-to-t from-red-500 to-yellow-300 ${opacity} flame-shape`;
      case "light":
        return `${baseClasses} bg-gradient-to-r from-transparent via-yellow-200 to-transparent ${opacity} blur-sm`;
      default:
        return baseClasses;
    }
  };

  return (
    <>
      {/* Stable lateral lights - NO FLICKERING */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {/* Left side light */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full transition-all duration-300"
          style={{
            background: `
              radial-gradient(ellipse 50vw 100vh at 0% 100%, 
                rgba(251, 191, 36, ${0.08 + scrollVelocity * 0.25}) 0%, 
                rgba(249, 115, 22, ${0.06 + scrollVelocity * 0.2}) 15%, 
                rgba(245, 101, 36, ${0.04 + scrollVelocity * 0.15}) 30%, 
                rgba(234, 88, 12, ${0.02 + scrollVelocity * 0.1}) 45%, 
                rgba(234, 88, 12, ${0.01 + scrollVelocity * 0.05}) 60%, 
                transparent 80%
              )
            `,
            transform: `scaleY(${1 + scrollVelocity * 0.4})`,
          }}
        />

        {/* Right side light */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full transition-all duration-300"
          style={{
            background: `
              radial-gradient(ellipse 50vw 100vh at 100% 100%, 
                rgba(251, 191, 36, ${0.08 + scrollVelocity * 0.25}) 0%, 
                rgba(249, 115, 22, ${0.06 + scrollVelocity * 0.2}) 15%, 
                rgba(245, 101, 36, ${0.04 + scrollVelocity * 0.15}) 30%, 
                rgba(234, 88, 12, ${0.02 + scrollVelocity * 0.1}) 45%, 
                rgba(234, 88, 12, ${0.01 + scrollVelocity * 0.05}) 60%, 
                transparent 80%
              )
            `,
            transform: `scaleY(${1 + scrollVelocity * 0.4})`,
          }}
        />
      </div>

      {/* Optimized particle container */}
      <div
        className="fixed bottom-0 left-0 w-full h-screen pointer-events-none z-10 overflow-hidden"
        style={
          {
            "--fire-velocity": scrollVelocity,
            "--fire-opacity": 0.15 + scrollVelocity * 0.85,
          } as React.CSSProperties
        }
      >
        {/* Base forge glow */}
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 rounded-t-full opacity-[var(--fire-opacity)] transition-all duration-300"
          style={{
            background: `radial-gradient(ellipse at center bottom, rgba(245, 101, 36, ${0.15 + scrollVelocity * 0.4}) 0%, rgba(234, 88, 12, ${0.08 + scrollVelocity * 0.3}) 40%, transparent 70%)`,
            transform: `translateX(-50%) scaleY(${1 + scrollVelocity * 0.6}) scaleX(${1 + scrollVelocity * 0.2})`,
          }}
        />

        {/* Optimized particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={getParticleClass(particle)}
            style={getParticleStyle(particle)}
          />
        ))}
      </div>
    </>
  );
};

export default FireForge;
