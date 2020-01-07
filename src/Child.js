import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    // console.log(this.props); 
    const {color, handleChangeColor} = this.props
    return (
      <div
        onClick={() => handleChangeColor(getRandomColor())}
        className="child"
        style={{backgroundColor: color}}
      ></div>
    )
  }
}

export default Child
