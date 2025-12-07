<script>
  export default {
    data: function() {
      return {
        count: 0,
        methodStr: "메서드",
        lastKey: '',
        x: 0,
        y: 0,
        coord: '',
      }
    },
    methods: {
      greeting(str) {
        return `태그가 랜더링되는 순간 이 ${str} 호출!!!`;
      },
      createAlert() {
        alert("경고창이 떴습니다!")
      },
      getKey(e) {
        this.lastKey = e.key;
      },
      getMouseCoord(e) {
        this.x = e.offsetX;
        this.y = e.offsetY;
      },
      getCoordStr() {
        this.coord = "x: " + this.x + ", y: " + this.y;
      }
    }
  }
</script>

<template>
  <div>
    <p>v-on:clic에서 count 증가: {{ count }}</p>
    <button v-on:click="count++">count 증가</button>
    <p>{{ greeting(this.methodStr) }}</p>
    <button @click.once="createAlert">한 번만 뜨는 경고창</button><br />
    <input type="text" @:keydown.ctrl.q="getKey" />
    <p>Ctrl 또는 Ctrl+q를 누르면 반응: {{ lastKey }}</p>
    <div id="dispArea" @mousemove="getMouseCoord" @click.right.prevent="getCoordStr">
      <p>x: {{ x }}</p>
      <p>y: {{ y }}</p>
      <p>마우스 우클릭하면 메뉴가 안 뜨고 여기에 좌표가 표시된다: {{ coord }}</p>
    </div>
  </div>
</template>

<style>
  #dispArea {
    width: 200px;
    height: 200px;
    background-color: goldenrod;
  }
</style>
