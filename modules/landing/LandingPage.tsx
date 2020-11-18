import React from "react";
import Head from "next/head";
import IconLink from "./components/IconLink";

const LandingPage = () => {
  const backgroundImageRef = React.useRef<HTMLImageElement>(null);
  const [backgroundHidden, setBackgroundHidden] = React.useState(true);
  const [emailAddress, setEmailAddress] = React.useState("");

  React.useEffect(() => {
    // Obfuscate email address to prevent scraping
    setEmailAddress(
      Buffer.from("bWFpbHRvOmNvbnRhY3RAaGl6a2lmdy5tZQ==", "base64").toString()
    );
    setBackgroundHidden(!backgroundImageRef.current?.complete);
  }, []);

  return (
    <>
      <Head>
        <title>Hizkia Felix</title>
        <meta property="og:title" content="Hizkia Felix" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hizkifw.me" />
        <meta
          property="og:image"
          content="https://hizkifw.me/static/images/banner.png"
        />
        <meta
          property="og:description"
          content="Just another personal landing page."
        />
        <meta name="theme-color" content="#000000" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://hizkifw.me" />
        <meta name="twitter:title" content="Hizkia Felix" />
        <meta
          property="twitter:description"
          content="Just another personal landing page."
        />
        <meta
          name="twitter:image"
          content="https://hizkifw.me/static/images/banner.png"
        />
      </Head>
      <div className="relative w-screen h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-full h-full object-cover transform scale-110 filter-blur-10"
            ref={backgroundImageRef}
            src="https://i.imgur.com/spPwj07.jpg"
            onLoad={() => setBackgroundHidden(false)}
          />
        </div>
        <div
          className={
            "absolute inset-0 overflow-hidden transition duration-500 bg-black " +
            (backgroundHidden ? "" : "opacity-0")
          }
        />
        <div className="absolute inset-0 overflow-hidden">
          <div className="container px-8 max-w-screen-lg mx-auto h-full flex flex-col justify-center items-start">
            <div>
              <h2 className="font-heading text-white text-opacity-75 text-3xl -ml-01e">
                Hello. I'm
              </h2>
              <h1 className="font-heading text-white text-6xl font-bold -ml-01e">
                Hizkia Felix.
              </h1>
              <p className="font-sans text-white text-opacity-75 -ml-01e text-xl mt-4">
                I do software and web development.
              </p>
              <div className="flex flex-row mt-4">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
