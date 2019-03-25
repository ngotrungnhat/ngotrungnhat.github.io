import React, { Component } from 'react';

class FormEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            permistion: this.props.userEditObject.permistion
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }

    saveObjEdit = () => {
        var objUserEdit = {};
        objUserEdit.id = this.state.id;
        objUserEdit.name = this.state.name;
        objUserEdit.tel = this.state.tel;
        objUserEdit.permistion = this.state.permistion;

        this.props.propsObjEditUser(objUserEdit);
        this.props.changeEditUserStatus();
    }

    render() {
        return (
            <div className="card text-black bg-secondary text-white mb-3 mt-5">
                <div className="card-header text-center">Sửa Thông Tin User</div>
                <div className="card-body">
                <div className="form-group">
                    <label >User</label>
                    <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.name} className="form-control" name="name" aria-describedby="helpId" placeholder="Nhập Tên Đăng Nhập" />
                </div>
                <div className="form-group">
                    <label >Phone</label>
                    <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.tel} type="text" className="form-control" aria-describedby="helpId" name="tel" placeholder="Nhập Số Điện Thoại" />
                </div>
                <select onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.permistion} className="custom-select" name="permistion">
                    <option >Chọn quyền mặc định</option>
                    <option value="1">Admin</option>
                    <option value="2">Moderater</option>
                    <option value="3">Normal</option>
                </select>
                </div>
                <input onClick={() => this.saveObjEdit()} type="button" className="btn btn-block btn-primary" value="Lưu Thay Đổi" />
            </div>
        );
    }
}

export default FormEditUser;