<template>
  <section class="container">
    <top />
    <bottom />
  </section>
</template>

<script>
import top from '~/pages/top'
import bottom from '~/pages/bottom'
export default {
  components: {
    top,
    bottom
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>

