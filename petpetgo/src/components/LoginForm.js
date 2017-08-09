import '../css/signup-login-form.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, closeLoginForm } from '../redux/actions/authActions'

import {
  withRouter
} from 'react-router-dom'

class LoginForm extends Component {
  constructor() {
    super()
    this.login = this.login.bind(this)
  }

  login(e) {
    e.preventDefault()
    let data = {
      username: this.userName.value,
      password: this.passWord.value
    }
    this.props.login(data, this.props.history)
  }

  render() {
    return(
      <div className="signup-login-form"
        style={this.props.open ? { display: 'block' } : { display: 'none' }}
      >
        <div className="form-container">
          <form onSubmit={this.login}>
            <input ref={input => this.userName = input} type="text" placeholder="用户名" />
            <input ref={input => this.passWord = input} type="password" placeholder="密码" />
            <div className="signup-login-actions">
              <div onClick={this.props.closeLoginForm} className="cancle">取消</div>
              <button className="submit" type="submit">登录</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.auth.loginFormOpen
})
export default connect(mapStateToProps, { login, closeLoginForm })(withRouter(LoginForm))
