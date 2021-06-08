import "./App.css";

import Navbar from "./Components/UI/Navbar";
import Updates from "./Components/Updates/Updates";
import Autocomplete from "./Components/Autocomplete/Autocomplete";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Updates />
      <Autocomplete />
    </div>
  );
};

export default App;
