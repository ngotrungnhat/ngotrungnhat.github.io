import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
   var redux = require('redux');
   var oldState = {
     num: ["màn hình", "chuột", "bàn phím"],
     editStatus: true
   }
   var reducer1 = (state = oldState, action) => {
     switch (action.type) {
       case "CHANG_EDIT_STATUS":
         return {...state, editStatus: !state.editStatus}     
       case "ADD_NEW":
         return {...state, num: [...state.num, action.newItem1,action.newItem2]}     
       case "DELETE":
         return {...state, num: state.num.filter((value, key) => key !== action.index)}     
       default:
         break;
     }
     return state;
   }
   var store1 = redux.createStore(reducer1)
   store1.subscribe(() => {
     console.log('store1.getState()', JSON.stringify(store1.getState()));
   })
   store1.dispatch({type: "CHANG_EDIT_STATUS"})
   store1.dispatch({
     type: "ADD_NEW",
     newItem1: "tai nghe",
     newItem2: "SmartPhone"
    })
    store1.dispatch({
      type: "DELETE",
      index: 1
    })
  //  console.log('store1.getState()', store1.getState());
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
