import axios from "axios";

export async function loader() {
  const response = await axios.get("https://react-fast-pizza-api.jonas.io/api/menu");
  return response.data;
}
