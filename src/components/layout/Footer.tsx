import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--background-dark)] relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-background opacity-30"></div>

      {/* Glowing line at top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--neon-green)] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 neon-text">CRIS ENERGY</h3>
            <p className="mb-4 text-sm text-gray-300">
              Democratizando o acesso à energia limpa e sustentável através de soluções inovadoras de energia solar compartilhada.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/igreen.energy.facebook#" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--neon-green)] transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/crisrenovaveis/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--neon-green)] transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="mailto:crisrenovaveis@gmail.com" className="hover:text-[var(--neon-green)] transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#hero" className="hover:text-[var(--neon-green)] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-[var(--neon-green)] transition-colors">
                  Soluções
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="hover:text-[var(--neon-green)] transition-colors">
                  Benefícios
                </Link>
              </li>
              <li>
                <Link href="#simulator" className="hover:text-[var(--neon-green)] transition-colors">
                  Simulador
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[var(--neon-green)] transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-[var(--neon-green)]" />
                <span>R. Tupaciguara, 274 - Nossa Sra. Aparecida<br />Uberlândia - MG, 38400-618</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-[var(--neon-green)]" />
                <span>(34) 99828-8579</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-[var(--neon-green)]" />
                <span>crisrenovaveis@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4 text-sm text-gray-300">
              Receba novidades e dicas sobre energia sustentável.
            </p>
            <form className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--neon-green)] focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 neon-button rounded-md"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} CRIS ENERGY. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-[var(--neon-green)] transition-colors">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[var(--neon-green)] transition-colors">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[var(--neon-green)] transition-colors">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Animated wave effect at bottom */}
      <div className="h-12 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            className="w-full h-12"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              className="fill-[var(--neon-green-dark)] opacity-25"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              className="fill-[var(--neon-green-dark)] opacity-50"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-[var(--neon-green-dark)] opacity-75"
            ></path>
          </svg>
        </div>
      </div>
    </footer>
  );
}
