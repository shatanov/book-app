<template>
    <top-bar />
    <main class="main wrapper__main">
        <section class="detailed">
            <div class="container">
                <div class="detailed__wrapper">
                    <div class="detailed__info">
                        <div class="detailed__img">
                            <div>
                                <book-img :size="'xl'" :imgUrl="book().imgUrl" />
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
                            <h1
                                class="book-info__title book-info__title--lg"
                            >{{book().name}}</h1>
                            <book-footnotes :footnotes="book().footnotes"/>
                            <div class="book-info__description">{{book().decsription}}</div>
                            <div class="book-info__description"></div>
                            <div class="book-info__reviews reviews">
                                <h3 class="reviews__title">Reviews</h3>
                                <div class="feedback">
                                    <div class="feedback__info">
                                        <div class="profile">
                                            <a href="" class="profile__link">
                                                <div class="profile-logo">
                                                    <img
                                                        src=""
                                                        alt=""
                                                        class="profile-logo__img profile-logo__img--hidden"
                                                    />
                                                    <div
                                                        class="profile-logo__holder"
                                                    >
                                                        а
                                                    </div>
                                                </div>
                                                <div class="profile__wrapper">
                                                    <div
                                                        class="profile__info profile__info--sm"
                                                    >
                                                        Vladimir Menshikov
                                                    </div>
                                                    <div
                                                        class="profile__status"
                                                    >
                                                        Qualified user
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="spacer"></div>
                                        <div class="feedback__date">
                                            5 may, 2021
                                        </div>
                                    </div>
                                    <p class="feedback__text">
                                        Все бы ничего - и адекватные герои, и
                                        отсутствие явных логических дыр в
                                        истории и даже какая-никакая, а толковая
                                        политика, но. Скучно. Монотонно. Вяло.
                                        Люди куда-то ходят, плывут, даже
                                        телепортируются, а я слежу за этим будто
                                        кто-то рядом в "Героев" на компьютере
                                        играет. "Человечки побежали". Герои
                                        дальше первого плана и вовсе в
                                        большинстве своём выглядят картонными
                                        фигурами, которые тут для массовки
                                        поставили. Магия, опять же,
                                        исключительно как эрзац " бога из
                                        машины", а точнее "рояля из кустов" -
                                        когда ситуация кажется безвыходной,
                                        нужно просто немного поколдовать.
                                        Единственная порадовавшая сцена...
                                        <a href="#" class="feedback__text--link"
                                            >Развернуть</a
                                        >
                                    </p>
                                    <div class="feedback__rating rating">
                                        <div class="score">
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div
                                                class="score__star score__star--active"
                                            >
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                        </div>
                                        <div class="rating__score">4.3</div>
                                    </div>
                                </div>
                                <div class="feedback">
                                    <div class="feedback__info">
                                        <div class="profile">
                                            <a href="" class="profile__link">
                                                <div class="profile-logo">
                                                    <img
                                                        src=""
                                                        alt=""
                                                        class="profile-logo__img profile-logo__img--hidden"
                                                    />
                                                    <div
                                                        class="profile-logo__holder"
                                                    >
                                                        а
                                                    </div>
                                                </div>
                                                <div class="profile__wrapper">
                                                    <div
                                                        class="profile__info profile__info--sm"
                                                    >
                                                        Vladimir Menshikov
                                                    </div>
                                                    <div
                                                        class="profile__status"
                                                    >
                                                        Qualified user
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="spacer"></div>
                                        <div class="feedback__date">
                                            5 may, 2021
                                        </div>
                                    </div>
                                    <p class="feedback__text">
                                        Все бы ничего - и адекватные герои, и
                                        отсутствие явных логических дыр в
                                        истории и даже какая-никакая, а толковая
                                        политика, но. Скучно. Монотонно. Вяло.
                                        Люди куда-то ходят, плывут, даже
                                        телепортируются, а я слежу за этим будто
                                        кто-то рядом в "Героев" на компьютере
                                        играет. "Человечки побежали". Герои
                                        дальше первого плана и вовсе в
                                        большинстве своём выглядят картонными
                                        фигурами, которые тут для массовки
                                        поставили. Магия, опять же,
                                        исключительно как эрзац " бога из
                                        машины", а точнее "рояля из кустов" -
                                        когда ситуация кажется безвыходной,
                                        нужно просто немного поколдовать.
                                        Единственная порадовавшая сцена...
                                        <a href="#" class="feedback__text--link"
                                            >Развернуть</a
                                        >
                                    </p>
                                    <div class="feedback__rating rating">
                                        <div class="score">
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div
                                                class="score__star score__star--active"
                                            >
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                        </div>
                                        <div class="rating__score">4.3</div>
                                    </div>
                                </div>
                                <div class="feedback">
                                    <div class="feedback__info">
                                        <div class="profile">
                                            <a href="" class="profile__link">
                                                <div class="profile-logo">
                                                    <img
                                                        src=""
                                                        alt=""
                                                        class="profile-logo__img profile-logo__img--hidden"
                                                    />
                                                    <div
                                                        class="profile-logo__holder"
                                                    >
                                                        а
                                                    </div>
                                                </div>
                                                <div class="profile__wrapper">
                                                    <div
                                                        class="profile__info profile__info--sm"
                                                    >
                                                        Vladimir Menshikov
                                                    </div>
                                                    <div
                                                        class="profile__status"
                                                    >
                                                        Qualified user
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="spacer"></div>
                                        <div class="feedback__date">
                                            5 may, 2021
                                        </div>
                                    </div>
                                    <p class="feedback__text">
                                        Все бы ничего - и адекватные герои, и
                                        отсутствие явных логических дыр в
                                        истории и даже какая-никакая, а толковая
                                        политика, но. Скучно. Монотонно. Вяло.
                                        Люди куда-то ходят, плывут, даже
                                        телепортируются, а я слежу за этим будто
                                        кто-то рядом в "Героев" на компьютере
                                        играет. "Человечки побежали". Герои
                                        дальше первого плана и вовсе в
                                        большинстве своём выглядят картонными
                                        фигурами, которые тут для массовки
                                        поставили. Магия, опять же,
                                        исключительно как эрзац " бога из
                                        машины", а точнее "рояля из кустов" -
                                        когда ситуация кажется безвыходной,
                                        нужно просто немного поколдовать.
                                        Единственная порадовавшая сцена...
                                        <a href="#" class="feedback__text--link"
                                            >Развернуть</a
                                        >
                                    </p>
                                    <div class="feedback__rating rating">
                                        <div class="score">
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div
                                                class="score__star score__star--active"
                                            >
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                        </div>
                                        <div class="rating__score">4.3</div>
                                    </div>
                                </div>
                                <button type="button" class="reviews__more">
                                    More
                                </button>
                            </div>
                            <div class="book-info__rating reviews">
                                <h3 class="reviews__title">Book rating</h3>
                                <div class="feedback">
                                    <div class="feedback__info">
                                        <div class="profile">
                                            <a href="" class="profile__link">
                                                <div class="profile-logo">
                                                    <img
                                                        src=""
                                                        alt=""
                                                        class="profile-logo__img profile-logo__img--hidden"
                                                    />
                                                    <div
                                                        class="profile-logo__holder"
                                                    >
                                                        а
                                                    </div>
                                                </div>
                                                <div class="profile__wrapper">
                                                    <div
                                                        class="profile__info profile__info--sm"
                                                    >
                                                        Vladimir Menshikov
                                                    </div>
                                                    <div
                                                        class="profile__status"
                                                    >
                                                        Qualified user
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="spacer"></div>
                                        <div class="feedback__date">
                                            5 may, 2021
                                        </div>
                                    </div>
                                    <div class="feedback__rating rating">
                                        <div class="score">
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div
                                                class="score__star score__star--active"
                                            >
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                        </div>
                                        <div class="rating__score">4.3</div>
                                    </div>
                                </div>
                                <div class="feedback">
                                    <div class="feedback__info">
                                        <div class="profile">
                                            <a href="" class="profile__link">
                                                <div class="profile-logo">
                                                    <img
                                                        src=""
                                                        alt=""
                                                        class="profile-logo__img profile-logo__img--hidden"
                                                    />
                                                    <div
                                                        class="profile-logo__holder"
                                                    >
                                                        а
                                                    </div>
                                                </div>
                                                <div class="profile__wrapper">
                                                    <div
                                                        class="profile__info profile__info--sm"
                                                    >
                                                        Vladimir Menshikov
                                                    </div>
                                                    <div
                                                        class="profile__status"
                                                    >
                                                        Qualified user
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="spacer"></div>
                                        <div class="feedback__date">
                                            5 may, 2021
                                        </div>
                                    </div>
                                    <div class="feedback__rating rating">
                                        <div class="score">
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div
                                                class="score__star score__star--active"
                                            >
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                        </div>
                                        <div class="rating__score">4.3</div>
                                    </div>
                                </div>
                                <div class="feedback">
                                    <div class="feedback__info">
                                        <div class="profile">
                                            <a href="" class="profile__link">
                                                <div class="profile-logo">
                                                    <img
                                                        src=""
                                                        alt=""
                                                        class="profile-logo__img profile-logo__img--hidden"
                                                    />
                                                    <div
                                                        class="profile-logo__holder"
                                                    >
                                                        а
                                                    </div>
                                                </div>
                                                <div class="profile__wrapper">
                                                    <div
                                                        class="profile__info profile__info--sm"
                                                    >
                                                        Vladimir Menshikov
                                                    </div>
                                                    <div
                                                        class="profile__status"
                                                    >
                                                        Qualified user
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="spacer"></div>
                                        <div class="feedback__date">
                                            5 may, 2021
                                        </div>
                                    </div>
                                    <div class="feedback__rating rating">
                                        <div class="score">
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div class="score__star">
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                            <div
                                                class="score__star score__star--active"
                                            >
                                                <span
                                                    class="material-symbols-rounded"
                                                >
                                                    star
                                                </span>
                                            </div>
                                        </div>
                                        <div class="rating__score">4.3</div>
                                    </div>
                                </div>
                                <button type="button" class="reviews__more">
                                    More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="detailed__buttons detailed__buttons--end">
                        <button-link :hrefUrl="'/'" :color="'primary'"
                            >Write review</button-link
                        >
                        <button-link :hrefUrl="'/'" :color="'contrast'"
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
import { IBook } from "../types/book.interface";


export default defineComponent({
    components: {
        TopBar,
        BookImg,
        ButtonLink,
        BookFootnotes,
    },

    setup() {
        const route = useRoute();
        const store = useStore();

        const BOOK_ID = +route.params.id;

        store.dispatch("getCurrentBook", BOOK_ID)

        const book = ():IBook => store.state.currentBook;

        return { book };
    },
});
</script>

<style scoped lang="scss">
@import "../styles/main.scss";

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
