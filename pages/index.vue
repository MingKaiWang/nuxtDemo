<template>
  <section class="container">
    <top :title='title'
    @click.stop.native='showContent = true'
    />
    <pageContent v-if='showContent' />
  </section>
</template>

<script>
// 动态组件 code split
const components = {
  top: () => import('@/components/top.vue'),
  pageContent: () => import('@/components/pageContent.vue'),
}
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  components,
  computed: mapState([
    'testData'
  ]),
  data () {
    return {
      showContent: false
    }
  },
  // beforecreate created 在b、s端均被调用
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('create')
  },
  async fetch ({ store, params }) {
    console.log('ft')
    let { data } = await axios.get(`http://suggest.taobao.com/sug?code=utf-8&q=商品关键字`)
    console.log(data)
    store.commit('setTestData', data)
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', pageContent: 'My custom description' }
      ]
    }
  },
  async asyncData ({ params }) {
    console.log('async')
    // let data = await axios.get(`http://suggest.taobao.com/sug?code=utf-8&q=商品关键字`)
    return { title: '点击显示下面的内容'}
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

