<template>
  <div class="feedback-display">
    <h2>反馈内容</h2>
    <div class="content">
      <p v-if="feedback">{{ feedback }}</p>
      <p v-else class="empty">暂无反馈</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  feedback: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.feedback-display {
  border-top: 1px solid #eee;
  padding-top: 1rem;
}
.content {
  min-height: 60px;
  padding: 1rem;
  background: #f8f8f8;
  border-radius: 4px;
}
.empty {
  color: #666;
  font-style: italic;
}
</style>