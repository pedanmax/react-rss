import React from 'react';

class DateInput extends React.Component<{
  label: string;
  refProp: React.RefObject<HTMLInputElement>;
}> {
  constructor(props: { label: string; refProp: React.RefObject<HTMLInputElement> }) {
    super(props);
  }
  render() {
    return (
      <div className='form__box'>
        <input type='date' className='form__date input' ref={this.props.refProp} name='date' />
        <label htmlFor='date' className='form__label'>
          {this.props.label}
        </label>
      </div>
    );
  }
}
export default DateInput;
