<template>
  <div class="page">
    <div class="page_wrapper">
      <aside class="page_navigation">
        <div class="page_navigation-wrapper">
          <navigation :linkData="$route.params.id ? servicesNavigation : currentNavigation"></navigation>
          <span class="page_navigation_contact-box">
            <div data-aos="zoom-out" data-aos-delay="500">
              <h2
                class="page_navigation_title"
              >КАКОЙ-ТО ЧЕТКИЙ ЗАГОЛОВОК ОБ УСЛУГЕ ИЛИ ДАННОМ РАЗДЕЛЕ</h2>
            </div>

            <fast-contacts></fast-contacts>
          </span>
        </div>
      </aside>
      <section class="page_content">
        <div class="page_content_wrapper">
          <div class="page_content-line"></div>
          <nuxt/>
        </div>
      </section>
      <a href="https://maksis.by" target="_blank" class="copyright">
        Разработано в &nbsp;
        <img :src="copyrightImg" alt="Maksis Digital Agency Logo">&nbsp;
        <strong>maksis digital agency</strong>
      </a>
    </div>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation";
import FastContacts from "~/components/FastContacts";
import copyrightImg from "~/static/logo_maksis.png";

export default {
  components: { Navigation, FastContacts },
  data() {
    return {
      copyrightImg,
      currentNavigation: [
        {
          text: "О нас",
          url: "/",
          delay: "1050"
        },
        {
          text: "Услуги",
          url: "/services",
          delay: "1250"
        },
        {
          text: "Обратная связь",
          url: "/feedback",
          delay: "1450"
        },
        {
          text: "Контакты",
          url: "/contacts",
          delay: "1650"
        }
      ],
      servicesNavigation: [
        {
          text: "Услуга 1",
          url: "/services/1",
          delay: "1050"
        },
        {
          text: "Услуга 2",
          url: "/services/2",
          delay: "1250"
        },
        {
          text: "Услуга 4",
          url: "/services/4",
          delay: "1450"
        },
        {
          text: "Услуга 3",
          url: "/services/3",
          delay: "1650"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

html {
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  height: 100%;
  background-color: #fdfdfd;
}

img {
  width: 100%;
  height: auto;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.md-menu-content.md-select-menu {
  background-color: #ffffff !important;
}

.md-menu.md-select {
  border-bottom: 1px solid #898989;
}

.md-field.md-focused label,
.md-field.md-has-value label {
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #898989;
}

@import "~/assets/scss/_colors.scss";
@import "~/assets/scss/_function.scss";
@import "~/assets/scss/_breakpoint.scss";

.page {
  &_wrapper {
    position: relative;
    height: 100vh;
    display: flex;

    @media (max-width: $screen-lg) {
      height: auto;
      flex-direction: column;
      align-items: center;
    }
  }

  &_navigation-wrapper {
    height: 100%;
    padding-bottom: vh(115px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: $screen-lg) {
      height: auto;
    }
  }

  &_navigation {
    position: relative;
    width: 50%;

    @media (max-width: $screen-lg) {
      width: 100%;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: vw(300);
      height: vw(300px);
      min-width: 150px;
      min-height: 150px;
      z-index: -1;
      background-image: url("../static/decoration-el.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    &_title {
      font-size: em(17px);
      color: $text-dark;
      max-width: 430px;
      text-align: center;
      font-weight: 300;
      letter-spacing: vw(2px);
      margin: 0 auto vh(75px) auto;

      @media (max-width: $screen-osx) {
        font-size: 16px;
        margin-bottom: vh(50px);
      }

      @media (max-width: $screen-xl) {
        font-size: 14px;
      }

      @media (max-width: $screen-sm) {
        font-size: 10px;
        max-width: 70%;
      }
    }

    &_contact-box {
      width: 100%;
      margin-top: auto;

      @media (max-width: $screen-lg) {
        max-width: 80%;
      }

      @media (max-width: $screen-md) {
        max-width: 100%;
      }
    }
  }

  &_content {
    position: relative;
    width: 50%;
    overflow: scroll;

    &::after,
    &::before {
      content: "";
      position: absolute;
      top: 0;
      width: 1px;
      height: 100%;
      background-color: #efefef;
      z-index: -1;
    }

    &::after {
      left: 25%;
    }

    &::before {
      right: 25%;
    }

    @media (max-width: $screen-lg) {
      width: 100%;
      height: auto;
    }

    &_wrapper {
      padding-top: vh(95px);
    }

    &-line {
      position: absolute;
      top: 0;
      left: 50%;
      width: 1px;
      height: 100%;
      background-color: #efefef;
      z-index: -1;
    }
  }

  .copyright {
    position: absolute;
    bottom: vh(30px);
    left: vw(135px);
    display: flex;
    align-items: center;
    color: #9c9a9a;
    font-weight: 300;
    font-size: 12px;
    transition: color 0.2s ease-in;

    &:hover,
    &:focus {
      text-decoration: none;
      color: #3f3f3f;

      strong {
        color: #3f3f3f;
        transition: color 0.2s ease-in;
      }

      img {
        opacity: 1;
      }
    }

    @media (max-width: $screen-lg) {
      left: 50%;
      transform: translateX(-50%);
      display: inline-block;
      width: 100%;
      text-align: center;
      bottom: 10px;
    }

    strong {
      color: #9c9a9a;
      font-weight: 400;
    }

    img {
      width: 33px;
      height: auto;
      opacity: 0.5;
      transition: opacity 0.2s ease-in;
    }
  }
}
</style>

