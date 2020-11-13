<template>
  <main class="inner-page services">
    <div class="inner-page_wrapper">
      <div class="inner-page_big-title" data-aos="zoom-out" data-aos-delay="500">Услуги</div>
      <div class="inner-page_header">
        <breadcrumbs :crumbsList="breadcrumbs"></breadcrumbs>
<<<<<<< HEAD
        <!-- <div class="inner-page_main-title-wrapper">
=======
        <div class="inner-page_main-title-wrapper">
>>>>>>> 4490a6bf788ee8d38e153acedbab535e4e8312a8
          <div class="inner-page_main-title-decor" data-aos="fade-right" data-aos-delay="100"></div>
          <h1
            class="inner-page_main-title"
            data-aos="zoom-out-left"
            data-aos-delay="150"
          >КАКОЙ-ТО ЧЕТКИЙ ЗАГОЛОВОК ОБ УСЛУГЕ ИЛИ ДАННОМ РАЗДЕЛЕ</h1>
        </div>-->
      </div>

      <div class="inner-page_content">
        <div class="inner-page_content_scroll">
          <div class="inner-page_content-header">
<<<<<<< HEAD
            <div data-aos="zoom-out-left" data-aos-delay="250">
              <p
                class="inner-page_content-header-text"
              >Осуществляем комплексную разработку, внедрение и поддержку сложных информационных систем и инфраструктурных решений, применяя проектный подход при взаимодействии с нашими Клиентами вне зависимости от выбранной методологии для реализации проекта, и идеологию REWORK при взаимодействии наших проектных команд.</p>
            </div>

            <div data-aos="zoom-out-left" data-aos-delay="300">
              <p
                class="inner-page_content-header-text"
              >Технологический стек, применяемый в проектах: ASP.NET, C++, Python/Django, Node.js, React.js, AngularJS, Kotlin, Swift</p>

              <p class="inner-page_content-header-text">Инфраструктура : MS Azure, AWS, Kubernetes.</p>

              <p
                class="inner-page_content-header-text"
              >Методология, применяемая при реализации проектов: Waterfall/Agile, Scrum, Kanban.</p>

              <p
                class="inner-page_content-header-text"
              >Нотации моделирования бизнес-процессов, используемые нами для описания бизнес-процессов: UML, BPMN 2.0.</p>
            </div>
=======
            <p
              class="inner-page_content-header-text"
              data-aos="zoom-out-left"
              data-aos-delay="250"
            >We will build a new medium that will redefine and enhance the nature of spoken information.</p>
>>>>>>> 4490a6bf788ee8d38e153acedbab535e4e8312a8
          </div>

          <div class="inner-page_content-main inner-page-services">
            <div class="inner-page_content-main-wrapper">
              <ul class="inner-page-services_list">
                <li
<<<<<<< HEAD
                  :class="['inner-page-services_item', {'no-active' : !service.isActive}]"
=======
                  class="inner-page-services_item"
>>>>>>> 4490a6bf788ee8d38e153acedbab535e4e8312a8
                  v-for="(service, index) in servicesList"
                  :key="index"
                  data-aos="zoom-out"
                  :data-aos-delay="service.delay"
<<<<<<< HEAD
                  data-aos-offset="-1000"
                >
                  <nuxt-link
                    class="inner-page-services_item-link"
                    :to="service.isActive ? service.link : ''"
                  >
=======
                  data-aos-offset="0"
                >
                  <nuxt-link class="inner-page-services_item-link" :to="service.link">
>>>>>>> 4490a6bf788ee8d38e153acedbab535e4e8312a8
                    <div class="inner-page-services_item-left">
                      <h3 class="inner-page-services_item-title">{{service.title}}</h3>
                      <span class="inner-page-services_item-subtitle">{{service.subtitle}}</span>
                    </div>
                    <div class="inner-page-services_item-right">
                      <span>
                        <span class="fake-link">Подробнее</span>
                        <!-- <base-link :url="service.link" text="Подробнее"></base-link> -->
                      </span>
                    </div>
                  </nuxt-link>
                </li>
              </ul>
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
          text: "Услуги",
          link: null,
          delay: "1800"
        }
      ],
      servicesList: [
<<<<<<< HEAD
        // Внедрение ERP-системы
        {
          title: "Внедрение ERP-системы",
          subtitle:
            "Повышаем эффективность бизнеса с помощью имплементации модулей ERP-системы, соответствующей трендам Industry 4.0, IIoT, Smart Factory.",
          text: null,
          link: "/services/ERP",
          type: 1,
          isActive: true,
          delay: "400"
        },
        // Разработка программного обеспечения
        {
          title: "Разработка программного обеспечения",
          subtitle:
            "Оказываем услуги по разработке сложных высоконагруженных систем, релевантных бизнес-потребностям Заказчика, осуществляем интеграцию hardware & software, оказываем услуги по экспертному руководству и сопровождению проекта от момента начала создания архитектуры до выпуска продукта в продакшн.",
          text: [
            "Оказываем услуги по разработке сложных высоконагруженных систем, релевантных бизнес-потребностям Заказчика, осуществляем интеграцию hardware & software, оказываем услуги по экспертному руководству и сопровождению проекта от момента начала создания архитектуры до выпуска продукта в продакшн.",
            "Опыт реализованных проектов: управление финансами/финтех, управление франшизами, розничная торговля и реклама.",
            "Основной стек применяемых в разработке технологий: Python / Django, Node.js, AngularJS, ReactJS, Vue.js, HTML5, CSS3, Swift, Kotlin, Cordova."
          ],
          link: "/services/software-development",
          type: 2,
          isActive: true,
          delay: "500"
        },
        // Консалтинг
        {
          title: "Консалтинг",
          subtitle:
            "Построение моделей бизнес-процессов, отвечающих задачам бизнеса",
          text: null,
          link: "/services/consulting",
          isActive: false,
          delay: "600"
        },
        // Продажа лицензионного программного обеспечения
        {
          title: "Продажа лицензионного программного обеспечения",
          subtitle: "Поставка программно-аппаратных комплексов.",
          text: null,
          link: "/services/sale-programs",
          isActive: false,
          delay: "700"
=======
        {
          title: "СИСТЕМА АВТОМАТИЗАЦИИ",
          subtitle:
            "We will build a new medium that will redefine and enhance the nature of spoken information",
          link: "/services/1",
          delay: "400"
        },
        {
          title: "СИСТЕМА ВЕНТИЛЯЦИИ",
          subtitle:
            "We will build a new medium that will redefine and enhance the nature of spoken information",
          link: "/services/2",
          delay: "500"
        },
        {
          title: "СИСТЕМА ПЕРСОНАЛИЗАЦИИ",
          subtitle:
            "We will build a new medium that will redefine and enhance the nature of spoken information",
          link: "/services/3",
          delay: "600"
>>>>>>> 4490a6bf788ee8d38e153acedbab535e4e8312a8
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/_colors.scss";
@import "~/assets/scss/_function.scss";
@import "~/assets/scss/_breakpoint.scss";

.inner-page-services {
  &_list {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    text-indent: 0;
    list-style: none;
    list-style-position: outside;
  }
  &_item {
    width: 100%;
    min-height: 150px;
    padding: 35px 40px;
    background: #ffffff;
    box-shadow: 0 0 11px 2px rgba(224, 222, 220, 0.75);
    transition: all 0.3s linear;
    cursor: pointer;

    &:hover,
    &:focus {
      .fake-link {
        color: #fff;
        &::after {
          width: calc(100% + 2px);
        }
      }
    }

    @media (max-width: $screen-sm) {
      flex-direction: column;
      padding: 20px 30px;
    }

    &:not(:last-of-type) {
      margin-bottom: 20px;
    }

<<<<<<< HEAD
    &.no-active {
      &:hover,
      &:focus {
        background-image: linear-gradient(
          to bottom,
          rgba(darken(#85deff, 35%), 0.1) 0%,
          rgba(darken(#0cb3f0, 35%), 0.1) 100%
        );
        cursor: not-allowed;

        .inner-page-services_item-link {
          cursor: not-allowed;
        }

        .inner-page-services_item-title,
        .inner-page-services_item-subtitle {
          color: rgba($text-dark, 0.3);
        }

        .fake-link {
          color: #fff;
          &::after {
            width: 20px;
            background-color: rgba($text-underline, 0.3);
          }
        }
      }
    }

=======
>>>>>>> 4490a6bf788ee8d38e153acedbab535e4e8312a8
    &:hover,
    &:focus {
      background-image: linear-gradient(to bottom, #85deff 0%, #0cb3f0 100%);
      .inner-page-services_item-title,
      .inner-page-services_item-subtitle {
        color: #ffffff;
      }
    }

    &-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-basis: 65%;

      @media (max-width: $screen-sm) {
        flex-basis: 100%;
      }
    }

    &-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-basis: 35%;

      @media (max-width: $screen-sm) {
        flex-basis: 100%;
        margin-top: 20px;
      }
    }

    &-title {
      letter-spacing: 1.91px;
      font-size: 17px;
      color: $text-dark;
      text-transform: uppercase;
      transition: color 0.25s ease;

      @media (max-width: $screen-sm) {
        font-size: 14px;
      }
    }

    &-subtitle {
      margin-top: 10px;
      letter-spacing: 0.98px;
      color: #464646;
      font-size: 14px;
      font-weight: 300;
      line-height: 22px;
      transition: color 0.25s ease;
<<<<<<< HEAD
      // text-align: justify;
=======
>>>>>>> 4490a6bf788ee8d38e153acedbab535e4e8312a8

      @media (max-width: $screen-sm) {
        margin-top: 15px;
        font-size: 12px;
        line-height: 17px;
      }
    }

    .fake-link {
      position: relative;
      color: $text-dark;
      font-size: 14px;
      text-transform: uppercase;
      text-decoration: none;
      z-index: 0;

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

    &-link {
      display: flex;
      text-decoration: none !important;

      @media (max-width: $screen-sm) {
        flex-direction: column;
        // padding: 20px 30px;
      }
    }
  }
}
<<<<<<< HEAD

.inner-page.services {
  .inner-page_content-header {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    transform: none;
    padding: 0 25px;
    @media (max-width: $screen-sm) {
      flex-direction: column;
    }

    > div {
      flex-basis: 47%;
      p {
        text-align: justify;
      }
    }
  }
}
=======
>>>>>>> 4490a6bf788ee8d38e153acedbab535e4e8312a8
</style>
