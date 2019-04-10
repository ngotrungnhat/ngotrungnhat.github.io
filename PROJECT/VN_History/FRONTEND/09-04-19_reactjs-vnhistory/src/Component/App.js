import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import '../App.css';
import Header from './Header';
import NavigationURL from '../Router/NavigationURL';

class App extends Component {
  render() {
    
    return (
      <Router>
        <div className="site">
          <Header/>
          <NavigationURL/>
        </div>
      </Router>
    );
  }
}

export default App;
