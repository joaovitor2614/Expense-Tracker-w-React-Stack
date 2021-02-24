import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'


const Header = ({ startLogout }) => (
  <header className="header">
    <div className='content-container'>
      <div className="header__content">
        <Link className="header__title" to="/">
          <p>Dashboard</p>
        </Link>
        <Link className="header__sub-title" to="/create">
          <p>Criar item</p>
        </Link>
        <Link className="header__sub-title" to="/list">
          <p>Lista</p>
        </Link>
        <button className='button button--logout' onClick={startLogout}>Logout</button>



      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header)
