import React, { createRef } from 'react';
import TextInput from './FormComponents/TextInput';
import DateInput from './FormComponents/DateInput';
import SelectInput from './FormComponents/SelectInput';
import CheckBoxInput from './FormComponents/CheckBoxInput';
import RadioInput from './FormComponents/RadioInput';
import FileInput from './FormComponents/FileInput';
import { PropsForm } from 'types/Types';
import './Form.scss';

class Form extends React.Component<PropsForm> {
  inputName = createRef<HTMLInputElement>();
  movieName = createRef<HTMLInputElement>();
  inputDate = createRef<HTMLInputElement>();
  inputSelect = createRef<HTMLSelectElement>();
  inputRadio = createRef<HTMLInputElement>();
  inputFile = createRef<HTMLInputElement>();
  checkBoxesRefs = Array(3)
    .fill('')
    .map(() => createRef<HTMLInputElement>());
  radioBoxesRefs = Array(3)
    .fill('')
    .map(() => createRef<HTMLInputElement>());
  constructor(props: PropsForm) {
    super(props);
  }
  getInfoFeedBack = () => {
    const info = {
      name: this.inputName.current?.value,
      movie: this.movieName.current?.value,
      date: this.inputDate.current?.value,
      select: this.inputSelect.current?.value,
      checkBoxes: this.checkBoxesRefs
        .filter((ref) => ref.current?.checked)
        .map((ref) => ref.current?.value)
        .join(', '),
      radioRefs: this.radioBoxesRefs
        .filter((ref) => ref.current?.checked)
        .map((ref) => ref.current?.value)
        .join(', '),
      image: this.inputFile?.current?.files
        ? URL.createObjectURL(this.inputFile.current.files[0])
        : '',
    };
    return info;
  };

  render() {
    return (
      <>
        <form
          action='#'
          className='form__page form'
          onSubmit={() => {
            event?.preventDefault();
            const info = this.getInfoFeedBack();
            this.props.changeState(info);
          }}
        >
          <TextInput refProp={this.inputName} label='Your name?' />
          <TextInput refProp={this.movieName} label='Movie name?' />
          <DateInput refProp={this.inputDate} label='When did you watch this movie?' />
          <SelectInput refProp={this.inputSelect} label='What is your mood after the movie?' />
          <CheckBoxInput refProp={this.checkBoxesRefs} label='What subtitles this movie has?' />
          <RadioInput refProp={this.radioBoxesRefs} label='Rate this movie' />
          <FileInput refProp={this.inputFile} label='Upload your photo' />
          <input type='submit' className='form__submit' value='Send feedback' />
        </form>
      </>
    );
  }
}

export default Form;
