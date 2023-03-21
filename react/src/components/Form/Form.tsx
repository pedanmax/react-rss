import React from 'react';
import TextInput from './FormComponents/textInput';
import DateInput from './FormComponents/DateInput';
import './Form.scss';
import SelectInput from './FormComponents/SelectInput';
import CheckBoxInput from './FormComponents/CheckBoxInput';
import RadioInput from './FormComponents/RadioInput';
import FileInput from './FormComponents/FileInput';

class Form extends React.Component {
  render() {
    return (
      <form action='#' className='form'>
        <TextInput label='Your name?' />
        <TextInput label='Movie name?' />
        <DateInput label='When did you watch this movie?' />
        <SelectInput label='What is your mood after the movie?' />
        <CheckBoxInput label='What subtitles this movie has?' />
        <RadioInput label='Rate this movie' />
        <FileInput label='Upload your photo' />
        <input type='submit' className='form__submit' value='Send feedback' />
      </form>
    );
  }
}

export default Form;
