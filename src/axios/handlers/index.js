export const requestHandler = (request) => {
  console.log(`request handler${request}`);
  return request
}
export const errorHandler = (error) => {
   console.log(`error handler${error}`);
  return Promise.reject({ ...error })
}
export const successHandler = (response) => {
   console.log(`response handler${response}`);
  return response
}