import React, { Component } from 'react'
import $ from 'jquery';
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  //TOGGLE WHEN SMALL SCREEN
navbarToggle = (x) => {
	if ($(".navHeader").css("display") === "block") {
		$(".navHeader").css({"display": "none", "transition": "all 10s ease 5s"});
		x.classList.toggle("change");
	} else { 
		$(".navHeader").css({"display": "block", "transition": "all 10s ease 5s"});
		x.classList.toggle("change");
	}
};
  render() {
    return (
        <div className="container header">
        <div className="topHeader">
          <div className="topHeader__logo">
            {/* <a href="./home.html"><img src="https://i.imgur.com/Y9P26e7.png" alt="logo" /></a> */}
            <NavLink to="/"><img src="https://i.imgur.com/Y9P26e7.png" alt="logo" /></NavLink>
          </div>
          <div className="topHeader__title"> 
            <h1>TRANG QUẢN LÝ</h1>
          </div>
          <div onClick={() => this.navbarToggle()} className="topHeader__menuToggle">
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
        </div>
        <div className="navHeader">
          <div className="navBar">
            <ul className="navBar__menu">
              <li className="navBar__menu-item">
                {/* <a href="./home.html">Trang Chủ</a> */}
                <NavLink to="/home">Home</NavLink>
              </li>
              <li className="navBar__menu-item">
              {/* <a href="./story.html">Câu Chuyện</a> */}
                <NavLink to="/story">Story</NavLink>
              </li>
              <li className="navBar__menu-item">
                {/* <a href="./figures.html">Nhân Vật</a> */}
                <NavLink to="/figures">Figures</NavLink>
              </li>
              <li className="navBar__menu-item">
                {/* <a href="./book.html">Sách</a> */}
                <NavLink to="/books">Books</NavLink>
              </li>
              <li className="navBar__menu-item">
                {/* <a href="./videos.html">Videos</a> */}
                <NavLink to="/videos">Videos</NavLink>
              </li>
              <li className="navBar__menu-item">
                {/* <a href="./games.html">Games</a> */}
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
            <div className="navBar__search">
              <form className="navBar__search-form">
                <input type="text" className="navBar__search-input" placeholder="Bạn đang tìm kiếm điều gì?" />
                <input type="text" className="navBar__search-submit" />
              </form>
            </div>
          </div>
          <div className="navBar-widgets" />
        </div>
      </div>
      
    )
  }
}
