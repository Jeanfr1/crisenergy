"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    customerType: "residential",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send the form data to your backend
      // For demo purposes, we'll just simulate a successful submission
      setFormStatus("success");

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
        setFormData({
          name: "",
          email: "",
          phone: "",
          customerType: "residential",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-white dark:bg-[var(--background-dark)]">
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
            Entre em <span className="neon-text">Contato</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Estamos prontos para ajudar você a transformar sua energia.
            Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glassmorphism rounded-xl p-8 relative overflow-hidden"
          >
            {/* Form status messages */}
            {formStatus === "success" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-10">
                <div className="bg-white dark:bg-[var(--background-dark)] p-6 rounded-lg shadow-lg text-center max-w-md">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mensagem Enviada!</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Obrigado pelo seu contato. Nossa equipe retornará em breve.
                  </p>
                </div>
              </div>
            )}

            {formStatus === "error" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-10">
                <div className="bg-white dark:bg-[var(--background-dark)] p-6 rounded-lg shadow-lg text-center max-w-md">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Erro ao Enviar</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
                  >
                    Tentar Novamente
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--neon-green)] focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--neon-green)] focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--neon-green)] focus:border-transparent"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                {/* Customer Type */}
                <div>
                  <label htmlFor="customerType" className="block text-sm font-medium mb-2">
                    Tipo de Cliente *
                  </label>
                  <select
                    id="customerType"
                    name="customerType"
                    value={formData.customerType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--neon-green)] focus:border-transparent"
                  >
                    <option value="residential">Residencial</option>
                    <option value="commercial">Empresarial</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-white/10 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--neon-green)] focus:border-transparent"
                  placeholder="Descreva sua necessidade ou dúvida..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="neon-button w-full py-3 rounded-lg text-center font-medium flex items-center justify-center gap-2"
              >
                {formStatus === "submitting" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 neon-text">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[var(--neon-green-glow)] bg-opacity-20 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Endereço</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      R. Tupaciguara, 274 - Nossa Sra. Aparecida<br />
                      Uberlândia - MG, 38400-618
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[var(--neon-green-glow)] bg-opacity-20 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Telefone</h4>
                    <p className="text-gray-600 dark:text-gray-300">(34) 99828-8579</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[var(--neon-green-glow)] bg-opacity-20 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">E-mail</h4>
                    <p className="text-gray-600 dark:text-gray-300">crisrenovaveis@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[var(--neon-green-glow)] bg-opacity-20 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Horário de Atendimento</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Segunda a Sexta: 9h às 18h<br />
                      Sábado: 9h às 13h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Preview */}
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Perguntas Frequentes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[var(--neon-green)]">Preciso instalar painéis solares na minha casa?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Não, esse é justamente o diferencial da energia solar compartilhada. Você não precisa instalar painéis solares em sua residência ou empresa.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--neon-green)]">Como funcionam os créditos de energia solar?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Os créditos são calculados com base no seu consumo anual e aplicados diretamente na sua conta de luz, reduzindo drasticamente o valor da sua fatura.
                  </p>
                </div>
                <a href="#faq" className="inline-block text-sm font-medium text-[var(--neon-green)] hover:underline mt-2">
                  Ver todas as perguntas frequentes →
                </a>
              </div>
            </div>

            {/* Social Proof */}
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">O que dizem nossos clientes</h3>
              <div className="italic text-gray-600 dark:text-gray-300 text-sm">
                &ldquo;A CRIS ENERGY transformou completamente nossa relação com energia. Reduzimos nossa conta em mais de 95% com a energia solar compartilhada e ainda contribuímos para um planeta mais sustentável.&rdquo;
              </div>
              <div className="mt-2 text-right text-sm font-semibold">
                — Maria Silva, Cliente Residencial
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
