"use client";

import { useState } from "react";

const amounts = ["$25", "$50", "$100", "$250", "Other"];

export default function Donate() {
  const [selected, setSelected] = useState("$50");

  return (
    <section id="donate" className="bg-[#C8902A]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center py-24 md:py-28 px-8 md:px-16">
        <h2 className="text-white font-['Playfair_Display',system-ui,sans-serif] font-bold text-[46px] md:text-[54px] leading-[110%] mb-5 text-center">
          Fuel the Movement.
        </h2>
        <p className="text-[#FFFFFFD9] font-['Inter',system-ui,sans-serif] text-[18px] leading-[170%] mb-12 text-center max-w-[560px]">
          Every dollar stays in District 5 — going toward outreach, events, and
          getting our message out to neighbors who are ready for real change.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {amounts.map((amount) => (
            <button
              key={amount}
              onClick={() => setSelected(amount)}
              className={`rounded-sm py-3.5 px-7 border-[1.5px] font-['Inter',system-ui,sans-serif] font-bold text-[15px] text-white transition-colors cursor-pointer ${
                selected === amount
                  ? "bg-white/30 border-white"
                  : "bg-white/20 border-white/50 hover:bg-white/30 hover:border-white"
              }`}
            >
              {amount}
            </button>
          ))}
        </div>
        <a
          href="#"
          className="rounded-sm py-[18px] px-16 bg-[#0F2044] hover:bg-[#0a1628] transition-colors text-white font-['Inter',system-ui,sans-serif] font-bold text-[15px] uppercase tracking-[0.08em] text-center"
        >
          Donate Now
        </a>
      </div>
    </section>
  );
}
