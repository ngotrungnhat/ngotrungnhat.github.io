import React, { Component } from 'react'

export default class AddStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story_title: '',
      story_background: '',
      story_content: ''
    }
  }

  isChange = (event) => {
    let name = event.target.name,
        value = event.target.value
    this.setState({[name]: value})
  }

  handleClick = () => {
    const objStoryAdd = {};
    objStoryAdd.story_title = this.state.story_title
    objStoryAdd.story_background = this.state.story_background
    objStoryAdd.story_content = this.state.story_content
    this.props.addStory(objStoryAdd)
    this.setState({
      story_title: '',
      story_background: '',
      story_content: ''
    })
  }

  render() {
    return (
        <div className="container">
        <div className="row">
          <div className="col-12 mx-auto mb-5">
            <form>
              <div className="form-group">
                <label>Tiêu Đề</label>
                  <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="story_title" id="true" aria-describedby="helpId" placeholder="Nhập tên câu chuyện" />
              </div>
              <div className="form-group">
                <label>Ảnh</label>
                  <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="story_background" id="true" aria-describedby="helpId" placeholder="Nhập link ảnh câu chuyện" />
              </div>
              <div className="form-group">
                <label>Nội Dung Câu Chuyện</label>
                <textarea onChange={(event) => this.isChange(event)} className="form-control" name="story_content" rows={3} placeholder="Nhập nội dung câu chuyện" />
              </div>
              <button onClick={() => this.handleClick()} type="reset" className="btn btn-block btn-info">Thêm Mới</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
