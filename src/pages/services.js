import React from "react";
import iconGridData from "../gatsby-theme-luden/data/iconGridData";
import servicesData from "../gatsby-theme-luden/data/servicesData";
import {
  getMetadata,
  Seo,
  Hero,
  IconGrid,
  Layout,
  Services,
  AltContact,
  Faq,
} from "@teefe/gatsby-theme-luden";
import contactData from "../gatsby-theme-luden/data/contactData";
import faqData from "../gatsby-theme-luden/data/faqData";

const ServicesPage = () => {
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
      <Seo title="About" />
      <Hero
        data={{
          //   topTitle: "Its Easy!",
          title: servicesData.small,
          image: "serv1",
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
      <IconGrid
        smallP
        data={iconGridData}
        tilt={tilt}
        wave={wave}
        curve={curve}
        triangle={triangle}
      />
      <Services
        data={servicesData}
        box
        large
        shadow="true"
        rounded="true"
        tilt={tilt}
        wave={wave}
        curve={curve}
        triangle={triangle}
      />
      <Faq data={faqData} center />
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

export default ServicesPage;
