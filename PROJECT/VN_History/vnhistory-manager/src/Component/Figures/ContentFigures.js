import React, { Component } from 'react'

export default class ContentFigures extends Component {
  render() {
    return (
        <div className="card-parent">
        <div className="card">
          <div className="card-img" style={{backgroundImage: 'url(http://nghiencuuquocte.net/wp-content/uploads/2015/09/ngo-dinh-diem1.jpg)'}} />
          <div className="card-text card-text__figures">
            <h3 className="card-text__title">Ngô Đình Diệm</h3>
            <p className="card-text__content">1901 - 1963</p>
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
