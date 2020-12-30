<template>
  <v-list
    :item-height="itemHeight"
    :max-height="maxHeight"
    :list-data="data"
    :debounceTimeout="40"
    @onItemClick="onItemClick"
  >
    <template v-slot="{ listItem, index }">
      <div class="v-list-item">{{ listItem.name + index }}</div>
    </template>
  </v-list>
</template>

<script lang="ts">
import {ListItem} from '../types/index'
export default {
  name: "App",
  components: {},
  setup() {

  },
  data() {
    let data:Array<string> = [];
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
  methods: {
    onItemClick(payload) {
      console.log(payload, "负载");
    },
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
