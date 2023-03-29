import { UseFormRegister, FieldValues } from 'react-hook-form';

export type StateInput = {
  value: string;
};

export type CardType = {
  title: string;
  img: string;
  views: number;
  year: number;
  country: string;
  genre: string;
};

export type FeedBackCard = {
  name?: string;
  movie?: string;
  date?: string;
  select?: string;
  radio?: string;
  image?: string | FileList | File;
  checkBoxes?: string | string[];
  radioBoxes?: string;
};

export type FeedBackCardFromHook = {
  checkBox?: string | string[];
  date?: string;
  image?: FileList | string;
  movie?: string;
  name?: string;
  radio?: string;
  select?: string;
};

export type PropsForm = {
  addFeedBackToState: (value: FeedBackCard) => void;
};

export type StateForm = {
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

export type InputProps = {
  label?: string;
  refProp: UseFormRegister<FieldValues>;
  error?: string;
  name: string;
};
export type InputPropsText = {
  label: string;
  refProp: UseFormRegister<FieldValues>;
  name: string;
  error?: string;
  validate: ValidateNames;
};

export type SelectInputProps = {
  label: string;
  refProp: React.RefObject<HTMLSelectElement>;
  error: boolean;
};

export type RadioInputProps = {
  label: string;
  refProp: React.RefObject<HTMLInputElement>[];
  error: boolean;
};

export type ValidateNames = {
  firstLetter: (value: string) => boolean | string;
  numbers?: (value: string) => boolean | string;
};
