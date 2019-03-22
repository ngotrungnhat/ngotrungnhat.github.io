import React, { Component } from 'react';
import FormEditUser from './FormEditUser';

class SearchForm extends Component {
   constructor(props) {
       super(props);
       this.state = {
           tempValue: ""
        //    objInfoEditUser: {}
       }
   }
   
    hienThiNut = () => {
        if (this.props.displayButton === true){
            return <div onClick={() => this.props.thayDoiNut()} className="btn btn-block btn-outline-secondary" style={{cursor: 'pointer'}}>Close</div>
        }else{
            return <div onClick={() => this.props.thayDoiNut()} className="btn btn-block btn-outline-info" style={{cursor: 'pointer'}}>Add User</div>
        }
    }

    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        this.props.getTextSearch(event.target.value)
    }

    // propsObjEditUser = (objUserEdit) => {
    //     // this.setState({
    //     //     objInfoEditUser: objUserEdit
    //     //   });
    //       console.log("objUserEdit.name là: " + objUserEdit.name)
    // }

    hienThiFormEditUser = () => {
        if (this.props.editUserStatus === true) {
            return <FormEditUser
            changeEditUserStatus={()=>this.props.changeEditUserStatus()}
            userEditObject={this.props.userEditObject}
            propsObjEditUser={(objUserEdit)=>this.props.propsObjEditUser(objUserEdit)}/>
        }
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {this.hienThiFormEditUser()}
                    </div>
                    <div className="col-9">
                        <div className="form-group">
                            <div className="btn-group" style={{width: '100%'}}>
                                <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="true" aria-describedby="helpId" placeholder="Nhập từ khóa" />
                                <div onClick={(dataTaken)=>this.props.getTextSearch(this.state.tempValue)} className="btn btn-info">Search</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        {this.hienThiNut()}
                    </div>
                    <hr/>
                </div>
            </div>
        );
    }
}

export default SearchForm;