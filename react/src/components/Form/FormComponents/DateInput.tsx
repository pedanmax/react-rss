import React from 'react';

class DateInput extends React.Component<{
  label: string;
  refProp: React.RefObject<HTMLInputElement>;
  error: boolean;
}> {
  constructor(props: {
    label: string;
    refProp: React.RefObject<HTMLInputElement>;
    error: boolean;
  }) {
    super(props);
  }
  render() {
    return (
      <div className='form__box'>
        <input
          type='date'
          className='form__date input'
          ref={this.props.refProp}
          name='date'
          required
        />
        {!this.props.error && <p className='form__error'>This date has not yet come</p>}
        <label htmlFor='date' className='form__label'>
          {this.props.label}
        </label>
      </div>
    );
  }
}
export default DateInput;
