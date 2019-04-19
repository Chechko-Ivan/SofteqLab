<template>
  <nuxt-link class="base-link" :to="url">{{ text }}</nuxt-link>
</template>

<script>
export default {
  name: "baseLink",
  props: {
    url: {
      type: String
    },
    text: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_colors.scss";
@import "~/assets/scss/_function.scss";
@import "~/assets/scss/_breakpoint.scss";

.base-link {
  position: relative;
  color: $text-dark;
  font-size: 14px;
  text-transform: uppercase;

  &:not(:last-of-type) {
    margin-right: vw(30px);
  }

  &:hover,
  &:focus {
    &::after {
      width: calc(100% + 2px);
    }
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 20px;
    z-index: -1;
    background-color: $text-underline;
    transition: width 0.4s ease;
  }
}
</style>