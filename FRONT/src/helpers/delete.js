import axios from "axios";

const url = "http://localhost:5002/api/v1/appointments";

export const deleteOne = async (id) => {
  await axios.delete(`${url}/${id}`);
}