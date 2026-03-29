import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A1628]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 pt-16 md:pt-20 pb-10">
        <div className="flex flex-col md:flex-row justify-between mb-14 gap-12">
          {/* Brand */}
          <div className="max-w-[320px] flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full border-2 border-[#C8902A] size-8 shrink-0">
                <div className="rounded-full bg-[#C8902A] size-2" />
              </div>
              <span className="text-white font-['Playfair_Display',system-ui,sans-serif] font-bold text-lg">
                Clough for SC5
              </span>
            </div>
            <p className="text-[#64748B] font-['Inter',system-ui,sans-serif] text-sm leading-[180%]">
              Paid for by the Committee to Elect Andrew Clough. Not authorized
              by any candidate or candidate committee.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 md:gap-20">
            <div className="flex flex-col gap-4">
              <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-[11px] uppercase tracking-[0.15em]">
                Campaign
              </span>
              {["About Andrew", "Issues", "Events", "News"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[#94A3B8] font-['Inter',system-ui,sans-serif] text-sm hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-[11px] uppercase tracking-[0.15em]">
                Take Action
              </span>
              {["Volunteer", "Donate", "Contact"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[#94A3B8] font-['Inter',system-ui,sans-serif] text-sm hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-[11px] uppercase tracking-[0.15em]">
                Connect
              </span>
              {["Facebook", "Instagram", "Twitter / X"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[#94A3B8] font-['Inter',system-ui,sans-serif] text-sm hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-[#1E2D4A] mb-8" />

        <div className="flex justify-between items-center">
          <span className="text-[#374151] font-['Inter',system-ui,sans-serif] text-[13px]">
            2025 Clough for SC5. All rights reserved.
          </span>
          <Link
            href="#"
            className="text-[#374151] font-['Inter',system-ui,sans-serif] text-[13px] hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
