<script setup lang="ts">
// 清理原有逻辑，使用路由导航
</script>

<template>
  <div class="container">
    <h1>旅行计划应用</h1>
    
    <nav class="nav-menu">
      <router-link to="/home" class="nav-link">首页</router-link>
      <router-link to="/destinations" class="nav-link">目的地</router-link>
      <router-link to="/food" class="nav-link">美食</router-link>
    </nav>
    
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #7bb7fa;
  font-size: 2.5rem;
  text-shadow: 0 0 10px rgba(123, 183, 250, 0.3);
}

.nav-menu {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  padding-bottom: 10px;
  border-bottom: 1px solid #555;
}

.nav-link {
  margin: 0 15px;
  padding: 10px 5px;
  color: #9cc7ff;
  text-decoration: none;
  position: relative;
  font-weight: bold;
  font-size: 1.1rem;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: #42b983;
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}

.router-link-active {
  color: #42b983;
  font-weight: bold;
}

.router-link-active::after {
  width: 100%;
  background-color: #42b983;
}

.content {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  min-height: 400px;
}
</style>
