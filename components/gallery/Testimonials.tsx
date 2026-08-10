"use client";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      '"Monarch Investments has been a trusted partner throughout our growth journey. Their strategic insights and professional approach have helped us achieve long-term success."',
    name: "Sarah Johnson",
    role: "Business Partner",
  },
  {
    id: 2,
    quote:
      '"The team\'s commitment to transparency and sustainable investments gave us the confidence to build a lasting partnership with Monarch Investments."',
    name: "Ahmed Al Mansoori",
    role: "Investor",
  },
  {
    id: 3,
    quote:
      '"Their expertise, reliability, and innovative thinking made every stage of our collaboration smooth and successful. We highly recommend Monarch Investments."',
    name: "Priya Nair",
    role: "Corporate Client",
  },
  {
    id: 4,
    quote:
      '"Monarch Investments delivers trusted expertise, transparency, and sustainable solutions for long-term business growth."',
    name: "Michael Anderson",
    role: "Strategic Business Partner",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white pt-1 pb-10 sm:py-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 md:px-12 lg:px-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">

          {/* Left Content */}
          <div className="lg:pt-1">
            <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
              Testimonials
            </span>

            <h2 className="mt-5 max-w-[620px] text-4xl font-semibold leading-[1.15] text-black sm:text-5xl md:text-[52px] lg:text-[41px] xl:text-[48px]">
              What Our Partners Say
            </h2>

            <p className="mt-5 max-w-[600px] text-base leading-8 text-[#1A1A1A] sm:text-lg lg:text-[20px] lg:leading-[2]">
              Hear from our valued clients and partners who have experienced
              the professionalism, expertise, and commitment of Monarch
              Investments.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-5">

            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="flex min-h-[300px] flex-col justify-between rounded-[14px] bg-[#F4F4F4] p-6 sm:p-7 lg:min-h-[320px] lg:p-7"
              >
                {/* Quote */}
                <p className="text-lg leading-[1.8] text-black sm:text-xl lg:text-[18px] lg:leading-[1.9]">
                  {testimonial.quote}
                </p>

                {/* Person */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold leading-tight text-black sm:text-xl lg:text-[20px]">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm text-[#777] sm:text-base lg:text-[15px]">
                    {testimonial.role}
                  </p>
                </div>
              </article>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}