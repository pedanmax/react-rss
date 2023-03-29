import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { RadioInputProps } from 'types/Types';

const CheckBoxInput = ({
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
      <div
        className='form__inputs'
        style={{ boxShadow: error ? '0 0 0px 0px red' : '0 0 5px 2px red' }}
      >
        <div className='form__input-box'>
          <input
            type='checkbox'
            className='form__checkbox'
            {...refProp('checkBoxEn')}
            value='English'
            id='checkbox1'
          />
          <label htmlFor='checkbox1'>English</label>
        </div>
        <div className='form__input-box'>
          <input
            type='checkbox'
            className='form__checkbox'
            {...refProp('checkBoxUa')}
            value='Ukrainian'
            id='checkbox2'
          />
          <label htmlFor='checkbox2'>Ukrainian</label>
        </div>
        <div className='form__input-box'>
          <input
            type='checkbox'
            className='form__checkbox'
            {...refProp('checkBoxSp')}
            value='Spanish'
            id='checkbox3'
          />
          {!error && (
            <p className='form__error form__error_checkbox'>You must choose at least one option</p>
          )}
          <label htmlFor='checkbox3'>Spanish</label>
        </div>
      </div>
      <div
        className='form__icon'
        style={{
          opacity: error ? '0' : '1',
          cursor: error ? 'default' : 'pointer',
        }}
      >
        <div className='form__error'>You must select at least one option</div>
      </div>
      <h5 className='form__label'>{label}</h5>
    </div>
  );
};
export default CheckBoxInput;
