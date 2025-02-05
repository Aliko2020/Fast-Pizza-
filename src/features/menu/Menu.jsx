import axios from "axios";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";


const Menu = () => {
  const menu = useLoaderData();

  return (
    <ul style={{padding: 16,}}>
      {menu.data.map((pizza) => (
       <MenuItem pizza={pizza} key={pizza.id}/>
      ))}
    </ul>
  );
};

export async function loader() {
  const response = await axios.get("https://react-fast-pizza-api.jonas.io/api/menu");
  return response.data;
}

export default Menu;
