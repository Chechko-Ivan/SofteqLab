<template>
  <div class="page">
    <div class="page_wrapper">
      <aside class="page_navigation">
        <div class="page_navigation-wrapper">
          <navigation :linkData="currentNavigation"></navigation>
          <span class="page_navigation_contact-box">
            <h2 class="page_navigation_title">КАКОЙ-ТО ЧЕТКИЙ ЗАГОЛОВОК ОБ УСЛУГЕ ИЛИ ДАННОМ РАЗДЕЛЕ</h2>
            <fast-contacts></fast-contacts>
          </span>
        </div>
      </aside>
      <section class="page_content"></section>
    </div>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation";
import FastContacts from "~/components/FastContacts";

export default {
  components: { Navigation, FastContacts },
  data() {
    return {
      currentNavigation: {
        firstLink: {
          text: "О нас",
          url: "/about"
        },
        secondLink: {
          text: "Услуги",
          url: "/services"
        },
        secondLink: {
          text: "Услуги",
          url: "/services"
        },
        thirdLink: {
          text: "Обратная связь",
          url: "/feedback"
        },
        fourthLink: {
          text: "Контакты",
          url: "/contacts"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_colors.scss";
@import "~/assets/scss/_function.scss";
@import "~/assets/scss/_breakpoint.scss";

.page {
  &_wrapper {
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
  }

  &_navigation {
    position: relative;
    width: 50%;

    @media (max-width: $screen-lg) {
      width: 100%;
    }

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: vw(340px);
      height: vh(340px);
      z-index: 10;
      background-image: url("../static/decoration-el.png");
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
        font-size: 11px;
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
    background-color: #ccc;

    @media (max-width: $screen-lg) {
      width: 100%;
      height: 100vh;
    }
  }
}
</style>