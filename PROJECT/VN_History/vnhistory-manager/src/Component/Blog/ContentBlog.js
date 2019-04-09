import React, { Component } from 'react'

export default class ContentBlog extends Component {
  render() {
    return (
        <div className="card-parent">
        <div className="card">
          <div className="card-img" style={{backgroundImage: 'url(https://images.vov.vn/cr_w490/uploaded/gyj8ypvaewcwkozvalyua/2017_04_23/chien_tranh_vn_vov_bxqb.jpg)'}} />
          <div className="card-text card-text__blog">
            <h3 className="card-text__title">Chiến tranh Việt Nam qua con mắt các nhà làm phim tài liệu nước ngoài</h3>
            <p className="card-text__content">Dù chiến tranh VN đã đi qua, nhưng các nhà làm phim tài liệu nước ngoài vẫn luôn có cảm hứng về đề tài này với nhiều góc độ</p>
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
