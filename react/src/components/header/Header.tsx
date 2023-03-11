import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <nav className='header__navigation'>
          <NavLink to='/' className='header__item'>
            Home
          </NavLink>
          <NavLink to='/about' className='header__item'>
            About
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Header;
