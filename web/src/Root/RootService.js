import {combineReducers} from "redux";
import {all} from "redux-saga/effects";
import {loginReducer, loginSagas,} from "../Login/LoginService";
import {loadReducer} from "../Core/CoreService";
import {nodeReducer, nodeSagas} from "../Node/NodeService";

export const rootReducer = combineReducers({
    login: loginReducer,
    load: loadReducer,
    node: nodeReducer,
});

export function* rootSaga() {
    yield all([
        ...loginSagas,
        ...nodeSagas,
    ]);
}
