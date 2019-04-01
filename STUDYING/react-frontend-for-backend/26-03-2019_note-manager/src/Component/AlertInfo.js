import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Alert, AlertContainer } from "react-bs-notifier";

class AlertInfo extends Component {
    handleDismiss  = () => {
        this.props.alertOff()
    }
  render() {
      if (this.props.alertShow === false) {
          return null
      }
    return (
        <AlertContainer position="center">
		    <Alert type="info" onDismiss={()=>this.handleDismiss()} timeout={1000}>{this.props.alertContent}</Alert>
	    </AlertContainer>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
        alertShow: state.alertShow,
        alertContent: state.alertContent
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({type: 'ALERT_OFF'})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps, null)(AlertInfo)