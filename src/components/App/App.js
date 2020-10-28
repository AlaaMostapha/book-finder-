import React from 'react';
import './App.scss';
import BookFinder from '../Book_finder/Book_finder';
import { Provider } from 'react-redux';
import store from '../../redux/store/store'
import BooksReultList from '../Result_list/Result_list.js'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookFinder/>
        <BooksReultList/>   
      </div>
  </Provider>
  );
}

export default App;