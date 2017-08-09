import '../css/bottom-list.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeBottomList } from '../redux/actions/viewActions.js'

import { openLoginForm, openSignupForm } from '../redux/actions/authActions'
import { logout } from '../redux/actions/authActions'

class BottomList extends Component {
  constructor() {
    super()
    this.cancel = this.cancel.bind(this)
    this.signup = this.signup.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  cancel() {
    this.props.closeBottomList()
  }

  signup() {
    this.props.openSignupForm()
    this.props.closeBottomList()
  }

  login() {
    this.props.openLoginForm()
    this.props.closeBottomList()
  }
  logout() {
    this.props.logout()
    this.props.closeBottomList()
  }


  render() {
    let authString = this.props.currentUser === '' ? (
      <div>
        <li key="signup" onClick={this.signup}>注册</li>
        <li key="login" onClick={this.login}>登录</li>
      </div>
    ) : (
      <li key="logout" onClick={this.logout}>退出</li>
    )
    return(
      <div
      style={this.props.open ? { display: 'block' } : { display: 'none' }} className="bottom-list">
        <div className="login-actions">
          <ul>
            { authString }
            <li key="cancel" onClick={this.cancel}>取消</li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.view.bottomListOpen,
  currentUser: state.auth.currentUser
})
export default connect(mapStateToProps, { closeBottomList, openSignupForm, openLoginForm , logout})(BottomList)
