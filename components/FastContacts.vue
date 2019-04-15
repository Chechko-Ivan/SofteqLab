<template>
  <address class="fast-contacts">
    <div class="fast-contacts_wrapper">
      <ul class="fast-contacts_list">
        <li class="fast-contacts_item">
          <div class="fast-contacts_item-left">
            <svg
              class="fast-contacts_icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20px"
              viewBox="0 0 348.077 348.077"
            >
              <path
                d="M340.273 275.083l-53.755-53.76c-10.707-10.664-28.438-10.34-39.518.744l-27.082 27.076-5.344-2.973c-17.102-9.476-40.51-22.464-65.14-47.113-24.704-24.7-37.704-48.144-47.21-65.257l-2.913-5.22 27.112-27.096c11.097-11.1 11.403-28.826.72-39.52L73.4 8.194c-10.682-10.68-28.42-10.356-39.518.744l-15.15 15.237.414.41c-5.08 6.482-9.325 13.958-12.484 22.02C3.74 54.28 1.927 61.603 1.098 68.94-6 127.785 20.9 181.564 93.866 254.54 194.74 355.41 276.033 347.79 279.54 347.417c7.638-.913 14.958-2.738 22.397-5.627 7.992-3.122 15.463-7.36 21.94-12.43l.33.294 15.348-15.03c11.074-11.098 11.393-28.83.716-39.542z"
              ></path>
            </svg>
          </div>
          <div class="fast-contacts_item-right">
            <h4 class="fast-contacts_item-title">Visit us</h4>
            <span class="fast-contacts_item-address">123 Manhattan address name, Los Algeles</span>
          </div>
        </li>
      </ul>
    </div>
  </address>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_colors.scss";
@import "~/assets/scss/_function.scss";
@import "~/assets/scss/_breakpoint.scss";

.fast-contacts {
  width: 100%;
  font-style: normal;

  &_wrapper {
    max-width: 100%;
    padding: 0 15px;
    margin: 0 auto;
    background: green;
  }

  &_list {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style: none;
    list-style-position: outside;
  }

  &_item {
    display: flex;
  }

  &_item-left {
    background-color: tomato;
  }

  &_icon {
    fill: $text-lighter;
  }
}
</style>