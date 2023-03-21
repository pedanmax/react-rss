import React from 'react';

class DateInput extends React.Component<{ label: string }> {
  constructor(props: { label: string }) {
    super(props);
  }
  render() {
    return (
      <div className='form__box'>
        <input type='date' className='form__date input' name='date' />
        <label htmlFor='date' className='form__label'>
          {this.props.label}
        </label>
      </div>
    );
  }
}
export default DateInput;
