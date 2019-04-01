import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
        <div className="col-3">
        <div className="card text-left mb-3">
          <img className="card-img-top" src={this.props.image} alt="true" />
          <div className="card-body">
            <h4 className="card-title">{this.props.product_name}</h4>
            <p className="card-text">{this.props.product_price}</p><p>
            </p></div>
        </div>
      </div>
    )
  }
}
