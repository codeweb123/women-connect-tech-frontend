import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#101357',
  textDecoration: 'none',
  color: 'white',
}
const NavBar = () => {
  return (
    <div className="navbar-top">
        
      <NavLink
        to="/login"
        exact 
        style={link}
        activeStyle={{
          background: "#fbaf08"
        }}
      >LogIn</NavLink>

      <NavLink
        to="/dashboard"
        exact 
        style={link}
        activeStyle={{
          background: "#fbaf08"
        }}
      >Dashboard</NavLink>

      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: "#fbaf08"
        }}
      ><h3>Women Connect In Tech</h3></NavLink>

        <NavLink
            to="/events"
            exact
            style={link}
            activeStyle={{
            background: "#fbaf08"
            }}
        >Events</NavLink>

        <NavLink
            to="/jobs"
            exact
            style={link}
            activeStyle={{
            background: "#fbaf08"
            }}
        >Jobs</NavLink>

    </div>
  );
};

export default NavBar;
