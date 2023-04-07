import React from 'react'
import './CustomInput.css'
const CustomInput = ({placeholder,select,type,value,onChange,required}) => {
  return (
    <input className='inputs'  placeholder={placeholder} type={type} value={value} onChange={onChange} required ={required} select={select}/>
  )
}

export default CustomInput