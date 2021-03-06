import React from 'react';
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
          <Link to='/' className='m-top--48' onClick={() => setShowMenu(!showMenu)}>
            Home
          </Link>
          <Link to='/work_history' onClick={() => setShowMenu(!showMenu)}>
            Work History
          </Link>
          <div className='side-pane-logo'>
            <Link to='/' onClick={() => setShowMenu(!showMenu)}>
              <img src={Logo} alt='Preston Matheson'/>
            </Link>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Navbar;
