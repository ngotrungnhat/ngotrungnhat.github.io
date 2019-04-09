import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Index from '../Component/Index/Index';
import Home from '../Component/Home/Home';
import Story from '../Component/Story/Story';
import Figures from '../Component/Figures/Figures';
import Book from '../Component/Books/Book';
import Video from '../Component/Videos/Video';
import Blog from '../Component/Blog/Blog';

export default class NavigationURL extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Index} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/story" component={Story} />
        <Route exact path="/figures" component={Figures} />
        <Route exact path="/books" component={Book} />
        <Route exact path="/videos" component={Video} />
        <Route exact path="/blog" component={Blog} />
      </div>
    )
  }
}
