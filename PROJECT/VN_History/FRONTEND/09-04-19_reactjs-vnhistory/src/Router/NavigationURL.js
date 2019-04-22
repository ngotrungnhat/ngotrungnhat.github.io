import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Index from '../Component/Index/Index';
import Home from '../Component/Home/Home';
import Story from '../Component/Story/Story';
import Figures from '../Component/Figures/Figures';
import Books from '../Component/Books/Books';
import Videos from '../Component/Videos/Videos';
import Blog from '../Component/Blog/Blog';

export default class NavigationURL extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Index} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/story" component={Story} />
        <Route exact path="/figures" component={Figures} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/videos" component={Videos} />
        <Route exact path="/blog" component={Blog} />
      </div>
    )
  }
}
