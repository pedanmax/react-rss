import React, { useState, useEffect, useRef } from 'react';
import '../../pages/home/Home.scss';

type GetCards = (param: string) => void;
type Props = {
  getCards: GetCards;
};

const Search = ({ getCards }: Props) => {
  const [value, setValue] = useState(localStorage.getItem('inputValue') || '');
  const inputSearch = useRef('');

  useEffect(() => {
    inputSearch.current = value;
  }, [value]);

  useEffect(() => {
    return () => {
      localStorage.setItem('inputValue', inputSearch.current || '');
    };
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
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
