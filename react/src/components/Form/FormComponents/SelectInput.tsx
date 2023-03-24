import React from 'react';
import { SelectInputProps } from 'types/Types';

class SelectInput extends React.Component<SelectInputProps> {
  constructor(props: SelectInputProps) {
    super(props);
  }
  render() {
    return (
      <div className='form__box'>
        <select
          className='form__select select input'
          defaultValue='Default'
          ref={this.props.refProp}
          style={{ boxShadow: this.props.error ? '0 0 0px 0px red' : '0 0 5px 2px red' }}
        >
          <option disabled value='Default' hidden className='form__option'>
            Choose mood
          </option>
          <option value='Bad' className='form__option'>
            Bad
          </option>
          <option value='Good' className='form__option'>
            Good
          </option>
          <option value='Amazing' className='form__option'>
            Amazing
          </option>
        </select>
        {!this.props.error && (
          <p className='form__error'>You must select a value other than the default</p>
        )}
        <div
          className='form__icon'
          style={{
            opacity: this.props.error ? '0' : '1',
            cursor: this.props.error ? 'default' : 'pointer',
          }}
        >
          <div className='form__error'>You must select a value other than the default</div>
        </div>
        <label htmlFor='select' className='form__label'>
          {this.props.label}
        </label>
      </div>
    );
  }
}
export default SelectInput;
