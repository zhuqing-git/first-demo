<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />

    <feature-view />
    <tab-control class="tab-control" :titles="titles" @tabClick="tabCLick" />
<goods-list :goods="deliverType"/>
 
  </div>
</template>



<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import FeatureView from "./childComps/FeatureView";
import TabControl from "components/content/TabControl";
import GoodsList from '../../components/content/goods/GoodsList.vue';

import { getHomeMultidata, getHomeGoods } from "network/home";


export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    FeatureView,
    TabControl,
    GoodsList
  },
  computed:{
deliverType(){
  return this.goods[this.titles[this.currentIndex]].list
}
  },
  data() 
    {
    return {
      currentIndex:0,
      banners: [],
      titles: ["流行", "新款", "精选"],
      // recommends: [],
      goods: {
        流行: { page: 0, list: [] },
        新款: { page: 0, list: [] },
        精选: { page: 0, list: [] },
      },
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods(this.titles[0]);
    this.getHomeGoods(this.titles[1]);
    this.getHomeGoods(this.titles[2]);
  },
  methods: {
    /**网络请求相关 */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.message;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res.message.goods);
        this.goods[type].list.push(...res.message.goods);
        this.goods[type].page += 1;
        // console.log(this.goods);
      });
    },
     /**事件监听相关*/
      tabCLick(index){
      this. currentIndex= index

      }
  },
};
</script>


<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  /* 粘滞属性 */
  top: 44px;
  z-index: 9;
}
</style>