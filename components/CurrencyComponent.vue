<template>
  <div class="switcher relative">
    <div
      class="switcher_heading flex justify-between"
      @click="toggleDropdown"
      :class="{ '': isDropdownOpen }"
    >
      <span class="w-[40px] flex justify-start">

      {{ selectedCurrency.slice(2) }}
      </span>
      <img
        :class="{ 'rotate-180': isDropdownOpen }"
        src="@/assets/icons/down.svg"
        alt=""
        class="down_up"
      />
    </div>
    <transition name="slide-fade">
      <div
        v-if="isDropdownOpen"
        class="switcher_body p-[10px] gap-[10px] flex flex-col"
      >
        <div class="switcher_body_title p-[8px] gap-[10px]">Валюта</div>
        <div
          v-for="(currency, index) in currencies"
          :key="index"
          @click="selectCurrency(currency)"
          class="switcher_item"
          :class="{ current_switcher: currency === selectedCurrency }"
        >
          {{ currency }}
        </div>
      </div>
    </transition>
    <div class="overlay_bg" v-if="isDropdownOpen" @click="toggleDropdown"></div>
  </div>
</template>

<script setup lang="ts">
const isDropdownOpen = ref(false);
const selectedCurrency = ref("L-MDL");
const currencies = ref(["€-EUR", "L-MDL"]);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectCurrency = (currency: string) => {
  selectedCurrency.value = currency;
  isDropdownOpen.value = false;
};
</script>

<style>

</style>
