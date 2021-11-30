<template>
  <div @click="fire" class="filter-item" :class="필터" :style="`background-image:url(${이미지})`">
    <slot name="a"></slot>
    <slot name="b"></slot>
  </div>
</template>

<script>
export default {
  props: {
    이미지: String,
    필터: Array,
  },
  methods:{
      fire(){
          this.emitter.emit('박스클릭함',this.필터)
      }
  }
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
</style>