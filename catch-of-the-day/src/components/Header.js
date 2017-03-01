import React from 'react';

//If you only need to render HTML use what is called a "Stateless Functional Component".
  const Header = (props) => {
    return (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">Of</span>
            <span className="the">The</span>
          </span>
          Day
        </h1>
        <h3 className="tagline"><span>{props.tagline}</span></h3>
      </header>
    );
  };

export default Header;
