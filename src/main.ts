import { createApp } from 'vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'
import hyRequest from './service'
import App from './App.vue'

import router from './router'
import store, { setupStore } from './store'

const app = createApp(App)

// 注册element-plus/其他
app.use(globalRegister)
app.use(router)
app.use(store)
setupStore()
app.mount('#app')

hyRequest.request({
  url: '/home/multidata',
  method: 'GET',
  headers: {},
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求的config')
      config.headers['token'] = '123'
      return config
    },
    responseInterceptor: (res) => {
      console.log('单独响应的response')
      return res
    }
  }
})

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

hyRequest
  .get<DataType>({
    url: '/home/multidata',
    showLoading: false
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
