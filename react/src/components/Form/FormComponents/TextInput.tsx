import React from 'react';

class TextInput extends React.Component<{
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
        <input type='text' ref={this.props.refProp} className='form__name input' />
        {!this.props.error && (
          <p className='form__error'>
            Name must be over 3 symbols, only letters, first letter is uppercase
          </p>
        )}
        <label htmlFor='name' className='form__label'>
          {this.props.label}
        </label>
      </div>
    );
  }
}
export default TextInput;
