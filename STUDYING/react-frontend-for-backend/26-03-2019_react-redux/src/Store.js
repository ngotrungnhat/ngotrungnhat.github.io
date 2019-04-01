import statusReducer from './Reducers/statusReducer'
import numReducer from './Reducers/numReducer'

const redux = require('redux')

const allReducer = redux.combineReducers({
    statusInitialState: statusReducer,
    numInitialState: numReducer
})
const containerStore = redux.createStore(allReducer);
console.log('containerStore.getState', containerStore.getState())
containerStore.subscribe(() => {
    console.log('JSON.stringify(store01.getState)', JSON.stringify(containerStore.getState()));
})
containerStore.dispatch({type: "CHANGE_EDIT_STATUS"});
containerStore.dispatch({
    type: "ADD_NEW",
    newItem: "nhat"
});
containerStore.dispatch({
    type: "DELETE",
    index: 2
});

export default containerStore;