<template>
    <div>
        <h1>Hello, {{ title }}!</h1>
        <h3>HTML의 텍스트에 데이터 바인딩</h3>
        <div>{{ htmlString }}!</div>
        <div v-html="htmlString"></div>
        <h3>Form 요소의 값에 데이터 바인딩</h3>
        <input type="text" v-model="valueModel" /><br />
        <input type="number" v-model.number="numberModel" /> <br/>
        <textarea v-model="message"></textarea><br/>
        <select v-model="state">
            <option value="02">서울</option>
            <option value="032">경기</option>
            <option value="063">전북</option>
        </select><br/>
        <div>
            <label><input type="checkbox" value="서울" v-model="checked"> 서울</label>
            <label><input type="checkbox" value="경기" v-model="checked"> 경기</label>
            <label><input type="checkbox" value="전북" v-model="checked"> 전북</label>
            <br />
            <span>체크한 지역: {{ checked }}</span>
        </div>
        <div>
            <label><input type="radio" v-bind:value="radioVal1" v-model="picked"> 서울</label>
            <label><input type="radio" v-bind:value="radioVal2" v-model="picked"> 경기</label>
            <label><input type="radio" v-bind:value="radioVal3" v-model="picked"> 전북</label>
            <br />
            <span>선택한 지역: {{ picked }}</span>
        </div>
        <h3>HTML 태그의 속성에 데이터 바인딩</h3>
        <div>
            <input type="text" v-model="textVal" />
            <button v-bind:disabled="textVal==''">Clikc</button>
        </div>
        <div class="container" v-bind:class="{
            'active': isActive, 'text-red': hasError
        }">Class Binding</div>
        <div v-bind:style="styleObj">인라인 스타일 바인딩</div>
        <div><img v-bind:src="imgSrc" /></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'World',
            htmlString: '<p style="color:red;">This is a red string.</p>',
            valueModel: 'South Korea',
            numberModel: 3,
            message: '여러 줄을 입력할 수 있는 textarea 경우 입니다...',
            state: "032",
            checked: [],
            picked: '',
            radioVal1: "서울",
            radioVal2: "경기",
            radioVal3: "전북",
            textVal: "",
            isActive: true,
            hasError: false,
            styleObj: {color: 'red', fontSize: '18px'},
            imgSrc: "https://kr.vuejs.org/images/logo.png",
        };
    }
}
</script>
<style scoped>
    container {
        width: 100%;
        height: 200px;
    }
    .active {
        background: yellow;
        font-weight: bold;
    }
    .text-red {
        color: red;
    }
</style>