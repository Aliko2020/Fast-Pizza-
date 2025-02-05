import { Link } from "react-router-dom"
import Search from "./Search"

const Header = () => {

  return (
    <header className="header">
      <Link style={{textDecoration: "none", color: "gray"}} to="/">Fast Pizza</Link>
      <Search />
    </header>
  )
}

export default Header
