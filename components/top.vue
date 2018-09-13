<template>
  <div class='top'>{{title}}</div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang='less' scoped>
  .top {
    border-bottom: 1px dotted grey;
  }
</style>
