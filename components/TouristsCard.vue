<template>
  <div class="days_box">
    <div class="days_box_heading">
      <div class="days_box_heading_item">
        <div class="users_name">Взрослые</div>
        <div class="days_start">(от 18 лет)</div>
        <img src="@/assets/icons/minus.svg" alt="" @click="decrement" />
        <div class="days_count">{{ users }}</div>
        <img src="@/assets/icons/plus.svg" alt="" @click="increment" />
      </div>
    </div>
    <div class="days_box_body">
      <div
        class="add_child flex justify-between items-center"
        @click="openChild"
      >
        <span> Добавить ребенка </span>
        <img
          src="@/assets/icons/down.svg"
          alt=""
          :class="{ 'rotate-180': isOpen }"
        />
      </div>
      <transition name="slide-fade">
        <div class="ages_card" v-if="isOpen">
          <div
            class="form_card_item_heading ages_card_heading flex justify-start"
            v-for="age in ages"
            :key="age"
            @click="selectChild(age)"
          >
            <div class="age_name">
              {{ age.age }}
            </div>
          </div>
        </div>
      </transition>
      <transition name="slide-fade">
        <div
          class="ages_card"
          v-if="!isOpen"
          :class="children.length >= 4 ? ' h-[200]' : 'h-full'"
        >
          <div
            class="form_card_item_heading ages_card_heading flex justify-between"
            v-for="(child, index) in children"
            :key="index"
          >
            <div class="age_name">Ребенок, {{ child.age }}</div>
            <img
              src="@/assets/icons/close.svg"
              alt=""
              @click="removeAge(index)"
            />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import ages from "~/data/ages";

const users = ref(1);
const children = ref([]);
const isOpen = ref(false);

const emit = defineEmits();

const increment = () => {
  users.value++;
  emit("updateUser", users.value);
};

const decrement = () => {
  if (users.value > 1) {
    users.value--;
  }
  emit("updateUser", users.value);
};

const openChild = () => {
  isOpen.value = !isOpen.value;
};
const selectChild = (item: string) => {
  children.value.push(item);
  isOpen.value = false;
};
const removeAge = (index: number) => {
  children.value.splice(index, 1);
};
</script>

<style scoped></style>
