import React, { Component } from 'react'

export default class ContentVideo extends Component {

  handleClickEdit = () => {
    const objNeedEdit = {}
    objNeedEdit.id = this.props.id
    objNeedEdit.video_background = this.props.video_background
    objNeedEdit.video_name = this.props.video_name
    objNeedEdit.video_date = this.props.video_date
    objNeedEdit.video_time = this.props.video_time
    objNeedEdit.video_view = this.props.video_view
    this.props.changeSttFormEdit()
    this.props.getObjNeedEdit(objNeedEdit)
  }

  handleClickDelete = () => {
    this.props.deleteVideo(this.props.id)
  }

  render() {
    return (
        <div className="card-parent">
        <div className="card">
          <div className="card-img" style={{backgroundImage: 'url("'+this.props.video_background+'")'}} />
          <div className="card-text card-text__book">
            <h3 className="card-text__title">{this.props.video_name}</h3>
            <p className="card-text__content">{this.props.video_date}</p>
            <div className="card-paraVideo">
              <span className="time">{this.props.video_time} Phút</span>
              <span className="hyphen">•</span>
              <span className="view">{this.props.video_view} lượt xem</span>
            </div>
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
