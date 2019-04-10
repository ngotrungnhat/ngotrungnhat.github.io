import React, { Component } from 'react'
import ContentBook from './ContentBook';
import AddBook from './AddBook';
import EditBook from './EditBook';

export default class Book extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <ContentBook/>
        </div>
        <AddBook/>
        <EditBook/>
      </div>
    )
  }
}
