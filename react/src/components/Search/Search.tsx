import React, { useState, useEffect, useRef } from 'react';
import { Props } from 'types/Types';
import '../../pages/home/Home.scss';

const Search = ({ getCards }: Props) => {
  const [value, setValue] = useState(localStorage.getItem('inputValue') || '');
  const inputSearch = useRef('');

  useEffect(() => {
    inputSearch.current = value;
  }, [value]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    localStorage.setItem('inputValue', inputSearch.current || '');
    e.preventDefault();
    getCards(value);
  };

  return (
    <form name='search' className='home__search' onSubmit={handleSearch}>
      <input
        type='search'
        className='home__input'
        placeholder='search...'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <input type='submit' className='home__button' value='Search' />
    </form>
  );
};

export default Search;
