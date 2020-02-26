<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs_wrapper">
      <ul class="breadcrumbs_list">
        <li class="breadcrumbs_item" data-aos="zoom-out" data-aos-delay="1200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="12"
            viewBox="0 0 247.789 247.789"
          >
            <path
              d="M223.78 122.895c-3.313 0-6 2.687-6 6V235.8h-64.384v-67.102c0-3.313-2.687-6-6-6h-47c-3.313 0-6 2.687-6 6v53.207c0 3.313 2.687 6 6 6s6-2.687 6-6v-47.207h35V235.8H30V88.93l93.884-75.24 96.132 77.04a6 6 0 0 0 7.504-9.364L127.646 1.318a6 6 0 0 0-7.504 0L20.258 81.366a6 6 0 0 0-2.248 4.682v155.74a6 6 0 0 0 6 6h199.77a6 6 0 0 0 6-6V128.895a6 6 0 0 0-6-6z"
            ></path>
          </svg>
        </li>
        <li
          v-for="(crumbs, index) in crumbsList"
          :key="index"
          class="breadcrumbs_item"
          data-aos="zoom-out"
          :data-aos-delay="crumbs.delay"
        >
          <nuxt-link v-if="crumbs.link" :to="crumbs.link">{{crumbs.text}}</nuxt-link>
          <span v-else>{{crumbs.text}}</span>
        </li>
        <!-- <li class="breadcrumbs_item">О нас</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "breadcrumbs",
  props: {
    crumbsList: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_colors.scss";
@import "~/assets/scss/_function.scss";
@import "~/assets/scss/_breakpoint.scss";

.breadcrumbs {
  &_list {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    text-indent: 0;
    list-style: none;
    list-style-position: outside;
  }

  &_item {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 12px;
    text-transform: uppercase;
    cursor: pointer;

    &:not(:last-of-type) {
      padding-right: 55px;

      @media (max-width: $screen-sm) {
        padding-right: 35px;
      }

      &::after {
        content: "";
        position: absolute;
        right: 12px;
        top: 50%;
        width: 40px;
        height: 1px;
        background-color: $line;

        @media (max-width: $screen-sm) {
          width: 20px;
        }
      }

      &::before {
        content: "";
        position: absolute;
        right: 7px;
        border-radius: 50%;
        transform: translateY(-40%);
        border: 1px solid $line;
        top: 50%;
        width: 5px;
        height: 5px;

        @media (max-width: $screen-sm) {
          transform: translateY(-35%);
        }
      }
    }

    &:last-of-type {
      a {
        color: $text-dark;
      }
    }

    &:nth-last-child(2) {
      &::after {
        background-color: $line-dark;
      }

      &::before {
        border: 1px solid $line-dark;
      }
    }

    a {
      color: $line;
      text-decoration: none;
      transition: 0.3s ease-in;

      &:hover,
      &:focus {
        color: $text-dark;
      }
    }

    svg {
      fill: $line;
    }
  }
}
</style>