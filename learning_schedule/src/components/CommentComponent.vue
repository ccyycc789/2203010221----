<template>
  <div class="comment-section">
    <!-- 现有评论展示 -->
    <div class="comment" v-for="(comment, index) in comments" :key="index">
      <!-- 头像和用户信息区域 -->
      <div class="comment-header">
        <slot name="avatar">
          <div class="default-avatar">用户</div>
        </slot>
      </div>

      <!-- 评论内容区域 -->
      <div class="comment-content">
        {{ comment.content }}
      </div>

      <!-- 评论操作区域 -->
      <div class="comment-actions">
        <!-- 点赞数 -->
        <slot name="likes" :likes="comment.likes">
          <span class="likes-count">{{ comment.likes }}赞</span>
        </slot>

        <!-- 操作按钮 -->
        <div class="action-buttons">
          <button @click="handleLike(index)" class="like-button" :class="{ 'liked': comment.isLiked }">
            {{ comment.isLiked ? '取消赞' : '点赞' }}
          </button>
          <slot name="actions"></slot>
        </div>
      </div>
    </div>

    <!-- 评论输入区域 -->
    <div class="comment-input-section">
      <textarea
        v-model="newComment"
        placeholder="写下你的评论..."
        class="comment-input"
        rows="3"
      ></textarea>
      <button @click="addComment" class="submit-button" :disabled="!newComment.trim()">
        发表评论
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 评论列表状态
const comments = ref([
  {
    content: '这是一条评论的内容，展示在默认插槽中。',
    likes: 0,
    isLiked: false
  }
])

// 新评论输入
const newComment = ref('')

// 添加评论
const addComment = () => {
  if (newComment.value.trim()) {
    comments.value.push({
      content: newComment.value,
      likes: 0,
      isLiked: false
    })
    newComment.value = ''
  }
}

// 点赞处理函数
const handleLike = (index) => {
  const comment = comments.value[index]
  if (comment.isLiked) {
    comment.likes--
  } else {
    comment.likes++
  }
  comment.isLiked = !comment.isLiked
}
</script>

<style scoped>
.comment-section {
  max-width: 800px;
  margin: 0 auto;
}

.comment {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.comment-header {
  margin-bottom: 12px;
}

.default-avatar {
  width: 40px;
  height: 40px;
  background-color: #42b983;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.comment-content {
  margin-bottom: 12px;
  line-height: 1.5;
  color: #333;
}

.comment-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
}

.action-buttons {
  display: flex;
  gap: 8px;
  align-items: center;
}

.like-button {
  padding: 6px 12px;
  background-color: #f0f0f0;
  color: #666;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.like-button:hover {
  background-color: #e0e0e0;
}

.like-button.liked {
  background-color: #42b983;
  color: white;
}

.likes-count {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
}

.comment-input-section {
  margin-top: 20px;
}

.comment-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  resize: vertical;
  margin-bottom: 12px;
  font-family: inherit;
}

.comment-input:focus {
  outline: none;
  border-color: #42b983;
}

.submit-button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #3aa876;
}

.submit-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>