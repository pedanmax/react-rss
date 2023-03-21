import React from 'react';

class TextInput extends React.Component<{ label: string }> {
  constructor(props: { label: string }) {
    super(props);
  }
  render() {
    return (
      <div className='form__box'>
        <input type='text' className='form__name input' name='name' />
        <label htmlFor='name' className='form__label'>
          {this.props.label}
        </label>
      </div>
    );
  }
}
export default TextInput;
