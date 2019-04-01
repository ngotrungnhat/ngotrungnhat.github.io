import React, { Component } from 'react'
import {connect} from 'react-redux'

class NoteEditContent extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      noteTitle: '',
      noteContent: '',
      id: ''
      // titleForm: ''
    };
  }

  componentWillMount() {
    if (this.props.editItem) {
      this.setState({
        id: this.props.editItem.id,
        noteTitle: this.props.editItem.noteTitle,
        noteContent: this.props.editItem.noteContent
      })
    }
  }
  
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  buttonClickSave  = () => {
    if (this.props.editItem.id) {
      var objEdit = {}
      objEdit.id = this.state.id
      objEdit.noteTitle = this.state.noteTitle
      objEdit.noteContent = this.state.noteContent
      this.props.edit(objEdit)
      this.props.alertOn('Sửa thành công')
    }else{
      var objItem = {};
      objItem.noteTitle = this.state.noteTitle;
      objItem.noteContent = this.state.noteContent;
      this.props.addData(objItem)
      this.props.alertOn('Thêm mới thành công')
    }
    this.props.changeEditStatus()
    this.props.changeAddStatus()
  }
  
  titleForm  = () => {
    if (this.props.isAdd === false) {
      return "SỬA"
    } else {
      return "THÊM"
    }
  }
  
  render() {
    return (
      <div className="col-4 mt-5">
        <h2>{this.titleForm()}</h2>
          <form>
            <div className="form-group">
            <label>Tiêu Đề Note</label>
            <input onChange={(event) => this.isChange(event)} defaultValue={this.props.editItem.noteTitle} type="text" className="form-control" name="noteTitle" aria-describedby="helpId" placeholder="Nhập tiêu đề note" />
            </div>
            <div className="form-group">
            <label>Nội Dung Note</label>
            <textarea onChange={(event) => this.isChange(event)} defaultValue={this.props.editItem.noteContent} className="form-control" name="noteContent" rows={5} placeholder="Nhập nội dung note" />
            </div>
            <button onClick={() => this.buttonClickSave()} type="reset"className="btn btn-block btn-primary">Lưu</button>
          </form>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    editItem: state.editItem,
    isAdd: state.isAdd
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addData: (objItem) => {
      dispatch({
        type: "ADD_DATA",
        objItem: objItem
      })
    },
    edit: (objEdit) => {
      dispatch({
        type: "EDIT",
        objEdit: objEdit
      })
    },
    changeEditStatus: () => {
      dispatch({
        type: 'CHANGE_EDIT_STATUS'
      })
    },
    changeAddStatus: () => {
      dispatch({
        type: 'CHANGE_ADD_STATUS'
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

export default connect(mapStateToProps, mapDispatchToProps)(NoteEditContent)
