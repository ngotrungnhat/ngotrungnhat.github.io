import React, { Component } from 'react'
import ContentBlog from './ContentBlog';
import AddBlog from './AddBlog';
import EditBlog from './EditBlog';
import axios from 'axios'
const getDataBlog = () => axios.get('/getDataBlog').then((response) => response.data).catch((error) => console.log(error))
const addDataBlog = (blog_title, blog_background, blog_content) => (axios.post('/addDataBlog', {blog_title, blog_background, blog_content}).then((resp) => resp.data))

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBlog: null,
      sstEditForm: false,
      objDataEdit: {}
    }
  }
  
  componentWillMount() {
    if (this.state.dataBlog === null) {
      getDataBlog().then((res) => {
        this.setState({dataBlog: res})
      })
    }
  }

  printDataBlog = () => {
    if (this.state.dataBlog !== null) {
      return this.state.dataBlog.map((value, key) => (<ContentBlog
        key={key}
        id={value.id}
        blog_title={value.blog_title}
        blog_content={value.blog_content}
        blog_background={value.blog_background}
        ChangeSttFormEdit = {() => this.ChangeSttFormEdit()}
        getDataWhenClickButtonEdit = {(objDataEdit) => this.getDataWhenClickButtonEdit(objDataEdit)}
        getIdToDelete = {(id) => this.getIdToDelete(id)}/>))
    }
  }

  addBlog = (objBlogAdd) => {
    if (objBlogAdd.blog_title !== '' && objBlogAdd.blog_content !== '' && objBlogAdd.blog_background !== '') {
      addDataBlog(objBlogAdd.blog_title, objBlogAdd.blog_background, objBlogAdd.blog_content).then((res) => {
        var dataTemp = this.state.dataBlog;
        dataTemp.push(objBlogAdd)
        this.setState({dataBlog: dataTemp})
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
      return <EditBlog ChangeSttFormEdit = {() => this.ChangeSttFormEdit()} objDataEdit = {this.state.objDataEdit} addDataEditedInDatabase={(objDataEdited) => this.addDataEditedInDatabase(objDataEdited)}/>
    }
  }

  getDataWhenClickButtonEdit = (objDataEdit) => {
    this.setState({objDataEdit: objDataEdit})
  }

  addDataEditedInDatabase = (objDataEdited) => {
    this.state.dataBlog.forEach((value, key) => {
      if (value.id === objDataEdited.id) {
        value.blog_title = objDataEdited.blog_title;
        value.blog_content = objDataEdited.blog_content;
        value.blog_background = objDataEdited.blog_background;
      }
    })
  }

  getIdToDelete = (id) => {
    const dataTempWhenDelete = this.state.dataBlog.filter(item => item.id !== id)
    this.setState({dataBlog: dataTempWhenDelete})
  }

  render() {
    return (
      <div>
        {this.returnFromEdit()}
        <div className="container">
            {this.printDataBlog()}
        </div>
        <AddBlog addBlog={(objBlogAdd) => this.addBlog(objBlogAdd)}/>
      </div>
    )
  }
}
