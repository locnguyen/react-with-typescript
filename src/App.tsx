/**
 *
 */

import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Navigation } from './components/Navigation';

class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <h1>React with TypeScript</h1>
        <Navigation />
      </div>
    );
  }
}

const app: React.ComponentType = hot(module)(App);

export { app as App };
