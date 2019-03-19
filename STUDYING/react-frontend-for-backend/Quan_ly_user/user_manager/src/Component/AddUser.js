import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThaiChinhSua: false
        }
    }

    hienThiNut = () => {
        if (this.state.trangThaiChinhSua === true) {
            return <div onClick={() => this.thayDoiNut()} className="btn btn-block btn-outline-secondary">Close</div>
        }else{return <div onClick={() => this.thayDoiNut()} className="btn btn-block btn-outline-info">Add User</div>}
    }
    thayDoiNut = () => {
        this.setState({
            trangThaiChinhSua: !this.state.trangThaiChinhSua
        });
    }
    hienThiForm = () => {
        if (this.state.trangThaiChinhSua === true) {
            return (
                <div className="card text-black  mb-3 mt-2">
                <div className="card-header">Thêm mới User vào hệ thống</div>
                <div className="card-body">
                <div className="form-group">
                    <label >User</label>
                    <input type="text" className="form-control" name="true" aria-describedby="helpId" placeholder="Nhập Tên Đăng Nhập" />
                </div>
                <div className="form-group">
                    <label >Phone</label>
                    <input type="text" className="form-control" aria-describedby="helpId" placeholder="Nhập Số Điện Thoại" />
                </div>
                <select className="custom-select">
                    <option >Chọn quyền mặc định</option>
                    <option >Admin</option>
                    <option >Moderater</option>
                    <option >Normal</option>
                </select>
                </div>
                <div className="btn btn-block btn-primary">Thêm Mới</div>
            </div>
            )
        }
    }
    render() {
        return (
            <div >
                {this.hienThiNut()}
                {this.hienThiForm()}
            </div>

        );
    }
}

export default AddUser;