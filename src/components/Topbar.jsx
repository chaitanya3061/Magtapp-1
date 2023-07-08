import React, { useState } from 'react';
import pic from './Group 147.png';

const Topbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isToggleDown, setIsToggleDown] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsToggleDown(!isToggleDown);
  };

  return (
    <div className="top-bar">
      <div className="menu">
        <img src={pic} alt="Logo" />
        <a className="left" href="/">
          Home
        </a>
        <a href="/">Advertisement</a>
        <a href="/">Inventory</a>
        <a href="/">Services</a>
        <a href="/">Blog</a>
        <a href="/">About Us</a>
        <a href="/">Contact Us</a>
        <button onClick={toggleDropdown} className="login-button">
          Login {isToggleDown ? <i className="fa fa-angle-down"></i> : <i className="fa fa-angle-up"></i>}
        </button>
        {isDropdownOpen && (
          <div className="dropdown">
            <a href="/">As a Advertiser</a>
            <hr></hr>
            <a href="/">As a Publisher</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
