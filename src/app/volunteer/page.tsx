import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const roles = [
  {
    icon: "🚪",
    title: "Canvassing",
    body: "Walk neighborhoods and talk to voters face-to-face. The most effective thing a campaign can do. We provide the list, the script, and the training.",
    tag: "Most impactful",
    tagColor: "text-[#C8902A]",
    tagLine: "bg-[#C8902A]",
    border: "border-[#C8902A]",
  },
  {
    icon: "📞",
    title: "Phone & Text Banking",
    body: "Reach voters from your own home. Phone calls for older voters, text banking for everyone else. A few hours on a weekend goes a long way.",
    tag: "Do it from home",
    tagColor: "text-[#C8902A]",
    tagLine: "bg-[#C8902A]",
    border: "border-[#C8902A]",
  },
  {
    icon: "🪧",
    title: "Yard Signs",
    body: "Put a sign in your yard or help distribute them across the district. Visibility builds name recognition — especially in the final weeks before the primary.",
    tag: "Lowest time commitment",
    tagColor: "text-[#C8902A]",
    tagLine: "bg-[#C8902A]",
    border: "border-[#C8902A]",
  },
  {
    icon: "📱",
    title: "Social Media",
    body: "Share posts, write your own story about why you support Andrew, and help expand the campaign's reach beyond what advertising can do.",
    tag: "Anytime, anywhere",
    tagColor: "text-[#6B7280]",
    tagLine: "bg-[#6B7280]",
    border: "border-[#0F2044]",
  },
  {
    icon: "🏠",
    title: "Host a House Party",
    body: "Invite neighbors over and bring Andrew to your living room. House parties are how grassroots campaigns build real, lasting support in a community.",
    tag: "High impact",
    tagColor: "text-[#6B7280]",
    tagLine: "bg-[#6B7280]",
    border: "border-[#0F2044]",
  },
  {
    icon: "📣",
    title: "Events & Rallies",
    body: "Help set up, greet attendees, and run the show at Coffee with Clough events and town halls. Energy at events is contagious — we need good people in the room.",
    tag: "In-person",
    tagColor: "text-[#6B7280]",
    tagLine: "bg-[#6B7280]",
    border: "border-[#0F2044]",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-[#0F2044]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-[120px] py-20 flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-0.5 bg-[#C8902A] shrink-0" />
                <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-widest">
                  Get Involved
                </span>
              </div>
              <h1 className="text-[56px] leading-[110%] text-white font-['Playfair_Display',system-ui,sans-serif] font-bold m-0">
                Be part of<br />something real.
              </h1>
              <p className="text-[16px] leading-[170%] max-w-[460px] text-[#FFFFFFA6] font-['Inter',system-ui,sans-serif] m-0">
                Every door knocked, every call made, every yard sign planted — it adds up. Andrew can't win this without neighbors who believe District 5 deserves better. That's you.
              </p>
            </div>
            {/* Stats widget */}
            <div className="w-full md:w-[440px] shrink-0 flex flex-col rounded-xl gap-6 bg-[#FFFFFF12] p-10">
              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-1">
                  <span className="text-[48px] leading-none text-white font-['Playfair_Display',system-ui,sans-serif] font-bold">312</span>
                  <span className="text-[#FFFFFF80] font-['Inter',system-ui,sans-serif] text-sm">volunteers and counting</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-sm">Goal: 500</span>
                  <span className="text-[#FFFFFF66] font-['Inter',system-ui,sans-serif] text-xs">before primary</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-full h-2 rounded-full overflow-hidden bg-[#FFFFFF1F]">
                  <div className="w-[62%] h-full rounded-full bg-[#C8902A]" />
                </div>
                <span className="text-[#FFFFFF66] font-['Inter',system-ui,sans-serif] text-xs">188 more to reach our goal</span>
              </div>
              <div className="flex pt-2 border-t border-[#FFFFFF1A]">
                <div className="flex-1 flex flex-col gap-1">
                  <span className="text-white font-['Playfair_Display',system-ui,sans-serif] font-bold text-2xl">6</span>
                  <span className="text-[#FFFFFF73] font-['Inter',system-ui,sans-serif] text-xs">counties represented</span>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <span className="text-white font-['Playfair_Display',system-ui,sans-serif] font-bold text-2xl">1,400+</span>
                  <span className="text-[#FFFFFF73] font-['Inter',system-ui,sans-serif] text-xs">doors knocked</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pick your role */}
        <section className="bg-[#F9F8F6]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-[120px] py-16 flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-0.5 bg-[#C8902A] shrink-0" />
                <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-widest">How You Can Help</span>
              </div>
              <h2 className="text-[#0F2044] font-['Playfair_Display',system-ui,sans-serif] font-bold text-4xl m-0">Pick your role.</h2>
              <p className="text-[15px] leading-[160%] max-w-[560px] text-[#6B7280] font-['Inter',system-ui,sans-serif] m-0">
                Every role matters. Do as much or as little as you can — an hour a week moves the needle. Sign up below and we'll match you to opportunities in your area.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roles.map(({ icon, title, body, tag, tagColor, tagLine, border }) => (
                <div key={title} className={`flex flex-col rounded-lg gap-3.5 bg-white border-t-4 ${border} p-8`}>
                  <div className={`flex items-center justify-center shrink-0 rounded-lg bg-[#0F2044] size-11`}>
                    <span className="text-xl">{icon}</span>
                  </div>
                  <h3 className="text-[#0F2044] font-['Playfair_Display',system-ui,sans-serif] font-bold text-xl m-0">{title}</h3>
                  <p className="text-[14px] leading-[165%] flex-1 text-[#6B7280] font-['Inter',system-ui,sans-serif] m-0">{body}</p>
                  <div className="flex items-center pt-1 gap-1.5">
                    <div className={`w-4 h-[1.5px] ${tagLine} shrink-0`} />
                    <span className={`${tagColor} font-['Inter',system-ui,sans-serif] font-semibold text-[11px] uppercase tracking-widest`}>{tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sign up form */}
        <section className="bg-[#0F2044]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-[120px] py-20 flex flex-col md:flex-row items-start gap-20">
            <div className="flex-1 flex flex-col pt-2 gap-7">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-0.5 bg-[#C8902A] shrink-0" />
                  <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-widest">Sign Up</span>
                </div>
                <h2 className="text-[40px] leading-[110%] text-white font-['Playfair_Display',system-ui,sans-serif] font-bold m-0">
                  Ready to help?<br />Let's talk.
                </h2>
              </div>
              <p className="text-[15px] leading-[175%] text-[#FFFFFF99] font-['Inter',system-ui,sans-serif] m-0">
                Fill in your details and check off whatever you're interested in. A member of the campaign team will reach out within 48 hours to get you plugged in.
              </p>
              <div className="flex flex-col pt-2 gap-3">
                {[
                  "Your info is never sold or shared",
                  "Unsubscribe anytime, no questions asked",
                  "We'll match you to opportunities near your ZIP",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="shrink-0 rounded-full bg-[#C8902A] size-2" />
                    <span className="text-[#FFFFFF99] font-['Inter',system-ui,sans-serif] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Form */}
            <div className="w-full md:w-[560px] shrink-0 flex flex-col rounded-xl gap-5 bg-white p-12">
              <h3 className="text-[#0F2044] font-['Playfair_Display',system-ui,sans-serif] font-bold text-2xl m-0">Join the Campaign</h3>
              <div className="flex gap-4">
                {["First Name", "Last Name"].map((label) => (
                  <div key={label} className="flex-1 flex flex-col gap-1.5">
                    <label className="uppercase tracking-[0.08em] text-[#6B7280] font-['Inter',system-ui,sans-serif] font-semibold text-[11px]">{label}</label>
                    <div className="h-11 rounded-md bg-[#F9F8F6] border-[1.5px] border-[#E5E7EB]" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="uppercase tracking-[0.08em] text-[#6B7280] font-['Inter',system-ui,sans-serif] font-semibold text-[11px]">Email Address</label>
                <div className="h-11 rounded-md bg-[#F9F8F6] border-[1.5px] border-[#E5E7EB]" />
              </div>
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="uppercase tracking-[0.08em] text-[#6B7280] font-['Inter',system-ui,sans-serif] font-semibold text-[11px]">Phone (optional)</label>
                  <div className="h-11 rounded-md bg-[#F9F8F6] border-[1.5px] border-[#E5E7EB]" />
                </div>
                <div className="w-[140px] shrink-0 flex flex-col gap-1.5">
                  <label className="uppercase tracking-[0.08em] text-[#6B7280] font-['Inter',system-ui,sans-serif] font-semibold text-[11px]">ZIP Code</label>
                  <div className="h-11 rounded-md bg-[#F9F8F6] border-[1.5px] border-[#E5E7EB]" />
                </div>
              </div>
              <div className="flex flex-col pt-1 gap-2.5">
                <label className="uppercase tracking-[0.08em] text-[#6B7280] font-['Inter',system-ui,sans-serif] font-semibold text-[11px]">I want to help with…</label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { label: "Canvassing", checked: true },
                    { label: "Phone / Texts", checked: false },
                    { label: "Yard Signs", checked: false },
                    { label: "Social Media", checked: false },
                    { label: "Host a House Party", checked: false },
                    { label: "Events & Rallies", checked: false },
                  ].map(({ label, checked }) => (
                    <div key={label} className="flex items-center rounded-md py-2.5 px-3.5 gap-2.5 bg-[#F9F8F6] border-[1.5px] border-[#E5E7EB]">
                      <div className={`w-[18px] h-[18px] shrink-0 flex items-center justify-center rounded-sm border-2 ${checked ? "bg-[#C8902A] border-[#C8902A]" : "bg-white border-[#E5E7EB]"}`}>
                        {checked && <span className="text-white text-xs">✓</span>}
                      </div>
                      <span className={`font-['Inter',system-ui,sans-serif] text-sm ${checked ? "text-[#0F2044]" : "text-[#374151]"}`}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="flex items-center justify-center mt-1 rounded-sm py-4.5 px-4.5 bg-[#C8902A] hover:opacity-90 transition-opacity">
                <span className="uppercase tracking-[0.08em] text-white font-['Inter',system-ui,sans-serif] font-bold text-sm">Count Me In</span>
              </button>
              <p className="text-[12px] text-center leading-[150%] text-[#9CA3AF] font-['Inter',system-ui,sans-serif] m-0">
                Your information is private and will never be sold.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
