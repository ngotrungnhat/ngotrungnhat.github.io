import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    console.log('this.props.year', this.props.year)
    return (
        <div className="card-parent">
        <div className="card">
          <div className="card-text">
            <h2 className="card-text__title text-center">{this.props.year}</h2>
            <p className="card-text__content">{this.props.event}</p>
          </div>
          <div className="btn-group" style={{width: '100%'}}>
            <div className="btn btn-warning" data-toggle="modal" data-target="#modelId">
              <i className="fa fa-edit">Sửa</i>
            </div>
            <div className="btn btn-danger">
              <i className="fa fa-trash">Xóa</i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
