import axios from "axios";

const API_URL = "https://tuvote-backend.onrender.com/api/auth/";

// Set the token globally for all requests
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

// Register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}register`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    setAuthToken(response.data.token); // Set token in header after login
  }
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}login`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data)); // Save user to localStorage
    setAuthToken(response.data.token); // Set token in header after login
  }
  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
  setAuthToken(null); // Remove token from the header
};

// Get the current user from localStorage
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  register,
  login,
  logout,
  setAuthToken,
  getCurrentUser, // New function to get the current user
};

export default authService;
