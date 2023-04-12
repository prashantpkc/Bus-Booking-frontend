import { BusAtom } from "../RecoilAtom/Atoms";
import { useRecoilValue } from "recoil";
import "./SearchResults.css"
import { Button } from "@mui/material"
import { Link } from "react-router-dom";


function SearchResults() {
  const DataValue = useRecoilValue(BusAtom);
  const DataList = DataValue.data || [];

  return (
    <div>
      <table className="table mt-4">
        <thead>
          <tr className="table-active">
            <th>Company name</th>
            <th>Bus Number</th>
            <th>Type</th>
            {/* <th>Origin</th>
            <th>Destination</th> */}
            <th>Available Seats</th>
            
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Fare</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {DataList.map((item) => (
            <tr key={item.busNumber}>
              <td>{item.companyName}</td>
              <td>{item.busNumber}</td>
              <td>{item.busType}</td>
              {/* <td>{item.startCity}</td>
              <td>{item.destination}</td> */}
              <td>{item.availableSeats}</td>
            
              <td>{item.departureTime}</td>
              <td>{item.arrivalTime}</td>
              <td>{item.pricePerSeat}</td>
              <td>
              
                   <Button variant="contained" type="button" style={{height:'100%'}} className="bg-danger" ><Link to="/booking">Book ticket</Link></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;