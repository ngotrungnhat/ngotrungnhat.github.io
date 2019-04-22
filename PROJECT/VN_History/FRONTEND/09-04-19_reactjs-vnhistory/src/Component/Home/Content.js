import React, { Component } from 'react'

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editStatus: false
    }
  }
  
  handleClickDelete = () => {
    this.props.deleteContent(this.props.id)
  }

  handleClickEdit = () => {
    var objEdit = {}
    objEdit.id = this.props.id
    objEdit.year = this.props.year
    objEdit.event = this.props.event
    this.props.editContent(objEdit)
    this.props.changeSttEditForm()
  }

  render() {
    return (
        <div className="card-parent">
        <div className="card">
          <div className="card-text">
            <h2 className="card-text__title text-center">{this.props.year}</h2>
            <p className="card-text__content">{this.props.event}</p>
          </div>
          <div className="btn-group" style={{width: '100%'}}>
            <div onClick={() => this.handleClickEdit()} className="btn btn-warning" data-toggle="modal" data-target="#modelId">
              <i className="fa fa-edit">Sửa</i>
            </div>
            <div onClick={() => this.handleClickDelete()} className="btn btn-danger">
              <i className="fa fa-trash">Xóa</i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
