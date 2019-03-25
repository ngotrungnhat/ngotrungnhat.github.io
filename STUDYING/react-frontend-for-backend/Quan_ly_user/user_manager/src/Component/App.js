import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
const uuidv1 = require('uuid/v1');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThaiNut: false,
      data: DataUser,
      textSearch: "",
      editUserStatus: false,
      userEditObject: {}
      // objInfoEditUser: {}
    }
  }

  //TRƯỚC KHI VÀO APP PHẢI TẠO KHÔNG GIAN LƯU TRỮ CHO NGƯỜI DÙNG
  componentWillMount() {
    //KIỂM TRA XEM LOCALSTORAGE ĐÃ TỒN TẠI CHƯA, CHƯA THÌ TẠO, RỒI THÌ CẬP NHẬT
    if (localStorage.getItem('userData') === null) {
      localStorage.setItem('userData', JSON.stringify(DataUser));
    } else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      });
    }
  }

  thayDoiNut = () => {
    this.setState({
      trangThaiNut: !this.state.trangThaiNut
    });
  }


//CHỨC NĂNG TÌM KIẾM
  getTextSearch = (dataTaken) => {
    this.setState({
      textSearch: dataTaken
    });
  }


//CHỨC NĂNG THÊM MỚI
  getObjectAddUser = (name, tel, permistion) => {
    var objectAddUser = {};
    objectAddUser.id = uuidv1();;
    objectAddUser.name = name;
    objectAddUser.tel = tel;
    objectAddUser.permistion = permistion;
    this.state.data.push(objectAddUser)
    this.setState({
      data: this.state.data
    });
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }


  //CHỨC NĂNG SỬA
  editUser = (user) => {
    this.setState({
      userEditObject: user
    });
    this.thayDoiEditUserStatus()
  }
  thayDoiEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  propsObjEditUser = (objUserEdit) => {
    console.log("objUserEdit.permistion là: " + objUserEdit.permistion)
    this.state.data.forEach((value,key)=>{
      if (value.id === objUserEdit.id) {
        value.name = objUserEdit.name;
        value.tel = objUserEdit.tel;
        value.permistion = objUserEdit.permistion;
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }

  //CHỨC NĂNG XÓA
  deleteButtonClick = (idUser) => {
    var tempData = this.state.data.filter(item => item.id !== idUser)
    this.setState({
      data: tempData
    });
    localStorage.setItem('userData', JSON.stringify(tempData));
  }

  render() { 
    var resultSearch = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.textSearch) !== -1) {
        resultSearch.push(item)
      }
    })
    console.log(resultSearch)
      
    return (
      <div>
        <Header/>
        <SearchForm
          displayButton={this.state.trangThaiNut}
          thayDoiNut={()=>this.thayDoiNut()}
          getTextSearch={(dataTaken)=>this.getTextSearch(dataTaken)}
          editUserStatus={this.state.editUserStatus}
          changeEditUserStatus={()=>this.thayDoiEditUserStatus()}
          userEditObject={this.state.userEditObject}
          propsObjEditUser={(objUserEdit)=>this.propsObjEditUser(objUserEdit)}
          />

        <div className="container">
            <div className="row">
              <TableData
                dataUserProps={resultSearch}
                editFunction={(user)=>this.editUser(user)}
                editUserStatus={this.state.editUserStatus}
                deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)}/>
              <AddUser
                displayButton={this.state.trangThaiNut}
                propsObjectAddUser={(name, tel, permistion) => this.getObjectAddUser(name, tel, permistion)}/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
