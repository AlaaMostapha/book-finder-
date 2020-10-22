import React from 'react';
import './Book_finder.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function BookFinder() {
  return (
    <div className="BookFinder">
        <h1>Search for book </h1>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained" color="primary">
            Search
        </Button>
    </div>
  );
}

export default BookFinder;
