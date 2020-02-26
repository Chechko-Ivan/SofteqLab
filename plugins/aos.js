import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = new AOS.init({
    disable: "phone",
    offset: -20000,
    once: true
  });
};
