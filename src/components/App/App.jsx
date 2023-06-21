import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from '../Main/Main';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" />
        <Route path="/saved-movies" />
        <Route path="/profile" />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
