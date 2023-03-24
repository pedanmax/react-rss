import React from 'react';

class FileInput extends React.Component<{
  label: string;
  refProp: React.RefObject<HTMLInputElement>;
  error: boolean;
}> {
  constructor(props: {
    label: string;
    refProp: React.RefObject<HTMLInputElement>;
    error: boolean;
  }) {
    super(props);
  }
  render() {
    return (
      <div className='form__box'>
        <input
          type='file'
          className='form__file input'
          accept='image/*'
          ref={this.props.refProp}
          style={{ boxShadow: this.props.error ? '0 0 0px 0px red' : '0 0 5px 2px red' }}
        />
        {!this.props.error && <p className='form__error'>You must select a file of type image</p>}
        <div className='form__icon' style={{ opacity: this.props.error ? '0' : '1' }}></div>
        <label htmlFor='file' className='form__label'>
          Upload your photo
        </label>
      </div>
    );
  }
}
export default FileInput;
