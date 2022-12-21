<template>
    <main class="main-registration">
        <div class="registration">
            <div class="registration__logo">
                <main-logo :size="'lg'"></main-logo>
            </div>
            <form @submit.prevent="submit()" class="registration__form form">
                <div class="registration__inputs">
                    <label>
                        <span class="form-label">Full name</span>
                        <input
                            v-model="user.fullName"
                            class="text-field"
                            type="text"
                            placeholder="Ivan Ivanovich"
                            required
                        />
                    </label>
                    <label>
                        <span class="form-label">Email</span>
                        <input
                            v-model="user.email"
                            class="text-field"
                            type="email"
                            placeholder="someexample@example.com"
                            required
                        />
                    </label>
                    <label>
                        <span class="form-label">Password</span>
                        <input
                            v-model="user.password"
                            @input="checkConfirmPassword()"
                            class="text-field"
                            type="password"
                            required
                        />
                    </label>
                    <label>
                        <span class="form-label">Password confirm</span>
                        <input
                            v-model="confirmPassword"
                            @input="checkConfirmPassword()"
                            class="text-field"
                            type="password"
                            required
                        />
                    </label>
                </div>
                <button class="form__btn" type="submit">Sign up</button>
            </form>
            <div v-show="passwordConfirm">Пароли не совпадают</div>
            <div class="registration__text">
                Already have account?
                <router-link to="/login" class="registration__text--link">
                    Login</router-link
                >
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { reactive, ref } from "@vue/reactivity";

import { IUser } from "../../types/user.interface";
import MainLogo from "../../components/MainLogo.vue";

import { userService } from "../../services/user.service";
import { useStore } from "vuex";

export default defineComponent({
    components: { MainLogo },
    componnets: {
        MainLogo,
    },
    setup() {
        const store = useStore();

        const passwordConfirm = ref(false);
        const confirmPassword = ref("");

        const user: IUser = reactive({
            fullName: "",
            email: "",
            password: "",
            image: null,
            status: "user",
        });

        const checkConfirmPassword = () => {
            if (confirmPassword.value != user.password) {
                passwordConfirm.value = true;
                return;
            }
            passwordConfirm.value = false;
        };

        const submit = () => {
            store.dispatch("registerUser", user);
        };

        return { user, checkConfirmPassword, passwordConfirm, submit, confirmPassword };
    },
});
</script>

<style scoped lang="scss">
@import "../../styles/main.scss";

.login {
    height: 100vh;
}

.main-registration {
    max-width: 600px;
    display: flex;
    align-items: center;
    margin: 0 auto;
}

.registration {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 20px;

    @include desktop {
        padding: 0;
    }

    &__logo {
        margin-bottom: 30px;
        text-align: center;
    }

    &__form {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
}

.registration__inputs {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    gap: 20px;
}

.registration__text {
    font-size: var(--font-size-m);
    line-height: 27px;
    color: #000000;
    text-align: center;

    &--link {
        color: var(--primary);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
