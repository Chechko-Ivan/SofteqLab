<template>
  <main class="inner-page">
    <div class="inner-page_wrapper">
      <div class="inner-page_big-title" data-aos="zoom-out" data-aos-delay="500">Услуги</div>
      <div class="inner-page_header">
        <breadcrumbs :crumbsList="breadcrumbs"></breadcrumbs>
        <!-- <div class="inner-page_main-title-wrapper">
          <div class="inner-page_main-title-decor" data-aos="fade-right" data-aos-delay="100"></div>
          <h1
            class="inner-page_main-title"
            data-aos="zoom-out-left"
            data-aos-delay="150"
          >КАКОЙ-ТО ЧЕТКИЙ ЗАГОЛОВОК ОБ УСЛУГЕ ИЛИ ДАННОМ РАЗДЕЛЕ</h1>
        </div>-->
      </div>

      <div class="inner-page_content">
        <div class="inner-page_content_scroll">
          <div class="inner-page_content-header">
            <p
              class="inner-page_content-header-text"
              data-aos="zoom-out-left"
              data-aos-delay="250"
              v-for="(text, index) in topText"
              :key="index"
            >{{text}}</p>
          </div>

          <div class="inner-page_content-main inner-page-services">
            <div class="inner-page_content-main-wrapper">
              <ul class="inner-page-services_list">
                <li
                  :class="['inner-page-services_item', {'no-active' : !service.isActive}]"
                  v-for="(service, index) in servicesList"
                  :key="index"
                  data-aos="zoom-out"
                  :data-aos-delay="service.delay"
                  data-aos-offset="-5000"
                >
                  <nuxt-link
                    class="inner-page-services_item-link"
                    :to="service.isActive ? service.link : ''"
                  >
                    <div class="inner-page-services_item-left">
                      <h3 class="inner-page-services_item-title">{{service.title}}</h3>
                      <span class="inner-page-services_item-subtitle">{{service.subtitle}}</span>
                    </div>
                    <div class="inner-page-services_item-right">
                      <span>
                        <span class="fake-link">Подробнее</span>
                        <!-- <base-link :url="service.link" text="Подробнее"></base-link> -->
                      </span>
                    </div>
                  </nuxt-link>
                </li>
              </ul>
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
import { mapState } from "vuex";

export default {
  components: {
    Breadcrumbs,
    BaseLink
  },

  props: {
    content: {
      type: [Array, Object]
    }
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
          text: `${this.$route.params.category}`,
          link: null,
          delay: "2000"
        }
      ],
      topText: [],
      servicesList: []
    };
  },

  computed: {
    ...mapState({
      subCategories: state => state.services
    })
  },

  mounted() {
    if (this.$route.params.category === "ERP") {
      this.topText = this.subCategories.services1.text;
      this.servicesList = this.subCategories.services1.subServices;
    }
    if (this.$route.params.category === "software-development") {
      this.topText = this.subCategories.services2.text;
      this.servicesList = this.subCategories.services2.subServices;
    }
  }
};
</script>