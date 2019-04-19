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
      <section class="page_content">
        <div class="page_content_wrapper">
          <div class="page_content-line"></div>
          <nuxt/>
        </div>
      </section>
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
          url: "/"
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
    @media (max-width: $screen-lg) {
      height: 100vh;
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
      width: vw(340px);
      height: vw(340px);
      z-index: -1;
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
    // background-color: green;
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
      height: 100vh;
    }

    &_wrapper {
      // background-color: tomato;
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
}
</style>

