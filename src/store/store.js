import {createStore} from "redux";

const defaultState = {
    token: localStorage.getItem("token")
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SAVE_TOKEN":
            return {...state, token: state.token = action.payload};
        case "DELETE_TOKEN":
            return {...state, token: state.token = ""};

        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;