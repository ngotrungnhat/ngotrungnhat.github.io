import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
    render() {
        return (
            <div>
                <div>
                  <header className="masthead tintuc">
                    <div className="container h-100">
                      <div className="row h-100">
                        <div className="col-lg-7 my-auto">
                          <div className="header-content mx-auto">
                            <h1 className="mb-5">Trang danh sách tin</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>
                  {/* begin tin tức */}
                  <div className="container">
                    <div className="row mt-3">
                      <NewsItem/>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

export default News;