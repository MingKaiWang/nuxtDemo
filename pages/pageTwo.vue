<template>
  <div>
    <top />
    pageTwo
  </div>
</template>

<script>
const components = {
  top: () => import('@/components/top.vue')
}
export default {
  components,
}
</script>

<style>

</style>
