import React from 'react';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import NotFound from '../pages/NotFound/NotFound';
import Form from '../pages/FormPage/FormPage';
import { Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/form' element={<Form />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
};

export default Router;
