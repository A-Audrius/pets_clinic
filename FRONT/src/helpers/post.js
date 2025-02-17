import axios from "axios";

const url = "http://localhost:5002/api/v1/appointments";

export const post = async (data) => {
  const response = await axios.post(url, data);

  return response.data;
}