import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { InputProps } from 'types/Types';

const DateInput = ({
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
      <input
        type='date'
        className='form__date input'
        {...refProp('date')}
        data-testid='date'
        style={{ boxShadow: error ? '0 0 0px 0px red' : '0 0 5px 2px red' }}
      />
      <div
        className='form__icon'
        style={{
          opacity: error ? '0' : '1',
          cursor: error ? 'default' : 'pointer',
        }}
      >
        <div className='form__error'>This date has not yet come or not valid</div>
      </div>
      <label htmlFor='date' className='form__label'>
        {label}
      </label>
    </div>
  );
};
export default DateInput;
