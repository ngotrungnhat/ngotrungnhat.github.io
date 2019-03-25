import React, { Component } from 'react';

// import React from "react";
import {Route} from "react-router-dom";
import News from '../component/News';
import Home from '../component/Home';
import NewsDetail from '../component/NewsDetail';
import Contact from '../component/Contact';

class DieuHuongURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/news" component={News} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/chitiet/:slug.:id.html" component={NewsDetail} />
            </div>
        );
    }
}

export default DieuHuongURL;