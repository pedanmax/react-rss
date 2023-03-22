import React from 'react';
import Form from '../../components/Form/Form';
import FeedBackCollection from '../../components/FeedBackCollection/FeedBackCollection';
import { FeedBackCard } from 'types/Types';
import './FormPage.scss';

class FormPage extends React.Component<object, { feedBacks: FeedBackCard[] }> {
  constructor(props: object) {
    super(props);
    this.state = {
      feedBacks: [],
    };
  }
  addFeedBackToState = (feedBack: FeedBackCard): void => {
    this.setState({ feedBacks: this.state.feedBacks.concat(feedBack) });
  };
  render() {
    return (
      <div className='form-page'>
        <h1 className='form-page__title'>Please fill out the form</h1>
        <Form changeState={this.addFeedBackToState} />
        {this.state.feedBacks.length > 0 && <FeedBackCollection cards={this.state.feedBacks} />}
      </div>
    );
  }
}

export default FormPage;
