<template>
  <div :class="themeClasses">
    <button @click="toggleTheme">切换主题</button>
    <ThemedContent :is-dark-mode="isDarkMode" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ThemedContent from './ThemedContent.vue'

const isDarkMode = ref(false)

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
}

const themeClasses = computed(() => ({
  'theme-switcher': true,
  'dark-mode': isDarkMode.value,
  'light-mode': !isDarkMode.value
}))
</script>

<style scoped>
.theme-switcher {
  padding: 20px;
  transition: background-color 0.3s ease;
}

.light-mode {
  background-color: #f0f8ff;
}

.dark-mode {
  background-color: #1a1a2e;
}

button {
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #3aa876;
}
</style>