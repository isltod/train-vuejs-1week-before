<template>
    <div>
        <h3>v-for 반복 바인딩</h3>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product, i) in productList">
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.delivery_price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <h3>v-if 조건 처리</h3>
    <div>
        <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='B'">B</h1>
        <h1 v-else>C</h1>
    </div>
    <h3>이벤트 처리</h3>
    <div>
        <button @click="increaseCounter" >Add 1</button>
        <p>The counter is : {{ counter }}</p>
    </div>
    <div>
        <select v-model="selectedVal" @change="changeSelect">
            <option value="서울">서울</option>
            <option value="경기">경기</option>
            <option value="전북">전북</option>
        </select>
    </div>
    <div>
        <h1>Computed Full Name: {{ computedFullName }}</h1>
    </div>
    <div>
        <h1>Watched Full Name: {{ watchedFullName }}</h1>
        <button @click="changeName">이름 변경</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            productList: [
                {"product_name": "기계식 키보드", "price": 25000, "category": "노트북/테블릿", "delivery_price": 5000},
                {"product_name": "무선 마우스", "price": 12000, "category": "노트북/테블릿", "delivery_price": 5000},
                {"product_name": "아이패드", "price": 725000, "category": "노트북/테블릿", "delivery_price": 5000},
                {"product_name": "테블릿 거치대", "price": 32000, "category": "노트북/테블릿", "delivery_price": 5000},
                {"product_name": "무선 충전기", "price": 42000, "category": "노트북/테블릿", "delivery_price": 5000},
            ],
            type: "B",
            counter: 0,
            selectedVal: '',
            first_name: 'wolf',
            last_name: 'Lee',
            watchedFullName: '',
        };
    },
    methods: {
        increaseCounter() {
            this.counter += 1;
        },
        changeSelect () {
            alert(this.selectedVal);
        },
        changeName() {
            this.first_name = "E.K."
        }
    },
    computed: {
        computedFullName() {
            return this.first_name + ' ' + this.last_name;
        }
    },
    watch: {
        first_name() {
            this.watchedFullName = this.first_name + ' ' + this.last_name;
        },
        last_name() {
            this.watchedFullName = this.first_name + ' ' + this.last_name;
        }
    }
}
</script>
<style scoped>
    table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
</style>