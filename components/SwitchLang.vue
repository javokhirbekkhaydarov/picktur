<template>
  <div class="switcher relative">
    <div
      class="switcher_heading flex justify-between"
      @click="toggleDropdown"
      :class="{ '': isDropdownOpen }"
    >
      <img :src="`/assets/icons/${selectedLang.code}.svg`" alt="" />
      <img
        :class="{ 'rotate-180': isDropdownOpen }"
        src="@/assets/icons/down.svg"
        alt=""
        class="down_up"
      />
    </div>
<!--    <transition name="slide-fade">-->
      <div
        v-if="isDropdownOpen"
        class="switcher_body p-[10px] gap-[10px] flex flex-col"
      >
        <div class="switcher_body_title p-[8px] gap-[10px]">Язык</div>
        <div
          v-for="item in locales"
          :key="item.code"
          @click="selectLanguage(item.code)"
          class="switcher_item flex"
          :class="{ current_switcher: item.code === selectedLang.code }"
        >
          <img :src="`/assets/icons/${item.code}.svg`" alt="" />
          <span>{{ item.name }}</span>
        </div>
      </div>
<!--    </transition>-->
    <div class="overlay_bg" v-if="isDropdownOpen" @click="toggleDropdown"></div>
  </div>
</template>

<script setup lang="ts">
const { locales, setLocale } = useI18n();
const isDropdownOpen = ref(false);
const selectedLang = ref({ code: "ru" });

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectLanguage = (code: string) => {
  selectedLang.value = { code };
  setLocale(code);
  isDropdownOpen.value = false;
};
</script>
