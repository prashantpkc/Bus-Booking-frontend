import React,{useState,useEffect} from 'react'
import CustomInput from '../../Atom/Input/CustomInput'
import CustomButton from '../../Atom/Button/CustomButton'
import './Login.css'
import axios from 'axios'

function Login() {
   const [email, setEmail]=useState('')
   const [password,setPassword]=useState('')
   const [user,setUser] = useState([])
   const [newUser,setNewUser] = useState([])

    // useEffect(()=>{
    //   // fetch("http://localhost:5000/getUser")
    // .then(res=>res.json())
    // .then(data=>setNewUser(data.data))
    // },[])
    // console.log(newUser.data)

   let handleSubmit = async(e)=>{
      // let loginUser = newUser.filter((x)=>
      // x.email === email && x.password === password)
      // console.log(loginUser)
      // if(loginUser.length > 0){
      //   alert('login Sucessful...!😂')
      // }else{
      //   alert('Wrong Details, 🙁')
      // }
      e.preventDefault()
      let data = {
        email: email,
        password: password
      }
      await axios.post("http://localhost:5000/login", data).then((data)=>{
        console.log(data)
      })
   }

  return (
    <div className='login__form'>
      <CustomInput value={email} placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
      <CustomInput value={password} placeholder='Paswword' onChange={(e)=> setPassword(e.target.value)}/>
      <CustomButton onClick={handleSubmit} text='submit'/>
    </div>
  )
}

export default Login

