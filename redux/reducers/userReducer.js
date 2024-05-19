import { LOGIN_ACTION } from "../types";

const initialState = {
    informations: { id: null },
    tokens: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ACTION:
            return { ...state, informations: action.payload };

        default:
            return state;
    }

};

export default userReducer;
