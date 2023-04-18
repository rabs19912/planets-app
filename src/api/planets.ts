import axios from "axios";
import { BASE_URL } from "../utils/constants";

async function getPlanets(nextOrPreviousUrl?: string) {
  const defaultUrl = `${BASE_URL}/planets/?page=1`;
  const url = nextOrPreviousUrl ?? defaultUrl;
  return await axios.get(url);
}

export { getPlanets };
