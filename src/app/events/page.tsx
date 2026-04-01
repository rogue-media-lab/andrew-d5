import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const events = [
  {
    month: "APR",
    day: "12",
    type: "☕ Coffee with Clough",
    typeBg: "bg-[#FEF3DC]",
    typeColor: "text-[#C8902A]",
    borderColor: "border-[#C8902A]",
    title: "Rock Hill Listening Session",
    time: "Saturday, April 12 · 9:00 AM – 11:00 AM",
    location: "Main Street Grind, 142 E Main St, Rock Hill, SC",
    description:
      "Grab a coffee and talk directly with Andrew. No agenda, no speeches — just neighbors talking about what matters most in District 5.",
  },
  {
    month: "APR",
    day: "19",
    type: "🏛 Town Hall",
    typeBg: "bg-[#EEF2FF]",
    typeColor: "text-[#4F46E5]",
    borderColor: "border-[#0F2044]",
    title: "Chester County Town Hall",
    time: "Saturday, April 19 · 2:00 PM – 4:00 PM",
    location: "Chester County Library, 100 Center St, Chester, SC",
    description:
      "A structured Q&A with Andrew on the issues that matter — healthcare, jobs, and accountability. Open to all District 5 residents.",
  },
  {
    month: "MAY",
    day: "3",
    type: "☕ Coffee with Clough",
    typeBg: "bg-[#FEF3DC]",
    typeColor: "text-[#C8902A]",
    borderColor: "border-[#C8902A]",
    title: "Union County Morning Meet",
    time: "Saturday, May 3 · 8:30 AM – 10:30 AM",
    location: "The Rustic Cup, 44 N Duncan Bypass, Union, SC",
    description:
      "Andrew comes to you. Different town every time — same promise: listen first, talk second. Come share what's on your mind.",
  },
];

export default function EventsPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-[#0F2044]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-[120px] py-20 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 bg-[#C8902A] shrink-0" />
              <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-widest">
                On The Ground
              </span>
              <div className="w-10 h-0.5 bg-[#C8902A] shrink-0" />
            </div>
            <h1 className="text-[56px] leading-[110%] text-white font-['Playfair_Display',system-ui,sans-serif] font-bold m-0">
              Join Andrew<br />in District 5.
            </h1>
            <p className="text-[16px] leading-[160%] max-w-[520px] text-[#FFFFFFB3] font-['Inter',system-ui,sans-serif] m-0">
              Coffee conversations, community rallies, town halls — every event is a chance to connect. Find one near you.
            </p>
          </div>
        </section>

        {/* Upcoming events */}
        <section className="bg-[#F9F8F6]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-[120px] py-16 flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-[#0F2044] font-['Playfair_Display',system-ui,sans-serif] font-bold text-4xl m-0">
                Upcoming Events
              </h2>
              <p className="text-[#6B7280] font-['Inter',system-ui,sans-serif] text-[15px] m-0">
                All times local. Events are updated live from Andrew's campaign calendar.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              {events.map(({ month, day, type, typeBg, typeColor, borderColor, title, time, location, description }) => (
                <div key={title} className={`flex-1 flex flex-col rounded-lg gap-5 bg-white border-t-4 ${borderColor} p-9`}>
                  <div className="flex items-start gap-5">
                    <div className="flex flex-col items-center shrink-0 rounded-md py-3 px-4 bg-[#0F2044]">
                      <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-bold text-[11px] uppercase tracking-widest">{month}</span>
                      <span className="text-[32px] leading-none text-white font-['Playfair_Display',system-ui,sans-serif] font-bold">{day}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <span className={`inline-flex rounded-[20px] py-1 px-3 ${typeBg}`}>
                        <span className={`uppercase tracking-[0.08em] ${typeColor} font-['Inter',system-ui,sans-serif] font-semibold text-[11px]`}>{type}</span>
                      </span>
                      <h3 className="text-[22px] leading-[120%] text-[#0F2044] font-['Playfair_Display',system-ui,sans-serif] font-bold m-0">{title}</h3>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-sm">🕘</span>
                      <span className="text-[#6B7280] font-['Inter',system-ui,sans-serif] text-sm">{time}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-sm">📍</span>
                      <span className="text-[#6B7280] font-['Inter',system-ui,sans-serif] text-sm">{location}</span>
                    </div>
                  </div>
                  <p className="text-[14px] leading-[160%] flex-1 text-[#6B7280] font-['Inter',system-ui,sans-serif] m-0">{description}</p>
                  <div className="flex items-center pt-2 gap-3 border-t border-[#F3F4F6]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-[1.5px] bg-[#C8902A] shrink-0" />
                      <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-[11px] uppercase tracking-widest">Get Directions</span>
                    </div>
                    <div className="w-px h-3.5 bg-[#E5E7EB] shrink-0" />
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-[1.5px] bg-[#C8902A] shrink-0" />
                      <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-[11px] uppercase tracking-widest">Add to Calendar</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendar embed */}
        <section className="bg-white">
          <div className="max-w-[1440px] mx-auto px-8 md:px-[120px] py-16 flex flex-col gap-10">
            <div className="flex justify-between items-end flex-wrap gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-0.5 bg-[#C8902A] shrink-0" />
                  <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-widest">Full Schedule</span>
                </div>
                <h2 className="text-[#0F2044] font-['Playfair_Display',system-ui,sans-serif] font-bold text-4xl m-0">Campaign Calendar</h2>
              </div>
              <span className="text-[#6B7280] font-['Inter',system-ui,sans-serif] text-[13px]">
                Live from Andrew's Google Calendar · Updates automatically
              </span>
            </div>
            <div className="h-[560px] flex flex-col items-center justify-center rounded-lg gap-4 bg-[#F9F8F6] border border-[#E5E7EB]">
              <span className="text-[32px]">📅</span>
              <h3 className="text-[#0F2044] font-['Playfair_Display',system-ui,sans-serif] font-bold text-[22px] m-0">Google Calendar Embed</h3>
              <p className="text-[14px] leading-[160%] max-w-[400px] text-center text-[#6B7280] font-['Inter',system-ui,sans-serif] m-0">
                Live calendar pulls directly from Andrew's Google Calendar. All events appear here automatically when added.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
