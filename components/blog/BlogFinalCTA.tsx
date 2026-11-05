import Link from "next/link";
import { ArrowUpRight } from "lucide-react";


export default function BlogFinalCTA() {
    return (
        <section className="px-4 md:px-8 py-12 md:py-20">
            <div className="relative bg-black min-h-[300px] md:min-h-[300px] overflow-hidden rounded-[28px] bg-[#F4F5F6] flex items-center justify-center">
                {/* Main Content */}
                <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-18">
                    <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold tracking-tight leading-[1.15] mb-6">
                        Have a Perspective to Share or an

                        <br className="hidden sm:block" /> Opportunity to Explore?
                    </h2>

                    <p className="text-sm md:text-lg text-white/75 leading-relaxed max-w-4xl mx-auto mb-3">
                        We welcome conversations with industry professionals, entrepreneurs, businesses and strategic partners.
                    </p>

                    <p className="text-sm md:text-lg text-white/75 leading-relaxed max-w-xl mx-auto mb-8">
                        Let's connect and explore opportunities for meaningful collaboration.
                    </p>

                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 rounded-full border border-[#C99B45]/50 px-7 py-3.5 text-sm md:text-[16px] font-semibold text-[#E7C477] transition-all duration-300 hover:border-[#C99B45] hover:bg-[#C99B45] hover:text-[#172A45]"
                    >
                        Contact Monarch
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