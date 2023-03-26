import React from 'react';
import { InputProps } from 'types/Types';
class TextInput extends React.Component<InputProps> {
  styleError = { opacity: this.props.error ? '0' : '1' };
  constructor(props: InputProps) {
    super(props);
  }
  render() {
    return (
      <div className='form__box'>
        <input
          type='text'
          ref={this.props.refProp}
          className='form__name input'
          autoComplete='off'
          style={{ boxShadow: this.props.error ? '0 0 0px 0px red' : '0 0 5px 2px red' }}
        />
        <div
          className='form__icon'
          style={{
            opacity: this.props.error ? '0' : '1',
            cursor: this.props.error ? 'default' : 'pointer',
          }}
        >
          <div className='form__error'>
            Name must be over 3 symbols, only letters, first letter is uppercase
          </div>
        </div>
        <label htmlFor='name' className='form__label'>
          {this.props.label}
        </label>
      </div>
    );
  }
}
export default TextInput;
