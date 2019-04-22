import React, { Component } from 'react'

export default class AddFigures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      figures_name: '',
      figures_born: '',
      figures_background: ''
    }
  }

  isChange  = (event) => {
    let name = event.target.name,
        value = event.target.value
    this.setState({[name]: value})
  } 
  
  handleClick = () => {
    let objFiguresAdd = {};
    objFiguresAdd.figures_name = this.state.figures_name
    objFiguresAdd.figures_born = this.state.figures_born
    objFiguresAdd.figures_background = this.state.figures_background
    this.props.AddFigures(objFiguresAdd)
    this.setState({
      figures_name: '',
      figures_born: '',
      figures_background: ''
    })
  }

  render() {
    return (
        <div className="container">
        <div className="row">
          <div className="col-12 mx-auto mb-5">
            <form>
              <div className="form-group">
              <label>Tên Nhân Vật</label>
              <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="figures_name" id="true" aria-describedby="helpId" placeholder="Nhập tên nhân vật" />
              </div>
              <div className="form-group">
              <label>Năm Sinh - Năm Mất</label>
              <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="figures_born" id="true" aria-describedby="helpId" placeholder="Nhập năm sinh - năm mất" />
              </div>
              <div className="form-group">
              <label>Ảnh Nhân Vật</label>
              <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="figures_background" id="true" aria-describedby="helpId" placeholder="Nhập link ảnh nhân vật" />
              </div>
              <button onClick={() => this.handleClick()} type="reset" className="btn btn-block btn-info">Thêm Mới</button>
            </form>
          </div>
        </div>
      </div>
      
    )
  }
}
