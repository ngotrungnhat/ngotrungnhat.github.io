import React, { Component } from 'react'

export default class ContentBook extends Component {
  render() {
    return (
        <div className="card-parent">
        <div className="card">
          <div className="card-img" style={{backgroundImage: 'url(https://www.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_58671.jpg)'}} />
          <div className="card-text card-text__book">
            <h3 className="card-text__title">Lịch Sử Việt Nam Bằng Tranh</h3>
            <p className="card-text__content">Trần Bạch Đằng</p>
            <div className="card-price">
              <span className="price">20.000&nbsp;đ</span>
              <span className="sale">25.000&nbsp;đ</span>
              <span className="pricesale">10%</span>
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
