import * as actions from "../../redux/actions/index";
import store from "../../redux/store/store";
export const requestHandler = (request) => {
  store.dispatch(actions.loading(true));
  store.dispatch(actions.loading(true));

  return request;
};
export const errorHandler = (error) => {
  store.dispatch(actions.loading(false));

  return Promise.reject({ ...error });
};
export const successHandler = (response) => {
  store.dispatch(actions.loading(false));

  return response;
};
