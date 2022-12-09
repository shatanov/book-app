<template>
    <header class="header wrapper__header">
        <div class="container">
            <div class="header__wrapper">
                <div class="header__logo">
                    <main-logo :size="'sm'"></main-logo>
                </div>
                <div class="header__search search">
                    <input
                        type="text"
                        class="search__input"
                        placeholder="Search your books "
                    />
                    <button class="search__icon" type="button">
                        <span class="material-symbols-outlined">search</span>
                    </button>
                </div>
                <!--        Блок регистрации для страницы при условии что пользователь не зарегистрирован        -->
                <!--                    <div class="header__account account">-->
                <!--                        <a href="" class="account__link">Login</a>-->
                <!--                        <span class="account__span">/ </span>-->
                <!--                        <a href="" class="account__link">Signup</a>-->
                <!--                    </div>-->
                <div class="header__profile profile">
                    <a href="" class="profile__link">
                        <div class="profile-logo">
                            <img
                                src=""
                                alt=""
                                class="profile-logo__img profile-logo__img--hidden"
                            />
                            <div class="profile-logo__holder">а</div>
                        </div>
                        <div class="profile__info">Andery Vilkelm</div>
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import MainLogo from './MainLogo.vue';
export default defineComponent({
  components: {
    MainLogo,
  }
})
</script>


<style lang="scss">
@import "../styles/main.scss";

.header {
    height: 60px;

    &__wrapper {
        display: flex;
        gap: 20px;
    }

    &__logo {
        @include full(start);
    }

    &__search {
        @include full(start);
    }

    &__account {
        @include full(end);
    }

    &__profile {
        @include full(end);
    }
}

.account {
    &__link {
        font-size: var(--font-size-m);
        line-height: 27px;
        text-align: right;
        color: var(--primary);
        margin-right: 5px;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }

        &:last-child {
            margin-right: 0;
            margin-left: 5px;
        }
    }

    &__span {
        font-size: var(--font-size-m);
        line-height: 27px;
        color: #000000;
    }
}
</style>
