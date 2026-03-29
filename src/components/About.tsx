import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center py-24 md:py-32 px-8 md:px-16 gap-16 md:gap-25">
        {/* Photo */}
        <div className="relative w-full md:w-[460px] shrink-0">
          <div className="relative w-full md:w-[460px] h-[380px] md:h-[540px] rounded-md overflow-hidden">
            <Image
              src="https://workers.paper.design/file-assets/01KMX0V76HJMT36BQK69SSYAVY/2JG660PNNNY2QTMYF48F70VJ07.jpg"
              alt="Andrew Clough smiling"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 w-[120px] h-[120px] flex items-center justify-center flex-col rounded-sm gap-1 bg-[#0F2044]">
            <span className="text-[#C8902A] font-['Playfair_Display',system-ui,sans-serif] font-bold text-[28px] leading-[34px]">
              SC
            </span>
            <span className="text-white font-['Inter',system-ui,sans-serif] font-semibold text-[10px] tracking-widest uppercase">
              DISTRICT 5
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col mt-4 md:mt-0">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-0.5 bg-[#C8902A] shrink-0" />
            <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-[0.15em]">
              About Andrew
            </span>
          </div>
          <h2 className="text-[#0F2044] font-['Playfair_Display',system-ui,sans-serif] font-bold text-[46px] leading-[110%] mb-7">
            A neighbor.
            <br />
            A voice.
            <br />
            A leader.
          </h2>
          <p className="text-[#4B5563] font-['Inter',system-ui,sans-serif] text-[17px] leading-[180%] mb-5">
            Andrew Clough has lived and worked in District 5 for over a decade.
            He understands the challenges families face because he faces them too
            — rising costs, underfunded schools, and a government that too often
            feels out of reach.
          </p>
          <p className="text-[#4B5563] font-['Inter',system-ui,sans-serif] text-[17px] leading-[180%] mb-10">
            Andrew believes in transparent government, investing in education,
            and building an economy that works for everyone — not just those at
            the top.
          </p>

          {/* Stats */}
          <div className="flex gap-8 md:gap-12">
            <div className="flex flex-col gap-1">
              <span className="text-[#C8902A] font-['Playfair_Display',system-ui,sans-serif] font-bold text-4xl leading-[44px]">
                10+
              </span>
              <span className="text-[#6B7280] font-['Inter',system-ui,sans-serif] text-[13px] uppercase tracking-[0.08em]">
                Years in District 5
              </span>
            </div>
            <div className="w-px bg-[#E5E7EB] shrink-0" />
            <div className="flex flex-col gap-1">
              <span className="text-[#C8902A] font-['Playfair_Display',system-ui,sans-serif] font-bold text-4xl leading-[44px]">
                5
              </span>
              <span className="text-[#6B7280] font-['Inter',system-ui,sans-serif] text-[13px] uppercase tracking-[0.08em]">
                Core Priorities
              </span>
            </div>
            <div className="w-px bg-[#E5E7EB] shrink-0" />
            <div className="flex flex-col gap-1">
              <span className="text-[#C8902A] font-['Playfair_Display',system-ui,sans-serif] font-bold text-4xl leading-[44px]">
                1
              </span>
              <span className="text-[#6B7280] font-['Inter',system-ui,sans-serif] text-[13px] uppercase tracking-[0.08em]">
                Goal: Serve You
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
