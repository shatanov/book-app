import { createStore } from "vuex";
import router from "../router/index";

import { IUser } from "../types/user.interface";
import { IBookCategories } from "../types/bookCategories.interface";

import { userService } from "../services/user.service";
import { service } from "../services/service";
import { set } from "../helpers/persistanceService";

export default createStore({
    state: {
        loginFail: <boolean>false,
        allCategories: <IBookCategories>{},
    },

    getters: {
        loginFail: (state) => {
            return state.loginFail;
        },
    },

    mutations: {
        loginErrors(state, status: boolean) {
            state.loginFail = status;
        },
        getAllCategoriesSuccess(state, allCategories: IBookCategories) {
            state.allCategories = allCategories;
        },
    },

    actions: {
        registerUser({ commit }, user: IUser) {
            userService.registerUser(user).then(() => {
                router.push("/login");
            });
        },
        loginUser({ commit }, authUser: IUser) {
            userService.loginUser(authUser).then((data: IUser[]) => {
                if (data === undefined) {
                    commit("loginErrors", true);
                    return;
                }
                set("user", data);
                router.push("/");
            });
        },
        loginErrorsCanceling({ commit }) {
            commit("loginErrors", false);
        },
        getAllCategories({ commit }) {
            service
                .getAllCategories()
                .then((data: any) => commit("getAllCategoriesSuccess", data));
        },
    },
});
