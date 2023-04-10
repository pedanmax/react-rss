import React, { useState, useEffect, useRef } from 'react';
import { Props } from 'types/Types';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../reducers/searchValueSlice';
import '../../pages/home/Home.scss';

type State = { searchValue: { value: string } };

const Search = ({ loading }: Props) => {
  // const searchValue = useSelector(selectValue);
  const dispatch = useDispatch();
  const search = useSelector((state: State) => state.searchValue);

  // const [value, setValue] = useState(localStorage.getItem('inputValue') || '');
  console.log(search.value);
  const inputSearch = useRef<HTMLInputElement>(null);
  // useEffect(() => {
  //   inputSearch.current = value;
  // }, [value]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    // localStorage.setItem('inputValue', inputSearch.current || '');
    e.preventDefault();
    loading(true);
    if (inputSearch.current) dispatch(actions.write(inputSearch.current.value));
  };

  return (
    <form name='search' className='home__search' onSubmit={handleSearch}>
      <input
        type='search'
        className='home__input'
        placeholder='search...'
        defaultValue={search.value}
        ref={inputSearch}
      />
      <input type='submit' className='home__button' value='Search' />
    </form>
  );
};

export default Search;
