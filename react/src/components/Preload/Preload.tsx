import React from 'react';
import preloader from '../../assets/preload.gif';
import { useGetMoviesQuery } from '../../api/api';

const Preload = (props: { value: string }) => {
  const { isLoading, data } = useGetMoviesQuery(props.value);
  const title = isLoading ? (
    <img className='home__preloader' src={preloader} alt='preloader' />
  ) : data.results?.length > 0 || data.items?.length > 0 ? (
    <h3 className='home__list-title'>Choose movie</h3>
  ) : data.results?.length === 0 || data.items?.length === 0 ? (
    <h3 className='home__list-title'>Movie was not found</h3>
  ) : null;
  return <div>{title}</div>;
};

export default Preload;
