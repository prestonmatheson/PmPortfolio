import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from './black-logo.png';
function Navbar(props) {
  const [showMenu, setShowMenu] = useState(false);
  let hamburgerClasses = 'hamburger-menu';
  hamburgerClasses += showMenu ? ' hamburger-menu--open' : '';
  
  return (
    <React.Fragment>
      <div className='hamburger-menu-container' onClick={() => setShowMenu(!showMenu)}>
        <div className={hamburgerClasses} />
        <div className={hamburgerClasses} />
        <div className={hamburgerClasses} />
      </div>
      { showMenu && (
        <div className='side-pane'>
          <Link to='/' className='m-top--48'>
            Home
          </Link>
          <Link to='/work_history'>
            Work History
          </Link>
          <div className='side-pane-logo'>
            <Link to='/'>
              <img src={Logo} />
            </Link>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Navbar;
