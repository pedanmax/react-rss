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
  image?: string | File;
  checkBoxes?: string;
  radioBoxes?: string;
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
  label: string;
  refProp: React.RefObject<HTMLInputElement>;
  error: boolean;
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
