"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, DollarSign, Shield, Lightbulb, Zap, Globe } from "lucide-react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function Benefit({ icon, title, description, delay }: BenefitProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glassmorphism rounded-xl p-6 relative overflow-hidden group"
    >
      {/* Animated border effect */}
      <div className="absolute inset-0 border border-[var(--neon-green-glow)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

      {/* Icon with glow effect */}
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--neon-green-glow)] bg-opacity-20 mb-4 group-hover:scale-110 transition-transform duration-300">
        <div className="text-[var(--neon-green)]">{icon}</div>
      </div>

      <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--neon-green)] transition-colors duration-300">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {description}
      </p>
    </motion.div>
  );
}

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Energia Solar Compartilhada",
      description: "Beneficie-se da energia limpa gerada pelas usinas solares mesmo sem ter painéis instalados em sua residência ou empresa.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Economia Significativa",
      description: "Reduza drasticamente o valor de suas faturas de energia através de créditos de energia solar aplicados diretamente nas contas de luz.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Sem Investimento Inicial",
      description: "Acesse energia solar sem precisar investir em painéis próprios, eliminando custos de instalação e manutenção de equipamentos.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Créditos de Energia",
      description: "Receba créditos de energia solar com base no seu consumo anual, resultando em economia substancial nas suas contas de luz.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Monitoramento em Tempo Real",
      description: "Acompanhe seu consumo de energia solar em tempo real, permitindo ajustes para otimizar suas economias.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Bônus por Afiliação",
      description: "Receba bônus imediatos e recorrentes ao conectar novos licenciados, com valores crescentes conforme sua qualificação.",
    },
  ];

  return (
    <section id="benefits" className="py-20 relative overflow-hidden bg-white dark:bg-[var(--background-dark)]">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[var(--neon-green)]"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Benefícios da <span className="neon-text">Energia Verde</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubra como a energia verde pode transformar sua vida e seu negócio,
            trazendo vantagens econômicas e ambientais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Benefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Stats with counter animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold neon-text mb-2">
              <CountUp end={100} suffix="+" />
            </div>
            <p className="text-gray-600 dark:text-gray-300">Usinas solares em operação</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold neon-text mb-2">
              <CountUp end={90000} suffix="+" />
            </div>
            <p className="text-gray-600 dark:text-gray-300">Clientes atendidos</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold neon-text mb-2">
              <CountUp end={6} suffix="B" />
            </div>
            <p className="text-gray-600 dark:text-gray-300">Reais investidos em usinas</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Simple counter animation component
interface CountUpProps {
  end: number;
  suffix?: string;
}

function CountUp({ end, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    const duration = 2000; // 2 seconds

    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(countUp);
      }
    };

    animationFrame = requestAnimationFrame(countUp);

    return () => cancelAnimationFrame(animationFrame);
  }, [end]);

  return <>{count.toLocaleString()}{suffix}</>;
}
