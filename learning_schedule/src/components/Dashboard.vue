<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p>父组件段落（红色）</p>
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>

<style scoped>
/* 父组件专属样式 */
.dashboard p {
  color: red;
}
</style>