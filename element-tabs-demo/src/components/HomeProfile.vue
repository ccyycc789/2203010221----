<template>
  <div class="profile-container">
    <h2>个人资料</h2>
    <p>这是用户个人资料页面，您可以在此查看和修改个人信息。</p>
    <div class="profile-info">
      <div class="info-item">
        <strong>用户名：</strong> 旅行者001
      </div>
      <div class="info-item">
        <strong>邮箱：</strong> traveler001@example.com
      </div>
      <div class="info-item">
        <strong>注册时间：</strong> 2023年5月15日
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  padding: 20px;
  color: #333;
}

h2 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 1.8rem;
  border-bottom: 2px solid #42b983;
  padding-bottom: 10px;
  display: inline-block;
}

p {
  margin-bottom: 30px;
  font-size: 1.1rem;
}

.profile-info {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.info-item {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
  font-size: 1.1rem;
}

.info-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
</style> 