import React from 'react';
import { RadioInputProps } from 'types/Types';
const RadioInput = ({ error, label, refProp }: RadioInputProps) => {
  return (
    <div className='form__box'>
      <div
        className='form__inputs'
        style={{ boxShadow: error ? '0 0 0px 0px red' : '0 0 5px 2px red' }}
      >
        <div className='form__input-box'>
          <input
            type='radio'
            id='radio1'
            className='form__radio'
            name='radio'
            ref={refProp[0]}
            value='1'
          />
          {!error && <p className='form__error form__error_checkbox'>You must choose one option</p>}
          <label htmlFor='radio1' className='form__label_radio'>
            1
          </label>
        </div>
        <div className='form__input-box'>
          <input
            type='radio'
            id='radio2'
            className='form__radio'
            name='radio'
            ref={refProp[1]}
            value='5'
          />
          <label htmlFor='radio2' className='form__label_radio'>
            5
          </label>
        </div>
        <div className='form__input-box'>
          <input
            type='radio'
            id='radio3'
            className='form__radio'
            name='radio'
            ref={refProp[2]}
            value='10'
          />
          <label htmlFor='radio3' className='form__label_radio'>
            10
          </label>
        </div>
      </div>
      <div
        className='form__icon'
        style={{
          opacity: error ? '0' : '1',
          cursor: error ? 'default' : 'pointer',
        }}
      >
        <div className='form__error'>You must select one option</div>
      </div>
      <h5 className='form__label'>{label}</h5>
    </div>
  );
};
export default RadioInput;
