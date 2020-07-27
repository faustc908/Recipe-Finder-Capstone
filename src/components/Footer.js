import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
      return (
      <div className='footer'>
          <p>©Colin Faust 2020</p>
          <p> Powered by 
          <a href='https://developer.edamam.com/' target='_blank' className='link'>Edamam</a></p>
      </div>
      )}
  }

export default Footer