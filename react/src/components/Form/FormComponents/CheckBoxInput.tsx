import React from 'react';

class CheckBoxInput extends React.Component<{
  label: string;
  refProp: React.RefObject<HTMLInputElement>[];
}> {
  constructor(props: { label: string; refProp: React.RefObject<HTMLInputElement>[] }) {
    super(props);
  }
  render() {
    return (
      <div className='form__box'>
        <div className='form__inputs'>
          <div className='form__input-box'>
            <input
              type='checkbox'
              name='checkbox'
              className='form__checkbox'
              ref={this.props.refProp[0]}
              value='English'
              id='checkbox1'
              defaultChecked
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
            <label htmlFor='checkbox3'>Spanish</label>
          </div>
        </div>
        <h5 className='form__label'>{this.props.label}</h5>
      </div>
    );
  }
}
export default CheckBoxInput;
