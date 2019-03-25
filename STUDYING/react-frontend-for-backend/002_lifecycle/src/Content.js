import React, { Component } from 'react';

class Content extends Component {
    //Updation Props
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps props đã chạy');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate props đã chạy'); 
        return true;       
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate props đã chạy');
        
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate props đã chạy');        
    }
    
    
    render() {
        return (
            <div>
                <h4>{this.props.ten}</h4>
               
            </div>
        );
    }
}

export default Content;