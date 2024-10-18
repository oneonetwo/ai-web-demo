<template>
  <div class="transfer-wrapper">
    <el-transfer
      v-model="selectedItems"
      :data="products"
      filterable
      left-default-checked="[]"
      right-default-checked="[]"
      :titles="['列表 1', '列表 2']"
      :button-texts="['<', '>']"
      :render-content="renderProduct"
    >
    </el-transfer>

    <!-- 拖拽排序部分 -->
    <draggable v-model="sortedItems" :group="{ name: 'products' }" class="drag-area">
      <el-card v-for="item in sortedItems" :key="item.key" class="drag-item">
        {{ item.label }}
      </el-card>
    </draggable>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { ElCard } from 'element-plus';
import draggable from 'vuedraggable';

const products = ref([
  { key: 1, label: '广州' },
  { key: 2, label: '深圳' },
  { key: 3, label: '南京' },
  { key: 4, label: '西安' },
  { key: 5, label: '成都' },
  { key: 6, label: '上海' },
  { key: 7, label: '北京' }
]);

const selectedItems = ref([]);
const sortedItems = ref([]);

const renderProduct = (h, option) => {
  return h('span', option.label);
};

// 监听 selectedItems 的变化，更新排序项
watch(
  selectedItems,
  (newVal) => {
    sortedItems.value = products.value.filter((product) =>
      newVal.includes(product.key)
    );
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
.transfer-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  .drag-area {
    margin-top: 2rem;
    width: 300px;
    border: 1px dashed #ccc;
    padding: 1rem;
  }

  .drag-item {
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    background-color: #f5f5f5;
  }
}
</style>
