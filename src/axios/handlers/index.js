import * as actions from '../../redux/actions/index';
import store from '../../redux/store/store'
export const requestHandler = (request) => {
  console.log(`request handler ${request}`);
  console.log(request)
  store.dispatch(actions.loading(true))
  console.log(store.dispatch(actions.loading(true)))

  // document.body.classList.add('loading-indicator');
  return request
}
export const errorHandler = (error) => {
  console.log(`error handler ${error}`);
  store.dispatch(actions.loading(false))
  console.log(error)

  //  document.body.classList.remove('loading-indicator');
  return Promise.reject({ ...error })
}
export const successHandler = (response) => {
  console.log(`response handler ${response}`);
  console.log(response)
  store.dispatch(actions.loading(false))
  console.log(store.dispatch(actions.loading(false)))

  //  document.body.classList.remove('loading-indicator');
  return response
}