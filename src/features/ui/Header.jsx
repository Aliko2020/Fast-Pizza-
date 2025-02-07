import { Link } from "react-router-dom"
import Search from "./Search"
import { CiSearch } from "react-icons/ci";
import { LuPizza } from "react-icons/lu";

const Header = () => {

  return (
    <header className="header">
      <Link style={{textDecoration: "none", color: "gray", display: "flex", alignItems: "center", gap: 4}} to="/"><LuPizza /> Fast Pizza</Link>
      <div className="search-container">
        <Search />
       <CiSearch size={20} color="gray" onClick={()=>setShowSearch(!showSearch)} />
      </div>
    </header>
  )
}

export default Header
