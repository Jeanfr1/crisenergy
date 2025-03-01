"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category: "general" | "technical" | "financial";
}

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const faqItems: FaqItem[] = [
    {
      question: "Como funciona a energia solar compartilhada?",
      answer: "A CRIS ENERGY instala usinas solares em áreas estratégicas que captam a luz solar e transformam em eletricidade. Esta energia é injetada na rede da distribuidora e distribuída para os clientes. Mesmo sem ter painéis solares em sua residência, você recebe créditos de energia solar que são aplicados diretamente na sua conta de luz, resultando em economia significativa.",
      category: "general",
    },
    {
      question: "Preciso instalar painéis solares na minha casa?",
      answer: "Não, esse é justamente o diferencial da energia solar compartilhada. Você não precisa instalar painéis solares em sua residência ou empresa. A CRIS ENERGY já possui mais de 100 usinas solares em operação que geram energia limpa, e você recebe os benefícios através de créditos aplicados diretamente na sua conta de energia.",
      category: "technical",
    },
    {
      question: "Qual é a economia média na conta de energia?",
      answer: "Com o sistema de energia solar compartilhada, nossos clientes residenciais economizam em média 95% na conta de energia, enquanto clientes empresariais veem reduções de aproximadamente 85% em seus custos energéticos. A economia exata depende do seu consumo e da tarifa da sua distribuidora local.",
      category: "financial",
    },
    {
      question: "Como funcionam os créditos de energia solar?",
      answer: "Os créditos de energia solar são calculados com base no seu consumo anual de eletricidade. A energia gerada pelas usinas solares da CRIS ENERGY é convertida em créditos que são aplicados diretamente na sua conta de luz pela distribuidora. Esses créditos reduzem drasticamente o valor da sua fatura mensal.",
      category: "technical",
    },
    {
      question: "O que é o módulo Conexão Green?",
      answer: "O Conexão Green é o módulo que permite que você se conecte à energia solar sem a necessidade de investir em painéis solares próprios. A CRIS ENERGY injeta a energia gerada em suas usinas na rede da distribuidora, que é então distribuída para sua casa ou empresa, proporcionando economia sem investimentos iniciais.",
      category: "general",
    },
    {
      question: "Como funciona o módulo Conexão Expansão?",
      answer: "O Conexão Expansão é um programa de afiliação onde você pode conectar novos licenciados diretamente ou por meio de sua equipe, recebendo bônus imediatos e recorrentes proporcionais à atividade e desempenho da sua rede. À medida que avança nas qualificações, é possível aumentar os ganhos por meio de royalties adicionais sobre as conexões realizadas pela equipe, com valores crescentes conforme sua qualificação.",
      category: "financial",
    },
    {
      question: "O que é o módulo Conexão Telecom?",
      answer: "O Conexão Telecom é uma iniciativa que oferece soluções de telefonia móvel sustentáveis e inovadoras tanto para clientes pessoa física quanto jurídica. A operadora adota práticas ecológicas que contribuem para a preservação do meio ambiente, alinhando-se aos princípios da energia verde, com tarifas competitivas e planos adaptáveis.",
      category: "general",
    },
    {
      question: "Como posso monitorar meu consumo de energia?",
      answer: "A CRIS ENERGY oferece um sistema que permite o monitoramento em tempo real do seu consumo de energia solar. Através deste sistema, você tem uma visão clara de quanto está economizando e pode fazer ajustes no uso de eletricidade para otimizar suas economias.",
      category: "technical",
    },
    {
      question: "Qual é o investimento necessário para começar?",
      answer: "Uma das grandes vantagens da energia solar compartilhada é que você não precisa fazer um investimento inicial em equipamentos. Você simplesmente paga um valor significativamente mais baixo pela eletricidade renovável gerada pelas usinas da CRIS ENERGY, resultando em economia imediata na sua conta de luz.",
      category: "financial",
    },
  ];

  const filteredFaqs = activeCategory === "all"
    ? faqItems
    : faqItems.filter(item => item.category === activeCategory);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden bg-white dark:bg-[var(--background-dark)]">
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
            Perguntas <span className="neon-text">Frequentes</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre energia verde e nossos serviços.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-[var(--neon-green)] text-black"
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => setActiveCategory("general")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "general"
                ? "bg-[var(--neon-green)] text-black"
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Gerais
          </button>
          <button
            onClick={() => setActiveCategory("technical")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "technical"
                ? "bg-[var(--neon-green)] text-black"
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Técnicas
          </button>
          <button
            onClick={() => setActiveCategory("financial")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "financial"
                ? "bg-[var(--neon-green)] text-black"
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Financeiras
          </button>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left p-4 rounded-lg flex justify-between items-center transition-all duration-300 ${
                  activeIndex === index
                    ? "glassmorphism neon-border"
                    : "bg-white/5 hover:bg-white/10 dark:bg-black/5 dark:hover:bg-black/10"
                }`}
              >
                <span className="font-medium text-lg pr-8">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[var(--neon-green)]" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <div className="p-4 bg-white/5 dark:bg-black/5 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold mb-4">Ainda tem dúvidas?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Nossa equipe está pronta para ajudar com qualquer pergunta adicional que você possa ter.
          </p>
          <a
            href="https://wa.me/5534998288579"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button px-8 py-3 rounded-full text-lg font-medium inline-flex items-center gap-2"
          >
            Fale Conosco via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
