<template>
  <div class="user-container">
    <h2>{{ username }} 的旅行计划</h2>

    <div v-if="username === 'johndoe'">
      <p>计划1：巴黎之旅</p>
      <p>计划2：东京之旅</p>
    </div>

    <div v-else-if="username === 'janedoe'">
      <p>计划1：纽约之旅</p>
      <p>计划2：伦敦之旅</p>
    </div>

    <div v-else>
      <p>该用户还没有制定旅行计划。</p>
    </div>

    <router-link :to="{ path: '/home' }" class="back-link">返回首页</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const username = ref(route.params.username);

// 监听路由参数变化
watch(
  () => route.params.username,
  (newUsername) => {
    username.value = newUsername;
    console.log(`${newUsername} 的旅行计划页面已加载`);
  }
);

onMounted(() => {
  console.log(`${username.value} 的旅行计划页面已加载`);
});
</script>

<style scoped>
.user-container {
  padding: 20px;
  color: #333;
}

h2 {
  color: #2c3e50;
  margin-bottom: 25px;
  font-size: 1.8rem;
  border-bottom: 2px solid #42b983;
  padding-bottom: 10px;
  display: inline-block;
}

p {
  margin: 15px 0;
  padding: 12px;
  background-color: #f5f5f5;
  border-left: 3px solid #42b983;
  font-size: 1.1rem;
}

.back-link {
  display: inline-block;
  margin-top: 30px;
  padding: 8px 15px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.back-link:hover {
  background-color: #3da775;
  transform: translateY(-2px);
}
</style> 