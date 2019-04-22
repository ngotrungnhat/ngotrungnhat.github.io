import React, { Component } from 'react'

export default class ContentBlog extends Component {
  
  handleClickEdit = () => {
    const objDataEdit = {}
    objDataEdit.id = this.props.id
    objDataEdit.blog_title = this.props.blog_title
    objDataEdit.blog_content = this.props.blog_content
    objDataEdit.blog_background = this.props.blog_background
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
          <div className="card-img" style={{backgroundImage: 'url("' + this.props.blog_background + '")'}} />
          <div className="card-text card-text__blog">
            <h3 className="card-text__title">{this.props.blog_title}</h3>
            <p className="card-text__content">{this.props.blog_content}</p>
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
