import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Product {
  id: number;
  image: string;
}

interface ProductSliderProps {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  products: Product[];
  price?: string;
  kitPrice?: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  id,
  title,
  subtitle,
  badge,
  products,
  price,
  kitPrice,
}) => {
  return (
    <section
      id={id}
      className="bg-white py-20 transition-colors dark:bg-slate-950"
    >
      <div className="container-custom">
        <div className="mb-12 flex flex-col items-center text-center">
          {badge && (
            <span className="mb-4 inline-block rounded-full border border-cyan-200 bg-cyan-100 px-4 py-1.5 text-xs font-bold tracking-widest text-cyan-600 uppercase dark:border-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400">
              {badge}
            </span>
          )}
          <h2 className="mb-4 text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              {subtitle}
            </p>
          )}
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 4, centeredSlides: false },
          }}
          className="pb-12"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pricing Area */}
        {(price || kitPrice) && (
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {price && (
              <div className="flex flex-col items-center rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center sm:p-8 dark:border-slate-800 dark:bg-slate-900/50">
                <span className="mb-1 font-medium text-slate-500 dark:text-slate-400">
                  Unidade
                </span>
                <span className="text-3xl font-bold text-slate-900 dark:text-white">
                  R$ {price}
                </span>
              </div>
            )}
            {kitPrice && (
              <div className="relative flex flex-col items-center overflow-hidden rounded-3xl border-2 border-cyan-500/30 bg-cyan-50 p-6 text-center sm:p-8 dark:bg-cyan-900/20">
                <span className="absolute top-0 right-0 rounded-bl-xl bg-cyan-500 px-3 py-1 text-[10px] font-bold text-white uppercase">
                  Melhor Oferta
                </span>
                <span className="mb-1 font-medium text-cyan-700 dark:text-cyan-300">
                  Kit com 3 unidades
                </span>
                <span className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                  R$ {kitPrice}
                </span>
                <span className="mt-1 text-sm text-cyan-500/70">
                  (R$ {(parseFloat(kitPrice) / 3).toFixed(2)} cada)
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSlider;
