<template>
  <div>
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      v-model="keyWords"
      @input="searchList"
    />
    <!-- 搜索下容器 -->
    <div class="search_wrap">
      <!-- 标题 -->
      <p class="hot_title">热门搜索</p>
      <!-- 热搜关键词容器 -->
      <div class="hot_name_wrap">
        <!-- 每个搜索关键词 -->
        <span
          class="hot_item"
          v-for="(item, index) in hotWordsList"
          :key="index"
          @click="keyWords = item.first"
          >{{ item.first }}</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import { getHotWordsListApi, getAboutSongListApi } from "@/api";
export default {
  data() {
    return {
      hotWordsList: [],
      keyWords: "",
    };
  },
  mounted() {
    this.getKeyWordsList();
    this.getList();
  },
  methods: {
    async getKeyWordsList() {
      const res = await getHotWordsListApi();
      this.hotWordsList = res.data.result.hots;
    },
    searchList() {},
    async getList() {
      const res = await getAboutSongListApi({
        keywords: "哈哈哈",
      });
      console.log(res);
    },
  },
};
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}

/* 给单元格设置底部边框 */
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>
