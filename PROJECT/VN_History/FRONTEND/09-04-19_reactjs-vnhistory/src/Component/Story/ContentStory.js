import React, { Component } from 'react'

export default class ContentStory extends Component {

  handleClickEdit = () => {
    const objDataEdit = {}
    objDataEdit.id = this.props.id
    objDataEdit.story_title = this.props.story_title
    objDataEdit.story_content = this.props.story_content
    objDataEdit.story_background = this.props.story_background
    this.props.ChangeSttFormEdit()
    this.props.getDataWhenClickButtonEdit(objDataEdit)
  }

  handleClickDelete = () => {
    this.props.getIdToDelete(this.props.id)
  }

  render() {
    return (
        <div className="card-parent">
          <div className="card">
            <div className="card-img" style={{backgroundImage: 'url("' + this.props.story_background + '")'}} />
            <div className="card-text">
              <h3 className="card-text__title">{this.props.story_title}</h3>
              <p className="card-text__content">{this.props.story_content}</p>
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
