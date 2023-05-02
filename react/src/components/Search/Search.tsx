import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../reducers/searchSlice';
import '../../pages/Home/Home.scss';

type State = { search: { value: string } };

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state: State) => state.search);

  const inputSearch = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(actions.write(inputSearch.current?.value));
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
