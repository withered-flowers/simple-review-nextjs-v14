import Link, { type LinkProps } from "next/link";
import type { PropsWithChildren } from "react";

type CustomLinkProps = PropsWithChildren & LinkProps;

const CustomLink = (linkProps: CustomLinkProps) => {
  return (
    <Link
      className="underline text-blue-400 hover:text-blue-700 transition-colors duration-300"
      {...linkProps}
    >
      {linkProps.children}
    </Link>
  );
};

export default CustomLink;
