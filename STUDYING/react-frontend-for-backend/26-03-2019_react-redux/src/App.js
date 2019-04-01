import React, { Component } from 'react';
import './App.css';
import News from './News';
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <News/>
        {this.props.dulieu}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num //Có cái this.props.dulieu
  }
}

export default connect(mapStateToProps)(App);