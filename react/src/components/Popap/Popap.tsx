import React from 'react';
import './Popap.scss';

const Popap = ({ refProp }: { refProp: React.RefObject<HTMLDivElement> }) => {
  return (
    <div className='form__popap popap' ref={refProp} style={{ opacity: '0', zIndex: '-1' }}>
      <h4 className='popap__text'>Thank for your feedback</h4>
    </div>
  );
};

export default Popap;
