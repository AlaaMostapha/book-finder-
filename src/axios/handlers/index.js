import * as actions from '../../redux/actions/index';
export const requestHandler = (request) => {
  console.log(`request handler ${request}`);

  actions.startLoading("true")
    console.log(request)
  // document.body.classList.add('loading-indicator');
  // document.getElementById('loader3').show();
  return request
}
export const errorHandler = (error) => {
   console.log(`error handler ${error}`);
     console.log(error)
  return Promise.reject({ ...error })
}
export const successHandler = (response) => {
   console.log(`response handler ${response}`);
   console.log(response)
   actions.endLoading("false")
  //  document.getElementById('loader3').hide();
  //  document.body.classList.remove('loading-indicator');
  return response
}