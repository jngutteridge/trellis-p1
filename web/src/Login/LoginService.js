import {error, loading, loadingDone} from "../Core/CoreService";
import {call, put, takeEvery} from "redux-saga/effects";
import axios from "axios";

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_RETRIEVE = 'USER_LOGIN_RETRIEVE';
const USER_LOGGED_IN = 'USER_LOGGED_IN';

export const userLogin = () => ({type: USER_LOGIN});
export const userRetrieve = () => ({type: USER_LOGIN_RETRIEVE});
const userLoggedIn = (user) => ({type: USER_LOGGED_IN, user});


export const loginReducer = (state = {}, action) => {
    if (action.type === USER_LOGGED_IN) {
        return {user: action.user};
    }
    return state;
};

export const loginSagas = [
    takeEvery(USER_LOGIN_RETRIEVE, getLoginUserSaga),
    takeEvery(USER_LOGIN, loginSaga),
];

function* loginSaga() {
    yield put(loading(USER_LOGIN));
    window.location = '/login/redirect/facebook';
}

function* getLoginUserSaga() {
    yield put(loading(USER_LOGIN_RETRIEVE));
    try {
        const userResponse = yield call(axios.get, '/api/login');
        yield put(userLoggedIn(userResponse.data));
        yield put(loadingDone(USER_LOGIN_RETRIEVE));
    } catch (e) {
        console.log(e);
        const errorMessage = e.response.status + ': ' + e.response.statusText + ': ' + e.response.data['ErrorMessage'];
        yield put(error(USER_LOGIN_RETRIEVE, errorMessage));
    }
}
