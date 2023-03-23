import React, { ChangeEvent, createRef, FormEvent } from 'react';
import TextInput from './FormComponents/TextInput';
import DateInput from './FormComponents/DateInput';
import SelectInput from './FormComponents/SelectInput';
import CheckBoxInput from './FormComponents/CheckBoxInput';
import RadioInput from './FormComponents/RadioInput';
import FileInput from './FormComponents/FileInput';
import { FeedBackCard, PropsForm } from 'types/Types';
import './Form.scss';

type State = {
  validate: boolean;
  fields: {
    name: boolean;
    movie: boolean;
    date: boolean;
    select: boolean;
    checkBoxes: boolean;
    radioBoxes: boolean;
    image: boolean;
  };
};
class Form extends React.Component<PropsForm, State> {
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
  getInfoFeedBack = () => {
    const info = {
      name: this.inputName.current?.value,
      movie: this.movieName.current?.value,
      date: this.inputDate.current?.value.split('-').join('.'),
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
      // imageName this is extension of loaded file
    };
    return info;
  };
  validateDate = (str: string | undefined) => {
    const date = new Date();
    if (str?.slice(0, 4)) {
      if (Number(str?.slice(0, 4)) > date.getFullYear() || Number(str?.slice(0, 4)) < 1970)
        return false;
    }
    if (str?.slice(5, 7)) {
      if (Number(str?.slice(5, 7)) > date.getMonth() + 1) return false;
    }
    if (str?.slice(8)) {
      if (Number(str?.slice(8)) > date.getDate()) return false;
    }
    return true;
  };
  checkValidate = (info: FeedBackCard) => {
    const objValidate: State = {
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
    // const regexpName = /[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}/;
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
        /[0-9]/.test(info.movie) ||
        info.movie.charAt(0) !== info.movie.charAt(0).toUpperCase() ||
        info.movie[0] == ' ' ||
        info.movie[info.movie.length - 1] == ' '
      ) {
        objValidate.fields.movie = false;
      }
    } else objValidate.fields.movie = false;
    if (info.date) {
      objValidate.fields.date = this.validateDate(info.date);
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
    // console.log(resultOfValidationFields);
    // console.log(resultOfValidation);
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
      <>
        <form
          action='#'
          className='form__page form'
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
      </>
    );
  }
}

export default Form;
