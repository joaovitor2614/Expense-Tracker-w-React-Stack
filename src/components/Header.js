import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/">
          <h1>Home</h1>
        </Link>
        <Link className="header__title" to="/create">
          <h1>Criar item</h1>
        </Link>
        <Link className="header__title" to="/list">
          <h1>Lista</h1>
        </Link>

      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default Header
