import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as getApis from './apis/http'
import area from '@/assets/js/area'
import util from '@/utils/util'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties['$http'] = getApis
app.config.globalProperties['$AREA'] = area
app.config.globalProperties['$utils'] = util
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
