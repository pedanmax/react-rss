import React, { useRef, useState } from 'react';
import Form from '../../components/Form/Form';
import FeedBackCollection from '../../components/FeedBackCollection/FeedBackCollection';
import Popap from '../../components/Popap/Popap';
import './FormPage.scss';

const FormPage = () => {
  const [showPopap, setShowPopap] = useState(false);
  const popap = useRef<HTMLDivElement>(null);
  const showMessage = () => {
    const myPopap = popap.current;
    myPopap!.style.opacity = '1';
    myPopap!.style.zIndex = '10';
    setTimeout(() => {
      myPopap!.style.opacity = '0';
      myPopap!.style.zIndex = '-1';
    }, 2000);
    setShowPopap(false);
  };
  const changeVisibilityPopap = (value: boolean) => setShowPopap(value);
  showPopap ? showMessage() : null;
  return (
    <div className='form-page'>
      <h1 className='form-page__title'>Please fill out the form</h1>
      <Popap refProp={popap} />
      <Form changeVisibilityPopap={changeVisibilityPopap} />
      <FeedBackCollection />
    </div>
  );
};

export default FormPage;
