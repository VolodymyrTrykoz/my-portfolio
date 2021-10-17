import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
  <div className="header">
    <nav className="navigation">
      <Link to={'/my-portfolio'} className="navigation__link">Home</Link>
      <Link to={'/my-portfolio/projects'} className="navigation__link">Projects</Link>
      <Link to={'/my-portfolio/contacts'} className="navigation__link">Contacts</Link>
    </nav>
  </div>
)

export default Header;