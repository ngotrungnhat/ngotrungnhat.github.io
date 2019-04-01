import React, { Component } from 'react';
import { connect } from 'react-redux';

class News extends Component {
    // clickHere  = () => {
    //     let {dispatch} = this.props //dispatch = this.props.dispatch
    //     dispatch({
    //         type: "CHANGE_EDIT_STATUS"
    //     })
    // }
    render() {
        return (
            <div>
                <h2>This is Component News</h2>
                <button onClick={() => this.props.clickHere()}>Click here</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        statusInitialState: state.statusInitialState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clickHere: () => {
            dispatch({type: "CHANGE_EDIT_STATUS"})
        }
    }
} //Trong News có ngay một cái this.props.clickHere() để truyền vào button

export default connect(mapStateToProps, mapDispatchToProps)(News)