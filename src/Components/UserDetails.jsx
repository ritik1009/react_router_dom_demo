import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const {id,name}= useParams()
    console.log("Users details",id,name)
  return (
    <div style={{ fontSize: 32, textAlign: "center", padding: 10 }}>
      UserId - {id}
    </div>
  );
}

export default UserDetails