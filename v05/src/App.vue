<script>
  import SlotLayout from './components/SlotLayout.vue';
  import FancyButton from './components/FancyButton.vue';
  export default {
    components: {SlotLayout, FancyButton}
  }
</script>

<template>
  <div>
    <SlotLayout>
      <template v-slot:header>
        <h1>이것은 부모 컴포넌트의 헤더</h1>
      </template>
      <template #default>
        <p class="content">이것은 부모 컴포넌트의 콘텐츠, default의 경우 슬롯 컴포넌트의 기본 값은 안나온다...</p>
      </template>
      <template #footer></template>
    </SlotLayout>
    <FancyButton>
      <span style="color: red; font-weight: bold;">부모 컴포넌트 캡션</span>
    </FancyButton>
    <FancyButton v-slot="{slotCaption}">
      <span style="color: blue; font-weight: bold;">{{ slotCaption }}</span>
    </FancyButton>
  </div>
</template>

<style></style>
