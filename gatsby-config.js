const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Luden`,
    seoTitle: `Luden is a great theme`,
    description: `Luden is a great theme`,
    author: `@tsaristbomba`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    image: "/june.png",
    logo: "logo.svg",
    form: false,
    svgImgs: true,
    attach: false,
    anchorLinks: false,
    scrollBtn: true,
    icons: true,
    wave: true,
    triangle: false,
    curve: false,
    tilt: false,
    themes: {
      light: {
        title: "light",
        colors: {
          primary: "#FFA729", // Brand color
          primaryDark: "#B36900",
          primaryLight: "#D8D6D6", // H
          secondary: "#B36900",
          secondaryLight: "#FFA729",
          neutralDark: "#2d2d2d", // Text color
          neutralMedium: "#D8D6D6", // Heavier medium (gotta be gray)
          neutralLight: "#fff", // bg color
        },
      },
      dark: {
        title: "dark",
        colors: {
          primary: "#B36900", // Brand color
          primaryDark: "#FFA729",
          primaryLight: "#484848", // H
          secondary: "#FFA729",
          secondaryLight: "#B36900",
          neutralDark: "#fff", // Text color
          neutralMedium: "#777777", // Heavier medium (gotta be gray)
          neutralLight: "#2d2d2d", // bg color
        },
      },
    },
    footerLinks: [
      {
        title: "Learn About Us",
        links: [
          { title: "About", slug: "#About" },
          {
            title: "Services",
            slug: "#Services",
          },
          { title: "Team", slug: "#Team" },
          { title: "Contact", slug: "#Contact" },
          { title: "Plans", slug: "#Plans" },
          { title: "Newsletter", slug: "#Banner" },
        ],
      },
      {
        title: "Legal",
        links: [
          { title: "Terms & Conditions", slug: "terms-conditions" },
          { title: "Privacy Policy", slug: "privacy-policy" },
        ],
      },
    ],
    navLinks: [
      {
        name: "About Us",
        slug: "about",
      },
      {
        name: "Services",
        slug: "services",
      },
      {
        name: "Why Us",
        slug: "why-us",
      },
    ],
    socials: [
      { title: "INSTAGRAM", link: "https://instagram.com/archilect" },
      { title: "YOUTUBE", link: "https://youtube.com/pewdiepie" },
      { title: "TWITTER", link: "https://twitter.com/naval" },
      { title: "WHATSAPP", link: "https://twitter.com/naval" },
    ],
    social: {
      github: `tsaristbomba`,
      twitter: ``,
    },
  },
  plugins: [
    { resolve: "@teefe/gatsby-theme-luden", options: {} },
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FFA729`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        lang: `pt-br`,
      },
    },
  ],
};
