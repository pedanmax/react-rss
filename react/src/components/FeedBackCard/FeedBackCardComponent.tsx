import React from 'react';
import { FeedBackCard } from 'types/Types';
import './FeedBackCardComponent.scss';
import img from '../../assets/demonstration.gif';

const fieldsCard = [
  'My name: ',
  'Movie name: ',
  'Date of review: ',
  'Mood after: ',
  'Subtitles: ',
  'Rate movie: ',
];

const FeedBackCardComponent = ({ obj }: { obj: FeedBackCard }) => {
  const arrayOfFeedBacks = Object.values(obj);

  let wayToImage;
  if (obj.image) {
    wayToImage = obj.image.length ? URL.createObjectURL(obj.image[0] as Blob) : img;
  } else wayToImage = img;

  return (
    <>
      <div className='collection__feed-back-card feed-back-card' data-testid='feedback-card'>
        <img src={wayToImage} alt='photo' className='feed-back-card__img' />
        <div className='feed-back-card__info'>
          {fieldsCard.map((field, index) => {
            return (
              <h4 key={index} className='feed-back-card__text'>
                {field + arrayOfFeedBacks[index]}
              </h4>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FeedBackCardComponent;
