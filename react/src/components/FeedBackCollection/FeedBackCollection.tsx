import React from 'react';
import { FeedBackCard } from 'types/Types';
import FeedBackCardComponent from '../../components/FeedBackCard/FeedBackCardComponent';
import './FeedBackCollection.scss';

class FeedBackCollection extends React.Component<{ cards: FeedBackCard[] }> {
  constructor(props: { cards: FeedBackCard[] }) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.cards.length > 0 && (
          <h2 className='form-page__subtitle'>Feedbacks about movies</h2>
        )}
        <div className='form-page__collection collection'>
          {this.props.cards.map((item, index) => {
            return <FeedBackCardComponent key={index} obj={item} />;
          })}
        </div>
      </>
    );
  }
}

export default FeedBackCollection;
