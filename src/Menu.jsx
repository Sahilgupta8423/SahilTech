import React, { useContext } from "react";
import {NavLink } from 'react-router-dom'
const Menu = () => {
    return(<>
    <div className='menu_style'>
    <NavLink to='/' exact activeClassName='active_class'>About</NavLink>
    <NavLink to='/contact' exact activeClassName='active_class'>Contact</NavLink>
    <NavLink to='/search' exact activeClassName='active_class'>Search</NavLink>
    <NavLink to='/search' activeClassName='active_class'>User</NavLink>
    <NavLink to='/service' exact activeClassName='active_class'>Service</NavLink>
    </div>
    <br></br>
   
    </>) 
}
export default Menu;