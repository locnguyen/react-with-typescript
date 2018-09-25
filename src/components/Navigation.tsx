import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import Home from './Home';

const Navigation = () => (
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

export default Navigation;
