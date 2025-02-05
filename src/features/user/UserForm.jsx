import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { setName } from "./userSlice";
import { useDispatch } from "react-redux";



const UserForm = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setName(userName))
    navigate('/menu')
  };
  
  return (
    <form className="userForm" onSubmit={handleSubmit}>
      <div className="btn-container">
      <input 
        type="text" 
        name="user"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter your name"
        className="input"
      />
      </div>
      {userName? <div className="btn-container">
        <Button 
        label="Start Ordering" 
        type="submit" 
        className='button'
      />
      </div>: ""}
    </form>
  );
};

export default UserForm;
