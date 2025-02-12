import * as React from "react";
import Link from "next/link";

const footerSections = [
  {
    title: "LEGAL",
    links: [
      { name: "Terms of Use", link: "/terms-of-use" }, // This link has a valid URL
      { name: "Privacy Policies", link: "/privacy-policy" }, // Empty link for now
      { name: "Contact Us", link: "/contact-us" }, // Empty link for now
    ],
  },
  {
    title: "COMMUNITY",
    links: [
      { name: "DAO & Governance", link: "" },
      { name: "Investor Relations", link: "" },
      { name: "Press Releases", link: "" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { name: "articles", link: "" },
      { name: "Whitepaper", link: "" },
      { name: "Brandkit", link: "" },
    ],
  },
];

export const FooterLinks: React.FC = () => {
  return (
    <div className="flex gap-5 md:gap-10 items-start text-sm tracking-wide leading-none text-white mt-5 md:mt-0 w-full md:w-initial justify-evenly md:justify-start">
      {footerSections.map((section, index) => (
        <div key={index} className="flex flex-col self-stretch">
          <div className="text-base font-bold uppercase tracking-[2.56px] font-advent-pro">
            {section.title}
          </div>
          {section.links.map((link, linkIndex) => (
            <Link href={link.link || "#"} key={linkIndex} className="mt-3.5">
              {link.name}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};
