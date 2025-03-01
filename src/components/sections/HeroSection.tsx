"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import EnergyFlow from "../3d/EnergyFlow";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Scanline effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (heroRef.current) {
        const scanline = document.createElement("div");
        scanline.className =
          "absolute h-px w-full bg-[var(--neon-green-glow)] opacity-30";
        scanline.style.top = "0";
        scanline.style.animation = "scanline 1.5s linear forwards";
        heroRef.current.appendChild(scanline);

        // Remove scanline after animation completes
        setTimeout(() => {
          if (heroRef.current && scanline.parentNode === heroRef.current) {
            heroRef.current.removeChild(scanline);
          }
        }, 1500);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--background-dark)]"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-background"></div>

      {/* Content container */}
      <div className="container mx-auto px-4 py-20 pt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Transforme sua{" "}
              <span className="neon-text pulse-animation">energia</span> em um
              futuro sustentável
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl mb-8 text-gray-300"
            >
              Soluções de energia verde para famílias e empresas. Economize e
              contribua para um planeta mais limpo.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#simulator"
                className="neon-button px-8 py-3 rounded-full text-lg font-medium flex items-center justify-center gap-2 group"
              >
                Simular Economia
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#solutions"
                className="px-8 py-3 rounded-full text-lg font-medium border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                Conhecer Soluções
              </a>
            </motion.div>
          </motion.div>

          {/* 3D visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[400px] md:h-[500px] w-full relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full max-w-[500px] max-h-[500px]">
                <EnergyFlow />
              </div>
            </div>

            {/* Glowing circle behind the 3D visualization */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[var(--neon-green-glow)] opacity-20 blur-3xl"></div>

            {/* Tech circles */}
            <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full border border-[var(--neon-green)] opacity-60 flex items-center justify-center">
              <div className="w-2 h-2 bg-[var(--neon-green)] rounded-full pulse-animation"></div>
            </div>
            <div className="absolute bottom-1/4 left-1/3 w-12 h-12 rounded-full border border-[var(--neon-green)] opacity-40 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[var(--neon-green)] rounded-full pulse-animation"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="glassmorphism p-6 rounded-lg">
            <h3 className="text-3xl font-bold neon-text">+100</h3>
            <p className="text-sm text-gray-300 mt-2">Usinas Solares</p>
          </div>
          <div className="glassmorphism p-6 rounded-lg">
            <h3 className="text-3xl font-bold neon-text">R$6bi+</h3>
            <p className="text-sm text-gray-300 mt-2">Investimento em Usinas</p>
          </div>
          <div className="glassmorphism p-6 rounded-lg">
            <h3 className="text-3xl font-bold neon-text">+90mil</h3>
            <p className="text-sm text-gray-300 mt-2">Clientes Satisfeitos</p>
          </div>
          <div className="glassmorphism p-6 rounded-lg">
            <h3 className="text-3xl font-bold neon-text">24h</h3>
            <p className="text-sm text-gray-300 mt-2">Suporte Técnico</p>
          </div>
        </motion.div>
      </div>

      {/* Diagonal divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
        <svg
          className="absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100px" }}
        >
          <path
            d="M1200 120L0 16.48V0h1200v120z"
            className="fill-white dark:fill-[var(--background-dark)]"
            style={{ opacity: 0.1 }}
          ></path>
          <path
            d="M1200 120L0 16.48V0h1200v120z"
            className="fill-white dark:fill-[var(--background-dark)]"
            style={{ opacity: 0.2, transform: "translateY(-15px)" }}
          ></path>
          <path
            d="M1200 120L0 16.48V0h1200v120z"
            className="fill-white dark:fill-[var(--background-dark)]"
          ></path>
        </svg>
      </div>
    </section>
  );
}
