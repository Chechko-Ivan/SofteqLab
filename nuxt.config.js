module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "softeqlab",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&amp;subset=cyrillic"
      }
    ]
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
  plugins: [{ src: "~/plugins/aos", ssr: false }],
  css: ["aos/dist/aos.css"]
};
