import React, { Component } from 'react';
import './App.css';
import Content from './Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai: "khởi tạo 1",
      trangthai2: "khởi tạo 2"
    }
  }
  // //Mounting
  // componentWillMount() {
  //   console.log('componentWillMount đã chạy')
  // }
  // componentDidMount() {
  //   console.log("ComponentDidMount đã chạy");
    
  // }

  //Updation State
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate state đã chạy");
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate state đã chạy");
    
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate state đã chạy");
    
  }

  updateState = () => {
    this.setState({trangthai: "Update 1"})
  }

  

  updateProps = () => {
    this.setState({trangthai2: "Update 2"})

}

  render() {
    console.log('trạng thái 1 là: ' + this.state.trangthai);
    console.log('trạng thái 2 là: ' + this.state.trangthai2);
    return (
      <div className="App">
        <Content ten={this.state.trangthai2}/>
        <button onClick={this.updateProps}>Click vào đây để Update props</button>
        <button onClick={this.updateState}>Click vào đây để Update state</button>
      </div>
    );
  }
}

export default App;
