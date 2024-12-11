import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

export default function Header() {
  return (
    <div className="position-relative">
      <div className="img-overlay-container">
        <img
          className="img-fluid w-100"
          src="header.jpg"
          alt="Snackstack Header"
          style={{
            height: '600px',
            objectFit: 'cover'
          }}
        />
        <div className="img-overlay-text position-absolute top-50 start-50 translate-middle text-start text-white">
        <h1 className="title display-4 fw-bold text-shadow">SNACKSTACK</h1>
          <p className="blurb lead mb-3 text-shadow">
            Stack up on all the recipes you'd ever want and make magic in the kitchen! 
            <br/>
            The ultimate recipe guide for all things delicious!
          </p>
        </div>
      </div>
    </div>
  );
}