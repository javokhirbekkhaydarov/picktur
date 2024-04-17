<template>
  <div class="form_card flex flex-col gap-[4px]">
    <div class="form_card_item" v-for="item in countries">
      <div class="form_card_item_heading flex justify-between">
        <div
          class="form_card_item_heading_name"
          @click="selectCountry(item.name)"
        >
          {{ item.name }}
        </div>
        <img src="@/assets/icons/down.svg" alt="" />
      </div>
      <div class="form_card_item_body">
        <div
          class="form_card_item_body_item flex justify-start gap-[12px]"
          v-for="element in item.cities"
          @click="selectCity(element.name)"
        >
          <input type="checkbox" />
          <div class="form_card_item_body_item_name">
            {{ element.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  countries: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits();
const selectCity = (city: string) => {
  emit("citySelected", city);
};
const selectCountry = (country: string) => {
  emit("countrySelected", country);
};
</script>

<style scoped></style>
