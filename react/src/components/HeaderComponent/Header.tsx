import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.scss';

export const LocationDisplay = () => {
  const location = useLocation();
  return <span>{location.pathname == '/' ? 'home' : location.pathname.slice(1)}</span>;
};

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <h2 className='header__title'>
          Current page: <LocationDisplay />
        </h2>
        <nav className='header__navigation'>
          <NavLink to='/' className='header__item'>
            Home
          </NavLink>
          <NavLink to='/about' className='header__item'>
            About
          </NavLink>
          <NavLink to='/form' className='header__item'>
            Form
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
