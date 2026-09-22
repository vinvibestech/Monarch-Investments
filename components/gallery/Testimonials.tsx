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
      '“Monarch Global Investments has been a trusted partner throughout our growth journey. Their strategic insights and professional approach have supported our long-term business goals.”',
    name: "Sarah Johnson",
    role: "Business Partner",
  },
  {
    id: 2,
    quote:
      '“The team’s commitment to transparency and sustainable investment gave us confidence in building a long-term partnership with Monarch Global Investments.”',
    name: "Ahmed Al Mansoori",
    role: "Investor",
  },
  {
    id: 3,
    quote:
      '“Their expertise, reliability and innovative approach made every stage of our collaboration smooth and well-structured.”',
    name: "Priya Nair",
    role: "Corporate Client",
  },
  {
    id: 4,
    quote:
      '“Monarch Global Investments provides trusted expertise, transparency and sustainable solutions focused on long-term business growth.”',
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
              Hear from clients, investors and strategic business partners who have experienced Monarch Global Investments’ professional approach, strategic expertise, transparency and commitment to sustainable growth.
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

      <section id="newssection" className={`bg-white py-14 sm:py-16 lg:py-20 mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-26`}>

        <h2
          className={`mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15] `}
        >
          Building Connections. Creating Opportunities. Growing Together.


        </h2>

        <div className={`mt-5 lg:mt-5`}>
          <p className="text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
            Monarch Global Investments brings together investment, innovation, strategic partnerships and sustainable development across Education, Agriculture, Energy and Tourism.


          </p>
        </div>
        <div className={`mt-2 lg:mt-2`}>
          <p className="text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
            Explore our journey, discover our milestones and connect with us to explore new opportunities for collaboration and growth.



          </p>
        </div>

      </section>

    </section>
  );
}