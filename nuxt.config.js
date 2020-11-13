module.exports = {
  generate: {
    routes: [
      "/services/ERP",
      "/services/software-development",
      "/services/software-development/web&mobile",
      "/services/software-development/enterprise-software",
      "/services/ERP/CRM",
      "/services/ERP/R&D",
      "/services/ERP/MRP-APS-MES",
      "/services/ERP/Сontrolling",
      "/services/ERP/EAM",
      "/services/ERP-системы/WMS-TMS-PMS-SCM",
      "/services/ERP/FI",
      "/services/ERP/BPM",
      "/services/ERP/PM"
    ]
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "Softeq Lab",
<<<<<<< HEAD
    htmlAttrs: {
      lang: "ru",
      prefix: "og: http://ogp.me/ns#"
    },
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Компания “Софтек Лаб” - системный интегратор, разработчик ПО, поставщик ИТ-решений и услуг для корпоративного сектора"
      },
      {
        property: "og:site_name",
        content: "SofteqLab"
      },
      {
        property: "og:title",
        content: "Компания “Софтек Лаб”"
      },
      {
        property: "og:image",
        content: "https://softeqlab.by/logo-og1.png"
      },
      {
        property: "og:description",
        content:
          "Компания “Софтек Лаб” - системный интегратор, разработчик ПО, поставщик ИТ-решений и услуг для корпоративного сектора"
      }
=======
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "SofteqLab" }
>>>>>>> 4490a6bf788ee8d38e153acedbab535e4e8312a8
    ],
    link: [
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "mask-icon", color: "#5bbad5", href: "/safari-pinned-tab.svg" },
      { rel: "msapplication-TileColor", content: "#2d89ef" },
      { rel: "theme-color", content: "#ffffff" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?display=swap&family=Open+Sans:300,400,700,800&amp;subset=cyrillic"
      }
    ]
    // script: [
    //   {
    //     src:
    //       "https://maps.googleapis.com/maps/api/js?key=AIzaSyDkZ31OP5YO8_dbtGhslxw7zDdlTDVIvHk&callback=initMap"
    //   }
    // ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#0cb3f0" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    vendor: ["aos"]
  },
  plugins: [
    { src: "~/plugins/aos", ssr: false },
<<<<<<< HEAD
    { src: "~/plugins/mdField.js" },
    { src: "~/plugins/vue-scrollto.js" }
=======
    { src: "~/plugins/mdField.js" }
>>>>>>> 4490a6bf788ee8d38e153acedbab535e4e8312a8
  ],
  css: ["aos/dist/aos.css", "vue-material/dist/vue-material.min.css"]
};
