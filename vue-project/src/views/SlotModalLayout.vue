<template>
    <article>
        <div>
            <slot name="header"></slot>
        </div>
        <div>
            <slot></slot>
        </div>
        <div>
            <slot name="footer"></slot>
        </div>
    </article>
</template>