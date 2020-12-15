import React from "react";
import IconLink from "../components/IconLink";

const HeroSlide = () => {
  const [emailAddress, setEmailAddress] = React.useState("");

  React.useEffect(() => {
    // Obfuscate email address to prevent scraping
    setEmailAddress(
      Buffer.from("bWFpbHRvOmNvbnRhY3RAaGl6a2lmdy5tZQ==", "base64").toString()
    );
  }, []);

  return (
    <div className="relative w-full h-screen">
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
                src="/static/icons/writedown.svg"
                alt="Blog"
                href="https://writedown.io/@hizkifw"
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
  );
};

export default HeroSlide;
