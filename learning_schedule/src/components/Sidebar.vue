<template>
  <div class="sidebar">
    <h2>Sidebar</h2>
    <p>侧边栏段落（蓝色）</p>
    <Profile />
  </div>
</template>

<script>
import Profile from './Profile.vue'

export default {
  components: {
    Profile
  }
}
</script>

<style scoped>
/* 子组件自身样式 */
.sidebar p {
  color: blue;
}

/* 深度选择器设置嵌套子组件样式 */
:deep(.profile p) {
  color: green !important;
}
</style>