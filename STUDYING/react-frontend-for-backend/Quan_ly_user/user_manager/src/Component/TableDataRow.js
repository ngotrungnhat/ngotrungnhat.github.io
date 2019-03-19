import React, { Component } from 'react';

class TableDataRow extends Component {
    quyenShow = () => {
        if (this.props.quyen === 1) {
            return "Admin"
        }else if (this.props.quyen === 2) {
            return "Moderator"
        }else{
            return "Normal"
        }
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.Username}</td>
                <td>{this.props.phone}</td>
                <td>{this.quyenShow()}</td>
                <td>
                    <div className="btn-group" style={{width: '100%'}}>
                    <div className="btn btn-warning sua">
                        <i className="fa fa-edit">Sửa</i>
                    </div>
                    <div className="btn btn-danger xoa">
                        <i className="fa fa-delete">Xóa</i>
                    </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;