<template>
    <div class="profile">
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
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({});
</script>

<style scoped lang="scss">
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
