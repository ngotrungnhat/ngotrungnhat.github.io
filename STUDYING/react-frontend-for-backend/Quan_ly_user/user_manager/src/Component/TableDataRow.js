import React, { Component } from 'react';

class TableDataRow extends Component {
    quyenShow = () => {
        if (this.props.quyen === 1) {
            return "Admin"
        }else if (this.props.quyen === 2) {
            return "Moderator"
        }else {
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
                        <div className="btn btn-warning sua" onClick={()=>this.props.editFunctionChild()}>
                            <i className="fa fa-edit">Sửa</i>
                        </div>
                        <div onClick={(idUser)=>this.props.deleteButtonClick(this.props.id)} className="btn btn-danger xoa">
                            <i className="fa fa-delete">Xóa</i>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;