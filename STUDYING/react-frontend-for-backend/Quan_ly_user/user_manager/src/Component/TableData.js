import React, { Component } from 'react';
import TableDataRow from './TableDataRow';
import DataUser from './Data.json';

class TableData extends Component {
    mappingData = () => DataUser.map((value, key) => (
            <TableDataRow key={key} stt={key+1} Username={value.name} phone={value.tel} quyen={value.permistion} />
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