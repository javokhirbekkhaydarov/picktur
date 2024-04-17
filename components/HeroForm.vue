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
    <PForm />
  </div>
</template>

<script setup lang="ts">
import PForm from "~/components/PForm.vue";

const items = ref([
  { label: "Туры", icon: "/assets/icons/form/globus.svg" },
  { label: "Отели", icon: "/assets/icons/form/hotel.svg" },
  { label: "Горящие туры", icon: "/assets/icons/form/fire.svg" },
  { label: "Авиабилеты (скоро)", icon: "/assets/icons/form/plane.svg" },
]);

const activeIndex = ref(0);


const setActive = (index: number) => {
  activeIndex.value = index;
};

</script>

<style scoped></style>
