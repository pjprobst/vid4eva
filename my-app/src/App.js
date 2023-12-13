import React, { useState, useEffect } from "react";
import './App.css';
import Select from "react-select";

const App = () => {
  const options = [
    { value: 1, label: "Downtown Naperville" },
    { value: 2, label: "Downtown Yorkville" },
    { value: 3, label: "South Naperville" },
    { value: 4, label: "Downtown Oswego" },
  ]
  const [selectedBranch, setSelectedBranch] = useState();
  const [dataString, setDataString] = useState('');
  const [movies, setMovies] = useState([]); // Move 'movies' state to the top level

  const handleBranchSelect = async (selectedOption) => {
    setSelectedBranch(selectedOption);

    // Make an API call to your backend on port 5000
    try {
      const response = await fetch('http://localhost:5000/data' + '?branch=' + selectedOption.value);
      const data = await response.json(); // Assuming the response is JSON
      setDataString(JSON.stringify(data)); // Set the received data string in state
      console.log(data);
      setMovies(data); // Set the received data in the 'movies' state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Video4Ever Branch Inventory</h1>
        <p>Choose a branch to view the branch inventory.</p>
        <Select
          value={selectedBranch} 
          onChange={handleBranchSelect}
          styles={{
            control: (provided) => ({
              ...provided,
              boxShadow: "none",
              border: "none",
              backgroundColor: "white",
              color: "#000000",
              width:"112%"
            }),
            option: (provided) => ({
              ...provided,
              backgroundColor: "white",
              color: "#000000",
              width:"112%"
            })
          }}
          options={options} />
      {selectedBranch && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Director</th>
                <th>On Hand</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie, index) => (
                <tr key={index}>
                  <td>{movie.Title}</td>
                  <td>${Number(movie.Price).toFixed(2)}</td>
                  <td>{`${movie.DirectorFirst} ${movie.DirectorLast}`}</td>
                  <td>{movie.OnHand}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      </div>
    </div>
  )
};

export default App;