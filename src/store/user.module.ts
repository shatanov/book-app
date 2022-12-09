// import { IUser } from "../types/user.interface";
// import { IUserAuth } from "../types/userAuth.interface";
// import { userService } from "../services/user.service";
// import router from "../router/index";

// const state = {
//     authUser: <IUserAuth>{},
//     user: <IUser | null>{},
//     loggedIn: <boolean>false,
// };

// const mutations = {
//     registerRequest(state, user) {
//         state.status = { registering: true };
//     },
//     registerSuccess(state, user) {
//         state.status = {};
//     },
//     registerFailure(state, error) {
//         state.status = {};
//     }
// };

// const actions = {
//     register({ commit:any }, authUser: IUserAuth) {
//         commit("registerRequest", user);

//         userService.registerUser(authUser).then(
//             (user) => {
//                 commit("registerSuccess", user);
//                 router.push("/login");
//             },
//             (error) => {
//                 commit("registerFailure", error);
//             }
//         );
//     },
// };

// export const user = {
//     namespaced: true,
//     state,
//     actions,
//     mutations,
// };
