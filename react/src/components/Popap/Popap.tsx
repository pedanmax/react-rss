import React from 'react';
import './Popap.scss';

class Popap extends React.Component<{ refProp: React.RefObject<HTMLDivElement> }> {
  render() {
    return (
      <div className='popap' ref={this.props.refProp} style={{ opacity: '0', zIndex: '-1' }}>
        <p className='popap__text'>Thank for your feedback</p>
      </div>
    );
  }
}

export default Popap;
