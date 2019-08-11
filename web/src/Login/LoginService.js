import {errorAction, loadingAction, loadingDoneAction} from "../Core/CoreService";
import {put, call} from "redux-saga/effects";
import axios from "axios";

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_RETRIEVE = 'USER_LOGIN_RETRIEVE';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_REGISTER = 'USER_REGISTER';

export const userLoginAction = () => ({type: USER_LOGIN});
export const userRetrieveAction = () => ({type: USER_LOGIN_RETRIEVE});
export const userLogoutAction = () => ({type: USER_LOGOUT});
export const userRegisterAction = () => ({type: USER_REGISTER});

export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';
export const USER_REGISTERED = 'USER_REGISTERED';

export const userLoggedInAction = (user) => ({type: USER_LOGGED_IN, user});
export const userLoggedOutAction = () => ({type: USER_LOGGED_OUT});
export const userRegisteredAction = (verificationCode) => ({type: USER_REGISTERED, verificationCode});


export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {user: action.user};
        case USER_LOGGED_OUT:
            return {};
        case USER_REGISTERED:
            const VerificationCode = action.verificationCode;
            const user = {...state.user, VerificationCode};
            console.log({...state, user});
            return {...state, user};
        default:
            return state;
    }
};

export function* login() {
    yield put(loadingAction(USER_LOGIN));
    window.location = '/login/check-facebook';
}

export function* getLoginUser() {
    yield put(loadingAction(USER_LOGIN_RETRIEVE));
    try {
        const userResponse = yield call(axios.get, '/api/login');
        yield put(userLoggedInAction(userResponse.data));
        yield put(loadingDoneAction(USER_LOGIN_RETRIEVE));
    } catch (e) {
        const errorMessage = e.response.status + ': ' + e.response.statusText + ': ' + e.response.data['ErrorMessage'];
        yield put(errorAction(USER_LOGIN_RETRIEVE, errorMessage));
    }
}

export function* registerUser() {
    yield put(loadingAction(USER_REGISTER));
    try {
        const registrationResponse = yield call(axios.put, '/api/login/register');
        yield put(userRegisteredAction(registrationResponse.data.VerificationCode));
        yield put(loadingDoneAction(USER_REGISTER));
    } catch (e) {
        const errorMessage = e.response.data['ErrorMessage'];
        yield put(errorAction(USER_REGISTER, errorMessage));
    }
}

export function* logout() {
    yield put(loadingAction(USER_LOGOUT));
    try {
        yield call(axios.delete, '/api/logout');
        yield put(userLoggedOutAction());
        yield put(loadingDoneAction(USER_LOGOUT));
    } catch (e) {
        const errorMessage = e.response.data['ErrorMessage'];
        yield put(errorAction(USER_LOGOUT, errorMessage));
    }
}
