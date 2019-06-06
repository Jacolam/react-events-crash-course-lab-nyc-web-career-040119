import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (e) => {
    drawChromeBoiAtCoords(e.clientX, e.clientY)
  }

 toggleCycling = (e) => {
   toggleCycling()
   console.log('im being toggled')
 }
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-'
   */
  resize = (e) => {
    console.log(e.key)
    if (e.key === 's'){
      resize('-')
    } else if (e.key === 'a'){
      resize('+')
    }
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.toggleCycling}
        onKeyPress={this.resize}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
