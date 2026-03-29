import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#0F2044] pt-20">
      <div className="max-w-[1440px] mx-auto flex min-h-[780px]">
        {/* Left */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-10 h-0.5 bg-[#C8902A] shrink-0" />
            <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-[0.15em]">
              South Carolina District 5
            </span>
          </div>
          <h1 className="text-white font-['Playfair_Display',system-ui,sans-serif] font-bold text-[58px] md:text-[74px] leading-[105%] mb-6">
            People
            <br />
            Over
            <br />
            Politics.
          </h1>
          <p className="text-[#94A3B8] font-['Inter',system-ui,sans-serif] text-lg leading-[170%] mb-12 max-w-[440px]">
            Andrew Clough is running for South Carolina District 5 to put
            community first — bringing honest, accountable leadership back to
            Columbia.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="#volunteer"
              className="rounded-sm py-4 px-9 bg-[#C8902A] text-white font-['Inter',system-ui,sans-serif] font-bold text-[15px] uppercase tracking-[0.06em] hover:bg-[#b47d22] transition-colors"
            >
              Volunteer
            </Link>
            <Link
              href="#donate"
              className="rounded-sm py-4 px-9 border-[1.5px] border-[#FFFFFF4D] text-white font-['Inter',system-ui,sans-serif] font-bold text-[15px] uppercase tracking-[0.06em] hover:border-white transition-colors"
            >
              Donate
            </Link>
          </div>
        </div>

        {/* Right — photo */}
        <div className="hidden md:flex w-[560px] items-end justify-center shrink-0">
          <div className="relative w-[480px] h-[680px] rounded-t-lg overflow-hidden">
            <Image
              src="https://workers.paper.design/file-assets/01KMX0V76HJMT36BQK69SSYAVY/2XQ8BX9PE6YE0DBCKFXK8ZXJYR.jpg"
              alt="Andrew Clough standing by a fountain"
              fill
              className="object-cover object-[center_15%]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
