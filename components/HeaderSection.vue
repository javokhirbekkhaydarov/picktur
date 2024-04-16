<template>
  <div class="header bg-white flex justify-center">
    <div
      class="container max-w-[1290px] py-6 flex justify-around align-middle items-center gap-[101px]"
    >
      <LogoComponent />
      <ul class="links flex justify-between gap-[50px]">
        <li>
          <router-link
            :to="localePath('/')"
            class="link_name"
            :class="{ active_link_name: isCurrentPath(localePath('/')) }"
          >
            <img
              src="@/assets/icons/active_plane.svg"
              draggable="false"
              alt=""
            />
            Главная
          </router-link>
        </li>
        <li>
          <router-link to="/" class="link_name"> Горящие туры </router-link>
        </li>
        <li>
          <router-link to="/" class="link_name"> Направления </router-link>
        </li>
        <li>
          <router-link to="/" class="link_name"> О нас </router-link>
        </li>
        <li>
          <router-link to="/" class="link_name"> Контакты </router-link>
        </li>
      </ul>
      <div class="header_nav_end flex justify-between items-center gap-[20px]">
        <CurrencyComponent />
        <div class="stroke_line flex w-[2px] h-[44px]"></div>
        <SwitchLang />
        <div class="auth_button flex items-center w-[123px]">
          <img src="@/assets/icons/person.svg" draggable="false" alt="" />
          Вход
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const isCurrentPath = (name: string) => {
  const route = useRoute();
  return route.fullPath === name;
};
</script>
<style scoped></style>
