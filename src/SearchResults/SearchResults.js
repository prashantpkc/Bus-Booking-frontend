
// import { BusAtom } from "../RecoilAtom/Atoms";
// import "./SearchResults.css"
// import { useRecoilValue } from "recoil";


// function SearchResults() {
//   const DataValue = useRecoilValue(BusAtom);
//   const DataList = DataValue.data || [];

//   return (
//     <div>
//       <h1>Search Results</h1>
//       <ul>
//         {DataList.map((item) => (
//           <div key={item.id}>
//             <li>{item.companyName}</li>
//             <li>{item.busType}</li>
//             <li>{item.busNumber}</li>
//             <li>{item.startCity}</li>
//             <li>{item.destination}</li>
//             <li>{item.pricePerSeat}</li>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SearchResults;


import { BusAtom } from "../RecoilAtom/Atoms";
import { useRecoilValue } from "recoil";
import "./SearchResults.css"

function SearchResults() {
  const DataValue = useRecoilValue(BusAtom);
  const DataList = DataValue.data || [];

  return (
    <div>
      <h1>Search Results</h1>
      <div className="results-container">
        {DataList.map((item) => (
          <div key={item.id} className="result-item">
            <div className="company">{item.companyName}</div>
            <div className="type">{item.busType}</div>
            <div className="number">{item.busNumber}</div>
            <div className="start">{item.startCity}</div>
            <div className="destination">{item.destination}</div>
            <div className="price">{item.pricePerSeat}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;






// "data":[{"id":"643003e90ad3f669c3d32f98","companyName":"reliance","busType":"luxuary","busNumber":"12347","startCity":"kolkata","destination":"mumbai","totalSeats":"100","availableSeats":"100","pricePerSeat":"5","availableDates":"2023-11-30T00:00:00.000Z","createdAt":"2023-04-07T11:52:09.905Z","updatedAt":"2023-04-07T11:52:09.905Z","v":0},{"_id":"643006acf243bf8caec81a0a","companyName":"tata","busType":"luxuary","busNumber":"12347","startCity":"kolkata","destination":"mumbai","totalSeats":"100","availableSeats":"100","pricePerSeat":"5","availableDates":"2023-11-30T00:00:00.000Z","createdAt":"2023-04-07T12:03:56.502Z","updatedAt":"2023-04-07T12:03:56.502Z","_v":0}]

