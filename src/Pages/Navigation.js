import React from 'react'
import { NavLink } from 'react-router-dom'

 const Navigation = () => {
   const navLinkstyles=({isActive})=>{
     return{
       fontWeight:isActive? "bold":"normal",
       borderBottom:isActive?"1px":"none",
     }
   }
  return (
    <nav>
        {/* <NavLink 
        style={navLinkstyles}
        to="/">TodoApp</NavLink> */}
        {/* <NavLink 
        style={navLinkstyles}        
        to="/about">Calculator</NavLink> */}
    </nav>
  )
}
export default Navigation;