import { createStore } from "vuex";
import router from "../router/index";

import { IUser } from "../types/user.interface";
import { IUserAuth } from "../types/userAuth.interface";
import { IBookCategories } from "../types/bookCategories.interface";

import { userService } from "../services/user.service";
import { service } from "../services/service";


export default createStore({
    state: {
        user: <IUser | null>{},
        loggedIn: <boolean>false,
        allCategories: <IBookCategories>{},
    },

    mutations: {
        login(state, user: IUser) {
            state.user = user;
            state.loggedIn = true;
        },
        getAllCategoriesSuccess(state, allCategories: IBookCategories) {
          state.allCategories = allCategories;
        }
    },

    actions: {
        registerUser({ commit }, user: IUserAuth) {
            userService.registerUser(user).then(() => {
                router.push("/login");
            });
        },
        loginUser({ commit }, authUser: IUserAuth) {
            userService.loginUser(authUser)
            .then((data: IUser[]) => {
                console.log(data);
            })
            .catch(err => console.log(11));
        },
        getAllCategories({ commit }){
          service.getAllCategories().then((data:any) => commit("getAllCategoriesSuccess", data));
        }
    },
});
