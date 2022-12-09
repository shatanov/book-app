<template>
    <section class="set-books">
        <div class="container">
            <div class="set-books__info">
                <h2 class="set-books__title">{{ category.title }}</h2>
                <div class="spacer"></div>
                <a
                    href=""
                    class="set-books__link"
                    v-if="getBooksLength() >= MAX_BOOK_COMPONENTS_LENGTH"
                    >More</a
                >
            </div>
            <div class="set-books__wrapper">
                <book-component
                    :book="book"
                    v-for="(book, idx) in category.books.slice(
                        0,
                        MAX_BOOK_COMPONENTS_LENGTH
                    )"
                    :key="idx"
                ></book-component>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { toRefs } from "@vue/reactivity";

import BookComponent from "./BookComponent.vue";

export default defineComponent({
    components: {
        BookComponent,
    },
    props: {
        category: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const MAX_BOOK_COMPONENTS_LENGTH = 4;
        const { category } = toRefs(props);

        const getBooksLength = () => category.value.books.length;

        return { getBooksLength, MAX_BOOK_COMPONENTS_LENGTH };
    },
});
</script>

<style scoped lang="scss">
@import "../styles/main.scss";
.set-books {
    display: flex;
    flex-direction: column;
    width: 100%;

    &__genres {
        margin-bottom: 30px;
    }

    &__info {
        display: flex;
        margin-bottom: 20px;
    }

    &__title {
        @include full(start);
        font-weight: var(--text-bold_m);
        font-size: var(--font-size-l);
        line-height: 36px;
        margin: 0;
        color: var(--dark-grey);
    }

    &__link {
        @include full(end);
        font-weight: var(--text-bold_m);
        font-size: var(--font-size-xs);
        line-height: 21px;
        text-align: right;
        text-transform: uppercase;
        color: var(--primary);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    &__wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 40px;

        @include mobile-s {
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        }
    }
}

@include mobile {
    .set-books {
        &__title {
            line-height: 1;
        }

        &__link {
            line-height: 1;
        }
    }
}
</style>
