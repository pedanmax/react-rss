import React from 'react';

class CheckBoxInput extends React.Component<{ label: string }> {
  constructor(props: { label: string }) {
    super(props);
  }
  render() {
    return (
      <div className='form__box'>
        <div className='form__inputs'>
          <div className='form__input-box'>
            <input type='checkbox' className='form__checkbox' name='checkbox1' />
            <label htmlFor='checkbox1'>English</label>
          </div>
          <div className='form__input-box'>
            <input type='checkbox' className='form__checkbox' name='checkbox2' />
            <label htmlFor='checkbox2'>Ukrainian</label>
          </div>
          <div className='form__input-box'>
            <input type='checkbox' className='form__checkbox' name='checkbox3' />
            <label htmlFor='checkbox3'>Spanish</label>
          </div>
        </div>
        <h5 className='form__label'>{this.props.label}</h5>
      </div>
    );
  }
}
export default CheckBoxInput;
