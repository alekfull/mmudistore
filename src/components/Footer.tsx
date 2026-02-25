import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-100 pt-20 pb-10 transition-colors dark:border-slate-800 dark:bg-slate-950">
      <div className="container-custom">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm dark:bg-slate-800">
                <img
                  src="/images/logo/IMG-20260219-WA0259.jpg"
                  alt="MM Udistore Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-2xl font-black text-slate-900 dark:text-white">
                MM Udistore
              </span>
            </div>
            <p className="leading-relaxed text-slate-600 dark:text-slate-400">
              Sua loja de referência em moda esportiva premium. Tecnologia,
              estilo e conforto para o seu melhor desempenho.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mmudistore?igsh=MTM5MGd1MDZiMnpwZg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-200 bg-white p-3 text-slate-600 transition-all hover:border-rose-500 hover:text-rose-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/1HaaLbgr6K/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-200 bg-white p-3 text-slate-600 transition-all hover:border-blue-600 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://wa.me/5534999890980"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-200 bg-white p-3 text-slate-600 transition-all hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-slate-900 dark:text-white">
              Categorias
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#dryfit"
                  className="text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400"
                >
                  Camisetas Dryfit
                </a>
              </li>
              <li>
                <a
                  href="#regatas"
                  className="flex items-center gap-2 text-slate-400 transition-colors hover:text-cyan-400"
                >
                  Regatas Dryfit
                </a>
              </li>
              <li>
                <a
                  href="#shorts"
                  className="text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400"
                >
                  Bermudas / Shorts
                </a>
              </li>
              <li>
                <a
                  href="#ofertas"
                  className="text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400"
                >
                  Ofertas Especiais
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-slate-900 dark:text-white">
              Suporte
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="text-slate-600 dark:text-slate-400">
                Como Comprar
              </li>
              <li className="text-slate-600 dark:text-slate-400">
                Prazos de Entrega
              </li>
              <li className="text-slate-600 dark:text-slate-400">
                Trocas e Devoluções
              </li>
              <li className="text-slate-600 dark:text-slate-400">
                Políticas de Privacidade
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-slate-900 dark:text-white">
              Localização
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-cyan-500" />
                <a
                  href="https://www.google.com/maps/search/mudistore/@-18.9062212,-48.2885524,13.25z?entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400"
                >
                  Rua Universal 81, bairro Jardim Brasília em Uberlândia
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="shrink-0 text-cyan-500" />
                <a
                  href="tel:+5534999890980"
                  className="text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400"
                >
                  +55 34 99989-0980
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="https://wa.me/5534999890980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-emerald-500"
                >
                  <FaWhatsapp className="shrink-0 text-emerald-500" />
                  <span className="text-slate-600 hover:text-emerald-500 dark:text-slate-400">
                    Atendimento via WhatsApp
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 text-center dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © 2026 MM Udistore. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
