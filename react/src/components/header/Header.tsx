import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [title, setTitle] = useState('Home');
  return (
    <header className='header'>
      <div className='header__container'>
        <h2 className='header__title'>
          Current page:
          {title}
        </h2>
        <nav className='header__navigation'>
          <NavLink to='/' className='header__item' onClick={() => setTitle('Home')}>
            Home
          </NavLink>
          <NavLink to='/about' className='header__item' onClick={() => setTitle('About')}>
            About
          </NavLink>
          <NavLink to='/form' className='header__item' onClick={() => setTitle('Form')}>
            Form
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
