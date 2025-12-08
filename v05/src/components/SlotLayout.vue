<template>
    <div>
        <header>
            <slot name="header">헤더 기본 값</slot>
        </header>
        <main>
            <slot>콘텐츠 기본 값</slot>
        </main>
        <footer>
            <slot name="footer" :slotFooter>푸터 기본 값</slot>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                slotFooter: "슬롯 콤포넌트가 가지고 있는 푸터 값"
            }
        }
    }
</script>