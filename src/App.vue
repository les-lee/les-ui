<template>
  <v-list :item-height="itemHeight" :max-height="maxHeight" :list-data="data">
    <!-- <v-list-item></v-list-item> -->
  </v-list>
</template>

<script>

export default {
  name: "App",
  components: {
  },
  data() {
    let data = [];
    const nameList = [
      "小明",
      "小红",
      "小琼",
      "小雪",
      "小肥",
      "小钰",
      "小球",
      "小样",
    ];
    const titleList = [
      "开发经理",
      "产品经理",
      "前端开发",
      "后台开发",
      "算法岗位",
      "人工智能",
      "linux运维",
      "测试开发",
    ];
    for (let index = 0; index < 100000; index++) {
      data.push({
        id: index,
        title: titleList[index % 8],
        name: nameList[index % 8],
      });
    }
    return {
      itemHeight: 65,
      maxHeight: 550,
      data,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
