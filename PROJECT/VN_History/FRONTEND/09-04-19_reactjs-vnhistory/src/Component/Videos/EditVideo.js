import React, { Component } from 'react'

export default class EditVideo extends Component {
  render() {
    return (
        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body"> 
              <form>
                <div className="form-group"><label>Ảnh</label><input type="text" className="form-control" name="image" id="true" aria-describedby="helpId" placeholder="Nhập link ảnh sách" /></div>
                <div className="form-group"><label>Tên Sách</label><input type="text" className="form-control" name="title_book" id="true" aria-describedby="helpId" placeholder="Nhập tên sách" /></div>
                <div className="form-group"><label>Giá Nhập</label><input type="text" className="form-control" name="price_book" id="true" aria-describedby="helpId" placeholder="Nhập giá gốc" /></div>
                <div className="form-group"><label>Giá Sale</label><input type="text" className="form-control" name="sale_book" id="true" aria-describedby="helpId" placeholder="Nhập giá bán" /></div>
                <button type="reset" className="btn btn-block btn-info">Lưu Thay Đổi</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}
