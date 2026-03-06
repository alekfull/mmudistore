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
      image: "/images/products/shorts/IMG-20260219-WA0012.jpg",
      badge: "Mais Vendido",
      color: "from-cyan-500 to-blue-600",
      href: "#shorts"
    },
    {
      id: 2,
      name: "Pack Econômico 2",
      description: "4 Camisetas ou Regatas Dryfit",
      oldPrice: "120,00",
      newPrice: "100,00",
      image: "/images/products/dryfit/IMG-20260219-WA0112.jpg",
      badge: "Economia",
      color: "from-emerald-500 to-teal-600",
      href: "#dryfit"
    },
    {
      id: 3,
      name: "Kit Premium",
      description: "3 Camisetas ou Regatas Premium",
      oldPrice: "180,00",
      newPrice: "150,00",
      image: "/images/products/dryfitpremium/IMG-20260219-WA0162.jpg",
      badge: "Qualidade",
      color: "from-orange-500 to-red-600",
      href: "#dryfit-premium"
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
              className="group relative flex min-h-[450px] flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl sm:p-8 dark:border-slate-800 dark:bg-slate-950"
            >
              {/* Background Image with Hero Effect */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                <img
                  src={offer.image}
                  alt={offer.name}
                  className="h-full w-full scale-110 object-cover opacity-50 transition-transform duration-1000 group-hover:scale-125"
                />
              </div>

              {/* Content */}
              <div className="relative z-20 flex h-full flex-col">
                <span className="mb-4 self-start rounded-full border border-cyan-400/30 bg-cyan-500 px-3 py-1 text-[10px] font-black tracking-widest text-white shadow-lg shadow-cyan-500/20 uppercase">
                  {offer.badge}
                </span>

                <h3 className="mb-2 text-3xl leading-tight font-black text-white drop-shadow-md">
                  {offer.name}
                </h3>
                <p className="mb-8 font-medium text-slate-200 drop-shadow-sm">
                  {offer.description}
                </p>

                <div className="mt-auto flex flex-col">
                  <span className="text-sm font-bold text-cyan-400/80 line-through">
                    R$ {offer.oldPrice}
                  </span>
                  <span className="text-5xl font-black text-white drop-shadow-2xl">
                    R$ {offer.newPrice}
                  </span>
                </div>

                <a
                  href={offer.href}
                  className="mt-8 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-cyan-500 py-4 font-bold text-white shadow-xl shadow-cyan-500/30 transition-all hover:scale-[1.05] hover:bg-cyan-600 active:scale-95"
                >
                  Ver opções
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default SpecialOffers;
