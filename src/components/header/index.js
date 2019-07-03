import React from 'react';
import Styles from './style.scss';
import Nav from '../nav/index'

const Header = () => {
  return(
    <div class='header'>
      <Nav />
      <h1>React Design Challenge</h1>
    </div>
  );
};

export default Header;