import React, { Component } from 'react'

export default class EditContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.editObj.id,
      year: this.props.editObj.year,
      event: this.props.editObj.event
    }
  }
  
  isChange = (event) => {
    const name = event.target.name,
        value = event.target.value
        console.log('value', value)
    this.setState({[name]: value})
  }

  handleClickSave = () => {
    const objectEdit = {}
    objectEdit.id = this.props.editObj.id
    objectEdit.year = this.state.year
    objectEdit.event = this.state.event
    this.props.contentEdit(objectEdit) 
    this.props.changeSttEditForm()   
  }

  render() {
    return (
        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">FORM SỬA</h5>
              <button onClick={() => this.props.changeSttEditForm()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
              <form>
                <div className="modal-body">
                <div className="form-group">
                  <label>Năm</label>
                    <input onChange={(event) => this.isChange(event)} defaultValue={this.props.editObj.year} type="text" className="form-control" name="year" id="true" aria-describedby="helpId" placeholder="Nhập năm diễn ra sự kiện" />
                </div>
                <div className="form-group">
                  <label>Nội Dung</label>
                  <textarea onChange={(event) => this.isChange(event)} defaultValue={this.props.editObj.event} className="form-control" name="event" rows={5} placeholder="Nhập nội dung sự kiện"/>
                </div>
              </div>
              <div className="modal-footer">
                <button onClick = {() => this.handleClickSave()} type="button" className="btn btn-info btn-block" data-dismiss="modal">Lưu Thay Đổi</button>
              </div>
              </form>
          </div>
        </div>
      </div>
    )
  }
}
