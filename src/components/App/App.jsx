import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" />
        <Route path="/movies" />
        <Route path="/saved-movies" />
        <Route path="/profile" />
        <Route path="/signin" />
        <Route path="/signup" />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
