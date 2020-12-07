/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./resultList.scss";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LoadingIndicator from "../loadingIndicator/loadingIndicator";
import { useSelector } from "react-redux";
function ResultList() {
  const books = useSelector((state) => state.books);
  const loading = useSelector((state) => state.loading);
  const createList = () => {
    if (books) {
      return (books.items || []).map((book) => {
        return (
          <Grid item xs={3} key={book.id}>
            <Paper className="paper-custom">
              <div>
                <h3>{book.volumeInfo.title}</h3>
                <p>{book.kind}</p>
                {book.volumeInfo.imageLinks ? (
                  <img
                    src={book.volumeInfo.imageLinks.smallThumbnail}
                    alt={book.volumeInfo.title}
                  />
                ) : (
                  ""
                )}
              </div>
            </Paper>
          </Grid>
        );
      });
    }
  };

  return (
    <React.Fragment>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <Grid container spacing={2} alignItems="stretch" m="2rem">
          {createList()}
        </Grid>
      )}
    </React.Fragment>
  );
}

export default ResultList;
