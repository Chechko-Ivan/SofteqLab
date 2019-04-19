<template>
  <main class="inner-page">
    <span class="inner-page_big-title">Кто мы</span>
    <div class="inner-page_wrapper">
      <div class="inner-page_header">
        <breadcrumbs></breadcrumbs>
        <div class="inner-page_main-title-wrapper">
          <div class="inner-page_main-title-decor"></div>
          <h1 class="inner-page_main-title">КАКОЙ-ТО ЧЕТКИЙ ЗАГОЛОВОК ОБ УСЛУГЕ ИЛИ ДАННОМ РАЗДЕЛЕ</h1>
        </div>
      </div>

      <div class="inner-page_content">
        <div class="inner-page_content_scroll">
          <div class="inner-page_content-header">
            <p
              class="inner-page_content-header-text"
            >We will build a new medium that will redefine and enhance the nature of spoken information, education, entertainment, and other modes of verbal expression we will help create ourselves.</p>
            <address
              class="inner-page_content-header-author"
            >DON KATZ, FOUNDER AND CEO, AUDIBLE JULY 30, 1996</address>
            <div class="inner-page_content-header_link">
              <base-link url="/" text="Услуги"></base-link>
              <base-link url="/" text="Обратная связь"></base-link>
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
              <div class="inner-page-about_right">123123</div>
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

    color: rgba($text-light, 0.03);
    z-index: -1;
  }

  &_header {
    margin-left: vw(175px);
  }

  &_main-title-wrapper {
    position: relative;
    padding-left: vw(90px);
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
  }

  &_main-title-decor {
    position: absolute;
    top: 11px;
    left: vw(-45px);
    height: 1px;
    width: 80px;
    background-color: $line-dark;

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
  }

  &_content-header {
    max-width: 38%;
    width: 100%;
    padding: 0 10px;
    margin: 0 auto;
    transform: translateX(vw(80px));
  }

  &_content-header-text {
    color: #464646;
    font-size: 14px;
    font-weight: 300;
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
    }

    .inner-page_content-header-text {
      margin-top: vh(65px);
    }
  }
}

.inner-page-about {
  margin-top: vh(65px);

  &_left {
    width: 50%;
  }

  &-title {
    position: relative;
    font-size: vw(51px);
    font-weight: 800;
    color: $text-dark;
    text-transform: uppercase;
    padding-left: vw(30px);

    .inner-page_main-title-decor {
      left: -70px;

      &::after {
        transform: translateY(-50%);
      }
    }

    span {
      font-size: 17px;
      font-weight: 400;
      letter-spacing: 2px;
      display: block;
    }
  }
}
</style>