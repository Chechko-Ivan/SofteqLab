<template>
  <div class="page">
    <div class="page_wrapper">
      <aside class="page_navigation">
        <navigation></navigation>
      </aside>
      <!-- <section class="page_content"></section> -->
    </div>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation";

export default {
  components: { Navigation },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.page {
  &_wrapper {
    height: 100vh;
    display: flex;
  }

  &_navigation {
    position: relative;
    width: 100%;
    flex-basis: 100%;

    // &::after {
    //   position: absolute;
    //   bottom: 0;
    //   left: 0;
    //   width: 340px;
    //   height: 340px;
    //   background-image: url("../static/decoration-el.png");
    // }
  }

  &_content {
    position: relative;
    width: 50%;
    flex-basis: 50%;
  }
}
</style>