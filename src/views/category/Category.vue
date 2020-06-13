<template>
  <div class="category">
    <common-nav-bar>
      <template #middle>分类</template>
    </common-nav-bar>
    <!-- 左侧滚动区 -->
    <common-scroll class="container1">
      <category-left-nav @itemClick="itemClick" :categorys="categorys" />
    </common-scroll>
    <!-- 右侧滚动区 -->
    <common-scroll class="container2">
      <category-grid-view :subcategory="subcategory" />
    </common-scroll>
  </div>
</template>

<script>
import { reqCategory, reqSubcategory } from "network/category";
import CategoryLeftNav from "./base/LeftNav";
import CategoryGridView from "./base/GridView";
export default {
  name: "Category",
  data() {
    return {
      categorys: [], // 存储左侧导航栏信息
      subcategory: [], // 存储右侧信息
      currentIndex: 0
    };
  },
  components: {
    CategoryLeftNav,
    CategoryGridView
  },
  created() {
    this.getCategory();
  },
  methods: {
    itemClick(index) {
      // console.log(index)
      this.currentIndex = index;
    },
    async getCategory() {
      const result = await reqCategory();
      // 左侧栏的数据
      this.categorys = result.data.category.list;
      // 右侧栏的数据
      this.getSubcategory();
    },
    async getSubcategory() {
      const { maitKey } = this.categorys[this.currentIndex];
      // console.log(maitKey)
      const result = await reqSubcategory(maitKey);
      // console.log(result)
      this.subcategory = result.data.list;
    }
  }
};
</script>

<style lang="less" scoped>
.nav-bar {
  background-color: lightgreen;
  font-weight: bold;
  color: #fff;
}

.wrapper {
  height: calc(100vh - 93px);
}

.container1 {
  position: fixed;
  top: 44px;
  bottom: 49px;
  width: 100px;
}

.container2 {
  position: fixed;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 100px;
}
</style>