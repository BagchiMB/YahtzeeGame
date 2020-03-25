import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps={numWords:["one","two","three","four","five","six"],val:5}
  constructor(props)
  {
    super(props)
    this.handleClick=this.handleClick.bind(this)
    
  }
  handleClick()
  {
    this.props.handleClick(this.props.idx)
  }
  render() {
    let d='Die fas fa-dice-'+(this.props.numWords[this.props.val-1])+' fa-5x'
    if(this.props.locked)
    {
      d+=' Die-locked'
    }
    if(this.props.rolling)
    {
      d+=' Die-rolling'
    }
    return (
      <i
        className={d}
        onClick={this.handleClick}
        disabled={this.props.disabled}
      />
    );
  }
}

export default Die;
