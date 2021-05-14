import {
  Layout,
  getMetadata,
  AltContact,
  Seo,
  Hero,
  Menu,
} from "@teefe/gatsby-theme-luden";
import React from "react";
import contactData from "../gatsby-theme-luden/data/contactData";
import menuData from "../gatsby-theme-luden/data/menuData";

const MenuPage = () => {
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
      <Seo title="Menu" />
      <Hero
        data={{
          //   topTitle: "Its Easy!",
          title: "Menu",
          image: "about",
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
      <Menu
        data={menuData}
        shadow="true"
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

export default MenuPage;
