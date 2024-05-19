import { LOGIN_ACTION, UPDATE_TOKEN } from "../../types"



export function loginAction(userInofmrations) {
    return {
        type: LOGIN_ACTION,
        payload: userInofmrations,
    };
}