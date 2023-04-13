import React from 'react';
import CardApi from '../../components/Card/CardApi';
import Preload from '../../components/Preload/Preload';
import { CardFromAPI } from 'types/Types';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../api/api';
const API_KEY = 'api_key=7bc9e78d64d6eabc0a158c008db80432';
const CardList = ({ getModalCardId }: { getModalCardId: (value: number) => void }) => {
  const { value } = useSelector((state: { search: { value: string } }) => state.search);

  const { isLoading, data } = useGetMoviesQuery(
    value ? `search/movie?${API_KEY}&query=${value}` : `list/1?${API_KEY}`
  );
  let cards;
  if (!isLoading) cards = data.items ? data.items : data.results;

  return (
    <div className='home__cardlist'>
      <Preload
        value={value !== '' ? `search/movie?${API_KEY}&query=${value}` : `list/1?${API_KEY}`}
      />
      <div className='home__cards'>
        {!isLoading &&
          cards.map((card: CardFromAPI) => {
            return (
              <CardApi
                key={card.id}
                id={card.id}
                poster_path={card.poster_path}
                title={card.title}
                release_date={card.release_date}
                getModalCardId={getModalCardId}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CardList;
