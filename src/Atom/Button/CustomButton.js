import React from 'react'
import './CustomButton.css'
const CustomButton = (props) => {
  return (
    <button className="btn"  onClick={props.onClick}>{props.text}</button>
  )
}

export default CustomButton;