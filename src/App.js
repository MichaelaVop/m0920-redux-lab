import React, { Component } from 'react';

import PersonsDep from './containers/PersonsDep';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ol>
          <li>Turn this app into one which does NOT use local state (in components) but instead uses Redux</li>
        </ol>
        <PersonsDep />
      </div>
    );
  }
}

export default App;
