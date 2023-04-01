import React, { useState } from 'react';
import { InputProps } from 'types/Types';

const FileInput = ({ error, label, refProp, name }: InputProps) => {
  const [nameFile, setNameFile] = useState('File is not selected');
  const handleNameFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (e.target.files[0]) {
        setNameFile(e.target.files[0].name.slice(0, 10) + '...');
      } else setNameFile('File is not selected');
    } else setNameFile('File is not selected');
  };
  return (
    <div className='form__box'>
      <div className='form__inputs' style={{ padding: '7px 10px' }}>
        <input
          id='file'
          type='file'
          data-testid='file'
          className='form__file input'
          accept='image/*'
          {...refProp(name, {
            required: 'This field is required',
            validate: (value) =>
              (value[0] as File).type.includes('image') || 'You can choose file type only image',
          })}
          onChange={handleNameFile}
          style={{ boxShadow: !error ? '0 0 0px 0px red' : '0 0 5px 2px red', minWidth: 'auto' }}
        />
        <label htmlFor='file' className='form__file-btn'>
          Choose photo
        </label>
        <span className='test'>{nameFile}</span>
      </div>
      <div
        className='form__icon'
        style={{
          opacity: !error ? '0' : '1',
          cursor: !error ? 'default' : 'pointer',
        }}
      >
        <div className='form__error'>{error}</div>
      </div>
      <label htmlFor='file' className='form__label'>
        {label}
      </label>
    </div>
  );
};
export default FileInput;
