<template>
    <div class="book">
        <div>
            <book-img :imgUrl="book.imgUrl" :size="'lg'"/>
        </div>
        <div class="book__info">
            <router-link :to="`/detailed/book/${book.id}`" class="book__name">{{book.name}}</router-link>
            <div class="book__description">
                {{book.decsription}}
            </div>
            <div class="book__score">
                <book-score :score="book.rating" :active="false"></book-score>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import BookScore from "./BookScore.vue"
import BookImg from "./BookImg.vue"

export default defineComponent({
    components : {
        BookScore,
        BookImg,
    },
    props: {
        book: {
            type: Object,
            required: true,
        }
    }
})
</script>


<style scoped lang="scss">
@import "../styles/main.scss";
.book {
    display: flex;
    justify-content: center;
    padding: 0 20px;
    gap: 20px;
    flex-wrap: wrap;

    &__score {
        display: flex;
        justify-content: start;
    }

    &__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 12px;
    }

    &__name {
        font-weight: var(--text-bold_m);
        font-size: var(--font-size-m);
        line-height: 27px;
        color: var(--dark-grey);
        text-decoration: none;
        text-align: center;

        &:hover {
            text-decoration: underline;
        }
    }

    &__description {
        font-size: var(--font-size-xs);
        line-height: 21px;
        color: var(--grey);
        text-overflow: ellipsis;
        overflow: hidden;
    }
}

@include mobile-s {
    .book {
        flex-wrap: nowrap;

        &__name {
            text-align: left;
        }
    }
}
</style>
