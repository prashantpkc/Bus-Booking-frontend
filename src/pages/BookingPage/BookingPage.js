// import './BookingPage.css';
// import axios from "axios";
// import { LoginAtom } from '../../RecoilAtom/Atoms';
// import { useRecoilValue } from 'recoil';
// import { useState } from "react";
// import { useParams } from 'react-router-dom';
// import React from "react";
// import { GoPlusSmall } from 'react-icons/go';

// const CreateBooking = () => {
//   const dataValue = useRecoilValue(LoginAtom);
//   const [count, setCount] = useState(1);

  
//   const { id } = useParams();
//   console.log(id)// it will give me bus id

//   function handleDecrease() {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   }
  
//   function handleBook() {
//     // Implement book functionality
//   }
  
//   return (
//     <div className='book__main'>
//       <h4>Bus Name: {dataValue?.companyName}</h4>
//       <p>Available Seats: {dataValue?.availableSeats}</p>
//       <button onClick={handleDecrease}><GoPlusSmall /></button>
//       <span>{count}</span>


//       <button onClick={handleBook}>Book</button>
//     </div>
//   );
// };

// export default CreateBooking;


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
      const response = await axios.post('http://localhost:5000/createBooking', body,{
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
     
      {/* <div className='row'>
      <div className='col-4' >
        <label className='' >Date: </label>
        <input className='form-control'  type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className='col-4' >
        <label className='' >Number of Seats: </label>
        <input className='form-control'  type="number" value={numberOfSeats} onChange={(e) => setNumberOfSeats(e.target.value)} />
      </div>
      <button className='col-4'  onClick={handleBook}>Book</button>
      </div> */}
    </div>
  );
};

export default CreateBooking;

// {"status":true,"message":"Booking created successfully","data":{"busId":"64369ec8ce56ad8a07ff40ce","numberOfSeats":1,"date":"2023-04-20","bookingDate":"Sun Apr 16 2023 16:05:01 GMT+0530 (India Standard Time)","totalPrice":550,"_id":"643bcf55347d91d8cf5a0239","createdAt":"2023-04-16T10:35:01.723Z","updatedAt":"2023-04-16T10:35:01.723Z","__v":0}}