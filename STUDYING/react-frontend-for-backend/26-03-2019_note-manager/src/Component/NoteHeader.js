import React, { Component } from 'react'
import {connect} from 'react-redux'

class NoteHeader extends Component {
  handleDisplayAddForm = () => {
    this.props.changeStatusAddForm()
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
                <a onClick={() => this.handleDisplayAddForm()} className="nav-link" href="#thoji">Thêm Mới Ghi chú</a>
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
    changeStatusAddForm: () => {
      dispatch({type: "CHANGE_STATUS_ADD_FORM"})
    }
  }
}
export default connect(null, mapDispatchToProps, null)(NoteHeader)
