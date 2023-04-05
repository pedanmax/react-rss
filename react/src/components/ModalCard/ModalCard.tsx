import React from 'react';
import { ChangeModalState, ModalCardType } from 'types/Types';
import './ModalCard.scss';

const ModalCard = ({
  modalCardInfo,
  changeModalState,
  classModal,
}: {
  modalCardInfo: ModalCardType;
  changeModalState: ChangeModalState;
  classModal: boolean;
}) => {
  const imgUrl = modalCardInfo.poster_path
    ? `https://image.tmdb.org/t/p/w500/${modalCardInfo.poster_path}`
    : '';
  const budget = modalCardInfo.budget ? modalCardInfo.budget.toLocaleString() : '';
  const genresArr = modalCardInfo.genres;
  const genres = genresArr?.map((genre) => genre.name);
  const closeModalCard = () => changeModalState(false);

  return (
    <>
      <div
        className='home__shadow'
        onClick={closeModalCard}
        style={classModal ? { opacity: 1, zIndex: 9 } : { opacity: 0, zIndex: -1 }}
      ></div>
      <div
        className='home__modal modal'
        style={classModal ? { opacity: 1, zIndex: 10 } : { opacity: 0, zIndex: -1 }}
      >
        <div className='modal__close' onClick={closeModalCard}></div>
        <h3 className='modal__title'>{modalCardInfo.title}</h3>
        <div className='modal__body'>
          <img src={imgUrl} alt='poster' className='modal__image' />
          <ul className='modal__info'>
            <li className='modal__item'>Date release: {modalCardInfo.release_date}</li>
            <li className='modal__item'>Gengre: {genres?.join(', ')}</li>
            <li className='modal__item'>Budget: {budget}</li>
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
    </>
  );
};

export default ModalCard;
