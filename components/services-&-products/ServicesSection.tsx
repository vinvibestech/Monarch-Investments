"use client";
import { useState } from "react";
import Image from "next/image";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/service";

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-20">

        {/* Top */}
        <div className="grid lg:gap-10 xl:gap-50 lg:grid-cols-[530px_1fr]">
          <div>
            <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
              Our Services
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]">
              Comprehensive Business &
              <br />
              Investment Solutions
            </h2>
          </div>

          <div>
            <p className="max-w-[560px] text-base mt-5 leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
              Monarch Investments offers strategic services designed to support
              business growth, investment planning, and sustainable development
              through expert guidance and trusted partnerships.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mt-20 grid gap-14 lg:grid-cols-[430px_1fr] lg:gap-14">

          {/* Left Image - crossfade */}
          <div className="relative h-[520px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="sync">
              {services.map((service, index) =>
                index === active || (active === -1 && index === 0) ? (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>

          {/* Accordion */}
          <div>
            {services.map((service, index) => {
              const isOpen = active === index;

              return (
                <div key={service.title} className="border-b border-[#E5E5E5]">
                  <button
                    onClick={() => setActive(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between py-7 text-black"
                  >
                    <span className="text-[22px] text-black font-medium text-left">
                      {service.title}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="flex items-center justify-center"
                    >
                      {isOpen ? <X size={28} /> : <Plus size={28} />}
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.35, delay: 0.1 }}
                          className="pb-8"
                        >
                          <p className="max-w-[620px] text-[20px] leading-[2] text-[#1A1A1A]">
                            {service.description}
                          </p>

                          <div className="mt-10 flex flex-wrap items-end justify-between gap-10">
                            <div className="relative h-[130px] w-[210px] overflow-hidden rounded-xl">
                              <Image
                                src={service.image}
                                alt=""
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}