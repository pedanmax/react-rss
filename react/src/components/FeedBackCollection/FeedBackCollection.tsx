import React from 'react';
import { FeedBackCard } from 'types/Types';
import { useSelector } from 'react-redux';
import FeedBackCardComponent from '../../components/FeedBackCard/FeedBackCardComponent';
import './FeedBackCollection.scss';

const FeedBackCollection = () => {
  const { feedBacks } = useSelector((state: { feedBacks: FeedBackCard[] }) => state);

  return (
    <>
      {feedBacks.length > 0 && <h2 className='form-page__subtitle'>Feedbacks about movies</h2>}
      <div className='form-page__collection collection'>
        {feedBacks.map((item, index) => {
          return <FeedBackCardComponent key={index} obj={item} />;
        })}
      </div>
    </>
  );
};

export default FeedBackCollection;
