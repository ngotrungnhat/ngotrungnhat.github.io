import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DataUser
    }
  }
  
  
  render() {  
    console.log(this.state.data);
      
    return (
      <div>
        <Header/>
        <div className="container">
            <div className="row">
              <SearchForm/>
              <TableData/>
              <AddUser/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
