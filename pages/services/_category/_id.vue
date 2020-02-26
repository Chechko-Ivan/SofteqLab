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

      <div v-if="type === 1" class="inner-page_content">
        <div class="inner-page_content_scroll">
          <div class="inner-page_content-header">
            <p
              class="inner-page_content-header-text"
              data-aos="zoom-out-left"
              data-aos-delay="250"
            >{{content.message}}</p>
          </div>

          <div class="inner-page_content-list">
            <p
              class="inner-page_content-header-text"
              data-aos="zoom-out-left"
              data-aos-delay="250"
            >Какие вопросы решает внедрение модуля:</p>
            <ul>
              <li v-for="(item, index) in content.resolvedIssues" :key="index">{{ item }}</li>
            </ul>

            <p
              class="inner-page_content-header-text"
              data-aos="zoom-out-left"
              data-aos-delay="250"
              data-aos-offset="-300"
            >Структурные компоненты:</p>
            <ul>
              <li v-for="(item, index) in content.structuralComponents" :key="index">{{ item }}</li>
            </ul>
          </div>

          <!-- <div class="inner-page_content-main inner-page-services">
            <div class="inner-page_content-main-wrapper">
              <img src="~static/servicesImg.png" alt="servieses">
            </div>
          </div>-->
        </div>
      </div>

      <div v-if="type === 2" class="inner-page_content">
        <div class="inner-page_content_scroll">
          <div class="inner-page_content-list">
            <div
              class="inner-page_content-list-item type-2"
              v-for="(item, index) in content"
              :key="index"
            >
              <h3>{{ item.projectName }}</h3>
              <p>{{ item.projectDesc.text}}</p>
              <ul>
                <li v-for="(item, index) in item.projectDesc.list" :key="index">{{ item }}</li>
              </ul>
              <p class="label">Стэк:</p>
              <p class="stack">{{ item.stack }}</p>
            </div>
          </div>

          <!-- <div class="inner-page_content-main inner-page-services">
            <div class="inner-page_content-main-wrapper">
              <img src="~static/servicesImg.png" alt="servieses">
            </div>
          </div>-->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Breadcrumbs from "~/components/Breadcrumbs";
import BaseLink from "~/components/BaseLink";
// import { mapState } from "vuex";

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
          text: `${this.$route.params.category}`,
          link: `/services/${this.$route.params.category}`,
          delay: "2000"
        },
        {
          text: `${this.$route.params.id}`,
          link: null,
          delay: "2200"
        }
      ],
      type: null,
      content: {}
    };
  },

  computed: {
    // ...mapState({
    //   subCategories: state => state.services
    // })
    subCategories() {
      return this.$store.state.services;
    }
  },

  mounted() {
    // First Services
    if (this.$route.params.id === "CRM") {
      this.type = this.subCategories.services1.type;
      this.content = this.subCategories.services1.subServices[0].content;
    }
    if (this.$route.params.id === "R&D") {
      this.type = this.subCategories.services1.type;
      this.content = this.subCategories.services1.subServices[1].content;
    }
    if (this.$route.params.id === "MRP-APS-MES") {
      this.type = this.subCategories.services1.type;
      this.content = this.subCategories.services1.subServices[2].content;
    }
    if (this.$route.params.id === "Сontrolling") {
      this.type = this.subCategories.services1.type;
      this.content = this.subCategories.services1.subServices[3].content;
    }
    if (this.$route.params.id === "EAM") {
      this.type = this.subCategories.services1.type;
      this.content = this.subCategories.services1.subServices[4].content;
    }
    if (this.$route.params.id === "WMS-TMS-PMS-SCM") {
      this.type = this.subCategories.services1.type;
      this.content = this.subCategories.services1.subServices[5].content;
    }
    if (this.$route.params.id === "FI") {
      this.type = this.subCategories.services1.type;
      this.content = this.subCategories.services1.subServices[6].content;
    }
    if (this.$route.params.id === "BPM") {
      this.type = this.subCategories.services1.type;
      this.content = this.subCategories.services1.subServices[7].content;
    }
    if (this.$route.params.id === "PM") {
      this.type = this.subCategories.services1.type;
      this.content = this.subCategories.services1.subServices[8].content;
    }

    // Second Services
    if (this.$route.params.id === "web&mobile") {
      this.type = this.subCategories.services2.type;
      this.content = this.subCategories.services2.subServices[0].content;
    }

    if (this.$route.params.id === "enterprise-software") {
      this.type = this.subCategories.services2.type;
      this.content = this.subCategories.services2.subServices[1].content;
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/_colors.scss";
@import "~/assets/scss/_function.scss";

.inner-page_content-list {
  .inner-page_content-header-text {
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 700;

    &:not(:first-of-type) {
      margin-top: 20px;
    }
  }

  ul > li {
    text-align: justify;
  }
}

.inner-page_content-list-item.type-2 {
  margin-bottom: 15px;
  text-align: justify;
  h3 {
    color: $text-lighter;
    margin-bottom: 5px;
  }
}
</style>