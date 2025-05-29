<template>
  <div class="welcome">
    <h1>欢迎来到旅行计划</h1>
    <p>点击上方导航开始规划您的旅程</p>
    
    <!-- 认证提示信息 -->
    <div v-if="showAuthMessage" class="auth-message">
      <div class="auth-content">
        <i class="auth-icon">⚠️</i>
        {{ authMessageText }}
      </div>
    </div>
    
    <!-- 登录状态控制 -->
    <div class="login-controls">
      <div class="login-status">
        当前状态: <span :class="isLoggedIn ? 'status-logged-in' : 'status-logged-out'">
          {{ isLoggedIn ? '已登录' : '未登录' }}
        </span>
      </div>
      <button @click="toggleLogin" class="login-btn" :class="{ 'logout-btn': isLoggedIn }">
        {{ isLoggedIn ? '退出登录' : '登录' }}
      </button>
    </div>
    
    <div class="user-links">
      <h3>热门用户的旅行计划</h3>
      <div class="user-link-container">
        <router-link to="/user/johndoe" class="user-link">John Doe</router-link>
        <router-link to="/user/janedoe" class="user-link">Jane Doe</router-link>
        <router-link to="/user/anonymous" class="user-link">匿名用户</router-link>
      </div>
    </div>
    
    <button style="padding: 10px 20px; background-color: #42b983; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; font-weight: bold; margin-top: 20px;">
      开始规划
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watchEffect } from 'vue';
import { login, logout, getLoginStatus, authMessage } from '../router';

// 用于控制登录状态的响应式变量
const isLoggedIn = ref(false);

// 本地响应式变量，用于存储authMessage的值
const showAuthMessage = ref(false);
const authMessageText = ref('');

// 监听authMessage的变化
watchEffect(() => {
  if (authMessage.value) {
    showAuthMessage.value = authMessage.value.show;
    authMessageText.value = authMessage.value.message;
    console.log('认证消息状态更新:', showAuthMessage.value, authMessageText.value);
  }
});

// 切换登录状态
const toggleLogin = () => {
  if (isLoggedIn.value) {
    logout();
  } else {
    login();
  }
  isLoggedIn.value = getLoginStatus();
};

// 组件挂载时获取登录状态
onMounted(() => {
  isLoggedIn.value = getLoginStatus();
  
  // 强制设置一次提示信息（用于测试）
  if (!isLoggedIn.value) {
    showAuthMessage.value = true;
    authMessageText.value = '您需要登录后才能访问受保护的页面';
  }
});
</script>

<style scoped>
.welcome {
  text-align: center;
  padding: 40px 20px;
}

h1 {
  color: #333;
  margin-bottom: 30px;
  font-size: 2.2rem;
}

p {
  color: #444;
  margin-bottom: 30px;
  font-size: 1.2rem;
}

.auth-message {
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  color: #856404;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  animation: pulse 2s infinite;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 193, 7, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 193, 7, 0);
  }
}

.auth-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.auth-icon {
  font-size: 1.2rem;
}

.login-controls {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  margin: 20px auto;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.login-status {
  font-size: 1rem;
}

.status-logged-in {
  color: #28a745;
  font-weight: bold;
}

.status-logged-out {
  color: #dc3545;
  font-weight: bold;
}

.login-btn {
  padding: 8px 15px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

.login-btn:hover {
  background-color: #3da775;
  transform: translateY(-2px);
}

.logout-btn {
  background-color: #dc3545;
}

.logout-btn:hover {
  background-color: #c82333;
}

.user-links {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin: 30px auto;
  max-width: 500px;
}

h3 {
  margin-bottom: 20px;
  color: #333;
}

.user-link-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
}

.user-link {
  display: inline-block;
  padding: 10px 15px;
  background-color: #e0f0ff;
  color: #2c3e50;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-weight: bold;
}

.user-link:hover {
  background-color: #42b983;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style> 