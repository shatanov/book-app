<template>
    <top-bar />
    <div class="main wrapper__main">
        <section class="review">
            <div class="container">
                <div class="review__wrapper">
                    <div class="review__info">
                        <div class="review__img">
                            <div>
                                <book-img
                                    :imgUrl="book().imgUrl || ''"
                                    :size="'sm'"
                                />
                            </div>
                        </div>
                        <div class="review__wrapper">
                            <div class="book-info">
                                <h1 class="book-info__title">
                                    {{ book().name }}
                                </h1>
                                <div
                                    class="book-info__description book-info__description--sm"
                                >
                                    {{ book().decsription }}
                                </div>
                                <book-footnotes
                                    :footnotes="book().footnotes || []"
                                    :size="'sm'"
                                />
                            </div>
                            <div class="review__rating rating">
                                <book-score
                                    :active="false"
                                    :score="book().rating || 0"
                                />
                                <div class="rating__score">
                                    {{ book().rating.toFixed(1) }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="review__info">
                        <form action="" class="review__form form">
                            <label v-if="form === 'form'">
                                <span class="form-label">Your review</span>
                                <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="10"
                                    class="review__textarea"
                                    placeholder="Write your review here"
                                ></textarea>
                            </label>
                            <div>
                                <span class="form-label">Rate this book</span>
                                <div class="rating">
                                    <book-score :active="true" :score="0" />
                                </div>
                            </div>
                            <button
                                class="form__btn form__btn--sm"
                                type="submit"
                            >
                                Create review
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import BookImg from "@/components/BookImg.vue";
import BookFootnotes from "@/components/BookFootnotes.vue";
import BookScore from "@/components/BookScore.vue";
import TopBar from "@/components/TopBar.vue";

import { IBook } from "../types/book.interface";

export default defineComponent({
    components: {
        BookImg,
        BookFootnotes,
        BookScore,
        TopBar,
    },
    setup() {
        const route = useRoute();
        const store = useStore();

        const { form } = route.params;
        const book = (): IBook => store.state.currentBook;

        return { form, book };
    },
});
</script>

<style scoped lang="scss">
@import "../styles/main.scss";
@import "../styles/blocks/book-info";
.review {
    &__wrapper {
        display: flex;
        flex-direction: column;
    }

    &__img {
        margin: 0 auto;
    }

    &__info {
        display: flex;
        gap: 22px;
        flex-wrap: wrap;
    }

    &__rating {
        display: flex;
        justify-content: center;
    }

    &__form {
        margin-top: 30px;
        margin-bottom: 70px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 100%;
    }

    &__textarea {
        box-sizing: border-box;
        width: 100%;
        height: 230px;
        background-color: var(--white);
        @include border(var(--light-grey));
        border-radius: var(--border-radius-m);
        padding: 15px 15px;

        &::placeholder {
            font-size: var(--text-size-s);
            line-height: 24px;
            color: var(--placeholder);
        }
    }
}

@include desktop {
    .review {
        &__info {
            flex-wrap: nowrap;
        }

        &__img {
            margin: 0;
        }

        &__rating {
            justify-content: start;
        }
    }
}
</style>
