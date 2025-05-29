<template>
  <div>
    <h2>热门目的地</h2>
    
    <!-- 显示计划信息提示 -->
    <div v-if="isPlanMode" class="plan-info">
      您正在计划模式下浏览目的地，可以添加目的地到您的旅行计划中
    </div>
    
    <div class="list-container">
      <div class="list-item">
        <div>巴厘岛 - 自然风光</div>
        <button v-if="isPlanMode" class="add-btn">添加到计划</button>
      </div>
      
      <div class="list-item">
        <div>东京 - 现代都市</div>
        <button v-if="isPlanMode" class="add-btn">添加到计划</button>
      </div>
      
      <div class="list-item">
        <div>巴黎 - 浪漫之都</div>
        <button v-if="isPlanMode" class="add-btn">添加到计划</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isPlanMode = ref(false);

// 检查URL中是否有plan参数，并设置状态
const checkPlanParam = () => {
  isPlanMode.value = route.query.plan === 'true';
  console.log('计划模式状态:', isPlanMode.value);
};

// 监听路由变化
watch(
  () => route.query,
  () => {
    checkPlanParam();
  }
);

onMounted(() => {
  checkPlanParam();
});
</script>

<style scoped>
h2 {
  color: #333;
  margin-bottom: 25px;
  text-align: center;
  font-size: 1.8rem;
}

.plan-info {
  background-color: #daf0e4;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  text-align: center;
  color: #2c3e50;
  font-weight: bold;
  border-left: 4px solid #42b983;
}

.list-container {
  max-width: 600px;
  margin: 0 auto;
}

.list-item {
  padding: 15px;
  margin-bottom: 15px;
  background-color: #f0f8ff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  background-color: #e0f5e9;
}

.add-btn {
  padding: 6px 12px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.add-btn:hover {
  background-color: #3da775;
  transform: scale(1.05);
}
</style> 