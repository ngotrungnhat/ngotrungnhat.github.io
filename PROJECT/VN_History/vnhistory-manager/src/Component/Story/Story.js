import React, { Component } from 'react'
import ContentStory from './ContentStory';
import AddStory from './AddStory';
import EditStory from './EditStory';

export default class Story extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <ContentStory/>
        </div>
        <AddStory/>
        <EditStory/>
      </div>
    )
  }
}
