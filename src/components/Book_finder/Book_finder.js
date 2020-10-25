import React from "react";

import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
// import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import "./Book_finder.scss";
// const useStyles = makeStyles({
//   btn: {
//     margin:'10px',
//   },
// });
const SearchSchema = Yup.object().shape({
  search: Yup.string()
    .required("Search is required")
    .min(2, "Search is too short - should be 2 chars minimum"),
});
const initialValues = {
  search: "",
};
const submitForm = (values) => {
  console.log(values);
};
function BookFinder() {
  // const classes = useStyles();
  return (
    <div className="BookFinder">
      <Formik
        initialValues={initialValues}
        validationSchema={SearchSchema}
        onSubmit={submitForm}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
            isValid,
            dirty,
          } = formik;
          return (
            <div className="container">
              <h1>Search for your Book</h1>
              <Form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label htmlFor="search">Search: </label>
                  <TextField
                    type="text"
                    name="search"
                    id="search"
                    autoComplete="off"
                    value={values.search}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.search && touched.search ? "input-error" : null
                    }
                  />
                  <div>
                    <ErrorMessage
                      name="search"
                      component="span"
                      className="error"
                    />
                  </div>
                  <div>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      // className={classes.btn}
                      className={dirty && isValid ? "" : "disabled-btn"}
                      disabled={!(dirty && isValid)}
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default BookFinder;
