import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入 Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入路由
import router from './router'

const app = createApp(App)
app.use(ElementPlus)
app.use(router) // 使用路由
app.mount('#app')
