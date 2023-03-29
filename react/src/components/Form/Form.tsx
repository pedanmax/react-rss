import React, { createRef, FormEvent, FormEventHandler, useState } from 'react';
import { useForm } from 'react-hook-form';
import TextInput from './FormComponents/TextInput';
import DateInput from './FormComponents/DateInput';
import SelectInput from './FormComponents/SelectInput';
import CheckBoxInput from './FormComponents/CheckBoxInput';
import RadioInput from './FormComponents/RadioInput';
import FileInput from './FormComponents/FileInput';
import { FeedBackCard, PropsForm, StateForm, FeedBackCardFromHook } from 'types/Types';
import './Form.scss';

const Form = ({ addFeedBackToState }: PropsForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit = async (data: FeedBackCardFromHook) => {
    const myCard: FeedBackCard = {
      name: data.name,
      movie: data.movie,
      date: data.date,
      select: data.select,
      checkBoxes: data.checkBox,
      radio: data.radio,
      image: data.image ? data.image[0] : '',
    };
    addFeedBackToState(myCard);
    reset();
  };

  return (
    <form className='form-page__form form' onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        refProp={register}
        name='name'
        label='Your name?'
        error={errors?.name?.message?.toString()}
        validate={{
          firstLetter: (value: string) =>
            value[0] === value[0].toUpperCase() || 'First letter must be uppercase',
          numbers: (value: string) => !/[0-9]/.test(value) || 'Name must be without numbers',
        }}
      />
      <TextInput
        refProp={register}
        name='movie'
        label='Movie name?'
        error={errors.movie?.message?.toString()}
        validate={{
          firstLetter: (value: string) =>
            value[0] === value[0].toUpperCase() || 'First letter must be uppercase',
        }}
      />
      <DateInput
        refProp={register}
        name='date'
        label='When did you watch this movie?'
        error={errors.date?.message?.toString()}
      />
      <SelectInput
        refProp={register}
        name='select'
        label='What is your mood after the movie?'
        error={errors.select?.message?.toString()}
      />
      <CheckBoxInput
        refProp={register}
        label='What subtitles this movie has?'
        error={errors.checkBox?.message?.toString()}
        name={'checkBox'}
      />
      <RadioInput
        refProp={register}
        name='radio'
        label='Rate this movie'
        error={errors.radio?.message?.toString()}
      />
      <FileInput
        refProp={register}
        label='Upload your photo'
        error={errors.image?.message?.toString()}
        name='image'
      />
      <input type='submit' className='form__submit' value='Send feedback' />
    </form>
  );
};

export default Form;
