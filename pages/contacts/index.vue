<template>
  <main class="inner-page">
    <div class="inner-page_wrapper">
      <div class="inner-page_big-title" data-aos="zoom-out" data-aos-delay="500">Обратная связь</div>
      <div class="inner-page_header">
        <breadcrumbs :crumbsList="breadcrumbs"></breadcrumbs>
        <div class="inner-page_main-title-wrapper">
          <div class="inner-page_main-title-decor" data-aos="fade-right" data-aos-delay="100"></div>
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
              <base-link
                url="/feedback"
                text="Форма обратной связи"
                data-aos="zoom-in"
                data-aos-delay="550"
              ></base-link>
            </div>
          </div>

          <div class="inner-page_content-main inner-page_content-main--contacts">
            <div class="inner-page_content-main-wrapper">
              <div class="inner-page_content-map-wrapper">
                <div class="inner-page_content-map-badge">
                  <div class="inner-page_content-map-badge-header">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path
                        d="M256 0C153.755 0 70.573 83.182 70.573 185.426c0 126.888 165.94 313.167 173.004 321.035 6.636 7.39 18.222 7.378 24.846 0 7.065-7.868 173.004-194.147 173.004-321.035C441.425 83.182 358.244 0 256 0zm0 278.72c-51.442 0-93.292-41.85-93.292-93.293S204.56 92.134 256 92.134s93.29 41.85 93.29 93.293S307.44 278.72 256 278.72z"
                      ></path>
                    </svg>
                    <div>Как нас найти?</div>
                  </div>
                  <div class="inner-page_content-map-badge-footer">
                    123 Manhattan address name,
                    Los Algeles
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.327966497201!2d27.573245415609286!3d53.9081477401823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfbbfa1a6891%3A0x314bdfa305ba627e!2z0J_Qu9C-0YnQsNC00Ywg0J_QvtCx0LXQtNGL!5e0!3m2!1sru!2sby!4v1555831972800!5m2!1sru!2sby"
                  frameborder="0"
                  style="border:0"
                  allowfullscreen
                ></iframe>
                <!-- <div id="map"></div> -->
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
export default {
  components: {
    Breadcrumbs,
    BaseLink
  },
  data() {
    return {
      breadcrumbs: [
        {
          text: "На главную",
          link: "/",
          delay: "1600"
        },
        {
          text: "Обратная связь",
          link: null,
          delay: "1800"
        }
      ]
    };
  },
  methods: {
    // initMap() {
    //   var coordinates = { lat: 47.212325, lng: 38.933663 },
    //     map = new google.maps.Map(document.getElementById("map"), {
    //       center: coordinates
    //     });
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_colors.scss";
@import "~/assets/scss/_function.scss";
@import "~/assets/scss/_breakpoint.scss";

.inner-page_content {
  &-map-wrapper {
    position: relative;
    width: calc(100% - 70px);

    @media (max-width: $screen-xl) {
      font-size: 14px;
      width: 100%;
    }

    iframe {
      width: 100%;
      height: 420px;
    }
  }
}

.inner-page_content-map {
  &-badge {
    position: absolute;
    width: 270px;
    height: 210px;
    padding: 40px;
    top: 0;
    opacity: 0;
    right: 0;
    background-image: $gradient;
    z-index: 1;
    animation-delay: 1s;
    animation-name: animateImageAbout;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: $screen-osx) {
      height: 180px;
      padding: 30px;
    }

    @media (max-width: $screen-xl) {
      padding: 15px;
      width: 200px;
      height: 130px;
    }

    &-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      svg {
        fill: #ffffff;
        width: 35px;
        height: 35px;

        @media (max-width: $screen-xl) {
          width: 20px;
          height: 20px;
        }
      }

      div {
        width: 105px;
        color: #ffffff;
        font-size: 17px;
        text-transform: uppercase;
        letter-spacing: 4.68px;
        line-height: 1.3;
        font-weight: 300;

        @media (max-width: $screen-xl) {
          font-size: 14px;
        }
      }
    }

    &-footer {
      font-weight: 300;
      line-height: 23px;
      color: rgba(#ffffff, 0.75);
      font-size: 14px;
    }
  }
}

@keyframes animateImageAbout {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  100% {
    transform: translate(vw(70px), vh(-30px));
    opacity: 1;
  }
}
</style>