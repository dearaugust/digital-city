import React, { Component } from 'react'

class BaiduApi extends Component {
  constructor(){
    super()
    this.state = {
      coords: {}
    }
  }
  componentWillMount(){
    navigator.geolocation.getCurrentPosition(res => console.log(res))
  }
  handClick(){
    navigator.geolocation.getCurrentPosition(res => this.setState({'coords':res.coords}))
    // console.log('1');
  }
  // showPosition(position){
  //   let x = document.getElementById('gps')
  // 	x.innerHTML="纬度: " + position.coords.latitude +
  // 	"<br>经度: " + position.coords.longitude;
  // }
  render(){
    return(
      <div>
        <button onClick={this.handClick.bind(this)} >获取GPS</button>
        <p>{this.state.coords.latitude}</p>
        <p>{this.state.coords.longitude}</p>
      </div>
    )
  }
}

export default BaiduApi
