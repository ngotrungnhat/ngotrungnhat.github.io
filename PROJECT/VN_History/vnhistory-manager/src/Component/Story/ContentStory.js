import React, { Component } from 'react'

export default class ContentStory extends Component {
  render() {
    return (
        <div className="card-parent">
          <div className="card">
            <div className="card-img" style={{backgroundImage: 'url(http://bannenbiet.com/wp-content/uploads/2018/07/phap-xam-luoc-viet-nam.jpg)'}} />
            <div className="card-text">
              <h3 className="card-text__title">Âm Mưu Xâm Lược Việt Nam Của Pháp</h3>
              <p className="card-text__content">Chiến tranh Pháp–Đại Nam hoặc chiến tranh Pháp-Việt, hay còn được gọi là Pháp xâm lược Đại Nam</p>
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
