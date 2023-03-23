import React from 'react';

class SelectInput extends React.Component<{
  label: string;
  refProp: React.RefObject<HTMLSelectElement>;
}> {
  constructor(props: { label: string; refProp: React.RefObject<HTMLSelectElement> }) {
    super(props);
  }
  render() {
    return (
      <div className='form__box'>
        <select
          className='form__select select input'
          defaultValue='Default'
          ref={this.props.refProp}
          required
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
        <label htmlFor='select' className='form__label'>
          {this.props.label}
        </label>
      </div>
    );
  }
}
export default SelectInput;
