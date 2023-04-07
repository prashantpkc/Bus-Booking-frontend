
import React, { useState } from 'react';
import CustomButton from '../../Atom/Button/CustomButton';
import CustomInput from '../../Atom/Input/CustomInput';
import "./SearchBus.css"

function SearchBus() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);


console.log(origin)
console.log(destination)
console.log(date)
  const handleSearch = async () => {
    const response = await fetch(`http://localhost:5000/getBus?startCity=${origin}&destination=${destination}&availableDates=${date}`);
    const data = await response.json();
    setResults(data);
  }

  return (
    <div className="Search">
      <CustomInput name="origin" placeholder="Origin"  onChange={(event) => setOrigin(event.target.value)} />
      <CustomInput name="destination" placeholder="Destination"  onChange={(event) => setDestination(event.target.value)} />
      <CustomInput type="date" name="date"   onChange={(event) => setDate(event.target.value)}/>
     
      <CustomButton text="Search Bus" onClick={handleSearch} />
      {results.length > 0 && (
        <ul>
          {results.map(result => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBus;
