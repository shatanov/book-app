<template>
    <div class="profile">
        <router-link to="/" class="profile__link">
            <profile-logo
                :profile-img="user.image || ''"
                :profile-name="user.fullName || ''"
            />
            <div
                class="profile__info"
                :class="{
                    'profile__info--sm': size === 'sm',
                }"
            >
                {{ user.fullName || "" }}
            </div>
            <div class="profile__status" v-if="userStatus">
                {{ user?.status }}
            </div>
        </router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import ProfileLogo from "./ProfileLogo.vue";

export default defineComponent({
    props: {
        user: {
            type: Object,
            required: true,
        },
        size: {
            type: String,
            required: false,
        },
        userStatus: {
            type: Boolean,
            required: true,
        },
    },
    components: {
        ProfileLogo,
    },
});
</script>

<style lang="scss">
@import "../styles/main.scss";
.profile {
    &__link {
        text-decoration: none;
        display: flex;
        gap: 15px;

        &:hover .profile-logo__holder {
            color: var(--primary);
            background-color: var(--white);
            @include border(var(--primary));
        }

        &:hover .profile__info {
            color: var(--primary);
        }
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
    }

    &__info {
        font-size: var(----font-size-m);
        line-height: 27px;
        color: var(--dark-grey);
        @include flex-position(center);

        &--sm {
            line-height: 24px;
        }
    }

    &__status {
        font-size: var(--font-size-xs);
        line-height: 21px;
        color: var(--grey);
    }
}

@include mobile {
    .profile__info {
        font-size: var(--text-size-s);
        line-height: 1;
    }
}
</style>
