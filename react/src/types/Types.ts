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
  image?: string;
  checkBoxes?: string;
  radioBoxes?: string;
};

export type PropsForm = {
  addFeedBackToState: (value: FeedBackCard) => void;
};
