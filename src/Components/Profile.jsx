import React from "react";
// This import will give us the params that we passed when calling the route
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate()
  return (
    <div>
      <h2>Profile :{username}</h2>
      <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Profile;
