
export default function ContactUs() {
  return (
    <section className="bg-white py-16 lg:pt-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-18">
        {/* Top */}
        <div className="grid lg:gap-10 xl:gap-50 lg:grid-cols-[530px_1fr]">
          <div>
            <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
       Get in Touch
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]">
           We'd Love to Hear From You
            </h2>
          </div>

          <div>
            <p className="max-w-[560px] text-base mt-5 leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
              Our team is ready to answer your questions, discuss partnership opportunities, and provide guidance on our investment solutions. Reach out using the contact details below or send us a message.
         </p>
          </div>
        </div>

       
      </div>
    </section>
  );
}