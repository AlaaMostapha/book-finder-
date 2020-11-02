import React,{Suspense} from 'react';
import './App.scss';
import BookFinder from '../Book_finder/Book_finder';
import { Provider } from 'react-redux';
import store from '../../redux/store/store'
const LazyResultListComponent = React.lazy(()=>import('../Result_list/Result_list.js'));

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BookFinder/>
      <Suspense fallback={<div>Welcome.......</div>}>
        <LazyResultListComponent/>
      </Suspense>
   
    </div>
  </Provider>
  );
}

// export default App;
export default App;