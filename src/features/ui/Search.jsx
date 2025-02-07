import { useState } from "react";

const Search = () => {
  const [inputs, setInputs] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setInputs(e.target.value);
    alert(inputs)
  };

  return (
    <input 
      type="text" 
      className="search" 
      value={inputs} 
      onChange={handleChange} 
      placeholder="Search order"
    />
  );
}

export default Search;
