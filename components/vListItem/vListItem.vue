<template>
  <div class="v-list-item">
    <div class="v-list-item-left">{{ itemData.id || Date.now() }}</div>
    <div class="v-list-item-right">
      <div>{{ itemData.title || "title" }}</div>
      <div>{{ itemData.name || "name" }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-list-item",
  props: ["itemData"],
};
</script>

<style scope>
.v-list-item {
  display: flex;
  align-items: center;
}

.v-list-item-left {
  width: 30%;
}

.v-list-item-right {
  flex: 1;
}
</style>