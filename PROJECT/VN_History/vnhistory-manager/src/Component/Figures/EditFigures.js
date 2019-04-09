import React, { Component } from 'react'

export default class EditFigures extends Component {
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
                <div className="form-group"><label>Ảnh</label><input type="text" className="form-control" name="image-edit_story" id="true" aria-describedby="helpId" placeholder="Nhập link ảnh câu chuyện" /></div>
                <div className="form-group"><label>Tiêu Đề</label><input type="text" className="form-control" name="title-edit_story" id="true" aria-describedby="helpId" placeholder="Nhập tên câu chuyện" /></div>
                <div className="form-group">
                  <label>Nội Dung Câu Chuyện</label>
                  <textarea className="form-control" name="content_story" rows={3} defaultValue={""} />
                </div>
                <button type="reset" className="btn btn-block btn-info">Thêm Mới</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}
