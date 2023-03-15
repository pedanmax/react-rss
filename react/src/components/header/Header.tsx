import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component<Record<string, never>, { currentPage: string }> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      currentPage: '',
    };
  }
  render() {
    return (
      <header className='header'>
        <div className='header__container'>
          <h2 className='header__title'>
            Current page:
            {window.location.pathname.slice(1) === ''
              ? ' Home'
              : window.location.pathname.slice(1) === 'about'
              ? ' About'
              : ' Not found'}
          </h2>
          <nav className='header__navigation'>
            <NavLink
              to='/'
              className='header__item'
              onClick={() => {
                this.setState({ currentPage: window.location.pathname.slice(1) });
              }}
            >
              Home
            </NavLink>
            <NavLink
              to='/about'
              className='header__item'
              onClick={() => {
                this.setState({ currentPage: window.location.pathname.slice(1) });
              }}
            >
              About
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
