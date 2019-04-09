import React, { Component } from 'react'

export default class ContentVideo extends Component {
  render() {
    return (
        <div className="card-parent">
        <div className="card">
          <div className="card-img" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/vi/4/4c/Kh%C3%B4ng_n%C6%A1i_%E1%BA%A9n_n%E1%BA%A5p.jpg)'}} />
          <div className="card-text card-text__book">
            <h3 className="card-text__title">Không Nơi Ẩn Nấp</h3>
            <p className="card-text__content">năm 1971</p>
            <div className="card-paraVideo">
              <span className="time">103 Phút</span>
              <span className="hyphen">•</span>
              <span className="view">1000 lượt xem</span>
            </div>
          </div>
          <div className="btn-group" style={{width: '100%'}}>
            <div className="btn btn-warning" data-toggle="modal" data-target="#modelId">
              <i className="fa fa-edit">Sửa</i>
            </div>
            <div className="btn btn-danger">
              <i className="fa fa-trash">Xóa</i>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}
