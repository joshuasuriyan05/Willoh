"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MobileCarousel() {

  const logos = [
    "/logos/uni1.jpg",
    "/logos/uni2.png",
    "/logos/uni3.png",
    "/logos/uni4.png",
    "/logos/uni5.png"
  ];

  return (

    <section className="py-16 bg-gray-100">

      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Our Partner Universities
      </h2>

      <div className="max-w-4xl mx-auto px-6">

        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            768: { slidesPerView: 4 }
          }}
        >

          {logos.map((logo, index) => (

            <SwiperSlide key={index}>

              <div className="bg-white rounded-lg p-6 shadow flex justify-center">

                <img
                  src={logo}
                  className="h-12 object-contain"
                />

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>

  );
}