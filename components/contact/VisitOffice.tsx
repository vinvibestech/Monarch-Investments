"use client";

export default function VisitOffice() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 md:px-12 lg:px-20">

        {/* Top Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">

          {/* Left */}
          <div>
            <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
              Find Us
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]">
              Visit Our Office
            </h2>
          </div>

          {/* Right */}
          <div className="lg:pt-2">
            <p className="max-w-[560px] text-base mt-5 leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
              We welcome visitors by appointment. Contact us to schedule a
              meeting with our team and discuss your investment or business
              requirements.
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 overflow-hidden rounded-[12px] sm:mt-14 lg:mt-16">
          <div className="relative h-[320px] w-full sm:h-[400px] md:h-[480px] lg:h-[550px]">

            <iframe
              title="Monarch Investments Office Location"
              src="https://www.google.com/maps?q=Dubai,United%20Arab%20Emirates&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>
        </div>

      </div>
    </section>
  );
}