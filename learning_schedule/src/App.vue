<template>
  <div class="app">
    <h1>评论示例</h1>
    <CommentComponent>
      <!-- 默认插槽：评论内容 -->
      <p>这是一条评论的内容，展示在默认插槽中。</p>

      <!-- 具名插槽：头像 -->
      <template #avatar>
        <div class="custom-avatar">
          <img src="https://placekitten.com/40/40" alt="用户头像" />
        </div>
      </template>

      <!-- 具名插槽：操作按钮 -->
      <template #actions>
        <div class="custom-actions">
          <button class="action-button">回复</button>
          <button class="action-button">分享</button>
        </div>
      </template>

      <!-- 作用域插槽：点赞数 -->
      <template #likes="{ likes }">
        <div class="custom-likes">
          <span>❤️ {{ likes }}</span>
        </div>
      </template>
    </CommentComponent>
  </div>
</template>

<script setup>
import CommentComponent from './components/CommentComponent.vue'
</script>

<style>
.app {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
}

h1 {
  color: #2c3e50;
  margin-bottom: 30px;
  text-align: center;
}

.custom-avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.custom-actions {
  display: flex;
  gap: 10px;
}

.action-button {
  padding: 6px 12px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  color: #666;
  cursor: pointer;
  transition: background-color 0.3s;
}

.action-button:hover {
  background-color: #e0e0e0;
}

.custom-likes {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #ff4757;
}
</style>