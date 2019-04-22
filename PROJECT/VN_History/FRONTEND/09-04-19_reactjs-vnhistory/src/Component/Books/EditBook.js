import React, { Component } from 'react'

export default class EditBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.objNeedEdit.id,
      book_background: this.props.objNeedEdit.book_background,
      book_name: this.props.objNeedEdit.book_name,
      book_author: this.props.objNeedEdit.book_author,
      book_price: this.props.objNeedEdit.book_price,
      book_sale: this.props.objNeedEdit.book_sale
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
    objEdited.book_background = this.state.book_background
    objEdited.book_name = this.state.book_name
    objEdited.book_author = this.state.book_author
    objEdited.book_price = this.state.book_price
    objEdited.book_sale = this.state.book_sale
    this.props.changeSttFormEdit()
    this.props.editBook(objEdited)
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
                <div className="form-group"><label>Ảnh</label><input onChange={(event) => this.isChange(event)} defaultValue={this.props.objNeedEdit.book_background} type="text" className="form-control" name="book_background" id="true" aria-describedby="helpId" placeholder="Nhập link ảnh sách" /></div>
                <div className="form-group"><label>Tên Sách</label><input onChange={(event) => this.isChange(event)} defaultValue={this.props.objNeedEdit.book_name} type="text" className="form-control" name="book_name" id="true" aria-describedby="helpId" placeholder="Nhập tên sách" /></div>
                <div className="form-group"><label>Tên Tác Giả</label><input onChange={(event) => this.isChange(event)} defaultValue={this.props.objNeedEdit.book_author} type="text" className="form-control" name="book_author" id="true" aria-describedby="helpId" placeholder="Nhập tên sách" /></div>
                <div className="form-group"><label>Giá Nhập</label><input onChange={(event) => this.isChange(event)} defaultValue={this.props.objNeedEdit.book_price} type="text" className="form-control" name="book_price" id="true" aria-describedby="helpId" placeholder="Nhập giá gốc" /></div>
                <div className="form-group"><label>Giá Sale</label><input onChange={(event) => this.isChange(event)} defaultValue={this.props.objNeedEdit.book_sale} type="text" className="form-control" name="book_sale" id="true" aria-describedby="helpId" placeholder="Nhập giá bán" /></div>
                <button onClick = {() => this.handleClickSave()} type="button" className="btn btn-block btn-info">Lưu Thay Đổi</button>
              </form>
            </div>
          </div>
        </div>
      </div>      
    )
  }
}
