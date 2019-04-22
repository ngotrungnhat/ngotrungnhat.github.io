import React, { Component } from 'react'

export default class EditFigures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.objDataEdit.id,
      figures_name: this.props.objDataEdit.figures_name,
      figures_born: this.props.objDataEdit.figures_born,
      figures_background: this.props.objDataEdit.figures_background,
    }
  }

  isChange = (event) => {
    const name = event.target.name,
          value = event.target.value
    this.setState({[name]: value})
  }

  handleClickEditSave = () => {
    const objDataEdited = {}
    objDataEdited.id = this.state.id
    objDataEdited.figures_name = this.state.figures_name
    objDataEdited.figures_born = this.state.figures_born
    objDataEdited.figures_background = this.state.figures_background
    this.props.addDataEditedInDatabase(objDataEdited)
    this.props.changeStatusFormEdit()
  }

  render() {
    return (
        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button  onClick={() => this.props.changeStatusFormEdit()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body"> 
              <form>
                <div className="form-group">
                  <label>Tên Nhân Vật</label>
                  <input onChange={(event) => this.isChange(event)} defaultValue={this.props.objDataEdit.figures_name} type="text" className="form-control" name="figures_name" id="true" aria-describedby="helpId" placeholder="Nhập link ảnh câu chuyện" />
                </div>
                <div className="form-group">
                  <label>Năm Sinh - Năm Mất</label>
                  <input onChange={(event) => this.isChange(event)} defaultValue={this.props.objDataEdit.figures_born} type="text" className="form-control" name="figures_born" id="true" aria-describedby="helpId" placeholder="Nhập tên câu chuyện" />
                </div>
                <div className="form-group">
                  <label>Link Ảnh Nhân Vật</label>
                  <input onChange={(event) => this.isChange(event)} defaultValue={this.props.objDataEdit.figures_background} className="form-control" name="figures_background"/>
                </div>
                <button onClick = {() => this.handleClickEditSave()} type="button" className="btn btn-block btn-info">Lưu Thay Đổi</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
