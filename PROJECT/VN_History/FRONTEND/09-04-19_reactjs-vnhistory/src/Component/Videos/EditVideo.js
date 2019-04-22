import React, { Component } from 'react'

export default class EditVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.objNeedEdit.id,
      video_background: this.props.objNeedEdit.video_background,
      video_name: this.props.objNeedEdit.video_name,
      video_date: this.props.objNeedEdit.video_date,
      video_time: this.props.objNeedEdit.video_time,
      video_view: this.props.objNeedEdit.video_view
    }
  }
  

  isChange  = (event) => {
    const name = event.target.name,
    value = event.target.value
    this.setState({[name]: value})
  }

  handleClickSave  = () => {
    const objEdited = {}
    objEdited.id = this.state.id
    objEdited.video_background = this.state.video_background
    objEdited.video_name = this.state.video_name
    objEdited.video_date = this.state.video_date
    objEdited.video_time = this.state.video_time
    objEdited.video_view = this.state.video_view
    this.props.changeSttFormEdit()
    this.props.editVideos(objEdited)
  }
  render() {
    return (
        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button onClick={() => this.props.changeSttFormEdit()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body"> 
              <form>
              <div className="form-group"><label>Ảnh Video</label><input onChange={(event) => this.isChange(event)} defaultValue={this.props.objNeedEdit.video_background} type="text" className="form-control" name="video_background" id="true" aria-describedby="helpId" placeholder="Nhập link ảnh video" /></div>
              <div className="form-group"><label>Tên Videos</label><input onChange={(event) => this.isChange(event)} defaultValue={this.props.objNeedEdit.video_name} type="text" className="form-control" name="video_name" id="true" aria-describedby="helpId" placeholder="Nhập tên video" /></div>
              <div className="form-group"><label>Ngày Xuất Bản Video</label><input onChange={(event) => this.isChange(event)} defaultValue={this.props.objNeedEdit.video_date} type="text" className="form-control" name="video_date" id="true" aria-describedby="helpId" placeholder="Nhập ngày xuất bản video" /></div>
              <div className="form-group"><label>Thời Lượng Video</label><input onChange={(event) => this.isChange(event)} defaultValue={this.props.objNeedEdit.video_time} type="text" className="form-control" name="video_time" id="true" aria-describedby="helpId" placeholder="Nhập thời lượng video" /></div>
              <div className="form-group"><label>Lượt Xem Video</label><input onChange={(event) => this.isChange(event)} defaultValue={this.props.objNeedEdit.video_view} type="text" className="form-control" name="video_view" id="true" aria-describedby="helpId" placeholder="Nhập lượt xem video" /></div>
                <button onClick = {() => this.handleClickSave()} type="reset" className="btn btn-block btn-info">Lưu Thay Đổi</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}
