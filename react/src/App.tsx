import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import NotFound from './components/notFound/NotFound';
import { Routes, Route, Router } from 'react-router-dom';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
