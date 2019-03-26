import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron text-center">
                    <h1 className="display-3">Quản lý thành viên bằng React JS</h1>
                    <p className="lead">Với dữ liệu JSON</p>
                    <hr className="my-2" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;