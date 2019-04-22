import React, { Component } from 'react'

export default class ContentFigures extends Component {
  
  handleClickEdit = () => {
    const objDataEdit = {}
    objDataEdit.id = this.props.id
    objDataEdit.figures_name = this.props.figures_name
    objDataEdit.figures_born = this.props.figures_born
    objDataEdit.figures_background = this.props.figures_background
    this.props.changeStatusFormEdit()
    this.props.getDataWhenClickButtonEdit(objDataEdit)
  }

  handleClickDelete = () => {
    this.props.deleteFigures(this.props.id)
  }

  render() {
    return (
        <div className="card-parent">
        <div className="card">
          <div className="card-img" style={{backgroundImage: 'url("' + this.props.figures_background + '")'}} />
          <div className="card-text card-text__figures">
            <h3 className="card-text__title">{this.props.figures_name}</h3>
            <p className="card-text__content">{this.props.figures_born}</p>
          </div>
          <div className="btn-group" style={{width: '100%'}}>
            <div onClick = {() => this.handleClickEdit()} className="btn btn-warning" data-toggle="modal" data-target="#modelId">
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
