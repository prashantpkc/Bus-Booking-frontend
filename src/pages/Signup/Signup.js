// import React, { useState } from "react";
// import CustomInput from "../../Atom/Input/CustomInput";
// import CustomButton from "../../Atom/Button/CustomButton";
// import axios from 'axios'
// import {
//   isValidEmail,
//   isValidPassword,
//   isValidName,
//   isValidphone,
// } from "../../Helper/helper";
// import "./Signup.css";

// function Signup() {
//   const [firstName, setFirstName] = useState("");
//   const [firstNameMessage, setFirstNameMessage] = useState("");

//   const [lastName, setLastName] = useState("");
//   const [lastNameMessage, setLastNameMessage] = useState("");

//   const [password, setPassword] = useState("");
//   const [passwordMessage, setPasswordMessage] = useState("");

//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");

//   const [email, setEmail]=useState("")
//   const[emailMessage, setEmailMessage]=useState("")

//   const [phone, setPhone] = useState("")
//   const [phoneMessage, setPhoneMessage] = useState("");

//   // const[gender, setGender] = useState("")
//   // const[dob, setDob] = useState("")
//   // const [genderMessage, setGenderMessage] = useState("");
//   // const [dobMessage, setDobMessage] = useState("");

//   function HandleSubmit() {
//     if (!isValidName(firstName)) {
//       setFirstNameMessage("Enter Correct First Name");
//       return;
//     }
//     if (!isValidName(lastName)) {
//       setLastNameMessage("Enter Correct Last Name")
//       return
//     }
//     if (!isValidEmail(email)) {
//         setEmailMessage("Enter Correct Email");
//         return
//       }
//       if (!isValidPassword(password)) {
//         setPasswordMessage("Enter Correct Password");
//         return
//       }
//       if(!isValidphone(phone)){
//         setPhoneMessage("Enter Valid Phone Number")
//       }

//     if (password !== confirmPassword) {
//       setConfirmPasswordMessage("Enter Correct Password");
//       return
//     }

//     let data={
//         name,lastName,email,password
//     }
//     axios.post("http://localhost:5000/createUser",data).catch(()=>{alert("unknown error")})
//   }
//   return (
//     <div className="Main">
//       <h1>Sign Up Page</h1>
//       <CustomInput
//         placeholder="Enter First Name"
//         value={firstName}
//         type="text"
//         onChange={(e) => setFirstName(e.target.value)}
//         required 
//       />
      
//       {!isValidName(firstName) ? (
//         <span style={{ color: "red", height: ".3rem" }}>{firstNameMessage}</span>
//       ) : (
//         <span></span>
//       )}


//       <CustomInput
//         placeholder="Enter Last Name"
//         value={lastName}
//         type="text"
//         onChange={(e) => setLastName(e.target.value)}
//         required
//       />
//       {!isValidName(lastName) ? (
//         <span style={{ color: "red", height: ".3rem" }}>{lastNameMessage}</span>
//       ) : (
//         <span></span>
//       )}


// <CustomInput
//         placeholder="Enter Phone Number"
//         value={phone}
//         type="text"
//         onChange={(e) => setPhone(e.target.value)}
//         required
//       />
//       {!isValidphone(phone) ? (
//         <span style={{ color: "red", height: ".3rem" }}>{phoneMessage}</span>
//       ) : (
//         <span></span>
//       )}



//       <CustomInput
//         placeholder="Enter Email"
//         value={email}
//         type="text"
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       {!isValidEmail(email) ? (
//         <span style={{ color: "red", height: ".3rem" }}>{emailMessage}</span>
//       ) : (
//         <span></span>
//       )}
//       <CustomInput
//         placeholder="Enter Password"
//         value={password}
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       {!isValidPassword(password) ? (
//         <span style={{ color: "red", height: ".3rem" }}>{passwordMessage}</span>
//       ) : (
//         <span></span>
//       )}

//       <CustomInput
//         placeholder="Confirm Password"
//         value={confirmPassword}
//         type="password"
//         onChange={(e) => setConfirmPassword(e.target.value)}
//         required
//       />

//       {password !== confirmPassword ? (
//         <span style={{ color: "red", height: ".3rem" }}>
//           {confirmPasswordMessage}
//         </span>
//       ) : (
//         <span></span>
//       )}
//       <CustomButton text="Sign Up" onClick={HandleSubmit} />
//     </div>
//   );
// }

// export default Signup;



import React, { useState } from 'react';
import axios from 'axios'
import CustomInput from "../../Atom/Input/CustomInput";
import CustomButton from "../../Atom/Button/CustomButton";
import {
  isValidEmail,
  isValidPassword,
  isValidName,
  isValidphone,
} from "../../Helper/helper";
import "./Signup.css";


const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameMessage, setFirstNameMessage] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameMessage, setLastNameMessage] = useState("");

  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");

  const [email, setEmail]=useState("")
  const[emailMessage, setEmailMessage]=useState("")

  const [phone, setPhone] = useState("")
  const [phoneMessage, setPhoneMessage] = useState("");

  // const[gender, setGender] = useState("")
  // const[dob, setDob] = useState("")
  // const [genderMessage, setGenderMessage] = useState("");
  // const [dobMessage, setDobMessage] = useState("");

  const handleSubmit = (e) => {
        if (!isValidName(firstName)) {
      setFirstNameMessage("Enter Correct First Name");
      return;
    }
    
    if (!isValidName(lastName)) {
      setLastNameMessage("Enter Correct Last Name")
      return
    }
    if (!isValidEmail(email)) {
        setEmailMessage("Enter Correct Email");
        return
      }
      if (!isValidPassword(password)) {
        setPasswordMessage("Enter Correct Password");
        return
      }
      if(!isValidphone(phone)){
        setPhoneMessage("Enter Valid Phone Number")
      }

    if (password !== confirmPassword) {
      setConfirmPasswordMessage("Enter Correct Password");
      return
    }

    e.preventDefault();
    // TODO: send form data to backend
        if (password !== confirmPassword) {
      setConfirmPasswordMessage("Enter Correct Password");
      return
    }
        let data={
        firstName,lastName,email,password,phone,dob,gender
    }
    axios.post("http://localhost:5000/createUser",data).catch(()=>{alert("unknown error")})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

       
             <CustomInput
        placeholder="Confirm Password"
        value={confirmPassword}
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      {password !== confirmPassword ? (
        <span style={{ color: "red", height: ".3rem" }}>
          {confirmPasswordMessage}
        </span>
      ) : (
        <span></span>
      )}



   
    

      <label htmlFor="gender">Gender:</label>
      <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="dob">Date of Birth:</label>
      <input
        type="date"
        id="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />

      <button type="submit">Register</button>
    </form>


   
  );
}

export default Signup;

