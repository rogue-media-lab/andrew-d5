import { ReactNode } from "react";

const issues = [
  {
    title: "Economy & Jobs",
    description:
      "Cut costs for working families and grow good-paying jobs right here in District 5 — not shipped overseas.",
    icon: (
      <path
        d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
        fill="#C8902A"
      />
    ),
  },
  {
    title: "Healthcare",
    description:
      "Protect and improve healthcare access for every family in District 5, including mental health services and veterans care.",
    icon: (
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
        fill="#C8902A"
      />
    ),
  },
  {
    title: "Skills & Infrastructure",
    description:
      "Invest in job training, small business growth, and modern infrastructure that moves SC-5 forward.",
    icon: (
      <path
        d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3ZM5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"
        fill="#C8902A"
      />
    ),
  },
  {
    title: "Public Safety",
    description:
      "Keep our communities safe while building the trust between law enforcement and neighbors that makes it possible.",
    icon: (
      <path
        d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"
        fill="#C8902A"
      />
    ),
  },
  {
    title: "Accountability",
    description:
      "Clean, transparent government that puts people first — not party bosses, not special interests, not political games.",
    icon: (
      <path
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        stroke="#C8902A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

function IssueCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-lg py-10 px-9 bg-white border-t-4 border-t-[#C8902A] border-t-solid">
      <div className="flex items-center justify-center mb-6 rounded-md bg-[#0F2044] size-12 shrink-0">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {icon}
        </svg>
      </div>
      <h3 className="text-[#0F2044] font-['Playfair_Display',system-ui,sans-serif] font-bold text-2xl leading-[30px] mb-3">
        {title}
      </h3>
      <p className="text-[#6B7280] font-['Inter',system-ui,sans-serif] text-sm leading-[180%] flex-1">
        {description}
      </p>
      <div className="flex items-center mt-5 gap-2">
        <div className="w-6 h-0.5 bg-[#C8902A] shrink-0" />
        <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-widest">
          Learn More
        </span>
      </div>
    </div>
  );
}

export default function Issues() {
  return (
    <section id="issues" className="bg-[#F5F4F1]">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto flex flex-col items-center pt-24 pb-10 px-8 md:px-20">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-0.5 bg-[#C8902A] shrink-0" />
          <span className="text-[#C8902A] font-['Inter',system-ui,sans-serif] font-semibold text-xs uppercase tracking-[0.15em]">
            The Issues
          </span>
          <div className="w-10 h-0.5 bg-[#C8902A] shrink-0" />
        </div>
        <h2 className="text-[#0F2044] font-['Playfair_Display',system-ui,sans-serif] font-bold text-[42px] md:text-[50px] leading-[110%] mb-4 text-center">
          What Andrew Stands For
        </h2>
        <p className="text-[#6B7280] font-['Inter',system-ui,sans-serif] text-[17px] leading-[170%] text-center max-w-[560px]">
          Five priorities. One mission. A District 5 that works for the people
          who live here.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-20 pb-24 flex flex-col gap-6">
        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {issues.slice(0, 3).map((issue) => (
            <IssueCard key={issue.title} {...issue} />
          ))}
        </div>
        {/* Row 2 — 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-[846px] md:mx-auto md:w-full">
          {issues.slice(3).map((issue) => (
            <IssueCard key={issue.title} {...issue} />
          ))}
        </div>
      </div>
    </section>
  );
}
