import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "../src/router";
import store from '../src/store'
import PanelHead from './components/panelHead.vue';
import 'element-plus/dist/index.css';
//刷新后的动态路由添加
const localData = localStorage.getItem('pz_v3pz')
if(localData){
  store.commit('dynamicMenu',JSON.parse(localData).menu.routerList)
  store.state.menu.routerList.forEach(item=>{
    router.addRoute('main',item)
  })
}

// router.beforeEach((to,from)=>{
//   const token = localStorage.getItem('pz_token');
//   //非登录页面token不存在
//   if(!token&& to.path !=='login'){
//     return '/login'
//     // next('/login');
//   }else if(token && to.path=== '/login'){
//     // next('/');
//     return '/'
//   }else{
//     // next();
//     return true
//   }
// })


import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app=createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('PanelHead',PanelHead)

// 路由挂载
app.use(router)
//store挂载
app.use(store)
app.mount('#app')
