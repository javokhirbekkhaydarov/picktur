<template>
  <div class="carousel_page">
    <div class="items-center">
      <!-- -->
      <swiper
        :loop="true"
        :modules="modules"
        :navigation="false"
        :slides-per-view="1"
        @slideChange="onSlideChange"
        @swiper="onSwiper"
        :autoplay="true"
        :draggable="true"
        :pagination="true"
      >
        <swiper-slide
          class="slide_item"
          v-for="slide in data"
          :key="slide"
          style="height: 920px;"
        >
          <div v-if="slide.image" class="right-swiper-item-img">
            <img
              class="main-img"
              loading="lazy"
              :alt="slide.image"
              :src="slide.image"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const url = "slider-product";
const data = [
  { image: "/assets/images/1.png" },
  { image: "/assets/images/2.png" },
  { image: "/assets/images/3.png" },
];

const onSwiper = (swiper: any) => swiper;
const onSlideChange = () => {};

const modules = [Navigation, Scrollbar, Pagination, Autoplay];
</script>

<style >
.carousel_page {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
}
.main-img {
  width: 100%;
  object-fit: contain;
}
.swiper-pagination-bullet {
  background: var(--white) !important;
  height: 10px;
  width: 10px;
  border: 0 !important;
}
.swiper-pagination-bullet-active {
  border-radius: 50px !important;
  background: var(--white);
  opacity: 1;
}
.swiper-pagination {
  bottom: 20% !important;
}
</style>
