import * as React from "react";
import { FooterLinkProps } from "./types";
import Link from "next/link";

const footerSections: FooterLinkProps[] = [
  {
    title: "LEGAL",
    links: ["Terms of Use", "Privacy Policies", "Contact Us"],
  },
  {
    title: "COMMUNITY",
    links: ["DAO & Governance", "Investor Relations", "Press Releases"],
  },
  {
    title: "RESOURCES",
    links: ["articles", "Whitepaper", "Brandkit"],
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
            <Link href="/" key={linkIndex} className="mt-3.5">
              {link}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};
