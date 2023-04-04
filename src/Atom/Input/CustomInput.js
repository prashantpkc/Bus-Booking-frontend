import React from 'react'
import './CustomInput.css'
const CustomInput = ({placeholder,type,value,onChange,className,required}) => {
  return (
    <input className={`input ${className}`}  placeholder={placeholder} type={type} value={value} onChange={onChange} required ={required}/>
  )
}

export default CustomInput