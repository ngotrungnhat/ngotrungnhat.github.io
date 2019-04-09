import React, { Component } from 'react'

export default class AddBook extends Component {
  render() {
    return (
        <div className="container">
        <div className="row">
          <div className="col-12 mx-auto mb-5">
            <form>
              <div className="form-group"><label>Ảnh</label><input type="text" className="form-control" name="image" id="true" aria-describedby="helpId" placeholder="Nhập link ảnh sách" /></div>
              <div className="form-group"><label>Tên Sách</label><input type="text" className="form-control" name="title_book" id="true" aria-describedby="helpId" placeholder="Nhập tên sách" /></div>
              <div className="form-group"><label>Giá Nhập</label><input type="text" className="form-control" name="title_book" id="true" aria-describedby="helpId" placeholder="Nhập giá gốc" /></div>
              <div className="form-group"><label>Giá Sale</label><input type="text" className="form-control" name="title_book" id="true" aria-describedby="helpId" placeholder="Nhập giá bán" /></div>
              <button type="reset" className="btn btn-block btn-info">Thêm Mới</button>
            </form>
          </div>
        </div>
      </div>
      
    )
  }
}
