<template>
  <div
    class="vlist-scroll-container"
    :style="{
      maxHeight: `${maxHeight}px`,
    }"
    @scroll="onscroll"
  >
    <div
      class="vlist-scroll-wrapper"
      :style="{
        height: `${scrollHeight}px`,
      }"
    >
      <div
        class="v-list-item"
        v-for="(item, index) in renderList"
        :key="index"
        @click="onListItemClick($event, item, refStartIndex + index)"
        :style="{
          height: `${itemHeight}px`,
          transform: `translateY(${refStartIndex * itemHeight}px)`,
        }"
      >
        <slot :listItem="item" :index="refStartIndex + index">
          <v-list-item :itemData="item"></v-list-item>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
// import {vue} from 'vue'
import vListItem from "../vListItem/index";
export default {
  components: { vListItem },
  name: "v-list",
  props: {
    listData: {
      type: Array,
      default: () => [],
    },
    maxHeight: {
      type: Number,
      default: 500,
    },
    itemHeight: {
      type: Number,
      default: 60,
    },
    startIndex: {
      type: Number,
      default: 0,
    },
    debounceTimeout: {
      type: Number,
      default: 40,
    },
  },
  watch: {
    startIndex(val) {
      this.refStartIndex = val;
    },
  },
  data() {
    const refStartIndex = this.startIndex;
    return {
      refStartIndex,
    };
  },
  timer: null,
  currentScrollTop: null,
  methods: {
    onscroll(e) {
      const timer = this.$options.timer;
      if (timer) clearTimeout(timer);
      this.$options.timer = setTimeout(() => {
        this.$options.timer = null;
        const currentScrollTop = (this.$options.currentScrollTop =
          e.target.scrollTop);
        const refStartIndex = Math.max(
          Math.floor(currentScrollTop / this.itemHeight - this.displayCount),
          0
        );
        this.refStartIndex = refStartIndex;
      }, this.debounceTimeout);
    },
    onListItemClick(event, data, index) {
      this.$emit("onItemClick", { event, data, index });
    },
  },
  computed: {
    renderCount() {
      return Math.floor((this.maxHeight / this.itemHeight) * 3);
    },
    displayCount() {
      return Math.floor(this.maxHeight / this.itemHeight);
    },
    endIndex() {
      return this.refStartIndex + this.renderCount;
    },
    renderList() {
      return this.listData.slice(this.refStartIndex, this.endIndex);
    },
    scrollHeight() {
      return Math.ceil(this.listData.length * this.itemHeight);
    },
  },
};
</script>

<style scope>
.vlist-scroll-container {
  overflow: auto;
}

.v-list-item {
  display: flex;
  align-items: center;
  padding: 5px;
}
.v-list-item:not(:last-child) {
  /* border-bottom: 1px solid #cfcfcf; */
}
.v-list-item:hover {
  background: #efefef;
}
</style>