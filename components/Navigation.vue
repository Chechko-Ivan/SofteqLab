<template>
  <nav class="navigation" role="navigation">
    <ul class="navigation_list">
      <li class="navigation_item">
        <nuxt-link class="navigation_link" to="/">
          <span class="navigation_link-line navigation_link-line-first"></span>
          <span class="navigation_link-line navigation_link-line-second">
            <span class="navigation_link-text">О нас</span>
          </span>
        </nuxt-link>
      </li>
      <li class="navigation_item">
        <nuxt-link class="navigation_link" to="/">
          <span class="navigation_link-line navigation_link-line-first"></span>
          <span class="navigation_link-line navigation_link-line-second">
            <span class="navigation_link-text">Услуги</span>
          </span>
        </nuxt-link>
      </li>
      <li class="navigation_item">
        <nuxt-link class="navigation_link" to="/">
          <span class="navigation_link-line navigation_link-line-first"></span>
          <span class="navigation_link-line navigation_link-line-second">
            <span class="navigation_link-text">Обратная связь</span>
          </span>
        </nuxt-link>
      </li>
      <li class="navigation_item">
        <nuxt-link class="navigation_link" to="/">
          <span class="navigation_link-line navigation_link-line-first"></span>
          <span class="navigation_link-line navigation_link-line-second">
            <span class="navigation_link-text">Контакты</span>
          </span>
        </nuxt-link>
      </li>
      <nuxt-link class="logo" to="/">
        <img src="~/static/logo.png" alt="Логотип SofteqLab">
      </nuxt-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$segment-light: #0cb3f0;
$segment-dark: #2b3663;
$segment-hover: #b3dbe9;

$text-color: #636262;
$text-underscore: #85deff;
$line: #bdbdbd;
$line-hover: #7f86a1;

.navigation {
  &_list {
    position: relative;
    width: 660px;
    height: 660px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    text-indent: 0;
    list-style: none;
    list-style-position: outside;
  }

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

        &-line-first {
          transform: rotate(45deg);
          margin: -22px;
        }

        &-line-second {
          left: 50%;
          transform: translate(-122%, -4340%);

          &::after {
            left: -7px;
          }
        }
        &-text {
          left: -5px;
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
          border-color: $segment-dark;
        }
        &-line-first {
          transform: rotate(-45deg);
          margin-top: -22px;
        }

        &-line-second {
          right: 50%;
          transform: translate(122%, -4340%);

          &::after {
            right: -7px;
          }
        }
        &-text {
          right: -5px;
          text-align: right;
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
          border-color: $segment-dark;
        }

        &-line-first {
          transform: rotate(-45deg);
          margin-top: 20px;
        }

        &-line-second {
          left: 50%;
          transform: translate(-122%, 4140%);

          &::after {
            left: -7px;
          }
        }
        &-text {
          left: -5px;
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

        &-line-first {
          transform: rotate(45deg);
          margin-top: 20px;
        }

        &-line-second {
          right: 50%;
          transform: translate(122%, 4140%);

          &::after {
            right: -7px;
          }
        }
        &-text {
          right: -5px;
          text-align: right;
        }
      }
    }

    &:nth-child(odd) {
      .navigation_link {
        &-line-first {
          right: 50%;
          margin-right: -30px;
        }
      }
    }

    &:nth-child(even) {
      .navigation_link {
        &-line-first {
          left: 50%;
          margin-left: -30px;
        }
      }
    }
  }

  &_link {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    background-color: tomato;
    overflow: hidden;
    outline: none;

    &:hover,
    &:focus {
      &::after {
        box-shadow: 0 0 0 15px rgba(#078bbb, 0.3);
      }

      .navigation_link-line {
        background-color: $line-hover;
      }

      .navigation_link-line-second::after {
        border-color: $line-hover;
      }
    }

    &::after {
      position: absolute;
      width: 112%;
      height: 112%;
      border: 30px solid $segment-light;
      border-radius: 50%;
      background-color: transparent;
      transition: box-shadow 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.75);
    }

    &-line {
      position: absolute;
      height: 1px;
      background-color: $line;
      transition: background-color 0.2s ease;
    }

    &-line-first {
      top: 50%;
      width: 60px;
    }

    &-line-second {
      top: 50%;
      width: 95px;

      &::after {
        position: absolute;
        top: 50%;
        transform: translateY(-43%);
        width: 7px;
        height: 7px;
        border-radius: 50%;
        border: 1px solid $line;
        transition: border-color 0.2s ease;
      }
    }

    &-text {
      position: absolute;
      bottom: 8px;
      // width: 130px;
      font-weight: 300;
      font-size: 12.5px;
      color: $text-color;
      text-transform: uppercase;

      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 6px;
        width: 20%;
        background-color: $text-underscore;
      }
    }
  }
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;

  img {
    width: 175px;
  }
}
</style>