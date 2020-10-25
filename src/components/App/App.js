import React,{Suspense} from 'react';
import './App.css';
import BookFinder from '../Book_finder/Book_finder';

const LazyResultListComponent = React.lazy(()=>import('../Result_list/Result_list.js'));

function App() {
  return (
    <div className="App">
      <BookFinder/>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyResultListComponent/>
      </Suspense>
    </div>
  );
}

export default App;
