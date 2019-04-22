import React, { Component } from 'react'
import Content from './Content';
import EditContent from './EditContent';
import AddContent from './AddContent';
import axios from 'axios';

const getDataHome = () => axios.get('/getDataHome').then((response) => response.data).catch((error) => console.log(error))
const addDataHome = (year, event) => (axios.post('/addDataHome', {year, event}).then((resp) => resp.data))
// // const deleteDataHome = (idDelete) => (axios.get('/deleteDataHome', {idDelete}).then((resp) => resp.data))

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHome: null,
      editObj: {},
      sstEditForm: false,
      sstEditForm2: ''
    }
  }
  
  componentWillMount() {
    if (this.state.dataHome === null) {
      getDataHome().then((res) => {
        this.setState({dataHome: res})
      })
    }
  }
  
  printDataHome = () => {
    if (this.state.dataHome !== null) {
      return this.state.dataHome.map((value, key) => (
        <Content
        key = {key}
        id = {value.id}
        year = {value.year}
        event = {value.event}
        deleteContent = {(idDelete) => this.deleteContent(idDelete)}
        editContent = {(year, event) => this.editContent(year, event)}
        changeSttEditForm = {() => this.changeSttEditForm()}/>
      ))
    }
  }

  addContent = (home_year, home_content) => {
    if (home_year !== '' && home_content !== '') {
    addDataHome(home_year, home_content).then((res) => {
        var item = {},
            dataTemp = this.state.dataHome;
        item.year = home_year;
        item.event = home_content;
        dataTemp.push(item)
        this.setState({dataHome: dataTemp})
      })
      } else {
        alert('Bạn chưa nhập đủ các trường')
      }
  }

  deleteContent = (idDelete) => {
    // deleteDataHome(idDelete).then((res) => {
      const tempData = this.state.dataHome.filter(item => item.id !== idDelete)
      this.setState({dataHome: tempData})
    // })
  }

  editContent = (objEdit) => {
    this.setState({editObj: objEdit})
  }

  contentEdit = (objectEdit) => {
    this.state.dataHome.forEach((value, key) => {
      if (value.id === objectEdit.id) {
        value.year = objectEdit.year;
        value.event = objectEdit.event;
      }
    });
  }

  changeSttEditForm = () => {
    this.setState({sstEditForm: !this.state.sstEditForm});
  }

  returnEditForm = () => {
    if (this.state.sstEditForm === true) {
      return <EditContent editObj={this.state.editObj}
      contentEdit = {(objectEdit) => this.contentEdit(objectEdit)}
      changeSttEditForm = {() => this.changeSttEditForm()}/>
    }
  }

  render() {
    return (
      <div>
          {this.returnEditForm()}
        <div className="container">
            {this.printDataHome()}
        </div>
            <AddContent addContent={(home_year, home_content) => this.addContent(home_year, home_content)}/>
      </div>
    )
  }
}
