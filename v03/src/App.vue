<script>
  export default {
    data() {
      return {
        productName: null,
        orderAmount: 1,
        productList: [
          {name: "감귤", amount: 1},
        ]
      }
    },
    methods: {
      addProduct() {
        let item = {name: this.productName, amount: this.orderAmount};
        this.productList.push(item);
        this.productName = null;
        this.orderAmount = 1;
      }
    }
  }
</script>

<template>
  <div>
    <h3>v-model로 양방항 바인딩된 상품 주문 정보</h3>
    <form @submit.prevent="addProduct">
      <p>품목: <input type="text" required v-model="productName"></input></p>
      <p>수량: <select v-model="orderAmount">
        <option value="1">1개</option>
        <option value="2">2개</option>
        <option value="3">3개</option>
        <option value="4">4개</option>
        <option value="5">5개</option>
      </select></p>
      <button>상품 추가</button>
    </form>
    <hr />
    <p>선택된 품목들: </p>
    <ul>
      <li v-for="item in productList">{{ item.name }} ({{ item.amount }}개)</li>
    </ul>
  </div>
</template>

<style></style>
