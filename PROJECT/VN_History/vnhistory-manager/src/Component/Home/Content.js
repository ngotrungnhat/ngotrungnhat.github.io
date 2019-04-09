import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    return (
        <div className="card-parent">
        <div className="card">
          <div className="card-text">
            <h2 className="card-text__title text-center">1858</h2>
            <p className="card-text__content">Ngày 31 tháng 8 năm 1858: Hải quân Pháp đổ bộ tấn công vào cảng Đà Nẵng và sau đó rút vào xâm chiếm Sài Gòn</p>
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
