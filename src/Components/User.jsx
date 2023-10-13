import React from 'react'
import { useNavigate } from 'react-router-dom'

const User = () => {
    const navigate = useNavigate()
    const users = ["user_1","user_2","user_3"]
  return (
    <section>
        <div style={{fontSize:32, textAlign:"center", padding:10}} >Users</div>
        {users.map((user,idx)=>{
            return <button key={idx} onClick={() => navigate(`${user}`)}>{user}</button>;
        })}
        
    </section>
  )
}

export default User