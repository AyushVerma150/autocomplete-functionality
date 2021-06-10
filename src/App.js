import Home from "./Components/Layout/Home";
import Navbar from "./Components/Layout/Navbar";
import DataBinding from "./Components/Autocomplete/DataBinding";
import GroupFiltering from "./Components/Autocomplete/GroupFiltering";
import CustomFiltering from "./Components/Autocomplete/CustomFiltering";

import CONSTANTS from "./Constants/Constants";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <CustomFiltering
        dataSource={CONSTANTS.DATA.USER_DATA}
        autoSuggest={CONSTANTS.AUTO_SUGGEST.YES}
        searchLimit={CONSTANTS.SEARCH_LIMIT.FIVE}
        sortOrder={CONSTANTS.SORT_ORDER.DESCENDING}
      />
      <hr className={styles.hLine} />
      <DataBinding
        dataSource={CONSTANTS.AXIOS.USERS_URL}
        searchLimit={CONSTANTS.SEARCH_LIMIT.TWO}
        sortOrder={CONSTANTS.SORT_ORDER.ASCENDING}
      />
      <hr className={styles.hLine} />
      <GroupFiltering
        searchLimit={CONSTANTS.SEARCH_LIMIT.TWO}
        sortOrder={CONSTANTS.SORT_ORDER.ASCENDING}
        dataSource={CONSTANTS.DATA.GROUPED_FILTER_DATA}
      />
    </div>
  );
};

export default App;
