// import React, { useState } from 'react';
// import pic from './Group 147.png';

// const Topbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isToggleDown, setIsToggleDown] = useState(true);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//     setIsToggleDown(!isToggleDown);
//   };
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };
//   return (
//     <>    <div className="top-bar">
//       <div className="menu">
//         <img src={pic} alt="Logo" />
//         <a className="left" href="/">
//           Home
//         </a>
//         <a href="/">Advertisement</a>
//         <a href="/">Inventory</a>
//         <a href="/">Services</a>
//         <a href="/">Blog</a>
//         <a href="/">About Us</a>
//         <a href="/">Contact Us</a>
//         <button onClick={toggleDropdown} className="login-button">
//           Login {isToggleDown ? <i className="fa fa-angle-down"></i> : <i className="fa fa-angle-up"></i>}
//         </button>
//         {isDropdownOpen && (
//           <div className="dropdown">
//             <a href="/">As a Advertiser</a>
//             <hr></hr>
//             <a href="/">As a Publisher</a>
//           </div>
//         )}
//       </div>
//     </div>
//     <div className="top-bar1">
//     <div className="menu">
//       <img src={pic} alt="Logo" />
//       <button className="mobile-menu-button" onClick={toggleMenu}>
//         <i className="fa fa-bars"></i>
//       </button>
//       {isMenuOpen && (
//         <div className="mobile-menu">
//           <a href="/">Home</a>
//           <a href="/">Advertisement</a>
//           <a href="/">Inventory</a>
//           <a href="/">Services</a>
//           <a href="/">Blog</a>
//           <a href="/">About Us</a>
//           <a href="/">Contact Us</a>
       
//         <button onClick={toggleDropdown} className="login-button">
//           Login {isToggleDown ? <i className="fa fa-angle-down"></i> : <i className="fa fa-angle-up"></i>}
//         </button>
//        {isDropdownOpen && (
//          <div className="dropdown">
//            <a href="/">As a Advertiser</a>
//            <hr></hr>
//            <a href="/">As a Publisher</a>
//        </div>
//        )}
//     </div>
//       )}
//     </div>
//   </div>
//   </>

//   );
// };

// export default Topbar;
import React, { useState, useEffect } from 'react';
import pic from './Group 147.png';

const Topbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isToggleDown, setIsToggleDown] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsToggleDown(!isToggleDown);
  };

  const toggleMenu = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize(); // Check initial width on component mount

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="top-bar">
      <div className="menu">
        <img src={pic} alt="Logo" />
        {!isMobileView ? (
          <>
          <div className="nav-links">
            <a className="left" href="/">
              Home
            </a>
            <a href="/">Advertisement</a>
            <a href="/">Inventory</a>
            <a href="/">Services</a>
            <a href="/">Blog</a>
            <a href="/">About Us</a>
            <a href="/">Contact Us</a>
           <a> <button onClick={toggleDropdown} className="login-button">
            Login {isToggleDown ? <i className="fa fa-angle-down"></i> : <i className="fa fa-angle-up"></i>}
          </button></a>
             {isDropdownOpen && (
            <div id="drop" className="dropdown ">
              <a href="/">As an Advertiser</a>
              <hr></hr>
              <a href="/">As a Publisher</a>
            </div>
            )}
          </div>
          </>
        ) : (
          <>
            <button className="mobile-menu-button" onClick={toggleMenu}>
              <i className="fa fa-bars"></i>
            </button>
            {isMobileDropdownOpen && (
              <div className="dropdown">
                <a href="/">Home</a>
                <a href="/">Advertisement</a>
                <a href="/">Inventory</a>
                <a href="/">Services</a>
                <a href="/">Blog</a>
                <a href="/">About Us</a>
                <a href="/">Contact Us</a>
                <div className="mobile-menu">
          <button onClick={toggleDropdown} className="login-button">
            Login {isToggleDown ? <i className="fa fa-angle-down"></i> : <i className="fa fa-angle-up"></i>}
          </button>
          {isDropdownOpen && (
            <div id="drop" className="dropdown">
              <a href="/">As an Advertiser</a>
              <hr></hr>
              <a href="/">As a Publisher</a>
            </div>
          )}
        </div>
              </div>
            )}
          </>
        )}

      </div>

    </div>
  );
};

export default Topbar;
