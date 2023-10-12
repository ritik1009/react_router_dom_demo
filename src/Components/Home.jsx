import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



function Home() {
    // created an object for using the navigate
    const [name,setName] = useState('');
    let navigate = useNavigate();
    const handleChange= (e)=>{
      return setName(e.target.value)
    }
  return (
    <div className="Home">
      <h1>This is the Home</h1>
      <h3>Testing the Params</h3>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={() => navigate(`/profile/${name}`)}>Go to Profile</button>
      <br />
      <button onClick={() => navigate("/contact")}>Contact</button>
      <button onClick={() => navigate("/about")}>About</button>
    </div>
  );
}

export default Home