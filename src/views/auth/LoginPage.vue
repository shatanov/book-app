<template>
    <main class="main-registration login">
        <div class="registration">
            <div class="registration__logo">
                <main-logo :size="'lg'"></main-logo>
            </div>
            <form action="" class="registration__form form">
                <div class="registration__inputs">
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
                            class="text-field"
                            type="password"
                            required
                        />
                    </label>
                </div>
                <button @click="submit()" class="form__btn" type="submit">Log in</button>
            </form>
            <div class="registration__text">
                No account?
                <router-link to="/register" class="registration__text--link"> Create</router-link>
            </div>
        </div>
    </main>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { reactive, ref } from "@vue/reactivity";

import { IUserAuth } from "../../types/userAuth.interface";
import MainLogo from "../../components/MainLogo.vue";

import { useStore } from "vuex";

export default defineComponent({
    components: { MainLogo },
    componnets: {
        MainLogo,
    },
    setup() {
        const store = useStore();
        const user: IUserAuth = reactive({
            email: "",
            password: "",
        });

        const submit = () => {
            store.dispatch("loginUser", user);
        };

        return { user, submit };
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
