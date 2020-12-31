<template>
  <v-list :max-height="550" :item-height="65" :list-data="listData"></v-list>
  <v-button></v-button>
  <div class="test-stylus">red</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

interface ListItem {
  id: string | number;
  name: string;
  title: string;
}

@Options({
  components: {},
})
export default class App extends Vue {
  listData: Array<ListItem> = [];
  created() {
    const nameList: Array<string> = ["小红", "小明", "小白"];
    const titleList: Array<string> = ["前端开发", "后台开发", "产品经理"];
    for (let index = 0; index < 10000; index++) {
      this.listData.push({
        id: index,
        name: nameList[index % 3],
        title: titleList[index % 3],
      });
    }
  }
}
</script>

<style lang="stylus">
.test-stylus
  color red
</style>
