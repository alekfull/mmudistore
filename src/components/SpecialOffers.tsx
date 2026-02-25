import React from "react";
import { MdLocalOffer, MdShoppingBag } from "react-icons/md";

const SpecialOffers: React.FC = () => {
  const offers = [
    {
      id: 1,
      name: "Pack Econômico 1",
      description: "3 Bermudas Dryfit",
      oldPrice: "135,00",
      newPrice: "100,00",
      badge: "Mais Vendido",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: 2,
      name: "Pack Econômico 2",
      description: "4 Camisetas ou Regatas Dryfit",
      oldPrice: "120,00",
      newPrice: "100,00",
      badge: "Economia",
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: 3,
      name: "Kit Premium",
      description: "3 Camisetas ou Regatas Premium",
      oldPrice: "180,00",
      newPrice: "100,00",
      badge: "Qualidade",
      color: "from-orange-500 to-red-600",
    },
  ];


  return (
    <section
      id="ofertas"
      className="bg-slate-50 py-24 transition-colors dark:bg-slate-900"
    >
      <div className="container-custom">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-xl">
            <h2 className="mb-4 text-3xl font-black text-slate-900 sm:text-4xl md:text-6xl dark:text-white">
              Ofertas{" "}
              <span className="text-cyan-500 underline decoration-cyan-500/30 decoration-8 underline-offset-4">
                Especiais
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Aproveite nossos kits exclusivos e renove seu guarda-roupa fitness
              com o melhor custo-benefício.
            </p>
          </div>
          <div className="flex items-center gap-2 font-bold tracking-wider text-cyan-500 uppercase">
            <MdLocalOffer size={24} />
            <span>Ofertas por tempo limitado</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl sm:p-8 dark:border-slate-800 dark:bg-slate-950"
            >
              {/* Colored accent */}
              <div
                className={`absolute top-0 left-0 h-full w-2 bg-gradient-to-b ${offer.color}`}
              />

              <span className="mb-4 inline-block rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[10px] font-black tracking-widest text-slate-600 uppercase dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                {offer.badge}
              </span>

              <h3 className="mb-2 text-2xl leading-tight font-black text-slate-900 dark:text-white">
                {offer.name}
              </h3>
              <p className="mb-8 font-medium text-slate-500 dark:text-slate-400">
                {offer.description}
              </p>

              <div className="mb-8 flex flex-col">
                <span className="text-sm text-slate-400 line-through dark:text-slate-600">
                  R$ {offer.oldPrice}
                </span>
                <span className="text-4xl font-black text-slate-900 dark:text-white">
                  R$ {offer.newPrice}
                </span>
              </div>

              <a
                href="https://wa.me/5534999890980"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-slate-900 py-4 font-bold text-white transition-all group-hover:bg-cyan-500 group-hover:text-white hover:scale-[1.02] dark:bg-white dark:text-black"
              >
                <MdShoppingBag size={20} />
                Quero este Kit
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
