import { noteData } from "./firebaseConnect";

const redux = require('redux');
const noteInitialState = {
    testConnect: "testThoi"
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            console.log("kết nối thành công với add data")
            return state
        default:
            return state
    }
}
const store = redux.createStore(allReducer);

export default store;