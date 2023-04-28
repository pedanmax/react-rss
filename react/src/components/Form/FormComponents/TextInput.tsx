import React from 'react';
import { InputPropsText } from 'types/Types';

const TextInput = ({ error, label, name, refProp, validate, id }: InputPropsText) => {
  return (
    <div className='form__box'>
      <input
        type='text'
        {...refProp(name, {
          required: 'This field is required',
          minLength: {
            value: 3,
            message: 'Name is too short, minimum three letters',
          },
          validate: validate,
        })}
        id={id}
        className='form__name input'
        autoComplete='off'
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
      <label htmlFor='name' className='form__label'>
        {label}
      </label>
    </div>
  );
};
export default TextInput;
