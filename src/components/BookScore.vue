<template>
    <div class="score">
        <div class="score__star" v-for="i in (MAX_SCORE - getScore())" :key="i">
            <span class="material-symbols-rounded"> star </span>
        </div>
        <div
            class="score__star score__star--active"
            v-for="i in getScore()"
            :key="i"
        >
            <span class="material-symbols-rounded"> star </span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { toRefs } from "@vue/reactivity";

export default defineComponent({
    props: {
        score: {
            type: Number,
            required: true,
        },
        active: {
            type: Boolean,
            required: true,
        },
    },
    setup(props) {
        const MAX_SCORE = 5;
        const { score } = toRefs(props);
        const getScore = () => Math.round(score.value);

        return { MAX_SCORE, getScore };
    },
});
</script>

<style scoped lang="scss">
@import "../styles/main.scss";
.score {
    display: flex;
    flex-direction: row-reverse;
    gap: 10px;

    .score__star {
        cursor: pointer;

        & > .material-symbols-rounded {
            color: #f8cf04;
            font-size: 36px;
            font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
        }

        // &:hover > .material-symbols-rounded {
        //     font-variation-settings: "FILL" 1;
        // }

        // &:hover ~ .score__star .material-symbols-rounded {
        //     font-variation-settings: "FILL" 1;
        // }

        &--active > .material-symbols-rounded {
            font-variation-settings: "FILL" 1;
        }
    }
}
</style>
