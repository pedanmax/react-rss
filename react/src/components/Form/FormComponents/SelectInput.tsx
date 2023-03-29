import React from 'react';
import { InputProps } from 'types/Types';

const SelectInput = ({ error, label, refProp, name }: InputProps) => {
  return (
    <div className='form__box'>
      <select
        className='form__select select input'
        data-testid='select'
        defaultValue=''
        {...refProp(name, { required: 'You must select a value other than the default' })}
        style={{ boxShadow: !error ? '0 0 0px 0px red' : '0 0 5px 2px red' }}
      >
        <option disabled value='' hidden className='form__option'>
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
      <div
        className='form__icon'
        style={{
          opacity: error ? '1' : '0',
          cursor: error ? 'pointer' : 'default',
        }}
      >
        {error && <p className='form__error'>{error}</p>}
      </div>
      <label htmlFor='select' className='form__label'>
        {label}
      </label>
    </div>
  );
};

export default SelectInput;
