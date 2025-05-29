import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { ref } from 'vue'

// 受保护的路由名称列表
const protectedRoutes = ['Destinations', 'Food'];

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('./components/Home.vue'),
    children: [
      {
        path: '',
        name: 'HomeMain',
        component: () => import('./components/HomeMain.vue')
      },
      {
        path: 'profile',
        name: 'HomeProfile',
        component: () => import('./components/HomeProfile.vue')
      },
      {
        path: 'settings',
        name: 'HomeSettings',
        component: () => import('./components/HomeSettings.vue')
      }
    ]
  },
  {
    path: '/user/:username',
    name: 'User',
    component: () => import('./components/User.vue'),
    props: true
  },
  {
    path: '/destinations',
    name: 'Destinations',
    component: () => import('./components/Destinations.vue')
  },
  {
    path: '/food',
    name: 'Food',
    component: () => import('./components/Food.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 模拟用户登录状态
// 在实际应用中，这通常会从localStorage或Vuex/Pinia中获取
let isLoggedIn = false;

// 使用ref创建响应式的authMessage对象
export const authMessage = ref({
  show: false,
  message: '您需要登录后才能访问此页面'
});

// 添加全局前置守卫
router.beforeEach((to, from, next) => {
  console.log('路由变化:', from.path, '->', to.path);
  
  // 如果用户访问的是受保护的路由，但未登录
  if (protectedRoutes.includes(to.name as string) && !isLoggedIn) {
    console.log('访问受限：用户未登录，无法访问', to.name);
    
    // 设置认证消息 - 确保这里设置了正确的值
    authMessage.value = {
      show: true,
      message: '您需要登录后才能访问此页面'
    };
    
    // 重定向到首页
    next({ name: 'HomeMain' });
  } else {
    // 如果用户已登录或访问的不是受保护的路由
    // 如果不是去HomeMain，则清除消息
    if (to.name !== 'HomeMain') {
      authMessage.value.show = false;
    }
    next();
  }
});

// 暴露登录状态控制函数，以便在组件中使用
export function login() {
  isLoggedIn = true;
  authMessage.value.show = false;
  console.log('用户已登录');
  return isLoggedIn;
}

export function logout() {
  isLoggedIn = false;
  console.log('用户已登出');
  return isLoggedIn;
}

export function getLoginStatus() {
  return isLoggedIn;
}

export default router 