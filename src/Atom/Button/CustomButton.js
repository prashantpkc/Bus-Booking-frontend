import React from 'react'
import './CustomButton.css'
const CustomButton = (props) => {
  return (
    <button className={"btn" || props.className} onClick={props.onClick}>{props.text}</button>
  )
}

export default CustomButton;