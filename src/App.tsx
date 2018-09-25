import * as React from 'react';
import { hot } from 'react-hot-loader';
import Navigation from './components/Navigation';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>React with TypeScript</h1>
        <Navigation />
      </div>
    );
  }
}

export default hot(module)(App);
