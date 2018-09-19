<template>
  <div>
    <top />
    pageOne
    <el-button>
      <nuxt-link :to="'/dynamic/12' + query">动态嵌套路由dynamicOne</nuxt-link>
    </el-button>
  </div>
</template>

<script>
const components = {
  top: () => import('@/components/top.vue')
}
export default {
  components,
  computed: {
    query () {
      return `?id=${this.$route.query.id}`
    }
  }
}
</script>

<style>

</style>
