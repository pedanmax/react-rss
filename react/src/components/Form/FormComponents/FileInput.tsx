import React from 'react';

class FileInput extends React.Component<{
  label: string;
  refProp: React.RefObject<HTMLInputElement>;
}> {
  constructor(props: { label: string; refProp: React.RefObject<HTMLInputElement> }) {
    super(props);
  }
  render() {
    return (
      <div className='form__box'>
        <input
          type='file'
          className='form__file input'
          name='file'
          accept='image/*'
          ref={this.props.refProp}
        />
        <label htmlFor='file' className='form__labe'>
          Upload your photo
        </label>
      </div>
    );
  }
}
export default FileInput;
