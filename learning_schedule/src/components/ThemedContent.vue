<template>
  <div :class="contentClasses">
    <p>{{ themeText }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  isDarkMode: {
    type: Boolean,
    default: false
  }
})

const themeText = computed(() => 
  props.isDarkMode ? '当前为暗色模式' : '当前为亮色模式'
)

const contentClasses = computed(() => ({
  'themed-content': true,
  'dark': props.isDarkMode,
  'light': !props.isDarkMode
}))
</script>

<style scoped>
.themed-content {
  padding: 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.light {
  background-color: #87ceeb;
  color: #2c3e50;
}

.dark {
  background-color: #1e3799;
  color: #ffffff;
}

p {
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>