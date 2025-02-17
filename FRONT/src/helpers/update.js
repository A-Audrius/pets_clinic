import axios from "axios";

const url = "http://localhost:5002/api/v1/appointments";

export const updateOne = async (id, data) => {
  console.log(id, data);
  
  await axios.patch(`${url}/${id}`, data);
}