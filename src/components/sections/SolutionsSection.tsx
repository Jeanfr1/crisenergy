"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Building2, Check, ArrowRight } from "lucide-react";

type SolutionType = "family" | "business";

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState<SolutionType>("family");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const familySolutions = [
    {
      title: "Conexão Green",
      description: "Conecte-se à energia solar sem a necessidade de investir em painéis solares próprios, economizando significativamente na sua conta de energia.",
      features: [
        "Energia injetada diretamente na rede da distribuidora",
        "Economia sem investimentos iniciais",
        "Monitoramento em tempo real do consumo",
        "Créditos de energia solar baseados no consumo anual"
      ],
      icon: "☀️"
    },
    {
      title: "Conexão Expansão",
      description: "Faça parte da rede de licenciados da iGreen Energy e receba bônus imediatos e recorrentes proporcionais à atividade e desempenho da sua rede.",
      features: [
        "Bônus por novas conexões diretas ou via equipe",
        "Aumento de ganhos conforme qualificações",
        "Royalties adicionais sobre conexões da equipe",
        "Valores crescentes conforme sua qualificação"
      ],
      icon: "🔄"
    },
    {
      title: "Conexão Telecom",
      description: "Soluções de telefonia móvel sustentáveis e inovadoras para clientes pessoa física e jurídica, com tarifas competitivas e práticas ecológicas.",
      features: [
        "Tarifas competitivas",
        "Planos adaptáveis",
        "Práticas sustentáveis",
        "Alinhamento com princípios de energia verde"
      ],
      icon: "📱"
    }
  ];

  const businessSolutions = [
    {
      title: "Conexão Green Empresarial",
      description: "Soluções de energia solar compartilhada para empresas que desejam reduzir custos operacionais e melhorar sua pegada ambiental.",
      features: [
        "Redução significativa nos custos de energia",
        "Sem necessidade de instalação de painéis",
        "Créditos de energia aplicados diretamente nas contas",
        "Monitoramento em tempo real do consumo"
      ],
      icon: "🏭"
    },
    {
      title: "Conexão Expansão Corporativa",
      description: "Programa de parceria para empresas que desejam expandir seus negócios através da rede de licenciados da iGreen Energy.",
      features: [
        "Bônus corporativos por novas conexões",
        "Programa de incentivos para equipes de vendas",
        "Suporte especializado para grandes contas",
        "Estratégias personalizadas de crescimento"
      ],
      icon: "📊"
    },
    {
      title: "Conexão Telecom Empresarial",
      description: "Soluções de telefonia móvel corporativa com práticas sustentáveis e tarifas competitivas para sua empresa.",
      features: [
        "Planos corporativos personalizados",
        "Gestão centralizada de linhas",
        "Integração com sistemas empresariais",
        "Suporte técnico dedicado"
      ],
      icon: "📱"
    }
  ];

  const activeSolutions = activeTab === "family" ? familySolutions : businessSolutions;

  return (
    <section id="solutions" className="py-20 relative overflow-hidden bg-white dark:bg-[var(--background-dark)]">
      {/* Grid background */}
      <div className="absolute inset-0 grid-background opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluções de <span className="neon-text">Energia Verde</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Oferecemos soluções personalizadas para famílias e empresas, ajudando a reduzir custos e impacto ambiental.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-gray-100 dark:bg-gray-800">
            <button
              onClick={() => setActiveTab("family")}
              className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === "family"
                  ? "bg-[var(--neon-green)] text-black shadow-lg"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <Home className="mr-2 h-4 w-4" />
              Para Famílias
            </button>
            <button
              onClick={() => setActiveTab("business")}
              className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === "business"
                  ? "bg-[var(--neon-green)] text-black shadow-lg"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <Building2 className="mr-2 h-4 w-4" />
              Para Empresas
            </button>
          </div>
        </div>

        {/* Solutions Grid */}
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activeSolutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {solution.description}
              </p>
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <Check className="h-5 w-5 text-[var(--neon-green)] mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center text-sm font-medium text-[var(--neon-green)] hover:underline"
              >
                Saiba mais
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="#simulator"
            className="neon-button px-8 py-3 rounded-full text-lg font-medium inline-flex items-center gap-2"
          >
            Simular Economia
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
