"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";

export default function ScannerDemo() {
  const screens = [
    "https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-6.png&w=384&q=75",
    "https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-2.png&w=384&q=75",
    "https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-4.png&w=384&q=75",
    "https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-9.png&w=384&q=75",
  ];

  const features = [
    {
      title: "Fresh Farm Apples",
      price: "$4.99",
      description: "Crisp and sweet red apples picked fresh from local farms. Perfect for a healthy daily snack.",
      calories: "95 kcal",
    },
    {
      title: "Organic Avocados",
      price: "$6.50",
      description: "Creamy, perfectly ripe avocados ideal for making guacamole or spreading on your morning toast.",
      calories: "240 kcal",
    },
    {
      title: "Whole Grain Bread",
      price: "$3.49",
      description: "Freshly baked whole grain bread packed with fiber and nutrients for a healthy diet.",
      calories: "120 kcal",
    },
    {
      title: "Almond Milk",
      price: "$4.20",
      description: "Unsweetened almond milk. A delicious dairy-free alternative perfect for cereals and smoothies.",
      calories: "30 kcal",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            Explore our menu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600"
          >
            Swipe through the freshest ingredients.
          </motion.p>
        </div>

        {/* Centered Phone Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-[300px] md:w-[340px] z-10"
        >
          {/* Decorative Glow */}
          <div className="absolute -inset-10 bg-gradient-to-tr from-orange-400 via-red-400 to-pink-400 opacity-20 blur-3xl rounded-[100px] -z-10"></div>

          <div className="relative bg-white rounded-[45px] md:rounded-[50px] shadow-2xl p-3 border-4 border-gray-100">
            {/* Notch / Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 flex items-center justify-end pr-3">
              <div className="w-2.5 h-2.5 bg-gray-800 rounded-full"></div>
            </div>

            {/* Screen Content */}
            <div className="rounded-[35px] md:rounded-[40px] overflow-hidden relative w-full h-[600px] md:h-[680px] bg-gray-50 flex flex-col">

              {/* Top 40% - Image Carousel */}
              <div className="w-full h-[45%] pt-16 pb-4 bg-gradient-to-b from-gray-100 to-gray-50 flex items-center justify-center">
                <Swiper
                  modules={[Autoplay]}
                  slidesPerView={1.5}
                  centeredSlides={true}
                  spaceBetween={20}
                  speed={600}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  className="w-full h-[180px] md:h-[220px]"
                >
                  {screens.map((img, i) => (
                    <SwiperSlide key={i} className="flex items-center justify-center py-4">
                      {({ isActive }) => (
                        <div
                          className={`relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 ease-out shadow-lg ${isActive
                            ? 'scale-110 blur-0 opacity-100 z-20 shadow-xl border-2 border-white'
                            : 'scale-90 blur-[3px] opacity-40 z-10'
                            }`}
                        >
                          <img
                            src={img}
                            className="w-full h-full object-cover"
                            alt={`Item ${i + 1}`}
                          />
                        </div>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Bottom 55% - Text Description */}
              <div className="w-full h-[55%] bg-white rounded-t-[30px] shadow-[0_-15px_30px_-15px_rgba(0,0,0,0.1)] z-20 flex flex-col p-6 pt-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                        {features[activeIndex].title}
                      </h3>
                      <span className="text-lg font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                        {features[activeIndex].price}
                      </span>
                    </div>

                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                      {features[activeIndex].calories}
                    </span>

                    <p className="text-gray-600 text-sm leading-relaxed mb-auto">
                      {features[activeIndex].description}
                    </p>

                    <div className="mt-6 flex gap-3">
                      <button className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 font-bold hover:bg-gray-200 transition text-xl">
                        ♥
                      </button>
                      <button className="flex-1 rounded-xl bg-gray-900 text-white font-bold text-lg hover:bg-gray-800 shadow-xl shadow-gray-900/20 transition">
                        Add to Cart
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-1.5 mt-6 pb-2">
                  {features.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? "w-6 bg-gray-900" : "w-1.5 bg-gray-200"
                        }`}
                    />
                  ))}
                </div>

              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}