<template>
  <main class="inner-page">
    <div class="inner-page_wrapper">
      <div class="inner-page_big-title" data-aos="zoom-out" data-aos-delay="500">Услуги</div>
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
            >We will build a new medium that will redefine and enhance the nature of spoken information.</p>
          </div>

          <div class="inner-page_content-main inner-page-services">
            <div class="inner-page_content-main-wrapper">
              <img src="~static/servicesImg.png" alt="servieses">
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

export default {
  components: {
    Breadcrumbs,
    BaseLink
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
          text: "Услуги",
          link: "/services",
          delay: "1800"
        },
        {
          text: `Услуга номер ${this.$route.params.id}`,
          link: null,
          delay: "2000"
        }
      ],
      servicesList: [
        {
          title: "СИСТЕМА АВТОМАТИЗАЦИИ",
          subtitle:
            "We will build a new medium that will redefine and enhance the nature of spoken information",
          link: "/services/1",
          delay: "400"
        },
        {
          title: "СИСТЕМА ВЕНТИЛЯЦИИ",
          subtitle:
            "We will build a new medium that will redefine and enhance the nature of spoken information",
          link: "/services/2",
          delay: "500"
        },
        {
          title: "СИСТЕМА ПЕРСОНАЛИЗАЦИИ",
          subtitle:
            "We will build a new medium that will redefine and enhance the nature of spoken information",
          link: "/services/3",
          delay: "600"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>