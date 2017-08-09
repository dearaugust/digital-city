import axios from 'axios'
import Settings from '../../settings'

export const fetchUser = () => (
  dispatch => {
    const userId = localStorage.getItem('userId')
    axios.get(`${Settings.host}/user/${userId}`).then(
      res => {
        dispatch({ type: 'LOAD_USER', userName: res.data.user.username})
      }
    )
  }
)

export const login = (data, history) => (
  dispatch => {
    axios.post(`${Settings.host}/user/signin`, data).then(
      res => {
        localStorage.setItem('userId', res.data.userId)
        dispatch({ type: 'CLOSE_LOGIN_FORM'})
        dispatch({ type: 'LOGIN', userName: res.data.user})
        history.push('/mine')
      }
    ).catch(
      error => {
        console.log(error.response.data.msg)
        const { msg } = error.response.data
        dispatch({ type: 'FLASH', msg })
        setTimeout(() => dispatch({ type: 'HIDE_FLASH' }), 5000)
      }
    )
  }
)

export const openLoginForm = () => (
  dispatch => {
    dispatch({ type: 'OPEN_LOGIN_FORM'})
  }
)

export const closeLoginForm = () => (
  dispatch => {
    dispatch({ type: 'CLOSE_LOGIN_FORM'})
  }
)

export const signup = (data, history) => (
  dispatch => {
    axios.post(`${Settings.host}/user/signup`, data).then(res => {
      console.log('res.data', res.data)
      localStorage.setItem('userId', res.data.userId)
      history.push('/mine')
      dispatch({ type: 'SIGNUP', userName: res.data.username})
      dispatch({ type: 'CLOSE_SIGNUP_FORM'})
    }).catch(
      error => {
        console.log(error.response.data.msg)
        const { msg } = error.response.data
        dispatch({ type: 'FLASH', msg })
        setTimeout(() => dispatch({ type: 'HIDE_FLASH' }), 5000)
      }
    )
  }
)


export const openSignupForm = () => (
  dispatch => {
    dispatch({ type: 'OPEN_SIGNUP_FORM'})
  }
)

export const closeSignupForm = () => (
  dispatch => {
    dispatch({ type: 'CLOSE_SIGNUP_FORM'})
  }
)


export const logout = () => (
  dispatch => {
    localStorage.setItem('userId', null)
    dispatch({ type: 'LOGOUT'})
  }
)
