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
                <div class="header__account account" v-if="!isLogged">
                    <router-link to="/login" class="account__link">Login</router-link>
                    <span class="account__span">/ </span>
                    <router-link to="/register" class="account__link">Signup</router-link>
                </div>
                <div class="header__profile" v-if="isLogged">
                    <profile-component />
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useStore } from "vuex";
import { computed } from "vue";

import MainLogo from "./MainLogo.vue";
import ProfileComponent from "./ProfileComponent.vue";

export default defineComponent({
    components: {
        MainLogo,
        ProfileComponent,
    },

    setup() {
        const store = useStore();

        const isLogged = computed(() => store.state.loggedIn);

        return { isLogged }
    }

});
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
