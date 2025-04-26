import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/auth";

export const registerUser = async (FormData) => {
    return await axios.post(`${API_BASE_URL}/signup`, FormData, {
        withCredentials: true,
    });
}

export const googleLoginUser = async (tokenId) => {
    return await axios.post(`${API_BASE_URL}/google-login`, tokenId);
  };
  