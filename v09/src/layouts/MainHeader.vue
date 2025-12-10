<template>
    <h3>Main Header Layout</h3>
    <div>
        <p>아래는 기존 a 태그로 만든 링크 - refresh가 발생한다</p>
        <p>
            <a href="/">Home</a> |
            <a href="/product">Product</a> |
            <a href="/about">About</a> |
        </p>
    </div>
    <div>
        <p>야래는 Router Link로 만든 링크 - refresh가 발생하지 않는다!</p>
        <p>
            <RouterLink to="/">Home</RouterLink> |
            <RouterLink :to="{name: 'ProductPage'}">Product</RouterLink> |
            <RouterLink :to="{name: 'Product detail page', params: {id: '23'}, query: {lang: 'ko'}}">Product 23</RouterLink> |
            <RouterLink active-class="on" to="/about">About</RouterLink> |
        </p>
    </div>
</template>