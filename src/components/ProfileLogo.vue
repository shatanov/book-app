<template>
    <div class="profile-logo">
        <img
            :src="profileImg"
            alt=""
            class="profile-logo__img"
            :class="{
                'profile-logo__img--hidden': profileImg == '',
            }"
        />
        <div v-if="profileImg == ''" class="profile-logo__holder">{{ holderSymbol() }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { toRefs } from "@vue/reactivity";

export default defineComponent({
    props: {
        profileName: {
            type: String,
            required: true,
        },
        profileImg: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const { profileName } = toRefs(props);
        const holderSymbol = () => profileName.value[0];

        return { holderSymbol };
    },
});
</script>

<style lang="scss">
@import "../styles/main.scss";
.profile-logo {
    display: flex;
    align-items: center;

    &__img {
        object-fit: cover;
        width: 42px;
        height: 42px;
        border-radius: 50%;

        &--hidden {
            display: none;
        }
    }

    &__holder {
        box-sizing: border-box;
        width: 42px;
        height: 42px;
        font-weight: var(--text-bold_l);
        font-size: var(--font-size-l);
        line-height: 33px;
        color: var(--white);
        text-transform: uppercase;
        text-align: center;
        border-radius: 50%;
        background: var(--profile-logo);
        @include flex-position(center);

        &--hidden {
            display: none;
        }
    }
}
</style>
