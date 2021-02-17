export const CheckLoggedinUser = (setUser) => {
  readLocalStorageData(setUser);
};

// read user data from local storage
const readLocalStorageData = (setUser) => {
  let res = JSON.parse(localStorage.getItem("budash"));
  if (res === null) {
    return false;
  }
  let status = checkIfTokenExpirted(res, setUser);
  if (status) {
    console.log("token expired");
    return false;
  }
  setUser(res);
};

// check token expiration
const checkIfTokenExpirted = (res, setUser) => {
  let time = new Date();
  let expiry_time = new Date(Date.parse(res.expiry_time));
  if (time > expiry_time) {
    logOutUser(setUser);
    return true;
  }
  return false;
};

// Logout user
const logOutUser = (setUser) => {
  // empty local storage
  setUser(null);
  localStorage.removeItem("budash");
};
