import React, { Component } from 'react';

class SearchForm extends Component {
    render() {
        return (
                <div className="col-12">
                    <div className="form-group">
                        <div className="btn-group" style={{width: '74%'}}>
                            <input type="text" className="form-control" name="true" aria-describedby="helpId" placeholder="Nhập từ khóa" />
                            <div className="btn btn-info">Search</div>
                        </div>
                    </div>
                    <hr/>
                </div>
        );
    }
}

export default SearchForm;