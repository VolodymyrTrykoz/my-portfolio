import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
  <div className="header">
    <nav className="navigation">
      <Link to={'/'} className="navigation__link">Home</Link>
      <Link to={'/projects'} className="navigation__link">Projects</Link>
      <Link to={'/contacts'} className="navigation__link">Contacts</Link>
    </nav>
  </div>
)

export default Header;