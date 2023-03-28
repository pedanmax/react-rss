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

class FeedBackCardComponent extends React.Component<{ obj: FeedBackCard }> {
  constructor(props: { obj: FeedBackCard }) {
    super(props);
  }
  render() {
    const arrayOfFeedBacks = Object.values(this.props.obj);
    const wayToImage = this.props.obj.image
      ? URL.createObjectURL(this.props.obj.image as Blob | MediaSource)
      : img;
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
  }
}

export default FeedBackCardComponent;
