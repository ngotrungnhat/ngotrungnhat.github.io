import React, { Component } from 'react';
import './../App.css';
import NoteHeader from './NoteHeader';
import NoteContent from './NoteContent';
import NoteEditContent from './NoteEditContent';
import { connect } from 'react-redux';
import AlertInfo from './AlertInfo';
// import {noteData} from './../firebaseConnect'

class App extends Component {
  showForm  = () => {
    if (this.props.isEdit === true) {
      return <NoteEditContent/>
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <NoteHeader/>
          <AlertInfo/>
          <NoteContent/>
          {this.showForm()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}

export default connect(mapStateToProps, null, null)(App)
