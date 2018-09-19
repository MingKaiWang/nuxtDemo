<template>
  <div>
    <top />
    dynamicOne 
    {{id}}
  </div>
</template>

<script>
const components = {
  top: () => import('@/components/top.vue')
}
export default {
  components,
  validate({ params }) {
    // return !isNaN(+params.id)
    return true
  },
  async asyncData ({ params }) {
    console.log(params)
    return {id: params.dynamicOne}
  }
}
</script>

<style>

</style>
