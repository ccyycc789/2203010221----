<template>
  <div>
    <h2>旅行美食推荐</h2>
    <div class="list-item">意大利披萨</div>
    <div class="list-item">日本寿司</div>
    <div class="list-item">泰国冬阴功汤</div>
  </div>
</template>

<style scoped>
h2 {
  color: #333;
  margin-bottom: 25px;
  text-align: center;
  font-size: 1.8rem;
}

.list-item {
  padding: 15px;
  margin-bottom: 15px;
  background-color: #f0fff0;
  border-left: 4px solid #42b983;
  border-radius: 3px;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
}

.list-item:hover {
  background-color: #e0f5e9;
  transform: scale(1.02);
}
</style> 