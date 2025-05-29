<template>
  <div class="home-container">
    <div class="sub-nav">
      <router-link to="/home" class="sub-link" exact>首页</router-link>
      <router-link to="/home/profile" class="sub-link">个人资料</router-link>
      <router-link to="/home/settings" class="sub-link">系统设置</router-link>
    </div>
    
    <!-- 编程式导航按钮 -->
    <div class="program-nav">
      <button @click="navigateToDestinations" class="nav-button">
        查看热门目的地
      </button>
    </div>
    
    <!-- 子路由视图 -->
    <div class="router-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// 编程式导航函数
const navigateToDestinations = () => {
  router.push({
    name: 'Destinations',  // 使用命名路由
    query: { plan: true }  // 传递查询参数
  });
  
  console.log('正在跳转到目的地页面，并传递plan=true参数');
};
</script>

<style scoped>
.home-container {
  width: 100%;
}

.sub-nav {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.sub-link {
  padding: 8px 15px;
  margin: 0 10px;
  background-color: #f0f8ff;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-weight: bold;
}

.sub-link:hover {
  background-color: #e0f0ff;
  transform: translateY(-2px);
}

.router-link-active.sub-link {
  background-color: #42b983;
  color: white;
}

.program-nav {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.nav-button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.nav-button:hover {
  background-color: #3da775;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.router-content {
  min-height: 300px;
}
</style> 