import React, { Component } from 'react'
import ContentVideo from './ContentVideo';
import AddVideo from './AddVideo';
import EditVideo from './EditVideo';

export default class Video extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <ContentVideo/>
        </div>
        <AddVideo/>
        <EditVideo/>
      </div>
    )
  }
}
