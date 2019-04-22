
const redux = require('redux')
const reducerInitialState = {}
const reducer = (state = reducerInitialState, action) => {
    switch (action.type) {
        case ACTION_TYPE_1:
            return state
        case ACTION_TYPE_2:
            return state
        default:
            return state
    }
}
var historyStore = redux.createStore(reducer)
export default historyStore;
