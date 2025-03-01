"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, Home, Building2, ArrowRight } from "lucide-react";

type CustomerType = "residential" | "commercial";

export default function SimulatorSection() {
  const [customerType, setCustomerType] = useState<CustomerType>("residential");
  const [consumption, setConsumption] = useState(300); // kWh per month
  const [currentBill, setCurrentBill] = useState(200); // R$ per month
  const [area, setArea] = useState(50); // m²
  const [savings, setSavings] = useState({
    monthly: 0,
    yearly: 0,
    twentyYears: 0,
  });
  const [co2Reduction, setCo2Reduction] = useState(0);
  const [treesEquivalent, setTreesEquivalent] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  // Calculate savings based on inputs
  useEffect(() => {
    setIsCalculating(true);

    // Simulate calculation delay for effect
    const timer = setTimeout(() => {
      // Calculation model based on iGreen Energy data
      const monthlyReduction =
        customerType === "residential"
          ? currentBill * 0.95 // 95% reduction for residential with shared solar energy
          : currentBill * 0.85; // 85% reduction for commercial with shared solar energy

      const monthlySavings = monthlyReduction;
      const yearlySavings = monthlySavings * 12;
      const twentyYearSavings = yearlySavings * 20;

      // Environmental impact calculations
      const co2PerKwh = 0.5; // kg of CO2 per kWh (simplified)
      const co2Saved = consumption * co2PerKwh * 12; // yearly CO2 savings in kg
      const treesPerTonCO2 = 45; // trees needed to absorb 1 ton of CO2 per year
      const trees = (co2Saved / 1000) * treesPerTonCO2;

      setSavings({
        monthly: monthlySavings,
        yearly: yearlySavings,
        twentyYears: twentyYearSavings,
      });

      setCo2Reduction(co2Saved);
      setTreesEquivalent(Math.round(trees));

      setIsCalculating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [customerType, consumption, currentBill, area]);

  return (
    <section
      id="simulator"
      className="py-20 relative overflow-hidden bg-white dark:bg-[var(--background-dark)]"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-background opacity-30"></div>

      {/* Scanlines effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full bg-[var(--neon-green-glow)] opacity-10"
            style={{
              top: `${i * 10}%`,
              animation: `scanline ${3 + i * 0.5}s linear infinite`,
              animationDelay: `${i * 0.2}s`,
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simulador de <span className="neon-text">Economia</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calcule quanto você pode economizar com energia solar compartilhada.
            Sem investimento em painéis próprios e com economia significativa na sua conta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glassmorphism rounded-xl p-8"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Zap className="mr-2 text-[var(--neon-green)]" />
              Seus Dados
            </h3>

            {/* Customer Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Tipo de Cliente
              </label>
              <div className="flex rounded-lg overflow-hidden">
                <button
                  onClick={() => setCustomerType("residential")}
                  className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 transition-colors ${
                    customerType === "residential"
                      ? "bg-[var(--neon-green)] text-black"
                      : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  <Home className="h-4 w-4" />
                  Residencial
                </button>
                <button
                  onClick={() => setCustomerType("commercial")}
                  className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 transition-colors ${
                    customerType === "commercial"
                      ? "bg-[var(--neon-green)] text-black"
                      : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  <Building2 className="h-4 w-4" />
                  Empresarial
                </button>
              </div>
            </div>

            {/* Consumption Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium">
                  Consumo Mensal (kWh)
                </label>
                <span className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  {consumption} kWh
                </span>
              </div>
              <input
                type="range"
                min={customerType === "residential" ? 100 : 500}
                max={customerType === "residential" ? 1000 : 10000}
                step={customerType === "residential" ? 50 : 500}
                value={consumption}
                onChange={(e) => setConsumption(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[var(--neon-green)]"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{customerType === "residential" ? "100" : "500"}</span>
                <span>{customerType === "residential" ? "1000" : "10000"}</span>
              </div>
            </div>

            {/* Current Bill Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium">
                  Valor Atual da Conta (R$)
                </label>
                <span className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  R$ {currentBill}
                </span>
              </div>
              <input
                type="range"
                min={customerType === "residential" ? 50 : 500}
                max={customerType === "residential" ? 1000 : 10000}
                step={customerType === "residential" ? 10 : 100}
                value={currentBill}
                onChange={(e) => setCurrentBill(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[var(--neon-green)]"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>R$ {customerType === "residential" ? "50" : "500"}</span>
                <span>
                  R$ {customerType === "residential" ? "1000" : "10000"}
                </span>
              </div>
            </div>

            {/* Area Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium">
                  Área Disponível (m²)
                </label>
                <span className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  {area} m²
                </span>
              </div>
              <input
                type="range"
                min={customerType === "residential" ? 10 : 100}
                max={customerType === "residential" ? 200 : 2000}
                step={customerType === "residential" ? 5 : 50}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[var(--neon-green)]"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{customerType === "residential" ? "10" : "100"} m²</span>
                <span>
                  {customerType === "residential" ? "200" : "2000"} m²
                </span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="neon-button w-full py-3 rounded-lg text-center font-medium flex items-center justify-center gap-2"
              >
                Solicitar Proposta Detalhada
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Results Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glassmorphism rounded-xl p-8 relative overflow-hidden">
              <h3 className="text-xl font-bold mb-6">
                Resultados da Simulação
              </h3>

              {/* Loading indicator */}
              {isCalculating && (
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-10">
                  <div className="w-16 h-16 border-4 border-[var(--neon-green-glow)] border-t-[var(--neon-green)] rounded-full animate-spin"></div>
                </div>
              )}

              {/* Financial Savings */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 neon-text">
                  Economia Financeira
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-black/10 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Mensal</p>
                    <p className="text-2xl font-bold">
                      R$ {savings.monthly.toFixed(2)}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-black/10 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Anual</p>
                    <p className="text-2xl font-bold">
                      R$ {savings.yearly.toFixed(2)}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-black/10 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Em 20 anos</p>
                    <p className="text-2xl font-bold">
                      R$ {savings.twentyYears.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Environmental Impact */}
              <div>
                <h4 className="text-lg font-semibold mb-4 neon-text">
                  Impacto Ambiental Anual
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center p-4 bg-black/10 rounded-lg">
                    <div className="w-12 h-12 flex items-center justify-center bg-[var(--neon-green-glow)] bg-opacity-20 rounded-full mr-4">
                      <span className="text-xl">🌍</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Redução de CO₂</p>
                      <p className="text-xl font-bold">
                        {co2Reduction.toFixed(1)} kg
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-black/10 rounded-lg">
                    <div className="w-12 h-12 flex items-center justify-center bg-[var(--neon-green-glow)] bg-opacity-20 rounded-full mr-4">
                      <span className="text-xl">🌳</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Equivalente em Árvores
                      </p>
                      <p className="text-xl font-bold">
                        {treesEquivalent} árvores
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual chart or graph could be added here */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[var(--neon-green)] rounded-full transition-all duration-1000"
                    style={{
                      width: `${customerType === "residential" ? 95 : 85}%`,
                      boxShadow: "0 0 10px var(--neon-green-glow)",
                    }}
                  ></div>
                </div>
                <p className="text-center mt-2 text-sm">
                  Economia estimada de{" "}
                  {customerType === "residential" ? "95%" : "85%"} na sua conta
                  de energia
                </p>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              * Esta é uma simulação aproximada. Para um cálculo preciso,
              solicite uma proposta detalhada.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
