//App.js
import './App.css';
import Select from "react-select";
import React, { useState, useEffect } from "react";

// Import Bootstarp CSS
const App = () => {
  const options = [
    { value: "Downtown Naperville", label: "Downtown Naperville" },
    { value: "Downtown Yorkville", label: "Downtown Yorkville" },
    { value: "South Naperville", label: "South Naperville" },
    { value: "Downtown Oswego", label: "Downtown Oswego" },
  ];
  
  return (
    <div className="App">
      <div className="App-header">
          <h>Video4Ever Branch Inventory</h>
          <p>Choose a branch to view the branch inventory.</p>
        <Select
          styles={{
            control: (provided, state) => ({
              ...provided,
              boxShadow: "none",
              border: "none",
              backgroundColor: "white",
              color: "#000000",
              width:"112%"
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: "white",
              color: "#000000",
              width:"112%"
            })
          }}
        options={options} />
      </div>
      <table>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
        </tr>
        <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
        </tr>
        <tr>
            <td>Megha</td>
            <td>19</td>
            <td>Female</td>
        </tr>
        <tr>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
        </tr>
    </table>
    </div>
  );
};

export default App;