import React, { Component } from 'react'
import Content from './Content';
import EditContent from './EditContent';
import AddContent from './AddContent';
import axios from 'axios';

// const getProductData  = () => axios.get('/getData01').then((res) => res.data)// .catch((error) => console.log(error))}
const getDataHome = () => axios.get('http://localhost:4000/getDataHome').then((response) => response.data).catch((error) => console.log(error))

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHome: null
    }
  }
  
  
  componentWillMount() {
    if (this.state.dataHome === null) {
      getDataHome().then((res) => {
        this.setState({dataHome: res})
      })
    }
  }
  
  printDataHome = () => {
    if (this.state.dataHome !== null) {
      return this.state.dataHome.map((value, key) => (
        <Content
        key = {key}
        year = {value.year}
        event = {value.event}/>
      ))
    }
  }

  render() {  
    console.log('this.state.dataHome', this.state.dataHome)    
    return (
      <div>
        <div className="container">
            {this.printDataHome()}
        </div>
            <EditContent/>
            <AddContent/>
      </div>
    )
  }
}
