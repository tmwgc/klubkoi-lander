import * as React from "react";
import Link from "next/link";

interface NavLinkProps {
  text: string;
  link:string
}

const NavLink: React.FC<NavLinkProps> = ({ text,link }) => {
  return (
    <Link href={link} className="text-sm font-medium text-white text-center">
      {text}
    </Link>
  );
};

export default NavLink;
