import {noteData} from './../firebaseConnect'

const redux = require('redux')
const noteInitialState = {
    alertShow: false,
    alertContent: '',
    statusAddForm: false,
    statusEditForm: false,
    objNeedEdit: {},
    keySearch: '',
    resultSearch: []
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "GET_DATABASE":
            console.log('action.resultSearch', action.resultSearch)
            return {...state, resultSearch: action.resultSearch}
        case "CHANGE_STATUS_ADD_FORM":
            return {...state, statusAddForm: !state.statusAddForm}
        case "ADD_DATA":
            noteData.push(action.objNeedAdd)
            return state
        case "CHANGE_STATUS_EDIT_FORM":
            return {...state, statusEditForm: !state.statusEditForm}
        case "GET_DATA_NEED_EDIT":
            return {...state, objNeedEdit: action.objNeedEdit}

        case "ALERT_ON":
            return {...state, alertShow: true, alertContent: action.AlertContent}
        case "ALERT_OFF":
            return {...state, alertShow: false}
        case "EDIT_DATA":
        noteData.child(action.objEdited.id).update({
                noteTitle: action.objEdited.noteTitle,
                noteContent: action.objEdited.noteContent
            })
            return {state}
        case "DELETE_DATA":
            console.log('this.state.resultSearch', state.resultSearch)
            noteData.child(action.objNeedDelete.id).remove()
            return {state}
        case "SEARCH_DATA":
            return {...state, keySearch: action.keySearch}
        default:
            return state
    }
}
var noteStore = redux.createStore(allReducer)
// noteStore.subscribe(function(){
//     console.log('JSON.stringify(noteStore.getState())', JSON.stringify(noteStore.getState()))
// })

export default noteStore;