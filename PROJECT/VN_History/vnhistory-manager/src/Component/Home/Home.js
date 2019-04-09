import React, { Component } from 'react'
import Content from './Content';
import EditContent from './EditContent';
import AddContent from './AddContent';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <Content/>
        </div>
            <EditContent/>
            <AddContent/>
      </div>
    )
  }
}
