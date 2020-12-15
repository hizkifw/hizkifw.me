import React from "react";
import Head from "next/head";
import HeroSlide from "./slides/HeroSlide";
// import ShowcaseSlide from "./slides/ShowcaseSlide";

const LandingPage = () => {
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
      <div className="bg-gradient-to-tr from-gray-700 to-gray-500">
        <HeroSlide />
        {/*<ShowcaseSlide />*/}
      </div>
    </>
  );
};

export default LandingPage;
