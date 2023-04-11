// import React, { useState } from "react";

// import { BusAtom } from "../../RecoilAtom/Atoms";
// import { useSetRecoilState } from "recoil";

// import "./SearchBus.css";
// import { useNavigate } from "react-router-dom";
// import { TextField } from '@mui/material';
// import { Button } from "@mui/material";
// const SearchBus = () => {
//   const tonav = useNavigate();
//   const [origin, setOrigin] = useState("");
//   const [destination, setDestination] = useState("");
//   const [date, setDate] = useState("");
 
//   const setDataValue = useSetRecoilState(BusAtom);
//   function handleSearch() {
//     fetch(
//       `http://localhost:5000/getBus?startCity=${origin}&destination=${destination}&availableDates=${date}`
//     )
//       .then((res) => res.json())
//       .then((data) => setDataValue(data));
//     tonav("/ticket")
//   };

//   return (
//     <div className="Search">
    
//       <div className="mt-4">
//         <TextField variant="outlined" id="outlined-basic" label="origin" name="origin" placeholder="origin" onChange={(event) => setOrigin(event.target.value)}></TextField>
//         <TextField variant="outlined" id="outlined-basic" label="destination" name="destination" placeholder="destination" onChange={(event) => setDestination(event.target.value)}></TextField>
//         <TextField variant="outlined" id="outlined-basic" name="name" type="date" onChange={(event) => setDate(event.target.value)}></TextField>
//         <Button variant="contained" type="button" style={{ height: '100%' }} className="bg-danger" onClick={handleSearch} >Search Bus</Button>
//       </div>

//     </div>
//   );
// };

// export default SearchBus;








import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from '@mui/material';
import "./SearchBus.css";

const SearchBus = () => {
  
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [busData, setBusData] = useState([]);
  

  const navigate = useNavigate();
  function handleSearch() {
    fetch(
      `http://localhost:5000/getBus?startCity=${origin}&destination=${destination}&availableDates=${date}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBusData(data);
        console.log(data);
        navigate("/ticket", { state: { data: busData } });
      });
  }
  
  return (
    <div className="Search">
      <div className="mt-4">
        <TextField variant="outlined" id="outlined-basic" label="origin" name="origin" placeholder="origin" onChange={(event) => setOrigin(event.target.value)}></TextField>
        <TextField variant="outlined" id="outlined-basic" label="destination" name="destination" placeholder="destination" onChange={(event) => setDestination(event.target.value)}></TextField>
        <TextField variant="outlined" id="outlined-basic" name="name" type="date" onChange={(event) => setDate(event.target.value)}></TextField>
        <Button variant="contained" type="button" style={{ height: '100%' }} className="bg-danger" onClick={handleSearch} >Search Bus</Button>
      </div>
    </div>
  );
};

export default SearchBus;







// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { TextField, Button } from "@mui/material";
// import "./SearchBus.css";

// const SearchBus = () => {
//   const [origin, setOrigin] = useState("");
//   const [destination, setDestination] = useState("");
//   const [date, setDate] = useState("");
//   const [busData, setBusData] = useState([]);
//   const navigate = useNavigate();

//   function handleSearch() {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate("/login");
//       return;
//     }
  
//     fetch(
//       `http://localhost:5000/getBus?startCity=${origin}&destination=${destination}&availableDates=${date}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setBusData(data);
//         console.log(data);
//         navigate("/ticket", { state: { data :busData} }); // pass data directly here
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   return (
//     <div className="Search">
//       <div className="mt-4">
//         <TextField
//           variant="outlined"
//           id="outlined-basic"
//           label="origin"
//           name="origin"
//           placeholder="origin"
//           onChange={(event) => setOrigin(event.target.value)}
//         ></TextField>
//         <TextField
//           variant="outlined"
//           id="outlined-basic"
//           label="destination"
//           name="destination"
//           placeholder="destination"
//           onChange={(event) => setDestination(event.target.value)}
//         ></TextField>
//         <TextField
//           variant="outlined"
//           id="outlined-basic"
//           name="name"
//           type="date"
//           onChange={(event) => setDate(event.target.value)}
//         ></TextField>
//         <Button
//           variant="contained"
//           type="button"
//           style={{ height: "100%" }}
//           className="bg-danger"
//           onClick={handleSearch}
//         >
//           Search Bus
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default SearchBus;

