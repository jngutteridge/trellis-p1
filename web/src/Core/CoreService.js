export const APP_LOADING = "APP_LOADING";
export const APP_LOADED = "APP_LOADING_DONE";
export const APP_ERROR = "APP_ERROR";

export const error = (process, errorMessage) => ({type: APP_ERROR, process, errorMessage});
export const loading = (process) => ({type: APP_LOADING, process});
export const loadingDone = (process) => ({type: APP_LOADED, process});

export const loadReducer = (state = {process: {}, loading: false}, action) => {
    if (action.type === APP_ERROR) {
        console.log(`Error caught: ${action.process} - ${action.errorMessage}`);
    }
    switch (action.type) {
        case APP_ERROR:
        case APP_LOADING:
        case APP_LOADED:
            const process = {...state.process};
            process[action.process] = action.type;
            for (const p in process) {
                if (process[p] === APP_LOADING) {
                    return {...state, process, loading: true};
                }
            }
            return {...state, loading: false, process};
        default:
            return state;
    }
};
