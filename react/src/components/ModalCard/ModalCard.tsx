import React from 'react';
import './ModalCard.scss';

const ModalCard = () => {
  return (
    <div className='modal'>
      <div className='modal__close'></div>
      <h3 className='modal__title'>Title of film</h3>
      <div className='modal__body'>
        <img
          src='https://thumbs.dreamstime.com/b/incredibly-beautiful-sunset-sun-lake-sunrise-landscape-panorama-nature-sky-amazing-colorful-clouds-fantasy-design-115177001.jpg'
          alt='poster'
          className='modal__image'
        />
        <ul className='modal__info'>
          <li className='modal__item'>Date release: 2022-22-11</li>
          <li className='modal__item'>Gengre: Drama, Thriler</li>
          <li className='modal__item'>Popularity: 910000</li>
          <li className='modal__item'>
            <a href='https://www.spidermannowayhome.movie' className='modal__item-home-page'>
              Home-page movie
            </a>
          </li>
        </ul>
      </div>
      <div className='modal__desc'>
        Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes
        of being a super-hero. When he asks for help from Doctor Strange the stakes become even more
        dangerous, forcing him to discover what it truly means to be Spider-Man.
      </div>
    </div>
  );
};

export default ModalCard;
