import React, { Component } from 'react'

export default class AddFigures extends Component {
  render() {
    return (
        <div className="container">
        <div className="row">
          <div className="col-12 mx-auto mb-5">
            <form>
              <div className="form-group"><label>Ảnh</label><input type="text" className="form-control" name="image" id="true" aria-describedby="helpId" placeholder="Nhập link ảnh câu chuyện" /></div>
              <div className="form-group"><label>Tiêu Đề</label><input type="text" className="form-control" name="title_story" id="true" aria-describedby="helpId" placeholder="Nhập tên câu chuyện" /></div>
              <div className="form-group">
                <label>Nội Dung Câu Chuyện</label>
                <textarea className="form-control" name="content_story" rows={3} defaultValue={""} />
              </div>
              <button type="reset" className="btn btn-block btn-info">Thêm Mới</button>
            </form>
          </div>
        </div>
      </div>
      
    )
  }
}
