import React, { Component } from 'react'
import ContentStory from './ContentStory';
import AddStory from './AddStory';
import EditStory from './EditStory';
import axios from 'axios'
const getDataStory = () => axios.get('/getDataStory').then((response) => response.data).catch((error) => console.log(error))
const addDataStory = (story_title, story_background, story_content) => (axios.post('/addDataStory', {story_title, story_background, story_content}).then((resp) => resp.data))

export default class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataStory: null,
      sstEditForm: false,
      objDataEdit: {}
    }
  }

  componentWillMount() {
    if (this.state.dataStory === null) {
      getDataStory().then((res) => {
        this.setState({dataStory: res})
      })
    }
  }

  printDataStory = () => {
    if (this.state.dataStory !== null) {
      return this.state.dataStory.map((value, key) => (
      <ContentStory 
      key={key} 
      id = {value.id}
      story_title={value.story_title} 
      story_content={value.story_content} 
      story_background={value.story_background}
      ChangeSttFormEdit = {() => this.ChangeSttFormEdit()}
      getDataWhenClickButtonEdit = {(objDataEdit) => this.getDataWhenClickButtonEdit(objDataEdit)}
      getIdToDelete = {(id) => this.getIdToDelete(id)}/>))
    }
  }

  addStory = (objStoryAdd) => {
    if (objStoryAdd.story_title !== '' && objStoryAdd.story_content !== '' && objStoryAdd.story_background !== '') {
      addDataStory(objStoryAdd.story_title, objStoryAdd.story_background, objStoryAdd.story_content).then((res) => {
        var dataTemp = this.state.dataStory;
        dataTemp.push(objStoryAdd)
        this.setState({dataStory: dataTemp})
      })
      } else {
        alert('Bạn chưa nhập đủ các trường')
      }
  }

  ChangeSttFormEdit = () => {
    this.setState({sstEditForm: !this.state.sstEditForm})
  }

  returnFromEdit = () => {
    if (this.state.sstEditForm === true) {
      return <EditStory ChangeSttFormEdit = {() => this.ChangeSttFormEdit()} objDataEdit = {this.state.objDataEdit} addDataEditedInDatabase = {(objDataEdited) => this.addDataEditedInDatabase(objDataEdited)}/>
    }
  }

  getDataWhenClickButtonEdit = (objDataEdit) => {
    this.setState({objDataEdit: objDataEdit})
  }

  addDataEditedInDatabase = (objDataEdited) => {
    this.state.dataStory.forEach((value, key) => {
      if (value.id === objDataEdited.id) {
        value.story_title = objDataEdited.story_title;
        value.story_content = objDataEdited.story_content;
        value.story_background = objDataEdited.story_background;
      }
    })
  }

  getIdToDelete = (id) => {
    const dataTempWhenDelete = this.state.dataStory.filter(item => item.id !== id)
    this.setState({dataStory: dataTempWhenDelete})
  }

  render() {
    return (
      <div>
        {this.returnFromEdit()}
        <div className="container">
            {this.printDataStory()}
        </div>
        <AddStory addStory={(objStoryAdd) => this.addStory(objStoryAdd)}/>
      </div>
    )
  }
}
