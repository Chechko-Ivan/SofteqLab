<template>
  <main class="inner-page">
    <div class="inner-page_wrapper">
      <div class="inner-page_header">
        <breadcrumbs></breadcrumbs>
        <div class="inner-page_main-title-wrapper">
          <div class="inner-page_main-title-decor"></div>
          <h1 class="inner-page_main-title">КАКОЙ-ТО ЧЕТКИЙ ЗАГОЛОВОК ОБ УСЛУГЕ ИЛИ ДАННОМ РАЗДЕЛЕ</h1>
        </div>
      </div>
    </div>
    <span class="inner-page_big-title">О нас</span>
  </main>
</template>

<script>
import Breadcrumbs from "~/components/Breadcrumbs";
export default {
  components: {
    Breadcrumbs
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/_colors.scss";
@import "~/assets/scss/_function.scss";
@import "~/assets/scss/_breakpoint.scss";

.inner-page {
  position: relative;

  &_big-title {
    position: absolute;
    top: 25px;
    left: 0;
    font-weight: 800;
    font-size: 175px;
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
}
</style>