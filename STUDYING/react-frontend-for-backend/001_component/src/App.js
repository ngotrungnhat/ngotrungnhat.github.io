import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Topmenu from './Component/topmenu/Topmenu';
import Header from './Component/topmenu/Header';
import Sesion from './Component/topmenu/Content/Sesion';

class App extends Component {
  render() {
    return (
      <div className="_013">
        <Topmenu/>
        <Header/>
        <Sesion tieude="Tiêu đề 1" vitri1="order-lg-1" vitri2="order-lg-2" img="01"/>
        <Sesion tieude="Tiêu đề 2" vitri1="order-lg-2" vitri2="order-lg-1" img="02"/>
        <Sesion tieude="Tiêu đề 3" vitri1="order-lg-1" vitri2="order-lg-2" img="03"/>
      </div>
    );
  }
}

export default App;
