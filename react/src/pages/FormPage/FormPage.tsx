import React, { createRef, useState } from 'react';
import Form from '../../components/Form/Form';
import FeedBackCollection from '../../components/FeedBackCollection/FeedBackCollection';
import Popap from '../../components/Popap/Popap';
import { FeedBackCard } from 'types/Types';
import './FormPage.scss';

const FormPage = () => {
  const [feedBackState, setFeeBacksState] = useState<FeedBackCard[]>([]);
  const popap = createRef<HTMLDivElement>();

  const showMessage = () => {
    const myPopap = popap.current;
    myPopap!.style.opacity = '1';
    myPopap!.style.zIndex = '10';
    setTimeout(() => {
      myPopap!.style.opacity = '0';
      myPopap!.style.zIndex = '-1';
    }, 2000);
  };

  const addFeedBackToState = (feedBack: FeedBackCard): void => {
    showMessage();
    setFeeBacksState(feedBackState.concat(feedBack));
  };

  return (
    <div className='form-page'>
      <h1 className='form-page__title'>Please fill out the form</h1>
      <Popap refProp={popap} />
      <Form addFeedBackToState={addFeedBackToState} />
      {feedBackState.length > 0 && <FeedBackCollection cards={feedBackState} />}
    </div>
  );
};

export default FormPage;
