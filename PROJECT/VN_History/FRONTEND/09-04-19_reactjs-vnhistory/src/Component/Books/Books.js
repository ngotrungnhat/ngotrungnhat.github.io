import React, { Component } from 'react'
import ContentBook from './ContentBook';
import AddBook from './AddBook';
import EditBook from './EditBook';
import axios from 'axios'

const getDataBooks = () => axios.get('/getDataBooks').then((response) => response.data).catch((error) => console.log(error))
const addDataBooks = (book_background, book_name, book_author, book_price, book_sale) => (axios.post('/addDataBooks', {book_background, book_name, book_author, book_price, book_sale}).then((responsive) => responsive.data))

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBooks: null,
      sstFormEdit: false,
      objNeedEdit: {}
    }
  }
  
  componentWillMount() {
    if (this.state.dataBooks === null) {
      getDataBooks().then((res) => {
        this.setState({dataBooks: res})
      })
    }
  }

  printDataBooks = () => {
    if (this.state.dataBooks !== null) {
      return this.state.dataBooks.map((value, key) => (<ContentBook
        key={key}
        id = {value.id}
        book_name={value.book_name}
        book_author={value.book_author}
        book_price={value.book_price}
        book_sale={value.book_sale}
        book_background={value.book_background}
        changeSttFormEdit={() => this.changeSttFormEdit()}
        getObjNeedEdit={(objNeedEdit) => this.getObjNeedEdit(objNeedEdit)}
        deleteBook={(idNeedDelete) => this.deleteBook(idNeedDelete)}/>))
    }
  }

  addBooks  = (objDataAdd) => {
    if (objDataAdd.book_background !== '' && objDataAdd.book_name !== '' && objDataAdd.book_author !== '' && objDataAdd.book_price !== null && objDataAdd.book_sale !== null) {
      addDataBooks(objDataAdd.book_background, objDataAdd.book_name, objDataAdd.book_author, objDataAdd.book_price, objDataAdd.book_sale).then((res) => {
        const dataTempAdd = this.state.dataBooks
        dataTempAdd.push(objDataAdd)
        this.setState({dataBooks: dataTempAdd})
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
      return  <EditBook changeSttFormEdit={() => this.changeSttFormEdit()} objNeedEdit={this.state.objNeedEdit} editBook={(objEdited) => this.editBook(objEdited)}/>
    }
  }

  getObjNeedEdit  = (objNeedEdit) => {
    this.setState({objNeedEdit: objNeedEdit})
  }

  editBook = (objEdited) => {
    this.state.dataBooks.forEach((value, key) => {
      if (value.id === objEdited.id) {
        value.book_background = objEdited.book_background
        value.book_name = objEdited.book_name
        value.book_author = objEdited.book_author
        value.book_price = objEdited.book_price
        value.book_sale = objEdited.book_sale
      }
    })
  }

  deleteBook  = (idNeedDelete) => {
    const dataTempDelete = this.state.dataBooks.filter(item => item.id !== idNeedDelete)
    this.setState({dataBooks: dataTempDelete})
  }
  
  render() {
    return (
      <div>
        {this.returnEditBook()}
        <div className="container">
            {this.printDataBooks()}
        </div>
        <AddBook addBooks = {(objDataAdd) => this.addBooks(objDataAdd)}/>
      </div>
    )
  }
}
