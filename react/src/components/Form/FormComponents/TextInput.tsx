import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { InputProps } from 'types/Types';

const TextInput = ({
  error,
  label,
  name,
  refProp,
}: {
  label: string;
  refProp: UseFormRegister<FieldValues>;
  name: string;
  error: boolean;
}) => {
  return (
    <div className='form__box'>
      <input
        type='text'
        {...refProp(name)}
        // ref={refProp}
        className='form__name input'
        autoComplete='off'
        style={{ boxShadow: error ? '0 0 0px 0px red' : '0 0 5px 2px red' }}
      />
      <div
        className='form__icon'
        style={{
          opacity: error ? '0' : '1',
          cursor: error ? 'default' : 'pointer',
        }}
      >
        <div className='form__error'>
          Name must be over 3 symbols, only letters, first letter is uppercase
        </div>
      </div>
      <label htmlFor='name' className='form__label'>
        {label}
      </label>
    </div>
  );
};
export default TextInput;
