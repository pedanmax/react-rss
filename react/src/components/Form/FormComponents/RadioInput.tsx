import React from 'react';
import { InputProps } from 'types/Types';

const RadioInput = ({ error, label, refProp, name }: InputProps) => {
  return (
    <div className='form__box'>
      <div
        className='form__inputs'
        style={{ boxShadow: !error ? '0 0 0px 0px red' : '0 0 5px 2px red' }}
      >
        <div className='form__input-box'>
          <input
            type='radio'
            id='radio1'
            className='form__radio checkbox'
            {...refProp(name, { required: 'You must choose one option' })}
            value='1'
          />
          <label htmlFor='radio1' className='form__label_radio label'>
            1
          </label>
        </div>
        <div className='form__input-box'>
          <input
            type='radio'
            id='radio2'
            className='form__radio checkbox'
            {...refProp(name, { required: 'You must choose one option' })}
            value='5'
          />
          <label htmlFor='radio2' className='form__label_radio label'>
            5
          </label>
        </div>
        <div className='form__input-box'>
          <input
            type='radio'
            id='radio3'
            className='form__radio checkbox'
            {...refProp(name, { required: 'You must choose one option' })}
            value='10'
          />
          <label htmlFor='radio3' className='form__label_radio label'>
            10
          </label>
        </div>
      </div>
      <div
        className='form__icon'
        style={{
          opacity: !error ? '0' : '1',
          cursor: !error ? 'default' : 'pointer',
        }}
      >
        {error && <p className='form__error form__error_checkbox'>{error}</p>}
      </div>
      <h5 className='form__label'>{label}</h5>
    </div>
  );
};
export default RadioInput;
