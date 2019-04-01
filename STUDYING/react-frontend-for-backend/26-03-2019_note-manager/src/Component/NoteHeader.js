import React, { Component } from 'react'
import {connect} from 'react-redux'

class NoteHeader extends Component {
  handleAdd  = (event) => {
    event.preventDefault()
    this.props.changeEditStatus()
    this.props.changeAddStatus()
  }
  render() {
    return (
      <div className="col-12">
        <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: 'black'}}>
            <a className="navbar-brand" href="#nhat">Ghi Chú</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
            <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item active">
                <a className="nav-link" href="#trang">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                <a onClick={(event) => this.handleAdd(event)} className="nav-link" href="#thoji">Thêm Mới Ghi chú</a>
                </li>
            </ul>
            </div>
        </nav>  
        </div>    
    )
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({type: "CHANGE_EDIT_STATUS"})
    },
    changeAddStatus: () => {
      dispatch({type: "CHANGE_ADD_STATUS"})
    }
  }
}
export default connect(null, mapDispatchToProps, null)(NoteHeader)
