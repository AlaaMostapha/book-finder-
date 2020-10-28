import React from "react";

import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import "./Book_finder.scss";
import {connect} from 'react-redux';
import * as actionsCreator from "../../redux/actions/index";

const SearchSchema = Yup.object().shape({
  search: Yup.string()
    .required("Search is required")
    .min(2, "Search is too short - should be 2 chars minimum"),
});
const initialValues = {
  search: "",
};
const useStyles = makeStyles({
  btn: {
    // padding: '0 30px',
    margin: '5px',
  },
  textCenter:{
     textAlign: 'center',
  }
});

function BookFinder(props) {

  const classes = useStyles();

  const submitForm = (values) => {
    props.getBooks(values.search)
  };

  const renderForm = (props) =>{
      
    // console.log(props);
    const {handleSubmit,handleChange,touched,handleBlur,isValid,dirty,errors} = props;
    return(
      <div>
            <h1 className={classes.textCenter}>Search for your Book</h1>
      <Grid   
        container
        direction="row"
        justify="center"
        alignItems="center">
          
              <Form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label htmlFor="search">Search: </label>
                  <TextField
                    type="text"
                    name="search"
                    id="search"
                    autoComplete="off"
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
                    {/* {errors.search &&(
                      <div>{errors.search}</div>
                    )} */}
                  </div>
                  <div className={classes.textCenter}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      // className={classes.btn}
                       className={`${classes.btn} ${dirty && isValid ? "" : "disabled-btn"}`}
                      // className={dirty && isValid ? "" : "disabled-btn"}
                      disabled={!(dirty && isValid)}
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </Form>
            
    </Grid>
      </div>
    )
  }

  return (
    <div className="BookFinder">
      <Formik
        initialValues={initialValues}
        validationSchema={SearchSchema}
        onSubmit={submitForm}
      >
        {(props) => renderForm(props)}
      </Formik>
    </div>
  );
}

function mapDispatchToProps(dispatch){
  return{
   getBooks : (value)=>dispatch(actionsCreator.getBooks(value))
  }
}
export default connect(null,mapDispatchToProps)(BookFinder); 



