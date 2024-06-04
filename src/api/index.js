import axios from "axios";
import { BASE_URL } from "../../../futurama-app-v2/src/config";

export const getCharacters = async () => {
  const response = await axios.get(`${BASE_URL}/characters`);
  return response.data;
};

export const getCharacterDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/characters/${id}`);
  return response.data;
};
