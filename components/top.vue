<template>
  <div class='top'>
    <el-button  type='primary'>
      <nuxt-link :to="'/' + query">返回主页</nuxt-link>
    </el-button>
    {{title}}
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  computed: {
    query () {
      return `?id=${this.$route.query.id}`
    }
  }
}
</script>

<style lang='less' scoped>
  .top {
    border-bottom: 1px dotted grey;
  }
</style>
