"use client";

interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
  className?: string;
  titleWidth?: string;
  descriptionWidth?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  className = "",
  titleWidth = "max-w-[720px]",
  descriptionWidth = "max-w-[1280px]",
}: SectionHeaderProps) {
  return (
    <section id="newssection" className={`${className} bg-white py-14 sm:py-16 lg:py-20 mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-26` }>
      <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
        {label}
      </span>

      <h2
        className={`mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15] ${titleWidth}`}
      >
        {title}
      </h2>

      <div className={`mt-5 lg:mt-5 ${descriptionWidth}`}>
        <p className="text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
          {description}
        </p>
      </div>
    </section>
  );
}