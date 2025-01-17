import * as React from "react";
import { FooterLinkProps } from "./types";

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
    <div className="flex gap-10 items-start text-sm tracking-wide leading-none text-white max-md:mt-10">
      {footerSections.map((section, index) => (
        <div key={index} className="flex flex-col self-stretch">
          <div className="text-base font-bold uppercase tracking-[2.56px]">{section.title}</div>
          {section.links.map((link, linkIndex) => (
            <div key={linkIndex} className="mt-3.5">
              {link}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
