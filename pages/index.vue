<template>
  <main class="inner-page">
    <div class="inner-page_wrapper">
      <!-- <span class="inner-page_big-title">Кто мы</span> -->
      <div class="inner-page_header">
        <breadcrumbs></breadcrumbs>
        <div class="inner-page_main-title-wrapper">
          <div class="inner-page_main-title-decor" data-aos="slide-right"></div>
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
                  <span data-aos="fade-up" data-aos-delay="700">НАША ПРОДУКЦИЯ</span>
                  <div data-aos="fade-up" data-aos-delay="750">КАЧЕСТВО</div>
                </h2>
                <p
                  class="inner-page_content-header-text"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >We will build a new medium that will redefine and enhance the nature of spoken information, education, entertainment, and other modes of verbal expression we will help create ourselves.</p>
                <address
                  class="inner-page_content-header-author"
                  data-aos="fade-up"
                  data-aos-delay="950"
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
@import "~/assets/scss/_colors.scss";
@import "~/assets/scss/_function.scss";
@import "~/assets/scss/_breakpoint.scss";

.inner-page {
  &_big-title {
    position: absolute;
    top: vh(130px);
    left: 0;
    font-weight: 800;
    font-size: 175px;
    text-transform: uppercase;
    letter-spacing: 20px;
    white-space: nowrap;
    transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);

    color: rgba($text-light, 0.03);
    z-index: -1;

    @media (max-width: $screen-sm) {
      font-size: 100px;
      white-space: normal;
    }
  }

  &_header {
    margin-left: vw(175px);
  }

  &_main-title-wrapper {
    position: relative;
    padding-left: vw(90px);

    @media (max-width: $screen-osx) {
      padding-left: vw(120px);
    }

    @media (max-width: $screen-md) {
      padding-left: 60px;
    }
  }

  &_main-title {
    margin-top: vh(95px);
    font-size: 17px;
    color: $text-dark;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 300;
    max-width: 420px;
    line-height: 1.4;

    @media (max-width: $screen-xl) {
      font-size: 14px;
    }

    @media (max-width: $screen-md) {
      max-width: 400px;
    }

    @media (max-width: $screen-sm) {
      font-size: 14px;
    }
  }

  &_main-title-decor {
    position: absolute;
    top: 11px;
    left: vw(-45px);
    height: 1px;
    width: 80px;
    background-color: $line-dark;

    @media (max-width: $screen-xl) {
      width: 50px;
    }

    @media (max-width: $screen-md) {
      width: 40px;
      left: 0;
    }

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-40%);
      right: -5px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      border: 1px solid $line-dark;
    }
  }

  &_content {
    width: 100%;
    height: 100%;
    padding: vh(95px) 0 0 0;
    overflow: hidden;

    @media (max-width: $screen-sm) {
      padding-top: 35px;
    }
  }

  &_content-header {
    max-width: 38%;
    width: 100%;
    padding: 0 10px;
    margin: 0 auto;
    transform: translateX(vw(80px));

    @media (max-width: $screen-xxl) {
      max-width: 50%;
    }

    @media (max-width: $screen-xl) {
      max-width: 65%;
      transform: translateX(vw(120px));
    }

    @media (max-width: $screen-sm) {
      transform: none;
      max-width: 100%;
    }
  }

  &_content-header-text {
    color: #464646;
    font-size: 14px;
    font-weight: 300;

    @media (max-width: $screen-sm) {
      font-size: 12px;
    }
  }

  &_content-header-author {
    margin-top: 20px;
    font-style: italic;
    font-size: 14px;
    color: #505050;
    text-transform: uppercase;
  }

  &_content-header_link {
    margin-top: vh(70px);
  }

  &_content-main {
    margin-top: vh(65px);
    padding-bottom: vh(100px);
    width: 100%;

    @media (max-width: $screen-xl) {
      margin-top: vh(100px);
    }

    &-wrapper {
      max-width: 83%;
      width: 100%;
      padding: 0 10px;
      margin: 0 auto;
    }
  }

  &_content-main--about {
    .inner-page_content-main-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: $screen-xl) {
        flex-direction: column;
      }

      @media (max-width: $screen-lg) {
        flex-direction: row;
      }

      @media (max-width: $screen-md) {
        flex-direction: column;
      }
    }

    .inner-page_content-header-text {
      margin-top: vh(65px);

      @media (max-width: $screen-xxl) {
        margin-top: vh(35px);
      }

      @media (max-width: $screen-xl) {
        margin-top: vh(20px);
      }

      @media (max-width: $screen-lg) {
        max-width: 300px;
      }

      @media (max-width: $screen-md) {
        /* max-width: ; */
      }
    }

    .inner-page_content-header-author {
      @media (max-width: $screen-lg) {
        max-width: 300px;
      }
    }
  }
}

.inner-page-about {
  margin-top: vh(65px);

  &_left {
    width: 50%;

    @media (max-width: $screen-xl) {
      width: 100%;
      margin-bottom: vh(100px);
    }
  }

  &-title {
    position: relative;
    font-size: vw(51px);
    font-weight: 800;
    color: $text-dark;
    text-transform: uppercase;
    padding-left: vw(30px);

    @media (max-width: $screen-xl) {
      font-size: 30px;
    }

    .inner-page_main-title-decor {
      left: -70px;

      @media (max-width: $screen-md) {
        left: -45px;
      }

      @media (max-width: $screen-sm) {
        width: 25px;

        left: -30px;
      }

      &::after {
        transform: translateY(-50%);

        @media (max-width: $screen-md) {
          transform: translateY(-40%);
        }

        @media (max-width: $screen-sm) {
          transform: translateY(-55%);
        }
      }
    }

    span {
      font-size: 17px;
      font-weight: 400;
      letter-spacing: 2px;
      display: block;

      @media (max-width: $screen-xl) {
        font-size: 12px;
      }
    }
  }

  &_preview {
    position: relative;
    display: block;
    width: vw(260px);
    height: vw(260px);
    margin-right: vw(65px);

    @media (max-width: $screen-xl) {
      width: 260px;
      height: 260px;
    }

    @media (max-width: $screen-lg) {
      width: 220px;
      height: 220px;
    }

    @media (max-width: $screen-md) {
      width: 260px;
      height: 260px;
    }

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: vh(-30px);
      right: vw(-65px);
      background-image: $gradient;
      z-index: -1;
    }
  }
}
</style>
