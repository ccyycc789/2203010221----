<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { CircleCheck } from '@element-plus/icons-vue'

// 商品数据
const productImages = [
  'https://n.sinaimg.cn/sinakd10109/267/w640h427/20221108/357e-c8203ad69c2f1e362ae7bf06c5377f90.jpg',
  'https://n.sinaimg.cn/sinakd20200805ac/532/w1280h852/20200805/dfef-ixkvvuc1690341.jpg',
  'https://p7.itc.cn/q_70/images03/20210404/62f82aa858e24a4a98a61cef801ef29f.png',
  'https://x0.ifengimg.com/ucms/2022_50/EE12B893EA76594491C2F11EACA75DCE9E858D02_size296_w592_h399.png',
  'https://img3.jiemian.com/101/original/20200730/159611412867364000_a700x398.jpg'
]

// 商品信息
const product = {
  title: '黄金',
  price: 750.00,
  description: '黄金是贵金属，具有保值和增值的功能，是投资和收藏的理想选择。'
}

// 商品数量
const quantity = ref(1)

// 计算总价
const totalPrice = computed(() => {
  return (quantity.value * product.price).toFixed(2)
})

// 对话框控制
const confirmDialogVisible = ref(false)
const successDialogVisible = ref(false)

// 立即购买
const handleBuy = () => {
  confirmDialogVisible.value = true
}

// 确认购买
const confirmPurchase = () => {
  confirmDialogVisible.value = false
  successDialogVisible.value = true
  
  setTimeout(() => {
    successDialogVisible.value = false
    ElMessage({
      message: '购买成功！',
      type: 'success'
    })
  }, 2000)
}
</script>

<template>
  <div class="product-container">
    <h1>商品展示页面</h1>

    <!-- 商品轮播图 -->
    <div class="carousel-container">
      <el-carousel :interval="3000" type="card" height="300px">
        <el-carousel-item v-for="(img, index) in productImages" :key="index">
          <img :src="img" class="carousel-image" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 商品信息 -->
    <el-card class="product-info">
      <h2>{{ product.title }}</h2>
      <div class="price">￥{{ product.price.toFixed(2) }}/克</div>
      <p>{{ product.description }}</p>

      <div class="purchase-area">
        <div class="quantity-selector">
          <span>数量：</span>
          <el-input-number 
            v-model="quantity" 
            :min="1" 
            :max="99"
            size="large"
          />
          <span class="unit">克</span>
        </div>

        <el-button type="danger" size="large" @click="handleBuy">立即购买</el-button>
      </div>
    </el-card>

    <!-- 总价确认对话框 -->
    <el-dialog
      v-model="confirmDialogVisible"
      title="确认订单"
      width="30%"
      center
    >
      <div class="confirm-dialog-content">
        <h3>{{ product.title }}</h3>
        <div class="confirm-details">
          <div class="confirm-item">
            <span>数量：</span>
            <span>{{ quantity }} 克</span>
          </div>
          <div class="confirm-item">
            <span>单价：</span>
            <span>￥{{ product.price.toFixed(2) }}/克</span>
          </div>
          <div class="confirm-item total-price">
            <span>总价：</span>
            <span>￥{{ totalPrice }}</span>
          </div>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="confirmDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmPurchase">确认购买</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 购买成功对话框 -->
    <el-dialog
      v-model="successDialogVisible"
      title="提示"
      width="30%"
      :show-close="false"
      center
    >
      <div class="dialog-content">
        <el-icon class="success-icon"><CircleCheck /></el-icon>
        <span>购买成功！</span>
      </div>
    </el-dialog>
  </div>
</template>

<style scoped>
.product-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.carousel-container {
  margin-bottom: 30px;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.product-info {
  margin-bottom: 30px;
}

.price {
  font-size: 24px;
  color: #f56c6c;
  margin: 15px 0;
  font-weight: bold;
}

.purchase-area {
  display: flex;
  align-items: center;
  margin-top: 30px;
  justify-content: space-between;
}

.quantity-selector {
  display: flex;
  align-items: center;
}

.quantity-selector span {
  margin-right: 10px;
}

.unit {
  margin-left: 10px;
  font-size: 16px;
}

.dialog-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.success-icon {
  font-size: 48px;
  color: #67c23a;
  margin-bottom: 15px;
}

.confirm-dialog-content {
  padding: 10px;
}

.confirm-details {
  margin-top: 20px;
}

.confirm-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.total-price {
  font-weight: bold;
  font-size: 18px;
  color: #f56c6c;
  padding-top: 10px;
  border-top: 1px dashed #ddd;
}
</style> 