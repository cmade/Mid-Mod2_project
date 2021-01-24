import React from 'react';
//Functional component that passes an icon and title properties
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
//Default props if the props don't load
Navbar.defaultProps = {
  title: 'Top Github Profiles',
  icon: 'far fa-grin-beam',
};
//Export the navbar component
export default Navbar;
