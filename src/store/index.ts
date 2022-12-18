import { createStore } from "vuex";
import router from "../router/index";

import { IUser } from "../types/user.interface";
import { IBookCategories } from "../types/bookCategories.interface";

import { userService } from "../services/user.service";
import { service } from "../services/service";

export default createStore({
    state: {
        user: <IUser | null>{},
        loggedIn: <boolean>false,
        loginFail: <boolean>false,
        allCategories: <IBookCategories>{},
    },

    getters: {
        user: state => {
            return state.user;
        },
        loginFail: state => {
            return state.loginFail;
        }
    },

    mutations: {
        loginSuccess(state, user: IUser) {
            state.user = user;
            state.loggedIn = true;
        },
        loginErrors(state, status:boolean) {
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
                commit("loginSuccess", data);
                router.push("/");
            });
        },
        loginErrorsCanceling({ commit }){
            commit("loginErrors", false);
        },
        getAllCategories({ commit }) {
            service
                .getAllCategories()
                .then((data: any) => commit("getAllCategoriesSuccess", data));
        },
    },
});
