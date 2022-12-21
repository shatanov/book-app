<template>
    <router-link
        :to="hrefUrl"
        class="button-link"
        :class="{
            'button-link--primary': color === 'primary',
            'button-link--contrast': color === 'contrast',
        }"
    >
        <slot></slot>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    props: {
        hrefUrl: {
            type: Object,
            required: true,
        },

        color: {
            type: String,
            required: true,
        },
    },
});
</script>

<style scoped lang="scss">
@import "../styles/main.scss";
.button-link {
    box-sizing: border-box;
    width: 253px;
    height: 50px;
    @include flex-position(center);
    border-radius: var(--border-radius-m);
    font-weight: var(--text-bold_m);
    font-size: var(--text-size-s);
    line-height: 24px;
    text-align: center;
    color: var(--white);
    text-decoration: none;

    &--contrast {
        background-color: var(--contrast);

        &:hover {
            color: var(--contrast);
            background-color: var(--white);
            @include border(var(--contrast));
        }
    }

    &--primary {
        background-color: var(--primary);

        &:hover {
            color: var(--primary);
            background-color: var(--white);
            @include border(var(--primary));
        }
    }
}
</style>
