export const requestHandler = (request) => {
  return request;
};
export const errorHandler = (error) => {
  return Promise.reject({ ...error });
};
export const successHandler = (response) => {
  return response;
};
