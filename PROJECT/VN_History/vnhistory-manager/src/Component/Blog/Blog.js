import React, { Component } from 'react'
import ContentBlog from './ContentBlog';
import AddBlog from './AddBlog';
import EditBlog from './EditBlog';

export default class Blog extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <ContentBlog/>
        </div>
        <AddBlog/>
        <EditBlog/>
      </div>
    )
  }
}
