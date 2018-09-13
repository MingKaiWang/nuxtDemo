<template>
  <div class='left'>
    <el-menu
      default-active="pageOne"
      class="el-menu-vertical-demo">
      <el-menu-item v-for='(name, i) in list'
        :key='i'
        :index="name">
        <i class="el-icon-menu"></i>
        <span slot="title"><nuxt-link :to="name">{{name}}</nuxt-link></span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        'pageOne',
        'pageTwo',
        'pageThree'
      ]
    }
  }
}
</script>

<style scoped lang='less'>
  .left {
    width: 200px;
    border-right: 1px dotted grey;
  }
</style>
