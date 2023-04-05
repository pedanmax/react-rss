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

export type CardFromAPI = {
  title: string;
  release_date: string;
  id: number;
  poster_path: string;
  getModalInfoCard: (obj: object) => void;
  changeModalState: ChangeModalState;
};

export type Genre = { id: number; name: string };

export type ModalCardType = {
  title?: string;
  poster_path?: string;
  release_date?: string;
  genres?: Genre[];
  budget?: string;
  overview?: string;
  homepage?: string;
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
  state?: boolean;
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

export type GetCardsFunc = (param: string) => void;

export type ChangeLoading = (value: boolean) => void;

export type ChangeModalState = (value: boolean) => void;

export type Props = {
  loading: ChangeLoading;
};
