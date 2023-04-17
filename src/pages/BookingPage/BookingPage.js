
import './BookingPage.css';
import axios from "axios";
import { TextField } from '@mui/material';
import { Button } from "@mui/material";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import React from "react";

const CreateBooking = () => {
  const tonav = useNavigate();

  const [date, setDate] = useState("");
  const [numberOfSeats, setNumberOfSeats] = useState(1);
 
  const { id } = useParams();
  
  const handleBook = async () => {
    const body = {
      date,
      numberOfSeats,
      busId:id,
      
    };
    console.log(body)

    try {
      const response = await axios.post('https://booking-bus.glitch.me/createBooking', body,{
        headers:{
          'token': localStorage.getItem('token')
        }
      });
      tonav(`/passenger/${response.data.data._id}`)
       console.log(response.data);
      // handle success response
    } catch (error) {
      console.log(error.response.data);
      // handle error response
    }
  };
  
  return (
    <div className='book__main d-flex sahdow lg p-2 my-3 rounded-5'>
       <div className="mt-4">
        <TextField variant="outlined" id="outlined-basic" label="Number of Seat"  placeholder="Number of Seat" value={numberOfSeats} onChange={(e) => setNumberOfSeats(e.target.value)}></TextField>
        
        <TextField variant="outlined" id="outlined-basic" name="name" type="date" onChange={(e) => setDate(e.target.value)} ></TextField>
        <Button variant="contained" type="button" style={{ height: '100%' }} className="bg-success" onClick={handleBook} >Book</Button>
      </div>
    </div>
  );
};

export default CreateBooking;

