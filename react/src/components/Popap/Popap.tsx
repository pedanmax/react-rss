import React from 'react';
import './Popap.scss';

class Popap extends React.Component<{ refProp: React.RefObject<HTMLDivElement> }> {
  render() {
    return (
      <div
        className='form__popap popap'
        ref={this.props.refProp}
        style={{ opacity: '0', zIndex: '-1' }}
      >
        <h4 className='popap__text'>Thank for your feedback</h4>
      </div>
    );
  }
}

export default Popap;
