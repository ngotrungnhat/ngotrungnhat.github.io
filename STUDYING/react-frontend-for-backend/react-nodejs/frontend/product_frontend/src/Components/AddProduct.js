import React, { Component } from 'react'
import axios from 'axios'

const addProductAction = (product_name, product_price, image) => (axios.post('/add', {product_name, product_price, image}).then((resp) => resp.data))
class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_name: '',
            product_price: '',
            image: ''
        }
    }

    isChange  = (event) => {
        var name = event.target.name
        var value = event.target.value
        this.setState({[name]: value})
    }

    handleClick = () => {
        console.log('this.state', this.state)
        addProductAction(this.state.product_name, this.state.product_price, this.state.image).then((responsive) => console.log('responsive', responsive))
    }
    
  render() {
    return (
        <div className="container">
        <div className="row">
          <div className="col-12"><hr /></div>
          <div className="col-8 mx-auto">
            <form>
              <div className="form-group">
                <label>Tên Sản Phẩm</label>
                <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="product_name" id="true" aria-describedby="helpId" placeholder="Nhập tên sản phẩm" />
              </div>
              <div className="form-group">
                <label>Giá Sản Phẩm</label>
                <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="product_price" id="true" aria-describedby="helpId" placeholder="Nhập giá sản phẩm" />
              </div>
              <div className="form-group">
                <label>Ảnh Sản Phẩm</label>
                <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="image" id="true" aria-describedby="helpId" placeholder="Nhập link ảnh sản phẩm" />
              </div>
              <button onClick={() => this.handleClick()} type="reset" className="btn btn-info">Thêm Mới</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddProduct
