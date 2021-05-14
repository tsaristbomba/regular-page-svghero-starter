import React from "react";
// import Layout from "gatsby-theme-luden/src/components/Layout";
import {
  getMetadata,
  About,
  AltContact,
  Seo,
  Hero,
  IconGrid,
  Layout,
} from "@teefe/gatsby-theme-luden";
import aboutData from "../gatsby-theme-luden/data/aboutData";
import contactData from "../gatsby-theme-luden/data/contactData";
import iconGridData from "../gatsby-theme-luden/data/iconGridData";

const WhyPage = () => {
  const form = getMetadata().meta.siteMetadata.form;
  const svgImgs = getMetadata().meta.siteMetadata.svgImgs;
  const attach = getMetadata().meta.siteMetadata.attach;
  const anchor = getMetadata().meta.siteMetadata.anchor;
  const wave = getMetadata().meta.siteMetadata.wave;
  const triangle = getMetadata().meta.siteMetadata.triangle;
  const tilt = getMetadata().meta.siteMetadata.tilt;
  const curve = getMetadata().meta.siteMetadata.curve;

  return (
    <Layout anchor={anchor} transparent light sticky rounded="true">
      <Seo title="Why" />
      <Hero
        data={{
          //   topTitle: "Its Easy!",
          title: "Why Us?",
          image: "serv2",
        }}
        // full={!svgImgs}
        bg
        // svg={svgImgs}
        attach={attach}
        center
        small
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
      <IconGrid
        thick
        smallP
        data={iconGridData}
        tilt={tilt}
        wave={wave}
        curve={curve}
        triangle={triangle}
      />
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

export default WhyPage;
