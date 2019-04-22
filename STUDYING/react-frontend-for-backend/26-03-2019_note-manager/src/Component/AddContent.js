import React, { Component } from 'react'
import {connect} from 'react-redux'

class NoteEditContent extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      noteTitle: '',
      noteContent: '',
      // objNeedAdd: {}
    };
  }

  handleClickAdd = () => {
    this.props.changeStatusAddForm()
    const objNeedAdd = {}
    objNeedAdd.noteTitle = this.state.noteTitle
    objNeedAdd.noteContent = this.state.noteContent
    // this.setState({objNeedAdd: objNeedAdd})
    this.props.addData(objNeedAdd)
  }
  
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }
  
  render() {
    return (
      <div className="col-4 mt-5">
        <h2>Thêm Mới Ghi Chú</h2>
          <form>
            <div className="form-group">
              <label>Tiêu Đề Note</label>
              <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" aria-describedby="helpId" placeholder="Nhập tiêu đề note" />
            </div>
            <div className="form-group">
              <label>Nội Dung Note</label>
              <textarea onChange={(event) => this.isChange(event)} className="form-control" name="noteContent" rows={5} placeholder="Nhập nội dung note" />
            </div>
            <button onClick={() => this.handleClickAdd()} type="reset"className="btn btn-block btn-primary">Thêm Mới</button>
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
    changeStatusAddForm: () => {
      dispatch({type: "CHANGE_STATUS_ADD_FORM"})
    },
    addData: (objNeedAdd) => {
      dispatch({type: "ADD_DATA",
      objNeedAdd: objNeedAdd
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
