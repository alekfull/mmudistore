import { FaWhatsapp } from "react-icons/fa";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductSlider from "./components/ProductSlider";
import SpecialOffers from "./components/SpecialOffers";
import {
  dryfitProducts,
  dryfitPremiumProducts,
  regatasProducts,
  regatasPremiumProducts,
  shortsProducts,
  shortsDuploProducts,
  shortsImportadoProducts,
  shortsPremiumProducts,
  shortsTactelProducts,
  dryfitTermicaProducts,
} from "./data";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white transition-colors dark:bg-slate-950">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Special Offers Section - Top Priority */}
        <SpecialOffers />

        {/* Benefits Strip (Implicit in Technology de Ponta screenshot) */}
        <section className="overflow-hidden bg-slate-100 py-12 dark:bg-slate-900">
          <div className="container-custom">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Malha Fria / Dryfit",
                  desc: "Tecnologia que mantém você seco e confortável.",
                  icon: "❄️",
                },
                {
                  title: "Secagem Rápida",
                  desc: "Tecidos que secam em minutos após o exercício.",
                  icon: "⚡",
                },
                {
                  title: "Conforto Térmico",
                  desc: "Regulação de temperatura para máximo desempenho.",
                  icon: "🌡️",
                },
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="flex cursor-pointer items-center gap-4 rounded-2xl border-2 border-transparent bg-white p-6 shadow-sm transition-all duration-300 hover:border-cyan-500 hover:shadow-lg dark:bg-slate-950 dark:hover:border-cyan-500"
                >
                  <span className="text-4xl">{benefit.icon}</span>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Camisetas Sections */}
        <ProductSlider
          id="dryfit"
          title="Camisetas Dryfit"
          subtitle="Alta performance com tecido premium, acabamento superior e design exclusivo."
          badge="Linha Standard"
          products={dryfitProducts}
          price="30,00"
          kitPrice="100,00"
          kitItems={4}
        />

        <ProductSlider
          id="dryfit-premium"
          title="Camisetas Dryfit Premium"
          subtitle="Qualidade excepcional com tecnologia de ponta para máximo desempenho."
          badge="Linha Premium"
          products={dryfitPremiumProducts}
          price="60,00"
          kitPrice="150,00"
          kitItems={3}
        />

        <ProductSlider
          id="dryfit-termica"
          title="Camisetas Dryfit Térmicas"
          subtitle="Conforto térmico absoluto e tecnologia para regulação de temperatura."
          badge="Linha Térmica"
          products={dryfitTermicaProducts}
          price="60,00"
          kitPrice="150,00"
          kitItems={3}
        />

        {/* Regatas Sections */}
        <ProductSlider
          id="regatas"
          title="Regatas Dryfit"
          subtitle="Ideais para treinos intensos, oferecendo máxima liberdade de movimento."
          badge="Linha Standard"
          products={regatasProducts}
          price="30,00"
          kitPrice="100,00"
          kitItems={4}
        />

        <ProductSlider
          id="regatas-premium"
          title="Regatas Dryfit Premium"
          subtitle="Acabamento superior e compressão ideal para o seu treino."
          badge="Linha Premium"
          products={regatasPremiumProducts}
          price="60,00"
          kitPrice="150,00"
          kitItems={3}
        />

        {/* Shorts Sections */}
        <ProductSlider
          id="shorts"
          title="Bermudas & Shorts"
          subtitle="Bermudas Dry-Fit com tecido respirável e ajuste perfeito."
          badge="Destaque"
          products={shortsProducts}
          price="45,00"
          kitPrice="100,00"
          kitItems={3}
        />

        <ProductSlider
          id="shorts-duplo"
          title="Shorts Duplo"
          subtitle="Funcionalidade e conforto com camada dupla para maior suporte."
          badge="Performance"
          products={shortsDuploProducts}
          price="70,00"
          kitPrice="120,00"
          kitItems={2}
        />

        <ProductSlider
          id="shorts-importado"
          title="Shorts Importado"
          subtitle="Qualidade internacional com design exclusivo e durabilidade."
          badge="Importado"
          products={shortsImportadoProducts}
          price="80,00"
          kitPrice=""
        />

        <ProductSlider
          id="shorts-premium"
          title="Shorts Premium"
          subtitle="O ápice do conforto e estilo para suas atividades físicas."
          badge="Linha Premium"
          products={shortsPremiumProducts}
          price="60,00"
          kitPrice="165,00"
          kitItems={3}
        />

        <ProductSlider
          id="shorts-tactel"
          title="Shorts Tactel"
          subtitle="Tecido leve e secagem ultra-rápida, perfeito para qualquer modalidade."
          badge="Frescão"
          products={shortsTactelProducts}
          price="45,00"
          kitPrice="120,00"
          kitItems={3}
        />



        {/* Benefits Strip (Implicit in Technology de Ponta screenshot) */}
      </main>

      <Footer />

      {/* Floating Contact Button */}
      <a
        href="https://wa.me/5534999890980"
        target="_blank"
        rel="noopener noreferrer"
        className="group animate-bounce-slow fixed right-4 bottom-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/40 transition-all hover:scale-110 hover:bg-emerald-600 sm:right-8 sm:bottom-8 sm:h-16 sm:w-16"
        id="contato"
      >
        <FaWhatsapp size={28} className="sm:size-8" />
        <span className="pointer-events-none absolute right-full mr-4 rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100">
          Fale Conosco agora!
        </span>
      </a>
    </div>
  );
}

export default App;
