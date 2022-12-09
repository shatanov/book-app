import { IUserAuth } from "../types/userAuth.interface";
import { IUser } from "../types/user.interface";

export const userService = {
    registerUser
};
const url = " http://localhost:3000/users";

function registerUser(user: IUserAuth) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({user})
    };
    return fetch(url, requestOptions)
    .then( (response) => { 
       console.log(response);
     })
}