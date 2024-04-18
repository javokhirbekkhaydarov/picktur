<template>
  <div class="days_box">
    <div class="days_box_heading">
      <div class="days_box_heading_item">
        <div class="days_start">от</div>
        <img src="@/assets/icons/minus.svg" alt="" />
        <div class="days_count">5</div>
        <img src="@/assets/icons/plus.svg" alt="" />
      </div>
      <div class="days_box_heading_item">
        <div class="days_start">до</div>
        <img src="@/assets/icons/minus.svg" alt="" />
        <div class="days_count">7</div>
        <img src="@/assets/icons/plus.svg" alt="" />
      </div>
    </div>
    <div class="days_box_body">
      Выбраны туры с
      <span class="selected_days">06.03</span>
      по
      <span class="selected_days">13.03</span> <br />
      на
      <span class="selected_days">5-7 ночей</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
