import React, { Component } from 'react'

export default class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book_background: '',
      book_name: '',
      book_author: '',
      book_price: null,
      book_sale: null,
    }
  }
  
  isChange = (event) => {
    const name = event.target.name,
          value = event.target.value
    this.setState({[name]: value})
  }

  handleClickAdd = () => {
    const objDataAdd = {}
    objDataAdd.book_background = this.state.book_background
    objDataAdd.book_name = this.state.book_name
    objDataAdd.book_author = this.state.book_author
    objDataAdd.book_price = this.state.book_price
    objDataAdd.book_sale = this.state.book_sale
    this.props.addBooks(objDataAdd)
    this.setState({
      book_background: '',
      book_name: '',
      book_author: '',
      book_price: null,
      book_sale: null,
    })
  }

  render() {
    return (
        <div className="container">
        <div className="row">
          <div className="col-12 mx-auto mb-5">
            <form>
              <div className="form-group"><label>Ảnh</label><input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="book_background" id="true" aria-describedby="helpId" placeholder="Nhập link ảnh sách" /></div>
              <div className="form-group"><label>Tên Sách</label><input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="book_name" id="true" aria-describedby="helpId" placeholder="Nhập tên sách" /></div>
              <div className="form-group"><label>Tên Tác Giả</label><input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="book_author" id="true" aria-describedby="helpId" placeholder="Nhập tên tác giả" /></div>
              <div className="form-group"><label>Giá Nhập</label><input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="book_price" id="true" aria-describedby="helpId" placeholder="Nhập giá gốc" /></div>
              <div className="form-group"><label>Giá Sale</label><input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="book_sale" id="true" aria-describedby="helpId" placeholder="Nhập giá bán" /></div>
              <button onClick={() => this.handleClickAdd()} type="reset" className="btn btn-block btn-info">Thêm Mới</button>
            </form>
          </div>
        </div>
      </div>
      
    )
  }
}
