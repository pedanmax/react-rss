import React from 'react';

class FileInput extends React.Component<{ label: string }> {
  constructor(props: { label: string }) {
    super(props);
  }
  render() {
    return (
      <div className='form__box'>
        <input type='file' className='form__file input' name='file' required accept='image/*' />
        <label htmlFor='file' className='form__labe'>
          Upload your photo
        </label>
      </div>
    );
  }
}
export default FileInput;
