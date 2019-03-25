import React, { Component } from 'react';

class AddUser extends Component {
    
    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
       });
    }

    trangThaiForm = () => {
        if (this.props.displayButton === true) {
            return (
                <div className="card text-black  mb-3 mt-5">
                    <div className="card-header">Thêm mới User vào hệ thống</div>
                    <div className="card-body">
                    <div className="form-group">
                        <label >User</label>
                        <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="name" aria-describedby="helpId" placeholder="Nhập Tên Đăng Nhập" />
                    </div>
                    <div className="form-group">
                        <label >Phone</label>
                        <input onChange={(event) => this.isChange(event)} type="text" className="form-control" aria-describedby="helpId" name="tel" placeholder="Nhập Số Điện Thoại" />
                    </div>
                    <select onChange={(event) => this.isChange(event)} className="custom-select" name="permistion">
                        <option >Chọn quyền mặc định</option>
                        <option value="1">Admin</option>
                        <option value="2">Moderater</option>
                        <option value="3">Normal</option>
                    </select>
                    </div>
                    <input onClick={(name, tel, permistion) => this.props.propsObjectAddUser(this.state.name, this.state.tel, this.state.permistion)} type="reset" className="btn btn-block btn-primary" value="Thêm Mới" />
                </div>
            )
        }
    }

    render() {
               
        return (
            <form >
                {this.trangThaiForm()}
            </form>

        );
    }
}

export default AddUser;