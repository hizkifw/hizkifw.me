import React from "react";

type IconLinkProps = {
  src: string;
  alt: string;
  href: string;
};

const IconLink = (props: IconLinkProps) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer noopener nofollow"
      className="mr-4"
    >
      <img
        className="w-8 h-8 transition duration-200 opacity-75 hover:opacity-100"
        {...props}
      />
    </a>
  );
};

export default IconLink;
