import React from 'react';

class TextInput extends React.Component<{
  label: string;
  refProp: React.RefObject<HTMLInputElement>;
}> {
  constructor(props: { label: string; refProp: React.RefObject<HTMLInputElement> }) {
    super(props);
  }
  render() {
    return (
      <div className='form__box'>
        <input type='text' ref={this.props.refProp} className='form__name input' name='name' />
        <label htmlFor='name' className='form__label'>
          {this.props.label}
        </label>
      </div>
    );
  }
}
export default TextInput;
