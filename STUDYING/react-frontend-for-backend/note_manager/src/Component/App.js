import React, { Component } from 'react';
import './App.css';
import { noteData } from './firebaseConnect';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

class App extends Component {
  getData = (objData) => {
    console.log(objData)
    noteData.push(objData)
  }
  render() {
    // LẤY DỮ LIỆU IN RA TỪ FIREBASE
    noteData.once('value').then(function(snapshot){
      console.log(snapshot.val());
    });
    return (
      <div>
        <Nav/>
      <div className='container'>
        <div className="row">
          <NoteList/>
          <NoteForm getData={(objData) => this.getData(objData)}/>
        </div>
      </div>
      </div>
    );
  }
}

export default App;