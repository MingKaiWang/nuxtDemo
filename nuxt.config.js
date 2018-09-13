module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxtdemo',
    meta: [
      { charset: 'utf-8' },
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'},
      {hid: 'description', name: 'description', content: '猫评网利用大量数据精确筛选用户需要的内容，内容包括要闻、 社区生活、传统文化、法律财经、教育移民、医疗健康、艺术时尚、旅游地产、美食、娱乐体育。'},
      {hid: 'keyswords', name: 'keyswords', content: '猫评手,猫评网,数据,评论分析,从评论看新闻,中文,媒体,评论网站,观点,时效,即时新闻,独立社区'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  // router
  router: {
    middleware: ['a', 'b']
  },
  plugins: [{
    src: '~plugins/ElementUI',
    ssr: true,
  }],
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/css/main.css'
  ],  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

