import "./App.css";

import Home from "./Components/Home/Home";
import Navbar from "./Components/UI/Navbar";
import DataBinding from "./Components/Autocomplete/DataBinding";
import GroupFiltering from "./Components/Autocomplete/GroupFiltering";
import CustomFiltering from "./Components/Autocomplete/CustomFiltering";

import CONSTANTS from "./Constants/Constants";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <CustomFiltering
        sortOrder="asc"
        searchLimit={5}
        autoSuggest={true}
        dataSource={CONSTANTS.DATA.USER_DATA}
      />
      <hr style={{ margin: "0 auto", width: "80%", marginTop: "30px" }} />
      <DataBinding
        sortOrder="asc"
        searchLimit={2}
        dataSource="https://jsonplaceholder.typicode.com/users"
      />
      <hr style={{ margin: "0 auto", width: "80%", marginTop: "30px" }} />
      <GroupFiltering
        sortOrder="asc"
        searchLimit={2}
        dataSource={CONSTANTS.DATA.GROUPED_FILTER_DATA}
      />
    </div>
  );
};

export default App;
