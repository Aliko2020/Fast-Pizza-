import { useNavigate } from "react-router-dom"
import Button from "../ui/Button"
import UserForm from "../user/UserForm"
import { useSelector } from "react-redux"




const Home = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.name);
  
  return (
    <section className="home">
      <h1 className="style"><span >The best pizza.<br />
      Straight out of the oven,straight to you.</span>
      </h1>
      {user? <Button label={`Continue Ordering, ${user}`} onClick={()=> navigate('/menu')} className="button"/> : <div>
        <p>👋,start by telling us your name</p>
        <UserForm />
      </div> }
    </section>
  )
}

export default Home
