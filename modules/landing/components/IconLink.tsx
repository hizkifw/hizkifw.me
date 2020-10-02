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

  transition: opacity 0.2s;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
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
