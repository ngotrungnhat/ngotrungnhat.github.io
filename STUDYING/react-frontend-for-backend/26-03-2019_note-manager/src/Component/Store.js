import {noteData} from './../firebaseConnect'

const redux = require('redux')
const noteInitialState = {
    isEdit: false,
    isAdd: false,
    editItem: {},
    alertShow: false,
    alertContent: ''
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.objItem)
            return state
        case "CHANGE_EDIT_STATUS":
            return {...state, isEdit: !state.isEdit}
        case "CHANGE_ADD_STATUS":
            return {...state, isAdd: !state.isAdd}
        case "ALERT_ON":
            return {...state, alertShow: true, alertContent: action.AlertContent}
        case "ALERT_OFF":
            return {...state, alertShow: false}
        case "GET_EDIT_DATA":
            return {...state, editItem: action.editObject}
        case "EDIT":
            noteData.child(action.objEdit.id).update({
                noteTitle: action.objEdit.noteTitle,
                noteContent: action.objEdit.noteContent
            })
            return {...state, editItem: {}}
        case "DELETE":
            noteData.child(state.editItem.id).remove()
            return {...state, editItem: {}}
        default:
            return state
    }
}
var noteStore = redux.createStore(allReducer)
// noteStore.subscribe(function(){
//     console.log('JSON.stringify(noteStore.getState())', JSON.stringify(noteStore.getState()))
// })

export default noteStore;