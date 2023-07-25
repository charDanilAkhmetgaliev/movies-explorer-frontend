import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HeaderConfig } from '../../config.style';

function Header() {
  const isMain = (window.location.pathname === '/');
  return (
    <header className="header" style={isMain && { backgroundColor: HeaderConfig.introColor }}>
      <div className="header__logo" />
      <Routes>
        <Route
          path="/"
          element={(
            <div className="header__auth-bar">
              <button className="header__register-button" type="button">{HeaderConfig.registerText}</button>
              <button className="header__login-button" type="button">{HeaderConfig.loginText}</button>
            </div>
        )}
        />
        <Route path="*" element={<div className="header__burger-menu" />} />
      </Routes>
    </header>
  );
}

export default Header;
