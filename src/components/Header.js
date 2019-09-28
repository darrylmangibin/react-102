import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <h1 className="header__title">Task App</h1>
          <h2 className="header__subtitle">React Component, props, state</h2>
        </div>
      </div>
    )
  }
}

export default Header;