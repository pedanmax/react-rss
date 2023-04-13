import React from 'react';
import { useGetMovieQuery } from '../../api/api';
import Preload from '../../components/Preload/Preload';
import { ChangeModalState } from 'types/Types';
import img from '../../assets/preload.gif';
import './ModalCard.scss';

const ModalCard = ({
  modalCardId,
  changeModalState,
  getModalCardId,
}: {
  modalCardId: number | string;
  changeModalState: (value: boolean) => void;
  getModalCardId: (value: number | string) => void;
}) => {
  const { data, isLoading } = useGetMovieQuery(modalCardId);
  let imgUrl, budget, genresArr, genres;
  if (!isLoading) {
    imgUrl = data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : '';
    budget = data.budget ? data.budget.toLocaleString() : '';
    genresArr = data.genres;
    genres = genresArr?.map((genre: { id: number; name: string }) => genre.name);
  }

  return (
    <>
      <div className='home__shadow' onClick={() => getModalCardId('')}></div>
      <div className='home__modal modal' data-testid='modal'>
        {isLoading ? (
          <img src={img} alt='preloader' />
        ) : (
          <div className='modal__content'>
            <div className='modal__close' onClick={() => getModalCardId('')}></div>
            <h3 className='modal__title'>{data.title}</h3>
            <div className='modal__body'>
              <img src={imgUrl} alt='poster' className='modal__image' />
              <ul className='modal__info'>
                <li className='modal__item'>Date release: {data.release_date}</li>
                <li className='modal__item'>Genre: {genres?.join(', ')}</li>
                <li className='modal__item'>Budget: {budget}</li>
                <li className='modal__item'>
                  <a
                    href={data.homepage}
                    className='modal__item-home-page'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Home-page movie
                  </a>
                </li>
              </ul>
            </div>
            <div className='modal__desc'>{data.overview}</div>
          </div>
        )}
      </div>
      {/* {!isLoading && (
        <div className='home__modal modal' data-testid='modal'>
          <div className='modal__close' onClick={() => getModalCardId('')}></div>
          <h3 className='modal__title'>{data.title}</h3>
          <div className='modal__body'>
            <img src={imgUrl} alt='poster' className='modal__image' />
            <ul className='modal__info'>
              <li className='modal__item'>Date release: {data.release_date}</li>
              <li className='modal__item'>Genre: {genres?.join(', ')}</li>
              <li className='modal__item'>Budget: {budget}</li>
              <li className='modal__item'>
                <a
                  href={data.homepage}
                  className='modal__item-home-page'
                  target='_blank'
                  rel='noreferrer'
                >
                  Home-page movie
                </a>
              </li>
            </ul>
          </div>
          <div className='modal__desc'>{data.overview}</div>
        </div>
      )} */}
    </>
  );
};

export default ModalCard;
