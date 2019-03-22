import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    mappingData = () => this.props.dataUserProps.map((value, key) => (
      // console.log(value),   
            <TableDataRow
              key={key}
              stt={key+1}
              Username={value.name}
              phone={value.tel}
              quyen={value.permistion}
              id={value.id}
              editFunctionChild={(user)=>this.props.editFunction(value)}
              editUserStatus={this.props.editUserStatus}
              deleteButtonClick={(idUser) => this.props.deleteButtonClick(idUser)}/>
        ))
    
    render() {    
        return (
            <div className="col">
              <table className="table table-striped table-inverse table-hover">
                <thead className="thead-inverse">
                    <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Quyền</th>
                    <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                  {this.mappingData()}
                </tbody>
              </table>
            </div>
        );
    }
}

export default TableData;