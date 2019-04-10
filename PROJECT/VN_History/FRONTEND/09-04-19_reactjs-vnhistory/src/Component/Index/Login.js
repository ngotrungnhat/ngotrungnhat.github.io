import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
        <div className="container loginForm">
        <div className="login">
          <h1>Đăng Ký/Đăng Nhập</h1>
          <div className="btn-group userName">
            <img src="./image/user-icon.png" alt="true" />
            <input className="input01" type="text" name="true" placeholder="Username" />
          </div>
          <div className="btn-group password">
            <img src="./image/pass-icon.png" alt="true" />
            <input className="input02" type="password" name="true" placeholder="***********" />
          </div>
        </div>
        <div className="selectLogin">
          <div className="loginregister">Đăng Ký</div>
          <div className="register loginregister">Đăng Nhập</div>
        </div>
        <p>Forgot Password?</p>
      </div>
      
    )
  }
}
