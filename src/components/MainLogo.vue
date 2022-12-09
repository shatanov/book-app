<template>
    <a
        href="#"
        class="logo"
        :class="{
            'logo--small': size ? size === 'sm' : size,
            'logo--large': size ? size === 'lg' : size,
        }"
        >Book<span class="logo__span">App</span></a
    >
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    props: {
        size: {
            type: String,
            required: true,
        },
    },
});
</script>

<style scoped lang="scss">
.logo {
    font-weight: var(--text-bold_l);
    color: var(--dark-grey);
    text-align: center;
    text-decoration: none;
    transition: color 0.3s;

    &--large {
        font-size: var(--font-size-xl);
        line-height: 54px;
    }

    &--small {
        font-size: 28px;
        line-height: 42px;
    }

    &:hover {
        color: var(--primary);
    }

    &:hover &__span {
        color: var(--dark-grey);
    }

    &__span {
        color: var(--primary);
    }
}
</style>
