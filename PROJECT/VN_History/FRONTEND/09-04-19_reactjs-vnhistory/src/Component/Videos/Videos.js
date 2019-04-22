import React, { Component } from 'react'
import ContentVideo from './ContentVideo';
import AddVideo from './AddVideo';
import EditVideo from './EditVideo';
import axios from 'axios'

const getDataVideos = () => axios.get('/getDataVideos').then((response) => response.data).catch((error) => console.log(error))
const addDataVideos = (video_name, video_date, video_time, video_view, video_background) => (axios.post('/addDataVideos', {video_name, video_date, video_time, video_view, video_background}).then((responsive) => responsive.data))

export default class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataVideos: null,
      sstFormEdit: false,
      objNeedEdit: {}
    }
  }
  
  componentWillMount() {
    if (this.state.dataVideos === null) {
      getDataVideos().then((res) => {
        this.setState({dataVideos: res})
      })
    }
  }

  printDataVideos = () => {
    if (this.state.dataVideos !== null) {
      return this.state.dataVideos.map((value, key) => (<ContentVideo
        key={key}
        id={value.id}
        video_name={value.video_name}
        video_date={value.video_date}
        video_time={value.video_time}
        video_view={value.video_view}
        video_background={value.video_background}
        changeSttFormEdit={() => this.changeSttFormEdit()}
        getObjNeedEdit={(objNeedEdit) => this.getObjNeedEdit(objNeedEdit)}
        deleteVideo={(idNeedDelete) => this.deleteVideo(idNeedDelete)}
        />))
    }
  }

  addVideos  = (objDataAdd) => {
    if (objDataAdd.video_name !== '' && objDataAdd.video_date !== '' && objDataAdd.video_time !== null && objDataAdd.video_view !== null && objDataAdd.video_background !== '') {
      addDataVideos(objDataAdd.video_name, objDataAdd.video_date, objDataAdd.video_time, objDataAdd.video_view, objDataAdd.video_background).then((res) => {
        const dataTempAdd = this.state.dataVideos
        dataTempAdd.push(objDataAdd)
        this.setState({dataVideos: dataTempAdd})
      })
    } else {
      alert('Bạn chưa nhập đủ các trường')
    }
  }

  changeSttFormEdit = () => {
    this.setState({sstFormEdit: !this.state.sstFormEdit})
  }

  returnEditBook = () => {
    if (this.state.sstFormEdit === true) {
      return  <EditVideo changeSttFormEdit={() => this.changeSttFormEdit()}  objNeedEdit={this.state.objNeedEdit} editVideos={(objEdited) => this.editVideos(objEdited)}/>
    }
  }

  getObjNeedEdit  = (objNeedEdit) => {
    this.setState({objNeedEdit: objNeedEdit})
  }

  editVideos = (objEdited) => {
    this.state.dataVideos.forEach((value, key) => {
      if (value.id === objEdited.id) {
        value.video_name = objEdited.video_name
        value.video_date = objEdited.video_date
        value.video_time = objEdited.video_time
        value.video_view = objEdited.video_view
        value.video_background = objEdited.video_background
      }
    })
  }

  deleteVideo  = (idNeedDelete) => {
    const dataTempDelete = this.state.dataVideos.filter(item => item.id !== idNeedDelete)
    this.setState({dataVideos: dataTempDelete})
  }

  render() {
    return (
      <div>
        {this.returnEditBook()}
        <div className="container">
            {this.printDataVideos()}
        </div>
        <AddVideo addVideos={(objDataAdd) => this.addVideos(objDataAdd)}/>
      </div>
    )
  }
}
