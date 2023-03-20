import React from 'react';
import { StateInput } from 'types/Types';
import '../../pages/home/Home.scss';

class Search extends React.Component<Record<string, never>, StateInput> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      value: localStorage.getItem('value') ? (localStorage.getItem('value') as string) : '',
    };
  }
  componentWillUnmount() {
    localStorage.setItem('value', this.state.value);
  }
  render() {
    return (
      <>
        <input
          type='search'
          className='home__input'
          placeholder='search...'
          value={this.state.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ value: e.target.value });
          }}
        />
        <button className='home__button'>Search</button>
      </>
    );
  }
}

export default Search;
