import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, Logo, Ul, Li } from './styles';

const Navbar = () => (
  <Nav>
    <div>
      <Logo alt="Marvel Logo" />
    </div>
    <Ul>
      <Li>
        <Link to="/">Home</Link>
      </Li>
      <Li>
        <Link to="/favorites">Favorites</Link>
      </Li>
      <Li>
        <Link to="/not-favorites">Not Favorites</Link>
      </Li>
    </Ul>
  </Nav>
);

export default Navbar;
