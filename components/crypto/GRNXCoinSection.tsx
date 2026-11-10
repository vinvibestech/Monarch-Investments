
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GRNXCoinSection() {
  return (
    <main className="relative bg-[#080909] text-white overflow-hidden  flex flex-col justify-center">

{/* Background Image */}
<div className="absolute inset-0 flex items-center justify-center">
  <Image
    src="/Investment/coins.png"
    alt="GRNX Coin"
    fill
    priority
    className="object-contain scale-[0.85] md:scale-[0.75]"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/55" />

  {/* Bottom Gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#080909] via-black/20 to-black/30" />
</div>

      {/* Content */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-30">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center"
        >

          {/* Heading */}
     

          <h1 className="font-main text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight">
            GRNX COIN
          </h1>

          <h2 className="text-xl md:text-3xl mt-5 ">
            Real Value. A Brighter Tomorrow.
          </h2>

          {/* Description */}
          <p className="mt-8 text-sm md:text-base leading-8 text-white/80">
            GRNX Coin is an upcoming cryptocurrency initiative envisioned
            under Monarch Global Investments, built around the philosophy
            of People, Planet and Prosperity.
          </p>

          <p className="mt-5 text-sm md:text-base leading-8 text-white/70">
            With a vision to connect digital innovation with meaningful
            opportunities across Education, Agriculture, Energy and
            Tourism, GRNX Coin aims to explore a future where technology
            and sustainable development move forward together.
          </p>

          {/* Coming Soon Badge */}
          <div className="mt-10">
            <span className="inline-flex items-center gap-3 bg-black/30 backdrop-blur-md px-8 py-3 rounded-full text-xs md:text-sm tracking-[0.3em] text-[#C99B45]">
              
              COMING SOON
            </span>
          </div>

          {/* Footer Content */}
          <p className="mt-9 text-sm leading-7 text-white/60">
            More details, ecosystem developments and official announcements
            will be revealed soon.
          </p>

          <p className="mt-3 text-sm text-white/80">
            Stay connected with{" "}
            <span className="text-[#C99B45]">
              Monarch Global Investments
            </span>{" "}
            for updates on GRNX Coin.
          </p>

        </motion.div>
      </section>

      {/* Bottom Branding */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 py-5 px-6 text-center bg-black/20 backdrop-blur-sm">
        <p className="text-[10px] md:text-xs tracking-[0.3em] text-white/50">
          © {new Date().getFullYear()} MONARCH GLOBAL INVESTMENTS
        </p>
      </footer>

    </main>
  );
}
