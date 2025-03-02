import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Function to get projects from the backend
export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};
