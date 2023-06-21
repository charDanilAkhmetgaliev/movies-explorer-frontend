import React from 'react';
import { Route, Routes } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__logo" />
      <Routes>
        <Route
          path="/"
          element={(
            <div className="header__auth-bar">
              <button className="header__register-button" type="button">Регистрация</button>
              <button className="header__login-button" type="button">Войти</button>
            </div>
        )}
        />
        <Route path="/signin" element={<div className="header__burger-menu" type="button" />} />
      </Routes>
    </header>
  );
}

export default Header;
