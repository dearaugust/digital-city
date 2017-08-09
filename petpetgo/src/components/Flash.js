
import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/flash.css'

class Flash extends Component {
  render() {
    return(
      <div className="flash" style={this.props.open ? { display: 'block' } : { display: 'none' }}>
        {this.props.msg}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.view.flashOpen,
  msg: state.view.flashMsg
})

export default connect(mapStateToProps)(Flash)
