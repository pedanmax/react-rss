import React from 'react';
import Header from './components/Header/Header';
import Router from './routes/router';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <Router />
      </main>
    </div>
  );
};

export default App;
