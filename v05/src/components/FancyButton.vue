<template>
    <div>
        <button>
            <slot :slotCaption>슬롯 컴포넌트 기본 캡션</slot>
        </button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                slotCaption: "슬롯 컴포넌트 지정 캡션"
            }
        }
    }
</script>