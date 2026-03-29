"use client";

import { useState } from "react";

export default function GetInvolved() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up form submission
  }

  return (
    <section id="volunteer" className="bg-[#0F2044]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center py-24 md:py-32 px-8 md:px-16 gap-16 md:gap-25">
        {/* Left */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-0.5 bg-[#C8902A] shrink-0" />
            <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-[0.15em]">
              Get Involved
            </span>
          </div>
          <h2 className="text-white font-['Playfair_Display',system-ui,sans-serif] font-bold text-[44px] md:text-[50px] leading-[110%] mb-6">
            Change starts with you.
          </h2>
          <p className="text-[#94A3B8] font-['Inter',system-ui,sans-serif] text-[17px] leading-[180%] mb-12">
            Campaigns are powered by people. Knock doors, make calls, share the
            word — every hour you give moves us closer to a District 5 that
            works for everyone.
          </p>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              {["Canvassing", "Phone Banking", "Events & Rallies"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="rounded-full bg-[#C8902A] size-2 shrink-0" />
                    <span className="text-[#CBD5E1] font-['Inter',system-ui,sans-serif] text-[15px]">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
            <div className="flex flex-col gap-2">
              {["Social Media", "Yard Signs", "Fundraising"].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="rounded-full bg-[#C8902A] size-2 shrink-0" />
                  <span className="text-[#CBD5E1] font-['Inter',system-ui,sans-serif] text-[15px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[500px] flex flex-col rounded-lg gap-5 bg-white shrink-0 p-10 md:p-12"
        >
          <h3 className="text-[#0F2044] font-['Playfair_Display',system-ui,sans-serif] font-bold text-[28px] leading-[34px] mb-2">
            Join the Campaign
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 min-w-0 flex flex-col gap-2">
              <label className="text-[#374151] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-[0.05em]">
                First Name
              </label>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className="w-full h-12 rounded-sm bg-[#F9FAFB] border-[1.5px] border-[#E5E7EB] px-3 text-[#0F2044] font-['Inter',system-ui,sans-serif] text-sm outline-none focus:border-[#C8902A] transition-colors"
              />
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-2">
              <label className="text-[#374151] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-[0.05em]">
                Last Name
              </label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="w-full h-12 rounded-sm bg-[#F9FAFB] border-[1.5px] border-[#E5E7EB] px-3 text-[#0F2044] font-['Inter',system-ui,sans-serif] text-sm outline-none focus:border-[#C8902A] transition-colors"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#374151] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-[0.05em]">
              Email Address
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full h-12 rounded-sm bg-[#F9FAFB] border-[1.5px] border-[#E5E7EB] px-3 text-[#0F2044] font-['Inter',system-ui,sans-serif] text-sm outline-none focus:border-[#C8902A] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#374151] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-[0.05em]">
              Zip Code
            </label>
            <input
              type="text"
              value={form.zip}
              onChange={(e) => setForm({ ...form, zip: e.target.value })}
              className="w-full h-12 rounded-sm bg-[#F9FAFB] border-[1.5px] border-[#E5E7EB] px-3 text-[#0F2044] font-['Inter',system-ui,sans-serif] text-sm outline-none focus:border-[#C8902A] transition-colors"
            />
          </div>
          <button
            type="submit"
            className="h-[52px] flex items-center justify-center mt-2 rounded-sm bg-[#C8902A] hover:bg-[#b47d22] transition-colors text-white font-['Inter',system-ui,sans-serif] font-bold text-sm uppercase tracking-[0.08em] cursor-pointer"
          >
            Sign Me Up
          </button>
          <p className="text-center text-[#9CA3AF] font-['Inter',system-ui,sans-serif] text-xs">
            Your information is private and will never be sold.
          </p>
        </form>
      </div>
    </section>
  );
}
