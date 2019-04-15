<template>
  <div class="page">
    <div class="page_wrapper">
      <aside class="page_navigation">
        <div class="page_navigation-wrapper">
          <navigation :linkData="currentNavigation"></navigation>
          <fast-contacts></fast-contacts>
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

<style lang="scss">
.page {
  &_wrapper {
    height: 100vh;
    display: flex;
  }

  &_navigation-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &_navigation {
    position: relative;
    width: 50%;

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 340px;
      height: 340px;
      z-index: -10;
      background-image: url("../static/decoration-el.png");
    }
  }

  &_content {
    position: relative;
    width: 50%;
    background-color: #ccc;
  }
}
</style>