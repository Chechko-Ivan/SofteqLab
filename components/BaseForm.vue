<template>
  <form class="form">
    <div class="form_wrapper">
      <h3 class="form_title">Форма обратной связи</h3>
      <div class="form_main">
        <div class="form_row">
          <div class="field">
            <input v-model="name" type="text" name="name" id="name" placeholder=" " required>
            <label for="name">
              Ваше имя
              <sup>*</sup>
            </label>
          </div>

          <div class="field">
            <input
              v-model="companyName"
              type="text"
              name="company-name"
              id="company-name"
              placeholder=" "
            >
            <label for="company-name">Компания</label>
          </div>
        </div>

        <div class="form_row">
          <div class="field">
            <input v-model="tel" type="tel" name="phone-number" id="phone-number" placeholder=" ">
            <label for="phone-number">Номер телефона</label>
          </div>

          <div class="field">
            <input v-model="email" type="email" name="email" id="email" placeholder=" " required>
            <label for="email">
              Email адрес
              <sup>*</sup>
            </label>
          </div>
        </div>

        <div class="md-layout-item">
          <md-field>
            <label for="font">Выберите услугу</label>
            <md-select v-model="pickedServices" name="pickedServices" required>
              <md-option value="Внедрение ERP-системы">Внедрение ERP-системы</md-option>
              <md-option value="Разработка программного обеспечения">Разработка ПО</md-option>
              <md-option value="Консалтинговые услуги">Консалтинговые услуги</md-option>
              <md-option value="Продажа отраслевого программного обеспечения">Продажа отраслевого ПО</md-option>
            </md-select>
          </md-field>
        </div>

        <div class="form_row">
          <div class="field">
            <input
              v-model="message"
              type="text"
              name="message"
              id="message"
              placeholder=" "
              required
            >
            <label for="message">
              Ваше сообщение
              <sup>*</sup>
            </label>
          </div>
        </div>
      </div>
      <span class="form_submit">
<<<<<<< HEAD
        <span v-if="isSuccess" data-aos="fade">Сообщение отправлено!</span>
=======
>>>>>>> 4490a6bf788ee8d38e153acedbab535e4e8312a8
        <button v-on:click.prevent="submitForm" class="base-button" type="submit">Отправить</button>
      </span>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      pickedServices: "",
      name: "",
      companyName: "",
      tel: "",
      email: "",
<<<<<<< HEAD
      message: "",
      isSuccess: false
=======
      message: ""
>>>>>>> 4490a6bf788ee8d38e153acedbab535e4e8312a8
    };
  },
  methods: {
    submitForm() {
      const body = new FormData();
      body.append("name", this.name);
      body.append("tel", this.tel);
      body.append("email", this.email);
      body.append("message", this.message);
      body.append("companyName", this.companyName);
      body.append("pickedServices", this.pickedServices);
      let options = {
        method: "POST",
        body: body
      };
      fetch("./mail.php", options).then(res => {
        console.log(res);
<<<<<<< HEAD
        this.isSuccess = true;
=======
>>>>>>> 4490a6bf788ee8d38e153acedbab535e4e8312a8
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_colors.scss";
@import "~/assets/scss/_function.scss";
@import "~/assets/scss/_breakpoint.scss";

.base-button {
  background-color: transparent;
  border: 0;
  display: inline-block;
  position: relative;
  color: $text-dark;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  z-index: 0;
<<<<<<< HEAD
  cursor: pointer;
=======
>>>>>>> 4490a6bf788ee8d38e153acedbab535e4e8312a8

  &:not(:last-of-type) {
    margin-right: vw(30px);

    @media (max-width: $screen-sm) {
      margin-right: vw(80px);
    }
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

@keyframes animateImageAbout {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(vw(70px), vh(-30px));
  }
}

.form {
  position: relative;
  width: calc(100% - vw(70px);
  background-color: #ffffff;
  padding: vh(40px) vw(40px) vh(30px) vw(40px);
  box-shadow: 0 0 11px 2px rgba(224, 222, 220, 0.75);

  &::after {
    content: "";
    position: absolute;
    width: 210px;
    height: 210px;
    top: 0;
    right: 0;
    background-image: $gradient;
    z-index: -1;
    animation-delay: 1s;
    animation-name: animateImageAbout;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &_wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &_title {
    color: $text-dark;
    font-size: 17px;
    letter-spacing: 1.91px;
    text-transform: uppercase;

    @media (max-width: $screen-sm) {
      text-align: center;
    }
  }

  &_main {
    padding: vh(55px) vw(45px) 0 vw(45px);

    @media (max-width: $screen-xl) {
      padding: vh(25px) vw(45px) 0 vw(45px);
    }
  }

  &_row {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: $screen-xl) {
      flex-direction: column;
    }

    @media (max-width: $screen-lg) {
      flex-direction: row;
    }

    @media (max-width: $screen-sm) {
      flex-direction: column;
    }
  }

  &_submit {
    margin-top: 25px;
    display: flex;
<<<<<<< HEAD
    justify-content: space-between;

    button {
      margin-left: auto;
    }

    span {
      margin-left: vw(35px);
      font-size: 17px;
      text-transform: uppercase;

      @media (max-width: $screen-osx) {
      font-size: 15px;
    }

    @media (max-width: $screen-sm) {
      font-size: 10px;
    }
    }
=======
    justify-content: flex-end;
>>>>>>> 4490a6bf788ee8d38e153acedbab535e4e8312a8
  }
}

.field {
  display: flex;
  flex-flow: column-reverse;
  width: 100%;
  margin-bottom: 15px;

  @media (max-width: $screen-sm) {
      margin-bottom: 5px;
    }

  &:not(:last-of-type) {
    margin-right: vw(25px);
  }
}
label,
input {
  transition: all 0.2s;
  touch-action: manipulation;
}

input {
  font-size: 16px;
  height: 32px;
  border: 0;
  border-bottom: 1px solid #898989;
  -webkit-appearance: none;
  border-radius: 0;
  padding: 0;
  cursor: text;
}

input:focus {
  outline: 0;
  border-bottom: 1px solid $line-dark;
}

label {
  font-size: 12px;
  letter-spacing: 0.84px;
  color: #898989;
}

input:placeholder-shown + label {
  cursor: text;
  max-width: 66.66%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform-origin: left bottom;
  transform: translate(0, 30px) scale(1.1);
}

::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}

input:focus::-webkit-input-placeholder {
  opacity: 1;
}

input:not(:placeholder-shown) + label,
input:focus + label {
  transform: translate(0, 0) scale(1);
  cursor: pointer;
}
</style>