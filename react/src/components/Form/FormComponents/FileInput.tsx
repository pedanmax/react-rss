import React from 'react';
import { InputProps } from 'types/Types';

const FileInput = ({ error, label, refProp }: InputProps) => {
  return (
    <div className='form__box'>
      <input
        type='file'
        data-testid='file'
        className='form__file input'
        accept='image/*'
        ref={refProp}
        style={{ boxShadow: error ? '0 0 0px 0px red' : '0 0 5px 2px red' }}
      />
      <div
        className='form__icon'
        style={{
          opacity: error ? '0' : '1',
          cursor: error ? 'default' : 'pointer',
        }}
      >
        <div className='form__error'>You must select a file of type image</div>
      </div>
      <label htmlFor='file' className='form__label'>
        {label}
      </label>
    </div>
  );
};
export default FileInput;
