import React from 'react';
import { InputProps } from 'types/Types';

class FileInput extends React.Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }
  render() {
    return (
      <div className='form__box'>
        <input
          type='file'
          data-testid='file'
          className='form__file input'
          accept='image/*'
          ref={this.props.refProp}
          style={{ boxShadow: this.props.error ? '0 0 0px 0px red' : '0 0 5px 2px red' }}
        />
        <div
          className='form__icon'
          style={{
            opacity: this.props.error ? '0' : '1',
            cursor: this.props.error ? 'default' : 'pointer',
          }}
        >
          <div className='form__error'>You must select a file of type image</div>
        </div>
        <label htmlFor='file' className='form__label'>
          Upload your photo
        </label>
      </div>
    );
  }
}
export default FileInput;
