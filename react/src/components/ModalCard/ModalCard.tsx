import React from 'react';
import { ModalCardType } from 'types/Types';
import './ModalCard.scss';

const ModalCard = ({ modalCardInfo }: { modalCardInfo: ModalCardType }) => {
  const imgUrl = modalCardInfo.poster_path
    ? `https://image.tmdb.org/t/p/w500/${modalCardInfo.poster_path}`
    : '';
  const genresArr = modalCardInfo.genres;
  const genres = genresArr?.map((genre) => genre.name);
  // const genres = modalCardInfo.genres ? Object.values(modalCardInfo.genres.name).join(', ') : null;
  return (
    <div className='modal'>
      <div className='modal__close'></div>
      <h3 className='modal__title'>{modalCardInfo.title}</h3>
      <div className='modal__body'>
        <img src={imgUrl} alt='poster' className='modal__image' />
        <ul className='modal__info'>
          <li className='modal__item'>Date release: {modalCardInfo.release_date}</li>
          <li className='modal__item'>Gengre: {genres?.join(', ')}</li>
          <li className='modal__item'>Popularity: {modalCardInfo.popularity}</li>
          <li className='modal__item'>
            <a
              href={modalCardInfo.homepage}
              className='modal__item-home-page'
              target='_blank'
              rel='noreferrer'
            >
              Home-page movie
            </a>
          </li>
        </ul>
      </div>
      <div className='modal__desc'>{modalCardInfo.overview}</div>
    </div>
  );
};

export default ModalCard;
