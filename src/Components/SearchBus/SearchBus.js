import React, { useState } from "react";
import axios from "axios";
import { BusAtom } from "../../RecoilAtom/Atoms";
import { useSetRecoilState } from "recoil";
import CustomButton from "../../Atom/Button/CustomButton";
import CustomInput from "../../Atom/Input/CustomInput";
import "./SearchBus.css";
import { useNavigate } from "react-router-dom";
const SearchBus = () => {
  const tonav = useNavigate();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  // const [results, setResults] = useState([]);
  const setDataValue = useSetRecoilState(BusAtom);
 function handleSearch(){
    fetch(
      `http://localhost:5000/getBus?startCity=${origin}&destination=${destination}&availableDates=${date}`
    )
      .then((res) => res.json())
      .then((data) => setDataValue(data));
      tonav("/ticket")  
  };

  return (
    <div className="Search">
      <CustomInput
        name="origin"
        placeholder="Origin"
        onChange={(event) => setOrigin(event.target.value)}
      />
      <CustomInput
        name="destination"
        placeholder="Destination"
        onChange={(event) => setDestination(event.target.value)}
      />
      <CustomInput
        type="date"
        name="date"
        onChange={(event) => setDate(event.target.value)}
      />

      <CustomButton text="Search Bus" onClick={handleSearch} />

      {/* <ul>
          {results.map((result) => (
            <li key={result.id}>{result.companyName}</li>
          ))}
        </ul> */}
    </div>
  );
};

export default SearchBus;

// {"status":true,}
