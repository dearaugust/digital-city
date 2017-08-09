import React, { Component } from 'react'
import { fetchUser } from '../redux/actions/authActions'
import { connect } from 'react-redux'

class App extends Component {
  componentWillMount() {
    if (this.props.currentUser === '') {
      this.props.fetchUser()
    }
  }
  render() {
    return (
      <div>
        currentUser: { this.props.currentUser }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser
})

export default connect(mapStateToProps, { fetchUser })(App)
