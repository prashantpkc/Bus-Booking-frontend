import { BusAtom } from "../RecoilAtom/Atoms";
import { useRecoilValue } from "recoil";
import "./SearchResults.css"
import { Button } from "@mui/material"
// import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { LoginAtom } from "../RecoilAtom/Atoms";
import {useNavigate} from"react-router-dom"

function SearchResults() {
  const tonav=useNavigate()
  const DataValue = useRecoilValue(BusAtom);
  const setTicket=useSetRecoilState(LoginAtom)
  const DataList = DataValue.data ;
function handleTicket(element){
  setTicket(element)
  console.log(element) //busid
  tonav(`/booking/${element}`)
}
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
            {/* <th>id</th> */}
          </tr>
        </thead>
        <tbody>
          {DataList?.map((item) => (
            <tr key={item.busNumber}>
              <td>{item.companyName}</td>
              <td>{item.busNumber}</td>
              <td>{item.busType}</td>
              {/* <td>{item.startCity}</td>
              <td>{item.destination}</td> */}
              <td>{item.availableSeats}</td>
            
              <td>{item.DepartureTime}</td>
              <td>{item.ArrivalTime}</td>
              <td>{item.pricePerSeat}</td>
              {/* <td>{item._id}</td> */}
              <td>
              
                   <Button variant="contained" onClick={()=>handleTicket(item._id)}type="button" style={{height:'100%'}} className="bg-danger" >Book ticket</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;