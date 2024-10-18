// 1. 业务需求，给出一个商品列表，包含所有的商品，用户能从中选择部分商品，并且能对商品进行排序
<template>
  <div class="product-list">
    <div class="sort-options">
      <label for="sort">排序方式:</label>
      <select v-model="sortKey" @change="sortProducts">
        <option value="name">名称</option>
        <option value="price">价格</option>
      </select>
    </div>

    <ul>
      <li v-for="product in sortedProducts" :key="product.id">
        <input type="checkbox" :value="product.id" v-model="selectedProducts" />
        <span>{{ product.name }} - ￥{{ product.price }}</span>
      </li>
    </ul>

    <div class="selected-products">
      <h3>已选择商品:</h3>
      <ul>
        <li v-for="id in selectedProducts" :key="id">
          {{ products.find(product => product.id === id).name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const products = ref([
  { id: 1, name: '商品A', price: 100 },
  { id: 2, name: '商品B', price: 200 },
  { id: 3, name: '商品C', price: 150 },
]);

const selectedProducts = ref([]);
const sortKey = ref('name');

const sortedProducts = computed(() => {
  return [...products.value].sort((a, b) => {
    if (sortKey.value === 'price') {
      return a.price - b.price;
    } else {
      return a.name.localeCompare(b.name);
    }
  });
});

const sortProducts = () => {
  // 触发计算属性更新
};
</script>

<style scoped lang="scss">
.product-list {
  .sort-options {
    margin-bottom: 1rem;
  }
}
</style>
