import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-slate-900 pt-20 pb-32 sm:pb-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
        <img
          src="/images/products/dryfit/IMG-20260219-WA0110.jpg"
          alt="Hero Background"
          className="animate-pulse-slow h-full w-full scale-110 object-cover opacity-40"
        />
      </div>

      <div className="container-custom relative z-20">
        <div className="max-w-3xl">
          <span className="mb-6 inline-block rounded-lg bg-cyan-500 px-4 py-1.5 text-sm font-bold tracking-widest text-white uppercase shadow-lg shadow-cyan-500/20">
            Linha Premium 2026
          </span>
          <h1 className="mb-6 text-4xl leading-[1.1] font-black text-white sm:text-5xl md:text-6xl lg:text-8xl">
            Performance <br />
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              & Estilo
            </span>
            <br />
            Premium
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-2xl">
            A melhor seleção de Moda Esportiva Masculina em Uberlândia. Design
            global, tecnologia de ponta e conforto absoluto.
          </p>
          <div className="mb-16 flex flex-col gap-4 px-8 sm:mb-0 sm:flex-row sm:px-0">
            <a
              href="#dryfit"
              className="rounded-2xl bg-cyan-500 px-8 py-4 text-center text-lg font-bold text-white shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 hover:bg-cyan-600 sm:px-10 sm:py-5"
            >
              Ver Coleção
            </a>
            <a
              href="#ofertas"
              className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-bold text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 sm:px-10 sm:py-5"
            >
              Ofertas Especiais
            </a>
          </div>
        </div>
      </div>

      {/* Social proof or features floating */}
      <div className="animate-bounce-slow absolute right-10 bottom-10 hidden flex-col gap-6 xl:flex">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <span className="block text-3xl font-bold text-cyan-400">100%</span>
          <span className="text-sm text-slate-400">Tecnologia Dryfit</span>
        </div>
        <div className="ml-12 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <span className="block text-3xl font-bold text-emerald-400">New</span>
          <span className="text-sm text-slate-400">Coleção 2026</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
