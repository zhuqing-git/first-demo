<template>
  <swiper>
    <swiper-item v-for="(item, i) in banners" :key="i">
      <a :href="item.navigator_url">
        <img :src="item.image_src" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>