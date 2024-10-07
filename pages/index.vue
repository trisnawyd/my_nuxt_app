<template>
  <div
    class="my-10 relative h-[300px] w-full bg-cover bg-center flex items-center justify-center flex-col"
    style="
      background-image: url('https://img.trvcdn.net/https://s3.ap-southeast-2.amazonaws.com/thebalibible.com/cms/Global_10Travlr/372926305.jpg?imgeng=m_box');
    "
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Content on top of background -->
    <div
      class="relative z-10 text-white text-center p-8 flex items-center justify-center flex-col"
    >
      <h1 class="text-3xl font-bold">Your Title Here</h1>
      <p>Some additional text on the background.</p>
    </div>
  </div>

  <!-- carousel -->
  <div class="container mx-auto px-10 my-8 py-8">
    <Carousel
      ref="myCarousel"
      v-bind="carouselSettings"
      :breakpoints="carouselBreakpoints"
      :items-to-scroll="1"
      :items-to-show="1"
      snap-align="start"
      class="-mx-2"
      @slide-start="handleSlideStart"
    >
      <Slide v-for="item in 6" :key="item">
        <div
          class="bg-blue-800 text-white rounded flex items-center justify-center w-full h-[347px] text-2xl mx-2 shadow"
        >
          {{ item }}
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import type { VNode } from "vue";

interface ISlideEvent {
  currentSlideIndex: number;
  prevSlideIndex: number;
  slidesCount: number;
  slidingToIndex: number;
}

interface ICarouselConfig {
  itemsToShow: number;
  itemsToScroll: number;
}
interface ICarouselData {
  config: ICarouselConfig;
}

interface ICarouselElement extends HTMLElement {
  updateSlidesData: (options: { currentSlide: number }) => void;
  data: ICarouselData;
}

const myCarousel = ref<ICarouselElement>();

const carouselSettings = ref({
  itemsToShow: 1,
  itemsToScroll: 1,
});

const carouselBreakpoints = ref({
  768: {
    itemsToShow: 3,
    itemsToScroll: 1,
  },
  993: {
    itemsToShow: 4,
    itemsToScroll: 1,
  },
});

const handleSlideStart = ({
  currentSlideIndex,
  slidingToIndex,
  slidesCount,
}: ISlideEvent) => {
  const config = myCarousel.value?.data.config;
  const itemsToShow = config?.itemsToShow!;

  if (slidingToIndex > currentSlideIndex) {
    if (currentSlideIndex + 1 >= slidesCount - itemsToShow) {
      myCarousel.value?.updateSlidesData({
        currentSlide: slidesCount - 1,
      });
    }
  }
};
</script>

<style>
.carousel__prev--disabled,
.carousel__next--disabled {
  @apply opacity-0;
}

.carousel__next {
  @apply transition duration-300 w-[34px] h-[34px] max-h-[34px] max-w-[34px] bg-white rounded-full translate-x-[61%] -translate-y-[45%];
}

.carousel__prev {
  @apply transition duration-300 w-[34px] h-[34px] max-h-[34px] max-w-[34px] bg-white rounded-full -translate-x-[61%] -translate-y-[45%];
}

.carousel__next svg,
.carousel__prev svg {
  @apply w-[24px] h-[24px] max-h-[24px] max-w-[24px];
}

.carousel__next svg {
  @apply translate-x-[5%] translate-y-[3%];
}

.carousel__prev svg {
  @apply -translate-x-[5%] -translate-y-[3%];
}
</style>
