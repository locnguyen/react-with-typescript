/**
 *
 */

import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Home } from './Home';
import { LoginForm } from './LoginForm';

const Navigation: React.SFC = (): React.ReactElement<{}> => (
  <nav>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
        <div>
          <Route path="/login" component={LoginForm} />
          <Route path="/home" component={Home} />
        </div>
      </div>
    </Router>
  </nav>
);

export { Navigation };
