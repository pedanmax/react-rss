import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { SelectInputProps } from 'types/Types';

const SelectInput = ({
  error,
  label,
  refProp,
}: {
  label: string;
  refProp: UseFormRegister<FieldValues>;
  error: boolean;
}) => {
  return (
    <div className='form__box'>
      <select
        className='form__select select input'
        data-testid='select'
        defaultValue='Default'
        {...refProp('select')}
        style={{ boxShadow: error ? '0 0 0px 0px red' : '0 0 5px 2px red' }}
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
      {!error && <p className='form__error'>You must select a value other than the default</p>}
      <div
        className='form__icon'
        style={{
          opacity: error ? '0' : '1',
          cursor: error ? 'default' : 'pointer',
        }}
      >
        <div className='form__error'>You must select a value other than the default</div>
      </div>
      <label htmlFor='select' className='form__label'>
        {label}
      </label>
    </div>
  );
};

export default SelectInput;
