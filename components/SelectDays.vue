<template>
  <div class="days_box">
    <div class="days_box_heading">
      <div class="days_box_heading_item">
        <div class="days_start">от</div>
        <img src="@/assets/icons/minus.svg" alt="" @click="decrement('from')" />
        <div class="days_count">{{ from }}</div>
        <img src="@/assets/icons/plus.svg" alt="" @click="increment('from')" />
      </div>
      <div class="days_box_heading_item">
        <div class="days_start">до</div>
        <img src="@/assets/icons/minus.svg" alt="" @click="decrement('to')" />
        <div class="days_count">{{ to }}</div>
        <img src="@/assets/icons/plus.svg" alt="" @click="increment('to')" />
      </div>
    </div>
    <div class="days_box_body">
      Выбраны туры с
      <span class="selected_days">06.03</span>
      по
      <span class="selected_days">13.03</span> <br />
      на
      <span class="selected_days">{{ day }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">

const from = ref(5);
const to = ref(7);

const emit = defineEmits();
defineProps({
  day:{}
})
const increment = (type: string) => {
  if (type === "from") {
    from.value++;
  } else if (type === "to") {
    to.value++;
  }
  emit('updateDay', `${from.value}-${to.value}`);
};

const decrement = (type: string) => {
  if (type === "from" && from.value > 1) {
    from.value--;
  } else if (type === "to" && to.value > 1) {
    to.value--;
  }
  emit('updateDay', `${from.value}-${to.value}`);
};
</script>

<style scoped></style>
