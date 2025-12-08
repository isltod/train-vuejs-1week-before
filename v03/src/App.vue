<script>
  export default {
    data() {
      return {
        productName: null,
        orderAmount: 1,
        productList: [
          // {name: "감귤", amount: 1},
        ],
        imgSrc: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
        navUrl: "https://www.daum.net",
        itemCounts: {hasItems: false, addItems: false},
        firstName: 'John',
        lastName: 'Doe',
      }
    },
    methods: {
      addProduct() {
        let item = {name: this.productName, amount: this.orderAmount};
        this.productList.push(item);
        this.productName = null;
        this.orderAmount = 1;
      },
      updateUrl() {
        // 바닐라 자바스크립트는 이렇게 하지만,
        // this.navUrl = document.getElementById("txtUrl").value;
        // vue refs는 이렇게 한다고...
        this.navUrl = this.$refs.refUrl.value;
      }
    },
    watch: {
      // 배열은 참조를 감시해서, 이렇게 해줘야 값을 감시하는 것으로 바뀐다..헌데 비효율적이고 새 문법을 써라...
      productList: {
        handler(newValue, oldValue) {
          if (newValue.length >= 2) {
            this.itemCounts.addItems = true;
          } else if (newValue.length >= 1) {
            this.itemCounts.hasItems = true;
          } else {
            this.itemCounts.hasItems = false;
            this.itemCounts.addItems = false;
          }
          console.log(oldValue);
      },
      deep: true
    }
    },
    computed: {
      fullName: {
        get() {
          return this.firstName + " " + this.lastName;
        },
        set(newValue) {
          const names = newValue.split(' ');
          this.firstName = names[0];
          this.lastName = names[names.length - 1];
        }
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
    <br />
    <div v-bind:class="itemCounts">
      <p>선택된 품목들: </p>
      <ul>
        <li v-for="item in productList">{{ item.name }} ({{ item.amount }}개)</li>
      </ul>
    </div>
    <hr>
    <h3>v-bind는 데이터->속성, v-on은 속성->데이터 단방향 바인딩</h3>
    <img v-bind:src="imgSrc" />
    <p>현재 이동할 사이트: <a :href="navUrl">{{ navUrl }}</a></p>
    <input type="text" id="txtUrl" ref="refUrl" :value="navUrl" />
    <button @click="updateUrl">v-bind는 이벤트로 속성을 바꿔야 한다</button>
    <hr />
    <p>Computed Full Name: {{ fullName }}, 한 번만 계산되고 이후는 캐싱 {{ fullName }}, {{ fullName }}... </p>
    <input type="text" v-model="fullName" placeholder="Enter full name...">
  </div>
</template>

<style>
  .hasItems {
    border: 5px solid goldenrod;
  }
  .addItems {
    background-color: yellowgreen;
  }
</style>
