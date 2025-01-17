import * as React from "react";
import Link from "next/link";

interface NavLinkProps {
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text }) => {
  return (
    <Link href="/" className="text-sm text-center">
      {text}
    </Link>
  );
};

export default NavLink;
