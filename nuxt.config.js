module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Softeq Lab",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "SofteqLab" }
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
          "https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&amp;subset=cyrillic"
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
    { src: "~/plugins/mdField.js" }
  ],
  css: ["aos/dist/aos.css", "vue-material/dist/vue-material.min.css"]
};
