import React, { Component } from 'react'

export default class AddBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog_title: '',
      blog_background: '',
      blog_content: ''
    }
  }

  isChange = (event) => {
    const name = event.target.name,
        value = event.target.value
    this.setState({[name]: value})
  }

  handleClick = () => {
    const objBlogAdd = {};
    objBlogAdd.blog_title = this.state.blog_title
    objBlogAdd.blog_background = this.state.blog_background
    objBlogAdd.blog_content = this.state.blog_content
    this.props.addBlog(objBlogAdd)
    this.setState({
      blog_title: '',
      blog_background: '',
      blog_content: ''
    })
  }
  render() {
    return (
        <div className="container">
        <div className="row">
          <div className="col-12 mx-auto mb-5">
            <form>
              <div className="form-group"><label>Ảnh</label><input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="blog_background" id="true" aria-describedby="helpId" placeholder="Nhập link ảnh câu chuyện" /></div>
              <div className="form-group"><label>Tiêu Đề</label><input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="blog_title" id="true" aria-describedby="helpId" placeholder="Nhập tên câu chuyện" /></div>
              <div className="form-group">
                <label>Trích Dẫn Tin</label>
                <textarea onChange={(event) => this.isChange(event)} className="form-control" name="blog_content"rows={5}/>
              </div>
              <button onClick={() => this.handleClick()} type="reset" className="btn btn-block btn-info">Thêm Mới</button>
            </form>
          </div>
        </div>
      </div>
      
    )
  }
}
