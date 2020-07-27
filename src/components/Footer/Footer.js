import React from 'react';
import './Footer.css';

//Footer with link to API

class Footer extends React.Component {
    render() {
      return (
      <div className='footer'>
          <p>©Colin Faust 2020</p>
          <p> Powered by 
          <a href='https://developer.edamam.com/' target='_blank' rel="noopener noreferrer" className='link'>Edamam</a></p>
      </div>
      )}
  }

export default Footer