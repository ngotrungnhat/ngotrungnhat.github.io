import React, { Component } from 'react'
import {connect} from 'react-redux'
import NoteContentItem from './NoteContentItem';
// import {noteData} from './../firebaseConnect'

class NoteContent extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         arrDataFirebaes: [],
    //         resultSearch: []
    //     }
    // }

    // componentWillMount = () => {
    //     var arrData = [];
    //     noteData.on('value',  (notes) => {
    //         console.log('notes', notes)
    //         notes.forEach(element => {
    //             const key = element.key
    //             const noteTitle = element.val().noteTitle
    //             const noteContent = element.val().noteContent
    //             arrData.push({
    //                 id: key,
    //                 noteTitle: noteTitle,
    //                 noteContent: noteContent
    //             })
    //         })
    //         this.setState({arrDataFirebaes: arrData})
    //         arrData = [];
    //     })
    // }

    // searchData = () => {
    //     if (this.state.arrDataFirebaes) {
            // var resultSearch = []
            // this.state.arrDataFirebaes.forEach((item) => {
            //     if (item.noteTitle.indexOf(this.props.keySearch) !== -1 || item.noteContent.indexOf(this.props.keySearch) !== -1) {
            //         resultSearch.push(item)
            //     }
            // })
    //         console.log('resultSearch', resultSearch)
    //         this.props.searchData(resultSearch)
    //     }
    // }
    
    getData = () => {
        // if (this.state.arrDataFirebaes){            
            return this.props.resultSearch.map((value, key) => {
                return (
                    <NoteContentItem
                    key={key}
                    id={value.id}
                    noteTitle={value.noteTitle}
                    noteContent={value.noteContent}
                    note = {value}/>
                )
            })
        // } 
    }

  render() {
    return (
        <div id="noteId" role="tablist" aria-multiselectable="true">
            {this.getData()}
        </div>
    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//       noteData: state.noteData,
//       keySearch: state.keySearch,
//       resultSearch: state.resultSearch
//     }
//   }
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         searchData: (resultSearch) => {
//             dispatch({
//                 type: "SEARCH_DATA",
//                 resultSearch: resultSearch
//             })
//         }
//     }
// }

export default connect(null, null, null)(NoteContent)