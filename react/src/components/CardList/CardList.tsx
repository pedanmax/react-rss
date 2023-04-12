import React, { useEffect } from 'react';
import CardApi from '../../components/Card/CardApi';
import Preload from '../../components/Preload/Preload';
import { CardFromAPI } from 'types/Types';
import { actions } from '../../reducers/getCardsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../api/api';
const API_KEY = 'api_key=7bc9e78d64d6eabc0a158c008db80432';
const CardList = ({
  getModalInfoCard,
  changeModalState,
}: {
  getModalInfoCard: (obj: object) => void;
  changeModalState: (value: boolean) => void;
}) => {
  const { value } = useSelector((state: { search: { value: string } }) => state.search);

  const dispatch = useDispatch();
  const { isLoading, data } = useGetMoviesQuery(
    value !== '' ? `search/movie?${API_KEY}&query=${value}` : `list/1?${API_KEY}`
  );
  const cards = useSelector((state: { cards: CardFromAPI[] }) => state.cards);

  useEffect(() => {
    value === ''
      ? dispatch(actions.addCards(data?.items))
      : dispatch(actions.addCards(data?.results));
  }, [data?.items, data?.results, dispatch, isLoading, value]);

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
                getModalInfoCard={getModalInfoCard}
                changeModalState={changeModalState}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CardList;
