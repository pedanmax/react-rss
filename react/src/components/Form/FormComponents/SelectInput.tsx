import React from 'react';

class SelectInput extends React.Component<{ label: string }> {
  constructor(props: { label: string }) {
    super(props);
  }
  render() {
    return (
      <div className='form__box'>
        <select className='form__select select input' name='select'>
          <option defaultValue='default' selected disabled className='form__option'>
            Choose mood
          </option>
          <option value='bad' className='form__option'>
            Bad
          </option>
          <option value='good' className='form__option'>
            Good
          </option>
          <option value='amazing' className='form__option'>
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
