import { combineReducers, createStore } from "redux";
import userReducer from "./reducers/userReducer";

const initialState = {};
const rootReducer = combineReducers({
  user: userReducer,


})

export const store = createStore(rootReducer);

const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
