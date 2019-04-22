import React, { Component } from 'react'

export default class EditStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.objDataEdit.id,
      story_title: this.props.objDataEdit.story_title,
      story_content: this.props.objDataEdit.story_content,
      story_background: this.props.objDataEdit.story_background
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
    objDataEdited.story_title = this.state.story_title
    objDataEdited.story_content = this.state.story_content
    objDataEdited.story_background = this.state.story_background
    this.props.ChangeSttFormEdit()
    this.props.addDataEditedInDatabase(objDataEdited)
  }

  render() {
    return (
        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Form Sửa Câu Chuyện</h5>
              <button  onClick={() => this.props.ChangeSttFormEdit()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body"> 
              <form>
                <div className="form-group">
                  <label>Ảnh</label>
                  <input onChange={(event) => this.isChange(event)} type="text" defaultValue={this.props.objDataEdit.story_background} className="form-control" name="story_background" id="true" aria-describedby="helpId" placeholder="Nhập link ảnh câu chuyện" />
                </div>
                <div className="form-group">
                  <label>Tiêu Đề</label>
                  <input onChange={(event) => this.isChange(event)} type="text" defaultValue={this.props.objDataEdit.story_title} className="form-control" name="story_title" id="true" aria-describedby="helpId" placeholder="Nhập tên câu chuyện" />
                </div>
                <div className="form-group">
                  <label>Nội Dung Câu Chuyện</label>
                  <textarea onChange={(event) => this.isChange(event)} defaultValue={this.props.objDataEdit.story_content} className="form-control" name="story_content" rows={5} />
                </div>
                <button onClick={() => this.handleClickEditSave()} type="button" className="btn btn-block btn-info">Lưu Thay Đổi</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
