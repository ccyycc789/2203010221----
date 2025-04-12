<template>
  <div class="feedback-form">
    <h2>提交反馈</h2>
    <form @submit.prevent="handleSubmit">
      <textarea
        v-model="inputText"
        placeholder="请输入您的反馈..."
        rows="4"
      ></textarea>
      <button type="submit">提交反馈</button>
    </form>
    
    <FeedbackDisplay :feedback="currentFeedback" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FeedbackDisplay from './FeedbackDisplay.vue'

const inputText = ref('')
const currentFeedback = ref('')

const handleSubmit = () => {
  if (inputText.value.trim()) {
    currentFeedback.value = inputText.value
    inputText.value = ''
  }
}
</script>

<style scoped>
.feedback-form {
  margin-bottom: 2rem;
}
textarea {
  width: 100%;
  margin-bottom: 1rem;
  padding: 8px;
}
button {
  padding: 8px 16px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>