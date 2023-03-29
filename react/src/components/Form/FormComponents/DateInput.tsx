import React from 'react';
import { InputProps } from 'types/Types';

const DateInput = ({ error, label, refProp, name }: InputProps) => {
  return (
    <div className='form__box'>
      <input
        type='date'
        className='form__date input'
        {...refProp(name, {
          required: 'This field is required',
          validate: (value) =>
            Date.parse(value) <= Date.parse(new Date().toISOString().split('T')[0]) ||
            'This date has not yet come or not valid',
        })}
        data-testid='date'
        style={{ boxShadow: !error ? '0 0 0px 0px red' : '0 0 5px 2px red' }}
      />
      <div
        className='form__icon'
        style={{
          opacity: error ? '1' : '0',
          cursor: error ? 'pointer' : 'default',
        }}
      >
        {error && <div className='form__error'>{error}</div>}
      </div>
      <label htmlFor='date' className='form__label'>
        {label}
      </label>
    </div>
  );
};
export default DateInput;
