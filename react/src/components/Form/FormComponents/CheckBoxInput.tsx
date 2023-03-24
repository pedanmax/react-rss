import React from 'react';
import { RadioInputProps } from 'types/Types';
class CheckBoxInput extends React.Component<RadioInputProps> {
  constructor(props: RadioInputProps) {
    super(props);
  }
  render() {
    return (
      <div className='form__box'>
        <div
          className='form__inputs'
          style={{ boxShadow: this.props.error ? '0 0 0px 0px red' : '0 0 5px 2px red' }}
        >
          <div className='form__input-box'>
            <input
              type='checkbox'
              name='checkbox'
              className='form__checkbox'
              ref={this.props.refProp[0]}
              value='English'
              id='checkbox1'
            />
            <label htmlFor='checkbox1'>English</label>
          </div>
          <div className='form__input-box'>
            <input
              type='checkbox'
              name='checkbox'
              className='form__checkbox'
              ref={this.props.refProp[1]}
              value='Ukrainian'
              id='checkbox2'
            />
            <label htmlFor='checkbox2'>Ukrainian</label>
          </div>
          <div className='form__input-box'>
            <input
              type='checkbox'
              name='checkbox'
              className='form__checkbox'
              ref={this.props.refProp[2]}
              value='Spanish'
              id='checkbox3'
            />
            {!this.props.error && (
              <p className='form__error form__error_checkbox'>
                You must choose at least one option
              </p>
            )}
            <label htmlFor='checkbox3'>Spanish</label>
          </div>
        </div>
        <div
          className='form__icon'
          style={{
            opacity: this.props.error ? '0' : '1',
            cursor: this.props.error ? 'default' : 'pointer',
          }}
        >
          <div className='form__error'>You must select at least one option</div>
        </div>
        <h5 className='form__label'>{this.props.label}</h5>
      </div>
    );
  }
}
export default CheckBoxInput;
