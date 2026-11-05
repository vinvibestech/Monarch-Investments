import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const avatars = [
  {
    src: "https://i.pravatar.cc/150?img=12",
    className: "top-[16%] left-[5%] w-16 h-16 md:w-20 md:h-20",
  },
  {
    src: "https://i.pravatar.cc/150?img=11",
    className: "top-[8%] left-[19%] w-20 h-20 md:w-28 md:h-28",
  },
  {
    src: "https://i.pravatar.cc/150?img=13",
    className: "top-[8%] right-[15%] w-20 h-20 md:w-28 md:h-28",
  },
  {
    src: "https://i.pravatar.cc/150?img=14",
    className: "top-[17%] right-[5%] w-16 h-16 md:w-20 md:h-20",
  },
  {
    src: "https://i.pravatar.cc/150?img=15",
    className: "top-[46%] left-[11%] w-16 h-16 md:w-24 md:h-24",
  },
  {
    src: "https://i.pravatar.cc/150?img=16",
    className: "top-[46%] right-[9%] w-16 h-16 md:w-24 md:h-24",
  },
  {
    src: "https://i.pravatar.cc/150?img=17",
    className: "bottom-[12%] left-[5%] w-16 h-16 md:w-20 md:h-20",
  },
  {
    src: "https://i.pravatar.cc/150?img=18",
    className: "bottom-[14%] left-[27%] w-20 h-20 md:w-28 md:h-28",
  },
  {
    src: "https://i.pravatar.cc/150?img=19",
    className: "bottom-[12%] right-[27%] w-16 h-16 md:w-20 md:h-20",
  },
  {
    src: "https://i.pravatar.cc/150?img=20",
    className: "bottom-[14%] right-[12%] w-20 h-20 md:w-28 md:h-28",
  },
];

export default function FinalCTA() {
  return (
    <section className="px-4 md:px-8 py-12 md:py-20">
      <div className="relative bg-black min-h-[300px] md:min-h-[300px] overflow-hidden rounded-[28px] bg-[#F4F5F6] flex items-center justify-center">

 

        {/* Main Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-20">

       

          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold tracking-tight  leading-[1.15] mb-6">
            Have an Opportunity
            <br className="hidden sm:block" /> Worth Exploring?
          </h2>

          <p className="text-sm md:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto mb-3">
            Whether you represent an emerging venture, an established
            business or a strategic organisation, we welcome the
            opportunity to understand your vision.
          </p>

          <p className="text-sm md:text-lg text-white/75 leading-relaxed max-w-xl mx-auto mb-8">
            Let's explore how we can create meaningful opportunities together.
          </p>

             <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full border border-[#C99B45]/50 px-7 py-3.5 text-sm md:text-[16px] font-semibold text-[#E7C477] transition-all duration-300 hover:border-[#C99B45] hover:bg-[#C99B45] hover:text-[#172A45]"
              >
                Contact Our Team

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

        </div>
      </div>
    </section>
  );
}