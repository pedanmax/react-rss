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
        <input type='file' className='form__file input' accept='image/*' ref={this.props.refProp} />
        {!this.props.error && <p className='form__error'>You must select a file of type image</p>}
        <label htmlFor='file' className='form__label'>
          Upload your photo
        </label>
      </div>
    );
  }
}
export default FileInput;
