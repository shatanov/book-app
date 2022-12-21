<template>
    <div
        class="book-info__footnotes"
        :class="{
            'book-info__footnotes--sm': size === 'sm',
        }"
    >
        <div
            class="footnote"
            v-for="footnote in footnotes"
            :key="footnote.name"
            :class="{
                'footnote--addition': !footnote.status === true,
                'footnote--addition_sm': size === 'sm',
            }"
        >
            {{ footnote.name }}
        </div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    props: {
        footnotes: {
            type: Array,
            required: true,
        },
        size: {
            type: String,
            required: false,
        },
    },
});
</script>

<style scoped lang="scss">
@import "../styles/main.scss";
.footnote {
    font-weight: var(--text-bold_m);
    font-size: var(--font-size-m);
    line-height: 27px;
    color: var(--dark-grey);

    &--sm {
        font-size: var(--font-size-s);
        line-height: 24px;
    }

    &--addition {
        font-size: var(--font-size-s);
        line-height: 24px;
        color: var(--contrast);
    }

    &--addition_sm {
        font-size: var(--font-size-xs);
        line-height: 21px;
        color: var(--contrast);
    }
}
</style>
