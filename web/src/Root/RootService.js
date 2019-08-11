import {combineReducers} from "redux";
import {takeEvery} from "redux-saga/effects";
import {
    getLoginUser,
    login,
    loginReducer,
    logout,
    registerUser,
    USER_LOGIN,
    USER_LOGIN_RETRIEVE,
    USER_LOGOUT,
    USER_REGISTER
} from "../Login/LoginService";
import {loadReducer} from "../Core/CoreService";

export const rootReducer = combineReducers({
    login: loginReducer,
    load: loadReducer,
});

export function* rootSaga() {
    yield takeEvery(USER_LOGIN_RETRIEVE, getLoginUser);
    yield takeEvery(USER_REGISTER, registerUser);
    yield takeEvery(USER_LOGOUT, logout);
    yield takeEvery(USER_LOGIN, login);
}
