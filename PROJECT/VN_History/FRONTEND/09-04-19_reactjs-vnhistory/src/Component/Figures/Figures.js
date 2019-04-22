import React, { Component } from 'react'
import ContentFigures from './ContentFigures';
import AddFigures from './AddFigures';
import EditFigures from './EditFigures';
import axios from 'axios'

const getDataFigures = () => axios.get('/getDataFigures').then((response) => response.data).catch((error) => console.log(error))
const addDataFigures = (figures_name, figures_born, figures_background) => (axios.post('/addDataFigures', {figures_name, figures_born, figures_background}).then((resp) => resp.data))

export default class Figures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFigures: null,
      sstEditForm: false,
      objDataEdit: {}
    }
  }

  componentWillMount() {
    if (this.state.dataFigures === null) {
      getDataFigures().then((res) => {
        this.setState({dataFigures: res})
      })
    }
  }

  printDataFigures = () => {
    if (this.state.dataFigures !== null) {
      return this.state.dataFigures.map((value, key) => (
      <ContentFigures 
      key={key} 
      id = {value.id} 
      figures_name={value.figures_name} 
      figures_born={value.figures_born} 
      figures_background={value.figures_background}
      changeStatusFormEdit = {() => this.changeStatusFormEdit()}
      getDataWhenClickButtonEdit = {(objDataEdit) => this.getDataWhenClickButtonEdit(objDataEdit)}
      deleteFigures={(idNeedDelete) => this.deleteFigures(idNeedDelete)}/>))
    }
  }

  AddFigures = (objFiguresAdd) => {
    if (objFiguresAdd.figures_name !== '' && objFiguresAdd.figures_born !== '' && objFiguresAdd.figures_background !== '') {
    addDataFigures(objFiguresAdd.figures_name, objFiguresAdd.figures_born, objFiguresAdd.figures_background).then((res) => {
        const dataTemp = this.state.dataFigures
        dataTemp.push(objFiguresAdd)
        objFiguresAdd = {}
        this.setState({dataFigures: dataTemp})
      })
      } else {
        alert('Bạn chưa nhập đủ các trường')
      }
  }

  changeStatusFormEdit = () => {
    this.setState({sstEditForm: !this.state.sstEditForm})
  }

  returnFormEdit = () => {
    if (this.state.sstEditForm === true) {
      return <EditFigures changeStatusFormEdit={() => this.changeStatusFormEdit()} addDataEditedInDatabase={(objDataEdited) => this.addDataEditedInDatabase(objDataEdited)} objDataEdit={this.state.objDataEdit}/>
    }
  }

  getDataWhenClickButtonEdit = (objDataEdit) => {
    this.setState({objDataEdit: objDataEdit})
  }

  addDataEditedInDatabase = (objDataEdited) => {
    this.state.dataFigures.forEach((value, key) => {
      if (value.id === objDataEdited.id) {
        value.figures_name = objDataEdited.figures_name
        value.figures_born = objDataEdited.figures_born
        value.figures_background = objDataEdited.figures_background
      }
    })
  }

  deleteFigures  = (idNeedDelete) => {
    const dataTempDelete = this.state.dataFigures.filter(item => item.id !== idNeedDelete)
    this.setState({dataFigures: dataTempDelete})
  }

  render() {
    return (
      <div>
          {this.returnFormEdit()}
        <div className="container">
            {this.printDataFigures()}
        </div>
        <AddFigures AddFigures={(objFiguresAdd) => this.AddFigures(objFiguresAdd)}/>
      </div>
    )
  }
}
