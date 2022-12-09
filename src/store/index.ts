import { createStore } from "vuex";
import { IUser } from "../types/user.interface";
import { IUserAuth } from "../types/userAuth.interface";
import { userService } from "../services/user.service";
import router from "../router/index";

export default createStore({
    state: {
        user: <IUser | null>{},
        loggedIn: <boolean>false,
    },

    mutations: {
        login(state, user: IUser) {
            state.user = user;
            state.loggedIn = true;
        },
    },

    actions: {
        registerUser({ commit }, user: IUserAuth) {
            userService.registerUser(user).then(() => {
                router.push("/login");
            });
        },
        loginUser({ commit }, user: IUserAuth) {
            userService.loginUser(user).then((user: IUser) => {
                commit("login", user);
                router.push("/");
            })
            .catch(err => console.log(err));
        },
    },
});
