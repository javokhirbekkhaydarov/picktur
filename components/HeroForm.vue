<template>
  <div class="form rounded-[16px] bg-white p-[20px]">
    <div class="form_heading flex justify-start gap-[44px]">
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="{
          active_heading_item: index === activeIndex,
        }"
        @click="setActive(index)"
        class="flex gap-[4px] cursor-pointer form_heading_item"
      >
        <img :src="item.icon" alt="" />
        <span>{{ item.label }}</span>
      </div>
    </div>
    <form class="form_body flex justify-between">
      <div class="form_input_parent">
        <img src="/assets/icons/form/location.svg" alt="" />
        <input type="text" class="form_input" placeholder="Откуда" />
      </div>
      <div class="form_input_parent">
        <img src="/assets/icons/form/earth.svg" alt="" />
        <input type="text" class="form_input" placeholder="Куда" />
      </div>
      <div class="form_input_parent">
        <img src="/assets/icons/form/calendar.svg" alt="" />
        <input type="text" class="form_input" placeholder="Период отбытия" />
      </div>
      <div class="form_input_parent">
        <img src="/assets/icons/form/moon.png" alt="" />
        <input type="text" class="form_input" placeholder="Кол-во ночей" />
      </div>
      <div class="form_input_parent">
        <img src="/assets/icons/form/users.svg" alt="" />
        <input type="text" class="form_input" placeholder="Туристы" />
      </div>
      <div
        class="flex justify-center auth_button w-[190px] whitespace-nowrap text[16px] px-0"
      >
        <img
          src="/assets/icons/form/search.svg"
          draggable="false"
          alt=""
          class="w-[24px] h-[24px]"
        />
        <span> Найти туры</span>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const items = [
  { label: "Туры", icon: "/assets/icons/form/globus.svg" },
  { label: "Отели", icon: "/assets/icons/form/hotel.svg" },
  { label: "Горящие туры", icon: "/assets/icons/form/fire.svg" },
  { label: "Авиабилеты (скоро)", icon: "/assets/icons/form/plane.svg" },
];

const activeIndex = ref(0);

const setActive = (index: number) => {
  activeIndex.value = index;
};
</script>

<style scoped></style>
