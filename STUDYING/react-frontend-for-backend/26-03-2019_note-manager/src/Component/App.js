import React, { Component } from 'react';
import './../App.css';
import NoteHeader from './NoteHeader';
import NoteContent from './NoteContent';
import { connect } from 'react-redux';
import AlertInfo from './AlertInfo';
import EditContent from './EditContent';
import AddContent from './AddContent';
import SearchForm from './SearchForm';
import {noteData} from './../firebaseConnect'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        arrDataFirebaes: [],
        resultSearch: []
    }
}

componentWillMount = () => {
    var arrData = [];
    noteData.on('value',  (notes) => {
      notes.forEach(element => {
          const key = element.key
          const noteTitle = element.val().noteTitle
          const noteContent = element.val().noteContent
          arrData.push({
              id: key,
              noteTitle: noteTitle,
              noteContent: noteContent
          })
      })
      this.setState({arrDataFirebaes: arrData})
      arrData = [];
    })
}

  returnAddContent = () => {
    if (this.props.statusAddForm === true) {
      return <AddContent/>
    }
  }

  returnEditContent = () => {
    if (this.props.statusEditForm === true) {
      return <EditContent/>
    }
  }
  
  render() {
    var resultSearch = []
    this.state.arrDataFirebaes.forEach((item) => {
        if (item.noteTitle.indexOf(this.props.keySearch) !== -1 || item.noteContent.indexOf(this.props.keySearch) !== -1) {
            resultSearch.push(item)
            this.props.getDatabase(resultSearch)
        }
    })
    return (
      <div className="container">
        <div className="row">
          <NoteHeader/>
          <AlertInfo/>
          <div className="col">
            <SearchForm/>
            <NoteContent arrDataFirebaes={this.state.arrDataFirebaes} resultSearch={resultSearch}/>
          </div>
          {this.returnAddContent()}
          {this.returnEditContent()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    statusAddForm: state.statusAddForm,
    statusEditForm: state.statusEditForm,
    keySearch: state.keySearch
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchData: () => {
      dispatch({
        type: "SEARCH_DATA"
      })
    },
    getDatabase: (resultSearch) => {
      dispatch({
        type: "GET_DATABASE",
        resultSearch: resultSearch
      })
    },
    editData: (resultSearch) => {
      dispatch({
        type: "EDIT_DATA",
        resultSearch: resultSearch
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(App)
