import React from 'react';
import { InputProps } from 'types/Types';
class DateInput extends React.Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }
  render() {
    return (
      <div className='form__box'>
        <input
          type='date'
          className='form__date input'
          ref={this.props.refProp}
          data-testid='date'
          style={{ boxShadow: this.props.error ? '0 0 0px 0px red' : '0 0 5px 2px red' }}
        />
        <div
          className='form__icon'
          style={{
            opacity: this.props.error ? '0' : '1',
            cursor: this.props.error ? 'default' : 'pointer',
          }}
        >
          <div className='form__error'>This date has not yet come or not valid</div>
        </div>
        <label htmlFor='date' className='form__label'>
          {this.props.label}
        </label>
      </div>
    );
  }
}
export default DateInput;
