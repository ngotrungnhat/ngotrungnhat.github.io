import React, { Component } from 'react'

export default class AddContent extends Component {
  constructor(props) {
    super(props);
    this.state={
      home_year: '',
      home_content: ''
    }
  }
  
  isChange = (event) => {
    var name = event.target.name
    var value = event.target.value
    this.setState({[name]: value})
  }

  handleClick = () => {
    this.props.addContent(this.state.home_year, this.state.home_content)
    this.setState({
      home_year: '',
      home_content: ''
    })
  }
  render() {
    return (
        <div className="container mb-5">
        <hr />
        <form>
        <div className="form-group">
          <label>NĂM</label>
          <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="home_year" id="true" aria-describedby="helpId" placeholder="Nhập năm" />
        </div>
        <div className="form-group">
          <label className="text-center">THÊM MỚI NỘI DUNG</label>
          <textarea onChange={(event) => this.isChange(event)} className="form-control" name="home_content" rows={9} defaultValue={""}  placeholder='Nội dung thêm mới'/>
        </div>
        <button onClick={() => this.handleClick()} type="reset" className="btn btn-block btn-info">Thêm Mới</button>
        </form>
      </div>
    )
  }
}
