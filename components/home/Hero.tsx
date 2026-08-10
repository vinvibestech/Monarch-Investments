"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { slides } from "@/data/slides";

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[100svh] min-h-[700px] w-full overflow-hidden">
            {/* Background */}
            <Image
                src="/home/hero.png"
                alt="Hero"
                fill
                priority
                className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/15" />

            {/* Main Content */}
            <div className="relative z-20 flex h-full items-start lg:items-center pt-28 lg:pt-0">
                <div className="mx-auto w-full w-7xl px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
                    <h1 className="w-5xl text-3xl leading-tight font-bold text-white sm:text-4xl md:text-4xl lg:text-[56px] lg:leading-[1.05]">
                        Building Sustainable
                        <br />
                        Growth Through Strategic Investments
                    </h1>
                </div>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-8 left-0 z-30 w-full sm:bottom-8 lg:bottom-12">
                <div className="mx-auto flex w-full flex-col justify-end gap-6 px-6 pb-8 sm:px-8 md:px-12 lg:flex-row lg:items-end lg:justify-between lg:px-20 xl:px-24">
                    {/* Left */}
                    <div className="w-2xl">
                        <p
                            key={`desc-${current}`}
                            className="text-sm leading-6 text-white sm:text-base sm:leading-7 md:text-lg lg:text-[20px]"
                        >
                            {slides[current].description}
                        </p>

                        {/* Pagination */}
                        <div className="mt-8 flex items-center justify-start gap-5 lg:justify-end">
                            <span className="text-base text-white md:text-lg">
                                {String(current + 1).padStart(2, "0")}
                            </span>

                            <div className="flex gap-3">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrent(index)}
                                        className={`rounded-full transition-all duration-300 ${current === index
                                            ? "h-2 w-8 bg-white"
                                            : "h-2 w-2 bg-white/40"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-36 w-[220px] overflow-hidden rounded-2xl sm:h-44 sm:w-[280px] md:h-52 md:w-[340px] lg:h-[220px] lg:w-[380px]">
                        <Image
                            key={current}
                            src={slides[current].preview}
                            alt="Preview"
                            fill
                            className="object-cover transition-all duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}