<template>
  <div class="hero_section flex justify-center">
    <CarouselComponent />
    <div
      class="container max-w-[1290px] flex justify-start flex-col gap-[80px]"
    >
      <div class="hero_texts">
        <div class="hero_title">
          Забронируй отель Albatros Aqua Blu и плати только за двоих
        </div>
        <div class="hero_description">2 детей отдыхают бесплатно</div>
        <div class="hero_description">{{$t('hello')}}</div>
      </div>
      <HeroForm />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
