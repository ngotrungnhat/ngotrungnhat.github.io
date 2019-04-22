import React, { Component } from 'react'
import { connect } from 'react-redux';

class EditContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: this.props.objNeedEdit.noteTitle,
      noteContent: this.props.objNeedEdit.noteContent
    }
  }
  
  handleClickSaveEdit = () => {
    this.props.changeStatusEditForm()
    const objEdited = {}
    objEdited.id = this.props.objNeedEdit.id
    objEdited.noteTitle = this.state.noteTitle
    objEdited.noteContent = this.state.noteContent
    this.props.editData(objEdited)
  }

  isChange = (event) => {
    const name = event.target.name,
    value = event.target.value
    this.setState({[name]: value})
  }

  render() {
    return (
        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">SỬA GHI CHÚ</h5>
              <button onClick={() => this.props.changeStatusEditForm()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
              <form>
                <div className="modal-body">
                <div className="form-group">
                  <label>Tiêu Đề Note</label>
                    <input onChange={(event) => this.isChange(event)} defaultValue={this.props.objNeedEdit.noteTitle} type="text" className="form-control" name="noteTitle" id="true" aria-describedby="helpId" placeholder="Nhập tiêu đề ghi chú" />
                </div>
                <div className="form-group">
                  <label>Nội Dung Note</label>
                  <textarea onChange={(event) => this.isChange(event)} defaultValue={this.props.objNeedEdit.noteContent} className="form-control" name="noteContent" rows={5} placeholder="Nhập nội ghi chú"/>
                </div>
              </div>
              <div className="modal-footer">
                <button onClick={() => this.handleClickSaveEdit()} type="button" className="btn btn-info btn-block" data-dismiss="modal">Lưu Thay Đổi</button>
              </div>
              </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    objNeedEdit: state.objNeedEdit
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeStatusEditForm: () => {
      dispatch({type: 'CHANGE_STATUS_EDIT_FORM'})
    },
    editData: (objEdited) => {
      dispatch({
        type: 'EDIT_DATA',
        objEdited: objEdited
    })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps, null)(EditContent)
