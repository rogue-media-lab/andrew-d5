import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-[#0F2044]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-[120px] flex min-h-[520px]">
            <div className="flex-1 flex flex-col justify-center pr-0 md:pr-16 gap-5 py-20">
              <div className="flex items-center gap-3">
                <div className="w-0.5 h-8 bg-[#C8902A] shrink-0" />
                <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-widest">
                  About Andrew
                </span>
              </div>
              <h1 className="text-[52px] leading-[115%] text-white font-['Playfair_Display',system-ui,sans-serif] font-bold m-0">
                Built by District 5.<br />Running for District 5.
              </h1>
              <p className="text-[18px] leading-[165%] max-w-[520px] text-[#FFFFFFB3] font-['Inter',system-ui,sans-serif] m-0">
                Andrew Clough is a husband, father, and Rock Hill native who has spent his career serving this community. He's running for Congress because District 5 deserves a voice that actually shows up.
              </p>
              <div className="flex mt-2 gap-4">
                <Link href="/volunteer" className="rounded-sm py-3.5 px-7 bg-[#C8902A] text-white font-['Inter',system-ui,sans-serif] font-bold text-sm tracking-[0.02em] hover:opacity-90 transition-opacity">
                  Join the Campaign
                </Link>
                <a href="#story" className="rounded-sm py-3.5 px-7 border-[1.5px] border-[#FFFFFF4D] text-white font-['Inter',system-ui,sans-serif] font-semibold text-sm hover:border-white transition-colors">
                  Read His Story
                </a>
              </div>
            </div>
            <div className="hidden md:flex w-[420px] shrink-0 items-center justify-center bg-[#FFFFFF0F]">
              <div className="w-[300px] h-[380px] flex items-center justify-center rounded-sm bg-[#C8902A26] border-2 border-[#C8902A4D]">
                <span className="text-[#FFFFFF66] font-['Inter',system-ui,sans-serif] text-[13px]">
                  Photo of Andrew
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section id="story" className="bg-white">
          <div className="max-w-[1440px] mx-auto px-8 md:px-[120px] py-20 flex flex-col md:flex-row gap-20">
            <div className="flex-1 flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="w-0.5 h-7 bg-[#C8902A] shrink-0" />
                <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-widest">
                  His Story
                </span>
              </div>
              <h2 className="text-[36px] leading-[120%] text-[#0F2044] font-['Playfair_Display',system-ui,sans-serif] font-bold m-0">
                A life rooted in this district
              </h2>
              <p className="text-[16px] leading-[175%] text-[#6B7280] font-['Inter',system-ui,sans-serif] m-0">
                Andrew Clough grew up in Rock Hill, went to school here, and built his family here. He's watched this district grow — and he's watched Washington ignore it. Textile mills closing. The VA clinic stretched thin. Young families leaving because they can't afford to stay.
              </p>
              <p className="text-[16px] leading-[175%] text-[#6B7280] font-['Inter',system-ui,sans-serif] m-0">
                He spent years in community service, understanding firsthand how decisions made in Washington play out on the streets of York County. He knows that the people of District 5 aren't looking for a career politician — they're looking for someone who will actually fight for them.
              </p>
              <p className="text-[16px] leading-[175%] text-[#6B7280] font-['Inter',system-ui,sans-serif] m-0">
                Andrew is running as a Democrat because he believes in an economy that works for working people, healthcare that doesn't bankrupt families, and a government that tells the truth. He's not backed by PACs. He's backed by neighbors.
              </p>
            </div>
            <div className="w-full md:w-[360px] shrink-0 flex flex-col gap-6">
              <div className="rounded-lg py-7 px-6 bg-[#F9F8F6] border-l-4 border-[#C8902A]">
                <p className="text-[20px] leading-[150%] text-[#0F2044] font-['Playfair_Display',system-ui,sans-serif] italic m-0">
                  "District 5 has been overlooked for too long. I'm running because I refuse to accept that as normal."
                </p>
                <p className="mt-4 mb-0 text-[#6B7280] font-['Inter',system-ui,sans-serif] font-semibold text-[13px] mx-0">
                  — Andrew Clough
                </p>
              </div>
              <div className="rounded-lg py-7 px-6 bg-[#F9F8F6] flex flex-col gap-4">
                <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-bold text-[11px] uppercase tracking-widest">
                  Fast Facts
                </span>
                <div className="flex flex-col gap-3">
                  {[
                    ["Home", "Rock Hill, SC"],
                    ["Party", "Democrat"],
                    ["District", "SC-05"],
                    ["Primary", "June 2026"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex gap-3">
                      <span className="w-20 shrink-0 text-[#9CA3AF] font-['Inter',system-ui,sans-serif] text-sm">{label}</span>
                      <span className="text-[#374151] font-['Inter',system-ui,sans-serif] font-medium text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#F9F8F6]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-[120px] py-20 flex flex-col gap-12">
            <div className="flex items-center gap-3">
              <div className="w-0.5 h-7 bg-[#C8902A] shrink-0" />
              <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-widest">
                Values
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              {[
                {
                  title: "Community First",
                  body: "Every decision Andrew makes in Congress will start with one question: does this help the people of District 5? Not donors. Not party leadership. Neighbors.",
                },
                {
                  title: "Straight Talk",
                  body: "Andrew says what he means. No hedging, no spin. If he disagrees with something, he'll say so. District 5 has had enough of politicians who talk around every answer.",
                },
                {
                  title: "Show Up",
                  body: "Being a congressman means being present. Town halls, school visits, coffee meetups — Andrew will be in the district regularly, not just at election time.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="flex-1 flex flex-col gap-3">
                  <h3 className="text-[#0F2044] font-['Playfair_Display',system-ui,sans-serif] font-bold text-2xl m-0">{title}</h3>
                  <p className="text-[15px] leading-[165%] text-[#6B7280] font-['Inter',system-ui,sans-serif] m-0">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0F2044]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-[120px] py-20 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex flex-col max-w-[560px] gap-3">
              <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-widest">
                Get Involved
              </span>
              <h2 className="text-[36px] leading-[120%] text-white font-['Playfair_Display',system-ui,sans-serif] font-bold m-0">
                This campaign runs on neighbors, not donors.
              </h2>
              <p className="text-[16px] leading-[165%] text-[#FFFFFFA6] font-['Inter',system-ui,sans-serif] m-0">
                Door knocking, phone banking, hosting a coffee — every hour you give makes a real difference in a district this competitive. Andrew needs you.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link href="/volunteer" className="rounded-sm py-4 px-10 bg-[#C8902A] text-white font-['Inter',system-ui,sans-serif] font-bold text-[15px] text-center hover:opacity-90 transition-opacity">
                Volunteer Now
              </Link>
              <Link href="/#donate" className="rounded-sm py-4 px-10 border-[1.5px] border-[#FFFFFF4D] text-white font-['Inter',system-ui,sans-serif] font-semibold text-[15px] text-center hover:border-white transition-colors">
                Donate
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
