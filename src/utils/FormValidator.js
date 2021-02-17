/*Function to convert the backend errors Array into string */
export const getValidationErrors = (errors, setMessage) => {
  for (let key in errors) {
    errors[key] = errors[key].toString();
  }
  setMessage(errors);
};