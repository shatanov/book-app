import { IUser } from "../types/user.interface";

export const userService = {
    registerUser,
    loginUser,
};
const url = " http://localhost:3000";

function registerUser(user: IUser) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    };
    return fetch(`${url}/users`, requestOptions);
}

function loginUser(loginUser: IUser) {
    return fetch(`${url}/users`)
        .then((response) => response.json())
        .then(data => data.find((user:IUser) => user.email === loginUser.email && user.password === loginUser.password))
}
