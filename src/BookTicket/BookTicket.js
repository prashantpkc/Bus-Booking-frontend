import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './BookTicket.css'
import { Button } from "@mui/material";

export function Passenger() {
  const params = useParams();
  const tonav = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/getBooking/${params.id}`,{
      headers:{
        'token': localStorage.getItem('token')
      }
    }).then(res=>{
      setData(res.data.data)
    }).catch(err=>console.log(err))

    const loggedIn = localStorage.getItem('isLoggedIn');
    console.log(loggedIn)
    setIsLoggedIn(loggedIn ? true : false);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (!isLoggedIn) {
      tonav("/login");
      return;
    }
    const formData = new FormData(event.target);
    axios({
      method: "post",
      url: "http://localhost:5000/createPassenger",
      data: {
        name: formData.get("name"),
        age: formData.get("age"),
        city: formData.get("city"),
        state: formData.get("state"),
        gender: formData.get("gender"),
        email: formData.get("email"),
        phone: formData.get("phone"),
      },
      headers:{
        "token" : localStorage.getItem('token')
      }
    },
      
    )
      .then(() => {
        console.log("Passenger created successfully");
        tonav("/payment");
      })
      .catch((e) => {
        console.log(e.message);
      });
  }
  

  return (
    <div class="container-fluid">

       {/* <h1>Passenger Details</h1> */}
      <form onSubmit={handleSubmit}>
       
        <dl>
          <dt>Name</dt>
          <dd>
            <input type="text" placeholder="Name" name="name" required/>
          </dd>
          <dt>Age</dt>
          <dd>
            <input type="number" placeholder="Age" name="age" required />
          </dd>
          <dt>City of Residence</dt>
          <dd>
            <input type="text" placeholder="City" name="city" required />
          </dd>
          <dt>State of Residence</dt>
          <dd>
            <input type="text" placeholder="State" name="state" required />
          </dd>
          <dt>Gender</dt>
          <dd>
            <select name="gender" required >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </dd>
        </dl>
        <dl>
          <h3>Contact Details</h3>
          <dt>Email</dt>
          <dd>
            <input type="email" name="email"  required/>
          </dd>
          <dt>Phone Number</dt>
          <dd>
            <input type="number" name="phone"  required/>
          </dd>
          <dt>Payable amount</dt>
          <dd>
            <input type="text" value={data.totalPrice} name="name" required/>
          </dd>
        </dl>
        <Button
          variant="contained"
          type="submit"
          style={{ width: "53%" }}
          className="bg-danger mt-3"
        >
          Proceed To Pay
        </Button>
      </form>
    </div>
  );
}
