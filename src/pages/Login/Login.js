import React,{useState,useEffect} from 'react'
import CustomInput from '../../Atom/Input/CustomInput'
import CustomButton from '../../Atom/Button/CustomButton'
import './Login.css'
function Login() {
   const [email, setEmail]=useState('')
   const [password,setPassword]=useState('')
   const [user,setUser] = useState([])
   const [newUser,setNewUser] = useState([])

    useEffect(()=>{
      fetch("http://localhost:5000/getUser")
    .then(res=>res.json())
    .then(data=>setNewUser(data.data))
    },[])
    console.log(newUser.data)

   function handleSubmit(){
      let loginUser = newUser.filter((x)=>
      x.email === email && x.password === password)
      console.log(loginUser)
      if(loginUser.length > 0){
        alert('login Sucessful...!😂')
      }else{
        alert('Wrong Details, 🙁')
      }
await axios.post("http://localhost:5000/login",data).then((responce)=>{ console.log(responce.data.data)  ; localStorage.setItem("token", responce.data.data);navigate('/');})
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

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import axios from 'axios';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data={
//         email:email,
//         password:password
//     }
//     await axios.post("http://localhost:5000/login",data).then((responce)=>{ console.log(responce.data.data)  ; localStorage.setItem("token", responce.data.data);navigate('/');})
//   };

//   return (
//     <Container>
//       <Row className="my-4">
//         <Col>
//           <h1>Sign In</h1>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={8}>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="email">
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
//             </Form.Group>
//             <Form.Group controlId="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
//             </Form.Group>
//             <Button variant="primary" type="submit">Sign In</Button>
//             <p>If you are not a registered user please <a href='/registration'>sign up</a></p>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Login;

