<template>
  <div class="form_card flex flex-col gap-[4px]">
    <div class="form_card_item" v-for="item in countries" :key="item.id">
      <div class="form_card_item_heading">
        <div
          class="form_card_item_heading_name"
          @click="selectCountry(item.name)"
        >
          {{ item.name }}
        </div>
        <div class="down_form" @click="toggleCardBody(item.id)">
          <img
            src="@/assets/icons/down.svg"
            alt=""
            class="down_up"
            :class="{ 'rotate-180': openCards.includes(item.id) }"
          />
        </div>
      </div>
      <div class="form_card_item_body" v-show="openCards.includes(item.id)">
        <div
          class="form_card_item_body_item flex justify-start gap-[12px]"
          v-for="element in item.cities"
          :key="element.id"
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
const openCards = ref([]);

const selectCity = (city: string) => {
  emit("citySelected", city);
};

const selectCountry = (country: string) => {
  emit("countrySelected", country);
};

const toggleCardBody = (id: string) => {
  if (openCards.value.includes(id)) {
    openCards.value = openCards.value.filter((cardId: any) => cardId !== id);
  } else {
    openCards.value.push(id);
  }
};
</script>

<style scoped></style>
