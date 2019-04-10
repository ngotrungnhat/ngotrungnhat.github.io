import React, { Component } from 'react';
import './App.css';
import HeadTitle from './HeadTitle';
import Product from './Product';
import axios from 'axios'
// import dataProducts from 'http://localhost:4000/getdata01' Ai Cũng lấy được

const getProductData  = () => axios.get('/getData01').then((res) => res.data)// .catch((error) => console.log(error))}
const addProductAction = (product_name, product_price, image) => (axios.post('/add', {product_name, product_price, image}).then((resp) => resp.data))

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      product_name: '',
      product_price: '',
      image: ''
    }
  }
  
  componentWillMount() {
    if (this.state.data === null) {
      getProductData().then((res) => {this.setState({data: res})})
    }
  }
  
  mappingData  = () => {
    if (this.state.data !== null) {
      return this.state.data.map((value, key) => 
      (<Product key = {key}
      product_name={value.product_name}
      product_price={value.product_price}
      image={value.image}/>))
    }
  }

  isChange  = (event) => {
    var name = event.target.name
    var value = event.target.value
    this.setState({[name]: value})
  }

  handleClick = () => {
    addProductAction(this.state.product_name, this.state.product_price, this.state.image).then((responsive) => {
      var item = {},
          dataTemp = this.state.data;
      item.product_name = this.state.product_name;
      item.product_price = this.state.product_price;
      item.image = this.state.image
      dataTemp.push(item)
      this.setState({data: dataTemp})
    })
  }

  render() {
    return (
      <div>
        <HeadTitle/>
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto mb-5">
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
                <button onClick={() => this.handleClick()} type="reset" className="btn btn-block btn-info">Thêm Mới</button>
              </form>
            </div>
            {this.mappingData()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
