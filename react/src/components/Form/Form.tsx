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
      },
    };
    if (info.name) {
      if (
        info.name?.length < 3 ||
        /[0-9]/.test(info.name) ||
        info.name.charAt(0) !== info.name.charAt(0).toUpperCase()
      ) {
        objValidate.fields.name = false;
      } else {
        objValidate.fields.name = true;
      }
    } else objValidate.fields.name = false;
    if (info.movie) {
      if (info.movie?.length < 3 || info.movie.charAt(0) !== info.movie.charAt(0).toUpperCase()) {
        objValidate.fields.movie = false;
      } else {
        objValidate.fields.movie = true;
      }
    } else objValidate.fields.movie = false;
    if (info.date) {
      objValidate.fields.date = this.validateDate(info.date);
    } else objValidate.fields.date = false;
    if (info.select === 'Default') objValidate.fields.select = false;

    this.setState({ ...objValidate });
  };
  drawNewFeedBack = (e: FormEvent, info: FeedBackCard) => {
    // (e.target as HTMLFormElement).reset();
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
            this.checkValidate(info);
            this.drawNewFeedBack(e, info);
            console.log(info);
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
