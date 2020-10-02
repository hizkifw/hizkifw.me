import React from "react";
import styled from "styled-components";

type IconLinkProps = {
  src: string;
  alt: string;
  href: string;
};

const IconImage = styled.img`
  width: 2rem;
  height: 2rem;
`;

const IconLink = (props: IconLinkProps) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer noopener nofollow"
      style={{ marginRight: "1rem" }}
    >
      <IconImage {...props} />
    </a>
  );
};

export default IconLink;
