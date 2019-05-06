<template>
  <main class="inner-page">
    <div class="inner-page_wrapper">
      <div class="inner-page_big-title" data-aos="zoom-out" data-aos-delay="500">Обратная связь</div>
      <div class="inner-page_header">
        <breadcrumbs :crumbsList="breadcrumbs"></breadcrumbs>
        <div class="inner-page_main-title-wrapper">
          <div class="inner-page_main-title-decor" data-aos="fade-right" data-aos-delay="100"></div>
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
          </div>

          <div class="inner-page_content-main inner-page-feedback">
            <div class="inner-page_content-main-wrapper">
              <base-form></base-form>
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
import BaseForm from "~/components/BaseForm";

export default {
  components: {
    Breadcrumbs,
    BaseLink,
    BaseForm
  },
  data() {
    return {
      breadcrumbs: [
        {
          text: "На главную",
          link: "/",
          delay: "1600"
        },
        {
          text: "Обратная связь",
          link: null,
          delay: "1800"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/_colors.scss";
@import "~/assets/scss/_function.scss";
@import "~/assets/scss/_breakpoint.scss";
</style>
