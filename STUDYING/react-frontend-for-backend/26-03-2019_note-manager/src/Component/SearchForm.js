import React, { Component } from 'react'
import { connect } from 'react-redux';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keySearch: ''
        }
    }

    isChange = (event) => {
        const value = event.target.value
        this.setState({keySearch: value})
    }

    handleClickSearch = () => {
        this.props.searchData(this.state.keySearch)
    }

  render() {
      
    return (
        <div className="form-group">
            <div className="btn-group" style={{width: '100%'}}>
                <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="keySearch" aria-describedby="helpId" placeholder="Nhập từ khóa" />
                <div className="btn btn-info">Search</div>
                {this.handleClickSearch()}
            </div>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchData: (keySearch) => {
            dispatch({
                type: "SEARCH_DATA",
                keySearch: keySearch
            })
        }
    }
}

export default connect(null, mapDispatchToProps, null)(SearchForm)