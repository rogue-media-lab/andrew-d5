import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const issues = [
  {
    title: "Economy & Jobs",
    body: "District 5 is losing manufacturing jobs while costs rise. Andrew will fight for workforce training programs, small business access to capital, and bringing good-paying trade jobs back to York and Chester counties.",
    bullets: [
      "Expand apprenticeship funding for skilled trades",
      "Support small business SBA loan access reform",
      "Oppose trade deals that ship SC jobs overseas",
    ],
  },
  {
    title: "Healthcare",
    body: "Chester Regional is at risk of closing. Rural healthcare in District 5 is in crisis. Andrew will fight to protect rural hospitals, lower prescription drug costs, and ensure no family goes bankrupt from a medical bill.",
    bullets: [
      "Federal funding protection for rural hospitals",
      "Cap out-of-pocket insulin costs at $35/month",
      "Expand Medicaid coverage gaps in South Carolina",
    ],
  },
  {
    title: "Infrastructure",
    body: "The I-77 corridor is stalling. Broadband gaps leave rural families behind. Andrew will push for infrastructure investment that connects District 5 to opportunity — roads, bridges, and high-speed internet for every household.",
    bullets: [
      "Complete I-77 widening through York County",
      "Rural broadband expansion for Chester & Lancaster",
      "Protect federal infrastructure funding allocations",
    ],
  },
  {
    title: "Veterans",
    body: "Rock Hill's VA clinic has some of the longest wait times in the Southeast. District 5 veterans served this country — they deserve care that doesn't make them wait 47 days for a primary care visit.",
    bullets: [
      "Fund Rock Hill VA clinic expansion and staffing",
      "Reduce VA appointment wait times to under 14 days",
      "Support mental health resources for veterans",
    ],
  },
  {
    title: "Public Safety",
    body: "Property crime is rising in our fastest-growing communities. Andrew supports fully funding local law enforcement, investing in community prevention programs, and keeping District 5 families safe.",
    bullets: [
      "Support COPS grant funding for local departments",
      "Invest in youth intervention and prevention programs",
      "Address fentanyl trafficking through border cooperation",
    ],
  },
  {
    title: "Education",
    body: "District 5 schools are falling behind the state average on reading and math. Andrew will fight for Title I funding, teacher pay parity, and giving every child — regardless of zip code — a real shot.",
    bullets: [
      "Protect and increase Title I school funding",
      "Push for federal teacher pay equity standards",
      "Expand pre-K access for working families",
    ],
  },
  {
    title: "Accountability",
    body: "A state audit found $4M in untracked federal grants flowing through District 5. Andrew believes in transparent government — every dollar that comes into this district should be tracked, reported, and working for residents.",
    bullets: [
      "Mandatory public reporting on all federal grants",
      "Co-sponsor anti-corruption legislation",
      "Publish a public voting record dashboard",
    ],
  },
];

export default function IssuesPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-[#0F2044]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-[120px] pt-[72px] pb-16 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-0.5 h-8 bg-[#C8902A] shrink-0" />
              <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-widest">
                Where Andrew Stands
              </span>
            </div>
            <h1 className="text-[52px] leading-[115%] text-white font-['Playfair_Display',system-ui,sans-serif] font-bold m-0">
              The Issues
            </h1>
            <p className="text-[18px] leading-[160%] max-w-[580px] text-[#FFFFFFB3] font-['Inter',system-ui,sans-serif] m-0">
              District 5 deserves a representative who shows up with a plan, not talking points. Here's where Andrew stands — and what he'll fight for in Congress.
            </p>
          </div>
        </section>

        {/* Issue cards */}
        <section className="bg-[#F9F8F6]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-[120px] pt-16 pb-12 flex flex-wrap gap-6">
            {issues.map(({ title, body, bullets }) => (
              <div key={title} className="flex-1 min-w-[340px] flex flex-col rounded-lg py-10 px-9 gap-4 bg-white border-t-4 border-[#C8902A]">
                <div className="flex items-center gap-3.5">
                  <div className="flex items-center justify-center shrink-0 rounded-lg bg-[#F3F0EA] size-11">
                    <div className="rounded-sm bg-[#C8902A] size-5" />
                  </div>
                  <h2 className="text-[#0F2044] font-['Playfair_Display',system-ui,sans-serif] font-bold text-[22px] m-0">{title}</h2>
                </div>
                <p className="text-[15px] leading-[165%] text-[#6B7280] font-['Inter',system-ui,sans-serif] m-0">{body}</p>
                <div className="flex flex-col pt-2 gap-2.5 border-t border-[#F3F4F6]">
                  {bullets.map((b) => (
                    <div key={b} className="flex items-start gap-2.5">
                      <div className="mt-1.5 shrink-0 rounded-full bg-[#C8902A] size-1.5" />
                      <span className="text-[14px] leading-[150%] text-[#374151] font-['Inter',system-ui,sans-serif]">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {/* Empty flex spacer to keep last row left-aligned */}
            <div className="flex-1 min-w-[340px]" />
          </div>
        </section>

        {/* CTA bar */}
        <section className="bg-[#F9F8F6]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-[120px] pb-16">
            <div className="flex flex-col md:flex-row items-center justify-between rounded-lg py-12 px-14 bg-[#0F2044] gap-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-['Playfair_Display',system-ui,sans-serif] font-bold text-[28px] m-0">
                  Have a question on where Andrew stands?
                </h3>
                <p className="text-[#FFFFFFA6] font-['Inter',system-ui,sans-serif] text-base m-0">
                  Reach out directly — he reads every message from District 5 residents.
                </p>
              </div>
              <div className="flex shrink-0 gap-4">
                <Link href="/#contact" className="rounded-sm py-3.5 px-8 bg-[#C8902A] text-white font-['Inter',system-ui,sans-serif] font-bold text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
                  Contact Andrew
                </Link>
                <Link href="/volunteer" className="rounded-sm py-3.5 px-8 border-[1.5px] border-[#FFFFFF4D] text-white font-['Inter',system-ui,sans-serif] font-semibold text-sm hover:border-white transition-colors whitespace-nowrap">
                  Volunteer
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
