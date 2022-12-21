<template>
    <div class="reviews">
        <h3 class="reviews__title">{{ title }}</h3>
        <book-fedback
            :feedback="feedback"
            v-for="(feedback, idx) of feedbacks[0]"
            :key="idx"
        />
        <button
            type="button"
            class="reviews__more"
        >
            More
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { ref, toRefs } from "vue";

import BookFedback from "./BookFeedback.vue";

export default defineComponent({
    components: {
        BookFedback,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        feedbacks: {
            type: Array,
            required: true,
        },
    }
});
</script>

<style scoped lang="scss">
@import "../styles/main.scss";
.reviews {
    &__title {
        margin: 0 0 10px;
        font-weight: var(--text-bold_m);
        font-size: var(--font-size-l);
        line-height: 36px;
        color: var(--dark-grey);
    }

    &__more {
        margin: 0 auto;
        display: flex;
        background-color: transparent;
        align-items: center;
        border: none;
        font-size: var(--font-size-xs);
        line-height: 21px;
        text-align: center;
        color: var(--placeholder);
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }

    &__rating {
        display: flex;
    }
}
</style>
