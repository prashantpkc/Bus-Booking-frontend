import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BookTicket() {
  const { busNumber } = useParams(); // Get the bus number from the URL parameter
  const [numberOfSeats, setNumberOfSeats] = useState(1);
  const [seatNumber, setSeatNumber] = useState('');
  const [date, setDate] = useState('');

  const handleBookTicket = async () => {
    try {
      const response = await axios.post('/api/bookings', {
        busId: busNumber,
        userId: 'userId', // Replace with the actual user ID
        numberOfSeats: numberOfSeats,
        seatNumber: seatNumber,
        date: date,
        bookingDate: new Date(),
      });

      // TODO: Handle successful booking
    } catch (error) {
      // TODO: Handle booking error
    }
  };

  return (
    <div>
      <h1>Book Ticket for Bus {busNumber}</h1>
      <div>
        <label>Number of seats:</label>
        <input type="number" value={numberOfSeats} onChange={(e) => setNumberOfSeats(e.target.value)} />
      </div>
      <div>
        <label>Seat number:</label>
        <input type="text" value={seatNumber} onChange={(e) => setSeatNumber(e.target.value)} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <button onClick={handleBookTicket}>Book Ticket</button>
    </div>
  );
}

export default BookTicket;
