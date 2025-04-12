<template>
  <div class="register-form">
    <h2>注册</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">用户名：</label>
        <input
          type="text"
          id="username"
          v-model="formData.username"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">密码：</label>
        <input
          type="password"
          id="password"
          v-model="formData.password"
          required
        />
      </div>
      <div class="form-group">
        <label for="confirmPassword">确认密码：</label>
        <input
          type="password"
          id="confirmPassword"
          v-model="formData.confirmPassword"
          required
        />
      </div>
      <button type="submit">注册</button>
    </form>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  formData: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update:formData'])

const handleSubmit = () => {
  if (props.formData.password !== props.formData.confirmPassword) {
    alert('两次输入的密码不一致！')
    return
  }
  console.log('注册表单提交', props.formData)
}
</script>

<style scoped>
.register-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}
</style>