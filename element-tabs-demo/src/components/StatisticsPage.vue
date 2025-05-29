<script setup lang="ts">
import { ref } from 'vue'
import { 
  User, 
  ShoppingCart, 
  Wallet, 
  UserFilled,
  ArrowUp
} from '@element-plus/icons-vue'

// 数据更新时间
const updateTime = '2025-05-10 12:00'

// 统计数据
const statisticsData = [
  {
    title: '总用户数',
    value: 12563,
    increase: '16.8%',
    color: '#409EFF',
    icon: User
  },
  {
    title: '今日订单量',
    value: 892,
    increase: '8.2%',
    color: '#67C23A',
    icon: ShoppingCart
  },
  {
    title: '总销售额',
    value: 1283476.5,
    format: true,
    increase: '12.5%',
    color: '#E6A23C',
    icon: Wallet
  },
  {
    title: '新增会员',
    value: 326,
    increase: '3.6%',
    color: '#F56C6C',
    icon: UserFilled
  }
]

// 任务完成度百分比
const taskCompletion = 70

// 格式化数字（添加千位分隔符）
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// 根据完成度获取不同的颜色
const getProgressColor = (percentage: number): string => {
  if (percentage < 30) {
    return '#F56C6C'
  } else if (percentage < 70) {
    return '#E6A23C'
  } else {
    return '#67C23A'
  }
}
</script>

<template>
  <div class="statistics-container">
    <h1>数据统计看板</h1>
    
    <!-- 数据更新时间提示 -->
    <el-alert
      title="数据更新时间"
      :description="updateTime"
      type="info"
      show-icon
      center
      :closable="false"
      class="update-time-alert"
    />
    
    <!-- 统计数据卡片组 -->
    <div class="statistics-cards">
      <el-card
        v-for="(stat, index) in statisticsData"
        :key="index"
        class="stat-card"
        :style="{'border-left': `4px solid ${stat.color}`}"
      >
        <div class="stat-content">
          <div class="stat-icon" :style="{'background-color': stat.color}">
            <el-icon size="24">
              <component :is="stat.icon" />
            </el-icon>
          </div>
          <div class="stat-info">
            <div class="stat-title">{{ stat.title }}</div>
            <div class="stat-value">
              {{ stat.format ? formatNumber(stat.value) : stat.value }}
            </div>
            <div class="stat-increase">
              <el-icon><ArrowUp /></el-icon>
              {{ stat.increase }}
            </div>
          </div>
        </div>
      </el-card>
    </div>
    
    <!-- 任务完成度进度条 -->
    <div class="progress-section">
      <h2>任务完成度</h2>
      <div class="progress-container">
        <el-progress 
          type="circle" 
          :percentage="taskCompletion" 
          :stroke-width="10"
          :width="200"
          :show-text="true"
          :format="() => `${taskCompletion}%`"
          :color="getProgressColor(taskCompletion)"
        />
        <div class="progress-description">
          <p>本月任务已完成 <span class="highlight">{{ taskCompletion }}%</span></p>
          <p>距离目标还有 <span class="highlight">{{ 100 - taskCompletion }}%</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.statistics-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #409EFF;
}

.update-time-alert {
  margin-bottom: 30px;
}

.statistics-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.stat-card {
  border-radius: 8px;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.stat-content {
  display: flex;
  align-items: center;
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 16px;
}

.stat-info {
  flex: 1;
}

.stat-title {
  color: #606266;
  font-size: 14px;
  margin-bottom: 8px;
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  color: #303133;
  margin-bottom: 6px;
}

.stat-increase {
  display: flex;
  align-items: center;
  color: #67C23A;
  font-size: 14px;
}

.progress-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}

h2 {
  margin-bottom: 20px;
  color: #606266;
}

.progress-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.progress-description {
  text-align: center;
  margin-top: 10px;
  color: #606266;
}

.highlight {
  font-weight: bold;
  color: #409EFF;
}

@media (min-width: 768px) {
  .progress-container {
    flex-direction: row;
    align-items: center;
    gap: 40px;
  }
}
</style> 