<template>
    <div class="feedback">
        <div class="feedback__info">
            <profile-component
                :user="feedback.user"
                :size="'sm'"
                :user-status="true"
            />
            <div class="spacer"></div>
            <div class="feedback__date">{{ feedback.date }}</div>
        </div>
        <p class="feedback__text" v-if="feedback.text">
            {{ feedback.text }}
            <a href="#" class="feedback__text--link">Развернуть</a>
        </p>
        <div class="feedback__rating rating">
            <book-score :score="feedback.rating" :active="false" />
            <div class="rating__score">{{ feedback.rating.toFixed(1) }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import BookScore from "./BookScore.vue";
import ProfileComponent from "./ProfileComponent.vue";

export default defineComponent({
    components: {
        BookScore,
        ProfileComponent,
    },
    props: {
        feedback: {
            type: Object,
            required: true,
        },
    },
});
</script>

<style scoped lang="scss">
@import "../styles/main.scss";
.feedback {
    &__info {
        @include flex-position(start);
    }

    &__date {
        font-size: var(--font-size-xs);
        line-height: 21px;
        color: var(--placeholder);
    }

    &__text {
        font-size: var(--font-size-xs);
        line-height: 25px;
        color: var(--grey);

        &--link {
            color: var(--primary);
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    &__rating {
        margin-bottom: 20px;
    }
}
</style>
