import React, { Component } from 'react'
import {connect} from 'react-redux'
import NoteContentItem from './NoteContentItem';
import {noteData} from './../firebaseConnect'

class NoteContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrDataFirebaes: []
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
    
    getData = () => {
        if (this.state.arrDataFirebaes){
            return this.state.arrDataFirebaes.map((value, key) => {
                return (
                    <NoteContentItem
                    key={key}
                    id={value.id}
                    noteTitle={value.noteTitle}
                    noteContent={value.noteContent}
                    note = {value}/>
                )
            })
        } 
        
    }

  render() {
    return (
        <div className="col mt-5">
            <div id="noteId" role="tablist" aria-multiselectable="true">
                {this.getData()}
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
      noteData: state.noteData
    }
  }



export default connect(mapStateToProps)(NoteContent)