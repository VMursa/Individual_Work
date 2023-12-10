import axios from 'axios';

// Update this base URL to match your Django backend URL
const API_URL = 'http://127.0.0.1:8000/';

const register = (username, email, password) => {
  return axios.post(API_URL + "create_user/", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios.post(API_URL + "login/", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};

