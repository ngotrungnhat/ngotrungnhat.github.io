import React, { Component } from 'react'

export default class ContentBook extends Component {

  handleClickEdit = () => {
    const objNeedEdit = {}
    objNeedEdit.id = this.props.id
    objNeedEdit.book_name = this.props.book_name
    objNeedEdit.book_author = this.props.book_author
    objNeedEdit.book_price = this.props.book_price
    objNeedEdit.book_sale = this.props.book_sale
    objNeedEdit.book_background = this.props.book_background
    this.props.changeSttFormEdit()
    this.props.getObjNeedEdit(objNeedEdit)
  }

  handleClickDelete = () => {
    this.props.deleteBook(this.props.id)
  }

  render() {
    return (
        <div className="card-parent">
        <div className="card">
          <div className="card-img" style={{backgroundImage: 'url("'+this.props.book_background+'")'}} />
          <div className="card-text card-text__book">
            <h3 className="card-text__title">{this.props.book_name}</h3>
            <p className="card-text__content">{this.props.book_author}</p>
            <div className="card-price">
              <span className="price mr-2">{this.props.book_price}&nbsp;đ</span>
              <span className="sale mr-2">{this.props.book_sale}&nbsp;đ</span>
              <span className="pricesale">{(((this.props.book_sale-this.props.book_price)/this.props.book_price)*100).toFixed(0)}%</span>
            </div>
          </div>
          <div className="btn-group" style={{width: '100%'}}>
            <div onClick = {() => this.handleClickEdit()} className="btn btn-warning" data-toggle="modal" data-target="#modelId">
              <i className="fa fa-edit">Sửa</i>
            </div>
            <div onClick={() => this.handleClickDelete()} className="btn btn-danger">
              <i className="fa fa-trash">Xóa</i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
