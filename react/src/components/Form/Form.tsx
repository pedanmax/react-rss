import React, { createRef, FormEvent } from 'react';
import TextInput from './FormComponents/TextInput';
import DateInput from './FormComponents/DateInput';
import SelectInput from './FormComponents/SelectInput';
import CheckBoxInput from './FormComponents/CheckBoxInput';
import RadioInput from './FormComponents/RadioInput';
import FileInput from './FormComponents/FileInput';
import { FeedBackCard, PropsForm, StateForm } from 'types/Types';
import './Form.scss';

class Form extends React.Component<PropsForm, StateForm> {
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
    this.state = {
      validate: false,
      fields: {
        name: true,
        movie: true,
        date: true,
        select: true,
        checkBoxes: true,
        radioBoxes: true,
        image: true,
      },
    };
  }
  getInfoFeedBack = (): FeedBackCard => {
    const info = {
      name: this.inputName.current?.value,
      movie: this.movieName.current?.value,
      date: this.inputDate.current?.value,
      select: this.inputSelect.current?.value,
      checkBoxes: this.checkBoxesRefs
        .filter((ref) => ref.current?.checked)
        .map((ref) => ref.current?.value)
        .join(', '),
      radioBoxes: this.radioBoxesRefs
        .filter((ref) => ref.current?.checked)
        .map((ref) => ref.current?.value)
        .join(', '),
      image: this.inputFile?.current?.files ? this.inputFile.current.files[0] : '',
    };
    console.log(info);
    return info;
  };
  checkValidate = (info: FeedBackCard) => {
    const objValidate: StateForm = {
      validate: false,
      fields: {
        name: true,
        movie: true,
        date: true,
        select: true,
        checkBoxes: true,
        radioBoxes: true,
        image: true,
      },
    };
    if (info.name) {
      if (
        info.name?.length < 3 ||
        /[0-9]/.test(info.name) ||
        info.name.charAt(0) !== info.name.charAt(0).toUpperCase() ||
        info.name[0] == ' ' ||
        info.name[info.name.length - 1] == ' '
      ) {
        objValidate.fields.name = false;
      }
    } else objValidate.fields.name = false;
    if (info.movie) {
      if (
        info.movie?.length < 3 ||
        info.movie.charAt(0) !== info.movie.charAt(0).toUpperCase() ||
        info.movie[0] == ' ' ||
        info.movie[info.movie.length - 1] == ' '
      ) {
        objValidate.fields.movie = false;
      }
    } else objValidate.fields.movie = false;
    if (info.date) {
      objValidate.fields.date =
        Date.parse(info.date) > Date.parse(new Date().toISOString().split('T')[0]) ? false : true;
    } else objValidate.fields.date = false;
    if (info.select === 'Default') objValidate.fields.select = false;
    if (!info.checkBoxes) objValidate.fields.checkBoxes = false;
    if (!info.radioBoxes) objValidate.fields.radioBoxes = false;
    if (!info.image) {
      objValidate.fields.image = false;
    } else if (!(info.image as File).type.includes('image')) {
      objValidate.fields.image = false;
    }
    const resultOfValidationFields = Object.values(Object.values(objValidate)[1]);
    const resultOfValidation = resultOfValidationFields.every((field) => field === true);
    if (resultOfValidation) objValidate.validate = true;
    this.setState({ ...objValidate });
    return resultOfValidation;
  };
  drawNewFeedBack = (e: FormEvent, info: FeedBackCard) => {
    (e.target as HTMLFormElement).reset();
    this.props.addFeedBackToState(info);
  };
  render() {
    return (
      <form
        noValidate
        name='form'
        action='#'
        className='form-page__form form'
        onSubmit={(e: FormEvent) => {
          event?.preventDefault();
          const info = this.getInfoFeedBack();
          if (this.checkValidate(info)) {
            this.drawNewFeedBack(e, info);
          }
        }}
      >
        <TextInput refProp={this.inputName} label='Your name?' error={this.state.fields.name} />
        <TextInput refProp={this.movieName} label='Movie name?' error={this.state.fields.movie} />
        <DateInput
          refProp={this.inputDate}
          label='When did you watch this movie?'
          error={this.state.fields.date}
        />
        <SelectInput
          refProp={this.inputSelect}
          label='What is your mood after the movie?'
          error={this.state.fields.select}
        />
        <CheckBoxInput
          refProp={this.checkBoxesRefs}
          label='What subtitles this movie has?'
          error={this.state.fields.checkBoxes}
        />
        <RadioInput
          refProp={this.radioBoxesRefs}
          label='Rate this movie'
          error={this.state.fields.radioBoxes}
        />
        <FileInput
          refProp={this.inputFile}
          label='Upload your photo'
          error={this.state.fields.image}
        />
        <input type='submit' className='form__submit' value='Send feedback' />
      </form>
    );
  }
}

export default Form;
