import React, { Component } from 'react'

export default class AddContent extends Component {
  render() {
    return (
        <div className="container mb-5">
        <hr />
        <div className="form-group">
          <label className="text-center">THÊM MỚI NỘI DUNG</label>
          <textarea className="form-control" name="addContent" rows={9} defaultValue={""} />
        </div>
        <button type="submit" className="btn btn-block btn-info">Thêm Mới</button>
      </div>
      
    )
  }
}
