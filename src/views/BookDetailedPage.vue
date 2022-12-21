<template>
    <top-bar />
    <main class="main wrapper__main">
        <section class="detailed">
            <div class="container">
                <div class="detailed__wrapper">
                    <div class="detailed__info">
                        <div class="detailed__img">
                            <div>
                                <book-img
                                    :size="'xl'"
                                    :imgUrl="book().imgUrl"
                                />
                            </div>
                        </div>
                        <div class="detailed__buttons">
                            <button-link
                                :hrefUrl="'/'"
                                :color="'primary'"
                                >Write review</button-link
                            >
                            <button-link
                                :hrefUrl="'/'"
                                :color="'contrast'"
                                >Rate the book</button-link
                            >
                        </div>
                    </div>
                    <div class="detailed__info">
                        <div class="book-info">
                            <h1 class="book-info__title book-info__title--lg">
                                {{ book().name }}
                            </h1>
                            <book-footnotes
                                :footnotes="book().footnotes || []"
                            />
                            <div class="book-info__description">
                                {{ book().decsription }}
                            </div>
                            <div class="book-info__description">
                                {{ book()?.additional_description }}
                            </div>
                            <div class="book-info__reviews">
                                <book-reviews
                                    :title="'Reviews'"
                                    :feedbacks="
                                        book()?.feedback?.slice(0, 1) || []
                                    "
                                />
                            </div>
                            <div class="book-info__rating reviews">
                                <book-reviews
                                    :title="'Book rating'"
                                    :feedbacks="
                                        book()?.feedback?.slice(1, 2) || []
                                    "
                                />
                            </div>
                        </div>
                    </div>
                    <div class="detailed__buttons detailed__buttons--end">
                        <button-link
                            :hrefUrl="'/'"
                            :color="'primary'"
                            >Write review</button-link
                        >
                        <button-link
                            :hrefUrl="'/'"
                            :color="'contrast'"
                            >Rate the book</button-link
                        >
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import TopBar from "../components/TopBar.vue";
import BookImg from "../components/BookImg.vue";
import ButtonLink from "../components/ButtonLink.vue";
import BookFootnotes from "../components/BookFootnotes.vue";
import BookReviews from "../components/BookReviews.vue";

import { IBook } from "../types/book.interface";

export default defineComponent({
    components: {
        TopBar,
        BookImg,
        ButtonLink,
        BookFootnotes,
        BookReviews,
    },

    setup() {
        const route = useRoute();
        const store = useStore();

        const BOOK_ID = +route.params.id;

        store.dispatch("getCurrentBook", BOOK_ID);

        const book = (): IBook => store.state.currentBook;

        return { book };
    },
});
</script>

<style scoped lang="scss">
@import "../styles/main.scss";
@import "../styles/blocks/book-info";
.detailed {
    &__wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    &__img {
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
    }

    &__info {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

    &__buttons {
        display: none;

        &--end {
            display: flex;
            margin-right: auto;
            margin-left: auto;
            margin-bottom: 20px;
            flex-direction: column;
            gap: 25px;
        }
    }
}

@include desktop {
    .detailed__wrapper {
        gap: 40px;
        flex-wrap: nowrap;
        justify-content: start;
    }

    .detailed__info {
        display: block;
    }

    .detailed__buttons {
        display: flex;
        flex-direction: column;
        gap: 10px;

        &--end {
            display: none;
        }
    }
}
</style>
