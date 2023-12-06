//App.js
import Select from "react-select";

// Import Bootstarp CSS
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const options = [
    { value: "blues", label: "Blues" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "Orchestra" },
  ];
  return (
    <div className="container">
      <div className="mt-5 m-auto w-50">
          <h>Video4Ever Branch Inventory</h>
          <p>Choose a branch to view the branch inventory.</p>
        <Select options={options} />
      </div>
    </div>
  );
};

export default App;