import React from 'react';
import './Appdesc.css';

//Banner image and description of application

class Appdesc extends React.Component {
    render() {
      return (
        <div>
      <img className='banner-image' src='https://images.squarespace-cdn.com/content/v1/5b4e0e6a5b409b5848de216a/1536382993388-YJ6HC0RY1XHMX1EH88FD/ke17ZwdGBToddI8pDm48kAiQauKMq5t3zNDTFOhTnlJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0tb-hnCqoepq4X8c1traqO-_NrqY7vRbriOxzaFgT6Y6dynDdRL5TMOOSto-dGo7jQ/smart-food-banner.jpg?format=2500w' alt='' />
      <p className='desc'>Are you tired of the same boring meals day after day? GoodEats helps you find new recipes to try out. Simply enter in an ingredient or dish and find dozens of results! Impress your friends and family with fresh new ideas!</p>
      </div>
      )}
  }

export default Appdesc