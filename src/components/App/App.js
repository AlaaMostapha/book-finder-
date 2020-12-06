import React, { Suspense } from "react";
import "./App.scss";
import BookFinder from "../bookFinder/bookFinder";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
const LazyResultListComponent = React.lazy(() =>
  import("../resultList/resultList.js")
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookFinder />
        <Suspense fallback={<div>Welcome.......</div>}>
          <LazyResultListComponent />
        </Suspense>
      </div>
    </Provider>
  );
}

// export default App;
export default App;
