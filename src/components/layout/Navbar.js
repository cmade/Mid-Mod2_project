import React from 'react';

const Navbar = ({ icon, title }) => {
  return (
    <div>
      <nav className='navbar bg-primary'>
        <h1>
          <i className={icon}></i>
          {title}
        </h1>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Code Pop Media',
  icon: 'far fa-grin-beam',
};

export default Navbar;
