import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

type Slide = {
  image: string;
  title: string;
  description: string;
};

type ProjectGalleryProps = {
  slides: Slide[];
};

export default function ProjectGallery({ slides }: ProjectGalleryProps) {
  return (
    <section className="mt-10 sm:mt-16">
      <div className="relative">
        <button
          className="
            gallery-prev
            absolute
            left-4
            top-1/2
            z-20
            -translate-y-1/2
            rounded-full
            bg-white/95
            p-3
            shadow-lg
            backdrop-blur-sm
            transition
            hover:scale-105
          "
        >
          <ChevronLeft size={20} className="text-[#111A5B]" />
        </button>

        <button
          className="
            gallery-next
            absolute
            right-4
            top-1/2
            z-20
            -translate-y-1/2
            rounded-full
            bg-white/95
            p-3
            shadow-lg
            backdrop-blur-sm
            transition
            hover:scale-105
          "
        >
          <ChevronRight size={20} className="text-[#111A5B]" />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".gallery-prev",
            nextEl: ".gallery-next",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={20}
          slidesPerView={1}
          className="overflow-hidden rounded-[32px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden rounded-[32px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="
                  h-[450px]
                  w-full
                  object-cover
                
                  sm:h-[500px]
                
                  lg:h-[550px]
                
                  xl:h-[650px]
                "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <div className="max-w-lg">
                    <h3 className="text-2xl font-bold text-white sm:text-3xl">
                      {slide.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
