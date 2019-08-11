export const APP_LOADING = "APP_LOADING";
export const APP_LOADING_DONE = "APP_LOADING_DONE";
export const APP_ERROR = "APP_ERROR";

export const errorAction = (process, errorMessage) => ({type: APP_ERROR, process, errorMessage});
export const loadingAction = (process) => ({type: APP_LOADING, process});
export const loadingDoneAction = (process) => ({type: APP_LOADING_DONE, process});

export const loadReducer = (state = {process: {}, loading: false}, action) => {
    if (action.type === APP_ERROR) {
        console.log(`Error caught: ${action.process} - ${action.errorMessage}`);
    }
    switch (action.type) {
        case APP_ERROR:
        case APP_LOADING:
        case APP_LOADING_DONE:
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
