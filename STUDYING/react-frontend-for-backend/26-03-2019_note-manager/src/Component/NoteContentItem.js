import React, { Component } from 'react'
import { connect } from 'react-redux';

class NoteContentItem extends Component {

  // deleteAction  = () => {
  //   this.props.getEditData(this.props.note)
  //   this.props.delete()
  //   this.props.alertOn('Xóa Phần Tử '+ this.props.note.noteTitle +' Thành Công')
  // }

  handleEditData = () => {
    this.props.changeEditStatus()
    this.props.getDataNeedEdit(this.props.note)
  }

  handleDeleteData  = () => {
    this.props.deleteData(this.props.note)
  }

  render() {
    return (
        <div className="card">
            <div className="card-header" role="tab" id="note01">
            <h5 className="mb-0" style={{display: 'inline'}}>
                <a data-toggle="collapse" data-parent="#noteId" href={"#"+this.props.id} aria-expanded="true" aria-controls={this.props.id}>
                {this.props.noteTitle}
                </a>
            </h5>
            <div className="btn-group " style={{display: 'block', cursor: 'pointer', float: 'right'}}>
              <div onClick={() => this.handleEditData()} className="btn btn-warning sua">
                <i className="fa fa-edit">Sửa</i>
              </div>
              <div onClick={() => this.handleDeleteData()} className="btn btn-danger xoa">
                <i className="fa fa-delete">Xóa</i>
              </div>
            </div>
            </div>
            <div id={this.props.id} className="collapse in" role="tabpanel" aria-labelledby={this.props.id}>
            <div className="card-body">
            {this.props.noteContent}
            </div>
            </div>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({
        type: 'CHANGE_STATUS_EDIT_FORM'
      })
    },
    getDataNeedEdit: (objNeedEdit) => {
      dispatch({
        type: 'GET_DATA_NEED_EDIT',
        objNeedEdit: objNeedEdit
      })
    },
    deleteData: (objNeedDelete) => {
      dispatch({
        type: 'DELETE_DATA',
        objNeedDelete: objNeedDelete
      })
    },
    alertOn: (AlertContent) => {
      dispatch({
        type: 'ALERT_ON',
        AlertContent: AlertContent

      })
    },
    alertOff: () => {
      dispatch({
        type: 'ALERT_OFF'
      })
    }
  }
}
    
export default connect(null, mapDispatchToProps, null)(NoteContentItem)