import React, { Component } from 'react'
import ContentFigures from './ContentFigures';
import AddFigures from './AddFigures';
import EditFigures from './EditFigures';

export default class Figures extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <ContentFigures/>
        </div>
        <AddFigures/>
        <EditFigures/>
      </div>
    )
  }
}
