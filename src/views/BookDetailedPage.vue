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
                                    :imgUrl="'https://s1.livelib.ru/boocover/1007553850/200x305/d73e/boocover.jpg'"
                                />
                                {{$route.params.id}}
                            </div>
                        </div>
                        <div class="detailed__buttons">
                            <button-link
                                :hrefUrl="'/detailed'"
                                :color="'primary'"
                                >Write review</button-link
                            >
                            <button-link
                                :hrefUrl="'/detailed'"
                                :color="'contrast'"
                                >Rate the book</button-link
                            >
                        </div>
                    </div>
                    <div class="detailed__info">
                        <div class="book-info">
                            <h1 class="book-info__title book-info__title--lg">
                                Echo of the singing sands
                            </h1>
                            <book-footnotes />
                            <div class="book-info__description">
                                Тамила Ассандер - последняя представительница
                                правящей династии Гарета. Единственная, в чьей
                                крови еще сохранились крохи древнего
                                благославления Богини. Та, кто слышит голос
                                песков. Та, что была жестоко предана.
                            </div>
                            <div class="book-info__description">
                                От яда, с каждой секундой подбирающегося все
                                ближе к сердцу, королеву не смогли спасти ни
                                жрицы, ни маги. И пока Ее Величество медленно
                                умирала, Совет прибирал власть к своим рукам.
                                Оказавшись же на пороге войны с северянами -
                                жестокими варварам, поклоняющимися богу войны
                                Ратусу, Тамиле, поклявшейся защищать свой народ
                                даже ценой собственной жизни и потерявшей веру в
                                Совет, придется пойти на крайние меры и
                                объединиться с человеком, о котором ей известно
                                все и ничего - приближенным короля Ориса,
                                державы, два года назад приславшей ей грамоту с
                                ядом.
                            </div>
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
                        <button-link :hrefUrl="'/detailed'" :color="'primary'"
                            >Write review</button-link
                        >
                        <button-link :hrefUrl="'/detailed'" :color="'contrast'"
                            >Rate the book</button-link
                        >
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import TopBar from "../components/TopBar.vue";
import BookImg from "../components/BookImg.vue";
import ButtonLink from "../components/ButtonLink.vue";
import BookFootnotes from "../components/BookFootnotes.vue";

export default defineComponent({
    components: {
        TopBar,
        BookImg,
        ButtonLink,
        BookFootnotes,
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
