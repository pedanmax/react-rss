import React from 'react';

class RadioInput extends React.Component<{ label: string }> {
  constructor(props: { label: string }) {
    super(props);
  }
  render() {
    return (
      <div className='form__box'>
        <div className='form__inputs'>
          <div className='form__input-box'>
            <input type='radio' id='radio1' className='form__radio' name='radio' />
            <label htmlFor='radio1' className='form__label'>
              1
            </label>
          </div>
          <div className='form__input-box'>
            <input type='radio' id='radio2' className='form__radio' name='radio' />
            <label htmlFor='radio2' className='form__label'>
              5
            </label>
          </div>
          <div className='form__input-box'>
            <input type='radio' id='radio3' className='form__radio' name='radio' />
            <label htmlFor='radio3' className='form__label'>
              10
            </label>
          </div>
        </div>
        <h5 className='form__label'>{this.props.label}</h5>
      </div>
    );
  }
}
export default RadioInput;
