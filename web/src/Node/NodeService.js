import {call, put, takeEvery} from "redux-saga/effects";
import {loading, loadingDone} from "../Core/CoreService";
import axios from "axios";

export const GET_ROOT_NODES = 'GET_ROOT_NODES';
const ROOT_NODES_RETRIEVED = 'ROOT_NODES_RETRIEVED';

export const rootNodes = () => ({type: GET_ROOT_NODES});
const rootNodesRetrieved = nodes => ({type: ROOT_NODES_RETRIEVED, nodes});

export const nodeReducer = (state = {nodes: []}, action) => {
    if (action.type === ROOT_NODES_RETRIEVED) {
        return {nodes: action.nodes};
    }
    return state;
};

export const nodeSagas = [
    takeEvery(GET_ROOT_NODES, rootNodesSaga),
];

function* rootNodesSaga() {
    yield put(loading(GET_ROOT_NODES));
    const response = yield call(axios.get, '/api/item');
    yield put(rootNodesRetrieved(response.data));
    yield put(loadingDone(GET_ROOT_NODES));
}
