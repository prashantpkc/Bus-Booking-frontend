
import axios from "axios";
import { useState, useEffect } from "react";

import './BookTicket.css'

export function BookTicket() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLoggedIn(true);
      } else {
        window.location.href = "/login";
      }
    }, []);
  
    function handleSubmit(event) {
      event.preventDefault();
  
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
      })
        .then(() => {
          console.log("Passenger created successfully");
          window.location.href = "/payment";
        })
        .catch((e) => {
          alert(e.message);
        });
    }
  
    return (
      <div className="container-fluid">
        <h1>Book Ticket</h1>
        <form onSubmit={handleSubmit}>
          <h3>Passenger Details</h3>
          <dl>
            <dt>Name</dt>
            <dd>
              <input type="text" placeholder="Name" name="name" />
            </dd>
            <dt>Age</dt>
            <dd>
              <input type="number" placeholder="Age" name="age" />
            </dd>
            <dt>City of Residence</dt>
            <dd>
              <input type="text" placeholder="City" name="city" />
            </dd>
            <dt>State of Residence</dt>
            <dd>
              <input type="text" placeholder="State" name="state" />
            </dd>
            <dt>Gender</dt>
            <dd>
              <select name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </dd>
          </dl>
          <dl>
            <h3>Contact Details</h3>
            <dt>Email</dt>
            <dd>
              <input type="email" name="email" />
            </dd>
            <dt>Phone Number</dt>
            <dd>
              <input type="number" name="phone" />
            </dd>
          </dl>
          <button type="submit">Proceed To Pay</button>
        </form>
      </div>
    );
  }
  

