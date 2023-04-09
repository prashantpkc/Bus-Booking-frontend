import React,{useState,useEffect} from 'react'
import CustomInput from '../../Atom/Input/CustomInput'
import CustomButton from '../../Atom/Button/CustomButton'
import './Login.css'
import axios from 'axios'
import { Button } from "@mui/material";

function Login() {
   const [email, setEmail]=useState('')
   const [password,setPassword]=useState('')
   const [user,setUser] = useState([])
   const [newUser,setNewUser] = useState([])



let handleSubmit = async(e)=>{
  e.preventDefault()
  let data = {
    email: email,
    password: password
  }
  await axios.post("http://localhost:5000/login", data).then((response)=>{
    console.log(response.data); // check the response data
    localStorage.setItem('token', response.data.token); // set the token
  })
}



  return (
    <div className='login__form'>
      <h1>login Page</h1>
      
      <CustomInput value={email} placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
      <CustomInput value={password} placeholder='Paswword' onChange={(e)=> setPassword(e.target.value)}/>
      {/* <CustomButton onClick={handleSubmit} text='submit'/> */}

      <Button variant='contained' type='submit' onClick={handleSubmit} style={{ width: '100%' }} className='bg-danger mt-3'>
        Submit
      </Button>
      
    </div>
  )
}

export default Login



