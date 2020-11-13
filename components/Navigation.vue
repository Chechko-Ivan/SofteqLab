<template>
  <nav class="navigation" role="navigation">
    <ul class="navigation_list">
      <li
        v-for="(link, index) in linkData"
        :key="index"
        class="navigation_item"
        data-aos="zoom-out"
        :data-aos-delay="link.delay"
      >
<<<<<<< HEAD
        <nuxt-link class="navigation_link" v-scroll-to="'#container'" :to="link.url">
=======
        <nuxt-link class="navigation_link" :to="link.url">
>>>>>>> 4490a6bf788ee8d38e153acedbab535e4e8312a8
          <div class="navigation_link-box">
            <span class="navigation_link-line navigation_link-line--first"></span>
            <span class="navigation_link-line navigation_link-line--second">
              <span
                :class="['navigation_link-text', {'navigation_link-text--active': `${$route.path}` === link.url}]"
              >{{link.text}}</span>
            </span>
          </div>
        </nuxt-link>
      </li>

      <nuxt-link class="logo" to="/">
        <img
<<<<<<< HEAD
          src="~/static/logo.svg"
=======
          src="~/static/logo.png"
>>>>>>> 4490a6bf788ee8d38e153acedbab535e4e8312a8
          alt="Логотип SofteqLab"
          data-aos="zoom-out"
          data-aos-delay="1900"
        >
      </nuxt-link>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    linkData: {
      type: Array
    }
  },
  mounted() {
    const el = document.querySelector(".navigation_list");
    el.style.height = `${el.offsetWidth}px`;
    window.addEventListener("resize", () => {
      el.style.height = `${el.offsetWidth}px`;
    });
  }

  // methods: {
  //   scrollToContainer() {
  //     console.log("awdawd");
  //     let width = document.body.clientWidth;
  //     if (width < 970) {
  //       let container = this.$el.querySelector("#container");
  //       container.scrollTop = container.scrollHeight;
  //     }
  //   }
  // }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_colors.scss";
@import "~/assets/scss/_function.scss";
@import "~/assets/scss/_breakpoint.scss";

.navigation {
  display: flex;
  justify-content: center;

  // Nav ul
  &_list {
    position: relative;
    width: vw(620px);
    min-width: 320px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    text-indent: 0;
    list-style: none;
    list-style-position: outside;
  }

  // Nav li
  &_item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50%;

    &:nth-child(1) {
      justify-content: flex-end;
      align-items: flex-end;
      padding: 0 4px 4px 0;

      .navigation_link {
        &::after {
          top: 45%;
          left: 45%;
        }

        &-line--first {
          bottom: 0;
          right: 0;
          height: 100%;
          width: 30%;
          background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M2 0 L0 2 L99 100 L102 99' fill='rgb(189,189,189)' /></svg>");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: 100% 100%, auto;

          @media (max-width: $screen-sm) {
            width: 25%;
          }
        }

        &-line--second {
          bottom: 0;
          right: 30%;
          height: 100%;
          width: min-content;
          border-top: 1px solid $line;

          @media (max-width: $screen-sm) {
            right: 25%;
          }

          &::after {
            top: -4px;
            left: -7px;
          }
        }

        &-text {
          top: -26px;
        }
      }
    }

    &:nth-child(2) {
      justify-content: flex-start;
      align-items: flex-end;
      padding: 0 0px 4px 4px;

      .navigation_link {
        &::after {
          top: 45%;
          right: 45%;
          border-color: $accent-dark;
        }

        &-box {
          right: 0;
        }

        &-line--first {
          bottom: 0;
          left: 0;
          height: 100%;
          width: 40%;
          background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M0 99 L99 0 L100 3 L1 102' fill='rgb(189,189,189)' /></svg>");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: 100% 100%, auto;

          @media (max-width: $screen-sm) {
            width: 25%;
          }
        }

        &-line--second {
          bottom: 0;
          left: 40%;
          height: 100%;
          width: min-content;
          border-top: 1px solid $line;

          @media (max-width: $screen-sm) {
            left: 25%;
          }

          &::after {
            top: -4px;
            right: -7px;
          }
        }

        &-text {
          top: -26px;
        }
      }
    }

    &:nth-child(3) {
      justify-content: flex-end;
      align-items: flex-start;
      padding: 4px 4px 0 0;

      .navigation_link {
        &::after {
          bottom: 45%;
          left: 45%;
          border-color: $accent-dark;
        }

        &-line--first {
          bottom: 0;
          right: 0;
          height: 100%;
          width: 25%;
          background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M0 99 L99 0 L100 3 L1 102' fill='rgb(189,189,189)' /></svg>");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: 100% 100%, auto;

          @media (max-width: $screen-md) {
            width: 20%;
          }

          @media (max-width: $screen-sm) {
            width: 15%;
          }
        }

        &-line--second {
          bottom: 0;
          right: 25%;
          height: 100%;
          width: min-content;
          border-bottom: 1px solid $line;

          @media (max-width: $screen-md) {
            right: 20%;
          }

          @media (max-width: $screen-sm) {
            right: 15%;
          }

          &::after {
            bottom: -4px;
            left: -7px;
          }
        }

        &-text {
          bottom: -13px;

          @media (max-width: $screen-md) {
            bottom: -15px;
          }

          @media (max-width: $screen-sm) {
            bottom: 2px;
          }
        }
      }
    }

    &:nth-child(4) {
      justify-content: flex-start;
      align-items: flex-start;
      padding: 4px 0 0 4px;

      .navigation_link {
        &::after {
          bottom: 45%;
          right: 45%;
        }

        &-box {
          right: 0;
        }

        &-line--first {
          bottom: 0;
          left: 0;
          height: 100%;
          width: 25%;
          background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M2 0 L0 2 L99 100 L102 99' fill='rgb(189,189,189)' /></svg>");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: 100% 100%, auto;

          @media (max-width: $screen-sm) {
            width: 15%;
          }

          @media (max-width: $screen-md) {
            width: 20%;
          }
        }

        &-line--second {
          bottom: 0;
          left: 25%;
          height: 100%;
          width: min-content;
          border-bottom: 1px solid $line;

          @media (max-width: $screen-sm) {
            left: 15%;
          }

          @media (max-width: $screen-md) {
            left: 20%;
          }

          &::after {
            bottom: -4px;
            right: -7px;
          }
        }

        &-text {
          bottom: -13px;

          @media (max-width: $screen-md) {
            bottom: -15px;
          }

          @media (max-width: $screen-sm) {
            bottom: 2px;
          }
        }
      }
    }

    &:nth-child(-n + 2) {
      .navigation_link {
        &-box {
          height: 30px;
          top: 58%;
          margin-top: -30px;

          @media (max-width: $screen-sm) {
            top: 59%;
            height: 20px;
            margin-top: -20px;
          }
        }
      }
    }

    &:nth-child(n + 3):nth-child(-n + 4) {
      .navigation_link {
        &-box {
          height: 40px;
          bottom: 59%;
          margin-bottom: -40px;

          @media (max-width: $screen-md) {
            bottom: 72%;
            height: 40px;
          }

          @media (max-width: $screen-sm) {
            bottom: 59%;
            height: 20px;
            margin-bottom: -20px;
          }
        }
      }
    }
  }

  // Nav link
  &_link {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: none;

    &:hover,
    &:focus {
      &::after {
        box-shadow: 0 0 0 15px rgba($accent-hover, 0.3);

        @media (max-width: 1440px) {
          box-shadow: 0 0 0 10px rgba($accent-hover, 0.3);
        }

        @media (max-width: 1440px) {
          box-shadow: 0 0 0 8px rgba($accent-hover, 0.3);
        }
      }

      .navigation_link-text {
        &::after {
          width: calc(100% + 2px);
        }
      }
    }

    &::after {
      content: "";
      position: absolute;
      width: 112%;
      height: 112%;
      border: 30px solid $accent-light;
      border-radius: 50%;
      background-color: transparent;
      transition: box-shadow 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.75);

      @media (max-width: 1440px) {
        border: 20px solid $accent-light;
      }

      @media (max-width: 1170px) {
        border: 18px solid $accent-light;
      }
    }

    // Link box
    &-box {
      position: absolute;
      width: 65%;
    }

    &-line {
      position: absolute;
      width: 1px;
      height: 1px;

      &--second {
        &::after {
          content: "";
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          border: 1px solid $line;
        }
      }
    }

    &-text {
      position: relative;
      color: $text-light;
      font-size: vw(18px);
      white-space: nowrap;
      text-transform: uppercase;
      letter-spacing: -1px;

      &.navigation_link-text--active {
        &::after {
          width: calc(100% + 2px);
        }
      }

      @media (max-width: $screen-md) {
        font-size: vw(22px);
        letter-spacing: -0.5px;
      }

      @media (max-width: $screen-sm) {
        font-size: 9px;
      }

      &::after {
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
  }
}

// Nav logo
.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%);
  outline: none;

  img {
    width: vw(175px);

    @media (max-width: $screen-md) {
      width: 100px;
    }
  }
}
</style>