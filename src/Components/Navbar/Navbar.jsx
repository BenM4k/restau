import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const navList = [
    { name: 'About' },
    { name: 'Services' },
    { name: 'Members' },
    { name: 'Contact' },
  ];

  return (
    <div className="nav-container">
      <div className="logo">
        <NavLink to="/">Logo</NavLink>
      </div>

      <ul>
        <li>
          Admin
          <div className="admin">
            <NavLink to="/orders">Orders</NavLink>
            <NavLink to="/reservation">Reservartion</NavLink>
          </div>
        </li>
        {navList.map((link) => (
          <li key={link.name}>
            {link.name.includes('About') || link.name.includes('Services')
              ? (
                <>
                  <a href={`/#${link.name.toLowerCase()}`}>{link.name}</a>
                </>
              )
              : <></>}
            {link.name.includes('Members') || link.name.includes('Contact') ? <NavLink to={`${link.name}`}>{link.name}</NavLink> : <></>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
