<template>
  <div class="settings-container">
    <h2>系统设置</h2>
    <p>在此页面您可以管理应用的各项设置</p>
    
    <div class="settings-section">
      <h3>个人偏好</h3>
      
      <div class="setting-item">
        <div class="setting-label">深色模式</div>
        <div class="setting-control">
          <label class="switch">
            <input type="checkbox">
            <span class="slider"></span>
          </label>
        </div>
      </div>
      
      <div class="setting-item">
        <div class="setting-label">接收通知</div>
        <div class="setting-control">
          <label class="switch">
            <input type="checkbox" checked>
            <span class="slider"></span>
          </label>
        </div>
      </div>
      
      <div class="setting-item">
        <div class="setting-label">语言</div>
        <div class="setting-control">
          <select>
            <option>简体中文</option>
            <option>English</option>
            <option>日本語</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.settings-container {
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

h3 {
  margin: 20px 0;
  color: #2c3e50;
  font-size: 1.4rem;
}

p {
  margin-bottom: 30px;
  font-size: 1.1rem;
}

.settings-section {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.setting-item:last-child {
  border-bottom: none;
}

.setting-label {
  font-size: 1.1rem;
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #42b983;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

select {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: white;
  min-width: 150px;
  font-size: 0.9rem;
}
</style> 