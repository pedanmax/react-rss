import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <nav className='header__navigation'>
          <Link to='/' className='header__item'>
            Home
          </Link>
          <Link to='/about' className='header__item'>
            About
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
