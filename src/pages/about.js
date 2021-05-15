import React from "react";
import {
  getMetadata,
  About,
  AltContact,
  Seo,
  Hero,
  Gallery,
  // Team,
  Layout,
} from "@teefe/gatsby-theme-luden";
import aboutData from "../gatsby-theme-luden/data/aboutData";
import galleryData from "../gatsby-theme-luden/data/galleryData";
import contactData from "../gatsby-theme-luden/data/contactData";
// import teamData from "../gatsby-theme-luden/data/teamData";

const AboutPage = () => {
  const form = getMetadata().meta.siteMetadata.form;
  const svgImgs = getMetadata().meta.siteMetadata.svgImgs;
  const attach = getMetadata().meta.siteMetadata.attach;
  const anchor = getMetadata().meta.siteMetadata.anchor;
  const wave = getMetadata().meta.siteMetadata.wave;
  const triangle = getMetadata().meta.siteMetadata.triangle;
  const tilt = getMetadata().meta.siteMetadata.tilt;
  const curve = getMetadata().meta.siteMetadata.curve;

  return (
    <Layout
      anchor={anchor}
      // transparent
      frosted
      light
      sticky
      rounded="true"
    >
      <Seo title="About" />
      <Hero
        data={{
          //   topTitle: "Its Easy!",
          title: aboutData.small,
          // image: "about",
        }}
        // full={!svgImgs}
        // bg
        short
        // svg={svgImgs}
        attach={attach}
        center
        // small
        //   rounded="true"
        //   anchor={hero.anchor}
      />
      <About
        anchor
        data={aboutData}
        rounded="true"
        shadow="true"
        tilt={tilt}
        wave={wave}
        curve={curve}
        triangle={triangle}
      />
      <Gallery
        data={galleryData}
        rounded="true"
        button
        items={6}
        bg
        thick
        tilt={tilt}
        wave={wave}
        curve={curve}
        triangle={triangle}
      />
      {/* <Team
        data={teamData}
        rounded="true"
        shadow="true"
        tilt={tilt}
        wave={wave}
        curve={curve}
        triangle={triangle}
      /> */}
      {form ? (
        <AltContact
          data={contactData}
          image={!svgImgs}
          rounded="true"
          attach={contactData.attach}
          thick
          form
          svgImgs={svgImgs}
        />
      ) : (
        <AltContact
          data={contactData}
          image={!svgImgs}
          rounded="true"
          attach={attach}
          thick
          svgImgs={svgImgs}
          tilt={tilt}
          wave={wave}
          curve={curve}
          triangle={triangle}
        />
      )}
    </Layout>
  );
};

export default AboutPage;
