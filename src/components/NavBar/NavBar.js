import React from 'react';
import './NavBar.css';

//Add favicon

class NavBar extends React.Component {
    render() {
      return (
      <div className='navbar'>
          <p className='texta'>GoodEats Recipe Finder</p>
          <p className='textb'>Search for new recipes</p>
      </div>
      )}
  }

export default NavBar