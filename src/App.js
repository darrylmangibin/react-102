import React from 'react';

import Header from './components/Header';
import Actions from './components/Actions';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Actions />
      </React.Fragment>
    )
  }
}

export default App;