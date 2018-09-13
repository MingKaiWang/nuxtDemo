<template>
  <section class="container">
    <top :title='title'/>
    <pageContent />
  </section>
</template>

<script>
import top from '~/components/top'
import pageContent from '~/components/pageContent'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  components: {
    top,
    pageContent
  },
  computed: mapState([
    'testData'
  ]),
  async fetch ({ store, params }) {
    let { data } = await axios.get(`http://suggest.taobao.com/sug?code=utf-8&q=商品关键字`)
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
    let data = await axios.get(`http://suggest.taobao.com/sug?code=utf-8&q=商品关键字`)
    return { title: '头部'}
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

