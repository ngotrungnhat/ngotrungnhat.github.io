import React, { Component } from 'react'

export default class AddVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video_background: '',
      video_name: '',
      video_date: '',
      video_time: null,
      video_view: null,
    }
  }
  
  isChange = (event) => {
    const name = event.target.name,
          value = event.target.value
    this.setState({[name]: value})
  }

  handleClickAdd = () => {
    const objDataAdd = {}
    objDataAdd.video_background = this.state.video_background;
    objDataAdd.video_name = this.state.video_name;
    objDataAdd.video_date = this.state.video_date;
    objDataAdd.video_time = this.state.video_time;
    objDataAdd.video_view = this.state.video_view;
    this.props.addVideos(objDataAdd)
    this.setState({
      video_background: '',
      video_name: '',
      video_date: '',
      video_time: null,
      video_view: null,
    })
  }
  render() {
    return (
        <div className="container">
        <div className="row">
          <div className="col-12 mx-auto mb-5">
            <form>
              <div className="form-group"><label>Ảnh Video</label><input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="video_background" id="true" aria-describedby="helpId" placeholder="Nhập link ảnh video" /></div>
              <div className="form-group"><label>Tên Videos</label><input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="video_name" id="true" aria-describedby="helpId" placeholder="Nhập tên video" /></div>
              <div className="form-group"><label>Ngày Xuất Bản Video</label><input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="video_date" id="true" aria-describedby="helpId" placeholder="Nhập ngày xuất bản video" /></div>
              <div className="form-group"><label>Thời Lượng Video</label><input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="video_time" id="true" aria-describedby="helpId" placeholder="Nhập thời lượng video" /></div>
              <div className="form-group"><label>Lượt Xem Video</label><input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="video_view" id="true" aria-describedby="helpId" placeholder="Nhập lượt xem video" /></div>
              <button onClick={() => this.handleClickAdd()} type="reset" className="btn btn-block btn-info">Thêm Mới</button>
            </form>
          </div>
        </div>
      </div>
      
    )
  }
}
