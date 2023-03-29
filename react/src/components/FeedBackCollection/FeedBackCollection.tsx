import React from 'react';
import { FeedBackCard, FeedBackCardFromHook } from 'types/Types';
import FeedBackCardComponent from '../../components/FeedBackCard/FeedBackCardComponent';
import './FeedBackCollection.scss';

const FeedBackCollection = ({ cards }: { cards: FeedBackCard[] }) => {
  return (
    <>
      {cards.length > 0 && <h2 className='form-page__subtitle'>Feedbacks about movies</h2>}
      <div className='form-page__collection collection'>
        {cards.map((item, index) => {
          return <FeedBackCardComponent key={index} obj={item} />;
        })}
      </div>
    </>
  );
};

export default FeedBackCollection;
