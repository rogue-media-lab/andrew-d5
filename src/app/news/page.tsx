import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const filters = ["All Issues", "Economy & Jobs", "Healthcare", "Infrastructure", "Public Safety", "Accountability", "Veterans", "Education"];

const latestStories = [
  {
    tag: "Healthcare",
    source: "Post & Courier",
    title: "Rural hospital in Chester faces closure without state funding fix",
    body: "Chester Regional Medical Center has until July to secure a funding package or begin wind-down procedures, administrators said Tuesday.",
    date: "Mar 26, 2026",
  },
  {
    tag: "Infrastructure",
    source: "SC Statehouse Report",
    title: "I-77 widening project stalls again as federal funds remain frozen",
    body: "The SCDOT confirmed delays to the I-77 corridor expansion linking Rock Hill to Charlotte after federal infrastructure allocations were placed under review.",
    date: "Mar 25, 2026",
  },
  {
    tag: "Accountability",
    source: "SC Public Radio",
    title: "Audit finds SC-05 district received $4M in untracked federal grants",
    body: "A state audit released this week found that several sub-grants passed through District 5 agencies without required reporting disclosures between 2022 and 2024.",
    date: "Mar 24, 2026",
  },
  {
    tag: "Veterans",
    source: "Herald Online",
    title: "Rock Hill VA clinic waitlists now among longest in the Southeast",
    body: "Veterans in York County are waiting an average of 47 days for primary care appointments at the Rock Hill clinic, nearly triple the VA's stated target.",
    date: "Mar 22, 2026",
  },
  {
    tag: "Education",
    source: "The State",
    title: "SC reading scores improve statewide but District 5 schools lag behind",
    body: "Third-grade reading proficiency in York and Chester county schools trails the state average by 11 points, per the latest SC Report Card data.",
    date: "Mar 20, 2026",
  },
  {
    tag: "Public Safety",
    source: "SC Public Radio",
    title: "Crime data shows property theft up 18% in Upstate SC since 2023",
    body: "A SLED analysis released Thursday shows property crime increases concentrated in rapidly growing suburban areas of York and Lancaster counties.",
    date: "Mar 19, 2026",
  },
];

export default function NewsPage() {
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
                SC in Focus
              </span>
            </div>
            <h1 className="text-[52px] leading-[115%] text-white font-['Playfair_Display',system-ui,sans-serif] font-bold m-0">
              News from District 5
            </h1>
            <p className="text-[18px] leading-[160%] max-w-[600px] text-[#FFFFFFB3] font-['Inter',system-ui,sans-serif] m-0">
              We don't write the news — we surface what matters to SC-05. Stories pulled from trusted South Carolina sources, tagged to the issues Andrew is running on.
            </p>
          </div>
        </section>

        {/* Filter tabs */}
        <section className="bg-[#F9F8F6]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-[120px] pt-12 pb-0 flex flex-wrap gap-2 border-b border-[#E5E7EB]">
            {filters.map((f, i) => (
              <button
                key={f}
                className={`rounded-full py-2.5 px-5 mb-0 font-['Inter',system-ui,sans-serif] font-semibold text-[13px] ${
                  i === 0
                    ? "bg-[#0F2044] text-white"
                    : "bg-white border-[1.5px] border-[#E5E7EB] text-[#374151] hover:border-[#0F2044] transition-colors"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* Featured story */}
        <section className="bg-[#F9F8F6]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-[120px] py-8">
            <div className="flex rounded-lg overflow-hidden bg-white border-t-4 border-[#C8902A]">
              <div className="flex-1 flex flex-col gap-4 p-12">
                <div className="flex items-center gap-2.5">
                  <span className="rounded-sm py-1 px-2.5 bg-[#C8902A] text-white font-['Inter',system-ui,sans-serif] font-bold text-[11px] uppercase tracking-[0.08em]">
                    Featured
                  </span>
                  <span className="text-[#6B7280] font-['Inter',system-ui,sans-serif] font-semibold text-[11px] uppercase tracking-[0.08em]">
                    Economy & Jobs
                  </span>
                </div>
                <h2 className="text-[32px] leading-[125%] text-[#0F2044] font-['Playfair_Display',system-ui,sans-serif] font-bold m-0">
                  SC unemployment rate rises as textile jobs leave Upstate, report finds
                </h2>
                <p className="text-[16px] leading-[165%] text-[#6B7280] font-['Inter',system-ui,sans-serif] m-0">
                  A new report from the SC Department of Employment and Workforce shows York and Chester counties lost over 1,200 manufacturing jobs in the past year, widening the gap with the state average.
                </p>
                <div className="flex items-center mt-2 gap-4">
                  <span className="text-[#374151] font-['Inter',system-ui,sans-serif] font-semibold text-[13px]">The State</span>
                  <span className="text-[#9CA3AF] font-['Inter',system-ui,sans-serif] text-[13px]">March 28, 2026</span>
                  <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-[13px]">Read full story →</span>
                </div>
              </div>
              <div className="hidden md:flex w-[400px] shrink-0 items-center justify-center bg-[#0F2044]">
                <div className="flex flex-col items-center gap-3 p-10">
                  <div className="flex items-center justify-center rounded-full bg-[#C8902A33] size-14">
                    <div className="rounded-sm bg-[#C8902A] size-6" />
                  </div>
                  <span className="text-center text-[#FFFFFF80] font-['Inter',system-ui,sans-serif] text-[13px]">The State · SC Politics</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest stories */}
        <section className="bg-[#F9F8F6]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-[120px] pb-12 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-widest">Latest Stories</span>
              <div className="flex-1 h-px bg-[#E5E7EB]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestStories.map(({ tag, source, title, body, date }) => (
                <div key={title} className="flex flex-col rounded-lg py-8 px-7 gap-3.5 bg-white border-t-4 border-[#C8902A]">
                  <div className="flex items-center gap-2">
                    <span className="rounded-sm py-0.5 px-2 bg-[#EEF2FF] text-[#0F2044] font-['Inter',system-ui,sans-serif] font-bold text-[10px] uppercase tracking-[0.08em]">
                      {tag}
                    </span>
                    <span className="text-[#9CA3AF] font-['Inter',system-ui,sans-serif] text-[11px]">{source}</span>
                  </div>
                  <h3 className="text-[20px] leading-[130%] text-[#0F2044] font-['Playfair_Display',system-ui,sans-serif] font-bold m-0">{title}</h3>
                  <p className="text-[14px] leading-[160%] text-[#6B7280] font-['Inter',system-ui,sans-serif] m-0">{body}</p>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#F3F4F6]">
                    <span className="text-[#9CA3AF] font-['Inter',system-ui,sans-serif] text-xs">{date}</span>
                    <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-[13px]">Read →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sources bar */}
        <section className="bg-[#F9F8F6]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-[120px] pb-20">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between rounded-lg py-8 px-10 bg-[#0F2044] gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-widest">Sources</span>
                <p className="text-[14px] leading-[150%] text-[#FFFFFFA6] font-['Inter',system-ui,sans-serif] m-0">
                  Stories curated from: The State · Post & Courier · SC Public Radio · Herald Online · SC Statehouse Report
                </p>
              </div>
              <p className="text-[12px] leading-[150%] text-right text-[#FFFFFF73] font-['Inter',system-ui,sans-serif] max-w-[320px] m-0">
                Curated by the Clough campaign. We don't write the news — we surface what matters to District 5.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
