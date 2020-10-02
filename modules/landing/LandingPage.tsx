import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Container from "./components/Container";
import FullscreenStacker from "./components/FullscreenStacker";
import IconLink from "./components/IconLink";
import StackLayer from "./components/StackLayer";

const FullscreenImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s;
  filter: blur(10px);
  transform: scale(1.1);
`;

const Pretitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  margin-left: -0.1em;
  font-weight: 400;
  color: #fff;
  font-size: 2rem;
  opacity: 0.75;
`;

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  margin-left: -0.1em;
  font-weight: 700;
  color: #fff;
  font-size: 4rem;
`;

const Tagline = styled.p`
  font-family: "Lato", sans-serif;
  margin-left: -0.1em;
  font-weight: 400;
  color: #fff;
  font-size: 1.2rem;
  opacity: 0.75;
  margin-top: 1rem;
`;

const LandingPage = () => {
  const backgroundImageRef = React.useRef<HTMLImageElement>(null);
  const [backgroundOpacity, setBackgroundOpacity] = React.useState(0);
  const [emailAddress, setEmailAddress] = React.useState("");

  React.useEffect(() => {
    // Obfuscate email address to prevent scraping
    setEmailAddress(
      Buffer.from("bWFpbHRvOmNvbnRhY3RAaGl6a2lmdy5tZQ==", "base64").toString()
    );
    if (backgroundImageRef.current?.complete) setBackgroundOpacity(1);
  }, []);

  return (
    <>
      <Head>
        <title>Hizkia Felix</title>
      </Head>
      <FullscreenStacker>
        <StackLayer style={{ backgroundColor: "#000" }}>
          <FullscreenImage
            ref={backgroundImageRef}
            src="https://i.imgur.com/spPwj07.jpg"
            style={{ opacity: backgroundOpacity }}
            onLoad={() => setBackgroundOpacity(1)}
          />
        </StackLayer>
        <StackLayer>
          <Container
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <div>
              <Pretitle>Hello. I'm</Pretitle>
              <Title>Hizkia Felix.</Title>
              <Tagline>I do software and web development.</Tagline>
              <div style={{ marginTop: "1rem" }}>
                <IconLink
                  src="/static/icons/github.svg"
                  alt="GitHub"
                  href="https://github.com/HizkiFW"
                />
                <IconLink
                  src="/static/icons/linkedin.svg"
                  alt="LinkedIn"
                  href="https://www.linkedin.com/in/hizkifw/"
                />
                <IconLink
                  src="/static/icons/envelope.svg"
                  alt="Email"
                  href={emailAddress}
                />
              </div>
            </div>
          </Container>
        </StackLayer>
      </FullscreenStacker>
    </>
  );
};

export default LandingPage;
