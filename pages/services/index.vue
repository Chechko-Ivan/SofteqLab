<template>
  <main class="inner-page">
    <div class="inner-page_wrapper">
      <!-- <span class="inner-page_big-title">Кто мы</span> -->
      <div class="inner-page_header">
        <breadcrumbs></breadcrumbs>
        <div class="inner-page_main-title-wrapper">
          <div class="inner-page_main-title-decor"></div>
          <h1
            class="inner-page_main-title"
            data-aos="zoom-out-left"
            data-aos-delay="150"
          >КАКОЙ-ТО ЧЕТКИЙ ЗАГОЛОВОК ОБ УСЛУГЕ ИЛИ ДАННОМ РАЗДЕЛЕ</h1>
        </div>
      </div>

      <div class="inner-page_content">
        <div class="inner-page_content_scroll">
          <div class="inner-page_content-header">
            <p
              class="inner-page_content-header-text"
              data-aos="zoom-out-left"
              data-aos-delay="250"
            >We will build a new medium that will redefine and enhance the nature of spoken information, education, entertainment, and other modes of verbal expression we will help create ourselves.</p>
            <address
              class="inner-page_content-header-author"
              data-aos="zoom-out-left"
              data-aos-delay="300"
            >DON KATZ, FOUNDER AND CEO, AUDIBLE JULY 30, 1996</address>
            <div class="inner-page_content-header_link">
              <base-link url="/" text="Услуги" data-aos="zoom-in" data-aos-delay="550"></base-link>
              <base-link url="/" text="Обратная связь" data-aos="zoom-in" data-aos-delay="650"></base-link>
            </div>
          </div>

          <div class="inner-page_content-main inner-page_content-main--about">
            <div class="inner-page_content-main-wrapper">
              <div class="inner-page-about_left">
                <h2 class="inner-page-about-title">
                  <div class="inner-page_main-title-decor"></div>
                  <span>НАША ПРОДУКЦИЯ</span>
                  КАЧЕСТВО
                </h2>
                <p
                  class="inner-page_content-header-text"
                >We will build a new medium that will redefine and enhance the nature of spoken information, education, entertainment, and other modes of verbal expression we will help create ourselves.</p>
                <address
                  class="inner-page_content-header-author"
                >DON KATZ, FOUNDER AND CEO, AUDIBLE JULY 30, 1996</address>
              </div>

              <div class="inner-page-about_right">
                <div
                  class="inner-page-about_preview"
                  :style="`background-image: url(${aboutImage});`"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Breadcrumbs from "~/components/Breadcrumbs";
import BaseLink from "~/components/BaseLink";
import aboutImage from "~/static/contentImg/ImageAbout.png";
export default {
  components: {
    Breadcrumbs,
    BaseLink
  },
  data() {
    return {
      aboutImage
    };
  }
};
</script>

<style lang="scss">
</style>
