import '../css/signup-login-form.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup, closeSignupForm } from '../redux/actions/authActions'

import {
  withRouter
} from 'react-router-dom'

class SignupForm extends Component {
  constructor() {
    super()
    this.signup = this.signup.bind(this)
  }

  signup(e) {
    e.preventDefault()
    let data = {
      username: this.userName.value,
      password: this.passWord.value
    }
    this.props.signup(data, this.props.history)
  }

  render() {
    return(
      <div className="signup-login-form"
        style={this.props.open ? { display: 'block' } : { display: 'none' }}
      >
        <div className="form-container">
          <form onSubmit={this.signup}>
            <input ref={input => this.userName = input} type="text" placeholder="用户名" />
            <input ref={input => this.passWord = input} type="password" placeholder="密码" />
            <input type="password" placeholder="再次输入" />
            <div className="signup-login-actions">
              <div onClick={this.props.closeSignupForm} className="cancle">取消</div>
              <button className="submit" type="submit">注册</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.auth.signupFormOpen
})
export default connect(mapStateToProps, { signup, closeSignupForm })(withRouter(SignupForm))
