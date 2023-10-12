import React from 'react'
import { NavLink,Outlet} from 'react-router-dom'

function Contact() {
  return (
    <div>
      <div class="ContactOption">
        <NavLink to="search">Search</NavLink>
        <NavLink to="friends">Friend</NavLink>
        <NavLink to="request">Request</NavLink>
        <NavLink to="Stranger">Stranger</NavLink>
      </div>
      <Outlet/>
    </div>
  );
}

export default Contact